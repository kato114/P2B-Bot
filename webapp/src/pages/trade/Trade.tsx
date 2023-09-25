import React, { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

import { Row, Col, Divider, Select, Typography } from "antd";
import { CaretDownOutlined, CaretUpOutlined } from "@ant-design/icons";

import axios from "axios";

import { API_URL, TRADE_TYPE } from "../../config/constant";

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

interface TradeProps {
  userData: any;
}

export const Trade: React.FC<TradeProps> = ({ userData }) => {
  console.log(localStorage.getItem("tgid"));
  const [orderType, setOrderType] = useState(TRADE_TYPE.LimitOrder);

  const [marketList, setMarketList] = useState([]);
  const [currentMarket, setCurrentMarket] = useState("ETH-USD");
  const [showMarketList, setShowMarketList] = useState(false);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(API_URL + "/dydx/markets")
      .then((response) => {
        if (response.data.succeed) {
          setMarketList(response.data.data.markets);
          console.log(response.data.data.markets);
          setLoading(false);
        }
      })
      .catch((error) => {});
  }, []);

  const getCurrentMarket = (marketKey: string, dataKey: string) => {
    for (let key in marketList) {
      if (key == marketKey) {
        return marketList[key][dataKey];
      }
    }
    return "";
  };

  return (
    <>
      {console.log(
        `../../../assets/img/tokens/${currentMarket
          .split("-")[0]
          .toLowerCase()}.svg`
      )}
      {loading === false && Object.keys(marketList).length > 0 ? (
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
                      <img
                        src={require(`../../assets/img/tokens/${currentMarket
                          .split("-")[0]
                          .toLowerCase()}.svg`)}
                        style={{ width: "30px" }}
                      />
                    </Col>
                    <Col>
                      <p>{getCurrentMarket(currentMarket, "baseAsset")}</p>
                      <small>{currentMarket}</small>
                    </Col>
                  </Row>
                </Col>
                <Col>
                  <CaretDownOutlined />
                </Col>
              </Row>
            </Col>
            <Col span={8} style={{ textAlign: "right", padding: "0px 10px" }}>
              <p
                style={{
                  color:
                    Number(getCurrentMarket(currentMarket, "priceChange24H")) >
                    0
                      ? "#5298fd"
                      : "#fd5252",
                }}
              >
                $
                {Number(getCurrentMarket(currentMarket, "indexPrice")).toFixed(
                  2
                )}
              </p>
              <small
                style={{
                  color:
                    Number(getCurrentMarket(currentMarket, "priceChange24H")) >
                    0
                      ? "#5298fd"
                      : "#fd5252",
                }}
              >
                {Number(getCurrentMarket(currentMarket, "priceChange24H")) >
                0 ? (
                  <CaretUpOutlined />
                ) : (
                  <CaretDownOutlined />
                )}
                {(
                  (Number(getCurrentMarket(currentMarket, "priceChange24H")) /
                    Number(getCurrentMarket(currentMarket, "indexPrice"))) *
                  100
                ).toFixed(2)}
                %
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
                  {
                    value: TRADE_TYPE.TakeProfitLimit,
                    label: "Take Profit Limit",
                  },
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
              marketList={marketList}
              setCurrentMarket={setCurrentMarket}
              setShowMarketList={() => {
                setShowMarketList(false);
              }}
            />
          )}
        </>
      ) : (
        <div style={{ textAlign: "center", paddingTop: "48vh" }}>
          Loading...
        </div>
      )}
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
};
