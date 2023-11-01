import { withAuth, NextRequestWithAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    const url = req.nextUrl.pathname;
    const userRole = req.nextauth.token?.role

    // Check if user is authenticated
    if (!req.nextauth.token) {
      return NextResponse.redirect(new URL("/signin", req.url));
    }

    if ((url?.startsWith('/admin') || url?.startsWith('/officer')) && userRole !== "admin" && userRole !== "officer") {
      return NextResponse.redirect(new URL("/admin", req.url));
    }
    if ((url?.startsWith('/user') || url?.startsWith('/officer')) && userRole !== "user" && userRole !== "officer") {
      return NextResponse.redirect(new URL("/Home", req.url));
    }
      // Check if user is trying to access the /Home/claim page
    if (url === '/Home/claim' && userRole !== "user" && userRole !== "officer" ) {
      return NextResponse.redirect(new URL("/error", req.url));
    }
    console.log(req.nextauth.token);
    console.log(req.nextUrl.pathname);
  },
  {
    callbacks: {
      authorized: ({ token }) => token?.role === "admin" || token?.role === "officer" || token?.role === "user",
    },
  }
);
//export { default } from 'next-auth/middleware'

export const config = { matcher: ['/profile',  '/officer', '/Home/claim'] }