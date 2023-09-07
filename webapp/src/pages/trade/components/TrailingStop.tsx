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

export const TrailingStop: React.FC = () => {
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
            Amount <small>ETH</small>
          </Text>
        </Col>
        <Col span="24" style={{ paddingRight: "2px" }}>
          <Input size="large" placeholder="0" suffix="ETH" />
        </Col>
      </Row>
      <Row>
        <Col span="24">
          <Text>Trailing Percent</Text>
        </Col>
        <Col span="24">
          <Input size="large" placeholder="0.00%" />
        </Col>
      </Row>
      <Row>
        <Col span="24">
          <Text>Good Til Time</Text>
        </Col>
        <Col span="24">
          <Row>
            <Col span="12" style={{ paddingRight: "2px" }}>
              <Input size="large" value="28" />
            </Col>
            <Col span="12" style={{ paddingLeft: "2px" }}>
              <Select
                size="large"
                style={{ width: "100%" }}
                defaultValue="Days"
                options={[
                  { value: "Mins", label: "Mins" },
                  { value: "Hours", label: "Hours" },
                  { value: "Days", label: "Days" },
                  { value: "Weeks", label: "Weeks" },
                ]}
              />
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col span="24">
          <Text>Execution</Text>
        </Col>
        <Col span="24">
          <Select
            size="large"
            style={{ width: "100%" }}
            defaultValue="Fill Or Kill"
            options={[
              { value: "Fill Or Kill", label: "Fill Or Kill" },
              { value: "Immediate Or Cancel", label: "Immediate Or Cancel" },
            ]}
          />
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
                Place Trailing Stop
              </Button>,
            ]}
          >
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
