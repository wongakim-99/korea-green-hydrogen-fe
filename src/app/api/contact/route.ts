/**
 * 문의하기 API
 * 
 * POST /api/contact
 * - 문의 데이터를 MongoDB에 저장
 */

import { NextRequest, NextResponse } from 'next/server';
import { getCollection } from '@/app/api/lib/mongodb';
import { InquiryFormData, InquiryDocument, ApiResponse } from '@/app/api/lib/types';

/**
 * POST: 문의 제출
 */
export async function POST(request: NextRequest) {
  try {
    // 1. 요청 본문 파싱
    const body: InquiryFormData = await request.json();

    // 2. 필수 필드 검증
    const { name, email, subject, message } = body;
    
    if (!name || !email || !subject || !message) {
      return NextResponse.json<ApiResponse>(
        {
          success: false,
          message: '필수 항목을 모두 입력해주세요.',
          error: 'Missing required fields'
        },
        { status: 400 }
      );
    }

    // 3. 이메일 형식 검증
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json<ApiResponse>(
        {
          success: false,
          message: '올바른 이메일 형식이 아닙니다.',
          error: 'Invalid email format'
        },
        { status: 400 }
      );
    }

    // 4. 문의 유형 검증
    const validSubjects = ['general', 'technical', 'partnership', 'investment', 'career'];
    if (!validSubjects.includes(subject)) {
      return NextResponse.json<ApiResponse>(
        {
          success: false,
          message: '올바른 문의 유형을 선택해주세요.',
          error: 'Invalid subject type'
        },
        { status: 400 }
      );
    }

    // 5. 저장할 문서 생성
    const inquiryDoc: Omit<InquiryDocument, '_id'> = {
      name,
      email,
      company: body.company || '',
      phone: body.phone || '',
      subject,
      message,
      locale: request.headers.get('accept-language')?.includes('ko') ? 'ko' : 'en',
      status: 'pending',
      createdAt: new Date(),
      updatedAt: new Date(),
      ipAddress: request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || '',
      userAgent: request.headers.get('user-agent') || ''
    };

    // 6. MongoDB에 저장
    const collection = await getCollection<InquiryDocument>('inquiries');
    const result = await collection.insertOne(inquiryDoc as InquiryDocument);

    console.log('✅ 문의 저장 성공:', result.insertedId);

    // 7. 성공 응답
    return NextResponse.json<ApiResponse>(
      {
        success: true,
        message: '문의사항이 성공적으로 접수되었습니다.',
        data: {
          id: result.insertedId.toString(),
          createdAt: inquiryDoc.createdAt
        }
      },
      { status: 201 }
    );

  } catch (error) {
    console.error('❌ 문의 저장 실패:', error);

    return NextResponse.json<ApiResponse>(
      {
        success: false,
        message: '문의 접수 중 오류가 발생했습니다.',
        error: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

/**
 * GET: 허용되지 않는 메서드
 */
export async function GET() {
  return NextResponse.json<ApiResponse>(
    {
      success: false,
      message: 'GET 메서드는 지원하지 않습니다. POST를 사용해주세요.',
      error: 'Method not allowed'
    },
    { status: 405 }
  );
}

