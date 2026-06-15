"use client";

import { useState, useEffect } from "react";
import { Header } from "@/components/ui/Header";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { IconButton } from "@/components/ui/IconButton";
import { Icon } from "@/components/ui/Icon";
import { DayChip } from "@/components/ui/DayChip";

const EDIT_ICON = (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
    <path d="M4 20h4L18.5 9.5a2.1 2.1 0 0 0-3-3L5 17v3z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
  </svg>
);

const SNOOZE_SECONDS = 60 * 60;
const INITIAL_COUNTDOWN = 72; // 01:12

function formatCountdown(totalSeconds: number) {
  const clamped = Math.max(0, totalSeconds);
  const m = Math.floor(clamped / 60);
  const s = clamped % 60;
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

interface AlarmRowProps {
  h: string;
  title: string;
  days: string[];
  time: string;
  screen: string;
  sound: string;
  on: boolean;
}

function AlarmRow({ h, title, days, time, screen, sound, on }: AlarmRowProps) {
  const [enabled, setEnabled] = useState(on);

  return (
    <Card padding={18} radius={20} style={{ marginBottom: 16 }}>
      <div style={{ display: "flex", gap: 16 }}>
        <div
          style={{
            width: 88,
            height: 88,
            borderRadius: "50%",
            flex: "none",
            background: "linear-gradient(160deg, var(--green-400), var(--brand-primary))",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            fontSize: 26,
            fontWeight: 700,
            boxShadow: "var(--shadow-brand-soft)",
          }}
        >
          {h}
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <span style={{ fontSize: 16, fontWeight: 700 }}>{title}</span>
              <Icon name={enabled ? "notifications" : "notifications_off"} size={16} color="var(--text-tertiary)" />
            </div>
            <IconButton
              variant="mint"
              size={34}
              icon={EDIT_ICON}
              ariaLabel="알림 편집"
              onClick={() => setEnabled((v) => !v)}
            />
          </div>
          <div style={{ display: "flex", gap: 6, marginTop: 8 }}>
            {days.map((d, i) => (
              <DayChip key={i} label={d} state="inactive" size={28} style={{ fontSize: 12 }} />
            ))}
          </div>
          <div style={{ display: "flex", gap: 8, marginTop: 10 }}>
            <Button size="sm" variant="soft">미루기</Button>
            <Button size="sm" variant="soft">끄기</Button>
          </div>
        </div>
      </div>
      <div style={{ height: 1, background: "var(--border-subtle)", margin: "16px 0 12px" }} />
      <div style={{ display: "flex", gap: 18, fontSize: 12, color: "var(--text-secondary)", fontWeight: 500 }}>
        {[time, screen, sound].map((t, i) => (
          <span key={i} style={{ display: "flex", alignItems: "center", gap: 5 }}>
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: "var(--brand-primary)" }} />
            {t}
          </span>
        ))}
      </div>
    </Card>
  );
}

export default function AlarmPage() {
  const [remaining, setRemaining] = useState(INITIAL_COUNTDOWN);
  const [total, setTotal] = useState(INITIAL_COUNTDOWN);
  const [running, setRunning] = useState(true);

  useEffect(() => {
    if (!running) return;
    const id = setInterval(() => {
      setRemaining((r) => (r > 0 ? r - 1 : 0));
    }, 1000);
    return () => clearInterval(id);
  }, [running]);

  const progress = total > 0 ? Math.min(1, Math.max(0, remaining / total)) : 0;

  return (
    <div>
      <Header title="알림 설정" />
      {/* next alarm hero */}
      <div
        style={{
          margin: "4px 16px 0",
          borderRadius: 24,
          padding: "28px 20px",
          background: "linear-gradient(135deg, var(--green-50) 0%, var(--brand-primary) 100%)",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div style={{ position: "relative", width: "100%", maxWidth: 280, aspectRatio: "1 / 1" }}>
          <svg viewBox="0 0 200 200" width="100%" height="100%" style={{ transform: "rotate(-90deg)" }}>
            <circle cx="100" cy="100" r="88" fill="none" stroke="rgba(255,255,255,0.35)" strokeWidth="10" />
            <circle
              cx="100"
              cy="100"
              r="88"
              fill="none"
              stroke="rgba(255,255,255,0.9)"
              strokeWidth="10"
              strokeLinecap="round"
              strokeDasharray={2 * Math.PI * 88}
              strokeDashoffset={2 * Math.PI * 88 * (1 - progress)}
              style={{ transition: "stroke-dashoffset 1s linear" }}
            />
          </svg>
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ fontSize: 16, fontWeight: 700, color: "rgba(255,255,255,0.85)" }}>다음 알림</span>
              <span style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 16, fontWeight: 700, color: "var(--neutral-900)" }}>
                <Icon name="alarm" size={18} color="var(--neutral-900)" />
                {formatCountdown(remaining)}
              </span>
            </div>
            <div style={{ fontSize: 52, fontWeight: 800, color: "var(--green-800)", letterSpacing: "-0.02em", margin: "6px 0 18px" }}>
              14:00
            </div>
            <div style={{ display: "flex", gap: 10, justifyContent: "center" }}>
              <Button
                variant="dark"
                size="sm"
                onClick={() => {
                  setRemaining((r) => r + SNOOZE_SECONDS);
                  setTotal((t) => t + SNOOZE_SECONDS);
                }}
              >
                미루기
              </Button>
              <Button variant="dark" size="sm" onClick={() => setRunning(false)}>끄기</Button>
            </div>
          </div>
        </div>
      </div>

      {/* 방해 금지 시간 */}
      <div style={{ padding: "26px 20px 0" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ fontSize: 20, fontWeight: 700 }}>방해 금지 시간</span>
          <div style={{ display: "flex", gap: 12 }}>
            {["+", "−"].map((sym) => (
              <span
                key={sym}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 22,
                  height: 22,
                  color: "var(--text-tertiary)",
                  fontSize: 18,
                  fontWeight: 700,
                  cursor: "pointer",
                }}
              >
                {sym}
              </span>
            ))}
          </div>
        </div>
        <div style={{ fontSize: 14, color: "var(--brand-primary)", fontWeight: 600, marginTop: 4 }}>
          12:00 ~12:50 / 17:30 ~19:00
        </div>
        <div style={{ position: "relative", height: 22, borderRadius: 999, background: "var(--surface-mint)", marginTop: 14 }}>
          <div style={{ position: "absolute", left: "26%", width: "16%", top: 4, bottom: 4, borderRadius: 999, background: "var(--brand-primary)" }} />
          <div style={{ position: "absolute", left: "58%", width: "20%", top: 4, bottom: 4, borderRadius: 999, background: "var(--brand-primary)" }} />
        </div>
      </div>

      {/* 설정된 알림 목록 */}
      <div style={{ padding: "24px 20px 0", display: "flex", alignItems: "baseline", justifyContent: "space-between" }}>
        <span style={{ fontSize: 20, fontWeight: 700 }}>설정된 알림 목록</span>
        <span style={{ fontSize: 14, color: "var(--text-tertiary)", fontWeight: 600 }}>편집 ›</span>
      </div>
      <div style={{ padding: "14px 16px 16px" }}>
        <AlarmRow h="4H" title="매일 스트레칭!" days={["월", "화", "수", "목", "금"]} time="09:00~22:00" screen="전체 화면 사용" sound="무음" on />
        <AlarmRow h="6H" title="무시하면 거북이됨" days={["토", "일"]} time="13:00~22:00" screen="일부 화면 사용" sound="진동" on={false} />
      </div>
      <div style={{ height: 8 }} />
    </div>
  );
}
