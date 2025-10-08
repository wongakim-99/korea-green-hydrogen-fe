'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useTranslations } from 'next-intl';

export default function ProcessSection() {
  const [ref, isVisible] = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });
  const t = useTranslations('FertilizerPage.Process');

  const scrollToDetail = (stepId: string) => {
    const element = document.getElementById(stepId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section ref={ref} className="py-16 md:py-20 lg:py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* 섹션 헤더 */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 break-keep">
            {t('title')}
          </h2>
          <p className="text-xl md:text-2xl text-sky-600 font-semibold mb-3 break-keep">
            {t('subtitle')}
          </p>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto break-keep">
            {t('description')}
          </p>
        </div>

        {/* 3단 카드 레이아웃 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {/* 카드 1: 고품질 원료 확보 */}
          <button
            onClick={() => scrollToDetail('step1-detail')}
            className={`bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col text-left cursor-pointer group ${isVisible ? 'animate-slide-in-stagger-1' : 'opacity-0'}`}
          >
            {/* 아이콘 */}
            <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-sky-100 to-sky-50 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8 md:w-10 md:h-10 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            
            {/* 단계 번호 */}
            <div className="text-center mb-4">
              <span className="inline-block bg-sky-100 text-sky-700 px-4 py-2 rounded-full text-sm font-semibold">
                {t('step1_number')}
              </span>
            </div>

            {/* 제목 */}
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 text-center break-keep">
              {t('step1_title')}
            </h3>

            {/* 라벨 */}
            <div className="text-center mb-4">
              <span className="inline-block bg-sky-50 text-sky-700 px-3 py-1 rounded-lg text-sm font-semibold">
                {t('step1_label')}
              </span>
            </div>

            {/* 설명 - flex-grow 적용 */}
            <div className="space-y-3 text-sm md:text-base text-gray-600 leading-relaxed flex-grow">
              <p className="break-keep">{t('step1_description1')}</p>
              <p className="break-keep">{t('step1_description2')}</p>
            </div>

            {/* 하단 구분선 */}
            <div className="mt-6 pt-4 border-t border-sky-100">
              <div className="flex items-center justify-center text-sky-600 group-hover:text-sky-700">
                <span className="text-sm font-medium mr-2">{t('learn_more')}</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </button>

          {/* 카드 2: 맞춤형 영양 배합 */}
          <button
            onClick={() => scrollToDetail('step2-detail')}
            className={`bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col text-left cursor-pointer group ${isVisible ? 'animate-slide-in-stagger-2' : 'opacity-0'}`}
          >
            {/* 아이콘 */}
            <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-sky-100 to-sky-50 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8 md:w-10 md:h-10 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            
            {/* 단계 번호 */}
            <div className="text-center mb-4">
              <span className="inline-block bg-sky-100 text-sky-700 px-4 py-2 rounded-full text-sm font-semibold">
                {t('step2_number')}
              </span>
            </div>

            {/* 제목 */}
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 text-center break-keep">
              {t('step2_title')}
            </h3>

            {/* 라벨 */}
            <div className="text-center mb-4">
              <span className="inline-block bg-sky-50 text-sky-700 px-3 py-1 rounded-lg text-sm font-semibold">
                {t('step2_label')}
              </span>
            </div>

            {/* 설명 - flex-grow 적용 */}
            <div className="space-y-3 text-sm md:text-base text-gray-600 leading-relaxed flex-grow">
              <p className="break-keep">{t('step2_description1')}</p>
              <p className="break-keep">{t('step2_description2')}</p>
            </div>

            {/* 하단 구분선 */}
            <div className="mt-6 pt-4 border-t border-sky-100">
              <div className="flex items-center justify-center text-sky-600 group-hover:text-sky-700">
                <span className="text-sm font-medium mr-2">{t('learn_more')}</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </button>

          {/* 카드 3: 제품화 및 포장 */}
          <button
            onClick={() => scrollToDetail('step3-detail')}
            className={`bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col text-left cursor-pointer group ${isVisible ? 'animate-slide-in-stagger-3' : 'opacity-0'}`}
          >
            {/* 아이콘 */}
            <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-sky-100 to-sky-50 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8 md:w-10 md:h-10 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
            
            {/* 단계 번호 */}
            <div className="text-center mb-4">
              <span className="inline-block bg-sky-100 text-sky-700 px-4 py-2 rounded-full text-sm font-semibold">
                {t('step3_number')}
              </span>
            </div>

            {/* 제목 */}
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 text-center break-keep">
              {t('step3_title')}
            </h3>

            {/* 라벨 */}
            <div className="text-center mb-4">
              <span className="inline-block bg-sky-50 text-sky-700 px-3 py-1 rounded-lg text-sm font-semibold">
                {t('step3_label')}
              </span>
            </div>

            {/* 설명 - flex-grow 적용 */}
            <div className="space-y-3 text-sm md:text-base text-gray-600 leading-relaxed flex-grow">
              <p className="break-keep">{t('step3_description1')}</p>
              <p className="break-keep">{t('step3_description2')}</p>
            </div>

            {/* 하단 구분선 */}
            <div className="mt-6 pt-4 border-t border-sky-100">
              <div className="flex items-center justify-center text-sky-600 group-hover:text-sky-700">
                <span className="text-sm font-medium mr-2">{t('learn_more')}</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
