import type { Metadata } from 'next';
import './globals.css';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: '연애 MBTI 테스트 | 나의 연애 유형은?',
  description: '조선시대 연애 신분부터 카톡 플러팅 유형, 연애 흑역사까지! 3가지 테스트로 알아보는 나의 진짜 연애 성향.',
  openGraph: {
    title: '연애 MBTI 테스트 | 나의 연애 유형은?',
    description: '조선시대 연애 신분부터 카톡 플러팅 유형, 연애 흑역사까지! 3가지 테스트로 알아보는 나의 진짜 연애 성향.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="text-gray-800 antialiased selection:bg-pink-300 selection:text-pink-900">
        <div className="max-w-md mx-auto min-h-screen px-4 py-6 flex flex-col justify-between">
          <div className="flex-1 flex flex-col">
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}

