import { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import { getTranslations } from 'next-intl/server';
import OtherServicesNavigation from '@/components/page/service/OtherServicesNavigation';

export const metadata: Metadata = {
  title: 'Solar Energy - Korea Green Hydrogen',
  description: 'KGH의 태양광 에너지 솔루션으로 지속가능한 청정 에너지 생산과 탄소 중립을 실현합니다.',
};

export default async function SolarPage({params: {locale}}: {params: {locale: string}}) {
  const tNav = await getTranslations({ locale, namespace: 'Navigation' });
  
  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <Breadcrumb 
        items={[
          { label: tNav('business'), href: '/services' },
          { label: '태양광 에너지' }
        ]}
      />

      {/* Hero Section */}
      <section className="relative bg-gray-900 min-h-[60vh] md:min-h-[70vh] lg:min-h-[87vh] flex items-center overflow-hidden">
        {/* 배경 이미지 */}
        <div className="absolute inset-0">
          <div className="w-full h-full bg-gradient-to-br from-yellow-400 via-orange-500 to-red-600"></div>
        </div>
        
        {/* 그라데이션 오버레이 */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/75 via-gray-900/60 to-gray-900/45"></div>
        
        <div className="relative w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl mr-auto">
            {/* 작은 라벨 */}
            <div className="inline-block mb-6 md:mb-8">
              <span className="text-sm md:text-base font-medium text-yellow-400 tracking-wide uppercase">
                RENEWABLE ENERGY
              </span>
            </div>
            
            {/* 메인 헤드라인 */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 md:mb-6 leading-tight break-keep">
              태양광으로 미래를 밝힙니다
            </h1>
            
            {/* 서브 헤드라인 */}
            <p className="text-2xl sm:text-3xl md:text-4xl text-yellow-300 font-semibold mb-6 md:mb-8 leading-tight break-keep">
              지속가능한 청정 에너지 솔루션
            </p>
            
            {/* 핵심 가치 포인트들 */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 pt-4">
              <div className="flex items-center">
                <div className="w-1 h-12 bg-yellow-400 mr-4"></div>
                <div>
                  <h3 className="text-lg font-bold text-white break-keep">청정 에너지</h3>
                  <p className="text-sm text-gray-400 mt-1 break-keep">무공해 태양광 발전</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-1 h-12 bg-yellow-400 mr-4"></div>
                <div>
                  <h3 className="text-lg font-bold text-white break-keep">탄소 중립</h3>
                  <p className="text-sm text-gray-400 mt-1 break-keep">Net-Zero 실현</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-1 h-12 bg-yellow-400 mr-4"></div>
                <div>
                  <h3 className="text-lg font-bold text-white break-keep">경제성</h3>
                  <p className="text-sm text-gray-400 mt-1 break-keep">장기적 비용 절감</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 기술 섹션 */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              태양광 에너지 기술
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              최신 태양광 기술을 활용한 효율적인 에너지 생산 시스템
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 flex items-center justify-center text-white">
                ☀️
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                고효율 패널
              </h3>
              <p className="text-gray-600 text-center">
                최신 기술의 고효율 태양광 패널로 최대한의 에너지를 생산합니다.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 flex items-center justify-center text-white">
                🔋
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                에너지 저장
              </h3>
              <p className="text-gray-600 text-center">
                배터리 시스템을 통한 에너지 저장으로 안정적인 전력 공급을 보장합니다.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 flex items-center justify-center text-white">
                📊
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                스마트 모니터링
              </h3>
              <p className="text-gray-600 text-center">
                실시간 모니터링 시스템으로 효율적인 에너지 관리를 제공합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 혜택 섹션 */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              태양광 에너지의 혜택
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              환경과 경제를 동시에 살리는 태양광 에너지 솔루션
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* 텍스트 섹션 */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                지속가능한 미래를 위한 선택
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">환경 친화적</h4>
                    <p className="text-gray-600">무공해 청정 에너지로 환경 보호에 기여합니다.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">경제적 효율성</h4>
                    <p className="text-gray-600">장기적으로 전기료 절감 효과를 제공합니다.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">에너지 독립성</h4>
                    <p className="text-gray-600">자체 에너지 생산으로 에너지 안보를 강화합니다.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 이미지 섹션 */}
            <div className="relative">
              <div className="w-full h-80 bg-gradient-to-br from-yellow-100 to-orange-200 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">☀️</div>
                  <p className="text-gray-600 font-medium">태양광 패널 이미지</p>
                  <p className="text-sm text-gray-500 mt-1">(이미지 준비 중)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Services Navigation */}
      <OtherServicesNavigation />
    </div>
  );
}
