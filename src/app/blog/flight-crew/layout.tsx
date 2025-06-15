import { Metadata } from 'next';
import { generateSafeMetadata } from '@/components/SafeMetadata';

export const metadata: Metadata = generateSafeMetadata({
  title: 'دليل شامل لأزياء طاقم الطيران | خبراء الزي الموحد',
  description: 'دليل متكامل لأزياء طاقم الطيران في المملكة العربية السعودية - معايير الجودة، التصميم، والسلامة لطياري الطائرات ومضيفي الطيران',
  keywords: 'أزياء طاقم الطيران، زي الطيارين، زي مضيفي الطيران، معايير السلامة، الطيران السعودي',
  openGraph: {
    title: 'دليل شامل لأزياء طاقم الطيران | خبراء الزي الموحد',
    description: 'دليل متكامل لأزياء طاقم الطيران في المملكة العربية السعودية',
    images: ['/images/aviation_uniforms/professional_crew_uniforms.jpg'],
  },
});

export default function FlightCrewLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 