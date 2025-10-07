import type { Metadata } from "next";
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import "@fontsource/pretendard";
import "../globals.css";
import Header from "@/components/layout/Header";
import FooterWrapper from "@/components/layout/FooterWrapper";
import StructuredData from "@/components/StructuredData";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: "Korea Green Hydrogen - 친환경 수소 에너지 솔루션",
  description: "대한민국의 친환경 수소 에너지 기술을 선도하는 Korea Green Hydrogen입니다. 지속가능한 미래를 위한 혁신적인 수소 솔루션을 제공합니다.",
  keywords: "수소에너지, 친환경, 그린수소, 재생에너지, 지속가능",
  openGraph: {
    title: "Korea Green Hydrogen",
    description: "친환경 수소 에너지 솔루션 전문기업",
    type: "website",
    locale: "ko_KR",
    images: [
      {
        url: "/logo.svg",
        width: 200,
        height: 60,
        alt: "Korea Green Hydrogen Logo",
      },
    ],
  },
  icons: {
    icon: "/icon.svg",
  },
};

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: {locale: string};
}) {
  const { locale } = params;
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages({locale});

  return (
    <html lang={locale}>
      <head>
        <StructuredData />
      </head>
      <body className="font-pretendard antialiased min-h-screen flex flex-col">
        <NextIntlClientProvider messages={messages} locale={locale} timeZone="Asia/Seoul">
          <ScrollToTop />
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <FooterWrapper />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
