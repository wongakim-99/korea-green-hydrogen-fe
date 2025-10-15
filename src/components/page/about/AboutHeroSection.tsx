'use client';

import { useTranslations } from "next-intl";
import Image from "next/image";

const AboutHeroSection = () => {
  const t = useTranslations('About.hero');

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Layer - KGH Global 플랜트 사진 */}
      <div className="absolute inset-0 z-0">
        {/* 배경 이미지 */}
        <Image 
          src="/images/about/about-1.jpg" 
          alt="KGH Global Plant" 
          fill 
          className="object-cover"
          priority
          quality={90}
        />
        
        {/* 텍스트 가독성을 위한 어두운 오버레이 */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content Layer - 중앙 정렬된 텍스트 컨테이너 */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 text-center py-20">
        {/* 애니메이션 컨테이너 - 로딩 후 0.5초 뒤 부드럽게 나타남 */}
        <div 
          className="animate-aboutFadeIn opacity-0" 
          style={{ 
            animationDelay: '0.5s', 
            animationFillMode: 'both' 
          }}
        >
          {/* 메인 헤드라인 */}
          <h1 
            className="text-white font-bold leading-tight mb-8 md:mb-10 lg:mb-12 px-2 break-keep"
            style={{ 
              fontSize: 'clamp(2rem, 5.5vw, 5rem)',
              textShadow: '0 2px 16px rgba(0, 0, 0, 0.6), 0 4px 32px rgba(0, 0, 0, 0.4)',
              lineHeight: '1.2'
            }}
          >
            {t('headline')}
          </h1>

          {/* 본문 설명 */}
          <p 
            className="text-white leading-relaxed max-w-4xl mx-auto px-2 sm:px-4 break-keep"
            style={{ 
              fontSize: 'clamp(1rem, 1.7vw, 1.4rem)',
              textShadow: '0 1px 8px rgba(0, 0, 0, 0.6), 0 2px 16px rgba(0, 0, 0, 0.4)',
              lineHeight: '1.8'
            }}
          >
            {t.rich('description', {
              b: (chunks) => <strong className="font-bold">{chunks}</strong>
            })}
          </p>
        </div>
      </div>

      {/* 스크롤 인디케이터 (선택사항) */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <svg 
          className="w-6 h-6 text-white opacity-60" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M19 14l-7 7m0 0l-7-7m7 7V3" 
          />
        </svg>
      </div>
    </section>
  );
};

export default AboutHeroSection;

