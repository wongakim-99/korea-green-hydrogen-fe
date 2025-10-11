/**
 * 현재 로그인한 관리자 정보 조회 API
 * 
 * GET /api/admin/me
 * - 현재 인증된 관리자 정보 반환
 */

import { NextRequest, NextResponse } from 'next/server';
import { getCollection } from '@/app/api/lib/mongodb';
import { AdminDocument, ApiResponse } from '@/app/api/lib/types';
import { extractTokenFromRequest } from '@/app/api/lib/auth';
import { verifyTokenEdge } from '@/app/api/lib/jwt-edge';
import { ObjectId } from 'mongodb';

// 동적 렌더링 강제 (request.headers 사용으로 인해)
export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  try {
    // 인증 확인
    const token = extractTokenFromRequest(request);
    if (!token) {
      return NextResponse.json<ApiResponse>(
        {
          success: false,
          message: '인증이 필요합니다.'
        },
        { status: 401 }
      );
    }

    const tokenPayload = await verifyTokenEdge(token);
    if (!tokenPayload) {
      return NextResponse.json<ApiResponse>(
        {
          success: false,
          message: '인증이 필요합니다.'
        },
        { status: 401 }
      );
    }

    // MongoDB에서 최신 관리자 정보 조회
    const collection = await getCollection<AdminDocument>('admins');
    const admin = await collection.findOne({ 
      _id: new ObjectId(tokenPayload.adminId),
      isActive: true 
    });

    if (!admin) {
      return NextResponse.json<ApiResponse>(
        {
          success: false,
          message: '관리자 계정을 찾을 수 없습니다.'
        },
        { status: 404 }
      );
    }

    // 응답 (비밀번호 제외)
    return NextResponse.json<ApiResponse>({
      success: true,
      message: '관리자 정보를 성공적으로 조회했습니다.',
      data: {
        adminId: admin._id?.toString(),
        username: admin.username,
        role: admin.role,
        createdAt: admin.createdAt,
        lastLoginAt: admin.lastLoginAt
      }
    });

  } catch (error) {
    console.error('❌ 관리자 정보 조회 실패:', error);

    return NextResponse.json<ApiResponse>(
      {
        success: false,
        message: '관리자 정보 조회 중 오류가 발생했습니다.',
        error: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}
