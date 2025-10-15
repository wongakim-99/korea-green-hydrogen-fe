'use client';

import { useTranslations } from "next-intl";

const AboutContentSection = () => {
  const t = useTranslations('About');

  const sections = [
    { number: '01', key: 'mission' as const },
    { number: '02', key: 'vision' as const },
    { number: '03', key: 'philosophy' as const },
  ];

  const values = [
    { key: 'proactive' as const },
    { key: 'responsive' as const },
    { key: 'teamwork' as const },
    { key: 'innovative' as const },
    { key: 'accountable' as const },
  ];

  return (
    <>
      {/* Mission, Vision, Philosophy Sections */}
      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16 md:space-y-20 lg:space-y-24">
            {sections.map((section, index) => (
              <div 
                key={section.key}
                className="flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-12"
              >
                {/* Number */}
                <div className="flex-shrink-0">
                  <div 
                    className="text-6xl md:text-7xl lg:text-8xl font-bold opacity-10"
                    style={{ color: 'var(--primary-blue)' }}
                  >
                    {section.number}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 pt-2 md:pt-4">
                  <h2 
                    className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6"
                    style={{ color: 'var(--primary-blue-dark)' }}
                  >
                    {t(`${section.key}.title`)}
                  </h2>
                  <p className="text-base md:text-lg text-gray-700 leading-relaxed break-keep">
                    {t(`${section.key}.description`)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16">
            <h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
              style={{ color: 'var(--primary-blue-dark)' }}
            >
              {t('values.title')}
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              {t('values.subtitle')}
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {values.map((value, index) => (
              <div 
                key={value.key}
                className="bg-white rounded-lg p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-300 border-t-4"
                style={{ borderTopColor: 'var(--primary-blue)' }}
              >
                {/* Value Title */}
                <h3 
                  className="text-xl md:text-2xl font-bold mb-3 md:mb-4"
                  style={{ color: 'var(--primary-blue-dark)' }}
                >
                  {t(`values.${value.key}.title`)}
                </h3>
                
                {/* Value Description */}
                <p className="text-gray-600 leading-relaxed break-keep">
                  {t(`values.${value.key}.description`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutContentSection;

