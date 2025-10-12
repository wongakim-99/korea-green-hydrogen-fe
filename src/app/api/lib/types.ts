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
  status: 'pending' | 'read';
  createdAt: Date;
  updatedAt: Date;
  ipAddress?: string;      // 요청 IP (선택)
  userAgent?: string;      // 브라우저 정보 (선택)
}

/**
 * 관리자 로그인 폼 데이터
 */
export interface AdminLoginData {
  username: string;
  password: string;
}

/**
 * DB에 저장되는 관리자 계정 데이터
 */
export interface AdminDocument {
  _id?: ObjectId;
  username: string;
  password: string;        // bcrypt로 암호화된 비밀번호
  role: 'admin' | 'super_admin';
  isActive: boolean;
  createdAt: Date;
  lastLoginAt?: Date;
  loginAttempts: number;   // 로그인 시도 횟수 (보안용)
  lockedUntil?: Date;      // 계정 잠금 시간
}

/**
 * JWT 토큰 페이로드
 */
export interface JWTPayload {
  adminId: string;
  username: string;
  role: string;
  iat: number;
  exp: number;
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

