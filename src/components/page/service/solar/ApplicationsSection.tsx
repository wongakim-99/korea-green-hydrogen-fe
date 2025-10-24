'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function ApplicationsSection() {
  const [ref, isVisible] = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 });
  const t = useTranslations('SolarPage.Applications');

  const applications = [
    {
      title: t('application1_title'),
      description: t('application1_description'),
      // TODO: 실제 이미지로 교체
      imagePlaceholder: '가로등 이미지 영역'
    },
    {
      title: t('application2_title'),
      description: t('application2_description'),
      // TODO: 실제 이미지로 교체
      imagePlaceholder: '스포츠 시설 이미지 영역'
    },
    {
      title: t('application3_title'),
      description: t('application3_description'),
      // TODO: 실제 이미지로 교체
      imagePlaceholder: '골프 코스 이미지 영역'
    },
    {
      title: t('application4_title'),
      description: t('application4_description'),
      // TODO: 실제 이미지로 교체
      imagePlaceholder: '공원 이미지 영역'
    }
  ];

  return (
    <section ref={ref} className="py-16 md:py-20 lg:py-24 bg-white overflow-hidden">
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

          {/* 적용 분야 그리드 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-12">
            {applications.map((application, index) => (
              <div
                key={index}
                className={`group cursor-pointer transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{
                  transitionDelay: `${index * 150}ms`
                }}
              >
                {/* 이미지 영역 */}
                <div className="relative rounded-xl overflow-hidden shadow-lg aspect-[16/10] mb-6 bg-gradient-to-br from-sky-100 to-blue-100">
                  {/* TODO: 실제 이미지로 교체 */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-6">
                      <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-3 bg-sky-200 rounded-full flex items-center justify-center">
                        <svg className="w-8 h-8 md:w-10 md:h-10 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <p className="text-sm text-gray-600 font-medium break-keep">
                        {application.imagePlaceholder}
                      </p>
                    </div>
                  </div>
                  
                  {/* 호버 효과 */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* 텍스트 영역 */}
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 group-hover:text-sky-600 transition-colors duration-300 break-keep">
                    {application.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed break-keep">
                    {application.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

