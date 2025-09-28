'use client';

import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';

export default function EconomicEnvironmentalSection() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section 
      id="economic-environmental" 
      className="relative min-h-screen snap-start flex items-center py-16 md:py-0"
    >
      <Image
        alt="경제성과 환경성 배경"
        src="/images/home/sub-background4.jpg"
        layout="fill"
        objectFit="cover"
        quality={95}
        className={`transition-all duration-1000 ease-in-out ${isVisible ? 'opacity-50 scale-100' : 'opacity-0 scale-105'}`}
      />
      <div className="absolute inset-0 bg-gray/20 z-10"></div>
      <div 
        ref={sectionRef}
        className={`relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20 transition-all ease-out duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-purple-500 rounded-full flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-shadow-strong">경제성과 환경성</h2>
                <p className="text-purple-300 font-medium text-base sm:text-lg text-shadow">Economic & Environmental Value</p>
              </div>
            </div>
            <p className="text-lg sm:text-xl md:text-2xl text-white mb-6 sm:mb-8 leading-relaxed text-shadow">
              지자체의 폐기물 처리 비용을 절감하고, <strong className="text-white">탄소배출권 확보</strong>를 통해 
              국가의 탄소중립 목표에 기여하며 경제적, 환경적 가치를 동시에 창출합니다.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-lg">
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
              <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-lg">
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
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8">
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
  );
}
