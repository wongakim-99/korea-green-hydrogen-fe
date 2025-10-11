import { ReactNode } from 'react';
import './globals.css';

type Props = {
  children: ReactNode;
};

// Root Layout - 모든 페이지의 기본 레이아웃
export default function RootLayout({ children }: Props) {
  return (
    <html lang="ko">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
