import createIntlMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';
import { verifyTokenEdge } from './app/api/lib/jwt-edge';

const intlMiddleware = createIntlMiddleware({
  // A list of all locales that are supported
  locales: ['ko', 'en'],

  // Used when no locale matches
  defaultLocale: 'ko',
  
  // Never use a redirect for the default locale
  localePrefix: 'always'
});

export default async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 관리자 API 라우트 처리 (다국어 라우팅 제외)
  if (pathname.startsWith('/api/admin/')) {
    // 관리자 API는 인증 미들웨어 적용 (로그인, 초기화 API 제외)
    if (!pathname.startsWith('/api/admin/login') && 
        !pathname.startsWith('/api/admin/init')) {
      const token = request.cookies.get('admin-token')?.value;
      
      if (!token) {
        return NextResponse.json(
          { success: false, message: '인증이 필요합니다.' },
          { status: 401 }
        );
      }

      const payload = await verifyTokenEdge(token);
      if (!payload) {
        return NextResponse.json(
          { success: false, message: '유효하지 않은 토큰입니다.' },
          { status: 401 }
        );
      }
    }
    
    // 관리자 API는 다국어 미들웨어 적용하지 않음
    return NextResponse.next();
  }

  // 관리자 페이지 처리 (다국어 라우팅 제외)
  if (pathname.startsWith('/admin/')) {
    // 관리자 페이지 보호
    if (pathname !== '/admin/login') {
      const token = request.cookies.get('admin-token')?.value;
      
      if (!token) {
        return NextResponse.redirect(new URL('/admin/login', request.url));
      }

      const payload = await verifyTokenEdge(token);
      if (!payload) {
        return NextResponse.redirect(new URL('/admin/login', request.url));
      }
    }

    // 로그인된 상태에서 로그인 페이지 접근 시 대시보드로 리다이렉트
    if (pathname === '/admin/login') {
      const token = request.cookies.get('admin-token')?.value;
      
      if (token) {
        const payload = await verifyTokenEdge(token);
        if (payload) {
          return NextResponse.redirect(new URL('/admin/dashboard', request.url));
        }
      }
    }

    // 관리자 페이지는 다국어 미들웨어 적용하지 않음
    return NextResponse.next();
  }

  // 다국어 미들웨어 적용 (일반 페이지와 API만)
  return intlMiddleware(request);
}

export const config = {
  // Match internationalized pathnames and admin routes
  matcher: [
    '/',
    '/(ko|en)/:path*',
    '/admin/:path*',
    '/api/admin/:path*'
  ]
};
