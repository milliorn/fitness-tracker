import { Box, Container, Stack } from "@mui/material";
import { ReactNode } from "react";
import BackToHome from "./components/BacktoHome";

/**
 * Shared layout wrapper for authentication routes.
 *
 * This layout is used by auth-related pages (e.g. `/login`, `/register`) to:
 * - Provide consistent navigation affordances back to the public landing page
 * - Keeps auth pages visually and structurally consistent
 * - Avoids duplicating layout and spacing logic in individual auth routes
 * - Encapsulates auth-specific chrome without leaking into the rest of the app
 *
 * @param props - Layout props
 * @param props.children - Auth page content rendered within the layout
 * @returns A centered, constrained layout wrapper for authentication routes.
 */
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
