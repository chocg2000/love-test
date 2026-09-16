'use client';

import React from 'react';
import { TestModeKey, PrecisionTier } from '@/types/test';
import { PRECISION_CONFIGS } from '@/data/precision';

interface MainScreenProps {
  selectedTier: PrecisionTier;
  onSelectTier: (tier: PrecisionTier) => void;
  onStartTest: (modeKey: TestModeKey) => void;
}

export const MainScreen: React.FC<MainScreenProps> = ({
  selectedTier,
  onSelectTier,
  onStartTest,
}) => {
  const currentConfig = PRECISION_CONFIGS[selectedTier];

  return (
    <div className="flex-1 flex flex-col justify-between py-4 animate-fade-in">
      <div className="text-center mt-2 mb-4">
        <div className="text-5xl mb-2 animate-pulse">💘</div>
        <h1 className="text-2xl font-extrabold text-purple-900 leading-snug">
          나의 진짜<br />
          <span className="text-pink-600">연애 MBTI</span>는 무엇일까?
        </h1>
        <p className="text-xs text-gray-500 mt-2">
          3가지 흥미로운 테마로 분석하는 리얼 연애 심리 💌
        </p>
      </div>

      {/* ========================================================
          1. 정밀도 레벨 선택기 (하:12문항 / 중:24문항 / 상:36문항 / 최상:48문항)
         ======================================================== */}
      <div className="bg-white/90 backdrop-blur rounded-2xl p-4 shadow-md border border-purple-100 mb-5">
        <div className="flex items-center justify-between mb-2.5">
          <span className="text-xs font-bold text-purple-900 flex items-center gap-1">
            <span>⚙️</span> 정밀도 레벨 선택
          </span>
          <span className="text-[11px] font-semibold text-pink-600 bg-pink-50 px-2 py-0.5 rounded-full border border-pink-100">
            {currentConfig.accuracy} ({currentConfig.time})
          </span>
        </div>

        <div className="grid grid-cols-4 gap-1.5">
          {(Object.keys(PRECISION_CONFIGS) as PrecisionTier[]).map((tierKey) => {
            const cfg = PRECISION_CONFIGS[tierKey];
            const isSelected = selectedTier === tierKey;

            return (
              <button
                key={tierKey}
                onClick={() => onSelectTier(tierKey)}
                className={`py-2.5 px-1 rounded-xl text-center transition-all duration-200 cursor-pointer border ${
                  isSelected
                    ? 'bg-gradient-to-b from-purple-600 to-pink-600 text-white font-extrabold border-purple-600 shadow-md scale-102'
                    : 'bg-gray-50/80 hover:bg-white text-gray-600 border-gray-200/80 font-medium'
                }`}
              >
                <div className="text-base mb-0.5">{cfg.emoji}</div>
                <div className="text-[11px] leading-tight">{cfg.levelName} ({cfg.count}문항)</div>
                <div className={`text-[9px] mt-0.5 ${isSelected ? 'text-pink-100' : 'text-gray-400'}`}>
                  {cfg.time}
                </div>
              </button>
            );
          })}
        </div>

        <p className="text-[10px] text-gray-400 text-center mt-2.5">
          💡 {currentConfig.title}: 축당 {currentConfig.perAxis}문항씩 균형 있게 분석합니다.
        </p>
      </div>

      {/* ========================================================
          2. 테스트 모드 선택 카드
         ======================================================== */}
      <div className="space-y-3.5">
        <button
          onClick={() => onStartTest('A')}
          className="w-full text-left bg-white/85 backdrop-blur rounded-2xl p-4.5 shadow-md border border-pink-100 hover:shadow-lg hover:border-pink-300 active:scale-97 transition-all duration-200 cursor-pointer group"
        >
          <div className="flex items-center gap-3.5">
            <div className="text-3xl group-hover:scale-110 transition">👑</div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <span className="font-bold text-base text-purple-900">
                  조선시대 내 연애 신분 테스트
                </span>
                <span className="text-[10px] bg-purple-100 text-purple-700 font-bold px-2 py-0.5 rounded-full">
                  {currentConfig.count}문항
                </span>
              </div>
              <div className="text-xs text-gray-500 mt-0.5">궐 안에서 나는 어떤 신분의 로맨스를?</div>
            </div>
          </div>
        </button>

        <button
          onClick={() => onStartTest('B')}
          className="w-full text-left bg-white/85 backdrop-blur rounded-2xl p-4.5 shadow-md border border-pink-100 hover:shadow-lg hover:border-pink-300 active:scale-97 transition-all duration-200 cursor-pointer group"
        >
          <div className="flex items-center gap-3.5">
            <div className="text-3xl group-hover:scale-110 transition">💬</div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <span className="font-bold text-base text-purple-900">
                  소개팅 카톡 플러팅 유형 테스트
                </span>
                <span className="text-[10px] bg-purple-100 text-purple-700 font-bold px-2 py-0.5 rounded-full">
                  {currentConfig.count}문항
                </span>
              </div>
              <div className="text-xs text-gray-500 mt-0.5">나의 카톡 답장, 밀당 스타일은?</div>
            </div>
          </div>
        </button>

        <button
          onClick={() => onStartTest('C')}
          className="w-full text-left bg-white/85 backdrop-blur rounded-2xl p-4.5 shadow-md border border-pink-100 hover:shadow-lg hover:border-pink-300 active:scale-97 transition-all duration-200 cursor-pointer group"
        >
          <div className="flex items-center gap-3.5">
            <div className="text-3xl group-hover:scale-110 transition">🤦‍♂️</div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <span className="font-bold text-base text-purple-900">
                  나의 연애 흑역사 유형 테스트
                </span>
                <span className="text-[10px] bg-purple-100 text-purple-700 font-bold px-2 py-0.5 rounded-full">
                  {currentConfig.count}문항
                </span>
              </div>
              <div className="text-xs text-gray-500 mt-0.5">이불킥 각! 나만의 흑역사 유형은?</div>
            </div>
          </div>
        </button>
      </div>

      {/* 3. 텍스트 백과 가이드 링크 */}
      <div className="mt-5">
        <a
          href="/guide"
          className="block w-full text-center bg-white/70 hover:bg-white border border-purple-200 text-purple-700 font-bold text-xs py-3 rounded-xl shadow-sm transition"
        >
          📖 16가지 MBTI 연애 유형 백과사전 읽어보기 →
        </a>
      </div>
    </div>
  );
};
