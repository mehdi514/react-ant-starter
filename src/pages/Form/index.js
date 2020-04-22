import React, { useState, useEffect } from "react";
import {
  Form,
  Input,
  Col,
  Row,
  Button,
  DatePicker,
  AutoComplete,
  Select,
  Radio,
  Checkbox,
} from "antd";
import TextArea from "antd/lib/input/TextArea";
import { useHistory } from "react-router-dom";

//stylesheet
import "./form.css";

const { Option } = Select;

export default () => {
  useEffect(() => {
    document.title = "react-hooks";
  });
  const [autoComplete, setAutoComplete] = useState([]);

  const history = useHistory();

  const layout = {
    labelCol: { span: 3 },
    wrapperCol: { span: 21 },
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 70 }}>
        <Option value="92">+92</Option>
        <Option value="971">+971</Option>
      </Select>
    </Form.Item>
  );

  const onChangeOptions = (value) => {
    if (!value) {
      setAutoComplete([]);
    } else {
      setAutoComplete(
        [".com", ".org", ".edu", ".ca", ".co", ".pk"].map(
          (domain) => `${value}${domain}`
        )
      );
    }
  };

  const onFinish = (values) => {
    console.log("Received values of form:", values);
  };

  const onSubmit = (values) => {
    if (values === null) {
      history.push("/home");
    } else {
      history.push("/about");
    }
  };

  const optionsResult = autoComplete.map((website) => ({
    value: website,
  }));
  return (
    <div className="main-content">
      <Form name="form" {...layout} onFinish={onFinish}>
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
              name="password"
              label="Password"
              rules={[{ required: true, message: "Please enter password!" }]}
              hasFeedback
            >
              <Input.Password placeholder="Password" />
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <Form.Item
              label="Confirm Password"
              name="confirmPassword"
              rules={[
                {
                  required: true,
                  message: "Please confirm your password",
                },
                ({ getFieldValue }) => ({
                  validator(rule, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }

                    return Promise.reject(
                      "Both passwords are not same, please match the passwords."
                    );
                  },
                }),
              ]}
              hasFeedback
            >
              <Input.Password placeholder="Confirm Password" />
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <Form.Item
              name="DOB"
              label="DOB"
              rules={[{ required: true, message: "Please select your DOB!" }]}
              hasFeedback
            >
              <DatePicker placeholder="Select DOB" />
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <Form.Item
              name="website"
              label="Website"
              rules={[
                { required: true, message: "Please enter your website!" },
              ]}
              hasFeedback
            >
              <AutoComplete onChange={onChangeOptions} options={optionsResult}>
                <Input placeholder="website" />
              </AutoComplete>
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
              name="address"
              label="Address"
              rules={[
                { required: true, message: "Please enter your address!" },
              ]}
              hasFeedback
            >
              <TextArea />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <div className="status">Gender</div>
            <Form.Item name="gender">
              <Radio.Group>
                <Radio value={"Male"}>Male</Radio>
                <Radio value={"Female"}>Female</Radio>
                <Radio value={"Other"}>Other</Radio>
              </Radio.Group>
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <div className="status">Marital Status</div>
            <Form.Item name="status">
              <Radio.Group>
                <Radio value={"Single"}>Single</Radio>
                <Radio value={"Married"}>Married</Radio>
              </Radio.Group>
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            <div className="status">Your Hobbies</div>
            <Form.Item name="hobbies">
              <Checkbox.Group>
                <Checkbox value="coding">Coding</Checkbox>
                <Checkbox value="book-reading">Book Reading</Checkbox>
                <Checkbox value="cricket">Cricket</Checkbox>
                <Checkbox value="eading Newspaper">Reading Newspaper</Checkbox>
                <Checkbox value="reading books">Reading Books</Checkbox>
              </Checkbox.Group>
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <div className="status">Security questions!</div>
            <Form.Item
              name="security-question"
              rules={[
                {
                  required: true,
                  message: "Please select a security question!",
                },
              ]}
            >
              <Select placeholder="Select a question!">
                <Option value="nick">What's your nick name?</Option>
                <Option value="maiden">What's your maiden name?</Option>
                <Option value="bestfriend">
                  What's your best friend's name?
                </Option>
                <Option value="teacher">
                  What's your favourite chilhood teacher's name?
                </Option>
                <Option value="bestfriend">
                  What's your best friend's name?
                </Option>
              </Select>
              <Form.Item
                name="security-question"
                rules={[
                  {
                    required: true,
                    message: "Please answer the security question!",
                  },
                ]}
                hasFeedback
              >
                <Input placeholder="Answer the question you choose!" />
              </Form.Item>
            </Form.Item>
          </Col>
        </Row>
        <div className="text-center">
          <Button
            type="primary"
            htmlType="submit"
            // onClick={() => onSubmit()}
            onClick={() => {
              history.push("/about");
            }}
          >
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
};
