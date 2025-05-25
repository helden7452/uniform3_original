/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['ar-SA'],
    defaultLocale: 'ar-SA',
    localeDetection: false,
  },
  images: {
    domains: [],
  },
};

module.exports = nextConfig; 