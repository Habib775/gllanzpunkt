// server.ts

import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';
import authRoutes from './routes/authRoutes';
import serviceRoutes from './routes/serviceRoutes';
import offerRoutes from './routes/offerRoutes';
import galleryRoutes from './routes/galleryRoutes';
import aboutRoutes from './routes/aboutRoutes';

dotenv.config();

const app = express();
const prisma = new PrismaClient();

app.use(cors({
  origin: 'http://localhost:3000', // أو دومين موقعك
  credentials: true
}));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/services', serviceRoutes);
app.use('/api/offers', offerRoutes);
app.use('/api/gallery', galleryRoutes);
app.use('/api/about', aboutRoutes);

// Health Check
app.get('/api/health', (_req, res) => {
  res.json({ status: 'API is running' });
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});

