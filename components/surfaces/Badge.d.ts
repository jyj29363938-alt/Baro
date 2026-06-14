import React from "react";

export interface BadgeProps {
  children: React.ReactNode;
  /** @default "brand" */
  tone?: "brand" | "mint" | "streak" | "dark" | "neutral";
  /** Optional leading node (emoji/icon), e.g. the 🔥 flame. */
  icon?: React.ReactNode;
  /** @default "md" */
  size?: "sm" | "md" | "lg";
  style?: React.CSSProperties;
}

/**
 * Pill label / tag. `streak` is the white flame badge (🔥 23일차),
 * `brand`/`mint` for routine labels and status chips.
 */
export function Badge(props: BadgeProps): JSX.Element;
