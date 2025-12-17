"use client";

import {
  Box,
  Button,
  Divider,
  Stack,
  Typography,
} from "@mui/material";

import { AuthCta } from "../components/AuthCta";
import NextLink from "next/link";

export default function RegisterPage() {
  return (
    <Box
      aria-label="Register form"
      component="form"
      data-cy="register-form"
      noValidate
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
