import React from "react";
import {
  Col,
  Row,
  Radio,
  Input,
  Select,
  Typography,
  Checkbox,
  Card,
  Button,
} from "antd";
import { CaretUpFilled, CloseOutlined } from "@ant-design/icons";

import ETH_LOGO from "../../../assets/img/tokens/ETH.png";

export const MarketList: React.FC<{
  setShowMarketList: any;
}> = ({ setShowMarketList }) => {
  const tokenList = [
    {
      name: "Ethereum",
      symbol: "ETH",
    },
    {
      name: "Bitcoin",
      symbol: "BTC",
    },
    {
      name: "Enjin",
      symbol: "ENJ",
    },
    ,
    {
      name: "Chainlink",
      symbol: "LINK",
    },
    ,
    {
      name: "Uniswap",
      symbol: "UNI",
    },
  ];

  return (
    <div className="marketList">
      <Row style={{ justifyContent: "space-between" }}>
        <Col>Market List</Col>
        <Col>
          <CloseOutlined
            onClick={() => {
              setShowMarketList();
            }}
          />
        </Col>
      </Row>
      <>
        {tokenList.forEach((token) => {
          return (
            <Row style={{ justifyContent: "space-between" }}>
              <Col
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <img src={ETH_LOGO} />
                <span>{token?.name}</span>
                <code>{token?.symbol}</code>
              </Col>
              <Col>
                <p>$1692.6</p>
                <p>
                  <small>
                    <CaretUpFilled /> 0.53%{" "}
                  </small>
                </p>
              </Col>
            </Row>
          );
        })}
      </>
    </div>
  );
};
