import { Box, Container } from "@mui/material";
import { ReactNode } from "react";

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
      <Box sx={{
        bgcolor: "background.paper",
        borderRadius: 3,
        boxShadow: 8,
        maxWidth: 320,             
        p: 3,
        width: "100%",
      }}>{children}</Box>
    </Container>
  );
}
