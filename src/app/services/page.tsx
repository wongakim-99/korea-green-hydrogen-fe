'use client';

import { useState } from 'react';
import Link from 'next/link';

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
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section with Main Image */}
      <section className="relative h-[40vh] min-h-[350px] bg-gradient-to-r from-sky-600 to-blue-600 flex items-center justify-center">
        {/* Background Image Placeholder */}
        <div className="absolute inset-0 bg-gradient-to-r from-sky-600/90 to-blue-600/90">
          <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 opacity-20 flex items-center justify-center">
            <div className="text-center text-white/50">
              <svg className="w-24 h-24 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p className="text-sm">메인 이미지 영역</p>
              <p className="text-xs mt-1">(고객 자료 제공 후 업데이트)</p>
            </div>
          </div>
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
      <section className="bg-white border-b border-gray-200 sticky top-[88px] z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto">
            {businessAreas.map((area, index) => (
              <button
                key={area.id}
                onClick={() => scrollToSection(area.id)}
                className={`flex-shrink-0 px-6 py-4 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
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
            <div className={`group bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-[1.02] p-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
              index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
            }`}>
              {/* Image */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="relative h-64 rounded-lg overflow-hidden shadow-md group-hover:shadow-xl transition-shadow duration-300">
                  <div className={`w-full h-full bg-gradient-to-br ${area.bgColor} flex items-center justify-center`}>
                    <div className="text-center">
                      <div className={`w-20 h-20 bg-gradient-to-br ${area.color} rounded-full flex items-center justify-center text-3xl mb-3 mx-auto shadow-lg`}>
                        {area.icon}
                      </div>
                      <p className="text-gray-500 text-sm">
                        이미지 영역<br/>
                        <span className="text-xs">(고객 자료 제공 후 업데이트)</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  {area.title}
                </h2>
                <p className="text-base text-gray-600 mb-6 leading-relaxed">
                  {area.detailDescription}
                </p>
                <Link
                  href={area.href}
                  className="inline-flex items-center px-5 py-2.5 border border-sky-600 text-sky-600 font-medium rounded-lg hover:bg-sky-600 hover:text-white transition-colors group-hover:shadow-md"
                >
                  <span>자세히 보기</span>
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
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