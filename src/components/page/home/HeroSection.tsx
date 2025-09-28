'use client';

import Link from "next/link";
import BackgroundSlider from "@/components/BackgroundSlider";

const slideData = [
  {
    image: '/images/home/main-background1.jpg',
    headline: 'PIONEERING A GREENER TOMORROW',
    subheadline: '(주)한국그린수소는 폐기물에서 새로운 가치를 창출하는 혁신 기술로 지속가능한 미래를 선도합니다.'
  },
  {
    image: '/images/home/main-background2.jpg',
    headline: 'CLEAN HYDROGEN SOLUTIONS',
    subheadline: '하수 슬러지를 최첨단 열가수분해(THP) 기술로 분해하여 미래를 위한 청정 수소 에너지를 생산합니다.'
  },
  {
    image: '/images/home/main-background3.jpg',
    headline: 'REDEFINING WASTE AS A RESOURCE',
    subheadline: '버려지는 슬러지를 고품질의 친환경 비료로 전환하여 전 세계 시장에 공급합니다.'
  },
  {
    image: '/images/home/main-background4.jpg',
    headline: 'INVESTING IN A CARBON-ZERO FUTURE',
    subheadline: '친환경 공정을 통해 확보한 탄소배출권으로 국가의 2050 탄소중립 목표 달성에 기여합니다.'
  }
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center snap-start overflow-hidden">
      {/* Background Slider */}
      <BackgroundSlider 
        slides={slideData}
        interval={5000}
      />
      
      {/* 데스크톱 버튼 영역 */}
      <div className="hidden md:flex absolute inset-0 z-20 items-center justify-end pr-8 pointer-events-none">
        <div className="flex flex-col gap-4 pointer-events-auto">
          <Link
            href="/about"
            className="bg-sky-600/95 text-white px-6 py-3 rounded-xl text-base font-semibold hover:bg-sky-700 transition-all duration-300 shadow-xl backdrop-blur-sm transform hover:scale-105 hover:-translate-y-1 whitespace-nowrap border border-sky-500/20"
          >
            회사 소개
          </Link>
          <Link
            href="/contact"
            className="bg-white/10 text-white px-6 py-3 rounded-xl text-base font-semibold hover:bg-white/20 transition-all duration-300 border-2 border-white/80 whitespace-nowrap backdrop-blur-sm transform hover:scale-105 hover:-translate-y-1"
          >
            문의하기
          </Link>
        </div>
      </div>

      {/* 모바일용 하단 버튼 */}
      <div className="absolute bottom-16 sm:bottom-20 left-1/2 transform -translate-x-1/2 z-20 md:hidden pointer-events-auto px-4">
        <div className="flex flex-row gap-2 sm:gap-3">
          <Link
            href="/about"
            className="bg-sky-600/95 text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm font-semibold hover:bg-sky-700 transition-all duration-300 shadow-xl backdrop-blur-sm transform hover:scale-105 whitespace-nowrap"
          >
            회사 소개
          </Link>
          <Link
            href="/contact"
            className="bg-white/10 text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm font-semibold hover:bg-white/20 transition-all duration-300 border border-white/80 whitespace-nowrap backdrop-blur-sm transform hover:scale-105"
          >
            문의하기
          </Link>
        </div>
      </div>
    </section>
  );
}
