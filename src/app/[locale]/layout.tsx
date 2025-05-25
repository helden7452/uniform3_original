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
  openGraph: {
    title: 'خبراء الزي الموحد في المملكة العربية السعودية | جودة واحترافية',
    description: 'خبراء في توفير الزي الموحد للشركات والمؤسسات في المملكة العربية السعودية بأعلى معايير الجودة والاحترافية',
    url: 'https://a5fi.com',
    siteName: 'خبراء الزي الموحد',
    locale: 'ar_SA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'خبراء الزي الموحد في المملكة العربية السعودية | جودة واحترافية',
    description: 'خبراء في توفير الزي الموحد للشركات والمؤسسات في المملكة العربية السعودية بأعلى معايير الجودة والاحترافية',
  },
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
      </body>
    </html>
  );
} 