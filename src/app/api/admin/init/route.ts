/**
 * 관리자 계정 초기 생성 API
 * 
 * POST /api/admin/init
 * - 기본 관리자 계정 생성 (개발용)
 * - 이미 관리자가 있으면 생성하지 않음
 */

import { NextRequest, NextResponse } from 'next/server';
import { getCollection } from '@/app/api/lib/mongodb';
import { AdminDocument, ApiResponse } from '@/app/api/lib/types';
import { hashPassword } from '@/app/api/lib/auth';

export async function POST(request: NextRequest) {
  try {
    // 개발 환경에서만 실행
    if (process.env.NODE_ENV === 'production') {
      return NextResponse.json<ApiResponse>(
        {
          success: false,
          message: '프로덕션 환경에서는 사용할 수 없습니다.'
        },
        { status: 403 }
      );
    }

    const collection = await getCollection<AdminDocument>('admins');

    // 이미 관리자가 있는지 확인
    const existingAdmin = await collection.findOne({});
    if (existingAdmin) {
      return NextResponse.json<ApiResponse>(
        {
          success: false,
          message: '이미 관리자 계정이 존재합니다.'
        },
        { status: 409 }
      );
    }

    // 기본 관리자 계정 생성
    const defaultPassword = 'admin123';
    const hashedPassword = await hashPassword(defaultPassword);

    const adminData: Omit<AdminDocument, '_id'> = {
      username: 'admin',
      password: hashedPassword,
      role: 'admin',
      isActive: true,
      createdAt: new Date(),
      loginAttempts: 0
    };

    const result = await collection.insertOne(adminData);

    return NextResponse.json<ApiResponse>({
      success: true,
      message: '기본 관리자 계정이 생성되었습니다.',
      data: {
        username: 'admin',
        password: defaultPassword,
        note: '로그인 후 비밀번호를 변경해주세요.'
      }
    });

  } catch (error) {
    console.error('❌ 관리자 계정 초기 생성 실패:', error);

    return NextResponse.json<ApiResponse>(
      {
        success: false,
        message: '관리자 계정 생성 중 오류가 발생했습니다.',
        error: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}
