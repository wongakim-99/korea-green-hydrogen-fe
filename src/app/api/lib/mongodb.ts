/**
 * MongoDB 연결 관리
 * 
 * 싱글톤 패턴을 사용하여 연결 재사용
 * - 개발 모드: Hot Reload 시 연결 누수 방지
 * - 프로덕션: Serverless 환경에서 연결 풀 최적화
 */

import { MongoClient, Db } from 'mongodb';

if (!process.env.MONGODB_URI) {
  throw new Error('MONGODB_URI 환경 변수가 설정되지 않았습니다.');
}

if (!process.env.MONGODB_DB) {
  throw new Error('MONGODB_DB 환경 변수가 설정되지 않았습니다.');
}

const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB;
const options = {
  maxPoolSize: 10, // 연결 풀 크기
  minPoolSize: 5,
};

// 전역 변수에 MongoDB 클라이언트 캐싱 (개발 모드 Hot Reload 대응)
declare global {
  // eslint-disable-next-line no-var
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

if (process.env.NODE_ENV === 'development') {
  // 개발 모드: 전역 변수를 사용하여 Hot Reload 시에도 연결 유지
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
    console.log('✅ MongoDB: 새 연결 생성 (개발 모드)');
  } else {
    console.log('♻️  MongoDB: 기존 연결 재사용 (개발 모드)');
  }
  clientPromise = global._mongoClientPromise;
} else {
  // 프로덕션 모드: 일반적인 방식으로 연결
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
  console.log('✅ MongoDB: 연결 생성 (프로덕션 모드)');
}

/**
 * MongoDB 클라이언트 가져오기
 * @returns MongoClient Promise
 */
export async function getMongoClient(): Promise<MongoClient> {
  return clientPromise;
}

/**
 * MongoDB 데이터베이스 가져오기
 * @returns Database instance
 */
export async function getDatabase(): Promise<Db> {
  const client = await clientPromise;
  return client.db(dbName);
}

/**
 * 특정 컬렉션 가져오기
 * @param collectionName - 컬렉션 이름
 * @returns Collection instance
 */
export async function getCollection<T = any>(collectionName: string) {
  const db = await getDatabase();
  return db.collection<T>(collectionName);
}

/**
 * 연결 테스트
 * @returns 연결 성공 여부
 */
export async function testConnection(): Promise<boolean> {
  try {
    const client = await clientPromise;
    await client.db('admin').command({ ping: 1 });
    console.log('✅ MongoDB 연결 테스트 성공');
    return true;
  } catch (error) {
    console.error('❌ MongoDB 연결 테스트 실패:', error);
    return false;
  }
}

// 기본 export
export default clientPromise;
