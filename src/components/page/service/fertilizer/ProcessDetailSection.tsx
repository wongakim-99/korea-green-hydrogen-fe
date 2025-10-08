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
                  
                  {/* 3단 피쳐 카드 그리드 */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 items-stretch">
                    {/* 카드 1: 품질 향상 */}
                    <div className="bg-sky-50 p-6 rounded-xl text-center flex flex-col h-full">
                      <div className="flex justify-center mb-4">
                        <svg className="w-12 h-12 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                        </svg>
                      </div>
                      <div className="flex-grow">
                        <h4 className="font-semibold text-gray-800 mb-2 break-keep">
                          {t('step1_detail_point1').split(':')[0]}
                        </h4>
                        <p className="text-sm text-gray-600 break-keep">
                          {t('step1_detail_point1').split(':')[1]?.trim()}
                        </p>
                      </div>
                    </div>

                    {/* 카드 2: 악취 제거 */}
                    <div className="bg-sky-50 p-6 rounded-xl text-center flex flex-col h-full">
                      <div className="flex justify-center mb-4">
                        <svg className="w-12 h-12 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div className="flex-grow">
                        <h4 className="font-semibold text-gray-800 mb-2 break-keep">
                          {t('step1_detail_point2').split(':')[0]}
                        </h4>
                        <p className="text-sm text-gray-600 break-keep">
                          {t('step1_detail_point2').split(':')[1]?.trim()}
                        </p>
                      </div>
                    </div>

                    {/* 카드 3: 안전성 확보 */}
                    <div className="bg-sky-50 p-6 rounded-xl text-center flex flex-col h-full">
                      <div className="flex justify-center mb-4">
                        <svg className="w-12 h-12 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <div className="flex-grow">
                        <h4 className="font-semibold text-gray-800 mb-2 break-keep">
                          {t('step1_detail_point3').split(':')[0]}
                        </h4>
                        <p className="text-sm text-gray-600 break-keep">
                          {t('step1_detail_point3').split(':')[1]?.trim()}
                        </p>
                      </div>
                    </div>
                  </div>
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
                  
                  {/* 3단 피쳐 카드 그리드 */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 items-stretch">
                    {/* 카드 1: 유기물 배합 */}
                    <div className="bg-sky-50 p-6 rounded-xl text-center flex flex-col h-full">
                      <div className="flex justify-center mb-4">
                        <svg className="w-12 h-12 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                        </svg>
                      </div>
                      <div className="flex-grow">
                        <h4 className="font-semibold text-gray-800 mb-2 break-keep">
                          {t('step2_detail_point1').split(':')[0]}
                        </h4>
                        <p className="text-sm text-gray-600 break-keep">
                          {t('step2_detail_point1').split(':')[1]?.trim()}
                        </p>
                      </div>
                    </div>

                    {/* 카드 2: 영양분 추가 */}
                    <div className="bg-sky-50 p-6 rounded-xl text-center flex flex-col h-full">
                      <div className="flex justify-center mb-4">
                        <svg className="w-12 h-12 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                        </svg>
                      </div>
                      <div className="flex-grow">
                        <h4 className="font-semibold text-gray-800 mb-2 break-keep">
                          {t('step2_detail_point2').split(':')[0]}
                        </h4>
                        <p className="text-sm text-gray-600 break-keep">
                          {t('step2_detail_point2').split(':')[1]?.trim()}
                        </p>
                      </div>
                    </div>

                    {/* 카드 3: 최적화 */}
                    <div className="bg-sky-50 p-6 rounded-xl text-center flex flex-col h-full">
                      <div className="flex justify-center mb-4">
                        <svg className="w-12 h-12 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <div className="flex-grow">
                        <h4 className="font-semibold text-gray-800 mb-2 break-keep">
                          {t('step2_detail_point3').split(':')[0]}
                        </h4>
                        <p className="text-sm text-gray-600 break-keep">
                          {t('step2_detail_point3').split(':')[1]?.trim()}
                        </p>
                      </div>
                    </div>
                  </div>
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
                  
                  {/* 3단 피쳐 카드 그리드 */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 items-stretch">
                    {/* 카드 1: 펠릿화 */}
                    <div className="bg-sky-50 p-6 rounded-xl text-center flex flex-col h-full">
                      <div className="flex justify-center mb-4">
                        <svg className="w-12 h-12 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                        </svg>
                      </div>
                      <div className="flex-grow">
                        <h4 className="font-semibold text-gray-800 mb-2 break-keep">
                          {t('step3_detail_point1').split(':')[0]}
                        </h4>
                        <p className="text-sm text-gray-600 break-keep">
                          {t('step3_detail_point1').split(':')[1]?.trim()}
                        </p>
                      </div>
                    </div>

                    {/* 카드 2: 글로벌 OEM */}
                    <div className="bg-sky-50 p-6 rounded-xl text-center flex flex-col h-full">
                      <div className="flex justify-center mb-4">
                        <svg className="w-12 h-12 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div className="flex-grow">
                        <h4 className="font-semibold text-gray-800 mb-2 break-keep">
                          {t('step3_detail_point2').split(':')[0]}
                        </h4>
                        <p className="text-sm text-gray-600 break-keep">
                          {t('step3_detail_point2').split(':')[1]?.trim()}
                        </p>
                      </div>
                    </div>

                    {/* 카드 3: 수출 준비 */}
                    <div className="bg-sky-50 p-6 rounded-xl text-center flex flex-col h-full">
                      <div className="flex justify-center mb-4">
                        <svg className="w-12 h-12 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                        </svg>
                      </div>
                      <div className="flex-grow">
                        <h4 className="font-semibold text-gray-800 mb-2 break-keep">
                          {t('step3_detail_point3').split(':')[0]}
                        </h4>
                        <p className="text-sm text-gray-600 break-keep">
                          {t('step3_detail_point3').split(':')[1]?.trim()}
                        </p>
                      </div>
                    </div>
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
