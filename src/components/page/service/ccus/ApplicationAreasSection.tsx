'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

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
                <Image
                  src="/images/services/ccus/ccus-application-1.jpg"
                  alt="화력발전소"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                />
                {/* 호버 효과 */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              {/* 텍스트 영역 */}
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 group-hover:text-sky-600 transition-colors duration-300 break-keep text-center">
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
                <Image
                  src="/images/services/ccus/ccus-application-2.jpg"
                  alt="산업 시설"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                />
                {/* 호버 효과 */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              {/* 텍스트 영역 */}
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 group-hover:text-sky-600 transition-colors duration-300 break-keep text-center">
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
                <Image
                  src="/images/services/ccus/ccus-application-3.jpg"
                  alt="바이오가스 설비"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                />
                {/* 호버 효과 */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              {/* 텍스트 영역 */}
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 group-hover:text-sky-600 transition-colors duration-300 break-keep text-center">
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

