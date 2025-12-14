import { auth } from "@/auth";
import { Box, Stack, Typography } from "@mui/material";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

// https://www.better-auth.com/docs/basic-usage#server-side-authentication
export default async function DashboardPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  // No valid session? Send the user to login.
  if (!session?.user) {
    redirect("/");
  }

  return (
    <Box component="main">
      <Stack spacing={3}>
        <Typography variant="h4" component="h1">
          Dashboard
        </Typography>

        <Typography variant="body1">
          You&apos;re signed in as{" "}
          <strong>{session.user.email ?? "unknown email"}</strong>.
        </Typography>

        <Typography variant="body2">
          This is a placeholder dashboard.
        </Typography>
      </Stack>
    </Box>
  );
}
