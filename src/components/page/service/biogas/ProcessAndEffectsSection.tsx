'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useTranslations } from 'next-intl';

export default function ProcessAndEffectsSection() {
  const [ref, isVisible] = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 });
  const t = useTranslations('BiogasPage.ProcessAndEffects');

  return (
    <section ref={ref} className="py-16 md:py-20 lg:py-24 bg-white overflow-hidden">
      <div className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* 섹션 헤더 */}
          <div className="mb-16 md:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4 break-keep">
              {t('process_title')}
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl break-keep">
              {t('process_subtitle')}
            </p>
          </div>

          {/* 프로세스 단계 - 반응형 */}
          <div className="mb-20 md:mb-28">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6 relative">
              {/* 연결선 - 데스크톱에서만 표시 */}
              <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-gray-200"></div>
              
              <div className={`relative ${isVisible ? 'animate-slide-in-stagger-1' : ''}`}>
                <div className="flex items-start space-x-4 lg:block group cursor-pointer transition-all duration-300 hover:scale-105">
                  <div className="flex-shrink-0 w-16 h-16 lg:w-20 lg:h-20 bg-gray-900 rounded-lg flex items-center justify-center lg:mx-auto mb-0 lg:mb-6 relative z-10 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-gray-900/30">
                    <span className="text-2xl lg:text-3xl font-bold text-white">01</span>
                  </div>
                  <div className="flex-1 lg:text-center pt-1 lg:pt-0">
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 transition-colors duration-300 group-hover:text-sky-600 break-keep">{t('step1_title')}</h3>
                    <p className="text-sm md:text-base text-gray-600 whitespace-pre-line break-keep">{t('step1_description')}</p>
                  </div>
                </div>
              </div>
              
              <div className={`relative ${isVisible ? 'animate-slide-in-stagger-2' : ''}`}>
                <div className="flex items-start space-x-4 lg:block group cursor-pointer transition-all duration-300 hover:scale-105">
                  <div className="flex-shrink-0 w-16 h-16 lg:w-20 lg:h-20 bg-gray-900 rounded-lg flex items-center justify-center lg:mx-auto mb-0 lg:mb-6 relative z-10 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-gray-900/30">
                    <span className="text-2xl lg:text-3xl font-bold text-white">02</span>
                  </div>
                  <div className="flex-1 lg:text-center pt-1 lg:pt-0">
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 transition-colors duration-300 group-hover:text-sky-600 break-keep">{t('step2_title')}</h3>
                    <p className="text-sm md:text-base text-gray-600 whitespace-pre-line break-keep">{t('step2_description')}</p>
                  </div>
                </div>
              </div>
              
              <div className={`relative ${isVisible ? 'animate-slide-in-stagger-3' : ''}`}>
                <div className="flex items-start space-x-4 lg:block group cursor-pointer transition-all duration-300 hover:scale-105">
                  <div className="flex-shrink-0 w-16 h-16 lg:w-20 lg:h-20 bg-gray-900 rounded-lg flex items-center justify-center lg:mx-auto mb-0 lg:mb-6 relative z-10 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-gray-900/30">
                    <span className="text-2xl lg:text-3xl font-bold text-white">03</span>
                  </div>
                  <div className="flex-1 lg:text-center pt-1 lg:pt-0">
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 transition-colors duration-300 group-hover:text-sky-600 break-keep">{t('step3_title')}</h3>
                    <p className="text-sm md:text-base text-gray-600 whitespace-pre-line break-keep">{t('step3_description')}</p>
                  </div>
                </div>
              </div>
              
              <div className={`relative ${isVisible ? 'animate-slide-in-stagger-4' : ''}`}>
                <div className="flex items-start space-x-4 lg:block group cursor-pointer transition-all duration-300 hover:scale-105">
                  <div className="flex-shrink-0 w-16 h-16 lg:w-20 lg:h-20 bg-sky-600 rounded-lg flex items-center justify-center lg:mx-auto mb-0 lg:mb-6 relative z-10 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-sky-600/40">
                    <span className="text-2xl lg:text-3xl font-bold text-white">04</span>
                  </div>
                  <div className="flex-1 lg:text-center pt-1 lg:pt-0">
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 transition-colors duration-300 group-hover:text-sky-600 break-keep">{t('step4_title')}</h3>
                    <p className="text-sm md:text-base text-gray-600 whitespace-pre-line break-keep">{t('step4_description')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
