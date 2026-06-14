import React from "react";

type CardTone = "default" | "flat" | "mint" | "mint-dashed";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  tone?: CardTone;
  padding?: string | number;
  radius?: string | number;
}

const TONES: Record<CardTone, React.CSSProperties> = {
  default: {
    background: "var(--surface-card)",
    boxShadow: "var(--shadow-card)",
    border: "none",
  },
  flat: {
    background: "var(--surface-card)",
    boxShadow: "none",
    border: "1px solid var(--border-subtle)",
  },
  mint: {
    background: "var(--surface-mint)",
    boxShadow: "none",
    border: "none",
  },
  "mint-dashed": {
    background: "var(--surface-mint)",
    boxShadow: "none",
    border: "1.5px dashed var(--border-dashed)",
  },
};

/**
 * Surface container. The app's bread-and-butter white rounded card
 * with soft neutral shadow. `tone` switches to mint or dashed-mint
 * (the "나의 목표" / share panels).
 */
export function Card({
  children,
  tone = "default",
  padding = "var(--pad-card)",
  radius = "var(--radius-lg)",
  onClick,
  style,
  ...rest
}: CardProps) {
  const t = TONES[tone];

  return (
    <div
      onClick={onClick}
      style={{
        borderRadius: radius,
        padding,
        boxSizing: "border-box",
        cursor: onClick ? "pointer" : "default",
        ...t,
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
