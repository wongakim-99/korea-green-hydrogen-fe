/**
 * 개별 문의 조회 및 업데이트 API
 * 
 * GET /api/admin/inquiries/[id] - 개별 문의 조회 (인증 필요)
 * PATCH /api/admin/inquiries/[id] - 문의 상태 업데이트 (인증 필요)
 */

import { NextRequest, NextResponse } from 'next/server';
import { getCollection } from '@/app/api/lib/mongodb';
import { InquiryDocument, ApiResponse } from '@/app/api/lib/types';
import { extractTokenFromRequest } from '@/app/api/lib/auth';
import { verifyTokenEdge } from '@/app/api/lib/jwt-edge';
import { ObjectId } from 'mongodb';

// 개별 문의 조회
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
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

    const { id } = params;

    // ObjectId 유효성 검사
    if (!ObjectId.isValid(id)) {
      return NextResponse.json<ApiResponse>(
        {
          success: false,
          message: '유효하지 않은 문의 ID입니다.'
        },
        { status: 400 }
      );
    }

    // MongoDB 컬렉션 가져오기
    const collection = await getCollection<InquiryDocument>('inquiries');

    // 문의 조회
    const inquiry = await collection.findOne({ _id: new ObjectId(id) });

    if (!inquiry) {
      return NextResponse.json<ApiResponse>(
        {
          success: false,
          message: '문의를 찾을 수 없습니다.'
        },
        { status: 404 }
      );
    }

    // 응답
    return NextResponse.json<ApiResponse>({
      success: true,
      message: '문의를 성공적으로 조회했습니다.',
      data: {
        id: inquiry._id?.toString(),
        name: inquiry.name,
        email: inquiry.email,
        company: inquiry.company,
        phone: inquiry.phone,
        subject: inquiry.subject,
        message: inquiry.message,
        locale: inquiry.locale,
        status: inquiry.status,
        createdAt: inquiry.createdAt,
        ipAddress: inquiry.ipAddress
      }
    });

  } catch (error) {
    console.error('❌ 문의 조회 실패:', error);

    return NextResponse.json<ApiResponse>(
      {
        success: false,
        message: '문의 조회 중 오류가 발생했습니다.',
        error: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

// 문의 상태 업데이트
export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
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

    const { id } = params;
    const body = await request.json();
    const { status } = body;

    // ObjectId 유효성 검사
    if (!ObjectId.isValid(id)) {
      return NextResponse.json<ApiResponse>(
        {
          success: false,
          message: '유효하지 않은 문의 ID입니다.'
        },
        { status: 400 }
      );
    }

    // 상태 값 유효성 검사
    if (!status || !['pending', 'read'].includes(status)) {
      return NextResponse.json<ApiResponse>(
        {
          success: false,
          message: '유효하지 않은 상태 값입니다.'
        },
        { status: 400 }
      );
    }

    // MongoDB 컬렉션 가져오기
    const collection = await getCollection<InquiryDocument>('inquiries');

    // 문의 상태 업데이트
    const result = await collection.updateOne(
      { _id: new ObjectId(id) },
      { 
        $set: { 
          status: status,
          updatedAt: new Date()
        } 
      }
    );

    if (result.matchedCount === 0) {
      return NextResponse.json<ApiResponse>(
        {
          success: false,
          message: '문의를 찾을 수 없습니다.'
        },
        { status: 404 }
      );
    }

    // 업데이트된 문의 조회
    const updatedInquiry = await collection.findOne({ _id: new ObjectId(id) });

    // 응답
    return NextResponse.json<ApiResponse>({
      success: true,
      message: '문의 상태가 성공적으로 업데이트되었습니다.',
      data: {
        id: updatedInquiry?._id?.toString(),
        name: updatedInquiry?.name,
        email: updatedInquiry?.email,
        company: updatedInquiry?.company,
        phone: updatedInquiry?.phone,
        subject: updatedInquiry?.subject,
        message: updatedInquiry?.message,
        locale: updatedInquiry?.locale,
        status: updatedInquiry?.status,
        createdAt: updatedInquiry?.createdAt,
        ipAddress: updatedInquiry?.ipAddress
      }
    });

  } catch (error) {
    console.error('❌ 문의 상태 업데이트 실패:', error);

    return NextResponse.json<ApiResponse>(
      {
        success: false,
        message: '문의 상태 업데이트 중 오류가 발생했습니다.',
        error: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}
