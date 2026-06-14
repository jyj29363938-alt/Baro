import React from "react";

export interface DayChipProps {
  /** Single-character label, e.g. "월". */
  label: string;
  /** @default "outline" */
  state?: "filled" | "selected" | "outline" | "inactive";
  /** Diameter in px. @default 44 */
  size?: number;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  style?: React.CSSProperties;
}

/**
 * Circular day chip for the weekly streak tracker.
 * `filled` = completed, `selected` = today, `outline` = upcoming.
 */
export function DayChip(props: DayChipProps): JSX.Element;
