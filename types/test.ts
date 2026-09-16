export type TestModeKey = 'A' | 'B' | 'C';

export type MBTIElement = 'E' | 'I' | 'S' | 'N' | 'T' | 'F' | 'J' | 'P';

export type PrecisionTier = 'speed' | 'standard' | 'deep' | 'master';

export interface PrecisionConfig {
  id: PrecisionTier;
  levelName: string; // 하, 중, 상, 최상
  title: string;     // 초간단, 표준, 정밀, 마스터
  emoji: string;
  count: number;     // 12, 24, 36, 48
  perAxis: number;   // 3, 6, 9, 12
  time: string;      // 1분, 3분, 5분, 8분
  accuracy: string;  // 82%, 91%, 96%, 99.4%
  badge: string;
}

export interface AnswerOption {
  text: string;
  type: MBTIElement;
}

export interface Question {
  q: string;
  a: AnswerOption;
  b: AnswerOption;
  axis: 'EI' | 'SN' | 'TF' | 'JP';
}

export interface ResultDetail {
  emoji: string;
  title: string;
  lines: [string, string, string];
}

export interface TestModeData {
  name: string;
  emoji: string;
  questions: Question[]; // Total 48 questions (12 for each axis)
  results: Record<string, ResultDetail>;
}

export type Scores = Record<MBTIElement, number>;

export type ScreenState = 'main' | 'question' | 'loading' | 'result';
