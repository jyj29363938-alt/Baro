import React from "react";

export interface NavTab {
  key: string;
  label: string;
  /** Icon name from the Icon component, e.g. "home". */
  icon: string;
}

export interface BottomNavProps {
  /** @default the 4 Baro destinations (home/record/stretch/alarm) */
  tabs?: NavTab[];
  /** key of the active tab. @default "home" */
  active?: string;
  onChange?: (key: string) => void;
  style?: React.CSSProperties;
}

/**
 * Fixed bottom tab bar — four destinations with a green active
 * indicator. Icons are masked SVGs so they tint with currentColor.
 */
export function BottomNav(props: BottomNavProps): JSX.Element;
