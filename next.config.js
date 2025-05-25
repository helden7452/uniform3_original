/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Note: i18n in next.config.js is only for Pages Router
  // For App Router, we use middleware and route groups
  i18n: {
    locales: ['ar-SA'],
    defaultLocale: 'ar-SA',
    localeDetection: false,
  },
  images: {
    domains: ['a5fi.com', 'www.a5fi.com'],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  optimizeCss: true,
  swcMinify: true,
  trailingSlash: false,
  experimental: {
    optimizeFonts: true,
    optimizePackageImports: ['next', 'react', 'react-dom'],
    optimizeServerReact: true,
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(self), interest-cohort=()',
          },
        ],
      },
    ];
  },
  compress: true,
  output: 'standalone',
};

module.exports = nextConfig; 