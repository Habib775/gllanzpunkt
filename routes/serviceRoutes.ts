// routes/serviceRoutes.ts

import express from 'express';
import { PrismaClient } from '@prisma/client';
import { authenticateToken } from './authRoutes';

const router = express.Router();
const prisma = new PrismaClient();

// جلب كل الخدمات
router.get('/', async (_req, res) => {
  try {
    const services = await prisma.service.findMany();
    res.json(services);
  } catch (error) {
    res.status(500).json({ message: 'خطأ في جلب الخدمات' });
  }
});

// جلب خدمة واحدة حسب الـ id
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const service = await prisma.service.findUnique({ where: { id } });
    if (!service) return res.status(404).json({ message: 'الخدمة غير موجودة' });
    res.json(service);
  } catch (error) {
    res.status(500).json({ message: 'خطأ في جلب الخدمة' });
  }
});

// إنشاء خدمة جديدة - محمي (يحتاج توكن)
router.post('/', authenticateToken, async (req, res) => {
  const { title, description, icon } = req.body;
  if (!title || !description || !icon) {
    return res.status(400).json({ message: 'يرجى إدخال كل البيانات المطلوبة' });
  }

  try {
    const newService = await prisma.service.create({
      data: { title, description, icon },
    });
    res.status(201).json(newService);
  } catch (error) {
    res.status(500).json({ message: 'خطأ في إنشاء الخدمة' });
  }
});

// تحديث خدمة - محمي (يحتاج توكن)
router.put('/:id', authenticateToken, async (req, res) => {
  const { id } = req.params;
  const { title, description, icon } = req.body;

  try {
    const updatedService = await prisma.service.update({
      where: { id },
      data: { title, description, icon },
    });
    res.json(updatedService);
  } catch (error) {
    res.status(500).json({ message: 'خطأ في تحديث الخدمة' });
  }
});

// حذف خدمة - محمي (يحتاج توكن)
router.delete('/:id', authenticateToken, async (req, res) => {
  const { id } = req.params;

  try {
    await prisma.service.delete({ where: { id } });
    res.json({ message: 'تم حذف الخدمة' });
  } catch (error) {
    res.status(500).json({ message: 'خطأ في حذف الخدمة' });
  }
});

export default router;

