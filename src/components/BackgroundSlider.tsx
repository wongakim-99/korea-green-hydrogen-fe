'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

interface SlideData {
  image: string;
  headline: string;
  subheadline: string;
}

interface BackgroundSliderProps {
  slides: SlideData[];
  interval?: number; // 슬라이드 간격 (ms)
  className?: string;
}

export default function BackgroundSlider({
  slides,
  interval = 5000,
  className = ''
}: BackgroundSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const progressBarRef = useRef<HTMLDivElement>(null);

  const resetAnimation = () => {
    if (progressBarRef.current) {
      progressBarRef.current.style.animation = 'none';
      // Trigger reflow to restart animation
      void progressBarRef.current.offsetWidth;
      progressBarRef.current.style.animation = `progressBar ${interval / 1000}s linear forwards`;
    }
  }

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  }

  useEffect(() => {
    if (slides.length <= 1) return;

    const timer = setInterval(nextSlide, interval);

    return () => clearInterval(timer);
  }, [slides.length, interval]);

  // Effect to reset animation on slide change
  useEffect(() => {
    if (slides.length > 1) {
      resetAnimation();
    }
  }, [currentIndex, slides.length, interval]);


  return (
    <div
      className={`absolute inset-0 overflow-hidden cursor-pointer ${className}`}
      onClick={nextSlide}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          nextSlide();
        }
      }}
      aria-label="다음 배경 이미지로 전환"
    >
      {slides.map((slide, index) => (
        <div
          key={slide.image}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={slide.image}
            alt={`배경 이미지 ${index + 1}`}
            fill
            className="object-cover"
            priority={index === 0}
            quality={95}
            sizes="100vw"
          />
        </div>
      ))}

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-900/50 to-blue-900/30 z-10 pointer-events-none"></div>

      {/* 텍스트 오버레이 */}
      <div className="absolute inset-0 z-30 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="relative max-w-2xl pr-4 md:pr-0">
            {/* Spacing element to prevent layout shift */}
            <div className="opacity-0 invisible pointer-events-none">
               <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-extrabold text-white mb-3 md:mb-4 leading-tight text-shadow-strong">
                 {slides[currentIndex].headline}
               </h1>
               <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white mb-6 md:mb-8 max-w-lg lg:max-w-xl leading-relaxed text-shadow">
                 {slides[currentIndex].subheadline}
               </p>
            </div>

            {/* Animated text slides */}
            {slides.map((slide, index) => (
              <div
                key={`text-${slide.image}`}
                className={`absolute top-0 left-0 w-full h-full flex flex-col justify-center transition-all duration-1000 ease-out ${
                  index === currentIndex
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ willChange: 'transform, opacity' }}
              >
                 <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-extrabold text-solid-white mb-3 md:mb-4 leading-tight text-shadow-strong">
                   {slide.headline}
                 </h1>
                 <p className="text-sm sm:text-base md:text-lg lg:text-xl text-solid-white mb-6 md:mb-8 max-w-lg lg:max-w-xl leading-relaxed text-shadow">
                   {slide.subheadline}
                 </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 슬라이드 인디케이터 & 프로그레스 바 */}
      {slides.length > 1 && (
        <>
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-30 pointer-events-auto">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation(); // 배경 클릭 이벤트 방지
                  e.preventDefault();
                  goToSlide(index);
                }}
                className={`w-4 h-4 rounded-full transition-all duration-300 border-2 cursor-pointer ${
                  index === currentIndex
                    ? 'bg-white border-white shadow-lg'
                    : 'bg-white/30 border-white/60 hover:bg-white/50 hover:border-white/80'
                }`}
                style={{ pointerEvents: 'auto' }}
                aria-label={`슬라이드 ${index + 1}로 이동`}
              />
            ))}
          </div>
          {/* 프로그레스 바 컨테이너 */}
          <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20 z-30">
            <div
              ref={progressBarRef}
              className="h-full bg-white"
              style={{ animation: `progressBar ${interval / 1000}s linear forwards` }}
            />
          </div>
        </>
      )}
    </div>
  );
}