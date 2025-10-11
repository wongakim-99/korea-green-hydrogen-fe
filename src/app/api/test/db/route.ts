/**
 * MongoDB 연결 테스트 API
 * 
 * GET /api/test/db
 * - MongoDB 연결 상태 확인
 * - 데이터베이스 정보 조회
 */

import { NextResponse } from 'next/server';
import { testConnection, getDatabase } from '@/app/api/lib/mongodb';

export async function GET() {
  try {
    // 1. 연결 테스트
    const isConnected = await testConnection();
    
    if (!isConnected) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'MongoDB 연결 실패',
          error: '데이터베이스에 연결할 수 없습니다.'
        },
        { status: 500 }
      );
    }

    // 2. 데이터베이스 정보 조회
    const db = await getDatabase();
    const collections = await db.listCollections().toArray();
    const stats = await db.stats();

    // 3. 성공 응답
    return NextResponse.json({
      success: true,
      message: 'MongoDB 연결 성공! 🎉',
      data: {
        database: db.databaseName,
        collections: collections.map(c => c.name),
        stats: {
          collections: stats.collections,
          dataSize: `${(stats.dataSize / 1024 / 1024).toFixed(2)} MB`,
          indexSize: `${(stats.indexSize / 1024 / 1024).toFixed(2)} MB`,
          totalSize: `${((stats.dataSize + stats.indexSize) / 1024 / 1024).toFixed(2)} MB`,
        }
      },
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('MongoDB 연결 테스트 에러:', error);
    
    return NextResponse.json(
      { 
        success: false,
        message: 'MongoDB 연결 테스트 중 오류 발생',
        error: error instanceof Error ? error.message : '알 수 없는 오류'
      },
      { status: 500 }
    );
  }
}

