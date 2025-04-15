import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const adminEmail = process.env.ADMIN_EMAIL;
  
  if (request.nextUrl.pathname.startsWith('/admin')) {
    const userEmail = request.cookies.get('userEmail')?.value;
    
    if (!userEmail || userEmail !== adminEmail) {
      return NextResponse.redirect(new URL('/', request.url));
    }
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: '/admin/:path*',
}; 