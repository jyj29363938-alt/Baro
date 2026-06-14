import React from "react";

export interface AvatarProps {
  src?: string | null;
  alt?: string;
  /** Diameter in px. @default 56 */
  size?: number;
  /** Brand ring for active/streak emphasis. @default false */
  ring?: boolean;
  style?: React.CSSProperties;
}

/** Circular user avatar with neutral placeholder + optional brand ring. */
export function Avatar(props: AvatarProps): JSX.Element;
