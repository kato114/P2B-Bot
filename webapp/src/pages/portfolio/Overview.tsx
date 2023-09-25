import { CaretUpOutlined, MinusOutlined } from "@ant-design/icons";
import { Row, Col, Divider } from "antd";

interface OverviewProps {
  userData: any;
}

export const Overview: React.FC<OverviewProps> = ({ userData }) => {
  console.log(userData);

  return (
    <>
      <Row>
        <Col span="24">
          <p>Portfolio Value</p>
        </Col>
        <Col span="24">
          <h3 style={{ fontSize: "30px!important" }}>
            ${Number(userData.account.quoteBalance).toFixed(2)}
          </h3>
          <small>
            <span style={{ color: "green" }}>
              <CaretUpOutlined />$
              {Number(
                userData.profilePrivate.tradingPnls.absolutePnl30D
              ).toFixed(2)}{" "}
              (
              {Number(
                userData.profilePrivate.tradingPnls.percentPnl30D
              ).toFixed(2)}
              %)
            </span>
          </small>
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col span="10">
          <p>Leverage</p>
          <p>
            <MinusOutlined />
          </p>
        </Col>
        <Col span="2" style={{ display: "flex", justifyContent: "center" }}>
          <Divider type="vertical" style={{ height: "100%" }} />
        </Col>
        <Col span="10">
          <p>Buying Power</p>{" "}
          <p> ${Number(userData.account.quoteBalance * 20).toFixed(2)}</p>
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col span="24">
          <h3>Open Positions</h3>
          <p>You have no open positions</p>
        </Col>
      </Row>
    </>
  );
};
