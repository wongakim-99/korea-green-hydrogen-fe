import Link from 'next/link';

export default function OtherServicesNavigation() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">다른 사업 분야</h2>
          <p className="text-gray-600">KGH의 통합 솔루션을 확인해보세요</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/services/fertilizer" className="group">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-4xl mb-4">🌱</div>
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-green-600 mb-2">비료화</h3>
              <p className="text-gray-600 mb-4">친환경 비료 생산으로 농업 생산성 향상</p>
              <div className="flex items-center text-green-600 text-sm font-medium">
                자세히 보기
                <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </Link>
          <Link href="/services/ccus" className="group">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-4xl mb-4">♻️</div>
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-green-600 mb-2">CCUS</h3>
              <p className="text-gray-600 mb-4">탄소 포집 및 활용으로 탄소 중립 실현</p>
              <div className="flex items-center text-green-600 text-sm font-medium">
                자세히 보기
                <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </Link>
          <Link href="/services/smart-farm" className="group">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-4xl mb-4">🚜</div>
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-green-600 mb-2">Smart Farm</h3>
              <p className="text-gray-600 mb-4">스마트 농업 시스템으로 미래 농업 구현</p>
              <div className="flex items-center text-green-600 text-sm font-medium">
                자세히 보기
                <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </Link>
        </div>
        <div className="text-center mt-10">
          <Link
            href="/services"
            className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            전체 서비스로 돌아가기
          </Link>
        </div>
      </div>
    </section>
  );
}
