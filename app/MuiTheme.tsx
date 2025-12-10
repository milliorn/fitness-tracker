"use client";

import { PropsWithChildren } from "react";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme({
  components: {
    MuiLink: {
      defaultProps: {
        underline: "always"
      }
    }
  },
  palette: {
    mode: "dark",
    background: {
      default: { background: "#0a0a0a", foreground: "#ededed" }.background,
    },
    text: {
      primary: { background: "#0a0a0a", foreground: "#ededed" }.foreground,
    },
  },
});

export default function MuiTheme({ children }: PropsWithChildren) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
