'use client';

import { useTranslations } from "next-intl";
import Image from "next/image";
import { 
  Zap, 
  Users, 
  MessageCircle, 
  Lightbulb, 
  Shield 
} from "lucide-react";

const AboutContentSection = () => {
  const t = useTranslations('About');

  const sections = [
    { number: '01', key: 'mission' as const, imagePath: '/images/about/mission.jpg' },
    { number: '02', key: 'vision' as const, imagePath: '/images/about/vision.jpg' },
    { number: '03', key: 'philosophy' as const, imagePath: '/images/about/philosophy.jpg' },
  ];

  const values = [
    { key: 'proactive' as const, icon: Zap },
    { key: 'responsive' as const, icon: MessageCircle },
    { key: 'teamwork' as const, icon: Users },
    { key: 'innovative' as const, icon: Lightbulb },
    { key: 'accountable' as const, icon: Shield },
  ];

  return (
    <>
      {/* Mission, Vision, Philosophy Sections */}
      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16 md:space-y-20 lg:space-y-24">
            {sections.map((section, index) => (
              <div 
                key={section.key}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } gap-8 md:gap-10 lg:gap-16 items-center`}
              >
                {/* Image Section */}
                <div className="w-full lg:w-1/2">
                  <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent z-10" />
                    <Image
                      src={section.imagePath}
                      alt={t(`${section.key}.title`)}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </div>

                {/* Content Section */}
                <div className="w-full lg:w-1/2">
                  <div className="flex gap-6 md:gap-8">
                    {/* Number */}
                    <div className="flex-shrink-0">
                      <div 
                        className="text-6xl md:text-7xl lg:text-8xl font-bold opacity-10"
                        style={{ color: 'var(--primary-blue)' }}
                      >
                        {section.number}
                      </div>
                    </div>

                    {/* Text Content */}
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
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div 
                  key={value.key}
                  className="bg-white rounded-lg p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-300 border-t-4 group"
                  style={{ borderTopColor: 'var(--primary-blue)' }}
                >
                  {/* Icon */}
                  <div 
                    className="w-14 h-14 mb-4 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: 'var(--primary-blue-light)' }}
                  >
                    <IconComponent 
                      className="w-7 h-7"
                      style={{ color: 'var(--primary-blue)' }}
                      strokeWidth={2}
                    />
                  </div>

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
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutContentSection;

