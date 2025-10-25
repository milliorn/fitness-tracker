import type { Metadata } from "next";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import MuiTheme from "./MuiTheme";


export const metadata: Metadata = {
  title: "GymScry App",
  description: "Future Fitness App",
};

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
