import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'CCUS - Korea Green Hydrogen',
  description: '탄소 포집, 저장 및 활용 기술(CCUS)을 통한 탄소중립 실현 서비스를 소개합니다.',
};

export default function CCUSPage() {
  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <nav className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-base text-gray-700 font-semibold">
            <Link href="/" className="hover:text-blue-600 transition-colors">홈</Link>
            <span className="text-gray-400">/</span>
            <Link href="/services" className="hover:text-blue-600 transition-colors">서비스</Link>
            <span className="text-gray-400">/</span>
            <span className="text-blue-600 font-bold">CCUS</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              CCUS
            </h1>
            <p className="text-lg text-blue-100 mb-4">
              Carbon Capture, Storage & Utilization
            </p>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              탄소 포집, 저장 및 활용 기술을 통한 탄소중립 실현
            </p>
          </div>
        </div>
      </section>

      {/* Content Placeholder */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-12 rounded-2xl">
              <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                상세 내용 준비 중
              </h2>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                CCUS 서비스에 대한 상세한 내용은 고객 자료 제공 후 업데이트될 예정입니다.
              </p>
              <div className="space-y-4 text-left max-w-md mx-auto">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-600">탄소 포집 기술</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-600">저장 시스템</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-600">활용 방안</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-600">환경 효과</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">다른 사업 분야</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/services/biogas" className="group">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-3">🔥</div>
                <h3 className="font-semibold text-gray-900 group-hover:text-green-600">바이오가스 생산</h3>
                <p className="text-sm text-gray-600 mt-2">친환경 바이오가스</p>
              </div>
            </Link>
            <Link href="/services/fertilizer" className="group">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-3">🌱</div>
                <h3 className="font-semibold text-gray-900 group-hover:text-green-600">비료화</h3>
                <p className="text-sm text-gray-600 mt-2">친환경 비료 생산</p>
              </div>
            </Link>
            <Link href="/services/smart-farm" className="group">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-3">🚜</div>
                <h3 className="font-semibold text-gray-900 group-hover:text-green-600">Smart Farm</h3>
                <p className="text-sm text-gray-600 mt-2">스마트 농업 시스템</p>
              </div>
            </Link>
          </div>
          <div className="text-center mt-8">
            <Link
              href="/services"
              className="inline-flex items-center text-green-600 hover:text-green-700 font-medium"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              전체 서비스로 돌아가기
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
