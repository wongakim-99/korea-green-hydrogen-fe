'use client';

import Image from 'next/image';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useTranslations } from 'next-intl';

export default function KGHSolutionSection() {
  const [ref, isVisible] = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 });
  const t = useTranslations('CCUSPage.KGHSolution');

  return (
    <section ref={ref} className="py-16 md:py-20 lg:py-24 bg-white overflow-hidden border-t-2 border-gray-200">
      <div className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* 이미지 영역 - 모바일에서는 아래, 데스크톱에서는 왼쪽 */}
            <div className="order-2 lg:order-1 lg:col-span-6">
              <div className="relative rounded-lg overflow-hidden shadow-lg bg-gradient-to-br from-blue-50 to-sky-50 aspect-[4/3] flex items-center justify-center">
                {/* TODO: 고객사 이미지로 교체 */}
                <div className="p-12 text-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-blue-600 to-sky-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <p className="text-gray-500 text-sm">이미지 영역</p>
                  <p className="text-gray-400 text-xs mt-2">고객사 제공 이미지</p>
                </div>
                {/* <Image
                  src="/images/services/ccus/kgh-solution.jpg"
                  alt="KGH CCUS 솔루션"
                  fill
                  className="object-contain p-4"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
                /> */}
              </div>
            </div>

            {/* 텍스트 영역 */}
            <div className="order-1 lg:order-2 lg:col-span-6 space-y-8 md:space-y-10">
              <div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6 md:mb-8 break-keep">
                  {t('title')}
                </h2>
                
                <p className="text-lg sm:text-xl text-sky-600 font-semibold mb-6">
                  {t('subtitle')}
                </p>
                
                <div className="space-y-6 text-base sm:text-lg text-gray-700 leading-relaxed">
                  <p className="break-keep">
                    {t('description1')}
                  </p>
                  <p className="break-keep">
                    {t('description2')}
                  </p>
                </div>
              </div>

              {/* 핵심 장점 */}
              <div className="space-y-6">
                <div className="border-l-4 border-sky-500 pl-6 py-2">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{t('advantage1_title')}</h4>
                  <p className="text-gray-600 break-keep">{t('advantage1_description')}</p>
                </div>
                
                <div className="border-l-4 border-sky-500 pl-6 py-2">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{t('advantage2_title')}</h4>
                  <p className="text-gray-600 break-keep">{t('advantage2_description')}</p>
                </div>
                
                <div className="border-l-4 border-sky-500 pl-6 py-2">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{t('advantage3_title')}</h4>
                  <p className="text-gray-600 break-keep">{t('advantage3_description')}</p>
                </div>
              </div>

              {/* 추가 특징 - 3단 그리드 */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6">
                <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-sky-50 rounded-lg">
                  <div className="text-2xl font-bold text-sky-600 mb-2">{t('feature1_title')}</div>
                  <div className="text-sm text-gray-600 break-keep">{t('feature1_description')}</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-sky-50 to-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-sky-600 mb-2">{t('feature2_title')}</div>
                  <div className="text-sm text-gray-600 break-keep">{t('feature2_description')}</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-sky-50 rounded-lg">
                  <div className="text-2xl font-bold text-sky-600 mb-2">{t('feature3_title')}</div>
                  <div className="text-sm text-gray-600 break-keep">{t('feature3_description')}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

