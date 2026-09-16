'use client';

import React from 'react';
import Link from 'next/link';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-12 pt-6 pb-8 border-t border-pink-200/60 text-center text-xs text-gray-400">
      <div className="flex justify-center items-center gap-4 mb-3">
        <Link href="/privacy" className="hover:text-purple-600 transition underline underline-offset-2">
          개인정보처리방침
        </Link>
        <span>·</span>
        <Link href="/terms" className="hover:text-purple-600 transition underline underline-offset-2">
          이용약관
        </Link>
        <span>·</span>
        <Link href="/guide" className="hover:text-purple-600 transition underline underline-offset-2">
          MBTI 연애 백과
        </Link>
      </div>

      <p className="mb-1 text-[11px] text-gray-400 leading-relaxed">
        본 테스트는 재미와 심리 분석을 위한 엔터테인먼트 서비스입니다.
      </p>
      <p className="mb-2 text-[11px] text-gray-400">
        제휴 및 서비스 문의: <a href="mailto:contact@lovatest.com" className="text-purple-500 hover:underline">contact@lovatest.com</a>
      </p>
      <p className="text-[10px] text-gray-300">
        © {new Date().getFullYear()} 연애 MBTI 테스트 연구소. All rights reserved.
      </p>
    </footer>
  );
};
