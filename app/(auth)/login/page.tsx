"use client"; // Required because this page initiates client-side auth flows and event handlers

import { Box, Button, Divider, Stack, Typography } from "@mui/material";

import { AuthCta } from "../components/AuthCta";
import { authClient } from "@/auth-client";

/**
 * Login page for initiating user authentication.
 *
 * This page is intentionally implemented as a Client Component because it:
 * - Triggers interactive authentication flows (OAuth redirects)
 * - Handles user-driven events (button clicks)
 * - Delegates all auth side effects to the shared auth client
 *
 * @returns The login page UI and authentication entry points.
 */
export default function LoginPage() {
  /**
   * Initiates Social OAuth sign-in.
   * - Wrapped in a named handler instead of an inline `onClick`
   *   to keep side effects isolated, readable, and testable
   * - `callbackURL` is defined locally to make post-auth navigation
   *   explicit at the call site rather than hidden in configuration
   *
   * Error handling:
   * - Fail-fast with a visible error in this critical auth path
   * - Uses a temporary `alert` for visibility during early development
   *   and will be replaced with a styled MUI alert once error states
   *   are fully designed
   */
  async function handleSocialSignIn(provider: "google" | "discord") {
    try {
      await authClient.signIn.social({
        provider,
        callbackURL: "/dashboard",
      });
    } catch (err) {
      console.error(err);
      alert(`Failed to start ${provider} sign-in. Please try again.`);
    }
  }

  return (
    <>
      <Box component="form">
        <Stack spacing={3}>
          <Typography variant="h4" component="h1">
            Log in
          </Typography>

          <Button
            data-cy="google-signin"
            fullWidth
            onClick={() => handleSocialSignIn("google")}
            sx={{ py: 1, textTransform: "none", fontWeight: 600 }}
            type="button"
            variant="contained"
          >
            Continue with Google
          </Button>

          <Button
            data-cy="discord-signin"
            fullWidth
            onClick={() => handleSocialSignIn("discord")}
            sx={{ py: 1, textTransform: "none", fontWeight: 600 }}
            type="button"
            variant="contained"
          >
            Continue with Discord
          </Button>

          <Divider>
            <Typography component="p" variant="body2" sx={{ m: 0 }}>
              or use email (coming soon)
            </Typography>
          </Divider>
        </Stack>
      </Box>

      <AuthCta
        data-cy="register-cta"
        href="/register"
        label="Register"
        question="Don’t have an account?"
      />
    </>
  );
}
