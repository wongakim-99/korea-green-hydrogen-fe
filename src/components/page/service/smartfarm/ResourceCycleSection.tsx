'use client';

import { useTranslations } from 'next-intl';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function ResourceCycleSection() {
  const [ref, isVisible] = useScrollAnimation<HTMLElement>({ threshold: 0.1 });
  const t = useTranslations();

  const resources = [
    {
      key: 'co2',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2M7 4h10M7 4l-2 16h14l-2-16M10 9v6M14 9v6" />
        </svg>
      )
    },
    {
      key: 'heat',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
        </svg>
      )
    },
    {
      key: 'fertilizer',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      )
    },
    {
      key: 'water',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    }
  ];

  const particleColors = ['#ef4444', '#f97316', '#22c55e', '#3b82f6']; // co2, heat, fertilizer, water
  const numParticles = 24;
  const particleAnimationDuration = "15s";

  return (
    <section ref={ref} className="py-16 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 섹션 헤더 */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('resourceCycle.title')}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            {t('resourceCycle.subtitle')}
          </p>
        </div>

        {/* 가로 카드 레이아웃 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {resources.map((resource, index) => (
            <div
              key={resource.key}
              className={`group transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: isVisible ? `${index * 0.15}s` : '0s' }}
            >
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-full">
                {/* 아이콘 */}
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-sky-400 to-sky-600 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                  {resource.icon}
                </div>

                {/* 제목 */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                  {t(`resourceCycle.resources.${resource.key}.title`)}
                </h3>

                {/* 수치 표시 */}
                <div className="flex items-center justify-center space-x-2 mb-4">
                  <div className="w-2 h-2 bg-sky-400 rounded-full"></div>
                  <span className="text-sm text-gray-600 font-medium">{t(`resourceCycle.resources.${resource.key}.metric`)}</span>
                </div>

                {/* 호버 시 설명 표시 */}
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm text-gray-600 leading-relaxed text-center">
                    {t(`resourceCycle.resources.${resource.key}.description`)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}