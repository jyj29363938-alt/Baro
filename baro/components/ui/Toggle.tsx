import React from "react";

interface ToggleProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onChange"> {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
}

/**
 * On/off switch. Matches the app-settings toggles: green track when
 * on, gray when off, with a white thumb and a soft mint glow on the
 * active state.
 */
export function Toggle({
  checked = false,
  onChange,
  disabled = false,
  style,
  ...rest
}: ToggleProps) {
  const W = 48;
  const H = 28;
  const pad = 3;
  const thumb = H - pad * 2;

  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      disabled={disabled}
      onClick={() => !disabled && onChange && onChange(!checked)}
      style={{
        position: "relative",
        width: W,
        height: H,
        flex: "none",
        border: "none",
        padding: 0,
        borderRadius: "var(--radius-pill)",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.5 : 1,
        background: checked
          ? "linear-gradient(90deg, var(--green-300) 0%, var(--brand-primary) 100%)"
          : "var(--neutral-300)",
        boxShadow: checked ? "var(--shadow-brand-soft)" : "none",
        transition: "background var(--duration-base) var(--ease-standard)",
        ...style,
      }}
      {...rest}
    >
      <span
        style={{
          position: "absolute",
          top: pad,
          left: checked ? W - thumb - pad : pad,
          width: thumb,
          height: thumb,
          borderRadius: "50%",
          background: "var(--neutral-0)",
          boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
          transition: "left var(--duration-base) var(--ease-out)",
        }}
      />
    </button>
  );
}
