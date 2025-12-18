import type { MetadataRoute } from "next";

/**
 * Progressive Web App (PWA) manifest configuration.
 *
 * This function defines the web app manifest.
 *
 * In the Next.js App Router, exporting a `manifest()` function
 * automatically wires this configuration to `/manifest.webmanifest`.
 *
 * @returns A Web App Manifest object describing the PWA configuration.
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    /**
     * Background color used while the app is loading.
     */
    background_color: "#000000",

    /**
     * Human-readable description of the application.
     */
    description: "Future Fitness App",

    /**
     * Text direction for the application.
     */
    dir: "ltr",

    /**
     * Display mode when launched from the home screen.
     */
    display: "standalone",

    /**
     * Primary language of the application.
     */
    lang: "en",

    /**
     * Full application name shown in install prompts
     * and system-level UI.
     */
    name: "GymScry App",

    /**
     * Shortened name used where space is constrained,
     * such as home screen icons.
     */
    short_name: "GymScry",

    /**
     * Entry point when the app is launched as a PWA.
     */
    start_url: "/",

    /**
     * Theme color used by the browser UI (address bar, task switcher).
     */
    theme_color: "#1976d2",

    /**
     * Application icons.
     */
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
