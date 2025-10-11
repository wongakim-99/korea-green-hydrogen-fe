/**
 * 관리자 레이아웃
 * 
 * 관리자 페이지들의 공통 레이아웃
 * - 다국어 지원 없음 (한국어만)
 * - 간단한 디자인
 * - 반응형 지원
 */

'use client';

import { ReactNode } from 'react';
import { usePathname } from 'next/navigation';

interface AdminLayoutProps {
  children: ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  const pathname = usePathname();
  const isLoginPage = pathname === '/admin/login';

  // 로그인 페이지에서는 네비게이션 없이 children만 렌더링
  if (isLoginPage) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 관리자 헤더 */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* 로고/제목 */}
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-gray-900">
                KGH 관리자
              </h1>
            </div>

            {/* 네비게이션 */}
            <nav className="hidden md:flex space-x-8">
              <a
                href="/admin/dashboard"
                className="text-gray-700 hover:text-sky-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                대시보드
              </a>
              <a
                href="/admin/inquiries"
                className="text-gray-700 hover:text-sky-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                문의 관리
              </a>
            </nav>

            {/* 로그아웃 버튼 */}
            <div className="flex items-center space-x-4">
              <button
                onClick={() => {
                  // TODO: 로그아웃 로직 구현
                  alert('로그아웃 기능은 추후 구현 예정입니다.');
                }}
                className="text-gray-700 hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                로그아웃
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* 메인 컨텐츠 */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {children}
      </main>
    </div>
  );
}
