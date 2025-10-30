'use client';

import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { useState } from 'react';

const Footer = () => {
  const t = useTranslations('Footer');
  const locale = useLocale();
  const currentYear = new Date().getFullYear();
  const [openPrivacy, setOpenPrivacy] = useState(false);

  return (
    <>
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* 회사 정보 */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-sky-400 mb-4">
              KGH GLOBAL
            </h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              {t('description')}
            </p>
            <div className="text-gray-300">
              <p className="mb-2">📍 {t('address')}</p>
              <p className="mb-2">📞 {t('phone')}</p>
              <p className="mb-2">✉️ {t('email')}</p>
            </div>
          </div>

          {/* 빠른 링크 */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('quickLinks')}</h4>
            <ul className="space-y-2">
              <li>
                <Link href={`/${locale}/about`} className="text-gray-300 hover:text-sky-400 transition-colors">
                  {t('about')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/services`} className="text-gray-300 hover:text-sky-400 transition-colors">
                  {t('services')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/contact`} className="text-gray-300 hover:text-sky-400 transition-colors">
                  {t('contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* 소셜 미디어 */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('socialMedia')}</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-300 hover:text-sky-400 transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-sky-400 transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* 하단 구분선 및 저작권 */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              {t('copyright', {currentYear})}
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <button
                type="button"
                onClick={() => setOpenPrivacy(true)}
                className="text-gray-400 hover:text-sky-400 text-sm transition-colors underline underline-offset-2"
              >
                {t('privacyPolicy')}
              </button>
              <Link href={`/${locale}/terms`} className="text-gray-400 hover:text-sky-400 text-sm transition-colors">
                {t('termsOfService')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
    {/* Privacy Modal */}
    {openPrivacy && (
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div className="absolute inset-0 bg-black/50" onClick={() => setOpenPrivacy(false)}></div>
        <div className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-[92%] md:w-[640px] mx-auto p-6 md:p-8 z-10">
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">{t('privacyModalTitle')}</h3>
          <p className="text-gray-700 leading-relaxed mb-6 whitespace-pre-line">{t('privacyModalBody')}</p>
          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={() => setOpenPrivacy(false)}
              className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50"
            >
              {t('privacyModalClose')}
            </button>
            <Link
              href={`/${locale}/privacy`}
              className="px-4 py-2 rounded-lg bg-sky-600 text-white hover:bg-sky-700"
              onClick={() => setOpenPrivacy(false)}
            >
              {t('privacyModalViewFull')}
            </Link>
          </div>
        </div>
      </div>
    )}
    </>
  );
};

export default Footer;
