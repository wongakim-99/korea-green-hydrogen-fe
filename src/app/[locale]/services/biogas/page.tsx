import { Metadata } from 'next';
import BiogasHeroSection from '@/components/page/service/biogas/BiogasHeroSection';
import VisionSection from '@/components/page/service/biogas/VisionSection';
import ThpTechnologySection from '@/components/page/service/biogas/ThpTechnologySection';
import ProcessAndEffectsSection from '@/components/page/service/biogas/ProcessAndEffectsSection';
import KeyResultsSection from '@/components/page/service/biogas/KeyResultsSection';
import OtherServicesNavigation from '@/components/page/service/OtherServicesNavigation';
import Breadcrumb from '@/components/Breadcrumb';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'BiogasPage.Hero' });
  return {
    title: `${t('title')} - Korea Green Hydrogen`,
    description: t('description'),
  };
}

export default async function BiogasPage({params: {locale}}: {params: {locale: string}}) {
  const tNav = await getTranslations({ locale, namespace: 'Navigation' });
  
  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <Breadcrumb 
        items={[
          { label: tNav('business'), href: '/services' },
          { label: tNav('biogas') }
        ]}
        colorClass="sky-600"
      />

      <BiogasHeroSection />
      <VisionSection />
      <ThpTechnologySection />
      <ProcessAndEffectsSection />
      <KeyResultsSection />
      <OtherServicesNavigation />
    </div>
  );
}