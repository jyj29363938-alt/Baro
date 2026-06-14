import React from "react";

/**
 * Small label pill. Covers the streak badge (🔥 23일차), routine
 * labels on imagery, and inline status tags. `tone` sets the palette.
 */
export function Badge({
  children,
  tone = "brand",
  icon = null,
  size = "md",
  style,
  ...rest
}) {
  const sizes = {
    sm: { height: 24, padding: "0 10px", font: "var(--font-size-xs)" },
    md: { height: 32, padding: "0 14px", font: "var(--font-size-sm)" },
    lg: { height: 44, padding: "0 18px", font: "var(--font-size-base)" },
  };
  const s = sizes[size] || sizes.md;

  const tones = {
    brand: { background: "var(--brand-primary)", color: "var(--brand-on-primary)" },
    mint: { background: "var(--surface-mint-strong)", color: "var(--text-brand)" },
    streak: { background: "var(--neutral-0)", color: "var(--text-primary)", boxShadow: "var(--shadow-card)" },
    dark: { background: "var(--neutral-900)", color: "var(--neutral-0)" },
    neutral: { background: "var(--neutral-100)", color: "var(--text-secondary)" },
  };
  const t = tones[tone] || tones.brand;

  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "6px",
        height: s.height,
        padding: s.padding,
        fontFamily: "var(--font-sans)",
        fontSize: s.font,
        fontWeight: "var(--weight-bold)",
        borderRadius: "var(--radius-pill)",
        whiteSpace: "nowrap",
        ...t,
        ...style,
      }}
      {...rest}
    >
      {icon}
      {children}
    </span>
  );
}
