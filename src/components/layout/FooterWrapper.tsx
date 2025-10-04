'use client';

import { usePathname } from 'next/navigation';
import Footer from './Footer';

export default function FooterWrapper() {
  const pathname = usePathname();
  
  // 메인 홈("/")일 때만 snap-align-end 적용
  const isHomepage = pathname === '/';

  return (
    <footer className={isHomepage ? 'snap-align-end' : ''}>
      <Footer />
    </footer>
  );
}

