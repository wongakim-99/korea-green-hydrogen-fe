'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function FertilizerHeroSection() {
  const t = useTranslations('FertilizerPage.Hero');
  
  return (
    <section className="relative bg-gray-900 min-h-[60vh] md:min-h-[70vh] lg:min-h-[87vh] flex items-center overflow-hidden">
      {/* 배경 이미지 */}
      <div className="absolute inset-0">
        <Image
          src="/images/services/fertilizer/fer-main.jpg"
          alt="비료화 시설"
          fill
          className="object-cover opacity-40"
          sizes="100vw"
          priority
        />
      </div>
      
      {/* 그라데이션 오버레이 */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/75 via-gray-900/60 to-gray-900/45"></div>
      
      <div className="relative w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-3xl mr-auto">
          {/* 작은 라벨 */}
          <div className="inline-block mb-6 md:mb-8">
            <span className="text-sm md:text-base font-medium text-sky-400 tracking-wide uppercase">
              {t('label')}
            </span>
          </div>
          
          {/* 메인 헤드라인 */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 md:mb-6 leading-tight break-keep">
            {t('headline')}
          </h1>
          
          {/* 서브 헤드라인 */}
          <p className="text-2xl sm:text-3xl md:text-4xl text-sky-300 font-semibold mb-6 md:mb-8 leading-tight break-keep">
            {t('subheadline')}
          </p>
          
          {/* 서브 메시지 */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed mb-8 md:mb-10 break-keep">
            {t('subMessage')}
          </p>
        </div>
      </div>
    </section>
  );
}

