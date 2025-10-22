import { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import { getTranslations } from 'next-intl/server';

export const metadata: Metadata = {
  title: 'Smart Farm - Korea Green Hydrogen',
  description: '첨단 기술을 활용한 스마트 농업 시스템 구축 서비스를 소개합니다.',
};

export default async function SmartFarmPage({params: {locale}}: {params: {locale: string}}) {
  const tNav = await getTranslations({ locale, namespace: 'Navigation' });
  
  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <Breadcrumb 
        items={[
          { label: tNav('business'), href: '/services' },
          { label: tNav('smartFarm') }
        ]}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-indigo-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Smart Farm
            </h1>
            <p className="text-xl text-purple-100 max-w-2xl mx-auto">
              첨단 기술을 활용한 스마트 농업 시스템 구축
            </p>
          </div>
        </div>
      </section>

      {/* Content Placeholder */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-12 rounded-2xl">
              <div className="w-24 h-24 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-12 h-12 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                상세 내용 준비 중
              </h2>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Smart Farm 서비스에 대한 상세한 내용은 고객 자료 제공 후 업데이트될 예정입니다.
              </p>
              <div className="space-y-4 text-left max-w-md mx-auto">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-gray-600">스마트 시설</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-gray-600">자동화 시스템</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-gray-600">데이터 분석</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-gray-600">생산성 향상</span>
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
                <h3 className="font-semibold text-gray-900 group-hover:text-green-600">바이오가스 생산</h3>
                <p className="text-sm text-gray-600 mt-2">친환경 바이오가스</p>
              </div>
            </Link>
            <Link href="/services/fertilizer" className="group">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="font-semibold text-gray-900 group-hover:text-green-600">비료화</h3>
                <p className="text-sm text-gray-600 mt-2">친환경 비료 생산</p>
              </div>
            </Link>
            <Link href="/services/ccus" className="group">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="font-semibold text-gray-900 group-hover:text-green-600">CCUS</h3>
                <p className="text-sm text-gray-600 mt-2">탄소 포집 및 활용</p>
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
