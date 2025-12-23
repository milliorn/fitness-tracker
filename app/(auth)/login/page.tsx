"use client"; // Required because this page initiates client-side auth flows and event handlers

import { Box, Divider, Stack, Typography } from "@mui/material";

import { AuthCta } from "../components/AuthCta";
import { authClient } from "@/auth-client";
import { SocialProvider } from "../socialProviders";
import { SocialButtons } from "../components/SocialSignInButtons";

/**
 * Login page for initiating user authentication.
 *
 * This page is implemented as a Client Component because it:
 * - Initiates interactive OAuth flows that require browser redirects
 * - Handles user-driven events (button clicks)
 * - Delegates all authentication side effects to the shared `authClient`
 *
 * @returns The login page UI and social authentication entry points.
 */
export default function LoginPage() {
  /**
   * Initiates a social OAuth sign-in flow.
   *
   * @param provider - The selected social authentication provider
   */
  async function handleSocialSignIn(provider: SocialProvider) {
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

          <SocialButtons onAction={handleSocialSignIn} />

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
