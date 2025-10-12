/**
 * 관리자 로그아웃 API
 * 
 * POST /api/admin/logout
 * - 쿠키에서 토큰 제거 (인증 필요)
 */

import { NextRequest, NextResponse } from 'next/server';
import { ApiResponse } from '@/app/api/lib/types';
import { extractTokenFromRequest } from '@/app/api/lib/auth';
import { verifyTokenEdge } from '@/app/api/lib/jwt-edge';

export async function POST(request: NextRequest) {
  try {
    // 인증 확인 (로그아웃 시에도 토큰 유효성 검증)
    const token = extractTokenFromRequest(request);
    if (token) {
      const tokenPayload = await verifyTokenEdge(token);
      if (!tokenPayload) {
        // 토큰이 유효하지 않아도 로그아웃은 진행 (쿠키만 삭제)
        console.warn('유효하지 않은 토큰으로 로그아웃 시도');
      }
    }

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
