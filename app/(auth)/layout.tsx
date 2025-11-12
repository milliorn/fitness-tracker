import { Box, Container, Stack } from "@mui/material";
import { ReactNode } from "react";
import BackToHome from "./components/BacktoHome";

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
      <Box
        component="main"
        sx={{
          bgcolor: "background.paper",
          borderRadius: 3,
          boxShadow: 8,
          maxWidth: 320,
          p: 3,
          width: "100%",
        }}
      >
        <Stack spacing={2} sx={{ width: "100%", maxWidth: 320 }}>
          <BackToHome />
          {children}
        </Stack>
      </Box>
    </Container>
  );
}
