"use client";

import NextLink from "next/link";
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
import { FormEvent, useState } from "react";

export default function RegisterPage() {
  const [confirm, setConfirm] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);
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

    const msg = validate();

    if (msg) {
      setError(msg);
      return;
    }

    try {
      setSubmitting(true);
      // TODO: Replace with real API call
      await new Promise((r) => setTimeout(r, 500));
      setSuccess("Account created. You can log in now.");
      // After wiring API, decide whether to redirect or stay.
    } catch (err) {
      setError("Something went wrong. Please try again.");
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
          Create your account
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
      {success ? (
        <Alert severity="success" sx={{ mb: 2 }}>
          {success}
        </Alert>
      ) : null}

      <Box
        aria-label="Register form"
        component="form"
        data-cy="register-form"
        noValidate
        onSubmit={onSubmit}
        sx={{ display: "grid", gap: 2 }}
      >
        <TextField
          autoComplete="name"
          fullWidth
          label="Display name"
          name="name"
          onChange={(e) => setName(e.target.value)}
          required
          slotProps={{ htmlInput: { "data-cy": "input-name" } }}
          value={name}
        />

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
          autoComplete="new-password"
          fullWidth
          helperText="At least 8 characters"
          label="Password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          required
          slotProps={{ htmlInput: { "data-cy": "input-password" } }}
          type="password"
          value={password}
        />

        <TextField
          autoComplete="new-password"
          fullWidth
          label="Confirm password"
          name="confirm"
          onChange={(e) => setConfirm(e.target.value)}
          required
          slotProps={{ htmlInput: { "data-cy": "input-confirm" } }}
          type="password"
          value={confirm}
        />

        <Button
          data-cy="register-cta"
          disabled={submitting}
          size="large"
          type="submit"
          variant="contained"
        >
          {submitting ? "Creating account…" : "Create account"}
        </Button>

        <Typography variant="body2" sx={{ mt: 1 }}>
          Already have an account?{" "}
          <MUILink component={NextLink} href="/login" underline="hover" data-cy="login-link">
            Log in
          </MUILink>
        </Typography>
      </Box>
    </Container>
  );
}
