import React from "react";

export interface IconButtonProps {
  /** SVG/icon node, sized automatically to ~50% of the button. */
  icon: React.ReactNode;
  /** @default "mint" */
  variant?: "mint" | "neutral" | "solid" | "ghost";
  /** Diameter in px. @default 44 */
  size?: number;
  active?: boolean;
  ariaLabel?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  style?: React.CSSProperties;
}

/**
 * Round icon button. `mint` for header actions (profile, bell),
 * `neutral` for edit/pencil chips, `solid` for emphasis.
 */
export function IconButton(props: IconButtonProps): JSX.Element;
