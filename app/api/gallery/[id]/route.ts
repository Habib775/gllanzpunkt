import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    await prisma.galleryImage.delete({
      where: { id: params.id }
    });
    
    return NextResponse.json({ message: 'تم حذف الصورة' });
  } catch (error) {
    return NextResponse.json({ error: 'خطأ في حذف الصورة' }, { status: 500 });
  }
}

