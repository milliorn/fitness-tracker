"use client"; // Required because this page triggers client-side auth flows and event handlers

import {
  Box,
  Button,
  Divider,
  Stack,
  Typography,
} from "@mui/material";

import { AuthCta } from "../components/AuthCta";
import { authClient } from "@/auth-client";

/**
 *
 * Primary entry point for user authentication.
 *
 * - All auth side effects (redirects, token handling) are delegated to `authClient`
 *   to keep the UI layer thin and declarative.
 */
export default function LoginPage() {

  /**
   *
   * - Wrapped in an explicit handler instead of inline `onClick`
   *   to keep side effects isolated and testable.
   * - `callbackURL` is defined here (rather than globally) to make
   *   post-auth navigation explicit at the call site.
   */
  async function handleGoogleSignIn() {
    try {
      await authClient.signIn.social({
        provider: "google",
        callbackURL: "/dashboard",
      });
    } catch (err) {
      // Fail fast with a visible error in the critical auth path.
      // Intentionally noisy until replaced with a styled, user-friendly alert.
      console.error(err);
      // TODO: swap to MUI <Alert> once error states are fully designed
      alert("Failed to start Google sign-in. Please try again.");
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
            onClick={handleGoogleSignIn}
            sx={{ py: 1, textTransform: "none", fontWeight: 600 }}
            type="button"        
            variant="contained"
          >
            Continue with Google
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
