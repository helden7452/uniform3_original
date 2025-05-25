import '@/styles/globals.css';
import { Metadata } from 'next';
import { Tajawal } from 'next/font/google';
import Script from 'next/script';
import { locales, Locale } from '@/utils/i18n';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const tajawal = Tajawal({
  subsets: ['arabic'],
  weight: ['400', '500', '700', '800'],
  variable: '--font-tajawal',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://a5fi.com'),
  title: 'خبراء الزي الموحد في المملكة العربية السعودية | جودة واحترافية',
  description: 'خبراء في توفير الزي الموحد للشركات والمؤسسات في المملكة العربية السعودية بأعلى معايير الجودة والاحترافية. نقدم حلولاً متكاملة للزي الموحد للقطاع الصحي، الأمن، الضيافة والشركات.',
  keywords: ['زي موحد', 'يونيفورم', 'زي شركات', 'زي طبي', 'زي أمن', 'زي فنادق', 'زي موحد في السعودية'],
  applicationName: 'خبراء الزي الموحد',
  authors: [{ name: 'خبراء الزي الموحد', url: 'https://a5fi.com' }],
  generator: 'Next.js',
  referrer: 'origin-when-cross-origin',
  creator: 'خبراء الزي الموحد',
  publisher: 'خبراء الزي الموحد',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://a5fi.com',
    languages: {
      'ar-SA': 'https://a5fi.com',
    },
  },
  openGraph: {
    title: 'خبراء الزي الموحد في المملكة العربية السعودية | جودة واحترافية',
    description: 'خبراء في توفير الزي الموحد للشركات والمؤسسات في المملكة العربية السعودية بأعلى معايير الجودة والاحترافية',
    url: 'https://a5fi.com',
    siteName: 'خبراء الزي الموحد',
    locale: 'ar_SA',
    type: 'website',
    images: [
      {
        url: 'https://a5fi.com/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'خبراء الزي الموحد في المملكة العربية السعودية',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'خبراء الزي الموحد في المملكة العربية السعودية | جودة واحترافية',
    description: 'خبراء في توفير الزي الموحد للشركات والمؤسسات في المملكة العربية السعودية بأعلى معايير الجودة والاحترافية',
    images: ['https://a5fi.com/images/twitter-image.jpg'],
    creator: '@a5fi',
    site: '@a5fi',
  },
  verification: {
    google: 'verification_token',
    yandex: 'verification_token',
    yahoo: 'verification_token',
    other: {
      me: ['mailto:info@a5fi.com'],
    },
  },
  category: 'uniform services',
};

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: Locale };
}) {
  return (
    <html lang={params.locale} dir="rtl" className={tajawal.variable}>
      <body className="min-h-screen flex flex-col">
        <Header locale={params.locale} />
        <div className="flex-grow">
          {children}
        </div>
        <Footer locale={params.locale} />
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
          `}
        </Script>
        <Script id="schema-organization" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "خبراء الزي الموحد",
              "url": "https://a5fi.com",
              "logo": "https://a5fi.com/images/logo.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+966-50-000-0000",
                "contactType": "customer service",
                "availableLanguage": ["Arabic"]
              },
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "الرياض",
                "addressRegion": "الرياض",
                "addressCountry": "SA"
              },
              "sameAs": [
                "https://facebook.com/a5fi",
                "https://twitter.com/a5fi",
                "https://instagram.com/a5fi",
                "https://linkedin.com/company/a5fi"
              ]
            }
          `}
        </Script>
      </body>
    </html>
  );
} 