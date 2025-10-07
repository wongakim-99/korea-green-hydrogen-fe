'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function ProcessAndEffectsSection() {
  const [ref, isVisible] = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 });

  return (
    <section ref={ref} className="py-16 md:py-20 lg:py-24 bg-white overflow-hidden">
      <div className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* 섹션 헤더 */}
          <div className="mb-16 md:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
              프로세스
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl">
              폐기물이 청정 에너지로 전환되는 4단계 프로세스
            </p>
          </div>

          {/* 프로세스 단계 - 반응형 */}
          <div className="mb-20 md:mb-28">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6 relative">
              {/* 연결선 - 데스크톱에서만 표시 */}
              <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-gray-200"></div>
              
              <div className={`relative ${isVisible ? 'animate-slide-in-stagger-1' : ''}`}>
                <div className="flex items-start space-x-4 lg:block group cursor-pointer transition-all duration-300 hover:scale-105">
                  <div className="flex-shrink-0 w-16 h-16 lg:w-20 lg:h-20 bg-gray-900 rounded-lg flex items-center justify-center lg:mx-auto mb-0 lg:mb-6 relative z-10 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-gray-900/30">
                    <span className="text-2xl lg:text-3xl font-bold text-white">01</span>
                  </div>
                  <div className="flex-1 lg:text-center pt-1 lg:pt-0">
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 transition-colors duration-300 group-hover:text-sky-600">원료 수집</h3>
                    <p className="text-sm md:text-base text-gray-600">하수 슬러지<br className="hidden sm:block" />음식물 폐기물</p>
                  </div>
                </div>
              </div>
              
              <div className={`relative ${isVisible ? 'animate-slide-in-stagger-2' : ''}`}>
                <div className="flex items-start space-x-4 lg:block group cursor-pointer transition-all duration-300 hover:scale-105">
                  <div className="flex-shrink-0 w-16 h-16 lg:w-20 lg:h-20 bg-gray-900 rounded-lg flex items-center justify-center lg:mx-auto mb-0 lg:mb-6 relative z-10 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-gray-900/30">
                    <span className="text-2xl lg:text-3xl font-bold text-white">02</span>
                  </div>
                  <div className="flex-1 lg:text-center pt-1 lg:pt-0">
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 transition-colors duration-300 group-hover:text-sky-600">THP 처리</h3>
                    <p className="text-sm md:text-base text-gray-600">열가수분해<br className="hidden sm:block" />공정 적용</p>
                  </div>
                </div>
              </div>
              
              <div className={`relative ${isVisible ? 'animate-slide-in-stagger-3' : ''}`}>
                <div className="flex items-start space-x-4 lg:block group cursor-pointer transition-all duration-300 hover:scale-105">
                  <div className="flex-shrink-0 w-16 h-16 lg:w-20 lg:h-20 bg-gray-900 rounded-lg flex items-center justify-center lg:mx-auto mb-0 lg:mb-6 relative z-10 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-gray-900/30">
                    <span className="text-2xl lg:text-3xl font-bold text-white">03</span>
                  </div>
                  <div className="flex-1 lg:text-center pt-1 lg:pt-0">
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 transition-colors duration-300 group-hover:text-sky-600">바이오가스 생산</h3>
                    <p className="text-sm md:text-base text-gray-600">메탄가스<br className="hidden sm:block" />생산 극대화</p>
                  </div>
                </div>
              </div>
              
              <div className={`relative ${isVisible ? 'animate-slide-in-stagger-4' : ''}`}>
                <div className="flex items-start space-x-4 lg:block group cursor-pointer transition-all duration-300 hover:scale-105">
                  <div className="flex-shrink-0 w-16 h-16 lg:w-20 lg:h-20 bg-sky-600 rounded-lg flex items-center justify-center lg:mx-auto mb-0 lg:mb-6 relative z-10 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-sky-600/40">
                    <span className="text-2xl lg:text-3xl font-bold text-white">04</span>
                  </div>
                  <div className="flex-1 lg:text-center pt-1 lg:pt-0">
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 transition-colors duration-300 group-hover:text-sky-600">수소 전환</h3>
                    <p className="text-sm md:text-base text-gray-600">청정 수소<br className="hidden sm:block" />최종 생산</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 핵심 성과 데이터 */}
          <div className="mb-16 md:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-12 md:mb-16">
              핵심 성과
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {/* 수소 생산량 카드 */}
              <div className={`bg-white border-2 border-gray-100 p-8 md:p-10 rounded-lg hover:border-sky-500 transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer ${isVisible ? 'animate-fade-in-up-1' : ''}`}>
                <div className="space-y-4">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-sky-600">일일 수소 생산량</h3>
                  <div className="flex items-baseline space-x-3">
                    <span className="text-5xl md:text-6xl font-bold text-gray-900">7,085</span>
                    <span className="text-2xl md:text-3xl font-medium text-gray-600">kg</span>
                  </div>
                  <div className="pt-4 border-t border-gray-100">
                    <p className="text-base text-gray-600">
                      수소차 약 <strong className="text-gray-900">14,000대</strong> 충전 가능 규모
                    </p>
                  </div>
                </div>
              </div>

              {/* 연간 매출 카드 */}
              <div className={`bg-white border-2 border-gray-100 p-8 md:p-10 rounded-lg hover:border-sky-500 transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer ${isVisible ? 'animate-fade-in-up-2' : ''}`}>
                <div className="space-y-4">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-sky-600">연간 예상 매출</h3>
                  <div className="flex items-baseline space-x-3">
                    <span className="text-5xl md:text-6xl font-bold text-gray-900">111</span>
                    <span className="text-2xl md:text-3xl font-medium text-gray-600">억 원</span>
                  </div>
                  <div className="pt-4 border-t border-gray-100">
                    <p className="text-base text-gray-600">
                      지속가능한 <strong className="text-gray-900">수익 모델</strong> 구축
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
