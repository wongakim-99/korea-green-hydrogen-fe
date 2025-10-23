'use client';

import { useState, useEffect } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleLanguageChange = (nextLocale: string) => {
    // pathname에서 현재 locale을 제거하고 새로운 locale을 추가
    const currentPath = pathname.replace(`/${locale}`, '') || '/';
    const newPath = `/${nextLocale}${currentPath}`;
    router.replace(newPath);
  };

  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);

  // 마우스 이벤트 핸들러 함수들
  const handleMouseEnter = (itemHref: string, hasSubmenu: boolean) => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
    if (hasSubmenu) {
      setActiveDropdown(itemHref);
    }
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setActiveDropdown(null);
    }, 150); // 150ms 지연
    setHoverTimeout(timeout);
  };

  // 컴포넌트 언마운트 시 타이머 정리
  useEffect(() => {
    return () => {
      if (hoverTimeout) {
        clearTimeout(hoverTimeout);
      }
    };
  }, [hoverTimeout]);

  const t = useTranslations('Navigation');

  const navItems = [
    {
      href: '/',
      label: t('home') },
    { 
      href: '/about', 
      label: t('company'),
      submenu: [
        { href: '/about', label: t('companyOverview') },
        { href: '/about/ceo', label: t('ceoMessage') },
        { href: '/about/philosophy', label: t('philosophy') }
      ]
    },
    { 
      href: '/services', 
      label: t('business'),
      submenu: [
        { href: '/services/biogas', label: t('biogas') },
        { href: '/services/fertilizer', label: t('fertilizer') },
        { href: '/services/ccus', label: t('ccus') },
        { href: '/services/smart-farm', label: t('smartFarm') },
        { href: '/services/solar', label: t('solar') }
      ]
    },
    { 
      href: '/contact', 
      label: t('contact'),
      submenu: [
        { href: '/contact', label: t('location') },
        { href: '/contact/inquiry', label: t('inquiry') }
      ]
    },
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
          {/* 로고 */}
          <div className="flex-shrink-0">
            <Link href={`/${locale}`} className="flex items-center space-x-3">
              <Image
                src="/logo.svg"
                alt="Korea Green Hydrogen"
                width={240}
                height={72}
                priority
                className="h-14 w-auto max-w-none"
              />
            </Link>
          </div>

          {/* 데스크톱 네비게이션 */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <div 
                key={item.href}
                className="relative group"
                onMouseEnter={() => handleMouseEnter(item.href, !!item.submenu)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href={`/${locale}${item.href}`}
                  className="text-gray-700 hover:text-sky-600 px-3 py-2 text-sm font-bold transition-all duration-200 flex items-center transform hover:scale-105"
                >
                  {item.label}
                  {item.submenu && (
                    <svg 
                      className={`ml-1 w-4 h-4 transition-transform duration-200 ${
                        activeDropdown === item.href ? 'rotate-180' : ''
                      }`}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </Link>
                
                {/* 애니메이션이 적용된 드롭다운 메뉴 */}
                {item.submenu && activeDropdown === item.href && (
                  <div 
                    className="absolute top-full left-0 mt-0 w-48 bg-white shadow-xl border border-gray-200 rounded-lg py-2 z-50 animate-dropdown backdrop-blur-sm"
                  >
                    {item.submenu.map((subItem, index) => (
                      <Link
                        key={subItem.href}
                        href={`/${locale}${subItem.href}`}
                        className="block px-4 py-3 text-sm font-medium text-gray-700 hover:bg-sky-50 hover:text-sky-600 transition-all duration-200 transform hover:translate-x-1"
                        style={{
                          animationDelay: `${index * 50}ms`
                        }}
                        onClick={() => {
                          setActiveDropdown(null);
                          if (hoverTimeout) {
                            clearTimeout(hoverTimeout);
                            setHoverTimeout(null);
                          }
                        }}
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* 언어 선택 + 모바일 메뉴 */}
          <div className="flex items-center space-x-4">
            {/* 언어 선택 */}
            <div className="flex items-center space-x-1 text-sm">
              <button
                onClick={() => handleLanguageChange('ko')}
                className={`px-2 py-1 transition-colors ${
                  locale === 'ko'
                    ? 'text-sky-600 font-semibold'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                KOR
              </button>
              <span className="text-gray-300">|</span>
              <button
                onClick={() => handleLanguageChange('en')}
                className={`px-2 py-1 transition-colors ${
                  locale === 'en'
                    ? 'text-sky-600 font-semibold'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                ENG
              </button>
            </div>

            {/* 모바일 메뉴 버튼 */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-sky-600 focus:outline-none focus:text-sky-600"
                aria-label="메뉴 열기"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* 모바일 메뉴 */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {navItems.map((item) => (
                <div key={item.href}>
                  <Link
                    href={`/${locale}${item.href}`}
                    className="text-gray-700 hover:text-sky-600 block px-3 py-2 text-base font-bold transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {item.submenu && (
                    <div className="pl-6 space-y-1">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.href}
                          href={`/${locale}${subItem.href}`}
                          className="text-gray-600 hover:text-sky-600 block px-3 py-1 text-sm transition-colors"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              {/* 모바일 언어 선택 */}
              <div className="border-t border-gray-200 pt-3 mt-3">
                <div className="flex items-center justify-center space-x-1 text-sm">
                  <button
                    onClick={() => handleLanguageChange('ko')}
                    className={`px-3 py-2 transition-colors ${
                      locale === 'ko'
                        ? 'text-sky-600 font-semibold'
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    KOR
                  </button>
                  <span className="text-gray-300">|</span>
                  <button
                    onClick={() => handleLanguageChange('en')}
                    className={`px-3 py-2 transition-colors ${
                      locale === 'en'
                        ? 'text-sky-600 font-semibold'
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    ENG
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        </div>
      </header>
  );
};

export default Header;
