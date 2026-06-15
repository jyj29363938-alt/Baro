"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Header } from "@/components/ui/Header";
import { Badge } from "@/components/ui/Badge";
import { IconButton } from "@/components/ui/IconButton";
import { DayChip } from "@/components/ui/DayChip";
import { Card } from "@/components/ui/Card";
import { Icon } from "@/components/ui/Icon";
import { Button } from "@/components/ui/Button";
import { user, weekDays, alarm, type DayRecord } from "@/data/user";
import { todayStretches } from "@/data/stretches";
import { challenges } from "@/data/challenges";

const ALARM_SNOOZE_SECONDS = 60 * 60;
const ALARM_INITIAL_SECONDS = 72; // 01:12

function formatCountdown(totalSeconds: number) {
  const clamped = Math.max(0, totalSeconds);
  const m = Math.floor(clamped / 60);
  const s = clamped % 60;
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

export default function HomePage() {
  const [days, setDays] = useState<DayRecord[]>(weekDays);
  const [activeIndex, setActiveIndex] = useState(0);

  const [alarmRemaining, setAlarmRemaining] = useState(ALARM_INITIAL_SECONDS);
  const [alarmRunning, setAlarmRunning] = useState(true);

  useEffect(() => {
    if (!alarmRunning) return;
    const id = setInterval(() => {
      setAlarmRemaining((r) => (r > 0 ? r - 1 : 0));
    }, 1000);
    return () => clearInterval(id);
  }, [alarmRunning]);

  const toggleDay = (i: number) => {
    setDays((prev) =>
      prev.map((d, j) => (j === i ? { ...d, s: d.s === "filled" ? "outline" : "filled" } : d))
    );
  };

  const trackRef = useRef<HTMLDivElement>(null);
  const dragState = useRef<{ active: boolean; startX: number; startScroll: number }>({
    active: false,
    startX: 0,
    startScroll: 0,
  });

  const onTrackPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = trackRef.current;
    if (!el) return;
    dragState.current = { active: true, startX: e.clientX, startScroll: el.scrollLeft };
    el.setPointerCapture(e.pointerId);
  };

  const onTrackPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = trackRef.current;
    if (!el || !dragState.current.active) return;
    el.scrollLeft = dragState.current.startScroll - (e.clientX - dragState.current.startX);
  };

  const endTrackDrag = () => {
    dragState.current.active = false;
  };

  return (
    <div>
      <Header title="Baro" logo />

      {/* hero gradient section (extends up behind the header) */}
      <div
        style={{
          background: "var(--gradient-mint-sky)",
          borderRadius: "0 0 24px 24px",
          marginTop: "calc(-1 * var(--header-height))",
          paddingTop: "var(--header-height)",
        }}
      >
        <div style={{ padding: "0 20px 20px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <Badge tone="streak" icon={<span style={{ fontSize: 16 }}>🔥</span>}>
            {user.streakDays}일차
          </Badge>
          <div
            style={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 8,
              background: "var(--brand-primary)",
              borderRadius: 999,
              padding: "8px 8px 8px 16px",
              boxShadow: "var(--shadow-brand-soft)",
            }}
          >
            <span style={{ color: "var(--brand-on-primary)", fontWeight: 700, fontSize: 14 }}>
              {user.goalMessage}
            </span>
            <IconButton
              variant="solid"
              size={30}
              ariaLabel="목표 수정"
              style={{ background: "rgba(255,255,255,.25)" }}
              icon={
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                  <path d="M4 20h4L18.5 9.5a2.1 2.1 0 0 0-3-3L5 17v3z" stroke="#fff" strokeWidth="2" strokeLinejoin="round" />
                </svg>
              }
            />
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 20 }}>
          <div>
            <div style={{ fontSize: 28, fontWeight: 700, color: "var(--text-primary)", letterSpacing: "-0.02em" }}>
              {user.persona},
            </div>
            <div style={{ fontSize: 18, fontWeight: 500, color: "var(--text-secondary)", marginTop: 6, lineHeight: 1.4, whiteSpace: "pre-line" }}>
              {user.greeting}
            </div>
          </div>
          <div style={{ fontSize: 78, lineHeight: 1, filter: "drop-shadow(0 6px 10px rgba(255,165,9,.3))" }}>☀️</div>
        </div>

        <div style={{ display: "flex", gap: 7, marginTop: 22, justifyContent: "space-between" }}>
          {days.map((day, i) => (
            <DayChip key={day.d} label={day.d} state={day.s} size={40} onClick={() => toggleDay(i)} />
          ))}
        </div>
        </div>
      </div>

      {/* today's stretching */}
      <div style={{ padding: "28px 20px 16px", display: "flex", alignItems: "baseline", justifyContent: "space-between" }}>
        <span style={{ fontSize: 20, fontWeight: 700 }}>오늘의 스트레칭</span>
        <span style={{ fontSize: 16, color: "var(--text-tertiary)", fontWeight: 600 }}>
          <b style={{ color: "var(--text-primary)" }}>{activeIndex + 1}</b> / {todayStretches.length}
        </span>
      </div>

      <div
        ref={trackRef}
        style={{
          display: "flex",
          gap: 14,
          overflowX: "auto",
          padding: "0 20px 8px",
          scrollbarWidth: "none",
          cursor: "grab",
          touchAction: "pan-y",
        }}
        onScroll={(e) => {
          const el = e.currentTarget;
          const cardWidth = 230 + 14;
          const idx = Math.round(el.scrollLeft / cardWidth);
          setActiveIndex(Math.min(idx, todayStretches.length - 1));
        }}
        onPointerDown={onTrackPointerDown}
        onPointerMove={onTrackPointerMove}
        onPointerUp={endTrackDrag}
        onPointerLeave={endTrackDrag}
        onPointerCancel={endTrackDrag}
      >
        {todayStretches.map((r) => (
          <Card key={r.title} padding={0} radius={20} style={{ width: 230, flex: "none", overflow: "hidden" }}>
            <div style={{ position: "relative", height: 150, background: "var(--green-100)" }}>
              <Image src={r.img} alt={r.title} fill style={{ objectFit: "cover" }} />
            </div>
            <div style={{ padding: 16 }}>
              <div style={{ fontSize: 16, fontWeight: 700 }}>{r.title}</div>
              <div style={{ fontSize: 13, color: "var(--text-secondary)", marginTop: 4, lineHeight: 1.4 }}>{r.subtitle}</div>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 14 }}>
                <span style={{ display: "flex", alignItems: "center", gap: 5, color: "var(--brand-primary)", fontWeight: 700, fontSize: 14 }}>
                  <Icon name="alarm" size={17} color="var(--brand-primary)" />
                  {r.seconds}
                </span>
                <Button size="sm">시작하기</Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
      {/* alarm / countdown card */}
      <div style={{ padding: "12px 20px 0" }}>
        <div
          style={{
            position: "relative",
            borderRadius: 24,
            padding: "20px 20px 18px",
            background: "var(--gradient-alarm)",
            overflow: "hidden",
          }}
        >
          <img
            src="/icons/character-body.svg"
            alt=""
            width={90}
            height={110}
            style={{
              position: "absolute",
              right: -10,
              bottom: -16,
              transform: "rotate(8deg)",
              filter: "brightness(0) invert(1)",
              opacity: 0.16,
            }}
          />
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <span style={{ color: "var(--brand-on-primary)", fontWeight: 700, fontSize: 14 }}>
              {alarm.label}
            </span>
            <div style={{ display: "flex", gap: 6 }}>
              <button
                style={{
                  border: "none",
                  borderRadius: 999,
                  padding: "6px 12px",
                  fontSize: 13,
                  fontWeight: 600,
                  color: "var(--brand-on-primary)",
                  background: "rgba(255,255,255,.22)",
                  cursor: "pointer",
                }}
                onClick={() => setAlarmRemaining((r) => r + ALARM_SNOOZE_SECONDS)}
              >
                미루기
              </button>
              <button
                style={{
                  border: "none",
                  borderRadius: 999,
                  padding: "6px 12px",
                  fontSize: 13,
                  fontWeight: 600,
                  color: "var(--brand-on-primary)",
                  background: "rgba(255,255,255,.22)",
                  cursor: "pointer",
                }}
                onClick={() => setAlarmRunning((v) => !v)}
              >
                {alarmRunning ? "끄기" : "시작하기"}
              </button>
            </div>
          </div>
          <div
            style={{
              marginTop: 14,
              fontSize: 44,
              fontWeight: 800,
              letterSpacing: "0.04em",
              color: "var(--brand-on-primary)",
            }}
          >
            {formatCountdown(alarmRemaining)}
          </div>
        </div>
      </div>

      {/* challenge list */}
      <div style={{ padding: "28px 20px 16px", display: "flex", alignItems: "baseline", justifyContent: "space-between" }}>
        <span style={{ fontSize: 20, fontWeight: 700 }}>챌린지 목록</span>
        <span style={{ fontSize: 14, color: "var(--text-tertiary)", fontWeight: 600 }}>편집 &gt;</span>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 12, padding: "0 20px 8px" }}>
        {challenges.map((c) => (
          <Card key={c.id} radius={20}>
            <div style={{ fontSize: 16, fontWeight: 700 }}>{c.title}</div>
            <div style={{ fontSize: 13, color: "var(--text-secondary)", marginTop: 6, lineHeight: 1.5, whiteSpace: "pre-line" }}>
              {c.description}
            </div>
            <div style={{ fontSize: 13, color: "var(--text-tertiary)", marginTop: 8, fontWeight: 600 }}>
              참여인원 {c.participants}명
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 12 }}>
              <div
                style={{
                  flex: 1,
                  height: 8,
                  borderRadius: "var(--radius-pill)",
                  background: "var(--green-100)",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    height: "100%",
                    width: `${c.progress}%`,
                    borderRadius: "var(--radius-pill)",
                    background: "var(--brand-primary)",
                  }}
                />
              </div>
              <span style={{ fontSize: 13, fontWeight: 700, color: "var(--brand-primary)" }}>{c.progress}%</span>
            </div>
          </Card>
        ))}
      </div>

      <div style={{ height: 16 }} />
    </div>
  );
}
