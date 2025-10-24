import { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import { getTranslations } from 'next-intl/server';
import SolarHeroSection from '@/components/page/service/solar/SolarHeroSection';
import AdvantagesSection from '@/components/page/service/solar/AdvantagesSection';
import ApplicationsSection from '@/components/page/service/solar/ApplicationsSection';
import TechnologySection from '@/components/page/service/solar/TechnologySection';
import OtherServicesNavigation from '@/components/page/service/OtherServicesNavigation';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'SolarPage.Hero' });
  return {
    title: `${t('title')} - Korea Green Hydrogen`,
    description: t('description'),
  };
}

export default async function SolarPage({params: {locale}}: {params: {locale: string}}) {
  const tNav = await getTranslations({ locale, namespace: 'Navigation' });
  
  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <Breadcrumb 
        items={[
          { label: tNav('business'), href: '/services' },
          { label: tNav('solar') }
        ]}
        colorClass="sky-600"
      />

      <SolarHeroSection />
      <AdvantagesSection />
      <ApplicationsSection />
      <TechnologySection />
      <OtherServicesNavigation />
    </div>
  );
}
