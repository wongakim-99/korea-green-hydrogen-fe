import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 min-h-[80vh] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/home/main-background.jpg"
            alt="친환경 수소 에너지 배경"
            fill
            className="object-cover"
            priority
          />
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-sky-900/70 to-blue-900/50"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              미래를 향한 <span className="text-sky-300">친환경 수소</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 mb-8 max-w-3xl mx-auto">
              Korea Green Hydrogen는 지속가능한 미래를 위한 
              혁신적인 수소 에너지 솔루션을 제공합니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/about"
                className="bg-sky-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-sky-700 transition-colors"
              >
                회사 소개
              </Link>
              <Link
                href="/contact"
                className="border-2 border-sky-600 text-sky-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-sky-600 hover:text-white transition-colors"
              >
                문의하기
              </Link>
            </div>
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
