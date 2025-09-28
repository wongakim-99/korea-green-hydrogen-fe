'use client';

export default function ValueCards() {
  const handleScrollTo = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <section className="min-h-screen bg-gray-50 snap-start flex items-center py-16 md:py-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            KGH가 만들어가는 가치
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-2">
            (주)한국그린수소는 버려지는 유기성 폐기물을 가치있는 자원으로 전환하여, 환경과 경제가 상생하는 완벽한 순환 모델을 제시합니다.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* 폐기물의 자원화 카드 */}
          <div 
            className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
            onClick={() => handleScrollTo('waste-to-resource')}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-emerald-600 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
            
            <div className="p-8 group-hover:p-6 transition-all duration-500">
              <div className="flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6 mx-auto group-hover:w-16 group-hover:h-16 group-hover:mb-4 transition-all duration-500">
                <svg className="w-10 h-10 text-green-600 group-hover:w-8 group-hover:h-8 transition-all duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 text-center group-hover:text-lg group-hover:mb-3 transition-all duration-500">
                폐기물의 자원화
              </h3>
              <p className="text-sm text-gray-500 text-center mb-4 group-hover:mb-2 transition-all duration-500">
                From Waste to Resource
              </p>
              
              <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:delay-200">
                <p className="text-gray-700 leading-relaxed text-sm">
                  하수 슬러지와 음식물 폐기물을 최첨단 열가수분해(THP) 기술로 처리하여, 고효율의 바이오가스와 청정 수소 에너지를 생산합니다.
                </p>
              </div>
            </div>
          </div>

          {/* 완벽한 자원 순환 카드 */}
          <div 
            className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
            onClick={() => handleScrollTo('resource-circulation')}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-cyan-600 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
            
            <div className="p-8 group-hover:p-6 transition-all duration-500">
              <div className="flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full mb-6 mx-auto group-hover:w-16 group-hover:h-16 group-hover:mb-4 transition-all duration-500">
                <svg className="w-10 h-10 text-blue-600 group-hover:w-8 group-hover:h-8 transition-all duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 text-center group-hover:text-lg group-hover:mb-3 transition-all duration-500">
                완벽한 자원 순환
              </h3>
              <p className="text-sm text-gray-500 text-center mb-4 group-hover:mb-2 transition-all duration-500">
                Complete Resource Circulation
              </p>
              
              <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:delay-200">
                <p className="text-gray-700 leading-relaxed text-sm">
                  에너지 생산 후 남은 슬러지는 고품질의 친환경 비료로 재탄생하여 해외 시장에 수출되며, 버려지는 것 하나 없는 자원 순환을 실현합니다.
                </p>
              </div>
            </div>
          </div>

          {/* 경제성과 환경성 카드 */}
          <div 
            className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
            onClick={() => handleScrollTo('economic-environmental')}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-indigo-600 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
            
            <div className="p-8 group-hover:p-6 transition-all duration-500">
              <div className="flex items-center justify-center w-20 h-20 bg-purple-100 rounded-full mb-6 mx-auto group-hover:w-16 group-hover:h-16 group-hover:mb-4 transition-all duration-500">
                <svg className="w-10 h-10 text-purple-600 group-hover:w-8 group-hover:h-8 transition-all duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 text-center group-hover:text-lg group-hover:mb-3 transition-all duration-500">
                경제성과 환경성
              </h3>
              <p className="text-sm text-gray-500 text-center mb-4 group-hover:mb-2 transition-all duration-500">
                Economic & Environmental Value
              </p>
              
              <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:delay-200">
                <p className="text-gray-700 leading-relaxed text-sm">
                  지자체의 폐기물 처리 비용을 절감하고, 탄소배출권 확보를 통해 국가의 탄소중립 목표에 기여하며 경제적, 환경적 가치를 동시에 창출합니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
