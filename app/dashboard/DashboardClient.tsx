"use client";

import { authClient } from "@/auth-client";
import { Box, Button, Stack, Typography } from "@mui/material";

type DashboardClientProps = {
  email: string;
};

// We'll use this for sign-out and any future client hooks.
export function DashboardClient({ email }: DashboardClientProps) {
  async function handleSignOut() {
    try {
      await authClient.signOut();
    } catch (error) {
      console.error("Failed to sign out", error);
    }
  }

  return (
    <Box component="main">
      <Stack spacing={3}>
        <Typography variant="h4" component="h1">
          Dashboard
        </Typography>

        <Typography variant="body1">
          You&apos;re signed in as <strong>{email}</strong>.
        </Typography>

        <Typography variant="body2">
          This is a placeholder dashboard.
        </Typography>

        <Button
          onClick={handleSignOut}
          type="button"
          variant="outlined"
          sx={{
            alignSelf: "flex-start",
            fontWeight: 600,
            textTransform: "none",
          }}
          data-cy="signout-button"
        >
          Sign out
        </Button>
      </Stack>
    </Box>
  );
}
