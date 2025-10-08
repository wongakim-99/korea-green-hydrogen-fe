'use client';

import Image from 'next/image';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useTranslations } from 'next-intl';

export default function ProcessSection() {
  const [ref, isVisible] = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 });
  const t = useTranslations('FertilizerPage.Process');

  return (
    <section ref={ref} className="py-16 md:py-20 lg:py-24 bg-white overflow-hidden">
      <div className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* 섹션 헤더 */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 break-keep">
              {t('title')}
            </h2>
            <p className="text-xl md:text-2xl text-sky-600 font-semibold mb-3 break-keep">
              {t('subtitle')}
            </p>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto break-keep">
              {t('description')}
            </p>
          </div>

          {/* 3단계 프로세스 */}
          <div className="space-y-16 md:space-y-20">
            {/* 1단계 */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-block">
                  <span className="inline-block bg-sky-100 text-sky-700 px-4 py-2 rounded-full text-sm font-semibold mb-3">
                    1단계
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 break-keep">
                  {t('step1_title')}
                </h3>
                <div className="inline-block bg-sky-50 px-4 py-2 rounded-lg">
                  <span className="text-sky-700 font-semibold">{t('step1_label')}</span>
                </div>
                <div className="space-y-4 text-base sm:text-lg text-gray-700 leading-relaxed">
                  <p className="break-keep">{t('step1_description1')}</p>
                  <p className="break-keep">{t('step1_description2')}</p>
                </div>
              </div>
              <div className="lg:col-span-6">
                <div className="relative rounded-lg overflow-hidden shadow-lg aspect-[4/3] bg-gray-100">
                  {/* TODO: 사용자가 제공하는 이미지로 교체 */}
                  {/* <Image
                    src="/images/services/fertilizer/process-1.jpg"
                    alt="고품질 원료 확보 - 친환경 전처리"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
                  /> */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-gray-400 text-sm">이미지 준비 중</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 2단계 - 이미지와 텍스트 위치 반전 */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-6 order-2 lg:order-1">
                <div className="relative rounded-lg overflow-hidden shadow-lg aspect-[4/3] bg-gray-100">
                  {/* TODO: 사용자가 제공하는 이미지로 교체 */}
                  {/* <Image
                    src="/images/services/fertilizer/process-2.jpg"
                    alt="맞춤형 영양 배합 - 가치 상승"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
                  /> */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-gray-400 text-sm">이미지 준비 중</span>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
                <div className="inline-block">
                  <span className="inline-block bg-sky-100 text-sky-700 px-4 py-2 rounded-full text-sm font-semibold mb-3">
                    2단계
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 break-keep">
                  {t('step2_title')}
                </h3>
                <div className="inline-block bg-sky-50 px-4 py-2 rounded-lg">
                  <span className="text-sky-700 font-semibold">{t('step2_label')}</span>
                </div>
                <div className="space-y-4 text-base sm:text-lg text-gray-700 leading-relaxed">
                  <p className="break-keep">{t('step2_description1')}</p>
                  <p className="break-keep">{t('step2_description2')}</p>
                </div>
              </div>
            </div>

            {/* 3단계 */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-block">
                  <span className="inline-block bg-sky-100 text-sky-700 px-4 py-2 rounded-full text-sm font-semibold mb-3">
                    3단계
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 break-keep">
                  {t('step3_title')}
                </h3>
                <div className="inline-block bg-sky-50 px-4 py-2 rounded-lg">
                  <span className="text-sky-700 font-semibold">{t('step3_label')}</span>
                </div>
                <div className="space-y-4 text-base sm:text-lg text-gray-700 leading-relaxed">
                  <p className="break-keep">{t('step3_description1')}</p>
                  <p className="break-keep">{t('step3_description2')}</p>
                </div>
              </div>
              <div className="lg:col-span-6">
                <div className="relative rounded-lg overflow-hidden shadow-lg aspect-[4/3] bg-gray-100">
                  {/* TODO: 사용자가 제공하는 이미지로 교체 */}
                  {/* <Image
                    src="/images/services/fertilizer/process-3.jpg"
                    alt="제품화 및 포장 - 글로벌 스탠다드"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
                  /> */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-gray-400 text-sm">이미지 준비 중</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

