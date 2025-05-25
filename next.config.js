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
  },
};

module.exports = nextConfig; 