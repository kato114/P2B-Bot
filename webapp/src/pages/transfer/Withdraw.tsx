import { Row, Col } from "antd";
import { Link } from "react-router-dom";

import { Button, Select, Input, Card } from "antd";

import USDC_IMG from "../../assets/img/tokens/USDC.png";
import { MinusOutlined, SwapRightOutlined } from "@ant-design/icons";

export const Withdraw = () => {
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
        <Col span="24">
          <Card>
            <Row style={{ justifyContent: "space-between" }}>
              <Col>
                <small>Free Collateral</small>
              </Col>
              <Col>
                <small>$2,000.00</small>
                <SwapRightOutlined />
                <small>$1,877.00</small>
              </Col>
            </Row>
            <Row style={{ justifyContent: "space-between" }}>
              <Col>
                <small>Max Withdraw</small>
              </Col>
              <Col>
                <small>$200,000.000</small>
              </Col>
            </Row>
            <Row style={{ justifyContent: "space-between" }}>
              <Col>
                <small>Account Leverage</small>
              </Col>
              <Col>
                <MinusOutlined />
                <SwapRightOutlined />
                <MinusOutlined />
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col span="24">
          <Card
            actions={[
              <Button type="primary" block>
                Confirm Withdraw
              </Button>,
            ]}
          >
            <Row style={{ justifyContent: "space-between" }}>
              <Col>
                <small>Fee</small>
              </Col>
              <Col>
                <small>$0.00</small>
              </Col>
            </Row>
            <Row style={{ justifyContent: "space-between" }}>
              <Col>
                <small>Total</small>
              </Col>
              <Col>
                <small>123.000</small>
              </Col>
            </Row>
            <Row style={{ justifyContent: "space-between" }}>
              <Col>
                <small>
                  Wallet <code>USDC</code>
                </small>
              </Col>
              <Col>
                <small>0.000</small>
                <SwapRightOutlined />
                <small>123.000</small>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </>
  );
};
