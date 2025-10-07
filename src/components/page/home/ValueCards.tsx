'use client';

import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';

export default function ValueCards() {
  const t = useTranslations('HomePage.ValueCards');
  const handleScrollTo = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  const cardsRef = useRef(null);
  const [isCardsVisible, setCardsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCardsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1, // 카드의 10%가 보일 때 애니메이션 시작
      }
    );

    const currentRef = cardsRef.current;
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
      className="relative min-h-screen snap-start flex items-center py-32 sm:py-24 md:py-16 lg:py-0"
    >
      <Image
        alt={t('title')}
        src="/images/home/sub-background1.jpg"
        layout="fill"
        objectFit="cover"
        quality={95}
        priority
        className={`transition-all duration-1000 ease-in-out ${isCardsVisible ? 'opacity-50 scale-100' : 'opacity-0 scale-105'}`}
      />
      <div className="absolute inset-0 bg-gray/20 z-10"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 text-shadow-strong">
            {t('title')}
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed px-2 text-shadow break-keep">
            {t('subtitle')}
          </p>
        </div>
        
        <div 
          ref={cardsRef}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 transition-all ease-out duration-1000 ${
            isCardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
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
                {t('card1_title')}
              </h3>
              <p className="text-sm text-gray-500 text-center mb-4 group-hover:mb-2 transition-all duration-500">
                {t('card1_subtitle')}
              </p>
              
              <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:delay-200">
                <p className="text-gray-700 leading-relaxed text-sm">
                  {t('card1_description')}
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
                {t('card2_title')}
              </h3>
              <p className="text-sm text-gray-500 text-center mb-4 group-hover:mb-2 transition-all duration-500">
                {t('card2_subtitle')}
              </p>
              
              <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:delay-200">
                <p className="text-gray-700 leading-relaxed text-sm">
                  {t('card2_description')}
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
                {t('card3_title')}
              </h3>
              <p className="text-sm text-gray-500 text-center mb-4 group-hover:mb-2 transition-all duration-500">
                {t('card3_subtitle')}
              </p>
              
              <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:delay-200">
                <p className="text-gray-700 leading-relaxed text-sm">
                  {t('card3_description')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
