'use client';

import { useTranslations } from 'next-intl';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function ResourceCycleSection() {
  const [ref, isVisible] = useScrollAnimation<HTMLElement>({ threshold: 0.1 });
  const t = useTranslations();

  const resources = [
    {
      key: 'co2',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2M7 4h10M7 4l-2 16h14l-2-16M10 9v6M14 9v6" />
        </svg>
      ),
      color: 'from-red-500 to-red-600',
      bgColor: 'bg-red-50',
      textColor: 'text-red-600'
    },
    {
      key: 'heat',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
        </svg>
      ),
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50',
      textColor: 'text-orange-600'
    },
    {
      key: 'fertilizer',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      textColor: 'text-green-600'
    },
    {
      key: 'water',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-600'
    }
  ];

  return (
    <section ref={ref} className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 헤더 - 모바일/태블릿용 */}
        <div className={`text-center mb-12 md:mb-16 lg:hidden transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('resourceCycle.title')}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            {t('resourceCycle.subtitle')}
          </p>
        </div>

        {/* 데스크톱용 레이아웃 - 좌우 분할 */}
        <div className="hidden xl:block">
          <div className="grid grid-cols-12 gap-8 items-center">
            {/* 왼쪽: 제목과 설명 */}
            <div className="col-span-3">
              <div className={`transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  {t('resourceCycle.title')}
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  {t('resourceCycle.subtitle')}
                </p>
                
                {/* 추가 설명 */}
                <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">지속가능한 순환</h3>
                  </div>
                  <p className="text-sm text-gray-600">
                    스마트팜은 모든 자원을 효율적으로 활용하여 지속가능한 농업 생태계를 구축합니다.
                  </p>
                </div>
              </div>
            </div>

            {/* 중앙: 다이어그램 영역 */}
            <div className="col-span-6">
              <div className="relative" style={{ height: 'clamp(400px, 35vw, 600px)' }}>
                {/* 중앙 스마트팜 이미지 영역 */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                  <div 
                    className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full shadow-2xl flex items-center justify-center overflow-hidden"
                    style={{ 
                      width: 'clamp(120px, 10vw, 180px)', 
                      height: 'clamp(120px, 10vw, 180px)' 
                    }}
                  >
                    <div className="w-full h-full bg-white/20 rounded-full flex items-center justify-center">
                      <svg 
                        className="text-white" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                        style={{ width: 'clamp(36px, 3vw, 60px)', height: 'clamp(36px, 3vw, 60px)' }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* SVG 연결선 */}
                <svg className="absolute inset-0 w-full h-full z-10" style={{ overflow: 'visible' }}>
                  {resources.map((resource, index) => {
                    const angle = (index * 90) - 45;
                    const centerX = 50;
                    const centerY = 50;
                    const radiusPercent = 20;
                    const cardX = centerX + Math.cos((angle * Math.PI) / 180) * radiusPercent;
                    const cardY = centerY + Math.sin((angle * Math.PI) / 180) * radiusPercent;
                    
                    return (
                      <path
                        key={`connector-${resource.key}`}
                        d={`M ${centerX} ${centerY} Q ${(centerX + cardX) / 2} ${(centerY + cardY) / 2 - 3} ${cardX} ${cardY}`}
                        stroke={`url(#gradient-${resource.key})`}
                        strokeWidth="2"
                        fill="none"
                        strokeDasharray="1000"
                        strokeDashoffset={isVisible ? "0" : "1000"}
                        className="transition-all duration-1000 ease-out"
                        style={{ transitionDelay: `${index * 0.2}s` }}
                      />
                    );
                  })}
                  
                  <defs>
                    {resources.map((resource) => (
                      <linearGradient key={`gradient-${resource.key}`} id={`gradient-${resource.key}`} x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor={resource.color.includes('red') ? '#ef4444' : 
                          resource.color.includes('orange') ? '#f97316' : 
                          resource.color.includes('green') ? '#22c55e' : '#3b82f6'} />
                        <stop offset="100%" stopColor="transparent" />
                      </linearGradient>
                    ))}
                  </defs>
                </svg>

                {/* 원형 배치된 자원 카드들 */}
                {resources.map((resource, index) => {
                  const angle = (index * 90) - 45;
                  const radius = 'clamp(150px, 15vw, 250px)';
                  const x = `calc(${Math.cos((angle * Math.PI) / 180)} * ${radius})`;
                  const y = `calc(${Math.sin((angle * Math.PI) / 180)} * ${radius})`;
                  
                  return (
                    <div
                      key={resource.key}
                      className={`absolute transition-all duration-700 ${
                        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                      }`}
                      style={{ 
                        transitionDelay: isVisible ? `${index * 0.2}s` : '0s',
                        left: `calc(50% + ${x})`,
                        top: `calc(50% + ${y})`,
                        transform: 'translate(-50%, -50%)'
                      }}
                    >
                      <div className={`${resource.bgColor} rounded-xl p-3 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group`} 
                           style={{ width: 'clamp(140px, 10vw, 200px)' }}>
                        <div className={`mx-auto mb-2 rounded-full bg-gradient-to-r ${resource.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}
                             style={{ width: 'clamp(32px, 2.5vw, 48px)', height: 'clamp(32px, 2.5vw, 48px)' }}>
                          <svg className="w-4 h-4 lg:w-6 lg:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {resource.icon.props.children}
                          </svg>
                        </div>
                        <h3 className={`font-bold ${resource.textColor} mb-1 text-center`}
                            style={{ fontSize: 'clamp(12px, 1vw, 16px)' }}>
                          {t(`resourceCycle.resources.${resource.key}.title`)}
                        </h3>
                        <p className="text-gray-600 leading-relaxed text-center"
                           style={{ fontSize: 'clamp(10px, 0.8vw, 12px)' }}>
                          {t(`resourceCycle.resources.${resource.key}.description`)}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 오른쪽: 통계 및 중요성 */}
            <div className="col-span-3">
              <div className={`transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`} style={{ transitionDelay: '0.3s' }}>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">핵심 가치</h3>
                
                {/* 통계 카드들 */}
                <div className="space-y-4">
                  <div className="bg-red-50 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mr-3">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2M7 4h10M7 4l-2 16h14l-2-16M10 9v6M14 9v6" />
                          </svg>
                        </div>
                        <span className="text-sm font-medium text-gray-700">CO₂ 활용</span>
                      </div>
                      <span className="text-lg font-bold text-red-600">100%</span>
                    </div>
                  </div>
                  
                  <div className="bg-orange-50 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center mr-3">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                          </svg>
                        </div>
                        <span className="text-sm font-medium text-gray-700">열 효율</span>
                      </div>
                      <span className="text-lg font-bold text-orange-600">95%</span>
                    </div>
                  </div>
                  
                  <div className="bg-green-50 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                          </svg>
                        </div>
                        <span className="text-sm font-medium text-gray-700">비료 절약</span>
                      </div>
                      <span className="text-lg font-bold text-green-600">80%</span>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                          </svg>
                        </div>
                        <span className="text-sm font-medium text-gray-700">물 절약</span>
                      </div>
                      <span className="text-lg font-bold text-blue-600">70%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 자원 순환 시각화 - 기존 레이아웃 (lg-xl 사이즈용) */}
        <div className="relative">
          {/* 중간 크기 화면용 원형 레이아웃 */}
          <div className="hidden lg:block xl:hidden relative w-full" style={{ height: 'clamp(500px, 50vw, 800px)' }}>
            {/* 중앙 스마트팜 이미지 영역 - 반응형 크기 */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
              <div 
                className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full shadow-2xl flex items-center justify-center overflow-hidden"
                style={{ 
                  width: 'clamp(160px, 15vw, 240px)', 
                  height: 'clamp(160px, 15vw, 240px)' 
                }}
              >
                {/* 스마트팜 이미지 플레이스홀더 */}
                <div className="w-full h-full bg-white/20 rounded-full flex items-center justify-center">
                  <svg 
                    className="text-white" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    style={{ width: 'clamp(48px, 5vw, 80px)', height: 'clamp(48px, 5vw, 80px)' }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* SVG 연결선 */}
            <svg className="absolute inset-0 w-full h-full z-10" style={{ overflow: 'visible' }}>
              {resources.map((resource, index) => {
                const angle = (index * 90) - 45;
                const centerX = 50; // 퍼센트 기준
                const centerY = 50;
                const radiusPercent = 25; // 뷰포트 기준 25%
                const cardX = centerX + Math.cos((angle * Math.PI) / 180) * radiusPercent;
                const cardY = centerY + Math.sin((angle * Math.PI) / 180) * radiusPercent;
                
                return (
                  <path
                    key={`connector-${resource.key}`}
                    d={`M ${centerX} ${centerY} Q ${(centerX + cardX) / 2} ${(centerY + cardY) / 2 - 5} ${cardX} ${cardY}`}
                    stroke={`url(#gradient-${resource.key})`}
                    strokeWidth="2"
                    fill="none"
                    strokeDasharray="1000"
                    strokeDashoffset={isVisible ? "0" : "1000"}
                    className="transition-all duration-1000 ease-out"
                    style={{ transitionDelay: `${index * 0.2}s` }}
                  />
                );
              })}
              
              {/* 그라데이션 정의 */}
              <defs>
                {resources.map((resource) => (
                  <linearGradient key={`gradient-${resource.key}`} id={`gradient-${resource.key}`} x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor={resource.color.includes('red') ? '#ef4444' : 
                      resource.color.includes('orange') ? '#f97316' : 
                      resource.color.includes('green') ? '#22c55e' : '#3b82f6'} />
                    <stop offset="100%" stopColor="transparent" />
                  </linearGradient>
                ))}
              </defs>
            </svg>

            {/* 원형 배치된 자원 카드들 - 반응형 위치 */}
            {resources.map((resource, index) => {
              const angle = (index * 90) - 45;
              const radius = 'clamp(200px, 20vw, 400px)'; // CSS clamp 사용
              const x = `calc(${Math.cos((angle * Math.PI) / 180)} * ${radius})`;
              const y = `calc(${Math.sin((angle * Math.PI) / 180)} * ${radius})`;
              
              return (
                <div
                  key={resource.key}
                  className={`absolute transition-all duration-700 ${
                    isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                  }`}
                  style={{ 
                    transitionDelay: isVisible ? `${index * 0.2}s` : '0s',
                    left: `calc(50% + ${x})`,
                    top: `calc(50% + ${y})`,
                    transform: 'translate(-50%, -50%)'
                  }}
                >
                  <div className={`${resource.bgColor} rounded-2xl p-4 lg:p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group`} 
                       style={{ width: 'clamp(200px, 12vw, 280px)' }}>
                    {/* 아이콘 */}
                    <div className={`mx-auto mb-3 lg:mb-4 rounded-full bg-gradient-to-r ${resource.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}
                         style={{ width: 'clamp(40px, 3vw, 60px)', height: 'clamp(40px, 3vw, 60px)' }}>
                      <svg className="w-6 h-6 lg:w-8 lg:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {resource.icon.props.children}
                      </svg>
                    </div>

                    {/* 제목 */}
                    <h3 className={`font-bold ${resource.textColor} mb-2 lg:mb-3 text-center`}
                        style={{ fontSize: 'clamp(14px, 1.2vw, 18px)' }}>
                      {t(`resourceCycle.resources.${resource.key}.title`)}
                    </h3>

                    {/* 설명 */}
                    <p className="text-gray-600 leading-relaxed text-center"
                       style={{ fontSize: 'clamp(11px, 0.9vw, 14px)' }}>
                      {t(`resourceCycle.resources.${resource.key}.description`)}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* 모바일/태블릿 그리드 레이아웃 */}
          <div className="lg:hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {resources.map((resource, index) => (
                <div
                  key={resource.key}
                  className={`group transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: isVisible ? `${index * 0.2}s` : '0s' }}
                >
                  <div className={`${resource.bgColor} rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-full`}>
                    {/* 아이콘 */}
                    <div className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r ${resource.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                      {resource.icon}
                    </div>

                    {/* 제목 */}
                    <h3 className={`text-xl md:text-2xl font-bold ${resource.textColor} mb-4 text-center`}>
                      {t(`resourceCycle.resources.${resource.key}.title`)}
                    </h3>

                    {/* 설명 */}
                    <p className="text-gray-600 leading-relaxed text-center">
                      {t(`resourceCycle.resources.${resource.key}.description`)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
