import React from "react";
import { Layout, Menu, Avatar } from "antd";
import {
  HomeOutlined,
  LineChartOutlined,
  ProfileOutlined,
  MessageOutlined,
  SettingOutlined,
  LogoutOutlined,
} from "@ant-design/icons";

// stylesheet
import "./sidebar.css";

const { Sider } = Layout;

export default () => (
  <Sider
    breakpoint="lg"
    className="sidebar"
    collapsedWidth="0"
    onBreakpoint={(broken) => {
      console.log(broken);
    }}
    onCollapse={(collapsed, type) => {
      console.log(collapsed, type);
    }}
  >
    <Menu mode="inline" defaultSelectedKeys={["1"]}>
      <div className="avatar">
        <Avatar
          size={64}
          src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
        />
        <div className="avatar-name">Hello, lucas</div>
      </div>
      <Menu.Item key="1">
        <HomeOutlined />
        <span className="nav-text">Home</span>
      </Menu.Item>
      <Menu.Item key="2">
        <LineChartOutlined />
        <span className="nav-text">Analytics</span>
      </Menu.Item>
      <Menu.Item key="3">
        <ProfileOutlined />
        <span className="nav-text">Goals</span>
      </Menu.Item>
      <Menu.Item key="4">
        <MessageOutlined />
        <span className="nav-text">Coaching</span>
      </Menu.Item>
      <Menu.Item key="5">
        <SettingOutlined />
        <span className="nav-text">Settings</span>
      </Menu.Item>
      <Menu.Item key="6">
        <LogoutOutlined />
        <span className="nav-text">Logout</span>
      </Menu.Item>
    </Menu>
  </Sider>
);
