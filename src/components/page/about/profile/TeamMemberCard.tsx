import Image from 'next/image';

interface TeamMember {
  name: string;
  position: string;
  bio: string;
  image: string;
  isSelected?: boolean;
  onClick?: () => void;
}

interface TeamMemberCardProps {
  member: TeamMember;
}

export default function TeamMemberCard({ member }: TeamMemberCardProps) {
  return (
    <div 
      className="flex flex-col items-center cursor-pointer group transition-all duration-300 hover:scale-105"
      onClick={member.onClick}
    >
      {/* 원형 프로필 이미지 */}
      <div className="relative w-40 h-40 mb-4">
        <div className="w-full h-full rounded-full overflow-hidden border-2 border-gray-200 group-hover:border-sky-500 transition-colors duration-300">
          <Image
            src={member.image}
            alt={member.name}
            fill
            className={`object-cover rounded-full transition-all duration-300 ${
              member.isSelected ? 'grayscale-0' : 'grayscale group-hover:grayscale-0'
            }`}
          />
        </div>
      </div>
      
      {/* 역할 (작은 글씨) */}
      <p className="text-xs text-gray-500 mb-1 text-center">
        {member.position}
      </p>
      
      {/* 이름 (큰 글씨, 밑줄) */}
      <h4 className={`text-lg font-bold text-center transition-colors duration-300 ${
        member.isSelected ? 'text-sky-600' : 'text-gray-900 group-hover:text-sky-600'
      }`}>
        <span className="border-b-2 border-transparent group-hover:border-sky-600 transition-colors duration-300">
          {member.name}
        </span>
      </h4>
    </div>
  );
}
