'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function ProcessAndEffectsSection() {
  const [ref, isVisible] = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 });

  return (
    <section ref={ref} className="py-20 bg-white overflow-hidden">
      <div className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
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
              <div className="hidden md:block absolute top-16 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-sky-200 via-blue-200 to-orange-200"></div>
              
              <div className="text-center relative">
                <div className="w-20 h-20 bg-sky-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
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
                <div className="w-20 h-20 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
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
            <div className="bg-gradient-to-br from-sky-50 to-cyan-50 p-8 rounded-2xl text-center">
              <div className="w-16 h-16 bg-sky-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">수소 생산량</h3>
              <div className="text-4xl font-bold text-sky-600 mb-2">7,085kg</div>
              <p className="text-sky-700 font-medium mb-4">일일 생산량</p>
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
      </div>
    </section>
  );
}
