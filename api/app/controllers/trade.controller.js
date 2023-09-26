import { Web3 } from "web3";
import { ethers } from "ethers";

import { DydxClient, OrderSide, OrderType, TimeInForce, Market } from "@dydxprotocol/v3-client";

import {
  NETWORK_ID,
  WEB3_RPC_URL,
  DYDX_API_URL,
  RETURN_STATUS,
} from "../config/constants.js";

import UsersModel from "../models/users.model.js";

export const openOrder = async (req, res) => {
  if (!req.params.tg_id) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  UsersModel.findUserByTelegramID(req.params.tg_id, async (err, data) => {
    if (err) {
      if (err.kind == "not_found") {
        res.send({
          succeed: RETURN_STATUS.FAILED,
          message: "Account was not created.",
        });
      } else {
        res.send({
          succeed: RETURN_STATUS.FAILED,
          message: "Server error.",
        });
      }
    } else {
      const web3 = new Web3(WEB3_RPC_URL);
      web3.eth.accounts.wallet.add(data.eth_prvkey);

      const client = new DydxClient(DYDX_API_URL, {
        web3: web3,
        web3Provider: WEB3_RPC_URL,
        networkId: NETWORK_ID,
        apiKeyCredentials: {
          key: data.dydx_apikey,
          secret: data.dxdy_secret,
          passphrase: data.dxdy_passphrase,
        },
        starkPrivateKey: data.stk_prvkey,
      });

      const { account } = await client.private.getAccount(data.eth_address);
    
      
      const order = await client.private.createOrder(
        {
          market: req.body.market,
          side: req.body.side,
          type: req.body.type,
          timeInForce: req.body.timeInForce, 
          postOnly: req.body.postOnly,
          size: req.body.size,
          price: req.body.price,
          limitFee: req.body.limitFee,
          expiration: '2023-12-21T21:30:20.200Z',
        },
        account.positionId, // required for creating the order signature
      );

      res.send({
        succeed: RETURN_STATUS.SUCCEED,
        message: "Check balance after about 5 minnutes.",
        data : order
      });
    }
  });
}

export const getOrder = async (req, res) => {
  if (!req.params.tg_id) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  UsersModel.findUserByTelegramID(req.params.tg_id, async (err, data) => {
    if (err) {
      if (err.kind == "not_found") {
        res.send({
          succeed: RETURN_STATUS.FAILED,
          message: "Account was not created.",
        });
      } else {
        res.send({
          succeed: RETURN_STATUS.FAILED,
          message: "Server error.",
        });
      }
    } else {
      const web3 = new Web3(WEB3_RPC_URL);
      web3.eth.accounts.wallet.add(data.eth_prvkey);

      const client = new DydxClient(DYDX_API_URL, {
        web3: web3,
        web3Provider: WEB3_RPC_URL,
        networkId: NETWORK_ID,
        apiKeyCredentials: {
          key: data.dydx_apikey,
          secret: data.dxdy_secret,
          passphrase: data.dxdy_passphrase,
        },
        starkPrivateKey: data.stk_prvkey,
      });

      const allOrders = await client.private.getOrders(
        {
          market: req.body.market,
          side: req.body.side,
          type: req.body.type,
          limit: req.body.limit,
        },
      );
      const allFills = await client.private.getFills(
        {
          market: req.body.market,
        },
      );

      res.send({
        succeed: RETURN_STATUS.SUCCEED,
        message: "Wait a moment to be confirmed.",
        data: {
          order: allOrders,
          allFills: allFills,
        }
      });
    }
  });
}