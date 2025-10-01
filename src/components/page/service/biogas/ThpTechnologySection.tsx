'use client';

import Image from 'next/image';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function ThpTechnologySection() {
  const [ref, isVisible] = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 });

  return (
    <section ref={ref} className="py-20 bg-gray-50 overflow-hidden">
      <div className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative">
              {/* THP 기술 다이어그램 이미지 */}
              <div className="relative rounded-2xl overflow-hidden h-96 shadow-2xl bg-white flex items-center justify-center p-4">
                <Image
                  src="/images/services/biogas/service-2.jpg"
                  alt="THP 열가수분해 기술 - 공정 다이어그램"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
                />
              </div>
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-500 rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-indigo-500 rounded-full opacity-20"></div>
            </div>

            <div className="order-1 lg:order-2 space-y-8">
              <div>
                <div className="inline-flex items-center bg-blue-50 px-4 py-2 rounded-full text-blue-700 text-sm font-semibold mb-6">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                  핵심 기술
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                  세계가 인정한 효율성,<br />
                  <span className="text-blue-600">최첨단 열가수분해(THP) 기술</span>
                </h2>
              </div>
              
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  <strong className="text-gray-900">KGH 바이오가스 센터</strong>의 경쟁력은 세계적으로 가장 효율적인 기술로 검증된 
                  <span className="font-semibold text-blue-600"> 열가수분해(THP, Thermal Hydrolysis) 공법</span>에서 나옵니다.
                </p>
                <p>
                  THP는 고온·고압의 스팀으로 슬러지를 처리하여 바이오가스 생산 효율을 극대화하고, 
                  슬러지를 고품질 자원으로 재활용하는 혁신적인 솔루션입니다.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900 mb-4">THP 기술의 핵심 장점</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-sm">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">에너지 생산 극대화</h4>
                      <p className="text-gray-600 text-sm mt-1">소화 효율을 65%까지 높여 바이오가스 생산량을 획기적으로 늘립니다.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-sm">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">고품질 자원 확보</h4>
                      <p className="text-gray-600 text-sm mt-1">슬러지의 품질을 향상시켜 고품질의 비료를 생산할 수 있는 기반을 마련합니다.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-sm">
                    <div className="flex-shrink-0 w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">완벽한 친환경 공정</h4>
                      <p className="text-gray-600 text-sm mt-1">처리 과정에서 발생하는 악취와 오염물질을 완벽하게 제거합니다.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
