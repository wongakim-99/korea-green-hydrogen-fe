'use client';

import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";

export default function CTASection() {
  const t = useTranslations('HomePage.CTA');
  const locale = useLocale();
  return (
    <section className="bg-sky-600 py-12 sm:py-16 md:py-24 snap-start">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
          {t('title')}
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-sky-100 mb-6 sm:mb-8 max-w-2xl mx-auto px-2">
          {t('description')}
        </p>
        <Link
          href={`/${locale}/contact`}
          className="bg-white text-sky-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
        >
          {t('button')}
        </Link>
      </div>
    </section>
  );
}
