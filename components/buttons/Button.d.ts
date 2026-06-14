import React from "react";

export interface ButtonProps {
  children: React.ReactNode;
  /** Visual style. @default "primary" */
  variant?: "primary" | "dark" | "soft" | "ghost";
  /** @default "md" */
  size?: "sm" | "md" | "lg";
  /** Stretch to container width. @default false */
  full?: boolean;
  disabled?: boolean;
  /** Optional icon node placed before the label. */
  leadingIcon?: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  style?: React.CSSProperties;
}

/**
 * Pill action button. `primary` for the main CTA (시작하기, 함께하기),
 * `dark` for emphasis on mint surfaces (미루기/끄기 in the alarm hero),
 * `soft` for low-emphasis mint actions, `ghost` (dashed) for add/share.
 *
 * @startingPoint section="Buttons" subtitle="Pill CTA with 4 variants" viewport="360x200"
 */
export function Button(props: ButtonProps): JSX.Element;
