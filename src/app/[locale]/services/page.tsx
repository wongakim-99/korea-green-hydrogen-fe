'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';

export default function Services() {
  const [activeTab, setActiveTab] = useState('biogas');
  const locale = useLocale();
  const t = useTranslations('ServicePage');
  
  const businessAreas = [
    {
      id: 'biogas',
      title: t('BusinessAreas.biogas.title'),
      description: t('BusinessAreas.biogas.description'),
      detailDescription: t('BusinessAreas.biogas.detailDescription'),
      icon: '🔥',
      color: 'from-green-500 to-green-600',
      bgColor: 'from-green-50 to-green-100',
      href: '/services/biogas'
    },
    {
      id: 'fertilizer',
      title: t('BusinessAreas.fertilizer.title'),
      description: t('BusinessAreas.fertilizer.description'),
      detailDescription: t('BusinessAreas.fertilizer.detailDescription'),
      icon: '🌱',
      color: 'from-emerald-500 to-emerald-600',
      bgColor: 'from-emerald-50 to-emerald-100',
      href: '/services/fertilizer'
    },
    {
      id: 'ccus',
      title: t('BusinessAreas.ccus.title'),
      description: t('BusinessAreas.ccus.description'),
      detailDescription: t('BusinessAreas.ccus.detailDescription'),
      icon: '♻️',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'from-blue-50 to-blue-100',
      href: '/services/ccus'
    },
    {
      id: 'smart-farm',
      title: t('BusinessAreas.smartFarm.title'),
      description: t('BusinessAreas.smartFarm.description'),
      detailDescription: t('BusinessAreas.smartFarm.detailDescription'),
      icon: '🚜',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'from-purple-50 to-purple-100',
      href: '/services/smart-farm'
    }
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveTab(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      // 헤더 높이를 고려한 오프셋 계산 (단일 헤더로 변경됨)
      const headerHeight = 64; // 헤더 높이 (h-16 = 64px)
      const elementPosition = element.offsetTop - headerHeight - 20; // 추가 여백
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section with Main Image */}
      <section className="relative h-[40vh] min-h-[350px] bg-gradient-to-r from-sky-600 to-blue-600 flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/services/service-main.jpg"
            alt="통합 순환경제 솔루션"
            fill
            className="object-cover"
            priority
            quality={95}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-sky-600/70 to-blue-600/60"></div>
        </div>
        
        {/* Content Overlay */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 break-keep">
            {t('Hero.title')}
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed break-keep">
            {t('Hero.subtitle')}<br/>
            {t('Hero.description')}
          </p>
        </div>
      </section>

      {/* Tab Navigation - HL Holdings Style */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto">
                        {businessAreas.map((area) => (
                          <button
                            key={area.id}
                            onClick={() => scrollToSection(area.id)}
                            className={`flex-shrink-0 px-6 py-4 text-sm font-bold border-b-2 transition-colors whitespace-nowrap ${
                              activeTab === area.id
                                ? 'text-sky-600 border-sky-600' 
                                : 'text-gray-500 border-transparent hover:text-gray-700 hover:border-gray-300'
                            }`}
                          >
                            {area.title}
                          </button>
                        ))}
          </div>
        </div>
      </section>

      {/* Business Area Sections */}
          {businessAreas.map((area, index) => (
            <section key={area.id} id={area.id} className="py-12 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="group relative bg-white border border-gray-200 shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden">
                  {/* Background Overlay for Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-sky-600 to-blue-700 opacity-0 group-hover:opacity-95 transition-opacity duration-300 z-10"></div>
                  
                  {/* Content Container with Diagonal Split - Zigzag Pattern */}
                  <div className={`relative z-20 h-80 lg:h-[400px] flex ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                    {/* Image Section - Position based on index (zigzag) */}
                    <div className="w-full lg:w-1/2 relative overflow-hidden">
                      <div className={`absolute inset-0 ${index % 2 === 1 ? 'lg:clip-path-diagonal-left' : 'lg:clip-path-diagonal-right'}`}>
                        {area.id === 'biogas' ? (
                          <div className="w-full h-full relative">
                            <Image
                              src="/images/services/biogas/biogas-service.jpg"
                              alt={area.title}
                              fill
                              className="object-cover transition-transform duration-500 group-hover:scale-110"
                              sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors duration-300"></div>
                          </div>
                        ) : area.id === 'fertilizer' ? (
                          <div className="w-full h-full relative">
                            <Image
                              src="/images/services/fertilizer/fer-banner.jpg"
                              alt={area.title}
                              fill
                              className="object-cover transition-transform duration-500 group-hover:scale-110"
                              sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors duration-300"></div>
                          </div>
                        ) : area.id === 'smart-farm' ? (
                          <div className="w-full h-full relative">
                            <Image
                              src="/images/services/smart-farm/smart-farm.jpg"
                              alt={area.title}
                              fill
                              className="object-cover transition-transform duration-500 group-hover:scale-110"
                              sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors duration-300"></div>
                          </div>
                        ) : (
                          <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-50 flex items-center justify-center overflow-hidden">
                            <div className="text-center transform transition-transform duration-500 group-hover:scale-110">
                              <div className={`w-20 h-20 bg-gradient-to-br ${area.color} rounded-full flex items-center justify-center text-3xl mb-3 mx-auto shadow-lg group-hover:shadow-2xl group-hover:bg-white group-hover:text-sky-600 transition-all duration-300`}>
                                {area.icon}
                              </div>
                            <p className="text-gray-500 text-sm group-hover:text-white transition-colors duration-300 break-keep">
                              {t('Common.imagePlaceholder')}<br/>
                              <span className="text-xs">{t('Common.imageNote')}</span>
                            </p>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Content Section - Position based on index (zigzag) */}
                    <div className="w-full lg:w-1/2 relative">
                      <div className={`absolute inset-0 ${index % 2 === 1 ? 'lg:clip-path-diagonal-right' : 'lg:clip-path-diagonal-left'} bg-white group-hover:bg-sky-600 transition-colors duration-300`}>
                        <div className="p-6 lg:p-10 h-full flex flex-col justify-center">
                          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 group-hover:text-white mb-3 transition-colors duration-300 break-keep">
                            {area.title}
                          </h2>
                          <p className="text-base md:text-lg text-gray-600 group-hover:text-gray-100 mb-5 leading-relaxed transition-colors duration-300 break-keep">
                            {area.detailDescription}
                          </p>
                          <Link
                            href={`/${locale}${area.href}`}
                            className="inline-flex items-center px-5 py-2.5 border-2 border-gray-900 text-gray-900 font-medium rounded-lg hover:bg-gray-900 hover:text-white group-hover:border-white group-hover:text-white group-hover:bg-transparent group-hover:hover:bg-white group-hover:hover:text-sky-600 transition-all duration-300 w-fit"
                          >
                            <span>{t('Common.viewDetails')}</span>
                            <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          ))}


      {/* CTA Section */}
      <section className="bg-sky-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 break-keep">
            {t('CTA.title')}
          </h2>
          <p className="text-xl text-sky-100 mb-8 max-w-2xl mx-auto break-keep">
            {t('CTA.description')}
          </p>
          <Link
            href={`/${locale}/contact`}
            className="bg-white text-sky-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
          >
            {t('CTA.button')}
          </Link>
        </div>
      </section>
    </div>
  );
}