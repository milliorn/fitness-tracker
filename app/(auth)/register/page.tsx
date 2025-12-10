"use client";

import {
  Alert,
  Box,
  Button,
  Divider,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import { FormEvent, useState } from "react";
import { AuthCta } from "../components/AuthCta";
import NextLink from "next/link";

// Placeholder register form – Google is the real path for now.
export default function RegisterPage() {
  const [confirm, setConfirm] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState<string | null>(null);

  const validate = () => {
    if (!name.trim()) return "Display name is required";
    if (!email.trim()) return "Email is required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return "Enter a valid email";
    if (password.length < 8) return "Password must be at least 8 characters";
    if (password !== confirm) return "Passwords do not match";
    return null;
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    const validationError = validate();

    if (validationError) {
      setError(validationError);
      return;
    }

    // Placeholder behavior: no real sign-up yet.
    setSuccess(
      "Email/password registration is not available yet. Use “Continue with Google” on the login page.",
    );
  };

  return (
    <Box
      aria-label="Register form"
      component="form"
      data-cy="register-form"
      noValidate
      onSubmit={onSubmit}
    >
      <Stack spacing={3}>
        <Typography variant="h4" component="h1">
          Registration
        </Typography>

        <Typography variant="body1">
          Email/password registration is currently disabled.
        </Typography>

        <Button
          component={NextLink}
          href="/login"
          variant="contained"
          sx={{ py: 1, textTransform: "none", fontWeight: 600 }}
          // no-op now, but future-proof if the component changes
          type="button"
        >
          Continue with Google
        </Button>

        <Divider>or use email (coming soon)</Divider>

        <Typography variant="h4" component="h2">
          Create your account
        </Typography>

        {/* Shrink labels = better contrast on dark */}
        <TextField
          autoComplete="name"
          fullWidth
          label="Display name"
          name="name"
          onChange={(e) => setName(e.target.value)}
          required
          value={name}
          slotProps={{
            inputLabel: { shrink: true },
            htmlInput: { "data-cy": "input-name" },
          }}
        />

        <TextField
          autoComplete="email"
          fullWidth
          label="Email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          required
          type="email"
          value={email}
          slotProps={{
            inputLabel: { shrink: true },
            htmlInput: { "data-cy": "input-email" },
          }}
        />

        <TextField
          autoComplete="new-password"
          fullWidth
          helperText="At least 8 characters"
          label="Password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          required
          type="password"
          value={password}
          slotProps={{
            inputLabel: { shrink: true },
            htmlInput: { "data-cy": "input-password" },
          }}
        />

        <TextField
          autoComplete="new-password"
          fullWidth
          label="Confirm password"
          name="confirm"
          onChange={(e) => setConfirm(e.target.value)}
          required
          type="password"
          value={confirm}
          slotProps={{
            inputLabel: { shrink: true },
            htmlInput: { "data-cy": "input-confirm" },
          }}
        />

        {error ? <Alert severity="error">{error}</Alert> : null}
        {success ? <Alert severity="info">{success}</Alert> : null}

        <Button
          data-cy="register-cta"
          fullWidth
          type="submit"
          variant="outlined"
          sx={{ py: 1, textTransform: "none", fontWeight: 600 }}
        >
          Create account (coming soon)
        </Button>

        <AuthCta
          data-cy="login-cta"
          href="/login"
          label="Log in"
          question="Already have an account?"
        />
      </Stack>
    </Box>
  );
}
