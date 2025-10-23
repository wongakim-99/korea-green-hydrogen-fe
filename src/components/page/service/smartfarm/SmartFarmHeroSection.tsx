'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';

interface SmartFarmHeroSectionProps {
  imageUrl?: string;
}

export default function SmartFarmHeroSection({ imageUrl }: SmartFarmHeroSectionProps) {
  const t = useTranslations();
  
  // 기본 이미지 설정
  const defaultImageUrl = '/images/services/smart-farm/smart-farm-hero.jpg';
  const finalImageUrl = imageUrl || defaultImageUrl;
  
  return (
    <section className="relative bg-gray-900 min-h-[60vh] md:min-h-[70vh] lg:min-h-[87vh] flex items-center overflow-hidden">
      {/* 배경 이미지 */}
      <div className="absolute inset-0">
        <Image
          src={finalImageUrl}
          alt="스마트팜 시설"
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
              SOLUTION
            </span>
          </div>
          
          {/* 메인 헤드라인 */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 md:mb-6 leading-tight break-keep">
            {t('hero.title')}
          </h1>
          
          {/* 서브 헤드라인 */}
          <p className="text-2xl sm:text-3xl md:text-4xl text-sky-300 font-semibold mb-6 md:mb-8 leading-tight break-keep">
            {t('hero.subtitle')}
          </p>
          
          {/* 핵심 가치 포인트들 */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 pt-4">
            <div className="flex items-center">
              <div className="w-1 h-12 bg-sky-400 mr-4"></div>
              <div>
                <h3 className="text-lg font-bold text-white break-keep">{t('hero.benefits.productivity.title')}</h3>
                <p className="text-sm text-gray-400 mt-1 break-keep">{t('hero.benefits.productivity.subtitle')}</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-1 h-12 bg-sky-400 mr-4"></div>
              <div>
                <h3 className="text-lg font-bold text-white break-keep">{t('hero.benefits.quality.title')}</h3>
                <p className="text-sm text-gray-400 mt-1 break-keep">{t('hero.benefits.quality.subtitle')}</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-1 h-12 bg-sky-400 mr-4"></div>
              <div>
                <h3 className="text-lg font-bold text-white break-keep">{t('hero.benefits.oxygen.title')}</h3>
                <p className="text-sm text-gray-400 mt-1 break-keep">{t('hero.benefits.oxygen.subtitle')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
