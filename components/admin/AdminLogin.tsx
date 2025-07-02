// components/admin/AdminLogin.tsx
import React, { useState } from "react";
import axios from "axios";

interface AdminLoginProps {
  onLoginSuccess: (token: string) => void;
}

const AdminLogin: React.FC<AdminLoginProps> = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const response = await axios.post("/api/admin/login", { username, password });
      const { token } = response.data;
      onLoginSuccess(token);
    } catch (err: any) {
      if (err.response && err.response.data && err.response.data.message) {
        setError(err.response.data.message);
      } else {
        setError("حدث خطأ في تسجيل الدخول");
      }
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: "auto", padding: 20, border: "1px solid #ddd", borderRadius: 8 }}>
      <h2>تسجيل دخول المشرف</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: 15 }}>
          <label>اسم المستخدم</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            style={{ width: "100%", padding: 8, marginTop: 5 }}
          />
        </div>
        <div style={{ marginBottom: 15 }}>
          <label>كلمة المرور</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ width: "100%", padding: 8, marginTop: 5 }}
          />
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button type="submit" style={{ padding: "10px 20px", cursor: "pointer" }}>
          تسجيل دخول
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;

