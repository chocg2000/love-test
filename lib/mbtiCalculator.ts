import { Scores } from '@/types/test';

export function calculateMBTI(scores: Scores): string {
  const eOrI = scores.E >= scores.I ? 'E' : 'I';
  const sOrN = scores.S >= scores.N ? 'S' : 'N';
  const tOrF = scores.T >= scores.F ? 'T' : 'F';
  const jOrP = scores.J >= scores.P ? 'J' : 'P';

  return `${eOrI}${sOrN}${tOrF}${jOrP}`;
}

export function createInitialScores(): Scores {
  return {
    E: 0,
    I: 0,
    S: 0,
    N: 0,
    T: 0,
    F: 0,
    J: 0,
    P: 0,
  };
}
