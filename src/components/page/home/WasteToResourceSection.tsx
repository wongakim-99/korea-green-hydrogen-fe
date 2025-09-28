'use client';

import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';

export default function WasteToResourceSection() {
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
        /*ValueCards.tsx 와 마찬가지로
        * 카드의 10%가 보일 때 애니메이션 시작
        * */
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
      id="waste-to-resource" 
      className="relative min-h-screen snap-start flex items-center py-16 md:py-0"
    >
      <Image
        alt="폐기물 자원화 배경"
        src="/images/home/sub-background2.jpg"
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
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-500 rounded-full flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-shadow-strong">폐기물의 자원화</h2>
                <p className="text-green-300 font-medium text-sm sm:text-base text-shadow">From Waste to Resource</p>
              </div>
            </div>
            <p className="text-base sm:text-lg text-white mb-6 sm:mb-8 leading-relaxed text-shadow">
              하수 슬러지와 음식물 폐기물을 최첨단 <strong className="text-white">열가수분해(THP) 기술</strong>로 처리하여, 
              고효율의 바이오가스와 청정 수소 에너지를 생산합니다.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                <p className="text-gray-200">하수 슬러지 → 바이오가스 → 청정 수소</p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                <p className="text-gray-200">음식물 폐기물 → 메탄 가스 → 재생 에너지</p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                <p className="text-gray-200">최첨단 THP 기술로 처리 효율 극대화</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8">
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
  );
}