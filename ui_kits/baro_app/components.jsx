// Baro UI-kit primitives (window-scoped). Mirror the design-system
// components in components/* but exposed on window for Babel screens.

function Button({ children, variant = "primary", size = "md", full = false, disabled = false, leadingIcon = null, onClick, style }) {
  const sizes = {
    sm: { height: 36, padding: "0 16px", font: 14 },
    md: { height: 48, padding: "0 22px", font: 16 },
    lg: { height: 56, padding: "0 28px", font: 18 },
  };
  const s = sizes[size];
  const variants = {
    primary: { background: "var(--brand-primary)", color: "#fff", boxShadow: "var(--shadow-brand-soft)", border: "none" },
    dark: { background: "var(--neutral-900)", color: "var(--green-400)", border: "none" },
    soft: { background: "var(--surface-mint-strong)", color: "var(--text-brand)", border: "none" },
    ghost: { background: "transparent", color: "var(--text-brand)", border: "1.5px dashed var(--border-dashed)" },
  };
  return (
    <button type="button" onClick={disabled ? undefined : onClick} disabled={disabled}
      style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8,
        height: s.height, padding: s.padding, width: full ? "100%" : "auto", fontFamily: "var(--font-sans)",
        fontSize: s.font, fontWeight: 600, letterSpacing: "-0.01em", borderRadius: 999,
        cursor: disabled ? "not-allowed" : "pointer", opacity: disabled ? 0.45 : 1,
        transition: "transform .12s", ...variants[variant], ...style }}
      onMouseDown={e => { if (!disabled) e.currentTarget.style.transform = "scale(.96)"; }}
      onMouseUp={e => { e.currentTarget.style.transform = "scale(1)"; }}
      onMouseLeave={e => { e.currentTarget.style.transform = "scale(1)"; }}>
      {leadingIcon}{children}
    </button>
  );
}

function IconButton({ icon, variant = "mint", size = 44, onClick, style }) {
  const variants = {
    mint: { background: "var(--surface-mint)", color: "var(--brand-primary)" },
    neutral: { background: "var(--neutral-100)", color: "var(--text-secondary)" },
    solid: { background: "var(--brand-primary)", color: "#fff" },
  };
  return (
    <button type="button" onClick={onClick}
      style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: size, height: size,
        borderRadius: 999, border: "none", cursor: "pointer", flex: "none", transition: "transform .12s",
        ...variants[variant], ...style }}
      onMouseDown={e => { e.currentTarget.style.transform = "scale(.92)"; }}
      onMouseUp={e => { e.currentTarget.style.transform = "scale(1)"; }}
      onMouseLeave={e => { e.currentTarget.style.transform = "scale(1)"; }}>
      {icon}
    </button>
  );
}

function Card({ children, tone = "default", padding = 20, radius = 20, onClick, style }) {
  const tones = {
    default: { background: "#fff", boxShadow: "var(--shadow-card)", border: "none" },
    flat: { background: "#fff", boxShadow: "none", border: "1px solid var(--border-subtle)" },
    mint: { background: "var(--surface-mint)", boxShadow: "none", border: "none" },
    "mint-dashed": { background: "var(--surface-mint)", boxShadow: "none", border: "1.5px dashed var(--border-dashed)" },
  };
  return (
    <div onClick={onClick} style={{ borderRadius: radius, padding, boxSizing: "border-box",
      cursor: onClick ? "pointer" : "default", ...tones[tone], ...style }}>{children}</div>
  );
}

function Badge({ children, tone = "brand", icon = null, size = "md", style }) {
  const sizes = { sm: { h: 24, p: "0 10px", f: 12 }, md: { h: 32, p: "0 14px", f: 14 }, lg: { h: 44, p: "0 18px", f: 16 } };
  const s = sizes[size];
  const tones = {
    brand: { background: "var(--brand-primary)", color: "#fff" },
    mint: { background: "var(--surface-mint-strong)", color: "var(--text-brand)" },
    streak: { background: "#fff", color: "var(--text-primary)", boxShadow: "var(--shadow-card)" },
    dark: { background: "var(--neutral-900)", color: "#fff" },
    neutral: { background: "var(--neutral-100)", color: "var(--text-secondary)" },
  };
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 6, height: s.h, padding: s.p,
      fontFamily: "var(--font-sans)", fontSize: s.f, fontWeight: 700, borderRadius: 999, whiteSpace: "nowrap",
      ...tones[tone], ...style }}>{icon}{children}</span>
  );
}

function DayChip({ label, state = "outline", size = 44, onClick, style }) {
  const states = {
    filled: { background: "var(--brand-primary)", color: "#fff", border: "none", boxShadow: "var(--shadow-brand-soft)" },
    selected: { background: "var(--surface-mint)", color: "var(--brand-primary)", border: "1.5px solid var(--green-200)" },
    outline: { background: "transparent", color: "var(--brand-primary)", border: "1.5px dashed var(--border-dashed)" },
    inactive: { background: "var(--neutral-100)", color: "var(--text-tertiary)", border: "none" },
  };
  return (
    <button type="button" onClick={onClick}
      style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: size, height: size,
        borderRadius: 999, fontFamily: "var(--font-sans)", fontSize: 14, fontWeight: 600,
        cursor: onClick ? "pointer" : "default", flex: "none", transition: "transform .12s", ...states[state], ...style }}>
      {label}
    </button>
  );
}

function Toggle({ checked = false, onChange, disabled = false, style }) {
  const W = 48, H = 28, pad = 3, thumb = H - pad * 2;
  return (
    <button type="button" role="switch" aria-checked={checked} disabled={disabled}
      onClick={() => !disabled && onChange && onChange(!checked)}
      style={{ position: "relative", width: W, height: H, flex: "none", border: "none", padding: 0,
        borderRadius: 999, cursor: disabled ? "not-allowed" : "pointer", opacity: disabled ? 0.5 : 1,
        background: checked ? "linear-gradient(90deg, var(--green-300), var(--brand-primary))" : "var(--neutral-300)",
        boxShadow: checked ? "var(--shadow-brand-soft)" : "none", transition: "background .2s", ...style }}>
      <span style={{ position: "absolute", top: pad, left: checked ? W - thumb - pad : pad, width: thumb, height: thumb,
        borderRadius: "50%", background: "#fff", boxShadow: "0 1px 3px rgba(0,0,0,.2)", transition: "left .2s" }} />
    </button>
  );
}

function ProgressBar({ value = 2, total = 5, segmentHeight = 12, gap = 8, style }) {
  return (
    <div style={{ display: "flex", gap, width: "100%", ...style }}>
      {Array.from({ length: total }).map((_, i) => (
        <span key={i} style={{ flex: 1, height: segmentHeight, borderRadius: 999,
          background: i < value ? "var(--brand-primary)" : "var(--green-100)",
          boxShadow: i < value ? "var(--shadow-brand-soft)" : "none", transition: "background .2s" }} />
      ))}
    </div>
  );
}

function Avatar({ src = null, size = 56, ring = false, style }) {
  return (
    <div style={{ position: "relative", width: size, height: size, borderRadius: "50%", flex: "none",
      background: "var(--neutral-300)", boxShadow: ring ? "0 0 0 3px #fff, 0 0 0 5px var(--brand-primary)" : "none",
      overflow: "hidden", ...style }}>
      {src ? <img src={src} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} /> : null}
    </div>
  );
}

function BottomNav({ active = "home", onChange }) {
  const tabs = [
    { key: "home", label: "홈", icon: "home" },
    { key: "record", label: "기록", icon: "event_note" },
    { key: "stretch", label: "스트레칭", icon: "cheer" },
    { key: "alarm", label: "알림", icon: "alarm" },
  ];
  return (
    <nav style={{ display: "flex", alignItems: "stretch", height: 72, background: "#fff",
      borderTop: "1px solid var(--border-subtle)", boxShadow: "0 -2px 12px rgba(80,80,80,.06)", flex: "none" }}>
      {tabs.map(t => {
        const a = t.key === active;
        return (
          <button key={t.key} type="button" onClick={() => onChange && onChange(t.key)}
            style={{ position: "relative", flex: 1, display: "flex", flexDirection: "column", alignItems: "center",
              justifyContent: "center", gap: 4, border: "none", background: "transparent", cursor: "pointer",
              color: a ? "var(--brand-primary)" : "var(--text-tertiary)" }}>
            {a && <span style={{ position: "absolute", top: 0, width: 40, height: 3, borderRadius: "0 0 3px 3px", background: "var(--brand-primary)" }} />}
            <Icon name={t.icon} size={26} />
            <span style={{ fontSize: 10, fontWeight: 600 }}>{t.label}</span>
          </button>
        );
      })}
    </nav>
  );
}

Object.assign(window, { Button, IconButton, Card, Badge, DayChip, Toggle, ProgressBar, Avatar, BottomNav });
