'use client';

import Link from "next/link";
import BackgroundSlider from "@/components/BackgroundSlider";
import { useTranslations, useLocale } from "next-intl";

const HeroSection = () => {
  const t = useTranslations('HomePage.Hero');
  const locale = useLocale();

  const slideData = [
    {
      image: '/images/home/main-background1.jpg',
      headline: t('slide1_headline'),
      subheadline: t('slide1_subheadline')
    },
    {
      image: '/images/home/main-background2.jpg',
      headline: t('slide2_headline'),
      subheadline: t('slide2_subheadline')
    },
    {
      image: '/images/home/main-background3.jpg',
      headline: t('slide3_headline'),
      subheadline: t('slide3_subheadline')
    },
    {
      image: '/images/home/main-background4.jpg',
      headline: t('slide4_headline'),
      subheadline: t('slide4_subheadline')
    }
  ];

  // 버튼 컴포넌트 정의
  const ActionButtons = () => (
    <>
      {/* 데스크톱 버튼 영역 (하단 중앙 가로 배치, 가장 큰 버튼) */}
      <div className="hidden xl:flex absolute bottom-20 left-1/2 transform -translate-x-1/2 z-40 pointer-events-auto">
        <div className="flex flex-row gap-6">
          <Link
            href={`/${locale}/about`}
            className="bg-sky-600/95 text-white px-10 py-5 rounded-xl text-xl font-semibold hover:bg-sky-700 transition-all duration-300 shadow-xl backdrop-blur-sm transform hover:scale-105 hover:-translate-y-1 whitespace-nowrap border border-sky-500/20"
            onClick={(e) => e.stopPropagation()}
          >
            {t('aboutButton')}
          </Link>
          <Link
            href={`/${locale}/contact`}
            className="bg-white/10 text-white px-10 py-5 rounded-xl text-xl font-semibold hover:bg-white/20 transition-all duration-300 border-2 border-white/80 whitespace-nowrap backdrop-blur-sm transform hover:scale-105 hover:-translate-y-1"
            onClick={(e) => e.stopPropagation()}
          >
            {t('contactButton')}
          </Link>
        </div>
      </div>

      {/* 태블릿 버튼 영역 (하단 중앙 가로 배치, 중간 크기 버튼) */}
      <div className="hidden md:flex xl:hidden absolute bottom-16 left-1/2 transform -translate-x-1/2 z-40 pointer-events-auto">
        <div className="flex flex-row gap-4">
          <Link
            href={`/${locale}/about`}
            className="bg-sky-600/95 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-sky-700 transition-all duration-300 shadow-xl backdrop-blur-sm transform hover:scale-105 hover:-translate-y-1 whitespace-nowrap border border-sky-500/20"
            onClick={(e) => e.stopPropagation()}
          >
            {t('aboutButton')}
          </Link>
          <Link
            href={`/${locale}/contact`}
            className="bg-white/10 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white/20 transition-all duration-300 border-2 border-white/80 whitespace-nowrap backdrop-blur-sm transform hover:scale-105 hover:-translate-y-1"
            onClick={(e) => e.stopPropagation()}
          >
            {t('contactButton')}
          </Link>
        </div>
      </div>

      {/* 모바일 버튼 영역 (하단 중앙 가로 배치, 더 큰 버튼) */}
      <div className="absolute bottom-16 sm:bottom-20 left-1/2 transform -translate-x-1/2 z-40 md:hidden pointer-events-auto px-4">
        <div className="flex flex-row gap-3 sm:gap-4">
          <Link
            href={`/${locale}/about`}
            className="bg-sky-600/95 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-sm sm:text-base font-semibold hover:bg-sky-700 transition-all duration-300 shadow-xl backdrop-blur-sm transform hover:scale-105 whitespace-nowrap border border-sky-500/20"
            onClick={(e) => e.stopPropagation()}
          >
            {t('aboutButton')}
          </Link>
          <Link
            href={`/${locale}/contact`}
            className="bg-white/10 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-sm sm:text-base font-semibold hover:bg-white/20 transition-all duration-300 border-2 border-white/80 whitespace-nowrap backdrop-blur-sm transform hover:scale-105"
            onClick={(e) => e.stopPropagation()}
          >
            {t('contactButton')}
          </Link>
        </div>
      </div>
    </>
  );

  return (
    <section className="relative min-h-screen flex items-center snap-start overflow-hidden">
      {/* Background Slider */}
      <BackgroundSlider 
        slides={slideData}
        interval={5000}
      />
      
      {/* 반응형 버튼 영역 */}
      <ActionButtons />
    </section>
  );
};

export default HeroSection;
