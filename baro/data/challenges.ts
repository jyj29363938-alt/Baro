export interface Challenge {
  id: string;
  title: string;
  description: string;
  participants: number;
  progress: number; // 0-100
}

export const challenges: Challenge[] = [
  {
    id: "turtle-escape",
    title: "D+32 거북이 탈출 🐢",
    description: "하루 세 번 거북목 스트레칭하고 인증하기!\n다 같이 거북이를 탈출해봅시다!!",
    participants: 16,
    progress: 32,
  },
  {
    id: "boogie",
    title: "D+19 👻부기부기모임",
    description: "과제하기 싫을 땐 스트레칭으로 회피하자...",
    participants: 4,
    progress: 45,
  },
];
