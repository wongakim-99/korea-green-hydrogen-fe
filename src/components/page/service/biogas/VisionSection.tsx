'use client';

import Image from 'next/image';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function VisionSection() {
  const [ref, isVisible] = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 });

  return (
    <section ref={ref} className="py-20 bg-white overflow-hidden">
      <div className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <div className="inline-flex items-center bg-green-50 px-4 py-2 rounded-full text-green-700 text-sm font-semibold mb-6">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  새로운 에너지 패러다임
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                  지속가능한 미래를 위한 선택,<br />
                  <span className="text-green-600">폐기물 처리의 패러다임을 바꾸다</span>
                </h2>
              </div>
              
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  <strong className="text-gray-900">(주)한국그린수소</strong>는 하수 슬러지를 단순 처리하는 것을 넘어 
                  <span className="font-semibold text-green-600"> 수소와 비료를 생산하는 혁신적이고 친환경적인 에너지 사업 모델</span>을 제시합니다.
                </p>
                <p>
                  이 비전의 중심에는 지역 내 하수 슬러지, 음식물 폐기물 등 유기성 폐기물을 통합 처리하여 
                  가치있는 자원으로 전환하는 핵심 시설, <strong className="bg-green-50 text-green-800 px-2 py-1 rounded">'바이오가스 센터'</strong>가 있습니다.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">순환경제</h3>
                  <p className="text-sm text-gray-600">폐기물의 자원화</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">청정에너지</h3>
                  <p className="text-sm text-gray-600">수소 생산</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">환경보호</h3>
                  <p className="text-sm text-gray-600">탄소 저감</p>
                </div>
              </div>
            </div>

            <div className="relative">
              {/* 바이오가스 센터 이미지 */}
              <div className="relative rounded-2xl overflow-hidden h-96 shadow-2xl">
                <Image
                  src="/images/services/biogas/service-1.jpg"
                  alt="바이오가스 센터 - 지속가능한 에너지 생산 시설"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
                  priority
                />
              </div>
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-green-500 rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-emerald-500 rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
