'use client';

import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { ArrowRight } from 'lucide-react';

export default function CTASection() {
  const t = useTranslations('HomePage.CTA');
  const locale = useLocale();
  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 snap-start bg-gradient-to-br from-gray-900 via-sky-900 to-blue-900 overflow-hidden">
      {/* 배경 장식 요소 */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
          {t('title')}
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-6 sm:mb-10 max-w-2xl mx-auto px-2 leading-relaxed">
          {t('description')}
        </p>
        
        <Link
          href={`/${locale}/contact`}
          className="group relative inline-flex items-center space-x-3 bg-white text-sky-700 px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-base sm:text-lg font-bold hover:bg-sky-50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-sky-500/50 border-2 border-white/20"
        >
          <span>{t('button')}</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          {/* 글로우 효과 */}
          <div className="absolute inset-0 bg-white/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
        </Link>
      </div>
    </section>
  );
}
