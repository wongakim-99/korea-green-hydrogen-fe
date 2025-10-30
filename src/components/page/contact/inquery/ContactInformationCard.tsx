/**
 * ContactInformationCard 컴포넌트
 * 
 * 회사 연락처 정보를 표시하는 카드
 * - 주소, 전화번호, 이메일, 운영시간 등 표시
 * - 각 항목에 아이콘과 호버 애니메이션 효과 적용
 */

'use client';

import { useTranslations } from 'next-intl';

export default function ContactInformationCard() {
  const t = useTranslations('Inquiry.contactInfo');

  return (
    <div>
      <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100 h-full hover:shadow-2xl transition-shadow duration-300">
        {/* 헤더 */}
        <div className="mb-8">
          <div className="w-12 h-1 bg-gradient-to-r from-sky-500 to-blue-600 rounded-full mb-4"></div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{t('title')}</h2>
          <p className="text-gray-600 mt-3">{t('description')}</p>
        </div>
        
        {/* 연락처 정보 목록 */}
        <div className="space-y-6">
          {/* 본사 주소 */}
          <ContactInfoItem
            icon={
              <>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </>
            }
            title={t('address.title')}
            content={
              <>
                {t('address.line1')}<br />
                {t('address.line2')}
              </>
            }
          />

          {/* 전화번호 */}
          <ContactInfoItem
            icon={
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            }
            title={t('phone.title')}
            content={
              <>
                {t('phone.main')}<br />
                {t('phone.support')}
              </>
            }
          />

          {/* 이메일 */}
          <ContactInfoItem
            icon={
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            }
            title={t('email.title')}
            content={
              <>
                {t('email.general')}<br />
                {t('email.tech')}
              </>
            }
          />

          {/* 운영시간 */}
          <ContactInfoItem
            icon={
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            }
            title={t('hours.title')}
            content={
              <>
                {t('hours.weekdays')}<br />
                {t('hours.saturday')}<br />
                {t('hours.sunday')}
              </>
            }
          />
        </div>
      </div>
    </div>
  );
}

/**
 * ContactInfoItem 컴포넌트
 * 
 * 개별 연락처 정보 항목을 표시하는 서브 컴포넌트
 * @param icon - SVG 아이콘 경로
 * @param title - 항목 제목
 * @param content - 항목 내용
 */
interface ContactInfoItemProps {
  icon: React.ReactNode;
  title: string;
  content: React.ReactNode;
}

function ContactInfoItem({ icon, title, content }: ContactInfoItemProps) {
  return (
    <div className="flex items-start group hover:translate-x-2 transition-all duration-300">
      {/* 아이콘 */}
      <div className="w-14 h-14 bg-gradient-to-br from-sky-100 to-sky-50 rounded-xl flex items-center justify-center mr-4 shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300">
        <svg className="w-7 h-7 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {icon}
        </svg>
      </div>
      
      {/* 텍스트 정보 */}
      <div className="flex-1 min-w-0">
        <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 leading-relaxed break-words">
          {content}
        </p>
      </div>
    </div>
  );
}

