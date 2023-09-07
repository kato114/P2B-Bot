import { Row, Col } from "antd";
import { Link } from "react-router-dom";

import { Button, Select, Input, Card } from "antd";

import USDC_IMG from "../../assets/img/tokens/USDC.png";
import { SwapRightOutlined } from "@ant-design/icons";

export const Deposit = () => {
  return (
    <>
      <Row>
        <Col span="12">
          <Link to="/deposit">
            <Button block>Deposit</Button>
          </Link>
        </Col>
        <Col span="12">
          <Link to="/withdraw">
            <Button block>Withdraw</Button>
          </Link>
        </Col>
      </Row>
      <Row>
        <Col span="24">
          <p>Asset</p>
        </Col>
        <Col span="24">
          <Select
            size="large"
            style={{ width: "100%" }}
            defaultValue="USDC"
            options={[
              {
                value: "USDC",
                label: (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <img src={USDC_IMG} alt="USDC LOGO" width="25px" />
                    <span>USD Coin</span>
                    <code>USDC</code>
                  </div>
                ),
              },
            ]}
          />
        </Col>
      </Row>
      <Row>
        <Col span="24">
          <p>Amount</p>
        </Col>
        <Col span="24">
          <Input size="large" placeholder="0" />
        </Col>
      </Row>
      <Row>
        <Col span="24">
          <Card
            actions={[
              <Button type="primary" block>
                Confirm Deposit
              </Button>,
            ]}
          >
            <Row style={{ justifyContent: "space-between" }}>
              <Col>
                <small>
                  Equity <code>USD</code>
                </small>
              </Col>
              <Col>
                <small>$2,000.00</small>
                <SwapRightOutlined />
                <small>$4,000.00</small>
              </Col>
            </Row>
            <Row style={{ justifyContent: "space-between" }}>
              <Col>
                <small>Buying Power</small>
              </Col>
              <Col>
                <small>$40,000.00</small>
                <SwapRightOutlined />
                <small>$80,000.00</small>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </>
  );
};
