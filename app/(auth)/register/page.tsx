"use client";

import {
  Alert,
  Box,
  Button,
  Link as MUILink,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import Link from "next/link";
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

    if (validate()) {
      setError(validate());
      return;
    }

    try {
      setSubmitting(true);
      // TODO: Replace with real API call
      await new Promise((r) => setTimeout(r, 500));
      setSuccess("Account created. You can log in now.");
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  {
    /* Form */
  }
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
        {success ? <Alert severity="success">{success}</Alert> : null}

        <Button
          data-cy="register-cta"
          disabled={submitting}
          fullWidth
          type="submit"
          variant="contained"
          sx={{ py: 1, textTransform: "none", fontWeight: 600 }}
        >
          {submitting ? "Creating account…" : "Create account"}
        </Button>

        <Typography
          sx={{ textAlign: "center", fontSize: "16px" }}
          variant="body2"
        >
          Already have an account?{" "}
          <MUILink
            component={Link}
            data-cy="login-link"
            href="/login"
            underline="hover"
          >
            Log in
          </MUILink>
        </Typography>
      </Stack>
    </Box>
  );
}
