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

const { Text } = Typography;

export const MarketOrder: React.FC = () => {
  return (
    <>
      <Row style={{ justifyContent: "center" }}>
        <Col>
          <Radio.Group value="buy">
            <Radio.Button value="buy">Buy</Radio.Button>
            <Radio.Button value="sell">Sell</Radio.Button>
          </Radio.Group>
        </Col>
      </Row>
      <Row>
        <Col span="24">
          <Text>
            Amount <small>Set order size</small>
          </Text>
        </Col>
        <Col span="12" style={{ paddingRight: "2px" }}>
          <Input size="large" placeholder="0" suffix="ETH" />
        </Col>
        <Col span="12" style={{ paddingLeft: "2px" }}>
          <Input size="large" placeholder="0" suffix="USD" />
        </Col>
      </Row>
      <Row>
        <Col span="24">
          <Text>
            Leverage <small> Up to 20x </small>
          </Text>
        </Col>
        <Col span="12">
          <Input size="large" placeholder="0" />
        </Col>
        <Col span="4" style={{ paddingLeft: "2px" }}>
          <Button size="large" block>
            2x
          </Button>
        </Col>
        <Col span="4" style={{ paddingLeft: "2px" }}>
          <Button size="large" block>
            5x
          </Button>
        </Col>
        <Col span="4" style={{ paddingLeft: "2px" }}>
          <Button size="large" block>
            10x
          </Button>
        </Col>
      </Row>
      <Row>
        <Col span="24">
          <Text>Execution</Text>
        </Col>
        <Col span="24">
          <Checkbox checked={false}>Reduce-Only</Checkbox>
        </Col>
      </Row>
      <Row>
        <Col span="24">
          <Card
            actions={[
              <Button type="primary" block>
                Place Market Order
              </Button>,
            ]}
          >
            <Row style={{ justifyContent: "space-between" }}>
              <Col>
                <small>Exprected Price</small>
              </Col>
              <Col>
                <small>$1,600.80</small>
              </Col>
            </Row>
            <Row style={{ justifyContent: "space-between" }}>
              <Col>
                <small>Price Impact</small>
              </Col>
              <Col>
                <small>0.00%</small>
              </Col>
            </Row>
            <Row style={{ justifyContent: "space-between" }}>
              <Col>
                <small>
                  Fee <code>Taker</code>
                </small>
              </Col>
              <Col>
                <small>$1.00</small>
              </Col>
            </Row>
            <Row style={{ justifyContent: "space-between" }}>
              <Col>
                <small>Total</small>
              </Col>
              <Col>
                <small>$1,992.00</small>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </>
  );
};
