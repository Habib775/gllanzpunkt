// routes/offerRoutes.ts

import express from 'express';
import { PrismaClient } from '@prisma/client';
import { authenticateToken } from './authRoutes';

const router = express.Router();
const prisma = new PrismaClient();

// جلب كل العروض
router.get('/', async (_req, res) => {
  try {
    const offers = await prisma.offer.findMany();
    res.json(offers);
  } catch (error) {
    res.status(500).json({ message: 'خطأ في جلب العروض' });
  }
});

// جلب عرض واحد حسب الـ id
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const offer = await prisma.offer.findUnique({ where: { id } });
    if (!offer) return res.status(404).json({ message: 'العرض غير موجود' });
    res.json(offer);
  } catch (error) {
    res.status(500).json({ message: 'خطأ في جلب العرض' });
  }
});

// إنشاء عرض جديد - محمي (يحتاج توكن)
router.post('/', authenticateToken, async (req, res) => {
  const { title, description, price, image } = req.body;
  if (!title || !description || !price || !image) {
    return res.status(400).json({ message: 'يرجى إدخال كل البيانات المطلوبة' });
  }

  try {
    const newOffer = await prisma.offer.create({
      data: { title, description, price, image },
    });
    res.status(201).json(newOffer);
  } catch (error) {
    res.status(500).json({ message: 'خطأ في إنشاء العرض' });
  }
});

// تحديث عرض - محمي (يحتاج توكن)
router.put('/:id', authenticateToken, async (req, res) => {
  const { id } = req.params;
  const { title, description, price, image } = req.body;

  try {
    const updatedOffer = await prisma.offer.update({
      where: { id },
      data: { title, description, price, image },
    });
    res.json(updatedOffer);
  } catch (error) {
    res.status(500).json({ message: 'خطأ في تحديث العرض' });
  }
});

// حذف عرض - محمي (يحتاج توكن)
router.delete('/:id', authenticateToken, async (req, res) => {
  const { id } = req.params;

  try {
    await prisma.offer.delete({ where: { id } });
    res.json({ message: 'تم حذف العرض' });
  } catch (error) {
    res.status(500).json({ message: 'خطأ في حذف العرض' });
  }
});

export default router;

