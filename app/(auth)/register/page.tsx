"use client"; // Required for client-side navigation and interactive auth affordances

import {
  Box,
  Button,
  Divider,
  Stack,
  Typography,
} from "@mui/material";

import { AuthCta } from "../components/AuthCta";
import NextLink from "next/link";

/**
 *
 * Registration entry point with intentionally constrained functionality.
 *
 * - Email/password registration is explicitly disabled.
 * - Users are funneled back to login to continue via Google OAuth.
 * - Preserve routing symmetry (/login ↔ /register)
 */
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
