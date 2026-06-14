"use client";

import Image from "next/image";
import { Header } from "@/components/ui/Header";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Avatar } from "@/components/ui/Avatar";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { friends, routines, friendActivities } from "@/data/friends";

function FriendRow({ name, streak, msg, stage, stageImg }: { name: string; streak: string; msg: string; stage: number; stageImg: string }) {
  return (
    <Card tone="flat" padding={16} radius={18} style={{ marginBottom: 12 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
        <Avatar size={48} src={stageImg} alt={`인간화 ${stage}단계`} />
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <span style={{ fontSize: 16, fontWeight: 700 }}>{name}</span>
            <span style={{ fontSize: 12, fontWeight: 700, color: "var(--brand-primary)" }}>{stage}단계</span>
            <span style={{ fontSize: 13, fontWeight: 700 }}>🔥{streak}</span>
          </div>
          <div style={{ fontSize: 14, color: "var(--brand-primary)", fontWeight: 600, marginTop: 3 }}>
            {msg}
          </div>
        </div>
      </div>
    </Card>
  );
}

function ActivityCard({ img, name, msg, likes, comments }: { img: string; name: string; msg: string; likes: number; comments: number }) {
  return (
    <Card padding={0} radius={18} style={{ overflow: "hidden" }}>
      <div style={{ position: "relative", height: 110, background: "var(--green-100)" }}>
        <Image src={img} alt={msg} fill style={{ objectFit: "cover" }} />
      </div>
      <div style={{ padding: 12 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 4 }}>
          <Avatar size={20} />
          <span style={{ fontSize: 13, fontWeight: 700 }}>{name}</span>
        </div>
        <div style={{ fontSize: 13, color: "var(--text-secondary)", fontWeight: 600, lineHeight: 1.35, minHeight: 36 }}>
          {msg}
        </div>
        <div style={{ marginTop: 10 }}>
          <Button variant="ghost" size="sm" full>함께하기</Button>
        </div>
        <div style={{ display: "flex", gap: 12, marginTop: 8, color: "var(--text-tertiary)", fontSize: 12, fontWeight: 600 }}>
          <span style={{ display: "flex", alignItems: "center", gap: 4 }}>
            <Icon name="favorite" size={16} color="var(--text-tertiary)" /> {likes}
          </span>
          <span style={{ display: "flex", alignItems: "center", gap: 4 }}>
            <Icon name="chat" size={16} color="var(--text-tertiary)" /> {comments}
          </span>
        </div>
      </div>
    </Card>
  );
}

function RoutineWide({ img, label, title }: { img: string; label: string; title: string }) {
  return (
    <Card padding={0} radius={18} style={{ overflow: "hidden", marginBottom: 16 }}>
      <div style={{ position: "relative", height: 140, background: "var(--green-100)" }}>
        <Image src={img} alt={title} fill style={{ objectFit: "cover" }} />
        <span style={{ position: "absolute", left: 12, top: 12 }}>
          <Badge tone="dark" size="sm">{label}</Badge>
        </span>
      </div>
      <div style={{ padding: 16 }}>
        <div style={{ fontSize: 12, color: "var(--text-secondary)" }}>이번주 인기 스트레칭 루틴</div>
        <div style={{ fontSize: 17, fontWeight: 700, marginTop: 3 }}>{title}</div>
      </div>
    </Card>
  );
}

export default function FriendsPage() {
  return (
    <div>
      <Header title="친구와 함께" />
      <div style={{ padding: "8px 20px 0" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
          <span style={{ fontSize: 20, fontWeight: 700 }}>친구 목록</span>
          <span style={{ color: "var(--text-tertiary)", fontSize: 22 }}>+</span>
        </div>

        {friends.map((f) => (
          <FriendRow key={f.id} name={f.name} streak={f.streak} msg={f.msg} stage={f.stage} stageImg={f.stageImg} />
        ))}

        <div style={{ fontSize: 20, fontWeight: 700, margin: "20px 0 12px" }}>친구의 스트레칭 기록</div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 20 }}>
          {friendActivities.map((a) => (
            <ActivityCard key={a.id} img={a.img} name={a.name} msg={a.msg} likes={a.likes} comments={a.comments} />
          ))}
        </div>

        <div style={{ fontSize: 20, fontWeight: 700, margin: "20px 0 12px" }}>지금 핫한 루틴</div>
        <div style={{ marginBottom: 16 }}>
          <Button variant="ghost" full leadingIcon={<span style={{ fontSize: 18, marginRight: 2 }}>+</span>}>
            나만의 스트레칭 루틴 공유하기
          </Button>
        </div>

        {routines.map((r) => (
          <RoutineWide key={r.id} img={r.img} label={r.label} title={r.title} />
        ))}

        <div style={{ height: 8 }} />
      </div>
    </div>
  );
}
