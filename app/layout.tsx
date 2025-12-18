import type { Metadata } from "next";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import MuiTheme from "./MuiTheme";

/**
 * Global metadata configuration for the application.
 *
 * Defining metadata at the root layout level ensures:
 * - Sensible defaults across all routes
 * - Consistent branding and discoverability
 * - Individual pages can override or extend values as needed
 */
export const metadata: Metadata = {
  /**
   * Author information for SEO and document attribution.
   */
  authors: [{ name: "Scott Milliorn", url: "https://github.com/milliorn" }],

  /**
   * High-level content category used by search engines.
   */
  category: "Fitness and Health",

  /**
   * Primary creator of the application.
   */
  creator: "Scott Milliorn",

  /**
   * Default meta description used when a page does not
   * provide its own description.
   */
  description: "Future Fitness App",

  /**
   * Application icons configuration.
   *
   * Intentionally left empty for now; this is typically
   * populated later with PWA and favicon assets.
   */
  icons: "",

  /**
   * SEO keywords describing the app’s purpose and feature set.
   *
   * These are broad and long-tail terms aimed at improving
   * discoverability for fitness-related searches.
   */
  keywords: [
    "GymScry",
    "fitness tracker",
    "workout tracker",
    "gym app",
    "gym workout planner",
    "exercise tracker",
    "strength training logs",
    "cardio tracking app",
    "fitness progress tracking",
    "gym routine planner",
    "health and fitness app",
    "weightlifting tracker",
    "personal fitness dashboard",
    "fitness goals tracking",
    "gym performance analytics",
  ],

  /**
   * Title configuration with template support.
   *
   * Individual pages can supply a title segment which
   * will be injected into this template automatically.
   */
  title: {
    template: "%s | GymScry App",
    default: "GymScry App",
  },
};

/**
 * Root layout for the application.
 *
 * This is a Next.js App Router **Server Component** that:
 * - Defines the top-level HTML structure
 * - Installs global providers required by the UI framework
 * - Wraps all routes with consistent theming and caching behavior
 *
 * Every page and nested layout is rendered as a descendant
 * of this component.
 *
 * @param props - Layout props
 * @param props.children - The route content being rendered
 * @returns The root HTML layout for the application.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  /**
   * The MUI App Router cache provider is required to:
   * - Ensure correct style injection order
   * - Prevent style duplication during server/client rendering
   * - Enable compatibility with React Server Components
   *
   * `enableCssLayer` is enabled to align with MUI v6+
   * CSS layering and avoid specificity conflicts.
   */
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <MuiTheme>{children}</MuiTheme>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
