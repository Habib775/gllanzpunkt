// routes/authRoutes.ts

import express from 'express';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const router = express.Router();
const prisma = new PrismaClient();

const JWT_SECRET = process.env.JWT_SECRET || 'your_super_secret';

// تسجيل مستخدم جديد
router.post('/register', async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ message: 'الرجاء إدخال اسم المستخدم وكلمة المرور' });
  }

  try {
    const existingUser = await prisma.admin.findUnique({ where: { username } });
    if (existingUser) {
      return res.status(400).json({ message: 'اسم المستخدم موجود بالفعل' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    await prisma.admin.create({
      data: { username, password: hashedPassword },
    });

    res.status(201).json({ message: 'تم إنشاء المستخدم بنجاح' });
  } catch (error) {
    res.status(500).json({ message: 'خطأ في الخادم' });
  }
});

// تسجيل الدخول
router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ message: 'الرجاء إدخال اسم المستخدم وكلمة المرور' });
  }

  try {
    const user = await prisma.admin.findUnique({ where: { username } });
    if (!user) {
      return res.status(401).json({ message: 'بيانات الدخول غير صحيحة' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'بيانات الدخول غير صحيحة' });
    }

    const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '1d' });

    // إرسال التوكن كـ httpOnly cookie
    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 24 * 60 * 60 * 1000, // يوم واحد
      sameSite: 'lax',
    });

    res.json({ message: 'تم تسجيل الدخول بنجاح' });
  } catch (error) {
    res.status(500).json({ message: 'خطأ في الخادم' });
  }
});

// تسجيل الخروج
router.post('/logout', (_req, res) => {
  res.clearCookie('token');
  res.json({ message: 'تم تسجيل الخروج' });
});

// تحقق من التوكن (Middleware)
export const authenticateToken = (req: any, res: any, next: any) => {
  const token = req.cookies.token;
  if (!token) return res.status(401).json({ message: 'غير مصرح' });

  jwt.verify(token, JWT_SECRET, (err: any, user: any) => {
    if (err) return res.status(403).json({ message: 'غير مصرح' });
    req.user = user;
    next();
  });
};

export default router;

