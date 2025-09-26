'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('KOR');

  const navItems = [
    { href: '/', label: '홈' },
    { href: '/about', label: '회사소개' },
    { href: '/services', label: '서비스' },
    { href: '/contact', label: '연락처' },
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* 로고 */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-3">
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
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-sky-600 px-3 py-2 text-sm font-bold transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* 언어 선택 + 모바일 메뉴 */}
          <div className="flex items-center space-x-4">
            {/* 언어 선택 */}
            <div className="flex items-center space-x-1 text-sm">
              <button
                onClick={() => setCurrentLanguage('KOR')}
                className={`px-2 py-1 transition-colors ${
                  currentLanguage === 'KOR'
                    ? 'text-sky-600 font-semibold'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                KOR
              </button>
              <span className="text-gray-300">|</span>
              <button
                onClick={() => setCurrentLanguage('ENG')}
                className={`px-2 py-1 transition-colors ${
                  currentLanguage === 'ENG'
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
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-gray-700 hover:text-sky-600 block px-3 py-2 text-base font-bold transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              
              {/* 모바일 언어 선택 */}
              <div className="border-t border-gray-200 pt-3 mt-3">
                <div className="flex items-center justify-center space-x-1 text-sm">
                  <button
                    onClick={() => setCurrentLanguage('KOR')}
                    className={`px-3 py-2 transition-colors ${
                      currentLanguage === 'KOR'
                        ? 'text-sky-600 font-semibold'
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    KOR
                  </button>
                  <span className="text-gray-300">|</span>
                  <button
                    onClick={() => setCurrentLanguage('ENG')}
                    className={`px-3 py-2 transition-colors ${
                      currentLanguage === 'ENG'
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
