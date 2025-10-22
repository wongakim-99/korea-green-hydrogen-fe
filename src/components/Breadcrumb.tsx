'use client';

import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  colorClass?: string;
}

export default function Breadcrumb({ items, colorClass = 'sky-600' }: BreadcrumbProps) {
  const locale = useLocale();
  const t = useTranslations('Navigation');

  return (
    <nav className="bg-gray-50 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-2 text-base text-gray-700">
          <Link href={`/${locale}`} className={`hover:text-${colorClass} transition-colors`}>
            {t('home')}
          </Link>
          {items.map((item, index) => (
            <div key={index} className="flex items-center space-x-2">
              <span className="text-gray-400">/</span>
              {item.href ? (
                <Link 
                  href={`/${locale}${item.href}`} 
                  className={`hover:text-${colorClass} transition-colors`}
                >
                  {item.label}
                </Link>
              ) : (
                <span className={`text-${colorClass} font-bold`}>{item.label}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}

