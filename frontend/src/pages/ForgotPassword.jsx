import { Button, Form, Input } from "antd";
import React from "react";
const ForgotPassword = () => {
  const onFinish = (values) => {
    console.log("Request for password reset:", values);
  };
  return (
    <Form onFinish={onFinish} layout="vertical">
      <Form.Item
        name="email"
        label="Email"
        rules={[{ required: true, type: "email" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Send Password Reset Link
        </Button>
      </Form.Item>
    </Form>
  );
};
export default ForgotPassword;
