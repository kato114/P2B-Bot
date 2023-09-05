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

export const LimitOrder: React.FC = () => {
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
            Limit Price <small> ( USD ) </small>
          </Text>
        </Col>
        <Col span="24">
          <Input size="large" placeholder="0" />
        </Col>
      </Row>
      <Row>
        <Col span="24">
          <Text>Time In Force</Text>
        </Col>
        <Col span="24">
          <Select
            size="large"
            style={{ width: "100%" }}
            defaultValue="Immediate Or Cancel"
            options={[
              { value: "Good Til Time", label: "Good Til Time" },
              { value: "Fill Or Kill", label: "Fill Or Kill" },
              { value: "Immediate Or Cancel", label: "Immediate Or Cancel" },
            ]}
          />
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
                Place Limit Order
              </Button>,
            ]}
          >
            <Row style={{ justifyContent: "space-between" }}>
              <Col>
                <small>
                  Fee <code>Maker</code>
                </small>
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
                <small>$15.00</small>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </>
  );
};
