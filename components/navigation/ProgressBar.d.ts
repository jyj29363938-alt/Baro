import React from "react";

export interface ProgressBarProps {
  /** Number of filled segments. @default 2 */
  value?: number;
  /** Total segments. @default 5 */
  total?: number;
  /** @default 12 */
  segmentHeight?: number;
  /** @default 8 */
  gap?: number;
  filledColor?: string;
  trackColor?: string;
  style?: React.CSSProperties;
}

/** Segmented progress meter (인간화 단계 evolution bar / step indicator). */
export function ProgressBar(props: ProgressBarProps): JSX.Element;
