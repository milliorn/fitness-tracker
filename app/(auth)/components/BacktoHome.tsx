import NextLink from "next/link";
import { Box, IconButton, Link,  } from "@mui/material";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";

export default function BackToHome() {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
      <IconButton
        component={NextLink}
        href="/"
        aria-label="Back to Home"
        size="large"
        data-cy="back-to-home"
      >
        <ArrowCircleLeftIcon fontSize="large" />
      </IconButton>
      <Link
        component={NextLink}
        href="/"
        underline="hover"
        sx={{ fontSize: 16 }}
      >
        Back to Home
      </Link>
    </Box>
  );
}
