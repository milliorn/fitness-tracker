import type { Metadata } from "next";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import MuiTheme from "./MuiTheme";

export const metadata: Metadata = {
  title: {
    template: '%s | GymScry App',
    default: 'GymScry App',
  }, description: "Future Fitness App",

}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <MuiTheme>{children}</MuiTheme>
        </AppRouterCacheProvider>{" "}
      </body>
    </html>
  );
}
