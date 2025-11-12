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
      <Box sx={{
        width: "100%",
        maxWidth: 320,             
        p: 3,
        borderRadius: 3,
        boxShadow: 8,
        bgcolor: "background.paper",
      }}>{children}</Box>
    </Container>
  );
}
