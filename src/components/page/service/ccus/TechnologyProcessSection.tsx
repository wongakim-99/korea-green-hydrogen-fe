'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useTranslations } from 'next-intl';
import { useRef } from 'react';

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
          <div className="hidden lg:block absolute left-[20.1%] top-full h-12 md:h-16 w-0.5 bg-gradient-to-b from-gray-300 to-transparent"></div>
        )}

        <div className={`transition-all duration-1000 ease-out ${stepVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
            {/* 텍스트 영역 - 항상 왼쪽 (5/12) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="flex flex-col items-center space-y-6">
                {/* 번호 뱃지 - 중앙 정렬 */}
                <div className={`flex-shrink-0 w-20 h-20 md:w-24 md:h-24 ${isLast ? 'bg-gradient-to-br from-sky-500 to-sky-600' : 'bg-gradient-to-br from-gray-700 to-gray-900'} rounded-2xl flex items-center justify-center shadow-xl`}>
                  <span className="text-3xl md:text-4xl font-bold text-white">{`0${step.number}`}</span>
                </div>
                
                {/* 제목과 설명 */}
                <div className="text-center w-full">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 break-keep">
                    {step.title}
                  </h3>
                  <p className="text-base md:text-lg text-gray-600 leading-relaxed whitespace-pre-line break-keep">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>

            {/* 이미지 영역 - 항상 오른쪽 (7/12) */}
            <div className="lg:col-span-7">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-gray-200 to-gray-300 aspect-[4/3] lg:aspect-[16/9] flex items-center justify-center">
                {/* TODO: 고객사 이미지로 교체 */}
                <div className="p-8 text-center">
                  <div className={`w-20 h-20 md:w-24 md:h-24 ${isLast ? 'bg-gradient-to-br from-sky-500 to-sky-600' : 'bg-gradient-to-br from-gray-600 to-gray-800'} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl`}>
                    {step.number === 1 && (
                      <svg className="w-10 h-10 md:w-12 md:h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                      </svg>
                    )}
                    {step.number === 2 && (
                      <svg className="w-10 h-10 md:w-12 md:h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                    )}
                    {step.number === 3 && (
                      <svg className="w-10 h-10 md:w-12 md:h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    )}
                    {step.number === 4 && (
                      <svg className="w-10 h-10 md:w-12 md:h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                      </svg>
                    )}
                  </div>
                  <p className="text-gray-500 text-sm font-medium">이미지 영역</p>
                  <p className="text-gray-400 text-xs mt-1">Step {step.number} - {step.title}</p>
                </div>
                {/* <Image
                  src={`/images/services/ccus/process-step-${step.number}.jpg`}
                  alt={step.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
                /> */}
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

