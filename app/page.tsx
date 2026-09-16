'use client';

import React, { useState } from 'react';
import { ScreenState, TestModeKey, Scores, PrecisionTier, Question } from '@/types/test';
import { TEST_DATA, getQuestionsByTier } from '@/data/tests';
import { PRECISION_CONFIGS } from '@/data/precision';
import { calculateMBTI, createInitialScores } from '@/lib/mbtiCalculator';
import { MainScreen } from '@/components/MainScreen';
import { QuestionScreen } from '@/components/QuestionScreen';
import { LoadingScreen } from '@/components/LoadingScreen';
import { ResultScreen } from '@/components/ResultScreen';
import { Toast } from '@/components/Toast';

export default function Home() {
  const [screenState, setScreenState] = useState<ScreenState>('main');
  const [selectedMode, setSelectedMode] = useState<TestModeKey>('A');
  const [selectedTier, setSelectedTier] = useState<PrecisionTier>('standard');
  const [activeQuestions, setActiveQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scores, setScores] = useState<Scores>(createInitialScores());
  const [resultType, setResultType] = useState<string>('');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2200);
  };

  const handleStartTest = (modeKey: TestModeKey) => {
    setSelectedMode(modeKey);
    const questions = getQuestionsByTier(modeKey, selectedTier);
    setActiveQuestions(questions);
    setCurrentIndex(0);
    setScores(createInitialScores());
    setScreenState('question');
  };

  const handleSelectOption = (optionIndex: 0 | 1) => {
    const currentQuestion = activeQuestions[currentIndex];
    const chosenOption = optionIndex === 0 ? currentQuestion.a : currentQuestion.b;

    const newScores = {
      ...scores,
      [chosenOption.type]: scores[chosenOption.type] + 1,
    };
    setScores(newScores);

    const nextIndex = currentIndex + 1;
    if (nextIndex >= activeQuestions.length) {
      // Finished all questions for this precision tier -> Run 3-second loading animation
      setScreenState('loading');
      setTimeout(() => {
        const finalType = calculateMBTI(newScores);
        setResultType(finalType);
        setScreenState('result');
      }, 3000);
    } else {
      setCurrentIndex(nextIndex);
    }
  };

  const handleBackToMain = () => {
    setScreenState('main');
  };

  const currentTestData = TEST_DATA[selectedMode];
  const currentPrecisionConfig = PRECISION_CONFIGS[selectedTier];

  return (
    <>
      {screenState === 'main' && (
        <MainScreen
          selectedTier={selectedTier}
          onSelectTier={setSelectedTier}
          onStartTest={handleStartTest}
        />
      )}

      {screenState === 'question' && (
        <QuestionScreen
          testTitle={currentTestData.name}
          testEmoji={currentTestData.emoji}
          precisionConfig={currentPrecisionConfig}
          questions={activeQuestions}
          currentIndex={currentIndex}
          onSelectOption={handleSelectOption}
          onBackToMain={handleBackToMain}
        />
      )}

      {screenState === 'loading' && (
        <LoadingScreen precisionConfig={currentPrecisionConfig} />
      )}

      {screenState === 'result' && (
        <ResultScreen
          testData={currentTestData}
          precisionConfig={currentPrecisionConfig}
          mbtiType={resultType}
          resultDetail={currentTestData.results[resultType]}
          onRestart={handleBackToMain}
          onShowToast={showToast}
        />
      )}

      <Toast message={toastMessage} />
    </>
  );
}
