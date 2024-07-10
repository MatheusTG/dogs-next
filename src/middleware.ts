import { NextResponse, type NextRequest } from "next/server";
import userGet from "./actions/userGet";

export async function middleware(request: NextRequest) {
  const user = await userGet();
  if (user.ok && request.nextUrl.pathname.startsWith("/login"))
    return NextResponse.redirect(new URL("/conta", request.url));
  if (!user.ok && request.nextUrl.pathname.startsWith("/conta"))
    return NextResponse.redirect(new URL("/login", request.url));
}

export const config = {
  matcher: ["/login/:path*", "/conta/:path*"],
};
