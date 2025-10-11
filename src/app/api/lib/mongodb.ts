/**
 * MongoDB 연결 관리
 * 
 * 싱글톤 패턴을 사용하여 연결 재사용
 * - 개발 모드: Hot Reload 시 연결 누수 방지
 * - 프로덕션: Serverless 환경에서 연결 풀 최적화
 */

import { MongoClient, Db, Document } from 'mongodb';

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
    
    // 서버 시작 시 DB 연결 확인
    global._mongoClientPromise
      .then(async (connectedClient) => {
        try {
          // ping 명령으로 연결 테스트
          await connectedClient.db('admin').command({ ping: 1 });
          console.log('✅ MongoDB: 새 연결 생성 및 연결 확인 완료 (개발 모드)');
          console.log(`   📂 데이터베이스: ${dbName}`);
          console.log(`   🔗 URI: ${uri.replace(/\/\/([^:]+):([^@]+)@/, '//$1:****@')}`); // 비밀번호 마스킹
        } catch (error) {
          console.error('❌ MongoDB 연결 테스트 실패:', error);
          throw error;
        }
      })
      .catch((error) => {
        console.error('❌ MongoDB 연결 실패 (개발 모드)');
        console.error('   원인:', error.message);
        console.error('\n💡 해결 방법:');
        console.error('   1. .env.local 파일에서 MONGODB_URI 확인');
        console.error('   2. MongoDB 서버가 실행 중인지 확인');
        console.error('   3. MongoDB Atlas의 경우 IP 허용 목록 확인');
        console.error('   4. 네트워크 연결 및 방화벽 설정 확인\n');
      });
  } else {
    console.log('♻️  MongoDB: 기존 연결 재사용 (개발 모드)');
  }
  clientPromise = global._mongoClientPromise;
} else {
  // 프로덕션 모드: 일반적인 방식으로 연결
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
  
  // 프로덕션 모드에서도 연결 확인
  clientPromise
    .then(async (connectedClient) => {
      await connectedClient.db('admin').command({ ping: 1 });
      console.log('✅ MongoDB: 연결 생성 및 확인 완료 (프로덕션 모드)');
    })
    .catch((error) => {
      console.error('❌ MongoDB 연결 실패 (프로덕션):', error.message);
    });
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
export async function getCollection<T extends Document = Document>(collectionName: string) {
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
