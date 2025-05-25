import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'مدونة الزي الموحد | نصائح واتجاهات لصناعة اليونيفورم في السعودية',
  description: 'استكشف مقالاتنا المتخصصة في مجال الزي الموحد والتي تقدم نصائح وإرشادات حول اختيار وتصميم اليونيفورم المناسب لمختلف القطاعات في المملكة العربية السعودية',
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
    </>
  );
} 