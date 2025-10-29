'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useTranslations } from 'next-intl';

export default function WhatIsCCUSSection() {
  const [ref, isVisible] = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 });
  const t = useTranslations('CCUSPage.WhatIsCCUS');

  return (
    <section ref={ref} className="py-16 md:py-20 lg:py-24 bg-white overflow-hidden">
      <div className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* 섹션 헤더 */}
          <div className="mb-16 md:mb-20 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4 break-keep">
              {t('title')}
            </h2>
            <p className="text-lg sm:text-xl text-sky-600 font-semibold mb-4">
              {t('subtitle')}
            </p>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto break-keep">
              {t('description')}
            </p>
          </div>

          {/* 3단 카드 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
            {/* Carbon Capture */}
            <div className={`bg-gradient-to-br from-blue-50 to-sky-50 p-8 md:p-10 rounded-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer border-2 border-transparent hover:border-sky-500 ${isVisible ? 'animate-fade-in-up-1' : ''}`}>
              <div className="space-y-4">
                {/* 아이콘 영역 - 고객사 이미지로 교체 가능 */}
                <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                  </svg>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                  {t('capture_title')}
                </h3>
                <p className="text-lg font-semibold text-blue-600 mb-3">
                  {t('capture_subtitle')}
                </p>
                <p className="text-base text-gray-700 leading-relaxed break-keep">
                  {t('capture_description')}
                </p>
              </div>
            </div>

            {/* Utilization */}
            <div className={`bg-gradient-to-br from-sky-50 to-blue-50 p-8 md:p-10 rounded-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer border-2 border-transparent hover:border-sky-500 ${isVisible ? 'animate-fade-in-up-2' : ''}`}>
              <div className="space-y-4">
                {/* 아이콘 영역 - 고객사 이미지로 교체 가능 */}
                <div className="w-16 h-16 bg-sky-600 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                  {t('utilization_title')}
                </h3>
                <p className="text-lg font-semibold text-sky-600 mb-3">
                  {t('utilization_subtitle')}
                </p>
                <p className="text-base text-gray-700 leading-relaxed break-keep">
                  {t('utilization_description')}
                </p>
              </div>
            </div>

            {/* Storage */}
            <div className={`bg-gradient-to-br from-blue-50 to-sky-50 p-8 md:p-10 rounded-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer border-2 border-transparent hover:border-sky-500 ${isVisible ? 'animate-fade-in-up-1 delay-200' : ''}`}>
              <div className="space-y-4">
                {/* 아이콘 영역 - 고객사 이미지로 교체 가능 */}
                <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                  </svg>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                  {t('storage_title')}
                </h3>
                <p className="text-lg font-semibold text-blue-600 mb-3">
                  {t('storage_subtitle')}
                </p>
                <p className="text-base text-gray-700 leading-relaxed break-keep">
                  {t('storage_description')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

