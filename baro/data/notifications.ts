export type NotificationType = "alarm" | "like" | "missed";

export interface NotificationItem {
  id: string;
  type: NotificationType;
  message: string;
  time: string;
  date: string;
  unread?: boolean;
}

export const notifications: NotificationItem[] = [
  { id: "n1", type: "alarm", message: "14:00에 알림이 울렸어요!", time: "오후 2:00", date: "오늘", unread: true },
  { id: "n2", type: "like", message: "최은지님이 회원님의 스트레칭 루틴에 공감을 눌렀어요!", time: "오전 11:32", date: "오늘", unread: true },
  { id: "n3", type: "missed", message: "09:00에 설정된 스트레칭을 하지 않았어요.", time: "오전 9:05", date: "오늘" },
  { id: "n4", type: "alarm", message: "18:00에 알림이 울렸어요!", time: "오후 6:00", date: "어제" },
  { id: "n5", type: "like", message: "김수현님이 회원님의 스트레칭 루틴에 공감을 눌렀어요!", time: "오후 3:15", date: "어제" },
  { id: "n6", type: "missed", message: "22:00에 설정된 스트레칭을 하지 않았어요.", time: "오후 10:05", date: "어제" },
  { id: "n7", type: "alarm", message: "09:00에 알림이 울렸어요!", time: "오전 9:00", date: "어제" },
];
