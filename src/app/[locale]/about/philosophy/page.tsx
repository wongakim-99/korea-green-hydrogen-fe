import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '경영철학 - Korea Green Hydrogen',
  description: 'Korea Green Hydrogen의 경영철학과 핵심 가치를 확인하세요.',
};

export default function PhilosophyPage({params: {locale}}: {params: {locale: string}}) {
  const coreValues = [
    {
      title: '혁신',
      description: '지속적인 기술혁신을 통해 친환경 에너지 솔루션의 새로운 패러다임을 제시합니다.'
    },
    {
      title: '지속가능성',
      description: '환경보호와 경제성을 동시에 추구하는 지속가능한 비즈니스 모델을 구축합니다.'
    },
    {
      title: '신뢰',
      description: '고객과 파트너와의 신뢰를 바탕으로 투명하고 윤리적인 경영을 실천합니다.'
    },
    {
      title: '책임',
      description: '기업의 사회적 책임을 다하며 더 나은 미래를 위해 끊임없이 노력합니다.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <nav className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-base text-gray-700 font-semibold">
            <Link href={`/${locale}`} className="hover:text-sky-600 transition-colors">홈</Link>
            <span className="text-gray-400">/</span>
            <Link href={`/${locale}/about`} className="hover:text-sky-600 transition-colors">Company</Link>
            <span className="text-gray-400">/</span>
            <span className="text-sky-600 font-bold">경영철학</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-600 to-green-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              경영철학
            </h1>
            <p className="text-xl text-emerald-100 max-w-2xl mx-auto">
              Korea Green Hydrogen의 핵심 가치와 경영 철학
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Vision */}
            <div className="text-center">
              <div className="bg-gradient-to-br from-sky-100 to-blue-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-8">
                <svg className="w-12 h-12 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Vision</h2>
              <p className="text-xl text-gray-700 leading-relaxed">
                친환경 수소 에너지 솔루션을 통해<br/>
                <span className="text-sky-600 font-semibold">지속가능한 미래를 선도하는</span><br/>
                글로벌 에너지 기업
              </p>
            </div>

            {/* Mission */}
            <div className="text-center">
              <div className="bg-gradient-to-br from-emerald-100 to-green-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-8">
                <svg className="w-12 h-12 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Mission</h2>
              <p className="text-xl text-gray-700 leading-relaxed">
                혁신적인 기술과 완전한 순환경제 시스템으로<br/>
                <span className="text-emerald-600 font-semibold">환경보호와 경제성을 동시에 실현</span><br/>
                하는 에너지 솔루션 제공
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Core Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Korea Green Hydrogen가 추구하는 핵심 가치들
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-sky-100 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {index === 0 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />}
                    {index === 1 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />}
                    {index === 2 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />}
                    {index === 3 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />}
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Statement */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">경영철학</h2>
          </div>
          
          <div className="bg-gradient-to-r from-sky-50 to-blue-50 rounded-lg p-8 md:p-12">
            <blockquote className="text-xl md:text-2xl text-gray-800 leading-relaxed text-center font-medium">
              우리는 기술혁신을 통해 환경과 경제가 조화롭게 공존하는 
              지속가능한 미래를 만들어갑니다. 
              고객의 신뢰를 바탕으로 사회적 책임을 다하며, 
              더 나은 세상을 위한 변화의 중심에 서겠습니다.
            </blockquote>
            <div className="text-center mt-8">
              <p className="text-sky-600 font-semibold text-lg">Korea Green Hydrogen</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
