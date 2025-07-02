import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// هذه الدالة تُنفذ قبل الوصول لأي مسار
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // مثال: حماية لوحة التحكم
  if (pathname.startsWith('/admin')) {
    const isLoggedIn = request.cookies.get('token')?.value
    if (!isLoggedIn) {
      return NextResponse.redirect(new URL('/login', request.url))
    }
  }

  // يمكنك هنا إضافة شروط أخرى مثل إعادة التوجيه أو الحجب حسب الحاجة

  return NextResponse.next()
}

// تحديد المسارات التي يعمل عليها الـ middleware
export const config = {
  matcher: ['/admin/:path*'], // أي مسار يبدأ بـ /admin
}

