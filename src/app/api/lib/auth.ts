/**
 * 인증 관련 유틸리티 함수
 */

import bcrypt from 'bcryptjs';
import { NextRequest } from 'next/server';

/**
 * 비밀번호 해시화
 */
export async function hashPassword(password: string): Promise<string> {
  const saltRounds = 12;
  return bcrypt.hash(password, saltRounds);
}

/**
 * 비밀번호 검증
 */
export async function verifyPassword(password: string, hashedPassword: string): Promise<boolean> {
  return bcrypt.compare(password, hashedPassword);
}

/**
 * 요청에서 토큰 추출
 */
export function extractTokenFromRequest(request: NextRequest): string | null {
  // Authorization 헤더에서 Bearer 토큰 추출
  const authHeader = request.headers.get('authorization');
  if (authHeader && authHeader.startsWith('Bearer ')) {
    return authHeader.substring(7);
  }

  // 쿠키에서 토큰 추출
  const cookieToken = request.cookies.get('admin-token')?.value;
  if (cookieToken) {
    return cookieToken;
  }

  return null;
}

/**
 * 인증된 관리자 정보 추출 (Edge Runtime 호환 버전은 jwt-edge.ts에서 제공)
 * 
 * @deprecated 이 함수는 jwt-edge.ts의 verifyTokenEdge를 사용하세요
 */
export function getAuthenticatedAdmin(request: NextRequest): any {
  console.warn('getAuthenticatedAdmin은 deprecated되었습니다. jwt-edge.ts의 verifyTokenEdge를 사용하세요.');
  return null;
}

/**
 * 쿠키 설정 옵션
 */
export const cookieOptions = {
  httpOnly: true,
  secure: process.env.NODE_ENV === 'production',
  sameSite: 'strict' as const,
  maxAge: 24 * 60 * 60 * 1000, // 24시간
  path: '/'
};
