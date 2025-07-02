import React, { useState } from "react";
import AdminLogin from "./components/admin/AdminLogin";
import AdminDashboard from "./components/admin/AdminDashboard";

const App = () => {
  const [token, setToken] = useState<string | null>(localStorage.getItem("adminToken"));

  const handleLoginSuccess = (jwtToken: string) => {
    localStorage.setItem("adminToken", jwtToken);
    setToken(jwtToken);
  };

  if (!token) {
    return <AdminLogin onLoginSuccess={handleLoginSuccess} />;
  }

  return <AdminDashboard token={token} />;
};

export default App;

