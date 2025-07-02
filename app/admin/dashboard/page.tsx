'use client';

import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BarChartBig, ImageIcon, Sparkles, Info, User } from 'lucide-react';

export default function AdminDashboard() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">لوحة التحكم</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="hover:shadow-lg transition">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">الخدمات</h2>
              <Sparkles className="text-blue-500" />
            </div>
            <p className="text-sm text-muted-foreground mt-2">إدارة جميع خدمات الموقع</p>
            <Link href="/admin/services">
              <Button className="mt-4 w-full">عرض الخدمات</Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">العروض</h2>
              <BarChartBig className="text-green-500" />
            </div>
            <p className="text-sm text-muted-foreground mt-2">إدارة العروض الترويجية</p>
            <Link href="/admin/offers">
              <Button className="mt-4 w-full">عرض العروض</Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">معرض الصور</h2>
              <ImageIcon className="text-purple-500" />
            </div>
            <p className="text-sm text-muted-foreground mt-2">إدارة صور الموقع</p>
            <Link href="/admin/gallery">
              <Button className="mt-4 w-full">عرض الصور</Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">من نحن</h2>
              <Info className="text-orange-500" />
            </div>
            <p className="text-sm text-muted-foreground mt-2">تحرير قسم من نحن</p>
            <Link href="/admin/about">
              <Button className="mt-4 w-full">عرض القسم</Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">المشرف</h2>
              <User className="text-red-500" />
            </div>
            <p className="text-sm text-muted-foreground mt-2">تعديل بيانات تسجيل الدخول</p>
            <Link href="/admin/settings">
              <Button className="mt-4 w-full">الإعدادات</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}

