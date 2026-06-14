import React from "react";

export interface CardProps {
  children: React.ReactNode;
  /** @default "default" */
  tone?: "default" | "flat" | "mint" | "mint-dashed";
  /** CSS padding value. @default var(--pad-card) */
  padding?: string;
  /** CSS border-radius. @default var(--radius-lg) */
  radius?: string;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
  style?: React.CSSProperties;
}

/**
 * Rounded surface container. `default` = white + soft shadow,
 * `mint` / `mint-dashed` = brand-wash panels (goal & share cards).
 *
 * @startingPoint section="Surfaces" subtitle="Rounded card, 4 tones" viewport="360x200"
 */
export function Card(props: CardProps): JSX.Element;
