/**
 * InquiryHeroSection 컴포넌트
 * 
 * 문의하기 페이지의 히어로 섹션
 * - 그라데이션 배경과 장식 요소로 시각적 임팩트 제공
 * - 페이지 제목과 간단한 설명 표시
 */

export default function InquiryHeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-sky-500 via-sky-600 to-blue-600 py-24 overflow-hidden">
      {/* 배경 패턴 */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      {/* 장식용 블러 원형 - 오른쪽 상단 */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-sky-400/30 rounded-full blur-3xl"></div>
      
      {/* 장식용 블러 원형 - 왼쪽 하단 */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
      
      {/* 컨텐츠 */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in">
          문의하기
        </h1>
        <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed">
          궁금한 점이 있으시면 언제든지 연락해주세요
        </p>
      </div>
    </section>
  );
}

