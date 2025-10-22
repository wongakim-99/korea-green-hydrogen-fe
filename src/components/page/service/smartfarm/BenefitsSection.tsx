'use client';

import { useTranslations } from 'next-intl';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useEffect, useState } from 'react';

export default function BenefitsSection() {
  const [ref, isVisible] = useScrollAnimation<HTMLElement>({ threshold: 0.1 });
  const t = useTranslations();
  
  // 카운트업 애니메이션을 위한 상태
  const [co2Count, setCo2Count] = useState(400);
  const [harvestCount, setHarvestCount] = useState(1);

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
                      <div className="flex flex-wrap justify-center gap-2 mb-4">
                        {benefit.crops.map((crop, cropIndex) => (
                          <span key={cropIndex} className="bg-white/50 px-3 py-1 rounded-full text-sm font-medium text-gray-700">
                            {crop}
                          </span>
                        ))}
                      </div>
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
