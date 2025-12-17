"use client";

import {
  Box,
  Button,
  Divider,
  Stack,
  Typography,
} from "@mui/material";

import { AuthCta } from "../components/AuthCta";
import { authClient } from "@/auth-client";

export default function LoginPage() {


  async function handleGoogleSignIn() {
    try {
      await authClient.signIn.social({
        provider: "google",
        callbackURL: "/dashboard",
      });
    } catch (err) {
      console.error(err);
      // TODO: swap to MUI <Alert> later
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
