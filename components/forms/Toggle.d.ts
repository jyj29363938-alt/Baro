import React from "react";

export interface ToggleProps {
  checked?: boolean;
  onChange?: (next: boolean) => void;
  disabled?: boolean;
  style?: React.CSSProperties;
}

/**
 * Settings on/off switch — green gradient track when on, gray when off.
 */
export function Toggle(props: ToggleProps): JSX.Element;
