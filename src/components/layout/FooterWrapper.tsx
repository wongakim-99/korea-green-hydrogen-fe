'use client';

import { usePathname } from 'next/navigation';
import Footer from './Footer';

export default function FooterWrapper() {
  const pathname = usePathname();
  
  // 메인 홈("/ko", "/en" 등)일 때만 snap-align-end 적용
  const isHomepage = pathname.match(/^\/[a-z]{2}$/);

  return (
    <footer className={isHomepage ? 'snap-align-end' : ''}>
      <Footer />
    </footer>
  );
}

