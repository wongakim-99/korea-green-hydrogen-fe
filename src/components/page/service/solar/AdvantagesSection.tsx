'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useTranslations } from 'next-intl';
import { Leaf, Award, TrendingDown, Globe } from 'lucide-react';

export default function AdvantagesSection() {
  const [ref, isVisible] = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 });
  const t = useTranslations('SolarPage.Advantages');

  const advantages = [
    {
      icon: Leaf,
      title: t('advantage1_title'),
      description: t('advantage1_description'),
      color: 'text-green-500',
      bgColor: 'bg-green-50'
    },
    {
      icon: Award,
      title: t('advantage2_title'),
      description: t('advantage2_description'),
      color: 'text-blue-500',
      bgColor: 'bg-blue-50'
    },
    {
      icon: TrendingDown,
      title: t('advantage3_title'),
      description: t('advantage3_description'),
      color: 'text-amber-500',
      bgColor: 'bg-amber-50'
    },
    {
      icon: Globe,
      title: t('advantage4_title'),
      description: t('advantage4_description'),
      color: 'text-sky-500',
      bgColor: 'bg-sky-50'
    }
  ];

  return (
    <section ref={ref} className="py-16 md:py-20 lg:py-24 bg-gray-50 overflow-hidden">
      <div className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* 섹션 헤더 */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 break-keep">
              {t('sectionTitle')}
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 break-keep">
              {t('sectionSubtitle')}
            </p>
          </div>

          {/* 장점 카드 그리드 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {advantages.map((advantage, index) => {
              const Icon = advantage.icon;
              return (
                <div
                  key={index}
                  className={`bg-white rounded-xl shadow-lg p-6 md:p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{
                    transitionDelay: `${index * 150}ms`
                  }}
                >
                  {/* 아이콘 */}
                  <div className={`${advantage.bgColor} ${advantage.color} w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center mb-4 md:mb-6 mx-auto`}>
                    <Icon className="w-7 h-7 md:w-8 md:h-8" />
                  </div>
                  
                  {/* 제목 */}
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4 break-keep text-center">
                    {advantage.title}
                  </h3>
                  
                  {/* 설명 */}
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed break-keep text-center">
                    {advantage.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

