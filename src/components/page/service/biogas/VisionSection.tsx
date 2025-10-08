'use client';

import Image from 'next/image';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useTranslations } from 'next-intl';

export default function VisionSection() {
  const [ref, isVisible] = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 });
  const t = useTranslations('BiogasPage.Vision');

  return (
    <section ref={ref} className="py-16 md:py-20 lg:py-24 bg-white overflow-hidden">
      <div className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* 텍스트 영역 */}
            <div className="lg:col-span-6 space-y-8 md:space-y-10">
              <div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6 md:mb-8 break-keep">
                  {t('title')}
                </h2>
                
                <div className="space-y-6 text-base sm:text-lg text-gray-700 leading-relaxed">
                  <p className="break-keep">
                    {t.rich('description1', {
                      strong: (chunks) => <strong>{chunks}</strong>
                    })}
                  </p>
                  <p className="break-keep">
                    {t.rich('description2', {
                      strong: (chunks) => <strong>{chunks}</strong>
                    })}
                  </p>
                </div>
              </div>

              {/* 핵심 가치 */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 pt-4">
                <div>
                  <div className="flex items-center mb-3">
                    <div className="w-1 h-12 bg-sky-500 mr-4"></div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 break-keep">{t('value1_title')}</h3>
                      <p className="text-sm text-gray-600 mt-1 break-keep">{t('value1_description')}</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center mb-3">
                    <div className="w-1 h-12 bg-sky-500 mr-4"></div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 break-keep">{t('value2_title')}</h3>
                      <p className="text-sm text-gray-600 mt-1 break-keep">{t('value2_description')}</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center mb-3">
                    <div className="w-1 h-12 bg-sky-500 mr-4"></div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 break-keep">{t('value3_title')}</h3>
                      <p className="text-sm text-gray-600 mt-1 break-keep">{t('value3_description')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 이미지 영역 */}
            <div className="lg:col-span-6">
              <div className="relative rounded-lg overflow-hidden shadow-lg aspect-[4/3]">
                <Image
                  src="/images/services/biogas/service-1.jpg"
                  alt="바이오가스 센터 - 지속가능한 에너지 생산 시설"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
