export default function BiogasHeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-green-600 via-emerald-600 to-teal-700 py-24 overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white opacity-5 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-white opacity-5 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white opacity-5 rounded-full"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center bg-green-500/20 backdrop-blur-sm px-4 py-2 rounded-full text-green-100 text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-green-300 rounded-full mr-2"></span>
            친환경 에너지 솔루션
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            바이오가스 생산
          </h1>
          <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto leading-relaxed">
            유기폐기물을 활용한 혁신적인 바이오가스 생산 시스템으로<br />
            지속가능한 미래 에너지를 만들어갑니다
          </p>
        </div>
      </div>
    </section>
  );
}
