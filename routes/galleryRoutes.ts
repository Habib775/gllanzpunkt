// routes/galleryRoutes.ts

import express from 'express';
import { PrismaClient } from '@prisma/client';
import { authenticateToken } from './authRoutes';

const router = express.Router();
const prisma = new PrismaClient();

// جلب كل صور المعرض
router.get('/', async (_req, res) => {
  try {
    const images = await prisma.galleryImage.findMany();
    res.json(images);
  } catch (error) {
    res.status(500).json({ message: 'خطأ في جلب صور المعرض' });
  }
});

// جلب صورة معينة حسب الـ id
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const image = await prisma.galleryImage.findUnique({ where: { id } });
    if (!image) return res.status(404).json({ message: 'الصورة غير موجودة' });
    res.json(image);
  } catch (error) {
    res.status(500).json({ message: 'خطأ في جلب الصورة' });
  }
});

// إضافة صورة جديدة - محمي (يحتاج توكن)
router.post('/', authenticateToken, async (req, res) => {
  const { imageUrl } = req.body;
  if (!imageUrl) {
    return res.status(400).json({ message: 'يرجى إدخال رابط الصورة' });
  }

  try {
    const newImage = await prisma.galleryImage.create({
      data: { imageUrl },
    });
    res.status(201).json(newImage);
  } catch (error) {
    res.status(500).json({ message: 'خطأ في إضافة الصورة' });
  }
});

// تحديث صورة - محمي (يحتاج توكن)
router.put('/:id', authenticateToken, async (req, res) => {
  const { id } = req.params;
  const { imageUrl } = req.body;

  try {
    const updatedImage = await prisma.galleryImage.update({
      where: { id },
      data: { imageUrl },
    });
    res.json(updatedImage);
  } catch (error) {
    res.status(500).json({ message: 'خطأ في تحديث الصورة' });
  }
});

// حذف صورة - محمي (يحتاج توكن)
router.delete('/:id', authenticateToken, async (req, res) => {
  const { id } = req.params;

  try {
    await prisma.galleryImage.delete({ where: { id } });
    res.json({ message: 'تم حذف الصورة' });
  } catch (error) {
    res.status(500).json({ message: 'خطأ في حذف الصورة' });
  }
});

export default router;

