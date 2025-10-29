'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useTranslations } from 'next-intl';
import { Award, Zap, TrendingUp } from 'lucide-react';

export default function KGHSolutionSection() {
  const [ref, isVisible] = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 });
  const t = useTranslations('CCUSPage.KGHSolution');

  return (
    <section ref={ref} className="py-16 md:py-20 lg:py-24 bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden">
      <div className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* 섹션 헤더 */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-4 break-keep">
              {t('title')}
            </h2>
            <p className="text-lg sm:text-xl text-sky-400 font-semibold mb-4">
              {t('subtitle')}
            </p>
            <div className="max-w-3xl mx-auto space-y-4 text-base sm:text-lg text-gray-300 leading-relaxed">
              <p className="break-keep">
                {t('description1')}
              </p>
              <p className="break-keep">
                {t('description2')}
              </p>
            </div>
          </div>

          {/* 핵심 장점 카드 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
            {/* 장점 1 */}
            <div 
              className={`bg-white/5 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-white/10 hover:border-sky-500/50 transition-all duration-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="bg-sky-500/20 text-sky-400 w-14 h-14 md:w-16 md:h-16 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Award className="w-7 h-7 md:w-8 md:h-8" />
                </div>
                <h4 className="text-xl md:text-2xl font-bold text-white break-keep">
                  {t('advantage1_title')}
                </h4>
                <p className="text-sm md:text-base text-gray-300 leading-relaxed break-keep">
                  {t('advantage1_description')}
                </p>
              </div>
            </div>

            {/* 장점 2 */}
            <div 
              className={`bg-white/5 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-white/10 hover:border-sky-500/50 transition-all duration-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: '300ms' }}
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="bg-sky-500/20 text-sky-400 w-14 h-14 md:w-16 md:h-16 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Zap className="w-7 h-7 md:w-8 md:h-8" />
                </div>
                <h4 className="text-xl md:text-2xl font-bold text-white break-keep">
                  {t('advantage2_title')}
                </h4>
                <p className="text-sm md:text-base text-gray-300 leading-relaxed break-keep">
                  {t('advantage2_description')}
                </p>
              </div>
            </div>

            {/* 장점 3 */}
            <div 
              className={`bg-white/5 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-white/10 hover:border-sky-500/50 transition-all duration-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: '400ms' }}
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="bg-sky-500/20 text-sky-400 w-14 h-14 md:w-16 md:h-16 rounded-xl flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-7 h-7 md:w-8 md:h-8" />
                </div>
                <h4 className="text-xl md:text-2xl font-bold text-white break-keep">
                  {t('advantage3_title')}
                </h4>
                <p className="text-sm md:text-base text-gray-300 leading-relaxed break-keep">
                  {t('advantage3_description')}
                </p>
              </div>
            </div>
          </div>

          {/* 추가 특징 - 강조 영역 */}
          <div 
            className={`bg-gradient-to-r from-sky-500/10 to-blue-500/10 backdrop-blur-sm rounded-xl p-8 md:p-10 border border-sky-500/20 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '500ms' }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
              <div className="text-center p-6 bg-white/5 rounded-xl border border-white/10 hover:border-sky-500/50 transition-all duration-300">
                <div className="text-3xl md:text-4xl font-bold text-sky-400 mb-3">
                  {t('feature1_title')}
                </div>
                <div className="text-sm md:text-base text-gray-300 break-keep">
                  {t('feature1_description')}
                </div>
              </div>
              <div className="text-center p-6 bg-white/5 rounded-xl border border-white/10 hover:border-sky-500/50 transition-all duration-300">
                <div className="text-3xl md:text-4xl font-bold text-sky-400 mb-3">
                  {t('feature2_title')}
                </div>
                <div className="text-sm md:text-base text-gray-300 break-keep">
                  {t('feature2_description')}
                </div>
              </div>
              <div className="text-center p-6 bg-white/5 rounded-xl border border-white/10 hover:border-sky-500/50 transition-all duration-300">
                <div className="text-3xl md:text-4xl font-bold text-sky-400 mb-3">
                  {t('feature3_title')}
                </div>
                <div className="text-sm md:text-base text-gray-300 break-keep">
                  {t('feature3_description')}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

