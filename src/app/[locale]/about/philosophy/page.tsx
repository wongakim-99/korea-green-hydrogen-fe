'use client';

import { Metadata } from 'next';
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';

// export const metadata: Metadata = {
//   title: '팀 프로필 - Korea Green Hydrogen',
//   description: 'Meet the Korea Green Hydrogen management team.',
// };

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

  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <nav className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-base text-gray-700 font-semibold">
            <Link href={`/${locale}`} className="hover:text-sky-600 transition-colors">
              {locale === 'ko' ? '홈' : 'Home'}
            </Link>
            <span className="text-gray-400">/</span>
            <Link href={`/${locale}/about`} className="hover:text-sky-600 transition-colors">
              Company
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-sky-600 font-bold">
              {locale === 'ko' ? '팀 프로필' : 'Our Team'}
            </span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-sky-600 to-blue-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {locale === 'ko' ? '팀 프로필' : 'Our Team'}
            </h1>
            <p className="text-xl text-sky-100 max-w-2xl mx-auto">
              {locale === 'ko' 
                ? '세계 각지에서 지속가능한 미래를 만들어가는 KGH Global의 리더십' 
                : 'Meet the leadership driving sustainable innovation across the globe'}
            </p>
          </div>
        </div>
      </section>

      {/* Visual Tab Menu Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Korea Tab */}
            <button
              onClick={() => setActiveTab('korea')}
              className={`relative overflow-hidden rounded-2xl shadow-lg transition-all duration-300 group ${
                activeTab === 'korea' 
                  ? 'ring-4 ring-sky-500 shadow-2xl transform scale-105' 
                  : 'hover:shadow-xl hover:scale-102'
              }`}
            >
              <div className="aspect-[16/10] relative">
                <Image
                  src="/images/about/our-mission.jpg"
                  alt="South Korea Branch"
                  fill
                  className="object-cover"
                />
                <div className={`absolute inset-0 transition-colors ${
                  activeTab === 'korea' 
                    ? 'bg-gradient-to-t from-sky-900/90 via-sky-800/70 to-sky-600/50' 
                    : 'bg-gradient-to-t from-gray-900/80 via-gray-800/60 to-gray-700/40 group-hover:from-sky-900/70 group-hover:via-sky-800/50 group-hover:to-sky-600/30'
                }`}></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-8">
                  <div className={`mb-4 transition-transform ${activeTab === 'korea' ? 'scale-110' : 'group-hover:scale-105'}`}>
                    <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
                    </svg>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-3">
                    South Korea
                  </h2>
                  <p className="text-lg md:text-xl text-gray-100 font-medium">
                    {locale === 'ko' ? 'KGH 글로벌 본사' : 'KGH Global Headquarters'}
                  </p>
                  {activeTab === 'korea' && (
                    <div className="mt-4 flex items-center text-sky-200">
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="font-semibold">{locale === 'ko' ? '선택됨' : 'Selected'}</span>
                    </div>
                  )}
                </div>
              </div>
            </button>

            {/* New Zealand Tab */}
            <button
              onClick={() => setActiveTab('nz')}
              className={`relative overflow-hidden rounded-2xl shadow-lg transition-all duration-300 group ${
                activeTab === 'nz' 
                  ? 'ring-4 ring-emerald-500 shadow-2xl transform scale-105' 
                  : 'hover:shadow-xl hover:scale-102'
              }`}
            >
              <div className="aspect-[16/10] relative">
                <Image
                  src="/images/about/out-vision.jpg"
                  alt="New Zealand Branch"
                  fill
                  className="object-cover"
                />
                <div className={`absolute inset-0 transition-colors ${
                  activeTab === 'nz' 
                    ? 'bg-gradient-to-t from-emerald-900/90 via-emerald-800/70 to-emerald-600/50' 
                    : 'bg-gradient-to-t from-gray-900/80 via-gray-800/60 to-gray-700/40 group-hover:from-emerald-900/70 group-hover:via-emerald-800/50 group-hover:to-emerald-600/30'
                }`}></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-8">
                  <div className={`mb-4 transition-transform ${activeTab === 'nz' ? 'scale-110' : 'group-hover:scale-105'}`}>
                    <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-3">
                    New Zealand
                  </h2>
                  <p className="text-lg md:text-xl text-gray-100 font-medium text-center leading-relaxed">
                    The Southern Hemisphere Branch<br />for KGH Global
                  </p>
                  {activeTab === 'nz' && (
                    <div className="mt-4 flex items-center text-emerald-200">
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="font-semibold">{locale === 'ko' ? '선택됨' : 'Selected'}</span>
                    </div>
                  )}
                </div>
              </div>
            </button>
          </div>

          {/* Content Section */}
          <div className="min-h-[500px]">
            {activeTab === 'korea' ? (
              <div>
                <div className="text-center mb-12">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    {locale === 'ko' ? '한국 지사 경영진' : 'South Korea Leadership Team'}
                  </h3>
                  <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    {locale === 'ko' 
                      ? '지속 가능한 에너지 솔루션으로 미래를 선도하는 KGH Global의 핵심 리더십' 
                      : 'Our core leadership team driving sustainable energy solutions and innovation'}
                  </p>
                </div>

                {/* Team Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {koreaTeam.map((member, index) => (
                    <div 
                      key={index} 
                      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 group"
                    >
                      <div className="relative aspect-[4/5] overflow-hidden">
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-6">
                        <h4 className="text-2xl font-bold text-gray-900 mb-2">
                          {member.name}
                        </h4>
                        <p className="text-sky-600 font-semibold mb-4 text-lg">
                          {member.position}
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                          {member.bio}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-center min-h-[500px]">
                <div className="text-center max-w-2xl mx-auto p-12">
                  <div className="mb-8">
                    <svg className="w-24 h-24 mx-auto text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {locale === 'ko' ? '곧 공개됩니다' : 'Coming Soon'}
                  </h3>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    {locale === 'ko' 
                      ? '남반구 지사의 팀 프로필이 곧 공개될 예정입니다.' 
                      : 'Our team profiles for the Southern Hemisphere branch are coming soon.'}
                  </p>
                  <div className="mt-8 pt-8 border-t border-gray-200">
                    <p className="text-gray-500 italic">
                      {locale === 'ko' 
                        ? 'The Southern Hemisphere Branch for KGH Global' 
                        : 'The Southern Hemisphere Branch for KGH Global'}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
