import { NextRequest, NextResponse } from "next/server";
import { jwtDecode } from "jwt-decode";
import { UserRole } from "./types/userType";

interface User {
  _id: string;
  email: string;
  role: UserRole;
}

const authRoutes = ["/login", "/register", "/forgot-password"];

const roleBasedRoutes: Record<UserRole, string> = {
  ADMIN: "/admin/dashboard",
  USER: "/user/dashboard",
};

export function proxy(request: NextRequest) {
  const accessToken = request.cookies.get("accessToken")?.value;
  const pathname = request.nextUrl.pathname;

  // 🔴 Not logged in
  if (!accessToken && !authRoutes.includes(pathname)) {
    return NextResponse.redirect(
      new URL(`/login?redirect=${pathname}`, request.url)
    );
  }

  // 🟢 Logged in
  if (accessToken) {
    try {
      const user = jwtDecode<User>(accessToken);

      // Prevent accessing other role routes
      if (!pathname.startsWith(`/${user.role.toLowerCase()}`)) {
        return NextResponse.redirect(
          new URL(roleBasedRoutes[user.role], request.url)
        );
      }
    } catch {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  return NextResponse.next();
}


export const config = {
  matcher: ["/admin/:path*", "/user/:path*", "/login", "/register"],
};
