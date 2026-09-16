'use client';

import React, { useEffect, useState } from 'react';
import { PrecisionConfig } from '@/types/test';

interface LoadingScreenProps {
  precisionConfig: PrecisionConfig;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ precisionConfig }) => {
  const [messageIndex, setMessageIndex] = useState(0);

  const messages = [
    `${precisionConfig.count}개 문항 정밀 심리 데이터 수집 중...`,
    `${precisionConfig.accuracy} 알고리즘 교차 검증 중...`,
    `최종 연애 MBTI 진단서 발행 중...`,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % messages.length);
    }, 1000);

    return () => clearInterval(interval);
  }, [messages.length]);

  return (
    <div className="flex-1 flex flex-col items-center justify-center text-center py-12 animate-fade-in">
      <div className="w-16 h-16 rounded-full border-4 border-pink-200 border-t-purple-600 animate-spin mb-6" />
      <div className="text-3xl mb-3 animate-pulse">💗</div>
      <div className="mb-2">
        <span className="text-[11px] font-extrabold bg-purple-100 text-purple-700 px-2.5 py-0.5 rounded-full">
          {precisionConfig.badge}
        </span>
      </div>
      <p className="font-bold text-base text-purple-900 h-8">
        {messages[messageIndex]}
      </p>
      <p className="text-xs text-gray-400 mt-2">
        잠시만 기다려 주세요 (약 3초 소요)
      </p>

      {/* Ad slot placeholder for interstitial ads */}
      <div className="mt-8 text-xs text-gray-400 border border-dashed border-gray-300 px-5 py-3 rounded-xl bg-white/50">
        [전면 광고 영역] 분석 결과를 불러오는 중입니다
      </div>
    </div>
  );
};
