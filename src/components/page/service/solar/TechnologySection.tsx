'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Factory, Shield, Network } from 'lucide-react';

// 나라 배지 컴포넌트
function CountryBadge({ countryCode, name }: { countryCode: string; name: string }) {
  return (
    <div className="inline-flex flex-col items-center space-y-3 group">
      {/* 원형 배지 */}
      <div 
        className="w-24 h-24 md:w-32 md:h-32 rounded-full flex items-center justify-center bg-white border-4 md:border-[5px] border-white/50 group-hover:border-sky-400 transition-all duration-300 group-hover:scale-110 shadow-xl relative"
      >
        <div className="relative w-[72px] h-[72px] md:w-[90px] md:h-[90px]">
          <Image
            src={`https://flagcdn.com/w160/${countryCode}.png`}
            alt={`${name} flag`}
            fill
            className="object-contain rounded-sm"
            unoptimized
          />
        </div>
      </div>
      {/* 나라 이름 */}
      <span className="text-base md:text-lg font-bold text-white group-hover:text-sky-300 transition-colors duration-300">
        {name}
      </span>
    </div>
  );
}

export default function TechnologySection() {
  const [ref, isVisible] = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 });
  const t = useTranslations('SolarPage.Technology');

  return (
    <section ref={ref} className="py-16 md:py-20 lg:py-24 bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden">
      <div className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* 섹션 헤더 */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 break-keep">
              {t('sectionTitle')}
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 break-keep">
              {t('sectionSubtitle')}
            </p>
          </div>

          {/* 메인 콘텐츠 그리드 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-12 md:mb-16">
            {/* Made in Korea */}
            <div 
              className={`bg-white/5 backdrop-blur-sm rounded-xl p-8 md:p-10 border border-white/10 hover:border-sky-500/50 transition-all duration-300 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              <div className="flex items-start space-x-4 mb-6">
                <div className="bg-sky-500/20 text-sky-400 w-12 h-12 md:w-14 md:h-14 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Factory className="w-6 h-6 md:w-7 md:h-7" />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 break-keep">
                    {t('madeInKorea_title')}
                  </h3>
                  <p className="text-sm md:text-base text-gray-300 leading-relaxed break-keep">
                    {t('madeInKorea_description')}
                  </p>
                </div>
              </div>
              
              {/* 이천 위치 강조 */}
              <div className="mt-6 pt-6 border-t border-white/10">
                <div className="flex items-center space-x-2 text-sky-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="font-semibold">이천 (Icheon), 대한민국 (South Korea)</span>
                </div>
              </div>
            </div>

            {/* 신뢰할 수 있는 부품 */}
            <div 
              className={`bg-white/5 backdrop-blur-sm rounded-xl p-8 md:p-10 border border-white/10 hover:border-sky-500/50 transition-all duration-300 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}
              style={{ transitionDelay: '300ms' }}
            >
              <div className="flex items-start space-x-4 mb-6">
                <div className="bg-sky-500/20 text-sky-400 w-12 h-12 md:w-14 md:h-14 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 md:w-7 md:h-7" />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 break-keep">
                    {t('partners_title')}
                  </h3>
                  <p className="text-sm md:text-base text-gray-300 leading-relaxed break-keep">
                    {t('partners_description')}
                  </p>
                </div>
              </div>
              
              {/* 파트너 로고 영역 */}
              <div className="mt-6 pt-6 border-t border-white/10">
                <div className="grid grid-cols-2 gap-4">
                  {/* TODO: 실제 로고 이미지로 교체 */}
                  <div className="bg-white/10 rounded-lg p-4 flex items-center justify-center h-20">
                    <span className="text-white/60 text-sm font-medium">Samsung LED</span>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 flex items-center justify-center h-20">
                    <span className="text-white/60 text-sm font-medium">Korea Cast Steel</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 글로벌 네트워크 */}
          <div 
            className={`bg-gradient-to-r from-sky-500/10 to-blue-500/10 backdrop-blur-sm rounded-xl p-8 md:p-10 border border-sky-500/20 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            <div className="flex flex-col md:flex-row md:items-center md:space-x-6 mb-8">
              <div className="bg-sky-500/20 text-sky-400 w-14 h-14 md:w-16 md:h-16 rounded-lg flex items-center justify-center flex-shrink-0 mb-4 md:mb-0">
                <Network className="w-7 h-7 md:w-8 md:h-8" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 break-keep">
                  {t('globalNetwork_title')}
                </h3>
                <p className="text-sm md:text-base text-gray-300 leading-relaxed break-keep">
                  {t('globalNetwork_description')}
                </p>
              </div>
            </div>

            {/* 나라 이름 흐르는 애니메이션 */}
            <div className="relative overflow-hidden py-6">
              <div className="flex animate-scroll-countries">
                {/* 첫 번째 세트 */}
                <div className="flex space-x-12 md:space-x-16 pr-12 md:pr-16">
                  <CountryBadge countryCode="kr" name="Korea" />
                  <CountryBadge countryCode="id" name="Indonesia" />
                  <CountryBadge countryCode="nz" name="New Zealand" />
                  <CountryBadge countryCode="us" name="USA" />
                  <CountryBadge countryCode="br" name="Brazil" />
                </div>
                {/* 두 번째 세트 (끊김 없는 효과) */}
                <div className="flex space-x-12 md:space-x-16 pr-12 md:pr-16">
                  <CountryBadge countryCode="kr" name="Korea" />
                  <CountryBadge countryCode="id" name="Indonesia" />
                  <CountryBadge countryCode="nz" name="New Zealand" />
                  <CountryBadge countryCode="us" name="USA" />
                  <CountryBadge countryCode="br" name="Brazil" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

