'use client';

import { useTranslations } from 'next-intl';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function SmartFarmHeroSection() {
  const [ref, isVisible] = useScrollAnimation<HTMLElement>({ threshold: 0.1 });
  const t = useTranslations();

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 배경 이미지 */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-br from-green-600 via-emerald-700 to-teal-800">
          {/* 임시 배경 - 실제 이미지로 교체 예정 */}
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
      </div>

      {/* 콘텐츠 */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {/* 메인 타이틀 */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 md:mb-8 leading-tight">
            <span className="block mb-2">{t('hero.title')}</span>
          </h1>

          {/* 서브 타이틀 */}
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-green-100 mb-8 md:mb-12 leading-relaxed">
            {t('hero.subtitle')}
          </h2>

          {/* 설명 */}
          <div className="max-w-4xl mx-auto">
            <p className="text-base sm:text-lg md:text-xl text-gray-100 leading-relaxed mb-8 md:mb-12">
              {t('hero.description')}
            </p>
          </div>

          {/* 스크롤 인디케이터 */}
          <div className="flex justify-center">
            <div className="animate-bounce">
              <svg className="w-6 h-6 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* 하단 그라데이션 오버레이 */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-5"></div>
    </section>
  );
}
