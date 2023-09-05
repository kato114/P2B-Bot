import React from "react";
import { Col, Row } from "antd";

export const TakeProfitLimit: React.FC = () => {
  return (
    <>
      <Row>
        <Col span={16}>Ethereum Market</Col>
        <Col span={8}>Ethereum Price</Col>
      </Row>
      <Row>
        <Col span={24}>OrderType</Col>
      </Row>
      <Row>
        <Col span={12}>Sell</Col>
        <Col span={12}>Buy</Col>
      </Row>
    </>
  );
};
