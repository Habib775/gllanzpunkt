import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const offer = await prisma.offer.findUnique({
      where: { id: params.id }
    });
    
    if (!offer) {
      return NextResponse.json({ error: 'العرض غير موجود' }, { status: 404 });
    }
    
    return NextResponse.json(offer);
  } catch (error) {
    return NextResponse.json({ error: 'خطأ في جلب العرض' }, { status: 500 });
  }
}

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { title, description, price, image } = await request.json();
    
    const updatedOffer = await prisma.offer.update({
      where: { id: params.id },
      data: { title, description, price, image },
    });
    
    return NextResponse.json(updatedOffer);
  } catch (error) {
    return NextResponse.json({ error: 'خطأ في تحديث العرض' }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    await prisma.offer.delete({
      where: { id: params.id }
    });
    
    return NextResponse.json({ message: 'تم حذف العرض' });
  } catch (error) {
    return NextResponse.json({ error: 'خطأ في حذف العرض' }, { status: 500 });
  }
}

