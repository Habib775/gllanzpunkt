import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const about = await prisma.about.findFirst();
    if (!about) {
      return NextResponse.json({ error: 'بيانات "من نحن" غير موجودة' }, { status: 404 });
    }
    return NextResponse.json(about);
  } catch (error) {
    return NextResponse.json({ error: 'خطأ في جلب بيانات "من نحن"' }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const { title, description, imageUrl } = await request.json();
    
    if (!title || !description) {
      return NextResponse.json({ error: 'يرجى إدخال كل البيانات المطلوبة' }, { status: 400 });
    }

    const existingAbout = await prisma.about.findFirst();

    if (existingAbout) {
      const updatedAbout = await prisma.about.update({
        where: { id: existingAbout.id },
        data: { title, description, imageUrl },
      });
      return NextResponse.json(updatedAbout);
    } else {
      const newAbout = await prisma.about.create({
        data: { title, description, imageUrl },
      });
      return NextResponse.json(newAbout, { status: 201 });
    }
  } catch (error) {
    return NextResponse.json({ error: 'خطأ في تحديث بيانات "من نحن"' }, { status: 500 });
  }
}

