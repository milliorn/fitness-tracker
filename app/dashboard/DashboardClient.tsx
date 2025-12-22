"use client";

import { authClient } from "@/auth-client";
import { Box, Button, Stack, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

/**
 * This component is intentionally client-side because it handles user-initiated sign-out.
 * The session object is treated as **hydrated state**, not a source of truth.
 * Authoritative authentication state always lives on the server.
 */
type DashboardClientProps = {
  // This is derived identity, not authoritative session state
  email: string;
  // This is the hydrated auth session created by your auth system (Better Auth)
  session: {
    // This is the session record, not the user
    session: {
      // Unique identifier for this specific login session
      id: string;
      // When this login session was created
      createdAt: Date;
      // Last time the session was touched (refresh, activity, renewal)
      updatedAt: Date;
      // Foreign key that is a pointer to exactly one row in the users table
      userId: string;
      // Hard cutoff for session validity
      expiresAt: Date;
      // The session credential
      token: string;
      // IP address at session creation or last update
      ipAddress?: string | null | undefined;
      // Browser or device signature
      userAgent?: string | null | undefined;
    };
    // This is identity, not authentication
    user: {
      // Primary key for the user
      id: string;
      // Account creation timestamp
      createdAt: Date;
      // Last profile update
      updatedAt: Date;
      // User’s canonical email
      email: string;
      // Whether the email has been verified
      emailVerified: boolean;
      // Display name
      name: string;
      // Avatar URL (Google OAuth gives this)
      image?: string | null | undefined;
    };
  } | null;
};

/**
 * Client-side dashboard shell.
 *
 * - Display basic authenticated identity information
 * - Provide a sign-out action
 * - Optionally expose session debug data in non-production environments
 *
 * This component deliberately avoids owning authentication logic itself;
 * it delegates session mutation to the shared auth client.
 *
 * @param props - {@link DashboardClientProps}
 * @returns The client-rendered dashboard UI.
 */ export function DashboardClient({ session, email }: DashboardClientProps) {
  const router = useRouter();

  async function handleSignOut() {
    try {
      await authClient.signOut({
        fetchOptions: {
          onSuccess: () => {
            router.push("/");
          },
        },
      });
    } catch (error) {
      console.error("Failed to sign out", error);
    }
  }

  return (
    <Box component="main">
      <Stack spacing={3}>
        <Typography variant="h4" component="h1">
          Dashboard
        </Typography>

        <Typography variant="body1">
          You&apos;re signed in as <strong>{email}</strong>.
        </Typography>

        {process.env.NODE_ENV !== "production" && session && (
          <Box
            component="pre"
            sx={{
              p: 2,
              borderRadius: 2,
              bgcolor: "background.paper",
              overflowX: "auto",
              fontSize: 12,
            }}
          >
            {JSON.stringify(
              {
                email,
                session,
              },
              null,
              2,
            )}
          </Box>
        )}

        <Typography variant="body2">
          This is a placeholder dashboard.
        </Typography>

        <Button
          onClick={handleSignOut}
          type="button"
          variant="outlined"
          sx={{
            alignSelf: "flex-start",
            fontWeight: 600,
            textTransform: "none",
          }}
          data-cy="signout-button"
        >
          Sign out
        </Button>
      </Stack>
    </Box>
  );
}
