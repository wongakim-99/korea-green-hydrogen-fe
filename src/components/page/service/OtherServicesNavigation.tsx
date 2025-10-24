'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { usePathname } from 'next/navigation';

export default function OtherServicesNavigation() {
  const [ref, isVisible] = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });
  const locale = useLocale();
  const pathname = usePathname();
  const t = useTranslations('ServicePage.BusinessAreas');
  const tOther = useTranslations('ServicePage.OtherServices');
  const tCommon = useTranslations('ServicePage.Common');

  // 전체 서비스 목록
  const allServices = [
    {
      id: 'biogas',
      href: '/services/biogas',
      image: '/images/services/biogas/biogas-service.jpg',
      titleKey: 'biogas.title',
      descriptionKey: 'biogas.description',
      delay: '0.1s',
    },
    {
      id: 'fertilizer',
      href: '/services/fertilizer',
      image: '/images/services/fertilizer/fer-main.jpg',
      titleKey: 'fertilizer.title',
      descriptionKey: 'fertilizer.description',
      delay: '0.1s',
    },
    {
      id: 'ccus',
      href: '/services/ccus',
      image: '/images/services/ccus/ccus-main.jpg', // TODO: 이미지 추가 필요
      titleKey: 'ccus.title',
      descriptionKey: 'ccus.description',
      delay: '0.2s',
    },
    {
      id: 'smart-farm',
      href: '/services/smart-farm',
      image: '/images/services/smart-farm/smart-farm.jpg',
      titleKey: 'smartFarm.title',
      descriptionKey: 'smartFarm.description',
      delay: '0.3s',
    },
    {
      id: 'solar',
      href: '/services/solar',
      image: '/images/services/solar/solar-main.jpg', // TODO: 이미지 추가 필요
      titleKey: 'solar.title',
      descriptionKey: 'solar.description',
      delay: '0.4s',
    },
  ];

  // 현재 페이지를 제외한 나머지 서비스만 필터링
  const services = allServices.filter(service => !pathname.includes(service.href));

  // 동적 그리드: 카드 개수에 따라 최적의 레이아웃 선택
  const getGridColumns = (count: number) => {
    if (count <= 3) return "md:grid-cols-3";
    if (count === 4) return "md:grid-cols-2"; // 4개일 때는 2x2로
    return "md:grid-cols-3"; // 5개 이상은 3열로
  };

  // 이미지 높이: 2열일 때는 더 크게
  const getImageHeight = (count: number) => {
    if (count === 4) return "h-56 md:h-64"; // 2열일 때 더 큼
    return "h-48"; // 기본 높이
  };

  return (
    <section ref={ref} className="py-16 md:py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 헤더 */}
        <div className={`text-center mb-12 md:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{tOther('title')}</h2>
          <p className="text-base md:text-lg text-gray-600">{tOther('subtitle')}</p>
        </div>

        {/* 서비스 카드 그리드 - 동적 레이아웃 */}
        <div className={`grid grid-cols-1 ${getGridColumns(services.length)} gap-6 md:gap-8`}>
          {services.map((service) => (
            <Link
              key={service.href}
              href={`/${locale}${service.href}`}
              className={`group block transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: isVisible ? service.delay : '0s' }}
            >
              <div className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden h-full">
                {/* 이미지 영역 */}
                <div className={`relative ${getImageHeight(services.length)} w-full overflow-hidden bg-gradient-to-br from-sky-100 to-sky-50`}>
                  <Image
                    src={service.image}
                    alt={t(service.titleKey)}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    unoptimized
                    onError={(e) => {
                      // 이미지 로드 실패 시 placeholder 표시
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  {/* 호버 오버레이 */}
                  <div className="absolute inset-0 bg-sky-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  
                  {/* Placeholder 아이콘 (이미지가 없는 서비스에만 표시) */}
                  {service.id === 'ccus' && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-sky-400 transition-transform duration-500 group-hover:scale-110">
                        <svg className="w-20 h-20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                    </div>
                  )}
                </div>

                {/* 콘텐츠 영역 */}
                <div className="p-6 md:p-8">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-sky-600 mb-3 transition-colors duration-300">
                    {t(service.titleKey)}
                  </h3>
                  <p className="text-gray-600 mb-4 md:mb-6 leading-relaxed">{t(service.descriptionKey)}</p>
                  
                  {/* CTA */}
                  <div className="flex items-center text-sky-600 text-sm md:text-base font-medium">
                    {tCommon('viewDetails')}
                    <svg
                      className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* 돌아가기 버튼 */}
        <div className={`text-center mt-12 md:mt-16 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Link
            href={`/${locale}/services`}
            className="inline-flex items-center bg-sky-600 hover:bg-sky-700 text-white font-semibold px-8 py-3.5 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {tOther('backToServices')}
          </Link>
        </div>
      </div>
    </section>
  );
}
