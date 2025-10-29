'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Heart, TrendingUp, Globe, Zap, Leaf, DollarSign } from 'lucide-react';

export default function SummarySection() {
  const [ref, isVisible] = useScrollAnimation<HTMLElement>({ threshold: 0.1 });
  const t = useTranslations();

  return (
    <section ref={ref} className="py-16 md:py-20 lg:py-24 bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden">
      <div className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* 섹션 헤더 */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 md:mb-8 leading-tight break-keep">
              {t('summary.title')}
            </h2>
          </div>

          {/* CTA 버튼들 */}
          <div 
            className={`flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center mb-12 md:mb-16 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <Link
              href="/services"
              className="group bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white hover:bg-white/20 hover:border-white/40 font-semibold px-8 py-4 rounded-lg text-base transition-all duration-300 hover:shadow-xl hover:scale-105 flex items-center whitespace-nowrap"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              {t('summary.cta.viewTechnology')}
              <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>

            <Link
              href="/services/biogas"
              className="group bg-sky-500 hover:bg-sky-400 text-white font-semibold px-8 py-4 rounded-lg text-base transition-all duration-300 hover:shadow-xl hover:scale-105 flex items-center whitespace-nowrap"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              {t('summary.cta.learnBiogas')}
              <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* 주요 성과 통계 */}
          <div 
            className={`bg-gradient-to-r from-sky-500/10 to-blue-500/10 backdrop-blur-sm rounded-xl p-8 md:p-10 border border-sky-500/20 mb-12 md:mb-16 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
              <div className="text-center p-6 bg-white/5 rounded-xl border border-white/10 hover:border-sky-500/50 transition-all duration-300">
                <div className="flex justify-center mb-3">
                  <div className="bg-sky-500/20 text-sky-400 w-12 h-12 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-sky-400 mb-2">
                  +40%
                </div>
                <div className="text-sm md:text-base text-gray-300 break-keep">
                  생산량 증가
                </div>
              </div>
              <div className="text-center p-6 bg-white/5 rounded-xl border border-white/10 hover:border-sky-500/50 transition-all duration-300">
                <div className="flex justify-center mb-3">
                  <div className="bg-sky-500/20 text-sky-400 w-12 h-12 rounded-lg flex items-center justify-center">
                    <Zap className="w-6 h-6" />
                  </div>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-sky-400 mb-2">
                  -60%
                </div>
                <div className="text-sm md:text-base text-gray-300 break-keep">
                  에너지 비용 절감
                </div>
              </div>
              <div className="text-center p-6 bg-white/5 rounded-xl border border-white/10 hover:border-sky-500/50 transition-all duration-300">
                <div className="flex justify-center mb-3">
                  <div className="bg-sky-500/20 text-sky-400 w-12 h-12 rounded-lg flex items-center justify-center">
                    <Leaf className="w-6 h-6" />
                  </div>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-sky-400 mb-2">
                  100%
                </div>
                <div className="text-sm md:text-base text-gray-300 break-keep">
                  순환 자원화율
                </div>
              </div>
            </div>
          </div>

          {/* 핵심 특징 카드 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div 
              className={`bg-white/5 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-white/10 hover:border-sky-500/50 transition-all duration-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: '400ms' }}
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="bg-sky-500/20 text-sky-400 w-14 h-14 md:w-16 md:h-16 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Heart className="w-7 h-7 md:w-8 md:h-8" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white break-keep">
                  {t('summary.features.sustainability.title')}
                </h3>
                <p className="text-sm md:text-base text-gray-300 leading-relaxed break-keep">
                  {t('summary.features.sustainability.description')}
                </p>
              </div>
            </div>

            <div 
              className={`bg-white/5 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-white/10 hover:border-sky-500/50 transition-all duration-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: '500ms' }}
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="bg-sky-500/20 text-sky-400 w-14 h-14 md:w-16 md:h-16 rounded-xl flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-7 h-7 md:w-8 md:h-8" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white break-keep">
                  {t('summary.features.productivity.title')}
                </h3>
                <p className="text-sm md:text-base text-gray-300 leading-relaxed break-keep">
                  {t('summary.features.productivity.description')}
                </p>
              </div>
            </div>

            <div 
              className={`bg-white/5 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-white/10 hover:border-sky-500/50 transition-all duration-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: '600ms' }}
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="bg-sky-500/20 text-sky-400 w-14 h-14 md:w-16 md:h-16 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Globe className="w-7 h-7 md:w-8 md:h-8" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white break-keep">
                  {t('summary.features.carbonNeutral.title')}
                </h3>
                <p className="text-sm md:text-base text-gray-300 leading-relaxed break-keep">
                  {t('summary.features.carbonNeutral.description')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
