import Image from 'next/image';

interface TeamMember {
  name: string;
  position: string;
  bio: string;
  image: string;
}

interface TeamMemberCardProps {
  member: TeamMember;
}

export default function TeamMemberCard({ member }: TeamMemberCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 group">
      <div className="relative aspect-[3/4] overflow-hidden">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover"
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
  );
}
