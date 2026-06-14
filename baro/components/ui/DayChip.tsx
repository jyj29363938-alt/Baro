import React from "react";

type DayChipState = "filled" | "selected" | "outline" | "inactive";

interface DayChipProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  state?: DayChipState;
  size?: number;
}

const STATES: Record<DayChipState, React.CSSProperties> = {
  filled: {
    background: "var(--brand-primary)",
    color: "var(--brand-on-primary)",
    border: "none",
    boxShadow: "var(--shadow-brand-soft)",
  },
  selected: {
    background: "var(--surface-mint)",
    color: "var(--brand-primary)",
    border: "1.5px solid var(--green-200)",
  },
  outline: {
    background: "transparent",
    color: "var(--brand-primary)",
    border: "1.5px dashed var(--border-dashed)",
  },
  inactive: {
    background: "var(--neutral-100)",
    color: "var(--text-tertiary)",
    border: "none",
  },
};

/**
 * Day-of-week selector chip (월·화·수…). Three visual states match
 * the home weekly tracker: filled (done), selected (light/today),
 * and outline (upcoming, dashed border).
 */
export function DayChip({
  label,
  state = "outline",
  size = 44,
  onClick,
  style,
  ...rest
}: DayChipProps) {
  const v = STATES[state];

  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: size,
        height: size,
        borderRadius: "var(--radius-pill)",
        fontFamily: "var(--font-sans)",
        fontSize: "var(--font-size-sm)",
        fontWeight: "var(--weight-semibold)",
        cursor: onClick ? "pointer" : "default",
        flex: "none",
        transition: "transform var(--duration-fast) var(--ease-standard)",
        ...v,
        ...style,
      }}
      {...rest}
    >
      {label}
    </button>
  );
}
