import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const service = await prisma.service.findUnique({
      where: { id: params.id }
    });
    
    if (!service) {
      return NextResponse.json({ error: 'الخدمة غير موجودة' }, { status: 404 });
    }
    
    return NextResponse.json(service);
  } catch (error) {
    return NextResponse.json({ error: 'خطأ في جلب الخدمة' }, { status: 500 });
  }
}

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { title, description, icon } = await request.json();
    
    const updatedService = await prisma.service.update({
      where: { id: params.id },
      data: { title, description, icon },
    });
    
    return NextResponse.json(updatedService);
  } catch (error) {
    return NextResponse.json({ error: 'خطأ في تحديث الخدمة' }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    await prisma.service.delete({
      where: { id: params.id }
    });
    
    return NextResponse.json({ message: 'تم حذف الخدمة' });
  } catch (error) {
    return NextResponse.json({ error: 'خطأ في حذف الخدمة' }, { status: 500 });
  }
}

