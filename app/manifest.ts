import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    background_color: "#000000",
    description: "Future Fitness App",
    dir: "ltr",
    display: "standalone",
    lang: "en",
    name: "GymScry App",
    short_name: "GymScry",
    start_url: "/",
    theme_color: "#1976d2",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      // {
      //   src: "/icons/icon-192.png",
      //   sizes: "192x192",
      //   type: "image/png",
      // },
      // {
      //   src: "/icons/icon-512.png",
      //   sizes: "512x512",
      //   type: "image/png",
      // },
    ],
  };
}
