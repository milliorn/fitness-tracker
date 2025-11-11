"use client";

import NextLink from "next/link";
import { FormEvent, useState } from "react";
import {
  Box,
  Button,
  Container,
  IconButton,
  TextField,
  Typography,
  Link as MUILink,
  Alert,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const validate = () => {
    if (!email.trim()) return "Email is required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return "Enter a valid email";
    if (!password.trim()) return "Password is required";
    return null;
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    const msg = validate();
    if (msg) {
      setError(msg);
      return;
    }

    try {
      setSubmitting(true);
      // TODO: Replace with real auth call
      await new Promise((r) => setTimeout(r, 500));
      // decide: redirect after real auth
    } catch {
      setError("Unable to log in. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Container component="main" maxWidth="sm" sx={{ py: 6 }}>
      {/* Top nav row */}
      <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
        <IconButton
          aria-label="Back to Home"
          component={NextLink}
          data-cy="back-to-home-icon"
          href="/"
        >
          <ArrowBackIcon />
        </IconButton>

        <Typography variant="h5" component="h1" sx={{ ml: 1, fontWeight: 600 }}>
          Log in
        </Typography>
      </Box>

      <Box sx={{ mb: 2 }}>
        <MUILink component={NextLink} href="/" underline="hover">
          Back to Home
        </MUILink>
      </Box>

      {error ? (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      ) : null}

      {/* Form */}
      <Box
        aria-label="Login form"
        component="form"
        data-cy="login-form"
        noValidate
        onSubmit={onSubmit}
        sx={{ display: "grid", gap: 2 }}
      >
        <TextField
          autoComplete="email"
          fullWidth
          label="Email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          required
          slotProps={{ htmlInput: { "data-cy": "input-email" } }}
          type="email"
          value={email}
        />

        <TextField
          autoComplete="current-password"
          fullWidth
          label="Password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          required
          slotProps={{ htmlInput: { "data-cy": "input-password" } }}
          type="password"
          value={password}
        />

        <Button
          data-cy="login-submit"
          disabled={submitting}
          size="large"
          type="submit"
          variant="contained"
          fullWidth
        >
          {submitting ? "Logging in…" : "Log in"}
        </Button>

        <Typography variant="body2" sx={{ mt: 1 }}>
          Don’t have an account?{" "}
          <MUILink
            component={NextLink}
            href="/register"
            underline="hover"
            data-cy="register-link"
          >
            Create one
          </MUILink>
        </Typography>
      </Box>
    </Container>
  );
}
