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

  // 한국 팀원 데이터 (플레이스홀더)
  const koreaTeam: TeamMember[] = [
    {
      name: 'John Kim',
      position: 'Chief Executive Officer',
      bio: 'Over 20 years of experience in renewable energy sector, leading KGH Global\'s strategic vision.',
      image: '/images/about/message/ceo.jpg'
    },
    {
      name: 'Sarah Lee',
      position: 'Chief Technology Officer',
      bio: 'Expert in biogas technology and green hydrogen production with multiple patents in the field.',
      image: '/images/about/message/ceo.jpg'
    },
    {
      name: 'Michael Park',
      position: 'Chief Operating Officer',
      bio: 'Specializing in operational excellence and sustainable business development.',
      image: '/images/about/message/ceo.jpg'
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