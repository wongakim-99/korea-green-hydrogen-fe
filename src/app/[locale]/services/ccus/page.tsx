import { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import { getTranslations } from 'next-intl/server';
import CCUSHeroSection from '@/components/page/service/ccus/CCUSHeroSection';
import WhatIsCCUSSection from '@/components/page/service/ccus/WhatIsCCUSSection';
import TechnologyProcessSection from '@/components/page/service/ccus/TechnologyProcessSection';
import KGHSolutionSection from '@/components/page/service/ccus/KGHSolutionSection';
import OtherServicesNavigation from '@/components/page/service/OtherServicesNavigation';

export const metadata: Metadata = {
  title: 'CCUS - Korea Green Hydrogen',
  description: '탄소 포집, 저장 및 활용 기술(CCUS)을 통한 탄소중립 실현 서비스를 소개합니다.',
};

export default async function CCUSPage({params: {locale}}: {params: {locale: string}}) {
  const tNav = await getTranslations({ locale, namespace: 'Navigation' });
  
  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <Breadcrumb 
        items={[
          { label: tNav('business'), href: '/services' },
          { label: tNav('ccus') }
        ]}
      />

      {/* Hero Section */}
      <CCUSHeroSection />

      {/* What is CCUS Section */}
      <WhatIsCCUSSection />

      {/* Technology Process Section */}
      <TechnologyProcessSection />

      {/* KGH Solution Section */}
      <KGHSolutionSection />

      {/* Other Services Navigation */}
      <OtherServicesNavigation />
    </div>
  );
}
