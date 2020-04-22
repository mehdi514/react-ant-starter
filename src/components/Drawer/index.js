import React from "react";
import { Layout, Card, Col, Row, Avatar, Input } from "antd";
import {
  DashOutlined,
  CaretDownOutlined,
  MessageOutlined,
} from "@ant-design/icons";

// stylesheet
import "./drawer.css";

const { Sider } = Layout;

export default () => (
  <Sider
    className="drawer"
    breakpoint="lg"
    collapsedWidth="0"
    onBreakpoint={(broken) => {
      console.log(broken);
    }}
    onCollapse={(collapsed, type) => {
      console.log(collapsed, type);
    }}
  >
    <div className="ant-card-header">
      <div className="header-title">Analytics</div>
      <DashOutlined className="icon" />
    </div>

    {/* vO2 Card */}
    <div className="vo2">
      <Card className="vo2-max" bordered={false}>
        <div className="header">
          <div className="header-title">VO2 Max</div>
          <DashOutlined className="icon" />
        </div>
        <div className="number">56</div>
        <div className="text">O2 oxygen use rate</div>
      </Card>
    </div>

    {/* Training Zone */}
    <h3 className="training-zone">Training Zone</h3>

    {/* vO2 Training Card */}
    <Card className="vo2-training-zone" bordered={false}>
      <Row className="card-content">
        <Col xs={4} sm={4} md={4} lg={4} xl={4}>
          <span className="number">5</span>
        </Col>
        <Col xs={15} sm={15} md={15} lg={15} xl={15}>
          <div className="card-text">
            <div className="max-title">VO2 Max</div>
            <div className="level">180 - 200 hrm</div>
          </div>
        </Col>
        <Col xs={5} sm={5} md={5} lg={5} xl={5}>
          <CaretDownOutlined className="icon-down" />
          <span className="percentage">5%</span>
        </Col>
      </Row>
    </Card>

    {/* vO2 Anaerobic Card */}
    <Card className="anaerobic" bordered={false}>
      <Row className="card-content">
        <Col xs={4} sm={4} md={4} lg={4} xl={4}>
          <span className="number">4</span>
        </Col>
        <Col xs={15} sm={15} md={15} lg={15} xl={15}>
          <div className="card-text">
            <div className="max-title">Anaerobic</div>
            <div className="level">160 - 180 hrm</div>
          </div>
        </Col>
        <Col xs={5} sm={5} md={5} lg={5} xl={5}>
          <CaretDownOutlined className="icon-down" />
          <span className="percentage">16%</span>
        </Col>
      </Row>
    </Card>

    {/* vO2 HRM Card */}
    <Card className="hrm" bordered={false}>
      <Row className="card-content">
        <Col xs={4} sm={4} md={4} lg={4} xl={4}>
          <span className="number">3</span>
        </Col>
        <Col xs={15} sm={15} md={15} lg={15} xl={15}>
          <div className="card-text">
            <div className="max-title">Anaerobic</div>
            <div className="level">140 - 160 hrm</div>
          </div>
        </Col>
        <Col xs={5} sm={5} md={5} lg={5} xl={5}>
          <CaretDownOutlined className="icon-down" />
          <span className="percentage">56%</span>
        </Col>
      </Row>
    </Card>

    {/* vO2 Recovery Card */}
    <Card className="recovery" bordered={false}>
      <Row className="card-content">
        <Col xs={4} sm={4} md={4} lg={4} xl={4}>
          <span className="number">2</span>
        </Col>
        <Col xs={15} sm={15} md={15} lg={15} xl={15}>
          <div className="card-text">
            <div className="max-title">Recovery</div>
            <div className="level">120 - 140 hrm</div>
          </div>
        </Col>
        <Col xs={5} sm={5} md={5} lg={5} xl={5}>
          <CaretDownOutlined className="icon-down" />
          <span className="percentage">21%</span>
        </Col>
      </Row>
    </Card>

    {/* Coach Consultaion */}
    <h3 className="coach-consultation">Coach Consultation</h3>

    {/* Avtar-text */}
    <div className="avatar-text">
      <Avatar
        className="avatar"
        size={45}
        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
      />
      <Input className="message" placeholder="Type your message" />
    </div>

    {/* Ask Coach */}
    <div className="ask-coach">
      <MessageOutlined className="message-icon" />
      Ask your coach
    </div>
  </Sider>
);
