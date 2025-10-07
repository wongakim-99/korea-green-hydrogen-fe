'use client';

import Link from "next/link";
import { useLocale } from "next-intl";

export default function CTASection() {
  const locale = useLocale();
  return (
    <section className="bg-sky-600 py-12 sm:py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
          지속가능한 미래를 함께 만들어가세요
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-sky-100 mb-6 sm:mb-8 max-w-2xl mx-auto px-2">
          Korea Green Hydrogen와 함께 친환경 수소 에너지로 더 나은 내일을 준비하세요.
        </p>
        <Link
          href={`/${locale}/contact`}
          className="bg-white text-sky-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
        >
          지금 상담받기
        </Link>
      </div>
    </section>
  );
}
