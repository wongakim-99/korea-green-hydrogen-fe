import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '연락처 - Korea Green Hydrogen',
  description: 'Korea Green Hydrogen에 문의사항이나 상담 요청을 보내주세요. 전문가가 신속하게 답변드리겠습니다.',
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
