import axios from "axios";
import { ethers } from "ethers";
import { generateKeyPairUnsafe } from "@dydxprotocol/starkex-lib";

import UsersModel from "../models/users.model.js";
import {
  NETWORK_ID,
  DYDX_API_URL,
  WEB3_RPC_URL,
  RETURN_STATUS,
  USER_STATUS,
} from "../config/constants.js";

export function create(req, res) {
  if (!req.params.tg_id) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  try {
    UsersModel.findUserByTelegramID(req.params.tg_id, async (err, data) => {
      if (err) {
        if (err.kind == "not_found") {
          console.log("Start creating new account");

          const eth_wallet = ethers.Wallet.createRandom();

          const user_data = { tg_id: req.params.tg_id };
          user_data.eth_phrase = eth_wallet._mnemonic().phrase;
          user_data.eth_prvkey = eth_wallet._signingKey().privateKey;
          user_data.eth_address = eth_wallet.address;

          const stk_wallet = generateKeyPairUnsafe();
          user_data.stk_prvkey = stk_wallet.privateKey;
          user_data.stk_pubkey = stk_wallet.publicKey;
          user_data.stk_yordkey = stk_wallet.publicKeyYCoordinate;

          const provider = new ethers.providers.JsonRpcProvider(WEB3_RPC_URL);

          const wallet = new ethers.Wallet(user_data.eth_prvkey, provider);
          const signer = wallet.connect(provider);

          const domain = { name: "dYdX", version: "1.0", chainId: NETWORK_ID };
          const types = {
            dYdX: [{ type: "string", name: "action" }],
          };
          const value = { action: "dYdX Onboarding" };

          if (NETWORK_ID === 1) {
            types.dYdX.push({ type: "string", name: "onlySignOn" });
            value.onlySignOn = "https://trade.dydx.exchange";
          }

          const signature = await signer._signTypedData(domain, types, value);

          axios
            .post(
              DYDX_API_URL + "v3/onboarding",
              {
                starkKey: user_data.stk_pubkey,
                starkKeyYCoordinate: user_data.stk_yordkey,
              },
              {
                headers: {
                  "Dydx-Ethereum-Address": user_data.eth_address,
                  "Dydx-Signature": signature + "00",
                },
              }
            )
            .then(function (response) {
              user_data.public_id = response.data.user.publicId;

              user_data.dydx_apikey = response.data.apiKey.key;
              user_data.dxdy_passphrase = response.data.apiKey.passphrase;
              user_data.dxdy_secret = response.data.apiKey.secret;

              user_data.user_status = USER_STATUS.ACTIVE;
              user_data.create_date = response.data.account.createdAt;

              UsersModel.registerUser(user_data, async (err, data) => {
                if (err) {
                  res.send({
                    succeed: RETURN_STATUS.FAILED,
                    message: "Server error.",
                  });
                } else {
                  res.send({
                    succeed: RETURN_STATUS.SUCCEED,
                    message: "User created successfully.",
                  });
                }
              });
            })
            .catch(function (error) {
              console.log("error", error);
            });
        } else {
          res.send({
            succeed: RETURN_STATUS.FAILED,
            message: "Server error.",
          });
        }
      } else {
        res.send({
          succeed: RETURN_STATUS.FAILED,
          message: "Account already created.",
        });
      }
    });
  } catch (error) {
    res.send({
      succeed: RETURN_STATUS.FAILED,
      message: "Server error.",
    });
  }
}

export function onboarding(req, res) {
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  res.send({ succeed: RETURN_STATUS.SUCCEED, tgId: req.params.tg_id });
}
