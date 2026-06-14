"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Icon } from "./Icon";
import { IconButton } from "./IconButton";

interface HeaderProps {
  title: string;
  logo?: boolean;
  back?: boolean;
  onBack?: () => void;
  transparent?: boolean;
}

/**
 * Sticky top header. Shows the Baro mark + title (or a back button),
 * with profile / notification shortcuts on the right. A translucent
 * blur background fades in once the page is scrolled.
 */
export function Header({ title, logo = false, back = false, onBack, transparent = false }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      style={{
        position: "sticky",
        top: 0,
        zIndex: 5,
      }}
    >
      {!transparent && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(250,250,250,.7)",
            backdropFilter: "blur(8px)",
            opacity: scrolled ? 1 : 0,
            transition: "opacity var(--duration-base) var(--ease-standard)",
          }}
        />
      )}
      <div
        style={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "14px 20px",
        }}
      >
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        {back && (
          <button
            onClick={onBack}
            aria-label="뒤로"
            style={{ border: "none", background: "transparent", cursor: "pointer", padding: 0, marginRight: 2, color: "var(--text-primary)", display: "flex" }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M15 5l-7 7 7 7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        )}
        {logo && (
          <svg width="30" height="30" viewBox="0 0 25.483 31.125" style={{ marginRight: 2 }}>
            <defs>
              <linearGradient id="hg" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#3AE9A1" />
                <stop offset="100%" stopColor="#00AF67" />
              </linearGradient>
            </defs>
            <path d="M 3.07 1.279 C 6.043 -0.754 9.878 -0.316 11.637 2.256 C 12.547 3.587 12.721 5.229 12.266 6.786 L 10.713 12.952 C 12.186 12.051 13.919 11.532 15.772 11.532 C 21.135 11.532 25.483 15.879 25.483 21.242 C 25.483 23.65 24.604 25.853 23.152 27.55 C 20.312 31.317 16.734 31.974 10.092 30.145 C 9.047 29.858 8.118 29.371 7.322 28.739 C 6.243 29.067 4.975 29.126 3.54 28.959 C 3.529 28.957 0.749 28.542 1.876 26.003 C 2.941 23.602 4.038 21.077 4.761 18.274 L 6.098 11.836 C 4.018 12.05 2.011 11.281 0.873 9.617 C -0.886 7.045 0.098 3.312 3.07 1.279 Z M 16.312 15.517 C 13.4 15.517 11.04 17.943 11.04 20.935 C 11.04 23.928 13.4 26.353 16.312 26.353 C 19.224 26.353 21.586 23.928 21.586 20.935 C 21.586 17.943 19.224 15.517 16.312 15.517 Z" fill="url(#hg)" />
            <circle cx="4.6" cy="7" r="1" fill="#1a1a1a" />
          </svg>
        )}
        <span
          style={{
            fontSize: logo ? 24 : 22,
            fontWeight: 700,
            letterSpacing: "-0.02em",
            color: logo ? "var(--brand-primary)" : "var(--text-primary)",
          }}
        >
          {title}
        </span>
      </div>
      <div style={{ display: "flex", gap: 10 }}>
        <Link href="/mypage" aria-label="마이페이지">
          <IconButton variant="mint" icon={<Icon name="person" size={22} color="var(--brand-primary)" />} />
        </Link>
        <Link href="/notifications" aria-label="알림">
          <IconButton variant="mint" icon={<Icon name="notifications" size={22} color="var(--brand-primary)" />} />
        </Link>
      </div>
      </div>
    </div>
  );
}
