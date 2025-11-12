import { ReactNode } from "react";
import { Container, Box } from "@mui/material";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <Container
      maxWidth={false}
      sx={{
        display: "grid",
        minHeight: "100dvh",
        p: 2,
        placeItems: "center",
      }}
    >
      <Box sx={{ width: "100%", maxWidth: 320 }}>{children}</Box>
    </Container>
  );
}
