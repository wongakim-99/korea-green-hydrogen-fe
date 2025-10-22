'use client';

import { useState } from 'react';
import Image from 'next/image';
import TeamMemberCard from './TeamMemberCard';

interface TeamMember {
  name: string;
  position: string;
  bio: string;
  image: string;
  detailedBio?: string;
}

interface KoreaTeamSectionProps {
  koreaTeam: TeamMember[];
  locale: string;
}

export default function KoreaTeamSection({ koreaTeam, locale }: KoreaTeamSectionProps) {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(
    koreaTeam.length > 0 ? koreaTeam[0] : null
  );

  const handleMemberClick = (member: TeamMember) => {
    setSelectedMember(member);
  };

  return (
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

      {/* 상단 팀원 카드들 */}
      <div className="flex justify-center flex-wrap gap-8 mb-16">
        {koreaTeam.map((member, index) => (
          <TeamMemberCard 
            key={index} 
            member={{
              ...member,
              isSelected: selectedMember?.name === member.name,
              onClick: () => handleMemberClick(member)
            }} 
          />
        ))}
      </div>

      {/* 상세 프로필 섹션 */}
      {selectedMember && (
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
            {/* 왼쪽: 이미지 */}
            <div className="relative aspect-[3/4] lg:aspect-[3/4] lg:col-span-1">
              <Image
                src={selectedMember.image}
                alt={selectedMember.name}
                fill
                className="object-cover"
              />
            </div>
            
            {/* 오른쪽: 텍스트 정보 */}
            <div className="p-8 lg:p-12 flex flex-col justify-center lg:col-span-2">
              <div className="mb-6">
                <p className="text-sm text-gray-500 mb-2">
                  {selectedMember.position}
                </p>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  {selectedMember.name}
                </h2>
              </div>
              
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-600 leading-relaxed text-lg mb-4">
                  {selectedMember.bio}
                </p>
                {selectedMember.detailedBio && (
                  <div className="text-gray-600 leading-relaxed">
                    {selectedMember.detailedBio.split('\n').map((paragraph, index) => (
                      <p key={index} className="mb-4">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
