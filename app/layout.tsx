import type { Metadata } from "next";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import MuiTheme from "./MuiTheme";

export const metadata: Metadata = {
  authors: [{ name: "Scott Milliorn", url: "https://github.com/milliorn" }],
  category: "Fitness and Health",
  creator: "Scott Milliorn",
  description: "Future Fitness App",
  icons: "",  
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
  title: {
    template: "%s | GymScry App",
    default: "GymScry App",
  },
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
