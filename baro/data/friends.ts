export interface Friend {
  id: string;
  name: string;
  streak: string;
  msg: string;
  done: boolean;
  stage: number;
  stageImg: string;
}

export const friends: Friend[] = [
  { id: "eunji", name: "최은지님", streak: "14일", msg: "아직 스트레칭을 하지 않았어요!", done: false, stage: 1, stageImg: "/images/stage-1-turtle.svg" },
  { id: "soohyun", name: "김수현님", streak: "51일", msg: "함께 스트레칭을 해보아요!", done: true, stage: 4, stageImg: "/images/stage-4-human.svg" },
];

export interface Routine {
  id: string;
  img: string;
  label: string;
  title: string;
}

export const routines: Routine[] = [
  { id: "r1", img: "/images/stretch-2.jpg", label: "우주인님 루틴", title: "간단 3분 스트레칭!" },
  { id: "r2", img: "/images/stretch-3.jpg", label: "이상한님 루틴", title: "같이 유연해져봐요" },
  { id: "r3", img: "/images/stretch-1.jpg", label: "고북이님 루틴", title: "으라차차 하체 스트레칭" },
  { id: "r4", img: "/images/stretch-2.jpg", label: "바르게님 루틴", title: "굳은 허리를 풀어보세요!" },
];

export interface FriendActivity {
  id: string;
  img: string;
  name: string;
  msg: string;
  likes: number;
  comments: number;
}

export const friendActivities: FriendActivity[] = [
  { id: "a1", img: "/images/stretch-3.jpg", name: "김수현님", msg: "나랑 같이 거북이에서 벗어나지 않을래?", likes: 3, comments: 1 },
  { id: "a2", img: "/images/stretch-1.jpg", name: "최은지님", msg: "같이 스트레칭하면 더 재미있을거야!", likes: 5, comments: 2 },
];
