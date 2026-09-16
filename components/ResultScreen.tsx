'use client';

import React from 'react';
import { ResultDetail, TestModeData, PrecisionConfig } from '@/types/test';

interface ResultScreenProps {
  testData: TestModeData;
  precisionConfig: PrecisionConfig;
  mbtiType: string;
  resultDetail: ResultDetail;
  onRestart: () => void;
  onShowToast: (msg: string) => void;
}

export const ResultScreen: React.FC<ResultScreenProps> = ({
  testData,
  precisionConfig,
  mbtiType,
  resultDetail,
  onRestart,
  onShowToast,
}) => {
  const handleShareKakao = () => {
    if (typeof window !== 'undefined' && navigator.share) {
      navigator
        .share({
          title: '연애 MBTI 테스트',
          text: `[${precisionConfig.title}] 나의 연애 유형: ${resultDetail.title} (${mbtiType})`,
          url: window.location.href,
        })
        .catch(() => {});
    } else {
      onShowToast('카카오톡 공유 기능은 카카오 SDK 연동 후 활성화됩니다 💬');
    }
  };

  const handleCopyLink = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard
        .writeText(window.location.href)
        .then(() => {
          onShowToast('결과 링크가 복사되었습니다 🔗');
        })
        .catch(() => {
          onShowToast('복사에 실패했어요. 다시 시도해 주세요.');
        });
    }
  };

  return (
    <div className="flex-1 flex flex-col justify-between py-4 animate-fade-in">
      <div>
        {/* Precision & Certification Badge */}
        <div className="text-center mb-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-extrabold text-[11px] rounded-full shadow-sm">
            <span>{precisionConfig.emoji}</span>
            <span>{precisionConfig.title} ({precisionConfig.count}문항) · {precisionConfig.accuracy}</span>
          </span>
        </div>

        {/* Header Result Summary */}
        <div className="text-center mt-2 mb-2">
          <div className="text-6xl mb-3 animate-bounce">{resultDetail.emoji}</div>
          <div className="text-xs font-bold text-purple-600 tracking-widest mb-1 uppercase">
            {testData.name} · {mbtiType}
          </div>
          <h2 className="text-2xl font-extrabold text-purple-900 leading-snug">
            {resultDetail.title}
          </h2>
        </div>

        {/* Result Detail Lines */}
        <div className="bg-white/90 backdrop-blur rounded-2xl p-5 my-4 shadow-md border border-pink-100">
          <div className="text-[11px] font-bold text-pink-600 mb-2 border-b border-pink-100 pb-1 flex items-center justify-between">
            <span>📋 유형별 핵심 성향 분석</span>
            <span className="text-gray-400 font-normal">정밀도: {precisionConfig.levelName}등급</span>
          </div>
          {resultDetail.lines.map((line, idx) => (
            <p key={idx} className="text-sm text-gray-700 leading-relaxed mb-2 last:mb-0">
              • {line}
            </p>
          ))}
        </div>

        {/* AdSense Banner Slot */}
        <div className="w-full h-24 bg-gray-100/80 border border-dashed border-gray-300 rounded-xl flex items-center justify-center mb-4">
          <span className="text-xs text-gray-400">Google AdSense 광고 영역 (300x100)</span>
        </div>

        {/* Coupang Partners Item Recommendation */}
        <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-2xl p-4 mb-4 shadow-sm">
          <p className="text-sm font-bold text-purple-800 mb-1">
            💝 {mbtiType} 유형을 위한 추천 연애 아이템
          </p>
          <p className="text-xs text-gray-500 mb-3">
            내 연애 매력을 200% 끌어올려 줄 맞춤 선물을 확인하세요
          </p>
          <a
            href="#"
            target="_blank"
            rel="noopener sponsored"
            className="block w-full text-center bg-purple-600 text-white font-bold py-3 rounded-xl shadow hover:bg-purple-700 active:scale-97 transition-all duration-200 cursor-pointer"
          >
            추천 아이템 보러가기 →
          </a>
          <p className="text-[10px] text-gray-400 mt-2 text-center">
            이 링크는 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받을 수 있습니다.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-3 mb-3">
          <button
            onClick={handleShareKakao}
            className="flex items-center justify-center gap-2 bg-yellow-300 hover:bg-yellow-400 text-gray-900 font-bold py-3 rounded-xl shadow active:scale-97 transition-all duration-200 cursor-pointer text-sm"
          >
            <span>💬</span> 카카오톡 공유
          </button>
          <button
            onClick={handleCopyLink}
            className="flex items-center justify-center gap-2 bg-white border border-purple-300 hover:border-purple-400 text-purple-700 font-bold py-3 rounded-xl shadow active:scale-97 transition-all duration-200 cursor-pointer text-sm"
          >
            <span>🔗</span> 링크 복사
          </button>
        </div>
      </div>

      <button
        onClick={onRestart}
        className="w-full text-center text-sm text-gray-500 hover:text-purple-700 py-3 mb-1 font-bold cursor-pointer transition underline underline-offset-4"
      >
        다른 테스트 또는 다른 정밀도로 다시하기 ↩
      </button>
    </div>
  );
};
