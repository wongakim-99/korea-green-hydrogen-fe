'use client';

import Image from 'next/image';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useTranslations } from 'next-intl';

export default function ThpTechnologySection() {
  const [ref, isVisible] = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 });
  const t = useTranslations('BiogasPage.ThpTechnology');

  return (
    <section ref={ref} className="py-16 md:py-20 lg:py-24 bg-gray-50 overflow-hidden">
      <div className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* 이미지 영역 - 모바일에서는 아래, 데스크톱에서는 왼쪽 */}
            <div className="order-2 lg:order-1 lg:col-span-6">
              <div className="relative rounded-lg overflow-hidden shadow-lg bg-white aspect-[4/3] flex items-center justify-center">
                <Image
                  src="/images/services/biogas/service-2.jpg"
                  alt="THP 열가수분해 기술 - 공정 다이어그램"
                  fill
                  className="object-contain p-4"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
                />
              </div>
            </div>

            {/* 텍스트 영역 */}
            <div className="order-1 lg:order-2 lg:col-span-6 space-y-8 md:space-y-10">
              <div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6 md:mb-8 break-keep">
                  {t('title')}
                </h2>
                
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
