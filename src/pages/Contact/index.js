import React from "react";
import { Typography, Form, Row, Col, Input, Select, Button } from "antd";
import TextArea from "antd/lib/input/TextArea";

//stylesheet
import "./contact.css";

const { Title } = Typography;
const { Option } = Select;

export default () => {
  const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 20 },
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 70 }}>
        <Option value="92">+92</Option>
        <Option value="971">+971</Option>
      </Select>
    </Form.Item>
  );
  return (
    <div className="contact">
      <Title className="text-center" level={4}>
        Contact Us!
      </Title>
      <Form name="form" {...layout}>
        <Row>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <Form.Item
              name="name"
              label="Name"
              rules={[
                { required: true, message: "Please enter your name first!" },
              ]}
              hasFeedback
            >
              <Input placeholder="Name" />
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <Form.Item
              label="Email"
              name="email"
              rules={[
                { type: "email" },
                {
                  required: true,
                  message: "please enter your email first!",
                },
              ]}
              hasFeedback
            >
              <Input placeholder="Email" />
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <Form.Item
              name="company"
              label="Company"
              rules={[
                {
                  required: true,
                  message: "Please enter your company name first!",
                },
              ]}
              hasFeedback
            >
              <Input placeholder="Company Name" />
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <Form.Item
              name="phone"
              label="Phone"
              rules={[
                { required: true, message: "Please enter your phone number!" },
              ]}
              hasFeedback
            >
              <Input
                addonBefore={prefixSelector}
                type="number"
                placeholder="Enter your phone number!"
              />
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <Form.Item
              label="Message"
              rules={[
                { required: true, message: "Please enter your message!" },
              ]}
              hasFeedback
            >
              <TextArea placeholder="Enter your message..." />
            </Form.Item>
          </Col>
        </Row>
        <div className="text-center">
          <Button type="primary" htmlType="submit">
            Send
          </Button>
        </div>
      </Form>
    </div>
  );
};
