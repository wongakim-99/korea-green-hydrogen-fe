'use client';

import Image from 'next/image';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useTranslations } from 'next-intl';
import { Handshake, Globe, TrendingUp } from 'lucide-react';

export default function PartnerSection() {
  const [ref, isVisible] = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 });
  const t = useTranslations('FertilizerPage.Partner');

  return (
    <section ref={ref} className="py-16 md:py-20 lg:py-24 bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden">
      <div className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* 섹션 헤더 */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-4 break-keep">
              {t('title')}
            </h2>
            <p className="text-2xl md:text-3xl font-bold text-sky-400 mb-6 break-keep">
              {t('subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-stretch mb-12">
            {/* 왼쪽: 설명 카드 */}
            <div 
              className={`bg-white/5 backdrop-blur-sm rounded-xl p-8 md:p-10 border border-white/10 hover:border-sky-500/50 transition-all duration-300 flex flex-col justify-center ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              <div className="flex items-start space-x-4">
                <div className="bg-sky-500/20 text-sky-400 w-12 h-12 md:w-14 md:h-14 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Handshake className="w-6 h-6 md:w-7 md:h-7" />
                </div>
                <div className="space-y-6">
                  <div className="space-y-4 text-base md:text-lg text-gray-300 leading-relaxed">
                    <p className="break-keep">{t('description1')}</p>
                    <p className="break-keep">{t('description2')}</p>
                    <p className="break-keep font-semibold text-sky-400">{t('description3')}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 오른쪽: 이미지 */}
            <div 
              className={`${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}
              style={{ transitionDelay: '300ms' }}
            >
              <div className="relative rounded-xl overflow-hidden shadow-2xl aspect-[4/3] border border-white/10">
                <Image
                  src="/images/services/fertilizer/fer-partner-2.jpg"
                  alt="Terramarine AS - 글로벌 파트너십"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
                />
              </div>
            </div>
          </div>

          {/* 핵심 가치 */}
          <div 
            className={`grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            <div className="bg-gradient-to-br from-sky-500/10 to-blue-500/10 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-sky-500/20 hover:border-sky-400/50 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="bg-sky-500/20 text-sky-400 w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Globe className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-white mb-2 break-keep">{t('value1_title')}</h3>
                  <p className="text-sm text-gray-300 break-keep">{t('value1_description')}</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-sky-500/10 to-blue-500/10 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-sky-500/20 hover:border-sky-400/50 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="bg-sky-500/20 text-sky-400 w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-white mb-2 break-keep">{t('value2_title')}</h3>
                  <p className="text-sm text-gray-300 break-keep">{t('value2_description')}</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-sky-500/10 to-blue-500/10 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-sky-500/20 hover:border-sky-400/50 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="bg-sky-500/20 text-sky-400 w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Handshake className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-white mb-2 break-keep">{t('value3_title')}</h3>
                  <p className="text-sm text-gray-300 break-keep">{t('value3_description')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

