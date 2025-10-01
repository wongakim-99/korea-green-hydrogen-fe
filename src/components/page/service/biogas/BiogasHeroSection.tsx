'use client';

import Image from 'next/image';

export default function BiogasHeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-blue-700 via-cyan-600 to-sky-700 py-24 overflow-hidden">
      {/* 배경 이미지 */}
      <div className="absolute inset-0">
        <Image
          src="/images/services/biogas/service-3.jpg"
          alt="바이오가스 생산 시설"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
      </div>
      
      {/* 오버레이 - 텍스트 가독성을 위한 어두운 필터 */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 via-cyan-800/70 to-sky-900/70"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center bg-blue-500/20 backdrop-blur-sm px-4 py-2 rounded-full text-blue-100 text-sm font-medium mb-6 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            <span className="w-2 h-2 bg-blue-300 rounded-full mr-2"></span>
            친환경 에너지 솔루션
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
            바이오가스 생산
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
            유기폐기물을 활용한 혁신적인 바이오가스 생산 시스템으로<br />
            지속가능한 미래 에너지를 만들어갑니다
          </p>
        </div>
      </div>
    </section>
  );
}
