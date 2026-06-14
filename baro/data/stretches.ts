export interface Stretch {
  img: string;
  title: string;
  subtitle: string;
  seconds: string;
}

export const todayStretches: Stretch[] = [
  {
    img: "/images/stretch-1.jpg",
    title: "굽은 등 바로 하기",
    subtitle: "라운드 숄더와 척추측만증을 예방할 수 있어요!",
    seconds: "50초",
  },
  {
    img: "/images/stretch-3.jpg",
    title: "틀어진 허리 바로 하기",
    subtitle: "허리 디스크와 척추측만증을 예방할 수 있어요!",
    seconds: "50초",
  },
  {
    img: "/images/stretch-2.jpg",
    title: "목 거북이 탈출",
    subtitle: "거북목을 부드럽게 풀어줘요",
    seconds: "40초",
  },
];
