'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Services() {
  const [activeTab, setActiveTab] = useState('biogas');
  const businessAreas = [
    {
      id: 'biogas',
      title: '바이오가스 생산',
      description: '유기폐기물을 활용한 친환경 바이오가스 생산 시스템으로 에너지를 생성하고 환경을 보호합니다.',
      detailDescription: '축산분뇨, 음식물쓰레기 등 유기폐기물을 혐기성 소화 과정을 통해 바이오가스로 전환하는 친환경 에너지 생산 시스템입니다. 생산된 바이오가스는 전기와 열에너지로 활용되어 지속가능한 에너지 순환을 실현합니다.',
      icon: '🔥',
      color: 'from-green-500 to-green-600',
      bgColor: 'from-green-50 to-green-100',
      href: '/services/biogas'
    },
    {
      id: 'fertilizer',
      title: '비료화',
      description: '바이오가스 생산 과정에서 발생하는 부산물을 활용한 친환경 비료 생산',
      detailDescription: '바이오가스 생산 후 남은 소화액을 고품질 액체비료로 가공하여 농업에 활용합니다. 화학비료를 대체하는 친환경 비료로 토양 건강을 개선하고 지속가능한 농업을 지원합니다.',
      icon: '🌱',
      color: 'from-emerald-500 to-emerald-600',
      bgColor: 'from-emerald-50 to-emerald-100',
      href: '/services/fertilizer'
    },
    {
      id: 'ccus',
      title: 'CCUS',
      description: '탄소 포집, 저장 및 활용 기술을 통한 탄소중립 실현',
      detailDescription: 'Carbon Capture, Utilization and Storage 기술을 통해 대기 중 이산화탄소를 포집하고 유용한 자원으로 전환합니다. 탄소중립 달성을 위한 핵심 기술로 기후변화 대응에 기여합니다.',
      icon: '♻️',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'from-blue-50 to-blue-100',
      href: '/services/ccus'
    },
    {
      id: 'smart-farm',
      title: 'Smart Farm',
      description: '첨단 기술을 활용한 스마트 농업 시스템 구축',
      detailDescription: 'IoT, AI, 빅데이터 기술을 활용한 지능형 농업 시스템으로 최적의 재배 환경을 제공합니다. 자동화된 관리 시스템을 통해 생산성을 높이고 자원 사용을 최적화합니다.',
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
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            통합 순환경제 솔루션
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            폐기물에서 에너지까지, 완전한 순환경제 시스템으로<br/>
            환경보호와 경제성을 동시에 실현합니다
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
                        ) : (
                          <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-50 flex items-center justify-center overflow-hidden">
                            <div className="text-center transform transition-transform duration-500 group-hover:scale-110">
                              <div className={`w-20 h-20 bg-gradient-to-br ${area.color} rounded-full flex items-center justify-center text-3xl mb-3 mx-auto shadow-lg group-hover:shadow-2xl group-hover:bg-white group-hover:text-sky-600 transition-all duration-300`}>
                                {area.icon}
                              </div>
                              <p className="text-gray-500 text-sm group-hover:text-white transition-colors duration-300">
                                이미지 영역<br/>
                                <span className="text-xs">(고객 자료 제공 후 업데이트)</span>
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
                          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 group-hover:text-white mb-3 transition-colors duration-300">
                            {area.title}
                          </h2>
                          <p className="text-base md:text-lg text-gray-600 group-hover:text-gray-100 mb-5 leading-relaxed transition-colors duration-300">
                            {area.detailDescription}
                          </p>
                          <Link
                            href={area.href}
                            className="inline-flex items-center px-5 py-2.5 border-2 border-gray-900 text-gray-900 font-medium rounded-lg hover:bg-gray-900 hover:text-white group-hover:border-white group-hover:text-white group-hover:bg-transparent group-hover:hover:bg-white group-hover:hover:text-sky-600 transition-all duration-300 w-fit"
                          >
                            <span>자세히 보기</span>
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            지속가능한 미래를 함께 만들어가세요
          </h2>
          <p className="text-xl text-sky-100 mb-8 max-w-2xl mx-auto">
            Korea Green Hydrogen의 통합 순환경제 솔루션으로 
            환경과 경제를 동시에 살리는 사업에 참여하세요.
          </p>
          <Link
            href="/contact"
            className="bg-white text-sky-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
          >
            상담 문의하기
          </Link>
        </div>
      </section>
    </div>
  );
}