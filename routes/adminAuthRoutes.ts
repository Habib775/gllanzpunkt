// routes/adminAuthRoutes.ts
import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const router = express.Router();

const admins = [
  {
    id: 1,
    username: "admin",
    // كلمة السر مشفرة مسبقاً: bcrypt.hashSync("admin123", 10)
    passwordHash: "$2b$10$EixZaYVK1fsbw1ZfbX3OXePaWxn96p36X5LmNHU3ZbiXueCgghq3.", // مثال
  },
];

const JWT_SECRET = process.env.JWT_SECRET || "secretkey123";

router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const admin = admins.find((a) => a.username === username);
  if (!admin) {
    return res.status(401).json({ message: "اسم المستخدم أو كلمة المرور خاطئة" });
  }

  const passwordMatch = await bcrypt.compare(password, admin.passwordHash);
  if (!passwordMatch) {
    return res.status(401).json({ message: "اسم المستخدم أو كلمة المرور خاطئة" });
  }

  const token = jwt.sign({ id: admin.id, username: admin.username }, JWT_SECRET, {
    expiresIn: "1h",
  });

  res.json({ token });
});

export default router;

