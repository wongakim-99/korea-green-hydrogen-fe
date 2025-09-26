import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'CEO 메시지 - Korea Green Hydrogen',
  description: 'Korea Green Hydrogen CEO의 메시지와 비전을 확인하세요.',
};

export default function CEOPage() {
  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <nav className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-base text-gray-700 font-semibold">
            <Link href="/" className="hover:text-sky-600 transition-colors">홈</Link>
            <span className="text-gray-400">/</span>
            <Link href="/about" className="hover:text-sky-600 transition-colors">Company</Link>
            <span className="text-gray-400">/</span>
            <span className="text-sky-600 font-bold">CEO 메시지</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-sky-600 to-blue-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              CEO 메시지
            </h1>
            <p className="text-xl text-sky-100 max-w-2xl mx-auto">
              지속가능한 미래를 향한 Korea Green Hydrogen의 비전
            </p>
          </div>
        </div>
      </section>

      {/* CEO Message Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            {/* CEO Photo Placeholder */}
            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-sky-100 to-blue-100 rounded-lg p-8 text-center">
                <div className="w-48 h-48 mx-auto bg-gradient-to-br from-gray-200 to-gray-300 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-24 h-24 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">김○○</h3>
                <p className="text-sky-600 font-semibold">대표이사 CEO</p>
              </div>
            </div>

            {/* CEO Message */}
            <div className="lg:col-span-2">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  지속가능한 미래를 향한 도전
                </h2>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  안녕하십니까. Korea Green Hydrogen 대표이사 김○○입니다.
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                  우리는 지금 기후변화와 환경오염이라는 인류 공통의 과제 앞에 서 있습니다. 
                  이러한 시대적 요구에 부응하여 Korea Green Hydrogen는 친환경 수소 에너지 
                  솔루션을 통해 지속가능한 미래를 만들어가고 있습니다.
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                  우리의 혁신적인 기술과 끊임없는 연구개발을 통해 폐기물을 에너지로 
                  전환하는 완전한 순환경제 시스템을 구축하고 있으며, 이를 통해 
                  환경보호와 경제성을 동시에 실현하고자 합니다.
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                  앞으로도 Korea Green Hydrogen는 기술혁신과 지속가능한 성장을 통해 
                  대한민국의 친환경 에너지 산업을 선도하며, 더 나은 미래를 위한 
                  변화의 중심에 서겠습니다.
                </p>

                <p className="text-gray-700 leading-relaxed font-semibold">
                  감사합니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
