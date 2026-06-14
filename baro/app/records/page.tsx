"use client";

import { useState } from "react";
import Image from "next/image";
import { Header } from "@/components/ui/Header";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { user } from "@/data/user";
import { character, calendar, weeklyRecord, stretchType, analysisSliders } from "@/data/records";

function CharacterHero() {
  return (
    <div style={{ position: "relative", height: 280, borderRadius: 24, overflow: "hidden" }}>
      <Image src="/images/turtle-hero.svg" alt="" fill style={{ objectFit: "cover" }} className="turtle-walk" priority />
      <div style={{ position: "absolute", left: 24, right: 24, bottom: 22 }}>
        <ProgressBar value={character.stage} total={character.totalStages} segmentHeight={6} gap={6} />
        <div style={{ textAlign: "center", marginTop: 10 }}>
          <span style={{ fontSize: 14, color: "var(--text-secondary)", fontWeight: 600 }}>인간화 </span>
          <span style={{ fontSize: 18, color: "var(--brand-primary)", fontWeight: 700 }}>{character.stage}단계</span>
        </div>
      </div>
    </div>
  );
}

function Calendar() {
  const dow = ["일", "월", "화", "수", "목", "금", "토"];
  const [year, setYear] = useState(calendar.year);
  const [month, setMonth] = useState(calendar.month); // 1-12

  const firstDayOffset = new Date(year, month - 1, 1).getDay();
  const totalDays = new Date(year, month, 0).getDate();
  const isCurrentMonth = year === calendar.year && month === calendar.month;
  const isPastMonth = year < calendar.year || (year === calendar.year && month < calendar.month);

  let done: Set<number>;
  if (isCurrentMonth) {
    done = new Set(calendar.doneDays);
  } else if (isPastMonth) {
    done = new Set(
      [1, 2, 4, 6, 7, 9, 11, 12, 14, 16, 18, 19, 21, 22, 24, 26, 28, 29].filter((d) => d <= totalDays)
    );
  } else {
    done = new Set();
  }

  const cells: (number | null)[] = [];
  for (let i = 0; i < firstDayOffset; i++) cells.push(null);
  for (let d = 1; d <= totalDays; d++) cells.push(d);

  const goPrevMonth = () => {
    if (month === 1) {
      setYear((y) => y - 1);
      setMonth(12);
    } else {
      setMonth((m) => m - 1);
    }
  };

  const goNextMonth = () => {
    if (month === 12) {
      setYear((y) => y + 1);
      setMonth(1);
    } else {
      setMonth((m) => m + 1);
    }
  };

  return (
    <Card padding={18} radius={20}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 24, marginBottom: 14 }}>
        <button
          onClick={goPrevMonth}
          aria-label="이전 달"
          style={{ border: "none", background: "transparent", cursor: "pointer", color: "var(--text-tertiary)", fontSize: 20 }}
        >
          ‹
        </button>
        <span style={{ fontSize: 17, fontWeight: 700 }}>{year}년 {month}월</span>
        <button
          onClick={goNextMonth}
          aria-label="다음 달"
          style={{ border: "none", background: "transparent", cursor: "pointer", color: "var(--text-tertiary)", fontSize: 20 }}
        >
          ›
        </button>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(7,1fr)", gap: 4, marginBottom: 6 }}>
        {dow.map((x, i) => (
          <div key={i} style={{ textAlign: "center", fontSize: 11, color: "var(--text-tertiary)", fontWeight: 600 }}>{x}</div>
        ))}
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(7,1fr)", gap: 4 }}>
        {cells.map((d, i) => (
          <div key={i} style={{ aspectRatio: "1", display: "flex", alignItems: "center", justifyContent: "center" }}>
            {d && (
              <div
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 12,
                  fontWeight: 600,
                  background: done.has(d) ? "var(--brand-primary)" : "var(--neutral-100)",
                  color: done.has(d) ? "#fff" : "var(--text-tertiary)",
                }}
              >
                {d}
              </div>
            )}
          </div>
        ))}
      </div>
    </Card>
  );
}

function WeeklyRecord() {
  const max = Math.max(...weeklyRecord.days.map((d) => d.count));
  return (
    <Card padding={18} radius={20}>
      <div style={{ fontSize: 14, color: "var(--text-secondary)" }}>
        지난 주 평균{" "}
        <span style={{ color: "var(--brand-primary)", fontWeight: 700 }}>{weeklyRecord.average}회</span>{" "}
        스트레칭 완료
      </div>
      <div style={{ display: "flex", alignItems: "flex-end", gap: 10, height: 110, marginTop: 18 }}>
        {weeklyRecord.days.map((day) => {
          const aboveAverage = day.count > weeklyRecord.average;
          return (
            <div key={day.d} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 6, height: "100%" }}>
              <span style={{ fontSize: 12, fontWeight: 700, color: aboveAverage ? "#00C776" : "var(--text-tertiary)" }}>
                {day.count}
              </span>
              <div style={{ flex: 1, display: "flex", alignItems: "flex-end", justifyContent: "center", width: "100%" }}>
                <div
                  style={{
                    width: 10,
                    height: `${(day.count / max) * 100}%`,
                    minHeight: 6,
                    borderRadius: "var(--radius-pill)",
                    background: aboveAverage ? "#00C776" : "var(--green-100)",
                  }}
                />
              </div>
              <span style={{ fontSize: 12, color: "var(--text-tertiary)", fontWeight: 600 }}>{day.d}</span>
            </div>
          );
        })}
      </div>
    </Card>
  );
}

function StretchType() {
  return (
    <Card tone="mint" padding={18} radius={20}>
      <div style={{ fontSize: 13, color: "var(--text-tertiary)", fontWeight: 600 }}>나의 스트레칭 유형</div>
      <div style={{ fontSize: 18, fontWeight: 700, marginTop: 6, color: "var(--text-brand)" }}>{stretchType.title}</div>
      <div style={{ fontSize: 13, color: "var(--text-secondary)", marginTop: 8, lineHeight: 1.5 }}>{stretchType.description}</div>
    </Card>
  );
}

function AnalysisSliders() {
  return (
    <Card padding={18} radius={20}>
      <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
        {analysisSliders.map((s) => (
          <div key={`${s.left}-${s.right}`}>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, fontWeight: 600, color: "var(--text-secondary)", marginBottom: 8 }}>
              <span>{s.left}</span>
              <span>{s.right}</span>
            </div>
            <div style={{ position: "relative", height: 6, borderRadius: "var(--radius-pill)", background: "var(--green-100)" }}>
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: `${s.value}%`,
                  transform: "translate(-50%, -50%)",
                  width: 14,
                  height: 14,
                  borderRadius: "50%",
                  background: "var(--brand-primary)",
                  boxShadow: "var(--shadow-brand-soft)",
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

export default function RecordsPage() {
  return (
    <div>
      <Header title="나의 기록" />
      <div style={{ padding: "4px 20px 16px" }}>
        <div style={{ marginBottom: 14 }}>
          <Badge tone="streak" icon={<span style={{ fontSize: 16 }}>🔥</span>}>{user.streakDays}일차</Badge>
        </div>

        <CharacterHero />

        <div style={{ padding: "26px 4px 14px", fontSize: 20, fontWeight: 700 }}>월간 기록</div>
        <Calendar />

        <div style={{ padding: "26px 4px 14px", fontSize: 20, fontWeight: 700 }}>주간 스트레칭 기록</div>
        <WeeklyRecord />

        <div style={{ height: 28 }} />
        <StretchType />

        <div style={{ padding: "26px 4px 14px", fontSize: 20, fontWeight: 700 }}>스트레칭 기록 분석</div>
        <AnalysisSliders />

        <div style={{ height: 16 }} />
      </div>
    </div>
  );
}
