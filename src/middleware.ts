import { NextResponse, type NextRequest } from "next/server";
import userGet from "./actions/userGet";
// import verifyToken from "./functions/verifyToken";

export async function middleware(request: NextRequest) {
  const { ok: authenticated } = await userGet();

  // const token = request.cookies.get("token")?.value;
  // const authenticated = token ? await verifyToken(token) : false;

  if (authenticated && request.nextUrl.pathname.startsWith("/login"))
    return NextResponse.redirect(new URL("/conta", request.url));
  if (!authenticated && request.nextUrl.pathname.startsWith("/conta"))
    return NextResponse.redirect(new URL("/login", request.url));
}

export const config = {
  matcher: ["/login/:path*", "/conta/:path*"],
};
