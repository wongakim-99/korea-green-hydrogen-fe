'use client';

import { useTranslations } from 'next-intl';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useEffect, useState, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';

interface BenefitsSectionProps {
  imageUrls?: string[];
}

interface BenefitItem {
  id: string;
  icon: React.ReactNode;
  color: string;
  bgColor: string;
  textColor: string;
  stats?: Array<{
    label: string;
    value: string;
    subtext: string;
  }>;
  crops?: string[];
  conversion?: string;
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

  const benefits: BenefitItem[] = [
    {
      id: 'productivity',
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      color: 'from-sky-600 to-sky-700',
      bgColor: 'bg-sky-50',
      textColor: 'text-sky-700',
      stats: [
        { label: t('benefits.productivity.stats.co2Label'), value: `${co2Count}PPM`, subtext: t('benefits.productivity.stats.co2Subtext') },
        { label: t('benefits.productivity.stats.harvestLabel'), value: `${harvestCount.toFixed(1)}배`, subtext: t('benefits.productivity.stats.harvestSubtext') }
      ]
    },
    {
      id: 'quality',
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      color: 'from-sky-600 to-sky-700',
      bgColor: 'bg-sky-50',
      textColor: 'text-sky-700',
      crops: Array.isArray(t('benefits.quality.crops', { returnObjects: true }))
        ? (t('benefits.quality.crops', { returnObjects: true }) as string[])
        : ['딸기', '토마토', '고부가가치 작물']
    },
    {
      id: 'oxygen',
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: 'from-sky-600 to-sky-700',
      bgColor: 'bg-sky-50',
      textColor: 'text-sky-700',
      conversion: t('benefits.oxygen.overlay.conversion')
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

        {/* 지그재그 레이아웃 */}
        <div className="space-y-16 md:space-y-24">
          {benefits.map((benefit, index) => {
            const isEven = index % 2 === 0;
            const isLeft = isEven;
            
            return (
            <div
              key={benefit.id}
              className={`group transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: isVisible ? `${index * 0.3}s` : '0s' }}
            >
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-stretch ${
                  isLeft ? '' : 'lg:grid-flow-col-dense'
                }`}>
                  {/* 텍스트 카드 */}
                  <div className={`${isLeft ? 'lg:order-1' : 'lg:order-2'} flex`}>
                    <div className={`${benefit.bgColor} rounded-2xl p-8 md:p-10 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 w-full flex flex-col justify-center`}>
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
                      {benefit.stats?.map((stat, statIndex) => (
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
                      {/* 작물 태그 */}
                      <div className="flex flex-wrap justify-center gap-2">
                        {benefit.crops?.map((crop, cropIndex) => (
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
                                {t('benefits.oxygen.description')}
                              </div>
                            </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

                  {/* 이미지 섹션 */}
                  <div className={`${isLeft ? 'lg:order-2' : 'lg:order-1'} flex`}>
                    <div className="w-full h-full min-h-[400px] md:min-h-[500px] flex items-center">
                    {benefit.id === 'productivity' && (
                      <div className="relative w-full h-full rounded-2xl overflow-hidden">
                        <Image
                          src="/images/services/smart-farm/smart-farm-benefit-1.jpg"
                          alt="스마트팜 생산성 최적화"
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
                        />
                        {/* 오버레이 텍스트 */}
                        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                          <div className="text-center text-white">
                            <div className="text-4xl md:text-5xl font-bold mb-2">
                              {co2Count}PPM
                            </div>
                            <div className="text-lg font-medium">
                              {t('benefits.productivity.overlay.co2Optimization')}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {benefit.id === 'quality' && (
                      <div className="relative w-full h-full rounded-2xl overflow-hidden">
                        <Image
                          src="/images/services/smart-farm/smart-farm-benefit-2.jpg"
                          alt="고부가가치 작물 생산"
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
                        />
                        {/* 오버레이 텍스트 */}
                        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                          <div className="text-center text-white">
                            <div className="text-3xl md:text-4xl font-bold mb-2">
                              {t('benefits.quality.overlay.highValueCrops')}
                            </div>
                            <div className="text-lg font-medium">
                              {t('benefits.quality.overlay.cropExamples')}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {benefit.id === 'oxygen' && (
                      <div className="relative w-full h-full rounded-2xl overflow-hidden">
                        <Image
                          src="/images/services/smart-farm/smart-farm-benefit-3.jpg"
                          alt="산소 생산 및 탄소 중립"
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
                        />
                        {/* 오버레이 텍스트 */}
                        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                          <div className="text-center text-white">
                            <div className="text-3xl md:text-4xl font-bold mb-2">
                              {t('benefits.oxygen.overlay.conversion')}
                            </div>
                            <div className="text-lg font-medium">
                              {t('benefits.oxygen.overlay.carbonNeutral')}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
