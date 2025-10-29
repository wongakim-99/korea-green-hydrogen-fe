'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useTranslations } from 'next-intl';
import { Zap, DollarSign, Leaf, TrendingUp } from 'lucide-react';

export default function KeyResultsSection() {
  const [ref, isVisible] = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 });
  const t = useTranslations('BiogasPage.ProcessAndEffects');

  return (
    <section ref={ref} className="py-16 md:py-20 lg:py-24 bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden">
      <div className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* 섹션 헤더 */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-4 break-keep">
              {t('effects_title')}
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 break-keep">
              {t('effects_subtitle')}
            </p>
          </div>

          {/* 주요 성과 카드 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-12 md:mb-16">
            {/* 수소 생산량 카드 */}
            <div 
              className={`bg-white/5 backdrop-blur-sm rounded-xl p-8 md:p-10 border border-white/10 hover:border-sky-500/50 transition-all duration-300 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              <div className="flex items-start space-x-4 mb-6">
                <div className="bg-sky-500/20 text-sky-400 w-14 h-14 md:w-16 md:h-16 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Zap className="w-7 h-7 md:w-8 md:h-8" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2 break-keep">
                    {t('stat1_title')}
                  </h3>
                  <div className="flex items-baseline space-x-2 mb-3">
                    <span className="text-4xl md:text-5xl font-bold text-sky-400">{t('stat1_value')}</span>
                    <span className="text-xl md:text-2xl font-medium text-gray-400">{t('stat1_unit')}</span>
                  </div>
                </div>
              </div>
              <div className="pt-4 border-t border-white/10">
                <p className="text-sm md:text-base text-gray-300 leading-relaxed break-keep">
                  {t.rich('stat1_description', {
                    strong: (chunks) => <strong className="text-sky-400">{chunks}</strong>
                  })}
                </p>
              </div>
            </div>

            {/* 연간 매출 카드 */}
            <div 
              className={`bg-white/5 backdrop-blur-sm rounded-xl p-8 md:p-10 border border-white/10 hover:border-sky-500/50 transition-all duration-300 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}
              style={{ transitionDelay: '300ms' }}
            >
              <div className="flex items-start space-x-4 mb-6">
                <div className="bg-sky-500/20 text-sky-400 w-14 h-14 md:w-16 md:h-16 rounded-xl flex items-center justify-center flex-shrink-0">
                  <DollarSign className="w-7 h-7 md:w-8 md:h-8" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2 break-keep">
                    {t('stat2_title')}
                  </h3>
                  <div className="flex items-baseline space-x-2 mb-3">
                    <span className="text-4xl md:text-5xl font-bold text-sky-400">{t('stat2_value')}</span>
                    <span className="text-xl md:text-2xl font-medium text-gray-400 break-keep">{t('stat2_unit')}</span>
                  </div>
                </div>
              </div>
              <div className="pt-4 border-t border-white/10">
                <p className="text-sm md:text-base text-gray-300 leading-relaxed break-keep">
                  {t.rich('stat2_description', {
                    strong: (chunks) => <strong className="text-sky-400">{chunks}</strong>
                  })}
                </p>
              </div>
            </div>
          </div>

          {/* 추가 성과 지표 */}
          <div 
            className={`bg-gradient-to-r from-sky-500/10 to-blue-500/10 backdrop-blur-sm rounded-xl p-8 md:p-10 border border-sky-500/20 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
              <div className="text-center p-6 bg-white/5 rounded-xl border border-white/10 hover:border-sky-500/50 transition-all duration-300">
                <div className="flex justify-center mb-3">
                  <div className="bg-sky-500/20 text-sky-400 w-12 h-12 rounded-lg flex items-center justify-center">
                    <Leaf className="w-6 h-6" />
                  </div>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-sky-400 mb-2">
                  80%
                </div>
                <div className="text-sm md:text-base text-gray-300 break-keep">
                  {t('additional_stats.co2_reduction')}
                </div>
              </div>
              <div className="text-center p-6 bg-white/5 rounded-xl border border-white/10 hover:border-sky-500/50 transition-all duration-300">
                <div className="flex justify-center mb-3">
                  <div className="bg-sky-500/20 text-sky-400 w-12 h-12 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-sky-400 mb-2">
                  95%
                </div>
                <div className="text-sm md:text-base text-gray-300 break-keep">
                  {t('additional_stats.energy_efficiency')}
                </div>
              </div>
              <div className="text-center p-6 bg-white/5 rounded-xl border border-white/10 hover:border-sky-500/50 transition-all duration-300">
                <div className="flex justify-center mb-3">
                  <div className="bg-sky-500/20 text-sky-400 w-12 h-12 rounded-lg flex items-center justify-center">
                    <Zap className="w-6 h-6" />
                  </div>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-sky-400 mb-2">
                  24/7
                </div>
                <div className="text-sm md:text-base text-gray-300 break-keep">
                  {t('additional_stats.continuous_production')}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

