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
import { usePathname, useRouter } from 'next/navigation';

interface AdminLayoutProps {
  children: ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  const pathname = usePathname();
  const router = useRouter();
  const isLoginPage = pathname === '/admin/login';

  const handleLogout = async () => {
    try {
      const response = await fetch('/api/admin/logout', {
        method: 'POST',
        credentials: 'include'
      });

      if (response.ok) {
        router.push('/admin/login');
        router.refresh();
      }
    } catch (error) {
      console.error('로그아웃 오류:', error);
      // 에러가 있어도 로그인 페이지로 이동
      router.push('/admin/login');
    }
  };

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
            </nav>

            {/* 로그아웃 버튼 */}
            <div className="flex items-center space-x-4">
              <button
                onClick={handleLogout}
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
