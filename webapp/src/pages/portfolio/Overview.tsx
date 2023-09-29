import { CaretUpOutlined, MinusOutlined } from "@ant-design/icons";
import { Row, Col, Divider } from "antd";
import { Link } from "react-router-dom";

interface OverviewProps {
  userData: any;
}

export const Overview: React.FC<OverviewProps> = ({ userData }) => {
  return (
    <>
      <Row>
        <Col span="24">
          <p>Portfolio Value</p>
        </Col>
        <Col span="24">
          <h3 style={{ fontSize: "30px!important" }}>
            ${Number(userData.account.equity).toFixed(2)}
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
      {/* <Row>
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
          <p> ${Number(userData.account.freeCollateral * 20).toFixed(2)}</p>
        </Col>
      </Row> */}
      <Divider />
      <Row>
        <Col span="24">
          <h3>Open Positions</h3>
          {userData.positions.length == 0 ?
            <p>You have no open positions</p> :
            <div>
              <Row >
                <Col span="8">
                  <p>Market</p>
                  <small>Side</small>
                </Col>
                <Col span="6" style={{ textAlign: "right" }}>
                  <p>Size</p>
                  <small>Leverage</small>
                </Col>
                <Col span="10" style={{ textAlign: "right" }}>
                  <p>Unrealized P&L</p>
                  <small>Realized P&L</small>
                </Col>
              </Row>
              <Divider />
              {userData.positions.map((item: any, index: any) => (
                item.size > 0 &&
                <Link key={index} to={`/position/${item.market}`} style={{ color: "inherit" }}>
                  <Row style={{ marginTop: "10px" }}>
                    <Col span="2">
                      <img
                        src={require(`../../assets/img/tokens/${item.market
                          .split("-")[0]
                          .toLowerCase()}.svg`)}
                        style={{ width: "100%", maxWidth: "30px" }}
                      />
                    </Col>
                    <Col span="6">
                      <p>{item.market}</p>
                      <small>{item.side}</small>
                    </Col>
                    <Col span="6" style={{ textAlign: "right" }}>
                      <p>{item.size}</p>
                      <small>{Number(item.entryPrice).toFixed(2)}</small>
                    </Col>
                    <Col span="10" style={{ textAlign: "right" }}>
                      <p>{Number(item.unrealizedPnl).toFixed(2)}</p>
                      <small>{Number(item.realizedPnl).toFixed(2)}</small>
                    </Col>
                  </Row>
                </Link>
              ))}
            </div>
          }
        </Col>
      </Row>
    </>
  );
};
