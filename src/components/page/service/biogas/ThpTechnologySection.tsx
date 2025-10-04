'use client';

import Image from 'next/image';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function ThpTechnologySection() {
  const [ref, isVisible] = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 });

  return (
    <section ref={ref} className="py-16 md:py-20 lg:py-24 bg-gray-50 overflow-hidden">
      <div className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* 이미지 영역 - 모바일에서는 아래, 데스크톱에서는 왼쪽 */}
            <div className="order-2 lg:order-1 lg:col-span-6">
              <div className="relative rounded-lg overflow-hidden shadow-lg bg-white aspect-[4/3] flex items-center justify-center">
                <Image
                  src="/images/services/biogas/service-2.jpg"
                  alt="THP 열가수분해 기술 - 공정 다이어그램"
                  fill
                  className="object-contain p-4"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
                />
              </div>
            </div>

            {/* 텍스트 영역 */}
            <div className="order-1 lg:order-2 lg:col-span-6 space-y-8 md:space-y-10">
              <div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6 md:mb-8">
                  최첨단<br />
                  열가수분해(THP) 기술
                </h2>
                
                <div className="space-y-6 text-base sm:text-lg text-gray-700 leading-relaxed">
                  <p>
                    KGH 바이오가스 센터의 경쟁력은 세계적으로 가장 효율적인 기술로 검증된 
                    열가수분해(THP, Thermal Hydrolysis) 공법에서 나옵니다.
                  </p>
                  <p>
                    THP는 고온·고압의 스팀으로 슬러지를 처리하여 바이오가스 생산 효율을 극대화하고, 
                    슬러지를 고품질 자원으로 재활용하는 혁신적인 솔루션입니다.
                  </p>
                </div>
              </div>

              {/* 핵심 장점 */}
              <div className="space-y-6">
                <div className="border-l-4 border-sky-500 pl-6 py-2">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">에너지 생산 극대화</h4>
                  <p className="text-gray-600">소화 효율을 65%까지 높여 바이오가스 생산량을 획기적으로 늘립니다.</p>
                </div>
                
                <div className="border-l-4 border-sky-500 pl-6 py-2">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">고품질 자원 확보</h4>
                  <p className="text-gray-600">슬러지의 품질을 향상시켜 고품질의 비료를 생산할 수 있는 기반을 마련합니다.</p>
                </div>
                
                <div className="border-l-4 border-sky-500 pl-6 py-2">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">완벽한 친환경 공정</h4>
                  <p className="text-gray-600">처리 과정에서 발생하는 악취와 오염물질을 완벽하게 제거합니다.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
