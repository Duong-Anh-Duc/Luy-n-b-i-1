import { Button, Layout } from "antd";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const { Header } = Layout;

const HeaderComponent = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <Header
      style={{
        backgroundColor: "#001529",
        padding: "0 20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "64px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      {/* Logo Section */}
      <div
        className="logo"
        style={{
          color: "white",
          fontSize: "24px",
          fontWeight: "bold",
          cursor: "pointer",
          fontFamily: "'Poppins', sans-serif",
        }}
      >
        My App
      </div>

      {/* Navigation Buttons */}
      <div style={{ display: "flex", alignItems: "center" }}>
        {token ? (
          <>
            <span style={{ color: "white", marginRight: "15px" }}>
              User Profile
            </span>
            <Button
              type="link"
              onClick={handleLogout}
              style={{
                color: "white",
                backgroundColor: "#ff4d4f",
                borderRadius: "20px",
                padding: "0 20px",
                fontWeight: "500",
                fontFamily: "'Roboto', sans-serif",
              }}
            >
              Logout
            </Button>
          </>
        ) : (
          <>
            <Button
              type="link"
              style={{
                color: "white",
                fontFamily: "'Roboto', sans-serif",
                fontWeight: "500",
                marginRight: "15px",
              }}
            >
              <Link to="/register" style={{ color: "white" }}>
                Register
              </Link>
            </Button>
            <Button
              type="link"
              style={{
                color: "white",
                backgroundColor: "#40a9ff",
                borderRadius: "20px",
                padding: "0 20px",
                fontWeight: "500",
                fontFamily: "'Roboto', sans-serif",
              }}
            >
              <Link to="/login" style={{ color: "white" }}>
                Login
              </Link>
            </Button>
          </>
        )}
      </div>
    </Header>
  );
};

export default HeaderComponent;
