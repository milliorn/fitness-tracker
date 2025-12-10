import { Box, Typography } from "@mui/material";

export default function DashboardPage() {
  return (
    <Box component="main" sx={{ maxWidth: 480, mx: "auto", mt: 8, px: 2 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Dashboard
      </Typography>
      <Typography variant="body1">
        You&apos;re signed in. This is your dashboard placeholder for now.
      </Typography>
    </Box>
  );
}
