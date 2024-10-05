import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import FooterComponent from "./components/Footer";
import HeaderComponent from "./components/Header";
import Login from "./components/Login";
import NotFound from "./components/NotFound";
import PrivateRoute from "./components/PrivateRoute";
import Register from "./components/Register";
import ForgotPassword from "./pages/ForgotPassword";
import Profile from "./pages/Profile";
const App = () => {
  return (
    <Router>
      <HeaderComponent />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />{" "}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <FooterComponent />
    </Router>
  );
};

export default App;
