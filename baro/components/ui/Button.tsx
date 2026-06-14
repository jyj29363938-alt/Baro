import React from "react";

type ButtonVariant = "primary" | "dark" | "soft" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  full?: boolean;
  leadingIcon?: React.ReactNode;
}

const SIZES: Record<ButtonSize, { height: number; padding: string; font: string }> = {
  sm: { height: 36, padding: "0 16px", font: "var(--font-size-sm)" },
  md: { height: 48, padding: "0 22px", font: "var(--font-size-base)" },
  lg: { height: 56, padding: "0 28px", font: "var(--font-size-md)" },
};

const VARIANTS: Record<ButtonVariant, React.CSSProperties> = {
  primary: {
    background: "var(--brand-primary)",
    color: "var(--brand-on-primary)",
    border: "none",
    boxShadow: "var(--shadow-brand-soft)",
  },
  dark: {
    background: "var(--neutral-900)",
    color: "var(--green-400)",
    border: "none",
  },
  soft: {
    background: "var(--surface-mint-strong)",
    color: "var(--text-brand)",
    border: "none",
  },
  ghost: {
    background: "transparent",
    color: "var(--text-brand)",
    border: "1.5px dashed var(--border-dashed)",
  },
};

/**
 * Baro primary action button.
 * Pill-shaped, SemiBold label. Variants map to the three button
 * styles used across the app: solid brand green, dark "on-mint"
 * fill, and dashed ghost (for add / share affordances).
 */
export function Button({
  children,
  variant = "primary",
  size = "md",
  full = false,
  disabled = false,
  leadingIcon = null,
  style,
  ...rest
}: ButtonProps) {
  const s = SIZES[size];
  const v = VARIANTS[variant];

  return (
    <button
      type="button"
      disabled={disabled}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "8px",
        height: s.height,
        padding: s.padding,
        width: full ? "100%" : "auto",
        fontFamily: "var(--font-sans)",
        fontSize: s.font,
        fontWeight: "var(--weight-semibold)",
        letterSpacing: "-0.01em",
        borderRadius: "var(--radius-pill)",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.45 : 1,
        transition: "transform var(--duration-fast) var(--ease-standard), filter var(--duration-base) var(--ease-standard)",
        ...v,
        ...style,
      }}
      onMouseDown={(e) => { if (!disabled) e.currentTarget.style.transform = "scale(var(--press-scale))"; }}
      onMouseUp={(e) => { e.currentTarget.style.transform = "scale(1)"; }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; }}
      {...rest}
    >
      {leadingIcon}
      {children}
    </button>
  );
}
