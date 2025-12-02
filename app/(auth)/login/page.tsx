"use client";

import { Box, Button, Stack, TextField, Typography } from "@mui/material";

import { FormEvent, useState } from "react";
import { AuthCta } from "../components/AuthCta";
import { authClient } from "@/auth-client";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      const { error } = await authClient.signIn.email(
        {
          email,
          password,
          callbackURL: "/dashboard",
          rememberMe: true, // explicit so you can tweak later
        },
        {
          onError(ctx) {
            // minimal UX for now; can swap to MUI <Alert> later
            alert(ctx.error.message ?? "Unable to log in. Please try again.");
          },
        },
      );

      if (error) {
        // in case you prefer checking the return instead of callbacks
        alert(error.message ?? "Unable to log in. Please try again.");
      }

      // onSuccess + callbackURL will handle redirect for us
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Please try again.");
    }
  }

  /* Form */
  return (
    <Box component="form" onSubmit={onSubmit}>
      <Stack spacing={3}>
        <Typography variant="h4" component="h1">
          Log in
        </Typography>

        {/* Shrink labels = better contrast on dark */}
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
          variant="contained"
          sx={{ py: 1, textTransform: "none", fontWeight: 600 }}
        >
          Log in
        </Button>

        <AuthCta
          data-cy="register-cta"
          href="/register"
          label="Register"
          question="Don’t have an account?"
        />
      </Stack>
    </Box>
  );
}
