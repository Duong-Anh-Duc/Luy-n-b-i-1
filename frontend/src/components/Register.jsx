import { Button, Form, Input, Card } from "antd";
import axios from "axios";
import React from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    try {
      const response = await axios.post(
        "http://localhost:4000/api/users/register",
        values
      );
      console.log("Registered:", response.data);
      toast.success("Registration successful!");
      form.resetFields();
    } catch (error) {
      console.error("Registration failed:", error);
      toast.error("Registration failed. Please try again.");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f0f2f5", // Màu nền xanh nhạt
      }}
    >
      <Card
        style={{
          width: 400,
          padding: "30px",
          borderRadius: "20px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)", // Hiệu ứng đổ bóng
          backgroundColor: "white",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: "20px",
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          Đăng ký
        </h2>
        <Form form={form} onFinish={onFinish} layout="vertical">
          <Form.Item
            name="username"
            label="Username"
            rules={[{ required: true, message: "Please enter your username!" }]}
          >
            <Input
              placeholder="Enter your username"
              style={{
                borderRadius: "8px",
                padding: "10px",
                fontFamily: "'Roboto', sans-serif",
                marginBottom: "15px",
                backgroundColor: "#f0f2f5",
              }}
            />
          </Form.Item>
          <Form.Item
            name="email"
            label="Email"
            rules={[
              {
                required: true,
                type: "email",
                message: "Please enter a valid email!",
              },
            ]}
          >
            <Input
              placeholder="Enter your email"
              style={{
                borderRadius: "8px",
                padding: "10px",
                fontFamily: "'Roboto', sans-serif",
                marginBottom: "15px",
                backgroundColor: "#f0f2f5",
              }}
            />
          </Form.Item>
          <Form.Item
            name="password"
            label="Password"
            rules={[{ required: true, message: "Please enter your password!" }]}
          >
            <Input.Password
              placeholder="Enter your password"
              style={{
                borderRadius: "8px",
                padding: "10px",
                fontFamily: "'Roboto', sans-serif",
                marginBottom: "15px",
                backgroundColor: "#f0f2f5",
              }}
            />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              style={{
                width: "100%",
                backgroundColor: "#1890ff",
                borderRadius: "20px",
                padding: "10px",
                fontWeight: "500",
                fontFamily: "'Roboto', sans-serif",
              }}
            >
              Đăng ký
            </Button>
          </Form.Item>
        </Form>
      </Card>
      <ToastContainer />
    </div>
  );
};

export default Register;
