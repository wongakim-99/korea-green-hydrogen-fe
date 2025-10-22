'use client';

import { useTranslations } from 'next-intl';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useEffect, useState, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';

interface BenefitsSectionProps {
  imageUrls?: string[];
}

export default function BenefitsSection({ imageUrls }: BenefitsSectionProps) {
  const [ref, isVisible] = useScrollAnimation<HTMLElement>({ threshold: 0.1 });
  const t = useTranslations();
  
  // 카운트업 애니메이션을 위한 상태
  const [co2Count, setCo2Count] = useState(400);
  const [harvestCount, setHarvestCount] = useState(1);

  // Embla Carousel 설정
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  useEffect(() => {
    if (isVisible) {
      // CO₂ 농도 카운트업 (400 → 1000)
      const co2Interval = setInterval(() => {
        setCo2Count(prev => {
          if (prev >= 1000) {
            clearInterval(co2Interval);
            return 1000;
          }
          return prev + 20;
        });
      }, 50);

      // 수확량 카운트업 (1 → 2)
      const harvestInterval = setInterval(() => {
        setHarvestCount(prev => {
          if (prev >= 2) {
            clearInterval(harvestInterval);
            return 2;
          }
          return prev + 0.1;
        });
      }, 100);

      return () => {
        clearInterval(co2Interval);
        clearInterval(harvestInterval);
      };
    }
  }, [isVisible]);

  const benefits = [
    {
      id: 'productivity',
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      color: 'from-emerald-500 to-green-600',
      bgColor: 'bg-emerald-50',
      textColor: 'text-emerald-600',
      stats: [
        { label: 'CO₂ 농도', value: `${co2Count}PPM`, subtext: '일반 대기 대비' },
        { label: '수확량', value: `${harvestCount.toFixed(1)}배`, subtext: '증가' }
      ]
    },
    {
      id: 'quality',
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-600',
      crops: ['딸기', '토마토', '고부가가치 작물']
    },
    {
      id: 'oxygen',
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: 'from-sky-500 to-blue-600',
      bgColor: 'bg-sky-50',
      textColor: 'text-sky-600',
      conversion: '1mol CO₂ → 1mol O₂'
    }
  ];

  return (
    <section ref={ref} className="py-16 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 헤더 */}
        <div className={`text-center mb-12 md:mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('benefits.title')}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            {t('benefits.subtitle')}
          </p>
        </div>

        {/* 혜택 카드들 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.id}
              className={`group transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: isVisible ? `${index * 0.3}s` : '0s' }}
            >
              <div className={`${benefit.bgColor} rounded-2xl p-8 md:p-10 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-full`}>
                {/* 아이콘 */}
                <div className={`w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r ${benefit.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                  {benefit.icon}
                </div>

                {/* 제목 */}
                <h3 className={`text-2xl md:text-3xl font-bold ${benefit.textColor} mb-6 text-center`}>
                  {t(`benefits.${benefit.id}.title`)}
                </h3>

                {/* 내용 */}
                <div className="text-center">
                  {benefit.id === 'productivity' && (
                    <div className="space-y-4">
                      {benefit.stats.map((stat, statIndex) => (
                        <div key={statIndex} className="bg-white/50 rounded-lg p-4">
                          <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
                            {stat.value}
                          </div>
                          <div className="text-sm text-gray-600">
                            {stat.label} {stat.subtext}
                          </div>
                        </div>
                      ))}
                      <p className="text-gray-600 leading-relaxed">
                        {t('benefits.productivity.result')}
                      </p>
                    </div>
                  )}

                  {benefit.id === 'quality' && (
                    <div className="space-y-4">
                      {/* 이미지 캐러셀 */}
                      {imageUrls && imageUrls.length > 0 ? (
                        <div className="relative">
                          {/* Embla Carousel Container */}
                          <div className="overflow-hidden rounded-lg" ref={emblaRef}>
                            <div className="flex">
                              {imageUrls.map((url, index) => (
                                <div key={index} className="flex-[0_0_100%] min-w-0">
                                  <div className="relative w-full h-48 md:h-64 bg-white/50 rounded-lg overflow-hidden">
                                    <Image
                                      src={url}
                                      alt={`고부가가치 작물 ${index + 1}`}
                                      fill
                                      className="object-cover"
                                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    />
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* 캐러셀 컨트롤 버튼 */}
                          {imageUrls.length > 1 && (
                            <>
                              <button
                                onClick={scrollPrev}
                                className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center text-purple-600 transition-all hover:scale-110"
                                aria-label="이전 이미지"
                              >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                              </button>
                              <button
                                onClick={scrollNext}
                                className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center text-purple-600 transition-all hover:scale-110"
                                aria-label="다음 이미지"
                              >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                              </button>

                              {/* 인디케이터 점들 */}
                              <div className="flex justify-center gap-2 mt-4">
                                {imageUrls.map((_, index) => (
                                  <button
                                    key={index}
                                    onClick={() => emblaApi?.scrollTo(index)}
                                    className={`w-2 h-2 rounded-full transition-all ${
                                      index === selectedIndex
                                        ? 'bg-purple-600 w-6'
                                        : 'bg-purple-300 hover:bg-purple-400'
                                    }`}
                                    aria-label={`이미지 ${index + 1}로 이동`}
                                  />
                                ))}
                              </div>
                            </>
                          )}
                        </div>
                      ) : (
                        /* 플레이스홀더 - 이미지가 없을 때 */
                        <div className="relative w-full h-48 md:h-64 bg-white/50 rounded-lg overflow-hidden flex items-center justify-center">
                          <div className="text-center">
                            <svg className="w-16 h-16 text-purple-300 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <p className="text-sm text-gray-500 font-medium">이미지 준비 중</p>
                            <p className="text-xs text-gray-400 mt-1">곧 고품질 작물 이미지가 추가됩니다</p>
                          </div>
                        </div>
                      )}

                      {/* 작물 태그 */}
                      <div className="flex flex-wrap justify-center gap-2">
                        {benefit.crops.map((crop, cropIndex) => (
                          <span key={cropIndex} className="bg-white/50 px-3 py-1 rounded-full text-sm font-medium text-gray-700">
                            {crop}
                          </span>
                        ))}
                      </div>

                      {/* 설명 텍스트 */}
                      <p className="text-gray-600 leading-relaxed">
                        {t('benefits.quality.description')}
                      </p>
                    </div>
                  )}

                  {benefit.id === 'oxygen' && (
                    <div className="space-y-4">
                      <div className="bg-white/50 rounded-lg p-6">
                        <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                          {benefit.conversion}
                        </div>
                        <div className="text-sm text-gray-600">
                          탄소 소비 + 산소 생산
                        </div>
                      </div>
                      <p className="text-gray-600 leading-relaxed">
                        {t('benefits.oxygen.description')}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
