export default function StructuredData() {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Korea Green Hydrogen",
    "alternateName": "KGH",
    "url": "https://koreagreenhyd.com",
    "logo": "https://koreagreenhyd.com/logo.svg",
    "description": "대한민국의 친환경 수소 에너지 기술을 선도하는 Korea Green Hydrogen입니다. 지속가능한 미래를 위한 혁신적인 수소 솔루션을 제공합니다.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "테헤란로 123",
      "addressLocality": "강남구",
      "addressRegion": "서울특별시",
      "addressCountry": "KR"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+82-2-1234-5678",
      "contactType": "customer service",
      "areaServed": "KR",
      "availableLanguage": "Korean"
    },
    "sameAs": [
      "https://www.facebook.com/koreagreenhyd",
      "https://www.linkedin.com/company/korea-green-hydrogen"
    ],
    "foundingDate": "2020-03-01",
    "numberOfEmployees": "150",
    "industry": "Renewable Energy",
    "keywords": "수소에너지, 친환경, 그린수소, 재생에너지, 지속가능"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(organizationData),
      }}
    />
  );
}
