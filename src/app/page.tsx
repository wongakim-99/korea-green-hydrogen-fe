'use client';

import Link from "next/link";
import BackgroundSlider from "@/components/BackgroundSlider";

export default function Home() {
  const slideData = [
    {
      image: '/images/home/main-background1.jpg',
      headline: 'PIONEERING A GREENER TOMORROW',
      subheadline: '(주)한국그린수소는 폐기물에서 새로운 가치를 창출하는 혁신 기술로 지속가능한 미래를 선도합니다.'
    },
    {
      image: '/images/home/main-background2.jpg',
      headline: 'CLEAN HYDROGEN SOLUTIONS',
      subheadline: '하수 슬러지를 최첨단 열가수분해(THP) 기술로 분해하여 미래를 위한 청정 수소 에너지를 생산합니다.'
    },
    {
      image: '/images/home/main-background3.jpg',
      headline: 'REDEFINING WASTE AS A RESOURCE',
      subheadline: '버려지는 슬러지를 고품질의 친환경 비료로 전환하여 전 세계 시장에 공급합니다.'
    },
    {
      image: '/images/home/main-background4.jpg',
      headline: 'INVESTING IN A CARBON-ZERO FUTURE',
      subheadline: '친환경 공정을 통해 확보한 탄소배출권으로 국가의 2050 탄소중립 목표 달성에 기여합니다.'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center snap-start">
          {/* Background Slider */}
          <BackgroundSlider 
            slides={slideData}
            interval={5000}
          />
          
          {/* 데스크톱 버튼 영역 */}
          <div className="hidden md:flex absolute inset-0 z-20 items-center justify-end pr-8 pointer-events-none">
            <div className="flex flex-col gap-4 pointer-events-auto">
              <Link
                href="/about"
                className="bg-sky-600/95 text-white px-6 py-3 rounded-xl text-base font-semibold hover:bg-sky-700 transition-all duration-300 shadow-xl backdrop-blur-sm transform hover:scale-105 hover:-translate-y-1 whitespace-nowrap border border-sky-500/20"
              >
                회사 소개
              </Link>
              <Link
                href="/contact"
                className="bg-white/10 text-white px-6 py-3 rounded-xl text-base font-semibold hover:bg-white/20 transition-all duration-300 border-2 border-white/80 whitespace-nowrap backdrop-blur-sm transform hover:scale-105 hover:-translate-y-1"
              >
                문의하기
              </Link>
            </div>
          </div>

        {/* 모바일용 하단 버튼 */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-20 md:hidden pointer-events-auto">
            <div className="flex flex-row gap-3">
              <Link
                href="/about"
                className="bg-sky-600/95 text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-sky-700 transition-all duration-300 shadow-xl backdrop-blur-sm transform hover:scale-105 whitespace-nowrap"
              >
                회사 소개
              </Link>
              <Link
                href="/contact"
                className="bg-white/10 text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-white/20 transition-all duration-300 border border-white/80 whitespace-nowrap backdrop-blur-sm transform hover:scale-105"
              >
                문의하기
              </Link>
            </div>
          </div>
        </section>

        {/* Value Cards Section */}
        <section className="h-screen bg-gray-50 snap-start flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                KGH가 만들어가는 가치
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                (주)한국그린수소는 버려지는 유기성 폐기물을 가치있는 자원으로 전환하여, 환경과 경제가 상생하는 완벽한 순환 모델을 제시합니다.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* 폐기물의 자원화 카드 */}
              <div 
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
                onClick={() => {
                  document.getElementById('waste-to-resource')?.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                  });
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-emerald-600 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                
                {/* 기본 상태 */}
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
                  
                  {/* 호버 시 나타나는 상세 설명 */}
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
                onClick={() => {
                  document.getElementById('resource-circulation')?.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                  });
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-cyan-600 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                
                {/* 기본 상태 */}
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
                  
                  {/* 호버 시 나타나는 상세 설명 */}
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
                onClick={() => {
                  document.getElementById('economic-environmental')?.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                  });
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-indigo-600 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                
                {/* 기본 상태 */}
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
                  
                  {/* 호버 시 나타나는 상세 설명 */}
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

        {/* 폐기물의 자원화 상세 섹션 */}
        <section id="waste-to-resource" className="h-screen bg-gradient-to-br from-green-50 to-emerald-100 snap-start flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">폐기물의 자원화</h2>
                    <p className="text-green-600 font-medium">From Waste to Resource</p>
                  </div>
                </div>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  하수 슬러지와 음식물 폐기물을 최첨단 <strong>열가수분해(THP) 기술</strong>로 처리하여, 
                  고효율의 바이오가스와 청정 수소 에너지를 생산합니다.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <p className="text-gray-600">하수 슬러지 → 바이오가스 → 청정 수소</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <p className="text-gray-600">음식물 폐기물 → 메탄 가스 → 재생 에너지</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <p className="text-gray-600">최첨단 THP 기술로 처리 효율 극대화</p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="bg-white rounded-2xl shadow-2xl p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">기술 프로세스</h3>
                  <div className="space-y-4">
                    <div className="flex items-center p-4 bg-green-50 rounded-lg">
                      <span className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">1</span>
                      <div>
                        <p className="font-medium text-gray-900">폐기물 수집</p>
                        <p className="text-sm text-gray-600">하수 슬러지, 음식물 폐기물</p>
                      </div>
                    </div>
                    <div className="flex items-center p-4 bg-green-50 rounded-lg">
                      <span className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">2</span>
                      <div>
                        <p className="font-medium text-gray-900">THP 처리</p>
                        <p className="text-sm text-gray-600">열가수분해 기술 적용</p>
                      </div>
                    </div>
                    <div className="flex items-center p-4 bg-green-50 rounded-lg">
                      <span className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">3</span>
                      <div>
                        <p className="font-medium text-gray-900">에너지 생산</p>
                        <p className="text-sm text-gray-600">바이오가스, 청정 수소</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 완벽한 자원 순환 상세 섹션 */}
        <section id="resource-circulation" className="h-screen bg-gradient-to-br from-blue-50 to-cyan-100 snap-start flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 relative">
                <div className="bg-white rounded-2xl shadow-2xl p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">순환 시스템</h3>
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-32 h-32 border-4 border-blue-200 rounded-full"></div>
                    </div>
                    <div className="relative z-10 grid grid-cols-2 gap-4">
                      <div className="bg-blue-50 p-4 rounded-lg text-center">
                        <div className="w-8 h-8 bg-blue-500 rounded-full mx-auto mb-2"></div>
                        <p className="text-sm font-medium">에너지 생산</p>
                      </div>
                      <div className="bg-blue-50 p-4 rounded-lg text-center">
                        <div className="w-8 h-8 bg-blue-500 rounded-full mx-auto mb-2"></div>
                        <p className="text-sm font-medium">비료 제조</p>
                      </div>
                      <div className="bg-blue-50 p-4 rounded-lg text-center">
                        <div className="w-8 h-8 bg-blue-500 rounded-full mx-auto mb-2"></div>
                        <p className="text-sm font-medium">해외 수출</p>
                      </div>
                      <div className="bg-blue-50 p-4 rounded-lg text-center">
                        <div className="w-8 h-8 bg-blue-500 rounded-full mx-auto mb-2"></div>
                        <p className="text-sm font-medium">수익 창출</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">완벽한 자원 순환</h2>
                    <p className="text-blue-600 font-medium">Complete Resource Circulation</p>
                  </div>
                </div>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  에너지 생산 후 남은 슬러지는 <strong>고품질의 친환경 비료</strong>로 재탄생하여 
                  해외 시장에 수출되며, 버려지는 것 하나 없는 자원 순환을 실현합니다.
                </p>
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h4 className="font-bold text-gray-900 mb-4">순환 효과</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">폐기물 재활용률</span>
                      <span className="font-bold text-blue-600">100%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">비료 품질 등급</span>
                      <span className="font-bold text-blue-600">A급</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">해외 수출 비율</span>
                      <span className="font-bold text-blue-600">80%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 경제성과 환경성 상세 섹션 */}
        <section id="economic-environmental" className="h-screen bg-gradient-to-br from-purple-50 to-indigo-100 snap-start flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">경제성과 환경성</h2>
                    <p className="text-purple-600 font-medium">Economic & Environmental Value</p>
                  </div>
                </div>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  지자체의 폐기물 처리 비용을 절감하고, <strong>탄소배출권 확보</strong>를 통해 
                  국가의 탄소중립 목표에 기여하며 경제적, 환경적 가치를 동시에 창출합니다.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <h4 className="font-bold text-gray-900 mb-4">경제적 효과</h4>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
                        <span className="text-sm text-gray-600">처리비용 절감</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
                        <span className="text-sm text-gray-600">에너지 판매 수익</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
                        <span className="text-sm text-gray-600">비료 수출 수익</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <h4 className="font-bold text-gray-900 mb-4">환경적 효과</h4>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                        <span className="text-sm text-gray-600">CO₂ 배출 감소</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                        <span className="text-sm text-gray-600">탄소배출권 확보</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                        <span className="text-sm text-gray-600">탄소중립 기여</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="bg-white rounded-2xl shadow-2xl p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">2050 탄소중립 기여도</h3>
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-700">CO₂ 감축량</span>
                        <span className="text-sm font-bold text-purple-600">85%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div className="bg-purple-500 h-3 rounded-full" style={{width: '85%'}}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-700">재생에너지 생산</span>
                        <span className="text-sm font-bold text-green-600">92%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div className="bg-green-500 h-3 rounded-full" style={{width: '92%'}}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-700">자원 재활용률</span>
                        <span className="text-sm font-bold text-blue-600">100%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div className="bg-blue-500 h-3 rounded-full" style={{width: '100%'}}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      {/* CTA Section */}
      <section className="bg-sky-600 py-16 md:py-24 snap-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            지속가능한 미래를 함께 만들어가세요
          </h2>
          <p className="text-xl text-sky-100 mb-8 max-w-2xl mx-auto">
            Korea Green Hydrogen와 함께 친환경 수소 에너지로 더 나은 내일을 준비하세요.
          </p>
          <Link
            href="/contact"
            className="bg-white text-sky-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
          >
            지금 상담받기
          </Link>
        </div>
      </section>
    </>
  );
}