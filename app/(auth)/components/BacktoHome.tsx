"use client";

import NextLink from "next/link";
import { Box, IconButton, Link as MUILink } from "@mui/material";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";

// Minimal, uniform BackToHome used across auth pages
export default function BackToHome({ href = "/" }) {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
      <IconButton
        component={NextLink}
        href={href}
        aria-label="Back to Home"
        size="large"
        data-cy="back-to-home"
      >
        <ArrowCircleLeftIcon fontSize="large" />
      </IconButton>
      <MUILink
        component={NextLink}
        href={href}
        underline="hover"
        sx={{ fontSize: 16 }}
      >
        Back to Home
      </MUILink>
    </Box>
  );
}
