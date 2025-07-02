import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;

  const url = request.nextUrl.clone();
  const isAdminRoute = url.pathname.startsWith("/admin") && !url.pathname.includes("/login");

  if (isAdminRoute) {
    if (!token) {
      url.pathname = "/admin/login";
      return NextResponse.redirect(url);
    }

    try {
      jwt.verify(token, process.env.JWT_SECRET!);
    } catch (err) {
      url.pathname = "/admin/login";
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};

