'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface BackgroundSliderProps {
  images: string[];
  interval?: number; // 슬라이드 간격 (ms)
  className?: string;
}

export default function BackgroundSlider({ 
  images, 
  interval = 5000, 
  className = '' 
}: BackgroundSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    if (images.length <= 1) return;

    const timer = setInterval(nextSlide, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

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
      {images.map((image, index) => (
        <div
          key={image}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={image}
            alt={`배경 이미지 ${index + 1}`}
            fill
            className="object-cover"
            priority={index === 0}
          />
        </div>
      ))}
      
      {/* 슬라이드 인디케이터 */}
      {images.length > 1 && (
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-30 pointer-events-auto">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={(e) => {
                e.stopPropagation(); // 배경 클릭 이벤트 방지
                e.preventDefault();
                console.log(`인디케이터 ${index + 1} 클릭됨`); // 디버깅용
                setCurrentIndex(index);
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
      )}
    </div>
  );
}
