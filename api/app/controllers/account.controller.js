import axios from "axios";
import { Web3 } from "web3";
import BigNumber from "bignumber.js";
import { generateKeyPairUnsafe } from "@dydxprotocol/starkex-lib";

import UsersModel from "../models/users.model.js";
import { DYDX_API_URL, WEB3_RPC_URL, STATUS } from "../config/constants.js";

const web3 = new Web3(WEB3_RPC_URL);

export function create(req, res) {
  if (!req.params.tg_id) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  UsersModel.findUserByTelegramID(req.params.tg_id, async (err, data) => {
    if (err) {
      if (err.kind == "not_found") {
        console.log("Create new");

        const eth_wallet = web3.eth.accounts.create();
        const stk_wallet = generateKeyPairUnsafe();

        // const message = { action: "dYdX Onboarding" };
        const message = {
          types: {
            EIP712Domain: [
              { name: "name", type: "string" },
              { name: "version", type: "string" },
              { name: "chainId", type: "uint256" },
            ],
            dYdX: [{ type: "string", name: "action" }],
          },
          domain: { name: "dYdX", version: "1.0", chainId: 5 },
          primaryType: "dYdX",
          message: { action: "dYdX Onboarding" },
        };

        const serializedData = JSON.stringify(message);
        console.log(serializedData);
        const hash = web3.utils.sha3(serializedData);

        // On mainnet, include an extra onlySignOn parameter.
        // if (this.networkId === 1) {
        //   message.onlySignOn = 'https://trade.dydx.exchange';
        // }

        // console.log(getHash());

        const signData = web3.eth.accounts.sign(
          // web3.eth.accounts.hashMessage(JSON.stringify(message)),
          // '{"types":{"EIP712Domain":[{"name":"name","type":"string"},{"name":"version","type":"string"},{"name":"chainId","type":"uint256"}],"dYdX":[{"type":"string","name":"action"}]},"domain":{"name":"dYdX","version":"3.0","chainId":5},"primaryType":"dYdX","message":{"action":"dYdX Onboarding"}}',
          // "0xc6e26108063599da06fc86b900ca5f349c4fe281bc57ee758dbf04dda7d36f44",
          hash,
          "0x3117d34c401bc506c7c0422ce25815e40e35a490fa6b28889c019d26f55d8f2f"
        );

        console.log(signData);

        axios
          .post(
            DYDX_API_URL + "v3/onboarding",
            {
              starkKey: stk_wallet.publicKey,
              starkKeyYCoordinate: stk_wallet.publicKeyYCoordinate,
            },
            {
              headers: {
                "Dydx-Ethereum-Address": eth_wallet.address,
                "Dydx-Signature": signData.signature + "00",
              },
            }
          )
          .then(function (response) {
            console.log("response", response.data);
          })
          .catch(function (error) {
            console.log("error", error.response.data);
          });

        res.send({
          succeed: STATUS.SUCCEED,
          message: "User created successfully.",
        });
      } else {
        res.send({
          succeed: STATUS.FAILED,
          message: "Server error.",
        });
      }
    } else {
      res.send({
        succeed: STATUS.FAILED,
        message: "Account already created.",
      });
    }
  });
}

function hashString(input) {
  const hash = web3.utils.soliditySha3({ t: "string", v: input });
  if (hash === null) {
    throw new Error(`soliditySha3 input was empty: ${input}`);
  }
  return hash;
}

function getHash() {
  const data = [
    {
      type: "bytes32",
      value: (0, hashString)("dYdX(" + "string action" + ")"),
    },
    {
      type: "bytes32",
      value: (0, hashString)("dYdX Onboarding"),
    },
  ];
  // if (this.networkId === 1) {
  //     data.push({ type: 'bytes32', value: web3.utils.soliditySha3({ type: 'string', value: ('https://trade.dydx.exchange') })});
  // }

  const structHash = web3.utils.soliditySha3(...data);

  const domainHash = web3.utils.soliditySha3(
    {
      type: "bytes32",
      value: web3.utils.soliditySha3(
        "EIP712Domain(string name,string version,uint256 chainId)"
      ),
    },
    { type: "bytes32", value: web3.utils.soliditySha3("dYdX") },
    { type: "bytes32", value: web3.utils.soliditySha3("1.0") },
    { type: "uint256", value: new BigNumber(5).toFixed(0) }
  );
  console.log("data11111111111111111", domainHash);

  const hash = web3.utils.soliditySha3(
    { type: "bytes2", value: "0x1901" },
    { type: "bytes32", value: domainHash },
    { type: "bytes32", value: structHash }
  );

  return hash;
}

export function onboarding(req, res) {
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  res.send({ succeed: STATUS.SUCCEED, tgId: req.params.tg_id });
}

// exports.update = (req, res) => {
//   if (!req.body) {
//     res.status(400).send({
//       message: "Content can not be empty!",
//     });
//   }

//   Transaction.updateById(
//     req.params.id,
//     new Transaction(req.body),
//     (err, data) => {
//       if (err) {
//         if (err.kind === "not_found") {
//           res.status(404).send({
//             message: `Not found Transaction with id ${req.params.id}.`,
//           });
//         } else {
//           res.status(500).send({
//             message: "Error updating Transaction with id " + req.params.id,
//           });
//         }
//       } else res.send(data);
//     }
//   );
// };

// exports.findLastBlockNumberByChainId = (req, res) => {
//   Transaction.findLastBlockNumberByChainId(req.params.chainId, (err, data) => {
//     if (err) {
//       res.send({ status: 2, data: null });
//     } else res.send({ status: 1, data: data });
//   });
// };

// exports.findPendingTxn = (req, res) => {
//   Transaction.findPendingTxn((err, data) => {
//     if (err) {
//       console.log(err);
//       res.send({ status: 2, data: null });
//     } else res.send({ status: 1, data: data });
//   });
// };

// exports.findOne = (req, res) => {
//   Transaction.findByFromTxn(req.params.hash, (err, data) => {
//     if (err) {
//       if (err.kind === "not_found") {
//         res.status(404).send({
//           message: `Not found Transaction with hash ${req.params.hash}.`,
//         });
//       } else {
//         res.status(500).send({
//           message: "Error retrieving Transaction with hash " + req.params.hash,
//         });
//       }
//     } else res.send({ status: 1, data: data });
//   });
// };

// exports.findHistory = (req, res) => {
//   const address = req.params.address;

//   Transaction.getTotalCount(address, (err, data1) => {
//     if (err) {
//       res.send({
//         status: 1,
//         data: [],
//         page: 1,
//         total: 0,
//       });
//     } else {
//       Transaction.getAll(address, req.query.page, (err, data) => {
//         if (err)
//           res.status(500).send({
//             message:
//               err.message ||
//               "Some error occurred while retrieving transactions.",
//           });
//         else
//           res.send({
//             status: 1,
//             data: data,
//             page: req.query.page,
//             total: data1.total,
//           });
//       });
//     }
//   });
// };

// exports.findAllPublished = (req, res) => {
//   Transaction.getAllPublished((err, data) => {
//     if (err)
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while retrieving transactions.",
//       });
//     else res.send(data);
//   });
// };

// exports.delete = (req, res) => {
//   Transaction.remove(req.params.id, (err, data) => {
//     if (err) {
//       if (err.kind === "not_found") {
//         res.status(404).send({
//           message: `Not found Transaction with id ${req.params.id}.`,
//         });
//       } else {
//         res.status(500).send({
//           message: "Could not delete Transaction with id " + req.params.id,
//         });
//       }
//     } else res.send({ message: `Transaction was deleted successfully!` });
//   });
// };

// exports.deleteAll = (req, res) => {
//   Transaction.removeAll((err, data) => {
//     if (err)
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while removing all transactions.",
//       });
//     else res.send({ message: `All Transactions were deleted successfully!` });
//   });
// };
