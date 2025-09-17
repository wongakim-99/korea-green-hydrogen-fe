import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '서비스 - Korea Green Hydrogen',
  description: 'Korea Green Hydrogen가 제공하는 그린수소 생산, 수소충전소 구축, 수소연료전지 시스템 개발 서비스를 소개합니다.',
};

export default function Services() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-green-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            서비스
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            포괄적인 수소 에너지 솔루션으로 지속가능한 미래를 구현합니다
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              주요 서비스
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Korea Green Hydrogen는 수소 에너지 밸류체인 전반에 걸친 
              종합적인 솔루션을 제공합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Service 1 */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-lg">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">그린수소 생산</h3>
              <p className="text-gray-700 mb-6">
                재생에너지를 활용한 친환경 수소 생산 시설 구축 및 운영
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  물 전기분해 기술
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  재생에너지 연계 시스템
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  대용량 수소 생산 플랜트
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  스마트 운영 시스템
                </li>
              </ul>
            </div>

            {/* Service 2 */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">수소충전소 구축</h3>
              <p className="text-gray-700 mb-6">
                수소차 보급 확산을 위한 충전 인프라 구축 및 운영
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  고압 수소 충전 시스템
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  안전관리 시스템
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  원격 모니터링
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  유지보수 서비스
                </li>
              </ul>
            </div>

            {/* Service 3 */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-lg">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">연료전지 시스템</h3>
              <p className="text-gray-700 mb-6">
                산업용 및 가정용 수소연료전지 시스템 개발 및 공급
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  발전용 연료전지
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  가정용 에너지 시스템
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  산업용 전력 공급
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  백업 전력 시스템
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">서비스 프로세스</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              체계적이고 전문적인 프로세스로 최적의 수소 에너지 솔루션을 제공합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">상담 및 분석</h3>
              <p className="text-gray-600 text-sm">
                고객 요구사항 분석 및 
                맞춤형 솔루션 제안
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">설계 및 계획</h3>
              <p className="text-gray-600 text-sm">
                전문 엔지니어링팀의 
                상세 설계 및 시공 계획
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">시공 및 설치</h3>
              <p className="text-gray-600 text-sm">
                숙련된 기술진의 
                안전한 시공 및 설치
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">운영 및 관리</h3>
              <p className="text-gray-600 text-sm">
                지속적인 모니터링 및 
                전문적인 유지보수
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">서비스 장점</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Korea Green Hydrogen만의 차별화된 장점을 경험해보세요.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">검증된 기술</h3>
              <p className="text-gray-600 text-sm">
                국제 표준 인증을 받은 
                검증된 기술력
              </p>
            </div>

            <div className="text-center p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">신속한 대응</h3>
              <p className="text-gray-600 text-sm">
                24/7 고객지원 및 
                신속한 문제 해결
              </p>
            </div>

            <div className="text-center p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">경제성</h3>
              <p className="text-gray-600 text-sm">
                최적화된 시스템으로 
                운영비용 절감
              </p>
            </div>

            <div className="text-center p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">안전성</h3>
              <p className="text-gray-600 text-sm">
                철저한 안전관리 및 
                사고 예방 시스템
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
