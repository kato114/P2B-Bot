import { CaretUpOutlined, MinusOutlined } from "@ant-design/icons";
import { Row, Col, Divider } from "antd";

export const Overview = () => {
  return (
    <>
      <Row>
        <Col span="24">
          <p>Portfolio Value</p>
        </Col>
        <Col span="24">
          <h3 style={{ fontSize: "30px!important" }}>$2,000.00</h3>
          <small>
            <span style={{ color: "green" }}>
              <CaretUpOutlined />
              $0.00 (0.00%)
            </span>{" "}
            Past Week
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
          <p>Buying Power</p> <p>$40,000.00</p>
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
