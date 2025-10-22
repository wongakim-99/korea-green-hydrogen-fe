interface TeamHeroSectionProps {
  locale: string;
}

export default function TeamHeroSection({ locale }: TeamHeroSectionProps) {
  return (
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
  );
}
