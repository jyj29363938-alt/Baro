// Home screen (Figma frame A)
function Header({ title, logo = false, onProfile, onBell, back = false, onBack }) {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between",
      padding: "14px 20px", background: "rgba(250,250,250,.7)", backdropFilter: "blur(8px)",
      position: "sticky", top: 0, zIndex: 5 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        {back && (
          <button onClick={onBack} aria-label="뒤로" style={{ border: "none", background: "transparent", cursor: "pointer", padding: 0, marginRight: 2, color: "var(--text-primary)", display: "flex" }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M15 5l-7 7 7 7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
        )}
        {logo && (
          <svg width="30" height="30" viewBox="0 0 25.483 31.125" style={{ marginRight: 2 }}>
            <defs><linearGradient id="hg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#3AE9A1"/><stop offset="100%" stopColor="#00AF67"/></linearGradient></defs>
            <path d="M 3.07 1.279 C 6.043 -0.754 9.878 -0.316 11.637 2.256 C 12.547 3.587 12.721 5.229 12.266 6.786 L 10.713 12.952 C 12.186 12.051 13.919 11.532 15.772 11.532 C 21.135 11.532 25.483 15.879 25.483 21.242 C 25.483 23.65 24.604 25.853 23.152 27.55 C 20.312 31.317 16.734 31.974 10.092 30.145 C 9.047 29.858 8.118 29.371 7.322 28.739 C 6.243 29.067 4.975 29.126 3.54 28.959 C 3.529 28.957 0.749 28.542 1.876 26.003 C 2.941 23.602 4.038 21.077 4.761 18.274 L 6.098 11.836 C 4.018 12.05 2.011 11.281 0.873 9.617 C -0.886 7.045 0.098 3.312 3.07 1.279 Z M 16.312 15.517 C 13.4 15.517 11.04 17.943 11.04 20.935 C 11.04 23.928 13.4 26.353 16.312 26.353 C 19.224 26.353 21.586 23.928 21.586 20.935 C 21.586 17.943 19.224 15.517 16.312 15.517 Z" fill="url(#hg)"/>
            <circle cx="4.6" cy="7" r="1" fill="#1a1a1a"/>
          </svg>
        )}
        <span style={{ fontSize: logo ? 24 : 22, fontWeight: 700, letterSpacing: "-0.02em",
          color: logo ? "var(--brand-primary)" : "var(--text-primary)" }}>{title}</span>
      </div>
      <div style={{ display: "flex", gap: 10 }}>
        <IconButton variant="mint" onClick={onProfile} icon={<Icon name="person" size={22} color="var(--brand-primary)" />} />
        <IconButton variant="mint" onClick={onBell} icon={<Icon name="notifications" size={22} color="var(--brand-primary)" />} />
      </div>
    </div>
  );
}

function HomeScreen({ go }) {
  const [days, setDays] = React.useState([
    { d: "월", s: "filled" }, { d: "화", s: "selected" }, { d: "수", s: "filled" },
    { d: "목", s: "filled" }, { d: "금", s: "filled" }, { d: "토", s: "outline" }, { d: "일", s: "outline" },
  ]);
  const routines = [
    { img: "assets/stretch-1.jpg", t: "굽은 등 바로 하기", sub: "라운드 숄더와 척추측만증 예방", sec: "50초" },
    { img: "assets/stretch-2.jpg", t: "목 거북이 탈출", sub: "거북목을 부드럽게 풀어줘요", sec: "40초" },
  ];
  return (
    <div>
      <Header title="Baro" logo onProfile={() => go("mypage")} />
      {/* hero mint card */}
      <div style={{ margin: "4px 16px 0", borderRadius: 24, padding: 20, background: "var(--gradient-mint-sky)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <Badge tone="streak" icon={<span style={{ fontSize: 16 }}>🔥</span>}>23일차</Badge>
          <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8,
            background: "var(--brand-primary)", borderRadius: 999, padding: "8px 8px 8px 16px", boxShadow: "var(--shadow-brand-soft)" }}>
            <span style={{ color: "#fff", fontWeight: 700, fontSize: 14 }}>이번엔 진짜 한다!</span>
            <IconButton variant="solid" size={30} style={{ background: "rgba(255,255,255,.25)" }}
              icon={<svg width="15" height="15" viewBox="0 0 24 24" fill="none"><path d="M4 20h4L18.5 9.5a2.1 2.1 0 0 0-3-3L5 17v3z" stroke="#fff" strokeWidth="2" strokeLinejoin="round"/></svg>} />
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 20 }}>
          <div>
            <div style={{ fontSize: 28, fontWeight: 700, color: "var(--text-primary)", letterSpacing: "-0.02em" }}>지구인님,</div>
            <div style={{ fontSize: 18, fontWeight: 500, color: "var(--text-secondary)", marginTop: 6, lineHeight: 1.4 }}>오늘도 자세를<br/>바르게 유지해봐요!</div>
          </div>
          <div style={{ fontSize: 78, lineHeight: 1, filter: "drop-shadow(0 6px 10px rgba(255,165,9,.3))" }}>☀️</div>
        </div>
        <div style={{ display: "flex", gap: 7, marginTop: 22, justifyContent: "space-between" }}>
          {days.map((x, i) => (
            <DayChip key={i} label={x.d} state={x.s} size={40}
              onClick={() => setDays(p => p.map((y, j) => j === i ? { ...y, s: y.s === "filled" ? "outline" : "filled" } : y))} />
          ))}
        </div>
      </div>
      {/* today's stretching */}
      <div style={{ padding: "28px 20px 16px", display: "flex", alignItems: "baseline", justifyContent: "space-between" }}>
        <span style={{ fontSize: 20, fontWeight: 700 }}>오늘의 스트레칭</span>
        <span style={{ fontSize: 16, color: "var(--text-tertiary)", fontWeight: 600 }}><b style={{ color: "var(--text-primary)" }}>1</b> / 3</span>
      </div>
      <div style={{ display: "flex", gap: 14, overflowX: "auto", padding: "0 20px 8px", scrollbarWidth: "none" }}>
        {routines.map((r, i) => (
          <Card key={i} padding={0} radius={20} style={{ width: 230, flex: "none", overflow: "hidden" }}>
            <div style={{ height: 150, background: `url(${r.img}) center/cover no-repeat, var(--green-100)` }} />
            <div style={{ padding: 16 }}>
              <div style={{ fontSize: 16, fontWeight: 700 }}>{r.t}</div>
              <div style={{ fontSize: 13, color: "var(--text-secondary)", marginTop: 4, lineHeight: 1.4 }}>{r.sub}</div>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 14 }}>
                <span style={{ display: "flex", alignItems: "center", gap: 5, color: "var(--brand-primary)", fontWeight: 700, fontSize: 14 }}>
                  <Icon name="alarm" size={17} color="var(--brand-primary)" />{r.sec}
                </span>
                <Button size="sm">시작하기</Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
      <div style={{ height: 16 }} />
    </div>
  );
}
window.Header = Header; window.HomeScreen = HomeScreen;
