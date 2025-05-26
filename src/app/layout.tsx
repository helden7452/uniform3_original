import '@/styles/globals.css';
import { Metadata } from 'next';
import { Tajawal } from 'next/font/google';
import Link from 'next/link';
import Image from 'next/image';
import AOSInitializer from '@/components/AOSInitializer';

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
    locale: 'ar_SA',
    type: 'website',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'خبراء الزي الموحد',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'خبراء الزي الموحد في المملكة العربية السعودية',
    description: 'خبراء في توفير الزي الموحد للشركات والمؤسسات في المملكة العربية السعودية',
    images: ['/images/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://www.uniformexperts.sa',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" className={`${tajawal.variable} scroll-smooth`}>
      <head>
        <link rel="icon" href="/images/favicon.ico" />
      </head>
      <body className="font-sans bg-gray-50">
        <header className="bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
          <div className="container mx-auto py-4 px-4">
            <nav className="flex flex-col md:flex-row justify-between items-center">
              <Link href="/" className="text-2xl font-bold text-primary hover:text-accent transition-colors duration-300 flex items-center">
                <div className="relative h-10 w-10 ml-2">
                  <Image 
                    src="/images/logo.png" 
                    alt="شعار خبراء الزي الموحد" 
                    fill 
                    sizes="40px"
                    className="object-contain"
                  />
                </div>
                <span>خبراء الزي الموحد</span>
              </Link>
              <ul className="flex space-x-reverse space-x-6 mt-4 md:mt-0">
                <li><Link href="/" className="hover:text-accent transition-colors duration-300 hover:border-b-2 hover:border-accent pb-1">الرئيسية</Link></li>
                <li><Link href="/blog" className="hover:text-accent transition-colors duration-300 hover:border-b-2 hover:border-accent pb-1">المدونة</Link></li>
                <li><Link href="/about" className="hover:text-accent transition-colors duration-300 hover:border-b-2 hover:border-accent pb-1">من نحن</Link></li>
                <li><Link href="/contact" className="hover:text-accent transition-colors duration-300 hover:border-b-2 hover:border-accent pb-1">اتصل بنا</Link></li>
              </ul>
            </nav>
          </div>
        </header>
        <div className="min-h-screen pt-20">{children}</div>
        <footer className="bg-primary text-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">خبراء الزي الموحد</h3>
                <p className="text-gray-200">متخصصون في تصميم وتصنيع وتوريد الزي الموحد لمختلف القطاعات في المملكة العربية السعودية</p>
                <div className="flex gap-4 mt-4">
                  <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors duration-300">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg>
                  </a>
                  <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors duration-300">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg>
                  </a>
                  <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors duration-300">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path></svg>
                  </a>
                  <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors duration-300">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"></path></svg>
                  </a>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">روابط سريعة</h3>
                <ul>
                  <li className="mb-2"><Link href="/" className="hover:text-accent transition-colors duration-300">الرئيسية</Link></li>
                  <li className="mb-2"><Link href="/blog" className="hover:text-accent transition-colors duration-300">المدونة</Link></li>
                  <li className="mb-2"><Link href="/about" className="hover:text-accent transition-colors duration-300">من نحن</Link></li>
                  <li className="mb-2"><Link href="/contact" className="hover:text-accent transition-colors duration-300">اتصل بنا</Link></li>
                  <li className="mb-2"><Link href="/privacy" className="hover:text-accent transition-colors duration-300">سياسة الخصوصية</Link></li>
                  <li className="mb-2"><Link href="/terms" className="hover:text-accent transition-colors duration-300">الشروط والأحكام</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">تواصل معنا</h3>
                <p className="mb-2 flex items-center">
                  <svg className="w-5 h-5 inline ml-2" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4h-16c-1.1 0-1.99.9-1.99 2l-.01 12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-12c0-1.1-.9-2-2-2zm-.4 4.25l-7.07 4.42c-.32.2-.74.2-1.06 0l-7.07-4.42c-.25-.16-.4-.43-.4-.72 0-.67.73-1.07 1.3-.72l6.93 4.33 6.93-4.33c.57-.35 1.3.05 1.3.72 0 .29-.15.56-.4.72z"></path></svg>
                  <span>info@uniformexperts.sa</span>
                </p>
                <p className="mb-2 flex items-center">
                  <svg className="w-5 h-5 inline ml-2" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1v3.49c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"></path></svg>
                  <span>+966-12-345-6789</span>
                </p>
                <p className="flex items-center">
                  <svg className="w-5 h-5 inline ml-2" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2c-4.2 0-8 3.22-8 8.2 0 3.32 2.67 7.25 8 11.8 5.33-4.55 8-8.48 8-11.8 0-4.98-3.8-8.2-8-8.2zm0 11c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"></path></svg>
                  <span>الرياض، المملكة العربية السعودية</span>
                </p>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-600 text-center">
              <p>© {new Date().getFullYear()} خبراء الزي الموحد. جميع الحقوق محفوظة</p>
            </div>
          </div>
        </footer>
        <AOSInitializer />
      </body>
    </html>
  );
} 