import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  // 이미지 최적화 설정
  images: {
    formats: ['image/webp', 'image/avif'],
  },
  
  // 성능 최적화
  compress: true,
  
  // SEO를 위한 trailing slash 설정
  trailingSlash: false,
  
  // 빌드 최적화
  swcMinify: true,
  
  // 실험적 기능 (필요에 따라 활성화)
  experimental: {
    optimizePackageImports: ['@heroicons/react'],
  },
};

export default withNextIntl(nextConfig);

