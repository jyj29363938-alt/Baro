export type DayState = "filled" | "selected" | "outline" | "inactive";

export interface DayRecord {
  d: string;
  s: DayState;
}

export const user = {
  persona: "지구인님",
  streakDays: 23,
  goalMessage: "이번엔 진짜 한다!",
  greeting: "오늘도 자세를\n바르게 유지해봐요!",
};

export const weekDays: DayRecord[] = [
  { d: "월", s: "filled" },
  { d: "화", s: "filled" },
  { d: "수", s: "filled" },
  { d: "목", s: "filled" },
  { d: "금", s: "filled" },
  { d: "토", s: "outline" },
  { d: "일", s: "outline" },
];

export const alarm = {
  remaining: "01:12",
  label: "스트레칭까지 남은 시간",
};
