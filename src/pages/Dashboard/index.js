import React from "react";
import { Card, Row, Col, Radio } from "antd";
import {
  RightOutlined,
  MenuOutlined,
  FieldTimeOutlined,
  SmileOutlined,
  HeartOutlined,
} from "@ant-design/icons";

// images
import img from "../../assets/images/graph.png";

// stylesheet
import "./dashboard.css";

export default () => {
  return (
    <Row className="main-content">
      {/* Statistic Cards 1 */}
      <Col xs={24} sm={24} md={12} lg={12} xl={16}>
        <div className="header-content">Training Tips</div>
        <Card className="world-class" bordered={false}>
          <Row>
            <Col xs={12} sm={12} md={12} lg={12} xl={12}>
              <p className="world-class-content">
                World-class athletes rest 80% of their training
              </p>
              <div className="article">
                Read Article <RightOutlined />
              </div>
            </Col>
            <Col xs={12} sm={12} md={12} lg={12} xl={12}>
              {/* <img className="workout" src={img} alt="workout" /> */}
            </Col>
          </Row>
        </Card>
      </Col>
      {/* Statistic Cards 2 */}
      <Col xs={24} sm={24} md={12} lg={12} xl={8}>
        <div className="header-content">My Goals</div>
        <Card className="goal-card" bordered={false}>
          <div className="ant-card-header">
            <div className="header-title">July</div>
            <MenuOutlined className="icon" />
          </div>
          <div className="card-body">
            <div className="goals-content">
              <span className="goal-value">302</span>
              <div className="number">250 km goal</div>
            </div>
          </div>
          <Row>
            <Col lg={24}></Col>
          </Row>
        </Card>
      </Col>
      {/* Activity Logs */}
      <Col xs={24} sm={24} md={24} lg={24} xl={24}>
        <div className="activity-log">
          <h3 className="activity-title">Activity history</h3>
          <div>
            <Radio.Group defaultValue="2" buttonStyle="solid">
              <Radio.Button value="1">Today</Radio.Button>
              <Radio.Button value="2">7d</Radio.Button>
              <Radio.Button value="3">2w</Radio.Button>
              <Radio.Button value="4">1m</Radio.Button>
              <Radio.Button value="5">3m</Radio.Button>
              <Radio.Button value="6">1y</Radio.Button>
            </Radio.Group>
          </div>
        </div>
      </Col>
      {/* Graph */}
      <Col xs={24} sm={24} md={24} lg={24} xl={24}>
        <img width="800px" className="graph-img" src={img} alt="graph" />
      </Col>
      {/* Footer Cards */}
      <Col xs={24} sm={24} md={24} lg={24} xl={24}>
        <div className="footer-cards">
          <Row>
            <Col xs={24} sm={24} md={8} lg={8} xl={8}>
              <Card className="card-stat" bordered={false}>
                <div className="header">
                  <FieldTimeOutlined className="icon load-icon" />
                  <div className="card-text">
                    <div className="percentage">93% load</div>
                    <div className="level">Trading load level</div>
                  </div>
                </div>
                <p>Well done Mr. Forest. Now it's time to rest!</p>
              </Card>
            </Col>
            <Col xs={24} sm={24} md={8} lg={8} xl={8}>
              <Card className="card-stat" bordered={false}>
                <div className="header">
                  <SmileOutlined className="icon hours-icon" />
                  <div className="card-text">
                    <div className="hours">17 Hours</div>
                    <div className="level">Last recovery</div>
                  </div>
                </div>
                <p>Slow down! Longer recovery recommended.</p>
              </Card>
            </Col>
            <Col xs={24} sm={24} md={8} lg={8} xl={8}>
              <Card className="card-stat" bordered={false}>
                <div className="header">
                  <HeartOutlined className="icon heart-icon" />
                  <div className="card-text">
                    <div className="heart-rate">154 bpm</div>
                    <div className="level">Weeks average rate</div>
                  </div>
                </div>
                <p>3% more efficient anerobic rate comparing</p>
              </Card>
            </Col>
          </Row>
        </div>
      </Col>
    </Row>
  );
};
