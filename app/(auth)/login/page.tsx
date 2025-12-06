"use client";

import {
  Box,
  Button,
  Divider,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import { FormEvent, useState } from "react";
import { AuthCta } from "../components/AuthCta";
import { authClient } from "@/auth-client";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Intentionally a no-op for now.
    // We’ll wire this up to authClient.signIn.email later.
    console.log("Email/password login not implemented yet", {
      email,
      password,
    });
  }

  return (
    <>
      <Box component="form" onSubmit={onSubmit}>
        <Stack spacing={3}>
          <Typography variant="h4" component="h1">
            Log in
          </Typography>

          <Button
            fullWidth
            type="button"
            variant="contained"
            sx={{ py: 1, textTransform: "none", fontWeight: 600 }}
            onClick={handleGoogleSignIn}
            data-cy="google-signin"
          >
            Continue with Google
          </Button>

          <Divider>
            <Typography component="p" variant="body2" sx={{ m: 0 }}>
              or use email (coming soon)
            </Typography>
          </Divider>

          <TextField
            autoComplete="email"
            fullWidth
            label="Email"
            onChange={(e) => setEmail(e.target.value)}
            required
            slotProps={{ inputLabel: { shrink: true } }}
            type="email"
            value={email}
          />

          <TextField
            autoComplete="current-password"
            fullWidth
            label="Password"
            onChange={(e) => setPassword(e.target.value)}
            required
            slotProps={{ inputLabel: { shrink: true } }}
            type="password"
            value={password}
          />

          <Button
            fullWidth
            type="submit"
            variant="outlined"
            sx={{ py: 1, textTransform: "none", fontWeight: 600 }}
          >
            Log in with email (coming soon)
          </Button>
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
