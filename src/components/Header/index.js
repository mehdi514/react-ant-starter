import React from "react";
import { Layout, Typography } from "antd";

//styelsheet
import "./header.css";

const { Title } = Typography;
const { Header } = Layout;

export default () => (
  <Header className="header text-center">
    <Title className="text-center">HEADER</Title>
  </Header>
);
