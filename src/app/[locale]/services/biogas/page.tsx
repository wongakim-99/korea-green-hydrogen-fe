import { Metadata } from 'next';
import Link from 'next/link';
import BiogasHeroSection from '@/components/page/service/biogas/BiogasHeroSection';
import VisionSection from '@/components/page/service/biogas/VisionSection';
import ThpTechnologySection from '@/components/page/service/biogas/ThpTechnologySection';
import ProcessAndEffectsSection from '@/components/page/service/biogas/ProcessAndEffectsSection';
import OtherServicesNavigation from '@/components/page/service/OtherServicesNavigation';

export const metadata: Metadata = {
  title: '바이오가스 생산 - Korea Green Hydrogen',
  description: '유기폐기물을 활용한 친환경 바이오가스 생산 시스템과 열가수분해(THP) 기술을 소개합니다.',
};

export default function BiogasPage({params: {locale}}: {params: {locale: string}}) {
  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <nav className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-base text-gray-700 font-semibold">
            <Link href={`/${locale}`} className="hover:text-green-600 transition-colors">홈</Link>
            <span className="text-gray-400">/</span>
            <Link href={`/${locale}/services`} className="hover:text-green-600 transition-colors">서비스</Link>
            <span className="text-gray-400">/</span>
            <span className="text-green-600 font-bold">바이오가스 생산</span>
          </div>
        </div>
      </nav>

      <BiogasHeroSection />
      <VisionSection />
      <ThpTechnologySection />
      <ProcessAndEffectsSection />
      <OtherServicesNavigation />
    </div>
  );
}