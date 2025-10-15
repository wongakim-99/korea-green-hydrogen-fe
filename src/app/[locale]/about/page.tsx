import { getTranslations } from 'next-intl/server';
import AboutHeroSection from '@/components/page/about/AboutHeroSection';
import AboutContentSection from '@/components/page/about/AboutContentSection';

export async function generateMetadata({ params }: { params: { locale: string } }) {
  const t = await getTranslations({ locale: params.locale, namespace: 'About.metadata' });
  
  return {
    title: t('title'),
    description: t('description'),
  };
}

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - KGH Global의 정체성과 비전을 전달하는 메인 섹션 */}
      <AboutHeroSection />

      {/* Mission, Vision, Philosophy & Values Sections */}
      <AboutContentSection />
    </div>
  );
}
