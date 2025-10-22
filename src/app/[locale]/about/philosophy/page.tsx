'use client';

import { useState } from 'react';
import Breadcrumb from '@/components/Breadcrumb';
import TeamHeroSection from '@/components/page/about/profile/TeamHeroSection';
import TeamTabMenu from '@/components/page/about/profile/TeamTabMenu';
import KoreaTeamSection from '@/components/page/about/profile/KoreaTeamSection';
import NZTeamSection from '@/components/page/about/profile/NZTeamSection';

type TabType = 'korea' | 'nz';

interface TeamMember {
  name: string;
  position: string;
  bio: string;
  image: string;
}

export default function OurTeamPage({params: {locale}}: {params: {locale: string}}) {
  const [activeTab, setActiveTab] = useState<TabType>('korea');

  // 한국 팀원 데이터
  const koreaTeam: TeamMember[] = [
    {
      name: 'Sungchun Kim',
      position: 'CEO',
      bio: locale === 'ko' 
        ? 'KGH Global의 비전을 이끌어가는 최고경영자로서 지속가능한 에너지 솔루션의 미래를 설계합니다.'
        : 'Leading KGH Global\'s vision and designing the future of sustainable energy solutions.',
      image: '/images/about/message/ceo.jpg',
      detailedBio: locale === 'ko' 
        ? '김성천 CEO는 20년 이상의 재생에너지 분야 경험을 바탕으로 KGH Global의 전략적 비전을 이끌고 있습니다. 친환경 수소 기술의 혁신과 지속가능한 미래를 위한 리더십을 발휘하고 있습니다.'
        : 'CEO Sungchun Kim leads KGH Global\'s strategic vision with over 20 years of experience in the renewable energy sector. He demonstrates leadership in green hydrogen technology innovation and building a sustainable future.'
    }
  ];

  const breadcrumbItems = [
    { label: locale === 'ko' ? '회사개요' : 'Company Overview', href: '/about' },
    { label: locale === 'ko' ? '팀 프로필' : 'Our Team' }
  ];

  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <Breadcrumb items={breadcrumbItems} />

      {/* Hero Section */}
      <TeamHeroSection locale={locale} />

      {/* Visual Tab Menu Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <TeamTabMenu 
            activeTab={activeTab} 
            setActiveTab={setActiveTab} 
            locale={locale} 
          />

          {/* Content Section */}
          <div className="min-h-[500px]">
            {activeTab === 'korea' ? (
              <KoreaTeamSection koreaTeam={koreaTeam} locale={locale} />
            ) : (
              <NZTeamSection locale={locale} />
            )}
          </div>
        </div>
      </section>
    </div>
  );
}