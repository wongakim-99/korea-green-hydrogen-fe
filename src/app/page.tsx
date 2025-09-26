import Image from "next/image";
import Link from "next/link";
import BackgroundSlider from "@/components/BackgroundSlider";

export default function Home() {
  const slideData = [
    {
      image: '/images/home/main-background1.jpg',
      headline: 'PIONEERING A GREENER TOMORROW',
      subheadline: '(주)한국그린수소는 폐기물에서 새로운 가치를 창출하는 혁신 기술로 지속가능한 미래를 선도합니다.'
    },
    {
      image: '/images/home/main-background2.jpg',
      headline: 'CLEAN HYDROGEN SOLUTIONS',
      subheadline: '하수 슬러지를 최첨단 열가수분해(THP) 기술로 분해하여 미래를 위한 청정 수소 에너지를 생산합니다.'
    },
    {
      image: '/images/home/main-background3.jpg',
      headline: 'REDEFINING WASTE AS A RESOURCE',
      subheadline: '버려지는 슬러지를 고품질의 친환경 비료로 전환하여 전 세계 시장에 공급합니다.'
    },
    {
      image: '/images/home/main-background4.jpg',
      headline: 'INVESTING IN A CARBON-ZERO FUTURE',
      subheadline: '친환경 공정을 통해 확보한 탄소배출권으로 국가의 2050 탄소중립 목표 달성에 기여합니다.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-4rem)] flex items-center">
        {/* Background Slider */}
        <BackgroundSlider 
          slides={slideData}
          interval={5000}
          className="z-0"
        />
        {/* Overlay for better text readability - moved to lower z-index */}
        <div className="absolute inset-0 bg-gradient-to-br from-sky-900/50 to-blue-900/30 z-10 pointer-events-none"></div>
        
        {/* 데스크톱 버튼 영역 */}
        <div className="hidden md:flex absolute inset-0 z-40 items-center justify-end pr-8 pointer-events-none">
          <div className="flex flex-col gap-4 pointer-events-auto">
            <Link
              href="/about"
              className="bg-sky-600/95 text-white px-6 py-3 rounded-xl text-base font-semibold hover:bg-sky-700 transition-all duration-300 shadow-xl backdrop-blur-sm transform hover:scale-105 hover:-translate-y-1 whitespace-nowrap border border-sky-500/20"
            >
              회사 소개
            </Link>
            <Link
              href="/contact"
              className="bg-white/10 text-white px-6 py-3 rounded-xl text-base font-semibold hover:bg-white/20 transition-all duration-300 border-2 border-white/80 whitespace-nowrap backdrop-blur-sm transform hover:scale-105 hover:-translate-y-1"
            >
              문의하기
            </Link>
          </div>
        </div>

        {/* 모바일용 하단 버튼 */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-40 md:hidden pointer-events-auto">
          <div className="flex flex-row gap-3">
            <Link
              href="/about"
              className="bg-sky-600/95 text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-sky-700 transition-all duration-300 shadow-xl backdrop-blur-sm transform hover:scale-105 whitespace-nowrap"
            >
              회사 소개
            </Link>
            <Link
              href="/contact"
              className="bg-white/10 text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-white/20 transition-all duration-300 border border-white/80 whitespace-nowrap backdrop-blur-sm transform hover:scale-105"
            >
              문의하기
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              왜 수소 에너지인가?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              수소는 지구상에서 가장 풍부한 원소이며, 청정하고 지속가능한 에너지원입니다.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">친환경</h3>
              <p className="text-gray-600">
                수소 연료는 연소 시 물만 배출하여 대기오염이나 온실가스를 발생시키지 않습니다.
              </p>
            </div>

            <div className="text-center p-8 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">고효율</h3>
              <p className="text-gray-600">
                수소는 단위 질량당 에너지 밀도가 높아 효율적인 에너지 저장 및 운송이 가능합니다.
              </p>
            </div>

            <div className="text-center p-8 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">지속가능</h3>
              <p className="text-gray-600">
                재생에너지를 통해 생산된 그린수소는 완전히 지속가능한 에너지 순환을 만듭니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-sky-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            지속가능한 미래를 함께 만들어가세요
          </h2>
          <p className="text-xl text-sky-100 mb-8 max-w-2xl mx-auto">
            Korea Green Hydrogen와 함께 친환경 수소 에너지로 더 나은 내일을 준비하세요.
          </p>
          <Link
            href="/contact"
            className="bg-white text-sky-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
          >
            지금 상담받기
          </Link>
        </div>
      </section>
    </div>
  );
}
