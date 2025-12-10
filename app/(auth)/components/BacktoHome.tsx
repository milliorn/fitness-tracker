import NextLink from "next/link";
import { Box, IconButton, Link } from "@mui/material";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";

export default function BackToHome() {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
      <IconButton
        aria-label="Back to Home"
        component={NextLink}
        data-cy="back-to-home"
        href="/"
        size="large"
      >
        <ArrowCircleLeftIcon fontSize="large" />
      </IconButton>
      <Link component={NextLink} href="/" sx={{ fontSize: 16 }}>
        Back to Home
      </Link>
    </Box>
  );
}
