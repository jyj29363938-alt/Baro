"use client";

import { useState } from "react";
import { SplashScreen } from "./SplashScreen";

export function SplashGate({ children }: { children: React.ReactNode }) {
  const [showSplash, setShowSplash] = useState(true);
  const [fadingOut, setFadingOut] = useState(false);

  return (
    <>
      {showSplash && (
        <SplashScreen
          fadingOut={fadingOut}
          onAnimationDone={() => {
            setFadingOut(true);
            setTimeout(() => setShowSplash(false), 400);
          }}
        />
      )}
      {children}
    </>
  );
}
