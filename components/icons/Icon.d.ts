import React from "react";

export type IconName =
  | "home"
  | "event_note"
  | "cheer"
  | "alarm"
  | "person"
  | "notifications"
  | "favorite"
  | "chat"
  | "search_activity"
  | "notifications_off";

export interface IconProps {
  /** Glyph to render. */
  name: IconName;
  /** Box size in px. @default 24 */
  size?: number;
  /** Fill color. @default "currentColor" */
  color?: string;
  style?: React.CSSProperties;
}

/** Inline Material-Symbols icon — tints with currentColor. */
export function Icon(props: IconProps): JSX.Element | null;

/** All available icon names. */
export const ICON_NAMES: IconName[];
