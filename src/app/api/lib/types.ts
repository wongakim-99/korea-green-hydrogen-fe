/**
 * API 타입 정의
 */

import { ObjectId } from 'mongodb';

/**
 * 문의하기 폼 데이터
 */
export interface InquiryFormData {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  subject: string;
  message: string;
}

/**
 * DB에 저장되는 문의 데이터
 */
export interface InquiryDocument extends InquiryFormData {
  _id?: ObjectId;
  locale: string;          // 'ko' | 'en'
  status: 'pending' | 'read' | 'replied';
  createdAt: Date;
  updatedAt: Date;
  ipAddress?: string;      // 요청 IP (선택)
  userAgent?: string;      // 브라우저 정보 (선택)
}

/**
 * API 응답 형식
 */
export interface ApiResponse<T = any> {
  success: boolean;
  message: string;
  data?: T;
  error?: string;
}

