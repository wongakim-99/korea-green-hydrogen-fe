/**
 * Edge Runtime 호환 JWT 유틸리티
 * 
 * jose 라이브러리를 사용하여 Edge Runtime에서 JWT 처리
 */

import { SignJWT, jwtVerify } from 'jose';
import type { JWTPayload } from './types';

// JWT 시크릿 키 (환경변수에서 가져오거나 기본값 사용)
const JWT_SECRET = process.env.JWT_SECRET || 'your-super-secret-jwt-key-change-in-production';
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '24h';

// 시크릿 키를 TextEncoder로 변환
const secret = new TextEncoder().encode(JWT_SECRET);

/**
 * JWT 토큰 생성 (Edge Runtime 호환)
 */
export async function generateTokenEdge(payload: Omit<JWTPayload, 'iat' | 'exp'>): Promise<string> {
  const jwt = await new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime(JWT_EXPIRES_IN)
    .sign(secret);

  return jwt;
}

/**
 * JWT 토큰 검증 (Edge Runtime 호환)
 */
export async function verifyTokenEdge(token: string): Promise<JWTPayload | null> {
  try {
    const { payload } = await jwtVerify(token, secret);
    // jose의 JWTPayload를 우리의 JWTPayload 타입으로 변환
    return {
      adminId: payload.adminId as string,
      username: payload.username as string,
      role: payload.role as string,
      iat: payload.iat || 0,
      exp: payload.exp || 0
    } as JWTPayload;
  } catch (error) {
    console.error('JWT 토큰 검증 실패:', error);
    return null;
  }
}
