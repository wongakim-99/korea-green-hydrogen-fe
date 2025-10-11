/**
 * 관리자 로그아웃 API
 * 
 * POST /api/admin/logout
 * - 쿠키에서 토큰 제거
 */

import { NextRequest, NextResponse } from 'next/server';
import { ApiResponse } from '@/app/api/lib/types';

export async function POST(request: NextRequest) {
  try {
    // 응답 생성
    const response = NextResponse.json<ApiResponse>({
      success: true,
      message: '로그아웃되었습니다.'
    });

    // 쿠키에서 토큰 제거
    response.cookies.set('admin-token', '', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 0,
      path: '/'
    });

    return response;

  } catch (error) {
    console.error('❌ 로그아웃 실패:', error);

    return NextResponse.json<ApiResponse>(
      {
        success: false,
        message: '로그아웃 중 오류가 발생했습니다.',
        error: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}
