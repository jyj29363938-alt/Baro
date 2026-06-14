export const character = {
  stage: 2,
  totalStages: 5,
  label: "인간화 2단계",
};

export const calendar = {
  year: 2026,
  month: 6,
  monthLabel: "2026년 6월",
  firstDayOffset: 1, // 1일이 월요일 (일=0 기준)
  totalDays: 30,
  doneDays: [1, 3, 4, 7, 9, 10, 13, 16, 17, 18, 21, 23, 24, 27, 29, 30],
  today: 9,
};

export interface WeeklyDay {
  d: string;
  count: number;
}

export const weeklyRecord = {
  average: 3.2,
  days: [
    { d: "월", count: 5 },
    { d: "화", count: 3 },
    { d: "수", count: 1 },
    { d: "목", count: 2 },
    { d: "금", count: 2 },
    { d: "토", count: 4 },
    { d: "일", count: 6 },
  ] as WeeklyDay[],
};

export const stretchType = {
  title: "여유롭고 꾸준한 얼리버드형",
  description: "아침 시간을 활용해 짧고 가벼운 스트레칭을 꾸준히 이어가는 타입이에요.",
};

export interface AnalysisSlider {
  left: string;
  right: string;
  value: number; // 0-100, 50이 중앙
}

export const analysisSliders: AnalysisSlider[] = [
  { left: "오전", right: "오후", value: 30 },
  { left: "주간", right: "주말", value: 60 },
  { left: "짧은 동작", right: "긴 동작", value: 45 },
  { left: "단기적", right: "장기적", value: 70 },
];
