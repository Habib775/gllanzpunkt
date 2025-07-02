import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET || 'your_super_secret_jwt_key';

export async function POST(request: NextRequest) {
  try {
    const { username, password } = await request.json();
    
    if (!username || !password) {
      return NextResponse.json({ message: 'الرجاء إدخال اسم المستخدم وكلمة المرور' }, { status: 400 });
    }

    const user = await prisma.admin.findUnique({ where: { username } });
    if (!user) {
      return NextResponse.json({ message: 'بيانات الدخول غير صحيحة' }, { status: 401 });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return NextResponse.json({ message: 'بيانات الدخول غير صحيحة' }, { status: 401 });
    }

    const token = jwt.sign({ userId: user.id, username: user.username }, JWT_SECRET, { expiresIn: '1d' });

    const response = NextResponse.json({ message: 'تم تسجيل الدخول بنجاح' });
    
    response.cookies.set('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 24 * 60 * 60 * 1000, // يوم واحد
      sameSite: 'lax',
    });

    return response;
  } catch (error) {
    return NextResponse.json({ message: 'خطأ في الخادم' }, { status: 500 });
  }
}

