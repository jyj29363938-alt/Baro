// My Page screen (Figma frame E) — profile, goal, settings
function SettingRow({ label, on }) {
  const [v, setV] = React.useState(on);
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 0",
      borderBottom: "1px solid var(--border-subtle)" }}>
      <span style={{ fontSize: 15, fontWeight: 500 }}>{label}</span>
      <Toggle checked={v} onChange={setV} />
    </div>
  );
}

function MyPageScreen({ go }) {
  return (
    <div>
      <Header title="마이페이지" back onBack={() => go("home")} />
      <div style={{ padding: "8px 16px 0" }}>
        {/* profile */}
        <Card padding={20} radius={20} style={{ position: "relative" }}>
          <div style={{ display: "flex", gap: 18 }}>
            <Avatar size={92} />
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 24, fontWeight: 700 }}>지구인님</div>
              <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 4, fontSize: 16, fontWeight: 700 }}>
                <span style={{ fontSize: 17 }}>🔥</span>23일차
              </div>
              <div style={{ fontSize: 14, color: "var(--text-secondary)", marginTop: 10, lineHeight: 1.6 }}>
                인간화 2단계<br/>여유롭고 꾸준한 얼리버드형<br/>스트레칭 시작일: 2026.01.23
              </div>
            </div>
          </div>
          <span style={{ position: "absolute", top: 16, right: 16 }}>
            <IconButton variant="neutral" size={34}
              icon={<svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M4 20h4L18.5 9.5a2.1 2.1 0 0 0-3-3L5 17v3z" stroke="var(--brand-primary)" strokeWidth="2" strokeLinejoin="round"/></svg>} />
          </span>
        </Card>
        {/* goal */}
        <Card tone="mint-dashed" padding={22} radius={20} style={{ marginTop: 20, textAlign: "center" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
            <span style={{ fontSize: 16, fontWeight: 700, color: "var(--text-brand)" }}>나의 목표</span>
            <span style={{ width: 24, height: 24, borderRadius: "50%", background: "var(--surface-mint-strong)", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M4 20h4L18.5 9.5a2.1 2.1 0 0 0-3-3L5 17v3z" stroke="var(--brand-primary)" strokeWidth="2.2" strokeLinejoin="round"/></svg>
            </span>
          </div>
          <div style={{ fontSize: 18, fontWeight: 700, color: "var(--text-brand)", marginTop: 10 }}>이번엔 진짜 한다!</div>
        </Card>
        {/* settings */}
        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", margin: "24px 4px 8px" }}>
          <span style={{ fontSize: 20, fontWeight: 700 }}>앱 설정</span>
          <span style={{ fontSize: 14, color: "var(--text-tertiary)", fontWeight: 600 }}>편집 ›</span>
        </div>
        <Card padding="2px 18px" radius={20}>
          <SettingRow label="카메라 권한" on={true} />
          <SettingRow label="위치 권한" on={false} />
          <SettingRow label="주소록 권한" on={true} />
          <SettingRow label="메일 알림" on={false} />
          <SettingRow label="SMS 알림" on={true} />
          <div style={{ borderBottom: "none" }}><SettingRow label="친구 알림" on={true} /></div>
        </Card>
        <div style={{ height: 16 }} />
      </div>
    </div>
  );
}
window.MyPageScreen = MyPageScreen;
