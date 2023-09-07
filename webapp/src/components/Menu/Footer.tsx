import React from "react";
import { Link } from "react-router-dom";
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

import { UserOutlined, SlidersOutlined, SwapOutlined } from "@ant-design/icons";

const { Text } = Typography;

export const Footer: React.FC = () => {
  return (
    <div className="footer">
      <Row>
        <Col span="8">
          <Link to="/">
            <Button block>
              <UserOutlined />
              <p>Overview</p>
            </Button>
          </Link>
        </Col>
        <Col span="8">
          <Link to="/deposit">
            <Button block>
              <SwapOutlined />
              <p>Transfer</p>
            </Button>
          </Link>
        </Col>
        <Col span="8">
          <Link to="/trade">
            <Button block>
              <SlidersOutlined />
              <p>Trade</p>
            </Button>
          </Link>
        </Col>
      </Row>
    </div>
  );
};
