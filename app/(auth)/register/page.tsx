"use client";

import NextLink from "next/link";
import {
  Box,
  Button,
  IconButton,
  Stack,
  TextField,
  Typography,
  Link as MUILink,
  Alert,
} from "@mui/material";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
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
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Box
      component="main"
      sx={{
        minHeight: "100dvh",
        display: "grid",
        placeItems: "center",
        p: 2,
      }}
    >
      <Stack spacing={2} sx={{ width: "100%", maxWidth: 320 }}>
        {/* Back to Home */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <IconButton
            component={NextLink}
            href="/"
            aria-label="Back to Home"
            size="large"
            data-cy="back-to-home-icon"
          >
            <ArrowCircleLeftIcon fontSize="large" />
          </IconButton>
          <MUILink component={NextLink} href="/" underline="hover" sx={{ fontSize: 16 }}>
            Back to Home
          </MUILink>
        </Box>

        {/* Form */}
        <Box
          component="form"
          onSubmit={onSubmit}
          sx={{
            p: 3,
            borderRadius: 3,
            boxShadow: 8,
            bgcolor: "background.paper",
          }}
          aria-label="Register form"
          data-cy="register-form"
          noValidate
        >
          <Stack spacing={3}>
            <Typography variant="h4" component="h1">
              Create your account
            </Typography>

            {/* Shrink labels = better contrast on dark */}
            <TextField
              label="Display name"
              name="name"
              autoComplete="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              fullWidth
              required
              slotProps={{ inputLabel: { shrink: true }, htmlInput: { "data-cy": "input-name" } }}
            />

            <TextField
              label="Email"
              type="email"
              name="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              fullWidth
              required
              slotProps={{ inputLabel: { shrink: true }, htmlInput: { "data-cy": "input-email" } }}
            />

            <TextField
              label="Password"
              type="password"
              name="password"
              autoComplete="new-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              fullWidth
              required
              helperText="At least 8 characters"
              slotProps={{ inputLabel: { shrink: true }, htmlInput: { "data-cy": "input-password" } }}
            />

            <TextField
              label="Confirm password"
              type="password"
              name="confirm"
              autoComplete="new-password"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              fullWidth
              required
              slotProps={{ inputLabel: { shrink: true }, htmlInput: { "data-cy": "input-confirm" } }}
            />

            {error ? (
              <Alert severity="error">{error}</Alert>
            ) : null}
            {success ? (
              <Alert severity="success">{success}</Alert>
            ) : null}

            <Button
              type="submit"
              variant="contained"
              fullWidth
              disabled={submitting}
              data-cy="register-cta"
              sx={{ py: 1, textTransform: "none", fontWeight: 600 }}
            >
              {submitting ? "Creating account…" : "Create account"}
            </Button>

            <Typography variant="body2" sx={{ textAlign: "center" }}>
              Already have an account?{" "}
              <MUILink component={NextLink} href="/login" underline="hover" data-cy="login-link">
                Log in
              </MUILink>
            </Typography>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
}
