import React from "react";
import { Link } from "react-router-dom";
import {
  Col,
  Row,
  Typography,
  Button,
} from "antd";

import { UserOutlined, SlidersOutlined, SwapOutlined, OrderedListOutlined } from "@ant-design/icons";

export const Footer: React.FC = () => {
  return (
    <div className="footer">
      <Row>
        <Col span="6">
          <Link to="/">
            <Button block>
              <UserOutlined />
              <p>Overview</p>
            </Button>
          </Link>
        </Col>
        <Col span="6">
          <Link to="/deposit">
            <Button block>
              <SwapOutlined />
              <p>Transfer</p>
            </Button>
          </Link>
        </Col>
        <Col span="6">
          <Link to="/trade">
            <Button block>
              <SlidersOutlined />
              <p>Trade</p>
            </Button>
          </Link>
        </Col>
        <Col span="6">
          <Link to="/order">
            <Button block>
              <OrderedListOutlined />
              <p>Orders</p>
            </Button>
          </Link>
        </Col>
      </Row>
    </div>
  );
};
