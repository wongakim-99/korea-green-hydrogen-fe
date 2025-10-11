/**
 * 문의 목록 조회 API (임시 - 추후 인증 추가 필요)
 * 
 * GET /api/admin/inquiries
 * - 모든 문의 목록 조회
 */

import { NextRequest, NextResponse } from 'next/server';
import { getCollection } from '@/app/api/lib/mongodb';
import { InquiryDocument, ApiResponse } from '@/app/api/lib/types';

export async function GET(request: NextRequest) {
  try {
    // URL 파라미터에서 페이징 정보 가져오기
    const { searchParams } = new URL(request.url);
    const limit = parseInt(searchParams.get('limit') || '10');
    const skip = parseInt(searchParams.get('skip') || '0');

    // MongoDB 컬렉션 가져오기
    const collection = await getCollection<InquiryDocument>('inquiries');

    // 전체 개수 조회
    const total = await collection.countDocuments();

    // 문의 목록 조회 (최신순)
    const inquiries = await collection
      .find({})
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .toArray();

    // 응답
    return NextResponse.json<ApiResponse>({
      success: true,
      message: '문의 목록을 성공적으로 조회했습니다.',
      data: {
        total,
        count: inquiries.length,
        inquiries: inquiries.map(inquiry => ({
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
        }))
      }
    });

  } catch (error) {
    console.error('❌ 문의 목록 조회 실패:', error);

    return NextResponse.json<ApiResponse>(
      {
        success: false,
        message: '문의 목록 조회 중 오류가 발생했습니다.',
        error: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

