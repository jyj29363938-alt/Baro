"use client";

import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { SplashScreen } from "./SplashScreen";

export function SplashGate({ children }: { children: React.ReactNode }) {
  const [showSplash, setShowSplash] = useState(true);
  const [fadingOut, setFadingOut] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  return (
    <>
      {showSplash && (
        <SplashScreen
          fadingOut={fadingOut}
          onAnimationDone={() => {
            setFadingOut(true);
            if (pathname !== "/") router.replace("/");
            setTimeout(() => setShowSplash(false), 400);
          }}
        />
      )}
      {children}
    </>
  );
}
