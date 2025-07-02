import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const offers = await prisma.offer.findMany();
    return NextResponse.json(offers);
  } catch (error) {
    return NextResponse.json({ error: 'خطأ في جلب العروض' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const { title, description, price, image } = await request.json();
    
    if (!title || !description || !price) {
      return NextResponse.json({ error: 'يرجى إدخال كل البيانات المطلوبة' }, { status: 400 });
    }

    const newOffer = await prisma.offer.create({
      data: { title, description, price, image },
    });

    return NextResponse.json(newOffer, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'خطأ في إنشاء العرض' }, { status: 500 });
  }
}

