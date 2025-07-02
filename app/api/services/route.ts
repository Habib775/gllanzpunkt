import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const services = await prisma.service.findMany();
    return NextResponse.json(services);
  } catch (error) {
    return NextResponse.json({ error: 'خطأ في جلب الخدمات' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const { title, description, icon } = await request.json();
    
    if (!title || !description || !icon) {
      return NextResponse.json({ error: 'يرجى إدخال كل البيانات المطلوبة' }, { status: 400 });
    }

    const newService = await prisma.service.create({
      data: { title, description, icon },
    });

    return NextResponse.json(newService, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'خطأ في إنشاء الخدمة' }, { status: 500 });
  }
}

