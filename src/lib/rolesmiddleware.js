import { NextResponse } from 'next/server';
import { getAccessToken } from '@auth0/nextjs-auth0/edge';
import { jwtDecode } from 'jwt-decode';

export async function middleware(req) {
  const { accessToken } = await getAccessToken(req);

  if (!accessToken) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  const decoded = jwtDecode(accessToken);

  const path = new URL(req.url).pathname;

  if (decoded.permissions.includes('admin')) {
    if (path === '/forms/product') {
      return NextResponse.redirect(new URL('/access-denied', req.url));
    }
    return NextResponse.next();
  }

  if (decoded.permissions.includes('cajero')) {
    if (path === '/forms/product') {
      return NextResponse.redirect(new URL('/access-denied', req.url));
    }
    return NextResponse.next();
  }

  return NextResponse.redirect(new URL('/access-denied', req.url));
}
