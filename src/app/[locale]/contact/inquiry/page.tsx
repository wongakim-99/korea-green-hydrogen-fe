/**
 * InquiryPage 컴포넌트
 * 
 * 문의하기 페이지 메인 컴포넌트
 * - 사용자가 회사에 문의사항을 전달할 수 있는 페이지
 * - Breadcrumb, Hero Section, Contact Information, Contact Form으로 구성
 */

'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';
import InquiryHeroSection from '@/components/page/contact/inquery/InquiryHeroSection';
import ContactInformationCard from '@/components/page/contact/inquery/ContactInformationCard';
import InquiryForm from '@/components/page/contact/inquery/InquiryForm';

export default function InquiryPage() {
  const locale = useLocale();

  return (
    <div className="min-h-screen">
      {/* Breadcrumb Navigation */}
      <nav className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-base text-gray-700 font-semibold">
            <Link href={`/${locale}`} className="hover:text-sky-600 transition-colors">
              홈
            </Link>
            <span className="text-gray-400">/</span>
            <Link href={`/${locale}/contact`} className="hover:text-sky-600 transition-colors">
              Contact
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-sky-600 font-bold">문의하기</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <InquiryHeroSection />

      {/* Contact Form Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* 연락 정보 카드 */}
            <ContactInformationCard />

            {/* 문의 폼 */}
            <InquiryForm />
          </div>
        </div>
      </section>
    </div>
  );
}