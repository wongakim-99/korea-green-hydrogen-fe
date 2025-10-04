'use client';

import Image from 'next/image';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function VisionSection() {
  const [ref, isVisible] = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 });

  return (
    <section ref={ref} className="py-16 md:py-20 lg:py-24 bg-white overflow-hidden">
      <div className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* 텍스트 영역 */}
            <div className="lg:col-span-6 space-y-8 md:space-y-10">
              <div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6 md:mb-8">
                  폐기물 처리의<br />
                  패러다임을 바꾸다
                </h2>
                
                <div className="space-y-6 text-base sm:text-lg text-gray-700 leading-relaxed">
                  <p>
                    (주)한국그린수소는 하수 슬러지를 단순 처리하는 것을 넘어 
                    수소와 비료를 생산하는 혁신적이고 친환경적인 에너지 사업 모델을 제시합니다.
                  </p>
                  <p>
                    이 비전의 중심에는 지역 내 하수 슬러지, 음식물 폐기물 등 유기성 폐기물을 통합 처리하여 
                    가치있는 자원으로 전환하는 핵심 시설, <strong className="text-gray-900">바이오가스 센터</strong>가 있습니다.
                  </p>
                </div>
              </div>

              {/* 핵심 가치 */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 pt-4">
                <div>
                  <div className="flex items-center mb-3">
                    <div className="w-1 h-12 bg-emerald-500 mr-4"></div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">순환경제</h3>
                      <p className="text-sm text-gray-600 mt-1">폐기물의 자원화</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center mb-3">
                    <div className="w-1 h-12 bg-emerald-500 mr-4"></div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">청정에너지</h3>
                      <p className="text-sm text-gray-600 mt-1">수소 생산</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center mb-3">
                    <div className="w-1 h-12 bg-emerald-500 mr-4"></div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">환경보호</h3>
                      <p className="text-sm text-gray-600 mt-1">탄소 저감</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 이미지 영역 */}
            <div className="lg:col-span-6">
              <div className="relative rounded-lg overflow-hidden shadow-lg aspect-[4/3]">
                <Image
                  src="/images/services/biogas/service-1.jpg"
                  alt="바이오가스 센터 - 지속가능한 에너지 생산 시설"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
