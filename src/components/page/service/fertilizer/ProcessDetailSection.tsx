'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function ProcessDetailSection() {
  const t = useTranslations('FertilizerPage.Process');

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* 섹션 헤더 */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 break-keep">
            {t('detail_title')}
          </h2>
        </div>

        {/* 상세 설명 */}
        <div className="space-y-16 md:space-y-20">
          {/* 1단계 상세 - 이미지 왼쪽, 텍스트 오른쪽 */}
          <div id="step1-detail" className="scroll-mt-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* 이미지 */}
              <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-[4/3] bg-gray-100">
                {/* TODO: 사용자가 제공하는 이미지로 교체 */}
                {/* <Image
                  src="/images/services/fertilizer/detail-1.jpg"
                  alt="고품질 원료 확보 - 친환경 전처리"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
                /> */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-gray-400 text-sm">이미지 준비 중</span>
                </div>
              </div>

              {/* 텍스트 */}
              <div className="space-y-6">
                <div className="flex items-center flex-nowrap">
                  <span className="inline-block bg-sky-600 text-white px-4 py-2 rounded-full text-sm font-semibold mr-4 whitespace-nowrap flex-shrink-0">
                    {t('step1_number')}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 break-keep">
                    {t('step1_title')}
                  </h3>
                </div>
                
                <div className="space-y-4 text-base md:text-lg text-gray-700 leading-relaxed">
                  <p className="break-keep">{t('step1_detail_intro')}</p>
                  <p className="break-keep font-semibold text-sky-900">{t('step1_detail_subtitle')}</p>
                  
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-sky-600 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="break-keep">{t('step1_detail_point1')}</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-sky-600 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="break-keep">{t('step1_detail_point2')}</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-sky-600 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="break-keep">{t('step1_detail_point3')}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* 2단계 상세 - 텍스트 왼쪽, 이미지 오른쪽 (교차) */}
          <div id="step2-detail" className="scroll-mt-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* 텍스트 - 데스크톱에서 왼쪽 */}
              <div className="space-y-6 order-2 lg:order-1">
                <div className="flex items-center flex-nowrap">
                  <span className="inline-block bg-sky-600 text-white px-4 py-2 rounded-full text-sm font-semibold mr-4 whitespace-nowrap flex-shrink-0">
                    {t('step2_number')}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 break-keep">
                    {t('step2_title')}
                  </h3>
                </div>
                
                <div className="space-y-4 text-base md:text-lg text-gray-700 leading-relaxed">
                  <p className="break-keep">{t('step2_detail_intro')}</p>
                  
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-sky-600 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="break-keep">{t('step2_detail_point1')}</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-sky-600 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="break-keep">{t('step2_detail_point2')}</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-sky-600 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="break-keep">{t('step2_detail_point3')}</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* 이미지 - 모바일에서 상단, 데스크톱에서 오른쪽 */}
              <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-[4/3] bg-gray-100 order-1 lg:order-2">
                {/* TODO: 사용자가 제공하는 이미지로 교체 */}
                {/* <Image
                  src="/images/services/fertilizer/detail-2.jpg"
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
          </div>

          {/* 3단계 상세 - 이미지 왼쪽, 텍스트 오른쪽 (1단계와 동일) */}
          <div id="step3-detail" className="scroll-mt-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* 이미지 */}
              <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-[4/3] bg-gray-100">
                {/* TODO: 사용자가 제공하는 이미지로 교체 */}
                {/* <Image
                  src="/images/services/fertilizer/detail-3.jpg"
                  alt="제품화 및 포장 - 글로벌 스탠다드"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
                /> */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-gray-400 text-sm">이미지 준비 중</span>
                </div>
              </div>

              {/* 텍스트 */}
              <div className="space-y-6">
                <div className="flex items-center flex-nowrap">
                  <span className="inline-block bg-sky-600 text-white px-4 py-2 rounded-full text-sm font-semibold mr-4 whitespace-nowrap flex-shrink-0">
                    {t('step3_number')}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 break-keep">
                    {t('step3_title')}
                  </h3>
                </div>
                
                <div className="space-y-4 text-base md:text-lg text-gray-700 leading-relaxed">
                  <p className="break-keep">{t('step3_detail_intro')}</p>
                  
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-sky-600 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="break-keep">{t('step3_detail_point1')}</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-sky-600 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="break-keep">{t('step3_detail_point2')}</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-sky-600 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="break-keep">{t('step3_detail_point3')}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
