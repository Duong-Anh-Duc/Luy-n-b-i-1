import { Button, Card, Form, Input } from "antd";
import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const onFinish = async (values) => {
    try {
      const response = await axios.post(
        "http://localhost:4000/api/users/login",
        values
      );
      console.log("Logged in:", response.data);
      localStorage.setItem(
        "user",
        JSON.stringify({ username: values.username, email: values.email })
      );
      localStorage.setItem("token", response.data.token);
      toast.success("Login successful!");
      navigate("/profile");
    } catch (error) {
      console.error("Login failed:", error);
      toast.error("Login failed. Please check your credentials.");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#87CEEB",
      }}
    >
      <Card
        style={{
          width: 400,
          padding: "30px",
          borderRadius: "20px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontFamily: "'Poppins', sans-serif" }}>Đăng nhập</h2>
        <Form form={form} onFinish={onFinish} layout="vertical">
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                type: "email",
                message: "Please enter a valid email!",
              },
            ]}
          >
            <Input
              placeholder="Enter email"
              style={{
                borderRadius: "8px",
                padding: "12px",
                fontFamily: "'Roboto', sans-serif",
                marginBottom: "20px",
                backgroundColor: "#f0f2f5",
              }}
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please enter your password!" }]}
          >
            <Input.Password
              placeholder="Enter password"
              style={{
                borderRadius: "8px",
                padding: "12px",
                fontFamily: "'Roboto', sans-serif",
                marginBottom: "20px",
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
                marginBottom: "20px",
              }}
            >
              Đăng nhập
            </Button>
          </Form.Item>
        </Form>
      </Card>
      <ToastContainer />
    </div>
  );
};

export default Login;
