'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function BiogasHeroSection() {
  const t = useTranslations('BiogasPage.Hero');
  return (
    <section className="relative bg-gray-900 py-32 md:py-40 lg:py-48 overflow-hidden">
      {/* 배경 이미지 */}
      <div className="absolute inset-0">
        <Image
          src="/images/services/biogas/service-3.jpg"
          alt="바이오가스 생산 시설"
          fill
          className="object-cover opacity-40"
          sizes="100vw"
          priority
        />
      </div>
      
      {/* 심플한 오버레이 */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/80 to-gray-900/60"></div>
      
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-3xl">
          {/* 작은 라벨 */}
          <div className="inline-block mb-6 md:mb-8">
            <span className="text-sm md:text-base font-medium text-sky-400 tracking-wide uppercase">
              {t('label')}
            </span>
          </div>
          
          {/* 메인 헤딩 */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 md:mb-8 leading-tight">
            {t('title')}
          </h1>
          
          {/* 서브 텍스트 */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed mb-8 md:mb-10 break-keep">
            {t('description')}
          </p>
          
          {/* 간단한 통계 */}
          <div className="grid grid-cols-2 gap-6 sm:gap-8 md:flex md:space-x-12 pt-4">
            <div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">{t('stat1_value')}</div>
              <div className="text-sm sm:text-base text-gray-400">{t('stat1_label')}</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">{t('stat2_value')}</div>
              <div className="text-sm sm:text-base text-gray-400">{t('stat2_label')}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
