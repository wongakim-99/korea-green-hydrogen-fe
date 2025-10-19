import TeamMemberCard from './TeamMemberCard';

interface TeamMember {
  name: string;
  position: string;
  bio: string;
  image: string;
}

interface KoreaTeamSectionProps {
  koreaTeam: TeamMember[];
  locale: string;
}

export default function KoreaTeamSection({ koreaTeam, locale }: KoreaTeamSectionProps) {
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

      {/* Team Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {koreaTeam.map((member, index) => (
          <TeamMemberCard key={index} member={member} />
        ))}
      </div>
    </div>
  );
}
