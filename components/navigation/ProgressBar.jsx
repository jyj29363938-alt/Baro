import React from "react";

/**
 * Segmented progress bar — the "인간화 단계" evolution meter and the
 * generic step indicator. Renders `total` segments, the first
 * `value` filled with the brand color.
 */
export function ProgressBar({
  value = 2,
  total = 5,
  segmentHeight = 12,
  gap = 8,
  filledColor = "var(--brand-primary)",
  trackColor = "var(--green-100)",
  style,
  ...rest
}) {
  return (
    <div
      style={{ display: "flex", gap, width: "100%", ...style }}
      role="progressbar"
      aria-valuenow={value}
      aria-valuemax={total}
      {...rest}
    >
      {Array.from({ length: total }).map((_, i) => (
        <span
          key={i}
          style={{
            flex: 1,
            height: segmentHeight,
            borderRadius: "var(--radius-pill)",
            background: i < value ? filledColor : trackColor,
            boxShadow: i < value ? "var(--shadow-brand-soft)" : "none",
            transition: "background var(--duration-base) var(--ease-standard)",
          }}
        />
      ))}
    </div>
  );
}
