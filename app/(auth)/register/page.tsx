"use client"; // Required for client-side navigation and interactive auth affordances

import { Box, Divider, Stack, Typography } from "@mui/material";

import { AuthCta } from "../components/AuthCta";
import { SocialButtons } from "../components/SocialSignInButtons";
import { SocialProvider } from "../socialProviders";
import { useRouter } from "next/navigation";

/**
 * This page exists to preserve routing symmetry (`/login` ↔ `/register`)
 * while explicitly disabling email/password registration during early
 * development.
 *
 * - Prevent users from attempting unsupported registration paths
 * - Maintain a familiar auth flow structure for future expansion
 *
 * @returns The registration page UI.
 */
export default function RegisterPage() {
  const router = useRouter();

  function redirectToLogin(_provider: SocialProvider): void {
    router.push("/login");
  }

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

        <SocialButtons onAction={redirectToLogin} />

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
