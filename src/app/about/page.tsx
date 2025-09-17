import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '회사소개 - Korea Green Hydrogen',
  description: 'Korea Green Hydrogen의 비전, 미션, 그리고 친환경 수소 에너지 기술에 대한 우리의 철학을 소개합니다.',
};

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            회사소개
          </h1>
          <p className="text-xl text-green-100 max-w-2xl mx-auto">
            지속가능한 미래를 위한 혁신적인 수소 에너지 솔루션
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">우리의 미션</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Korea Green Hydrogen는 친환경 수소 에너지 기술을 통해 
                탄소중립 사회를 실현하고, 지속가능한 미래 에너지 생태계를 
                구축하는 것을 목표로 합니다.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                우리는 혁신적인 기술과 전문성을 바탕으로 고객에게 
                최적의 수소 에너지 솔루션을 제공하며, 
                대한민국의 에너지 자립과 환경 보호에 기여하고 있습니다.
              </p>
            </div>
            <div className="bg-green-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-green-800 mb-4">우리의 비전</h3>
              <ul className="space-y-3 text-green-700">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  2030년까지 국내 최대 규모의 그린수소 생산 기업
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  아시아 태평양 지역 수소 에너지 시장 선도
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  탄소중립 달성을 위한 핵심 파트너
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  지속가능한 에너지 생태계 구축
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">핵심 가치</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Korea Green Hydrogen의 모든 활동은 다음 핵심 가치를 바탕으로 합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-lg shadow-md">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">혁신</h3>
              <p className="text-gray-600">
                끊임없는 연구개발을 통해 수소 에너지 기술의 
                혁신을 선도합니다.
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-lg shadow-md">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">신뢰</h3>
              <p className="text-gray-600">
                고객과의 약속을 지키며, 투명하고 
                신뢰할 수 있는 파트너십을 구축합니다.
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-lg shadow-md">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">지속가능성</h3>
              <p className="text-gray-600">
                환경을 생각하는 친환경 기술로 
                지속가능한 미래를 만들어갑니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">회사 개요</h2>
              <div className="space-y-6">
                <div className="flex">
                  <div className="w-24 text-gray-600 font-medium">회사명</div>
                  <div className="text-gray-900">Korea Green Hydrogen Co., Ltd.</div>
                </div>
                <div className="flex">
                  <div className="w-24 text-gray-600 font-medium">설립일</div>
                  <div className="text-gray-900">2020년 3월</div>
                </div>
                <div className="flex">
                  <div className="w-24 text-gray-600 font-medium">대표이사</div>
                  <div className="text-gray-900">김그린</div>
                </div>
                <div className="flex">
                  <div className="w-24 text-gray-600 font-medium">본사</div>
                  <div className="text-gray-900">서울특별시 강남구 테헤란로 123</div>
                </div>
                <div className="flex">
                  <div className="w-24 text-gray-600 font-medium">직원수</div>
                  <div className="text-gray-900">150명</div>
                </div>
                <div className="flex">
                  <div className="w-24 text-gray-600 font-medium">사업분야</div>
                  <div className="text-gray-900">
                    그린수소 생산, 수소충전소 구축, 
                    수소연료전지 시스템 개발
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">주요 성과</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">50+</div>
                  <div className="text-gray-600">수소충전소 구축</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">1000+</div>
                  <div className="text-gray-600">톤/년 수소 생산</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">25+</div>
                  <div className="text-gray-600">특허 보유</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">100+</div>
                  <div className="text-gray-600">파트너 기업</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
