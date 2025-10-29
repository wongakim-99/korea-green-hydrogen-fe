'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useTranslations } from 'next-intl';

export default function ApplicationAreasSection() {
  const [ref, isVisible] = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 });
  const t = useTranslations('CCUSPage.TechnologyProcess');

  return (
    <section ref={ref} className="py-16 md:py-20 lg:py-24 bg-gray-50 overflow-hidden">
      <div className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* 섹션 헤더 */}
          <div className="mb-12 md:mb-16 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4 break-keep">
              {t('applications_title')}
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
            {/* 화력발전소 */}
            <div className={`bg-white border-2 border-gray-100 p-8 md:p-10 rounded-xl hover:border-sky-500 transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer ${isVisible ? 'animate-fade-in-up-1' : ''}`}>
              <div className="space-y-4">
                {/* 아이콘 영역 - 고객사 이미지로 교체 가능 */}
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-sky-600 rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-blue-200">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 break-keep">{t('app1_title')}</h3>
                <p className="text-base text-gray-600 break-keep leading-relaxed">
                  {t('app1_description')}
                </p>
              </div>
            </div>

            {/* 산업 시설 */}
            <div className={`bg-white border-2 border-gray-100 p-8 md:p-10 rounded-xl hover:border-sky-500 transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer ${isVisible ? 'animate-fade-in-up-2' : ''}`}>
              <div className="space-y-4">
                {/* 아이콘 영역 - 고객사 이미지로 교체 가능 */}
                <div className="w-16 h-16 bg-gradient-to-br from-sky-600 to-blue-600 rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-sky-200">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 break-keep">{t('app2_title')}</h3>
                <p className="text-base text-gray-600 break-keep leading-relaxed">
                  {t('app2_description')}
                </p>
              </div>
            </div>

            {/* 바이오가스 설비 */}
            <div className={`bg-white border-2 border-gray-100 p-8 md:p-10 rounded-xl hover:border-sky-500 transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer ${isVisible ? 'animate-fade-in-up-1 delay-200' : ''}`}>
              <div className="space-y-4">
                {/* 아이콘 영역 - 고객사 이미지로 교체 가능 */}
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-sky-600 rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-blue-200">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 break-keep">{t('app3_title')}</h3>
                <p className="text-base text-gray-600 break-keep leading-relaxed">
                  {t('app3_description')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

