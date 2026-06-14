"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon, type IconName } from "./Icon";

interface Tab {
  key: string;
  href: string;
  label: string;
  icon: IconName;
}

const TABS: Tab[] = [
  { key: "home", href: "/", label: "홈", icon: "home" },
  { key: "record", href: "/records", label: "기록", icon: "event_note" },
  { key: "friends", href: "/friends", label: "친구", icon: "cheer" },
  { key: "alarm", href: "/alarm", label: "알림", icon: "alarm" },
];

/**
 * Bottom tab bar. Four destinations, active tab tinted brand-green
 * with a green top-indicator bar; inactive tabs neutral-400.
 */
export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav
      style={{
        display: "flex",
        alignItems: "stretch",
        height: "var(--nav-height)",
        background: "var(--surface-card)",
        borderTop: "1px solid var(--border-subtle)",
        boxShadow: "0 -2px 12px rgba(80,80,80,0.06)",
        flex: "none",
      }}
    >
      {TABS.map((t) => {
        const isActive = t.href === "/" ? pathname === "/" : pathname.startsWith(t.href);
        return (
          <Link
            key={t.key}
            href={t.href}
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
              textDecoration: "none",
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
          </Link>
        );
      })}
    </nav>
  );
}
