import React from "react";
import { Icon } from "../icons/Icon.jsx";

const DEFAULT_TABS = [
  { key: "home", label: "홈", icon: "home" },
  { key: "record", label: "기록", icon: "event_note" },
  { key: "stretch", label: "스트레칭", icon: "cheer" },
  { key: "alarm", label: "알림", icon: "alarm" },
];

/**
 * Bottom tab bar. Four destinations, active tab tinted brand-green
 * with a green top-indicator bar; inactive tabs neutral-400.
 * Icons render inline (tint with currentColor).
 */
export function BottomNav({
  tabs = DEFAULT_TABS,
  active = "home",
  onChange,
  style,
  ...rest
}) {
  return (
    <nav
      style={{
        display: "flex",
        alignItems: "stretch",
        height: "var(--nav-height)",
        background: "var(--surface-card)",
        borderTop: "1px solid var(--border-subtle)",
        boxShadow: "0 -2px 12px rgba(80,80,80,0.06)",
        ...style,
      }}
      {...rest}
    >
      {tabs.map((t) => {
        const isActive = t.key === active;
        return (
          <button
            key={t.key}
            type="button"
            onClick={() => onChange && onChange(t.key)}
            style={{
              position: "relative",
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "4px",
              border: "none",
              background: "transparent",
              cursor: "pointer",
              color: isActive ? "var(--brand-primary)" : "var(--text-tertiary)",
            }}
          >
            {isActive && (
              <span
                style={{
                  position: "absolute",
                  top: 0,
                  width: 40,
                  height: 3,
                  borderRadius: "0 0 3px 3px",
                  background: "var(--brand-primary)",
                }}
              />
            )}
            <Icon name={t.icon} size={26} />
            <span style={{ fontSize: 10, fontWeight: "var(--weight-semibold)" }}>
              {t.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
}
