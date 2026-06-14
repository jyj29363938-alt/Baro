import React from "react";

type IconButtonVariant = "mint" | "neutral" | "solid" | "ghost";

interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactNode;
  variant?: IconButtonVariant;
  size?: number;
  active?: boolean;
  ariaLabel?: string;
}

const VARIANTS: Record<IconButtonVariant, React.CSSProperties> = {
  mint: { background: "var(--surface-mint)", color: "var(--brand-primary)" },
  neutral: { background: "var(--neutral-100)", color: "var(--text-secondary)" },
  solid: { background: "var(--brand-primary)", color: "var(--brand-on-primary)" },
  ghost: { background: "transparent", color: "var(--text-secondary)" },
};

/**
 * Circular icon button. Used for the header person/bell actions
 * (mint-filled circle) and edit/pencil affordances (neutral circle).
 */
export function IconButton({
  icon,
  variant = "mint",
  size = 44,
  active = false,
  ariaLabel,
  style,
  ...rest
}: IconButtonProps) {
  const v = VARIANTS[variant];
  const glyph = Math.round(size * 0.5);

  return (
    <button
      type="button"
      aria-label={ariaLabel}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: size,
        height: size,
        borderRadius: "var(--radius-pill)",
        border: "none",
        cursor: "pointer",
        flex: "none",
        transition: "transform var(--duration-fast) var(--ease-standard)",
        ...v,
        ...style,
      }}
      onMouseDown={(e) => { e.currentTarget.style.transform = "scale(0.92)"; }}
      onMouseUp={(e) => { e.currentTarget.style.transform = "scale(1)"; }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; }}
      {...rest}
    >
      <span style={{ width: glyph, height: glyph, display: "inline-flex", color: active ? "var(--brand-primary)" : v.color }}>
        {icon}
      </span>
    </button>
  );
}
