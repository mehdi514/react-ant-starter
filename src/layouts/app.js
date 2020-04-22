import React from "react";
import { Layout } from "antd";

// components
import Sider from "../components/Sider";
import Header from "../components/Header";
import Footer from "../components/Footer";

const { Content } = Layout;

export default ({ children }) => (
  <Layout>
    <Sider />
    <Layout>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </Layout>
  </Layout>
);
