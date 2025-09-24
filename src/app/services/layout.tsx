import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '서비스 - Korea Green Hydrogen',
  description: 'Korea Green Hydrogen가 제공하는 바이오가스 생산, 비료화, CCUS, Smart Farm 통합 솔루션을 소개합니다.',
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
