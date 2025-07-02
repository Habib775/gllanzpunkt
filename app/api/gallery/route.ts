import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const images = await prisma.galleryImage.findMany();
    return NextResponse.json(images);
  } catch (error) {
    return NextResponse.json({ error: 'خطأ في جلب صور المعرض' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const { imageUrl, description } = await request.json();
    
    if (!imageUrl) {
      return NextResponse.json({ error: 'يرجى إدخال رابط الصورة' }, { status: 400 });
    }

    const newImage = await prisma.galleryImage.create({
      data: { imageUrl, description },
    });

    return NextResponse.json(newImage, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'خطأ في إضافة الصورة' }, { status: 500 });
  }
}

