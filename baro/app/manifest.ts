import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Baro 자세교정",
    short_name: "Baro",
    description: "흐름을 끊지 않는 자세교정 앱",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#00C776",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
