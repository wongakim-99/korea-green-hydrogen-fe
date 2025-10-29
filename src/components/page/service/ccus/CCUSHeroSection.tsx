'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function CCUSHeroSection() {
  const t = useTranslations('CCUSPage.Hero');
  return (
    <section className="relative bg-gray-900 min-h-[60vh] md:min-h-[70vh] lg:min-h-[87vh] flex items-center overflow-hidden">
      {/* 배경 이미지 */}
      <div className="absolute inset-0">
        <Image
          src="/images/services/ccus/ccus-hero.jpg"
          alt="CCUS 시설"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-sky-900/60 via-gray-900/50 to-blue-900/60"></div>
      </div>
      
      {/* 심플한 오버레이 */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/50 via-gray-900/30 to-transparent"></div>
      
      <div className="relative w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-3xl mr-auto">
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
          
          {/* 서브타이틀 */}
          <p className="text-xl sm:text-2xl md:text-3xl text-sky-300 mb-4 md:mb-6 font-semibold">
            {t('subtitle')}
          </p>
          
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

