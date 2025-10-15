import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
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
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <nav className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-base text-gray-700 font-semibold">
            <Link href={`/${locale}`} className="hover:text-blue-600 transition-colors">{t('breadcrumb.home')}</Link>
            <span className="text-gray-400">/</span>
            <Link href={`/${locale}/about`} className="hover:text-blue-600 transition-colors">{t('breadcrumb.company')}</Link>
            <span className="text-gray-400">/</span>
            <span className="text-blue-600 font-bold">{t('breadcrumb.ceoMessage')}</span>
          </div>
        </div>
      </nav>

      {/* CEO Message Content - HL Holdings Style */}
      <section className="py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
            
            {/* Left Column - Text Content */}
            <div className="flex-1 lg:flex-[2]">
              {/* Main Header */}
              <div className="mb-8">
                <h1 
                  className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
                  style={{ color: 'var(--primary-blue)' }}
                >
                  {t('content.brandSlogan')}
                </h1>
                
                {/* Greeting */}
                <p className="text-lg md:text-xl text-gray-800 mb-8 leading-relaxed">
                  {t('content.greeting')}
                </p>
              </div>

              {/* Content Paragraphs */}
              <div className="space-y-6 md:space-y-8">
                <p className="text-base md:text-lg text-gray-700 leading-relaxed break-keep">
                  {t.rich('content.p1', {
                    b: (chunks) => <strong className="font-bold text-gray-900">{chunks}</strong>
                  })}
                </p>

                <p className="text-base md:text-lg text-gray-700 leading-relaxed break-keep">
                  {t.rich('content.p2', {
                    b: (chunks) => <strong className="font-bold text-gray-900">{chunks}</strong>
                  })}
                </p>

                <p className="text-base md:text-lg text-gray-700 leading-relaxed break-keep">
                  {t.rich('content.p3', {
                    b: (chunks) => <strong className="font-bold text-gray-900">{chunks}</strong>
                  })}
                </p>

                <p className="text-base md:text-lg text-gray-700 leading-relaxed break-keep">
                  {t.rich('content.p4', {
                    b: (chunks) => <strong className="font-bold text-gray-900">{chunks}</strong>
                  })}
                </p>

                {/* Signature Section */}
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <p className="text-base md:text-lg text-gray-800 font-semibold mb-4">
                    {t('content.closing')}
                  </p>
                  
                  {/* Signature Block */}
                  <div className="flex flex-col sm:flex-row sm:items-end gap-4">
                    {/* Signature Placeholder */}
                    <div className="flex-1 max-w-xs">
                      <div className="text-2xl md:text-3xl font-bold text-gray-800" style={{ fontFamily: 'cursive' }}>
                        {t('content.signature')}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - CEO Photo */}
            <div className="w-full lg:w-64 xl:w-72 flex-shrink-0">
              <div className="relative">
                {/* Photo Container */}
                <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-xl">
                  <Image
                    src="/images/about/message/ceo.jpg"
                    alt={t('content.photoAlt')}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 288px"
                    priority
                  />
                  {/* Subtle gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent" />
                </div>
                
                {/* Photo Frame Effect */}
                <div className="absolute -inset-2 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg -z-10 opacity-30" />
                
                {/* CEO Name and Title - Below Photo */}
                <div className="mt-6 text-center">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                    {t('content.name')}
                  </h3>
                  <p 
                    className="text-base md:text-lg font-semibold"
                    style={{ color: 'var(--primary-blue-dark)' }}
                  >
                    {t('content.title')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
