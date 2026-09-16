'use client';

import React from 'react';
import { Question, PrecisionConfig } from '@/types/test';

interface QuestionScreenProps {
  testTitle: string;
  testEmoji: string;
  precisionConfig: PrecisionConfig;
  questions: Question[];
  currentIndex: number;
  onSelectOption: (optionIndex: 0 | 1) => void;
  onBackToMain: () => void;
}

export const QuestionScreen: React.FC<QuestionScreenProps> = ({
  testTitle,
  testEmoji,
  precisionConfig,
  questions,
  currentIndex,
  onSelectOption,
  onBackToMain,
}) => {
  const currentQuestion = questions[currentIndex];
  const totalQuestions = questions.length;
  const progressPercent = Math.round(((currentIndex + 1) / totalQuestions) * 100);

  if (!currentQuestion) return null;

  return (
    <div className="flex-1 flex flex-col justify-between py-3 animate-fade-in">
      {/* Top Navigation & Status */}
      <div>
        <div className="flex items-center justify-between mb-3 text-xs">
          <button
            onClick={onBackToMain}
            className="text-purple-600 font-bold px-1 hover:text-purple-800 transition flex items-center gap-1 cursor-pointer"
          >
            ← 나가기
          </button>
          <div className="flex items-center gap-1.5">
            <span className="bg-purple-100 text-purple-700 text-[10px] font-bold px-2 py-0.5 rounded-full">
              {precisionConfig.badge}
            </span>
            <span className="font-extrabold text-purple-700">
              {currentIndex + 1} / {totalQuestions}
            </span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-2.5 bg-white/70 rounded-full overflow-hidden shadow-inner mb-6">
          <div
            className="h-full bg-gradient-to-r from-pink-400 via-purple-500 to-purple-600 rounded-full transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* Question Card */}
      <div className="flex-1 flex flex-col justify-center my-auto px-1">
        <div className="text-center mb-8">
          <div className="text-4xl mb-3">{testEmoji}</div>
          <span className="text-[11px] font-bold text-pink-600 uppercase tracking-wider mb-1 block">
            Q{currentIndex + 1}. ({testTitle})
          </span>
          <h2 className="text-xl font-extrabold text-gray-800 leading-relaxed px-1">
            {currentQuestion.q}
          </h2>
        </div>

        {/* Options */}
        <div className="space-y-3.5">
          <button
            onClick={() => onSelectOption(0)}
            className="w-full bg-white/95 backdrop-blur rounded-2xl p-5 shadow-md border-2 border-pink-200 text-left font-semibold text-gray-800 hover:border-pink-400 hover:bg-pink-50/40 active:scale-97 transition-all duration-200 cursor-pointer"
          >
            <span className="inline-block w-6 text-pink-600 font-extrabold">A.</span>
            {currentQuestion.a.text}
          </button>
          <button
            onClick={() => onSelectOption(1)}
            className="w-full bg-white/95 backdrop-blur rounded-2xl p-5 shadow-md border-2 border-purple-200 text-left font-semibold text-gray-800 hover:border-purple-400 hover:bg-purple-50/40 active:scale-97 transition-all duration-200 cursor-pointer"
          >
            <span className="inline-block w-6 text-purple-600 font-extrabold">B.</span>
            {currentQuestion.b.text}
          </button>
        </div>
      </div>

      <div className="text-center text-[10px] text-gray-400 mt-6">
        남은 질문: {totalQuestions - (currentIndex + 1)}개 (조금만 더 힘내세요! 🚀)
      </div>
    </div>
  );
};
