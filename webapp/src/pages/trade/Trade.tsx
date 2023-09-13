import React, { useState } from "react";
import { Row, Col, Divider, Select, Typography } from "antd";
import { CaretDownOutlined } from "@ant-design/icons";

import { TRADE_TYPE } from "../../config/constant";

import { LimitOrder } from "./components/LimitOrder";
import { MarketOrder } from "./components/MarketOrder";
import { StopLimit } from "./components/StopLimit";
import { StopMarket } from "./components/StopMarket";
import { TakeProfitLimit } from "./components/TakeProfitLimit";
import { TakeProfitMarket } from "./components/TakeProfitMarket";
import { TrailingStop } from "./components/TrailingStop";

import ETH_LOGO from "../../assets/img/tokens/ETH.png";
import { MarketList } from "./components/MarketList";

const { Text, Link } = Typography;

export const Trade: React.FC = () => {
  const [orderType, setOrderType] = useState(TRADE_TYPE.LimitOrder);

  const [showMarketList, setShowMarketList] = useState(false);

  return (
    <>
      <Row>
        <Col
          span={16}
          style={{ borderRight: "1px solid #dadada", padding: "0px 10px" }}
        >
          <Row
            onClick={() => {
              setShowMarketList(true);
            }}
            style={{
              justifyContent: "space-between",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            <Col>
              <Row
                style={{
                  alignItems: "center",
                  gap: "5px",
                }}
              >
                <Col>
                  <img src={ETH_LOGO} alt="Market_LOGO" width="30px" />
                </Col>
                <Col>
                  <p>Ethereum</p>
                  <small>ETH-USD</small>
                </Col>
              </Row>
            </Col>
            <Col>
              <CaretDownOutlined />
            </Col>
          </Row>
        </Col>
        <Col span={8} style={{ textAlign: "right", padding: "0px 10px" }}>
          <p style={{ color: "#fd5252" }}>$1,660.1</p>
          <small style={{ color: "#fd5252" }}>
            <CaretDownOutlined />
            2.22%
          </small>
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col span="24">
          <Text>Order Type</Text>
        </Col>
        <Col span={24}>
          <Select
            size="large"
            style={{ width: "100%" }}
            defaultValue={TRADE_TYPE.LimitOrder}
            onChange={setOrderType}
            options={[
              { value: TRADE_TYPE.LimitOrder, label: "Limit Order" },
              { value: TRADE_TYPE.MarketOrder, label: "Market Order" },
              { value: TRADE_TYPE.StopLimit, label: "Stop Limit" },
              { value: TRADE_TYPE.StopMarket, label: "Stop Market" },
              { value: TRADE_TYPE.TakeProfitLimit, label: "Take Profit Limit" },
              {
                value: TRADE_TYPE.TakeProfitMarket,
                label: "Take Profit Market",
              },
              { value: TRADE_TYPE.TrailingStop, label: "Trailing Stop" },
            ]}
          />
        </Col>
      </Row>
      {orderType == TRADE_TYPE.LimitOrder && <LimitOrder />}
      {orderType == TRADE_TYPE.MarketOrder && <MarketOrder />}
      {orderType == TRADE_TYPE.StopLimit && <StopLimit />}
      {orderType == TRADE_TYPE.StopMarket && <StopMarket />}
      {orderType == TRADE_TYPE.TakeProfitLimit && <TakeProfitLimit />}
      {orderType == TRADE_TYPE.TakeProfitMarket && <TakeProfitMarket />}
      {orderType == TRADE_TYPE.TrailingStop && <TrailingStop />}
      {showMarketList && (
        <MarketList
          setShowMarketList={() => {
            setShowMarketList(false);
          }}
        />
      )}
    </>
  );
};
