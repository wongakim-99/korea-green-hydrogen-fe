import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '바이오가스 생산 - Korea Green Hydrogen',
  description: '유기폐기물을 활용한 친환경 바이오가스 생산 시스템과 열가수분해(THP) 기술을 소개합니다.',
};

export default function BiogasPage() {
  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <nav className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-base text-gray-700 font-semibold">
            <Link href="/" className="hover:text-green-600 transition-colors">홈</Link>
            <span className="text-gray-400">/</span>
            <Link href="/services" className="hover:text-green-600 transition-colors">서비스</Link>
            <span className="text-gray-400">/</span>
            <span className="text-green-600 font-bold">바이오가스 생산</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-600 via-emerald-600 to-teal-700 py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white opacity-5 rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-white opacity-5 rounded-full"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white opacity-5 rounded-full"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center bg-green-500/20 backdrop-blur-sm px-4 py-2 rounded-full text-green-100 text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-green-300 rounded-full mr-2"></span>
              친환경 에너지 솔루션
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              바이오가스 생산
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto leading-relaxed">
              유기폐기물을 활용한 혁신적인 바이오가스 생산 시스템으로<br />
              지속가능한 미래 에너지를 만들어갑니다
            </p>
          </div>
        </div>
      </section>

      {/* Section 1: KGH의 비전 */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <div className="inline-flex items-center bg-green-50 px-4 py-2 rounded-full text-green-700 text-sm font-semibold mb-6">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  새로운 에너지 패러다임
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                  지속가능한 미래를 위한 선택,<br />
                  <span className="text-green-600">폐기물 처리의 패러다임을 바꾸다</span>
                </h2>
              </div>
              
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  <strong className="text-gray-900">(주)한국그린수소</strong>는 하수 슬러지를 단순 처리하는 것을 넘어 
                  <span className="font-semibold text-green-600"> 수소와 비료를 생산하는 혁신적이고 친환경적인 에너지 사업 모델</span>을 제시합니다.
                </p>
                <p>
                  이 비전의 중심에는 지역 내 하수 슬러지, 음식물 폐기물 등 유기성 폐기물을 통합 처리하여 
                  가치있는 자원으로 전환하는 핵심 시설, <strong className="bg-green-50 text-green-800 px-2 py-1 rounded">'바이오가스 센터'</strong>가 있습니다.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">순환경제</h3>
                  <p className="text-sm text-gray-600">폐기물의 자원화</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">청정에너지</h3>
                  <p className="text-sm text-gray-600">수소 생산</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">환경보호</h3>
                  <p className="text-sm text-gray-600">탄소 저감</p>
                </div>
              </div>
            </div>

            <div className="relative">
              {/* 이미지 영역 - 바이오가스 센터 전경 또는 비전 관련 이미지 */}
              <div className="relative bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">바이오가스 센터</h3>
                  <p className="text-gray-600 text-sm">이미지 영역</p>
                  <p className="text-xs text-gray-500 mt-2">바이오가스 센터 전경 또는<br />에너지 패러다임 관련 이미지</p>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-green-500 rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-emerald-500 rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: 핵심 기술 - THP */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative">
              {/* 이미지 영역 - THP 기술 관련 이미지 */}
              <div className="relative bg-white rounded-2xl p-8 h-96 shadow-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">THP 기술</h3>
                  <p className="text-gray-600 text-sm">이미지 영역</p>
                  <p className="text-xs text-gray-500 mt-2">열가수분해 공정 다이어그램 또는<br />THP 설비 이미지</p>
                </div>
              </div>
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-500 rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-indigo-500 rounded-full opacity-20"></div>
            </div>

            <div className="order-1 lg:order-2 space-y-8">
              <div>
                <div className="inline-flex items-center bg-blue-50 px-4 py-2 rounded-full text-blue-700 text-sm font-semibold mb-6">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                  핵심 기술
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                  세계가 인정한 효율성,<br />
                  <span className="text-blue-600">최첨단 열가수분해(THP) 기술</span>
                </h2>
              </div>
              
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  <strong className="text-gray-900">KGH 바이오가스 센터</strong>의 경쟁력은 세계적으로 가장 효율적인 기술로 검증된 
                  <span className="font-semibold text-blue-600"> 열가수분해(THP, Thermal Hydrolysis) 공법</span>에서 나옵니다.
                </p>
                <p>
                  THP는 고온·고압의 스팀으로 슬러지를 처리하여 바이오가스 생산 효율을 극대화하고, 
                  슬러지를 고품질 자원으로 재활용하는 혁신적인 솔루션입니다.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900 mb-4">THP 기술의 핵심 장점</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-sm">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">에너지 생산 극대화</h4>
                      <p className="text-gray-600 text-sm mt-1">소화 효율을 65%까지 높여 바이오가스 생산량을 획기적으로 늘립니다.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-sm">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">고품질 자원 확보</h4>
                      <p className="text-gray-600 text-sm mt-1">슬러지의 품질을 향상시켜 고품질의 비료를 생산할 수 있는 기반을 마련합니다.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-sm">
                    <div className="flex-shrink-0 w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">완벽한 친환경 공정</h4>
                      <p className="text-gray-600 text-sm mt-1">처리 과정에서 발생하는 악취와 오염물질을 완벽하게 제거합니다.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: 프로세스 및 기대 효과 */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-orange-50 px-4 py-2 rounded-full text-orange-700 text-sm font-semibold mb-6">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              프로세스 & 성과
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              <span className="text-orange-600">폐기물이 청정 에너지가</span><br />
              되기까지
            </h2>
          </div>

          {/* 프로세스 단계 */}
          <div className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
              {/* 연결선 */}
              <div className="hidden md:block absolute top-16 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-green-200 via-blue-200 to-orange-200"></div>
              
              <div className="text-center relative">
                <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">원료 수집</h3>
                <p className="text-sm text-gray-600">하수 슬러지<br />음식물 폐기물</p>
              </div>
              
              <div className="text-center relative">
                <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">THP 처리</h3>
                <p className="text-sm text-gray-600">열가수분해<br />공정 적용</p>
              </div>
              
              <div className="text-center relative">
                <div className="w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">바이오가스 생산</h3>
                <p className="text-sm text-gray-600">메탄가스<br />생산 극대화</p>
              </div>
              
              <div className="text-center relative">
                <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">수소 전환</h3>
                <p className="text-sm text-gray-600">청정 수소<br />최종 생산</p>
              </div>
            </div>
          </div>

          {/* 프로세스 이미지 영역 */}
          <div className="mb-16">
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8 h-64 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-700 mb-2">프로세스 플로우</h3>
                <p className="text-gray-500 text-sm">이미지 영역</p>
                <p className="text-xs text-gray-400 mt-2">전체 프로세스 플로우 차트 또는<br />시설 전경 이미지</p>
              </div>
            </div>
          </div>

          {/* 핵심 데이터 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">수소 생산량</h3>
              <div className="text-4xl font-bold text-green-600 mb-2">7,085kg</div>
              <p className="text-green-700 font-medium mb-4">일일 생산량</p>
              <div className="bg-white/50 backdrop-blur-sm p-4 rounded-lg">
                <p className="text-sm text-gray-700">
                  <span className="font-semibold">수소차 약 14,000대</span><br />
                  충전 가능 규모
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">연간 예상 매출</h3>
              <div className="text-4xl font-bold text-blue-600 mb-2">111억 원</div>
              <p className="text-blue-700 font-medium mb-4">연간 매출 규모</p>
              <div className="bg-white/50 backdrop-blur-sm p-4 rounded-lg">
                <p className="text-sm text-gray-700">
                  <span className="font-semibold">지속가능한</span><br />
                  수익 모델 구축
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">다른 사업 분야</h2>
            <p className="text-gray-600">KGH의 통합 솔루션을 확인해보세요</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/services/fertilizer" className="group">
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="text-4xl mb-4">🌱</div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-green-600 mb-2">비료화</h3>
                <p className="text-gray-600 mb-4">친환경 비료 생산으로 농업 생산성 향상</p>
                <div className="flex items-center text-green-600 text-sm font-medium">
                  자세히 보기
                  <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
            <Link href="/services/ccus" className="group">
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="text-4xl mb-4">♻️</div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-green-600 mb-2">CCUS</h3>
                <p className="text-gray-600 mb-4">탄소 포집 및 활용으로 탄소 중립 실현</p>
                <div className="flex items-center text-green-600 text-sm font-medium">
                  자세히 보기
                  <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
            <Link href="/services/smart-farm" className="group">
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="text-4xl mb-4">🚜</div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-green-600 mb-2">Smart Farm</h3>
                <p className="text-gray-600 mb-4">스마트 농업 시스템으로 미래 농업 구현</p>
                <div className="flex items-center text-green-600 text-sm font-medium">
                  자세히 보기
                  <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          </div>
          <div className="text-center mt-10">
            <Link
              href="/services"
              className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              전체 서비스로 돌아가기
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
