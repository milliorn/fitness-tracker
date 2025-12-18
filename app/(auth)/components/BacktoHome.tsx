import NextLink from "next/link";
import { Box, IconButton, Link } from "@mui/material";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";

/**
 *
 * Provides a way back to the landing page
 * from authentication flows (e.g. login, register).
 *
 * This component exposes navigation affordances:
 *  - an icon button for fast, glanceable interaction
 *  - a text link for clarity and accessibility
 *
 * Both navigate to the same destination but serve different user preferences
 * and accessibility needs.
 */
export default function BackToHome() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1,
      }}
    >
      <IconButton
        aria-label="Back to Home"
        component={NextLink}      
        data-cy="back-to-home"    
        href="/"
        size="large"              
      >
        <ArrowCircleLeftIcon fontSize="large" />
      </IconButton>

      <Link
        component={NextLink} 
        href="/"
        sx={{ fontSize: 16 }} 
      >
        Back to Home
      </Link>
    </Box>
  );
}
