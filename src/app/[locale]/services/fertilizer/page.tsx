import { Metadata } from 'next';
import FertilizerHeroSection from '@/components/page/service/fertilizer/FertilizerHeroSection';
import ProcessSection from '@/components/page/service/fertilizer/ProcessSection';
import ProcessDetailSection from '@/components/page/service/fertilizer/ProcessDetailSection';
import PartnerSection from '@/components/page/service/fertilizer/PartnerSection';
import OtherServicesNavigation from '@/components/page/service/OtherServicesNavigation';
import Breadcrumb from '@/components/Breadcrumb';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'FertilizerPage.Hero' });
  return {
    title: `${t('title')} - Korea Green Hydrogen`,
    description: t('description'),
  };
}

export default async function FertilizerPage({params: {locale}}: {params: {locale: string}}) {
  const tNav = await getTranslations({ locale, namespace: 'Navigation' });
  
  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <Breadcrumb 
        items={[
          { label: tNav('business'), href: '/services' },
          { label: tNav('fertilizer') }
        ]}
        colorClass="sky-600"
      />

      <FertilizerHeroSection />
      <ProcessSection />
      <ProcessDetailSection />
      <PartnerSection />
      <OtherServicesNavigation />
    </div>
  );
}
