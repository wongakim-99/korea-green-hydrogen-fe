import { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import { getTranslations } from 'next-intl/server';
import SmartFarmHeroSection from '@/components/page/service/smartfarm/SmartFarmHeroSection';
import ResourceCycleSection from '@/components/page/service/smartfarm/ResourceCycleSection';
import BenefitsSection from '@/components/page/service/smartfarm/BenefitsSection';
import SummarySection from '@/components/page/service/smartfarm/SummarySection';
import OtherServicesNavigation from '@/components/page/service/OtherServicesNavigation';

export const metadata: Metadata = {
  title: 'Smart Farm - Korea Green Hydrogen',
  description: 'KGH의 스마트팜은 바이오가스 플랜트의 부산물을 활용하여 고부가가치 작물과 산소를 생산하는 탈탄소 솔루션의 핵심입니다.',
};

export default async function SmartFarmPage({params: {locale}}: {params: {locale: string}}) {
  const tNav = await getTranslations({ locale, namespace: 'Navigation' });
  
  // TODO: 나중에 실제 이미지 URL로 교체
  // 예시: const heroImageUrl = '/images/services/smart-farm/hero-background.jpg';
  // 예시: const cropImageUrls = ['/images/services/smart-farm/strawberry.jpg', '/images/services/smart-farm/tomato.jpg'];
  const cropImageUrls = undefined; // 이미지를 받기 전까지는 undefined로 설정 (플레이스홀더 표시)
  
  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <Breadcrumb 
        items={[
          { label: tNav('business'), href: '/services' },
          { label: tNav('smartFarm') }
        ]}
      />

      {/* Hero Section */}
      <SmartFarmHeroSection />

      {/* Resource Cycle Section */}
      <ResourceCycleSection />

      {/* Benefits Section - 작물 이미지 배열 prop 전달 */}
      <BenefitsSection imageUrls={cropImageUrls} />

      {/* Summary Section */}
      <SummarySection />

      {/* Other Services Navigation */}
      <OtherServicesNavigation />
    </div>
  );
}
