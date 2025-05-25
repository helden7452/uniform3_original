import Link from 'next/link';
import { Locale, getDictionary } from '@/utils/i18n';

export default async function Footer({ locale }: { locale: Locale }) {
  const dict = await getDictionary(locale);
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">خبراء الزي الموحد</h3>
            <p className="mb-4">
              نقدم حلولاً متكاملة للزي الموحد للقطاع الصحي، الأمن، الضيافة والشركات في المملكة العربية السعودية
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">روابط سريعة</h3>
            <ul className="space-y-2">
              <li>
                <Link href={`/${locale}/about`} className="hover:text-gray-300">
                  {dict.common.navigation.about}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/contact`} className="hover:text-gray-300">
                  {dict.common.navigation.contact}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/blog`} className="hover:text-gray-300">
                  {dict.common.navigation.blog}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">اتصل بنا</h3>
            <p className="mb-2">الرياض، المملكة العربية السعودية</p>
            <p className="mb-2">هاتف: 0000 000 50 966+</p>
            <p className="mb-2">البريد الإلكتروني: info@a5fi.com</p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-4 text-center">
          <p>
            &copy; {currentYear} خبراء الزي الموحد. {dict.common.footer.rights}
          </p>
          <div className="mt-2">
            <Link href="/privacy" className="text-gray-400 hover:text-white mx-2">
              {dict.common.footer.privacyPolicy}
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-white mx-2">
              {dict.common.footer.terms}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
} 