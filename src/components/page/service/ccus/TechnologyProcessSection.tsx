'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function TechnologyProcessSection() {
  const [ref, isVisible] = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });
  const t = useTranslations('CCUSPage.TechnologyProcess');

  const steps = [
    { number: 1, title: t('step1_title'), description: t('step1_description') },
    { number: 2, title: t('step2_title'), description: t('step2_description') },
    { number: 3, title: t('step3_title'), description: t('step3_description') },
    { number: 4, title: t('step4_title'), description: t('step4_description') },
  ];

  // 각 단계별 개별 ref와 visibility
  const StepItem = ({ step, index }: { step: typeof steps[0], index: number }) => {
    const [stepRef, stepVisible] = useScrollAnimation<HTMLDivElement>({ threshold: 0.3 });
    const isLast = step.number === 4;

    return (
      <div ref={stepRef} className="relative">
        {/* 연결선 (마지막 제외) - 번호 뱃지 중앙에서 시작 */}
        {!isLast && (
          <div className="hidden md:block absolute md:left-[25%] lg:left-[20.1%] top-full h-8 md:h-12 lg:h-16 w-0.5 bg-gradient-to-b from-gray-300 to-transparent"></div>
        )}

        <div className={`transition-all duration-1000 ease-out ${stepVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 md:gap-8 lg:gap-8 items-center">
            {/* 텍스트 영역 - 모바일: 전체 / 태블릿: 1/2 / 데스크톱: 5/12 */}
            <div className="md:col-span-1 lg:col-span-5 space-y-6">
              <div className="flex flex-col items-center space-y-4 md:space-y-5 lg:space-y-6">
                {/* 번호 뱃지 - 중앙 정렬 */}
                <div className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 ${isLast ? 'bg-gradient-to-br from-sky-500 to-sky-600' : 'bg-gradient-to-br from-gray-700 to-gray-900'} rounded-xl md:rounded-2xl flex items-center justify-center shadow-xl`}>
                  <span className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">{`0${step.number}`}</span>
                </div>
                
                {/* 제목과 설명 */}
                <div className="text-center w-full">
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 md:mb-4 break-keep">
                    {step.title}
                  </h3>
                  <p className="text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed whitespace-pre-line break-keep">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>

            {/* 이미지 영역 - 모바일: 전체 / 태블릿: 1/2 / 데스크톱: 7/12 */}
            <div className="md:col-span-1 lg:col-span-7">
              <div className="relative rounded-xl md:rounded-2xl overflow-hidden shadow-xl md:shadow-2xl bg-gradient-to-br from-gray-200 to-gray-300 aspect-[4/3] md:aspect-[3/2] lg:aspect-[16/9] flex items-center justify-center">
                {/* 모든 step - 실제 이미지 */}
                <Image
                  src={`/images/services/ccus/ccus-process-${step.number}.jpg`}
                  alt={step.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section ref={ref} className="py-16 md:py-20 lg:py-24 bg-gray-100 overflow-hidden">
      <div className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* 섹션 헤더 */}
          <div className="mb-16 md:mb-20 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4 break-keep">
              {t('title')}
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto break-keep">
              {t('subtitle')}
            </p>
          </div>

          {/* 세로 프로세스 - 일관된 레이아웃 */}
          <div className="space-y-12 md:space-y-16">
            {steps.map((step, index) => (
              <StepItem key={step.number} step={step} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

