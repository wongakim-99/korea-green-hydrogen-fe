interface NZTeamSectionProps {
  locale: string;
}

export default function NZTeamSection({ locale }: NZTeamSectionProps) {
  return (
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
            The Southern Hemisphere Branch for KGH Global
          </p>
        </div>
      </div>
    </div>
  );
}
