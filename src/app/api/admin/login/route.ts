/**
 * 관리자 로그인 API
 * 
 * POST /api/admin/login
 * - 관리자 로그인 처리
 * - JWT 토큰 발급
 * - 쿠키에 토큰 저장
 */

import { NextRequest, NextResponse } from 'next/server';
import { getCollection } from '@/app/api/lib/mongodb';
import { AdminDocument, AdminLoginData, ApiResponse } from '@/app/api/lib/types';
import { verifyPassword, cookieOptions } from '@/app/api/lib/auth';
import { generateTokenEdge } from '@/app/api/lib/jwt-edge';

// 동적 렌더링 강제 (쿠키 및 인증 처리로 인해)
export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
  try {
    const body: AdminLoginData = await request.json();
    const { username, password } = body;

    // 입력값 검증
    if (!username || !password) {
      return NextResponse.json<ApiResponse>(
        {
          success: false,
          message: '아이디와 비밀번호를 입력해주세요.'
        },
        { status: 400 }
      );
    }

    // MongoDB 컬렉션 가져오기
    const collection = await getCollection<AdminDocument>('admins');

    // 관리자 계정 조회
    const admin = await collection.findOne({ 
      username: username.toLowerCase(),
      isActive: true 
    });

    if (!admin) {
      return NextResponse.json<ApiResponse>(
        {
          success: false,
          message: '아이디 또는 비밀번호가 올바르지 않습니다.'
        },
        { status: 401 }
      );
    }

    // 계정 잠금 확인
    if (admin.lockedUntil && admin.lockedUntil > new Date()) {
      return NextResponse.json<ApiResponse>(
        {
          success: false,
          message: '계정이 잠금되었습니다. 잠시 후 다시 시도해주세요.'
        },
        { status: 423 }
      );
    }

    // 비밀번호 검증
    const isPasswordValid = await verifyPassword(password, admin.password);

    if (!isPasswordValid) {
      // 로그인 시도 횟수 증가
      const loginAttempts = admin.loginAttempts + 1;
      const updateData: Partial<AdminDocument> = {
        loginAttempts,
        ...(loginAttempts >= 5 && { lockedUntil: new Date(Date.now() + 30 * 60 * 1000) }) // 30분 잠금
      };

      await collection.updateOne(
        { _id: admin._id },
        { $set: updateData }
      );

      return NextResponse.json<ApiResponse>(
        {
          success: false,
          message: '아이디 또는 비밀번호가 올바르지 않습니다.'
        },
        { status: 401 }
      );
    }

    // 로그인 성공 - 시도 횟수 초기화 및 마지막 로그인 시간 업데이트
    await collection.updateOne(
      { _id: admin._id },
      { 
        $set: { 
          loginAttempts: 0,
          lastLoginAt: new Date(),
          lockedUntil: undefined
        } 
      }
    );

    // JWT 토큰 생성
    const token = await generateTokenEdge({
      adminId: admin._id!.toString(),
      username: admin.username,
      role: admin.role
    });

    // 응답 생성
    const response = NextResponse.json<ApiResponse>({
      success: true,
      message: '로그인에 성공했습니다.',
      data: {
        adminId: admin._id?.toString(),
        username: admin.username,
        role: admin.role,
        lastLoginAt: admin.lastLoginAt
      }
    });

    // 쿠키에 토큰 저장
    response.cookies.set('admin-token', token, cookieOptions);

    return response;

  } catch (error) {
    console.error('❌ 관리자 로그인 실패:', error);

    return NextResponse.json<ApiResponse>(
      {
        success: false,
        message: '로그인 중 오류가 발생했습니다.',
        error: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}
