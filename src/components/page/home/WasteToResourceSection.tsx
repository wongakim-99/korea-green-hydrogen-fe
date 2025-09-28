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
      className="relative min-h-screen snap-start flex items-center py-32 sm:py-24 md:py-16 lg:py-0"
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
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-shadow-strong">폐기물의 자원화</h2>
                <p className="text-green-300 font-medium text-base sm:text-lg text-shadow">From Waste to Resource</p>
              </div>
            </div>
            <p className="text-lg sm:text-xl md:text-2xl text-white mb-8 leading-relaxed text-shadow">
              하수 슬러지와 음식물 폐기물을 최첨단{' '}
              <strong className="text-green-300 font-bold underline decoration-green-400 decoration-2 underline-offset-4">
                열가수분해(THP) 기술
              </strong>
              로 처리하여, 고효율의 바이오가스와 청정 수소 에너지를 생산합니다.
            </p>
            <div className="space-y-5">
              <div className="flex items-start">
                <svg className="w-6 h-6 text-green-400 mr-4 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <p className="text-gray-100 text-base sm:text-lg">유기성 폐기물 → 바이오가스 → 청정 수소</p>
              </div>
              <div className="flex items-start">
                <svg className="w-6 h-6 text-green-400 mr-4 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <p className="text-gray-100 text-base sm:text-lg">최첨단 THP 기술로 처리 효율 극대화</p>
              </div>
            </div>
          </div>
          <div className="relative h-full flex flex-col">
            <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl p-8 ring-1 ring-white/20 flex-1 flex flex-col">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">기술 프로세스</h3>
              <div className="relative flex-1">
                {/* 단계들을 잇는 세로 점선 */}
                <div className="absolute left-5 top-8 bottom-8 w-0.5 bg-gradient-to-b from-green-200 via-green-300 to-green-200"></div>

                <div className="space-y-8 flex-1 flex flex-col justify-center">
                  {/* 1단계: 애니메이션 지연시간 추가 */}
                  <div className={`flex items-center transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>
                    <span className="relative z-10 w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center text-base font-bold mr-5 ring-4 ring-white">1</span>
                    <div>
                      <p className="font-bold text-gray-900 text-lg">폐기물 수집</p>
                      <p className="text-base text-gray-600 mt-1">하수 슬러지, 음식물 폐기물</p>
                    </div>
                  </div>
                  {/* 2단계: 애니메이션 지연시간 추가 */}
                  <div className={`flex items-center transition-all duration-500 ease-out delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>
                    <span className="relative z-10 w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center text-base font-bold mr-5 ring-4 ring-white">2</span>
                    <div>
                      <p className="font-bold text-gray-900 text-lg">THP 처리</p>
                      <p className="text-base text-gray-600 mt-1">열가수분해 기술 적용</p>
                    </div>
                  </div>
                  {/* 3단계: 애니메이션 지연시간 추가 */}
                  <div className={`flex items-center transition-all duration-500 ease-out delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>
                    <span className="relative z-10 w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center text-base font-bold mr-5 ring-4 ring-white">3</span>
                    <div>
                      <p className="font-bold text-gray-900 text-lg">에너지 생산</p>
                      <p className="text-base text-gray-600 mt-1">바이오가스, 청정 수소</p>
                    </div>
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