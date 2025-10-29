'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useTranslations } from 'next-intl';

export default function ApplicationAreasSection() {
  const [ref, isVisible] = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 });
  const t = useTranslations('CCUSPage.TechnologyProcess');

  return (
    <section ref={ref} className="py-16 md:py-20 lg:py-24 bg-gray-50 overflow-hidden">
      <div className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* 섹션 헤더 */}
          <div className="mb-12 md:mb-16 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4 break-keep">
              {t('applications_title')}
            </h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
            {/* 화력발전소 */}
            <div className={`group cursor-pointer transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '0ms' }}>
              {/* 이미지 영역 */}
              <div className="relative rounded-xl overflow-hidden shadow-lg aspect-[4/3] mb-6 bg-gradient-to-br from-sky-100 to-blue-100">
                {/* TODO: 고객사 이미지로 교체 */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-6">
                    <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-3 bg-sky-200 rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 md:w-10 md:h-10 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <p className="text-sm text-gray-600 font-medium break-keep">화력발전소 이미지 영역</p>
                  </div>
                </div>
                {/* 호버 효과 */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                {/* <Image
                  src="/images/services/ccus/application-power-plant.jpg"
                  alt="화력발전소"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                /> */}
              </div>
              
              {/* 텍스트 영역 */}
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 group-hover:text-sky-600 transition-colors duration-300 break-keep">
                  {t('app1_title')}
                </h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed break-keep">
                  {t('app1_description')}
                </p>
              </div>
            </div>

            {/* 산업 시설 */}
            <div className={`group cursor-pointer transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '150ms' }}>
              {/* 이미지 영역 */}
              <div className="relative rounded-xl overflow-hidden shadow-lg aspect-[4/3] mb-6 bg-gradient-to-br from-blue-100 to-sky-100">
                {/* TODO: 고객사 이미지로 교체 */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-6">
                    <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-3 bg-blue-200 rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 md:w-10 md:h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <p className="text-sm text-gray-600 font-medium break-keep">산업 시설 이미지 영역</p>
                  </div>
                </div>
                {/* 호버 효과 */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                {/* <Image
                  src="/images/services/ccus/application-industrial.jpg"
                  alt="산업 시설"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                /> */}
              </div>
              
              {/* 텍스트 영역 */}
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 group-hover:text-sky-600 transition-colors duration-300 break-keep">
                  {t('app2_title')}
                </h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed break-keep">
                  {t('app2_description')}
                </p>
              </div>
            </div>

            {/* 바이오가스 설비 */}
            <div className={`group cursor-pointer transition-all duration-500 sm:col-span-2 lg:col-span-1 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '300ms' }}>
              {/* 이미지 영역 */}
              <div className="relative rounded-xl overflow-hidden shadow-lg aspect-[4/3] mb-6 bg-gradient-to-br from-sky-100 to-blue-100">
                {/* TODO: 고객사 이미지로 교체 */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-6">
                    <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-3 bg-sky-200 rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 md:w-10 md:h-10 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <p className="text-sm text-gray-600 font-medium break-keep">바이오가스 설비 이미지 영역</p>
                  </div>
                </div>
                {/* 호버 효과 */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                {/* <Image
                  src="/images/services/ccus/application-biogas.jpg"
                  alt="바이오가스 설비"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                /> */}
              </div>
              
              {/* 텍스트 영역 */}
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 group-hover:text-sky-600 transition-colors duration-300 break-keep">
                  {t('app3_title')}
                </h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed break-keep">
                  {t('app3_description')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

