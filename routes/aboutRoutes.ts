// routes/aboutRoutes.ts

import express from 'express';
import { PrismaClient } from '@prisma/client';
import { authenticateToken } from './authRoutes';

const router = express.Router();
const prisma = new PrismaClient();

// جلب بيانات صفحة "من نحن"
router.get('/', async (_req, res) => {
  try {
    const about = await prisma.about.findFirst();
    if (!about) return res.status(404).json({ message: 'بيانات "من نحن" غير موجودة' });
    res.json(about);
  } catch (error) {
    res.status(500).json({ message: 'خطأ في جلب بيانات "من نحن"' });
  }
});

// تحديث بيانات "من نحن" - محمي (يحتاج توكن)
router.put('/', authenticateToken, async (req, res) => {
  const { title, description, imageUrl } = req.body;

  if (!title || !description || !imageUrl) {
    return res.status(400).json({ message: 'يرجى إدخال كل البيانات المطلوبة' });
  }

  try {
    // تحديث أو إنشاء إذا لم تكن موجودة
    const existingAbout = await prisma.about.findFirst();

    if (existingAbout) {
      const updatedAbout = await prisma.about.update({
        where: { id: existingAbout.id },
        data: { title, description, imageUrl },
      });
      res.json(updatedAbout);
    } else {
      const newAbout = await prisma.about.create({
        data: { title, description, imageUrl },
      });
      res.status(201).json(newAbout);
    }
  } catch (error) {
    res.status(500).json({ message: 'خطأ في تحديث بيانات "من نحن"' });
  }
});

export default router;

