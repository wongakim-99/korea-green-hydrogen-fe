'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function FertilizerHeroSection() {
  const t = useTranslations('FertilizerPage.Hero');
  
  return (
    <section className="relative bg-gray-900 py-32 md:py-40 lg:py-48 overflow-hidden">
      {/* 배경 이미지 - 사용자가 이미지를 추가하면 여기에 넣을 수 있습니다 */}
      <div className="absolute inset-0">
        {/* TODO: 사용자가 제공하는 이미지로 교체 */}
        {/* <Image
          src="/images/services/fertilizer/hero-bg.jpg"
          alt="비료화 시설"
          fill
          className="object-cover opacity-40"
          sizes="100vw"
          priority
        /> */}
        <div className="absolute inset-0 bg-gradient-to-r from-sky-900/95 via-sky-900/80 to-blue-900/60"></div>
      </div>
      
      {/* 그라데이션 오버레이 */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/80 to-gray-900/60"></div>
      
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl">
          {/* 작은 라벨 */}
          <div className="inline-block mb-6 md:mb-8">
            <span className="text-sm md:text-base font-medium text-sky-400 tracking-wide uppercase">
              {t('label')}
            </span>
          </div>
          
          {/* 메인 헤드라인 */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 md:mb-8 leading-tight break-keep">
            {t('headline')}
          </h1>
          
          {/* 서브 메시지 */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed break-keep">
            {t('subMessage')}
          </p>
        </div>
      </div>
    </section>
  );
}

