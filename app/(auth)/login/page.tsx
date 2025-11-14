"use client";

import { Box, Button, Stack, TextField, Typography } from "@mui/material";

import { useState } from "react";
import { AuthCta } from "../components/AuthCta";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: call your auth endpoint
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
