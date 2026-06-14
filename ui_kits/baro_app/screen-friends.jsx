// Friends / community screen (Figma frame C) — the "stretch" tab
function FriendRow({ name, streak, msg }) {
  return (
    <Card tone="flat" padding={16} radius={18} style={{ marginBottom: 12 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
        <Avatar size={48} />
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <span style={{ fontSize: 16, fontWeight: 700 }}>{name}</span>
            <span style={{ fontSize: 13, fontWeight: 700 }}>🔥{streak}</span>
          </div>
          <div style={{ fontSize: 14, color: "var(--brand-primary)", fontWeight: 600, marginTop: 3 }}>{msg}</div>
        </div>
        <div style={{ display: "flex", gap: 12, color: "var(--text-tertiary)" }}>
          <Icon name="chat" size={22} color="var(--text-tertiary)" />
          <Icon name="favorite" size={22} color="var(--text-tertiary)" />
        </div>
      </div>
    </Card>
  );
}

function RoutineWide({ img, label, t }) {
  return (
    <Card padding={0} radius={18} style={{ overflow: "hidden", marginBottom: 16 }}>
      <div style={{ position: "relative", height: 140, background: `url(${img}) center/cover no-repeat, var(--green-100)` }}>
        <span style={{ position: "absolute", left: 12, top: 12 }}><Badge tone="dark" size="sm">{label}</Badge></span>
      </div>
      <div style={{ padding: 16 }}>
        <div style={{ fontSize: 12, color: "var(--text-secondary)" }}>이번주 인기 스트레칭 루틴</div>
        <div style={{ fontSize: 17, fontWeight: 700, marginTop: 3 }}>{t}</div>
      </div>
    </Card>
  );
}

function FriendsScreen({ go }) {
  return (
    <div>
      <Header title="친구와 함께" onProfile={() => go("mypage")} />
      <div style={{ padding: "8px 20px 0" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
          <span style={{ fontSize: 20, fontWeight: 700 }}>친구 목록</span>
          <span style={{ color: "var(--text-tertiary)", fontSize: 22 }}>+</span>
        </div>
        <FriendRow name="최은지님" streak="14일" msg="아직 스트레칭을 하지 않았어요!" />
        <FriendRow name="김수현님" streak="51일" msg="함께 스트레칭을 해보아요!" />

        <div style={{ fontSize: 20, fontWeight: 700, margin: "20px 0 12px" }}>지금 핫한 루틴</div>
        <div style={{ marginBottom: 16 }}>
          <Button variant="ghost" full leadingIcon={<span style={{ fontSize: 18, marginRight: 2 }}>+</span>}>나만의 스트레칭 루틴 공유하기</Button>
        </div>
        <RoutineWide img="assets/stretch-2.jpg" label="우주인님 루틴" t="간단 3분 스트레칭!" />
        <RoutineWide img="assets/stretch-3.jpg" label="이상한님 루틴" t="같이 유연해져봐요" />
        <RoutineWide img="assets/stretch-1.jpg" label="바르게님 루틴" t="굳은 허리를 풀어보세요!" />
        <div style={{ height: 8 }} />
      </div>
    </div>
  );
}
window.FriendsScreen = FriendsScreen;
