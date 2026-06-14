import React from "react";

interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string | null;
  alt?: string;
  size?: number;
  ring?: boolean;
}

/**
 * Round user avatar. Renders an image when `src` is given, otherwise
 * a neutral placeholder circle (matching the app's gray default).
 * Optional brand ring for "active / streak" emphasis.
 */
export function Avatar({
  src = null,
  alt = "",
  size = 56,
  ring = false,
  style,
  ...rest
}: AvatarProps) {
  return (
    <div
      style={{
        position: "relative",
        width: size,
        height: size,
        borderRadius: "50%",
        flex: "none",
        background: "var(--neutral-300)",
        boxShadow: ring ? "0 0 0 3px var(--surface-card), 0 0 0 5px var(--brand-primary)" : "none",
        overflow: "hidden",
        ...style,
      }}
      {...rest}
    >
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={alt}
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
      ) : null}
    </div>
  );
}
