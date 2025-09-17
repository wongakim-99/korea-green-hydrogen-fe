# Korea Green Hydrogen - 회사소개 웹사이트

대한민국의 친환경 수소 에너지 기술을 선도하는 Korea Green Hydrogen의 공식 웹사이트입니다.

## 🚀 기술 스택

- **Framework**: Next.js 15.5.3 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Fonts**: Geist Sans & Geist Mono
- **Deployment**: Vercel (권장)

## 📋 주요 기능

- ✅ **반응형 디자인**: PC, 태블릿, 모바일 최적화
- ✅ **SEO 최적화**: 메타태그, 구조화된 데이터, sitemap
- ✅ **SSR/SSG**: 검색엔진 최적화를 위한 서버사이드 렌더링
- ✅ **접근성**: 웹 접근성 표준 준수
- ✅ **성능 최적화**: 이미지 최적화, 코드 스플리팅

## 🏗️ 프로젝트 구조

```
src/
├── app/                    # App Router 페이지
│   ├── about/             # 회사소개 페이지
│   ├── services/          # 서비스 페이지
│   ├── projects/          # 프로젝트 페이지
│   ├── contact/           # 연락처 페이지
│   ├── layout.tsx         # 루트 레이아웃
│   ├── page.tsx           # 홈페이지
│   └── sitemap.ts         # 사이트맵 생성
├── components/            # 재사용 가능한 컴포넌트
│   └── layout/           # 레이아웃 컴포넌트
│       ├── Header.tsx    # 헤더/네비게이션
│       └── Footer.tsx    # 푸터
└── globals.css           # 전역 스타일
```

## 🛠️ 개발 환경 설정

### 1. 의존성 설치
```bash
npm install
```

### 2. 개발 서버 실행
```bash
npm run dev
```

### 3. 브라우저에서 확인
[http://localhost:3000](http://localhost:3000)에서 결과를 확인하세요.

## 📱 반응형 브레이크포인트

```css
/* 모바일 세로 */
@media (min-width: 480px) { /* xs */ }

/* 모바일 가로 */
@media (min-width: 640px) { /* sm */ }

/* 태블릿 세로 */
@media (min-width: 768px) { /* md */ }

/* 태블릿 가로 / 작은 데스크톱 */
@media (min-width: 1024px) { /* lg */ }

/* 데스크톱 */
@media (min-width: 1280px) { /* xl */ }

/* 큰 데스크톱 */
@media (min-width: 1536px) { /* 2xl */ }
```

## 🚀 배포

### Vercel 배포 (권장)
1. GitHub에 코드 push
2. [Vercel](https://vercel.com)에서 프로젝트 import
3. 자동 배포 완료

### 수동 빌드
```bash
# 프로덕션 빌드
npm run build

# 빌드 결과 실행
npm run start
```

## 📄 페이지 구성

- **홈** (`/`): 메인 랜딩 페이지
- **회사소개** (`/about`): 회사 정보, 미션/비전, 핵심가치
- **서비스** (`/services`): 주요 서비스 소개
- **프로젝트** (`/projects`): 주요 프로젝트 및 성과
- **연락처** (`/contact`): 연락처 정보 및 문의 양식

## 🎨 디자인 시스템

### 색상 팔레트
- **Primary Green**: `#059669` (green-600)
- **Primary Blue**: `#2563eb` (blue-600)
- **Text**: `#111827` (gray-900)
- **Background**: `#ffffff` (white)

### 타이포그래피
- **Heading Font**: Geist Sans
- **Body Font**: Geist Sans
- **Mono Font**: Geist Mono

## 📈 SEO 최적화

- 각 페이지별 메타데이터 설정
- 구조화된 데이터 (JSON-LD) 적용
- sitemap.xml 자동 생성
- robots.txt 설정
- 의미있는 HTML 구조

## 🔧 개발 스크립트

```bash
# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build

# 프로덕션 서버 실행
npm run start

# 린트 검사
npm run lint
```

## 📝 커스터마이징 가이드

### 1. 회사 정보 수정
- `src/components/StructuredData.tsx`: 구조화된 데이터
- `src/app/layout.tsx`: 메타데이터
- `src/components/layout/Footer.tsx`: 연락처 정보

### 2. 컬러 테마 변경
- `src/app/globals.css`: CSS 변수 수정
- Tailwind 클래스명에서 색상 변경

### 3. 콘텐츠 수정
각 페이지의 `page.tsx` 파일에서 콘텐츠를 수정하세요.

## 📞 기술 지원

프로젝트 관련 문의사항이 있으시면 언제든지 연락해주세요.

---

**Korea Green Hydrogen** - 지속가능한 미래를 위한 친환경 수소 에너지 솔루션
