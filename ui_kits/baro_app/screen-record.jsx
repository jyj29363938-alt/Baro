// My Record screen (Figma frame B) — character evolution + calendar
function CharacterHero() {
  return (
    <div style={{ position: "relative", height: 280, borderRadius: 24, overflow: "hidden",
      background: "var(--gradient-mint-sky)" }}>
      {/* bubbles */}
      {[[40,40,18],[300,60,12],[80,120,10],[260,150,22],[180,50,8]].map(([x,y,r],i)=>(
        <span key={i} style={{ position: "absolute", left: x, top: y, width: r, height: r, borderRadius: "50%",
          background: "radial-gradient(circle at 35% 30%, rgba(255,255,255,.9), rgba(156,255,234,.4))" }} />
      ))}
      {/* hill */}
      <div style={{ position: "absolute", left: "-10%", right: "-10%", bottom: -40, height: 150, borderRadius: "50% 50% 0 0",
        background: "var(--gradient-hill)" }} />
      {/* turtle */}
      <svg width="92" height="112" viewBox="0 0 25.483 31.125" style={{ position: "absolute", left: "50%", bottom: 70, transform: "translateX(-50%) rotate(-6deg)" }}>
        <defs><linearGradient id="cg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#3AE9A1"/><stop offset="100%" stopColor="#00AF67"/></linearGradient></defs>
        <path d="M 3.07 1.279 C 6.043 -0.754 9.878 -0.316 11.637 2.256 C 12.547 3.587 12.721 5.229 12.266 6.786 L 10.713 12.952 C 12.186 12.051 13.919 11.532 15.772 11.532 C 21.135 11.532 25.483 15.879 25.483 21.242 C 25.483 23.65 24.604 25.853 23.152 27.55 C 20.312 31.317 16.734 31.974 10.092 30.145 C 9.047 29.858 8.118 29.371 7.322 28.739 C 6.243 29.067 4.975 29.126 3.54 28.959 C 3.529 28.957 0.749 28.542 1.876 26.003 C 2.941 23.602 4.038 21.077 4.761 18.274 L 6.098 11.836 C 4.018 12.05 2.011 11.281 0.873 9.617 C -0.886 7.045 0.098 3.312 3.07 1.279 Z M 16.312 15.517 C 13.4 15.517 11.04 17.943 11.04 20.935 C 11.04 23.928 13.4 26.353 16.312 26.353 C 19.224 26.353 21.586 23.928 21.586 20.935 C 21.586 17.943 19.224 15.517 16.312 15.517 Z" fill="url(#cg)"/>
        <circle cx="4.6" cy="7" r="1" fill="#1a1a1a"/>
      </svg>
      {/* progress */}
      <div style={{ position: "absolute", left: 24, right: 24, bottom: 22 }}>
        <ProgressBar value={2} total={5} />
        <div style={{ textAlign: "center", marginTop: 10 }}>
          <span style={{ fontSize: 14, color: "var(--text-tertiary)", fontWeight: 600 }}>인간화 </span>
          <span style={{ fontSize: 18, color: "var(--green-800)", fontWeight: 700 }}>2단계</span>
        </div>
      </div>
    </div>
  );
}

function Calendar() {
  const dow = ["일","월","화","수","목","금","토"];
  // June 2026: 1st is Monday → offset 1
  const offset = 1, total = 30;
  const done = new Set([2,3,4,5,8,9,10,11,12,15,16,17,18,19,22,23]);
  const today = 9;
  const cells = [];
  for (let i = 0; i < offset; i++) cells.push(null);
  for (let d = 1; d <= total; d++) cells.push(d);
  return (
    <Card padding={18} radius={20}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 24, marginBottom: 14 }}>
        <button style={{ border: "none", background: "transparent", cursor: "pointer", color: "var(--text-tertiary)", fontSize: 20 }}>‹</button>
        <span style={{ fontSize: 17, fontWeight: 700 }}>2026년 6월</span>
        <button style={{ border: "none", background: "transparent", cursor: "pointer", color: "var(--text-tertiary)", fontSize: 20 }}>›</button>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(7,1fr)", gap: 4, marginBottom: 6 }}>
        {dow.map((x,i)=>(<div key={i} style={{ textAlign: "center", fontSize: 11, color: "var(--text-tertiary)", fontWeight: 600 }}>{x}</div>))}
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(7,1fr)", gap: 4 }}>
        {cells.map((d,i)=>(
          <div key={i} style={{ aspectRatio: "1", display: "flex", alignItems: "center", justifyContent: "center" }}>
            {d && (
              <div style={{ width: 30, height: 30, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 12, fontWeight: 600,
                background: done.has(d) ? "var(--brand-primary)" : "transparent",
                color: done.has(d) ? "#fff" : "var(--text-secondary)",
                border: d === today ? "1.5px dashed var(--border-dashed)" : "none" }}>{d}</div>
            )}
          </div>
        ))}
      </div>
    </Card>
  );
}

function RecordScreen({ go }) {
  return (
    <div>
      <Header title="나의 기록" onProfile={() => go("mypage")} />
      <div style={{ padding: "4px 16px 0" }}>
        <div style={{ marginBottom: 14 }}>
          <Badge tone="streak" icon={<span style={{ fontSize: 16 }}>🔥</span>}>23일차</Badge>
        </div>
        <CharacterHero />
        <div style={{ padding: "26px 4px 14px", fontSize: 20, fontWeight: 700 }}>월간 기록</div>
        <Calendar />
        <div style={{ height: 16 }} />
      </div>
    </div>
  );
}
window.RecordScreen = RecordScreen;
