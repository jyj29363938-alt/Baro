import type { Metadata } from "next";
import "./globals.css";
import { BottomNav } from "@/components/ui/BottomNav";

export const metadata: Metadata = {
  title: "Baro — 자세교정",
  description: "흐름을 끊지 않는 자세교정 앱",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="h-full">
      <body className="min-h-full flex flex-col" style={{ background: "var(--surface-page)" }}>
        <div
          style={{
            width: "100%",
            maxWidth: "var(--app-width)",
            margin: "0 auto",
            minHeight: "100vh",
            background: "var(--surface-page)",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div style={{ flex: 1, paddingBottom: "var(--nav-height)" }}>
            {children}
          </div>
          <div style={{ position: "fixed", bottom: 0, left: 0, right: 0, maxWidth: "var(--app-width)", margin: "0 auto" }}>
            <BottomNav />
          </div>
        </div>
      </body>
    </html>
  );
}
