'use client';

import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';

export default function EconomicEnvironmentalSection() {
  const t = useTranslations('HomePage.EconomicEnvironmental');
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [co2Count, setCo2Count] = useState(0);
  const [hydrogenCount, setHydrogenCount] = useState(0);

  // 숫자 카운트업 애니메이션 함수
  const animateCount = (targetValue: number, setter: (value: number) => void, duration: number = 2000) => {
    const startTime = Date.now();
    const startValue = 0;

    const animate = () => {
      const currentTime = Date.now();
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // easeOutQuart 이징 함수 적용
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = Math.floor(startValue + (targetValue - startValue) * easeOutQuart);
      
      setter(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setter(targetValue);
      }
    };

    requestAnimationFrame(animate);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // 카운트업 애니메이션 시작
          setTimeout(() => {
            animateCount(80000, setCo2Count, 2500);
          }, 500);
          setTimeout(() => {
            animateCount(7085, setHydrogenCount, 2000);
          }, 700);
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
      className="relative min-h-screen snap-start flex items-center py-32 sm:py-24 md:py-16 lg:py-0"
    >
      <Image
        alt={t('bgAlt')}
        src="/images/home/sub-background4.jpg"
        layout="fill"
        objectFit="cover"
        quality={95}
        className={`transition-all duration-1000 ease-in-out ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}
        style={{ filter: 'brightness(0.8)' }}
      />
      <div className="absolute inset-0 bg-black/50 z-10"></div>
      <div 
        ref={sectionRef}
        className={`relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20 transition-all ease-out duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="h-full flex flex-col">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-purple-500 rounded-full flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-shadow-strong">{t('title')}</h2>
                <p className="text-purple-300 font-medium text-base sm:text-lg text-shadow">{t('subtitle')}</p>
              </div>
            </div>
            <p className="text-lg sm:text-xl md:text-2xl text-white mb-8 leading-relaxed text-shadow">
              {t('description')}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 flex-1">
              <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-lg flex flex-col justify-center">
                <h4 className="font-bold text-gray-900 mb-4 text-lg">{t('economicEffects')}</h4>
                <div className="space-y-3">
                  <div className={`flex items-center transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'}`}>
                    <div className="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
                    <span className="text-base text-gray-600">{t('economicItem1')}</span>
                  </div>
                  <div className={`flex items-center transition-all duration-500 delay-100 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'}`}>
                    <div className="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
                    <span className="text-base text-gray-600">{t('economicItem2')}</span>
                  </div>
                  <div className={`flex items-center transition-all duration-500 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'}`}>
                    <div className="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
                    <span className="text-base text-gray-600">{t('economicItem3')}</span>
                  </div>
                </div>
              </div>
              <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-lg flex flex-col justify-center">
                <h4 className="font-bold text-gray-900 mb-4 text-lg">{t('environmentalEffects')}</h4>
                <div className="space-y-3">
                  <div className={`flex items-center transition-all duration-500 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'}`}>
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-base text-gray-600">{t('environmentalItem1')}</span>
                  </div>
                  <div className={`flex items-center transition-all duration-500 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'}`}>
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-base text-gray-600">{t('environmentalItem2')}</span>
                  </div>
                  <div className={`flex items-center transition-all duration-500 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'}`}>
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-base text-gray-600">{t('environmentalItem3')}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative h-full flex flex-col">
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 flex-1 flex flex-col">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">{t('keyEffects')}</h3>
              <div className="grid grid-cols-1 gap-6 flex-1">
                {/* CO₂ 감축량 */}
                <div className={`bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl p-6 transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mr-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-600">{t('co2Reduction')}</p>
                        <p className="text-2xl font-bold text-purple-600">
                          {t('co2Amount', { amount: co2Count.toLocaleString() })}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 수소 생산량 */}
                <div className={`bg-gradient-to-r from-green-50 to-green-100 rounded-xl p-6 transition-all duration-500 ease-out delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mr-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-600">{t('hydrogenProduction')}</p>
                        <p className="text-2xl font-bold text-green-600">
                          {t('hydrogenAmount', { amount: hydrogenCount.toLocaleString() })}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 폐기물 자원화 */}
                <div className={`bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6 transition-all duration-500 ease-out delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mr-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-600">{t('wasteRecycling')}</p>
                        <p className="text-2xl font-bold text-blue-600">100%</p>
                      </div>
                    </div>
                    <div className="w-16 h-16 relative">
                      <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 36 36">
                        <path className="text-gray-200" fill="none" stroke="currentColor" strokeWidth="2" d="M18 2.0845a 15.9155 15.9155 0 0 1 0 31.831a 15.9155 15.9155 0 0 1 0 -31.831"/>
                        <path 
                          className="text-blue-500 transition-all duration-2000 ease-out" 
                          fill="none" 
                          stroke="currentColor" 
                          strokeWidth="2" 
                          strokeDasharray="100" 
                          strokeDashoffset={isVisible ? 0 : 100}
                          d="M18 2.0845a 15.9155 15.9155 0 0 1 0 31.831a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className={`text-xs font-bold text-blue-600 transition-opacity duration-1000 delay-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                          100%
                        </span>
                      </div>
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
