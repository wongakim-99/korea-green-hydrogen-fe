import { Metadata } from 'next';
import Link from 'next/link';
import {getTranslations} from 'next-intl/server';

export async function generateMetadata({params: {locale}}: {params: {locale: string}}): Promise<Metadata> {
  const t = await getTranslations({locale, namespace: 'CEOPage.metadata'});

  return {
    title: t('title'),
    description: t('description'),
  };
}

export default async function CEOPage({params: {locale}}: {params: {locale: string}}) {
  const t = await getTranslations({locale, namespace: 'CEOPage'});
  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <nav className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-base text-gray-700 font-semibold">
            <Link href={`/${locale}`} className="hover:text-sky-600 transition-colors">{t('breadcrumb.home')}</Link>
            <span className="text-gray-400">/</span>
            <Link href={`/${locale}/about`} className="hover:text-sky-600 transition-colors">{t('breadcrumb.company')}</Link>
            <span className="text-gray-400">/</span>
            <span className="text-sky-600 font-bold">{t('breadcrumb.ceoMessage')}</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-sky-600 to-blue-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {t('hero.title')}
            </h1>
            <p className="text-xl text-sky-100 max-w-2xl mx-auto">
              {t('hero.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* CEO Message Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            {/* CEO Photo Placeholder */}
            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-sky-100 to-blue-100 rounded-lg p-8 text-center">
                <div className="w-48 h-48 mx-auto bg-gradient-to-br from-gray-200 to-gray-300 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-24 h-24 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{t('content.name')}</h3>
                <p className="text-sky-600 font-semibold">{t('content.title')}</p>
              </div>
            </div>

            {/* CEO Message */}
            <div className="lg:col-span-2">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  {t('content.heading')}
                </h2>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  {t('content.p1')}
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                  {t('content.p2')}
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                  {t('content.p3')}
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                  {t('content.p4')}
                </p>

                <p className="text-gray-700 leading-relaxed font-semibold">
                  {t('content.p5')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
