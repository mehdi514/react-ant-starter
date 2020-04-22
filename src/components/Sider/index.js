import React from "react";
import { Layout, Menu } from "antd";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/mobylogix.png";
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  UngroupOutlined,
} from "@ant-design/icons";

//stylesheet
import "./sider.css";

const { Sider } = Layout;

export default () => (
  <Sider breakpoint="sm" collapsedWidth="0">
    <div className="logo text-center">
      <img width="140px" src={logo} alt="img" />
    </div>
    <Menu theme="light" mode="inline" defaultSelectedKeys={["1"]}>
      <Menu.Item key="1">
        <NavLink to="/home">
          <UserOutlined />
          <span className="nav-text">Home</span>
        </NavLink>
      </Menu.Item>
      <Menu.Item key="2">
        <NavLink to="/about">
          <VideoCameraOutlined />
          <span className="nav-text">About</span>
        </NavLink>
      </Menu.Item>
      <Menu.Item key="3">
        <NavLink to="contact">
          <UploadOutlined />
          <span className="nav-text">Contact</span>
        </NavLink>
      </Menu.Item>
      <Menu.Item key="4">
        <NavLink to="/help">
          <UngroupOutlined />
          <span className="nav-text">Help</span>
        </NavLink>
      </Menu.Item>
    </Menu>
  </Sider>
);
