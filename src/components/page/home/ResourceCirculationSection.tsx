'use client';

import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';

export default function ResourceCirculationSection() {
  const t = useTranslations('HomePage.ResourceCirculation');
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
    <section id="resource-circulation" className="relative min-h-screen snap-start flex items-center py-32 sm:py-24 md:py-16 lg:py-0">
      <Image
        alt={t('bgAlt')}
        src="/images/home/sub-background3.jpg"
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-stretch">
          <div className="order-2 lg:order-1 relative flex flex-col">
            <div className="group bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl p-8 transition-all duration-500 ease-out hover:shadow-cyan-500/10 flex-1 flex flex-col h-full">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">{t('systemTitle')}</h3>
              <div className="relative flex-1 flex items-center justify-center min-h-[400px]">
                <div className="grid grid-cols-2 gap-x-8 gap-y-12 w-full max-w-md">
                  
                  {/* 순환을 나타내는 중앙 화살표 */}
                  <svg className="absolute w-14 h-14 text-blue-200 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-transform duration-500 group-hover:rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                  </svg>

                  {/* 1. 에너지 생산 */}
                  <div className={`text-center transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
                    <div className="w-24 h-24 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <svg className="w-12 h-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <p className="font-bold text-gray-800 text-base leading-tight">{t('step1')}</p>
                  </div>

                  {/* 2. 비료 제조 */}
                  <div className={`text-center transition-all duration-500 ease-out delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
                    <div className="w-24 h-24 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <svg className="w-12 h-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <p className="font-bold text-gray-800 text-base leading-tight">{t('step2')}</p>
                  </div>

                  {/* 3. 해외 수출 */}
                  <div className={`text-center transition-all duration-500 ease-out delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
                    <div className="w-24 h-24 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <svg className="w-12 h-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                      </svg>
                    </div>
                    <p className="font-bold text-gray-800 text-base leading-tight">{t('step3')}</p>
                  </div>

                  {/* 4. 수익 창출 */}
                  <div className={`text-center transition-all duration-500 ease-out delay-450 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
                    <div className="w-24 h-24 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <svg className="w-12 h-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <p className="font-bold text-gray-800 text-base leading-tight">{t('step4')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 h-full flex flex-col">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-500 rounded-full flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                </svg>
              </div>
              <div>
                <h2 className="text-5xl font-bold text-white text-shadow-strong">{t('title')}</h2>
                <p className="text-cyan-300 font-medium text-lg text-shadow">{t('subtitle')}</p>
              </div>
            </div>
            <p className="text-2xl text-gray-200 mb-8 leading-relaxed text-shadow">
              {t('description')}
            </p>
            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg flex-1 flex flex-col justify-center">
              <h4 className="font-bold text-gray-900 mb-6 text-lg">{t('effectsTitle')}</h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 text-base">{t('recyclingRate')}</span>
                  <span className="font-bold text-blue-600 text-base">{t('recyclingRateValue')}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 text-base">{t('fertilizerProduction')}</span>
                  <span className="font-bold text-blue-600 text-base">{t('fertilizerProductionValue')}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 text-base">{t('exportMarket')}</span>
                  <span className="font-bold text-blue-600 text-base">{t('exportMarketValue')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}