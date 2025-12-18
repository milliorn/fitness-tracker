import NextLink from "next/link";
import { Box, IconButton, Link } from "@mui/material";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";

/**
 * Back-to-home navigation control for authentication flows.
 *
 * This component provides an escape from auth-related pages back to the
 * public landing page.
 *
 * - Exposes both an icon-based affordance and a text link to support
 *   different user preferences and accessibility needs
 * - Uses Next.js `Link` to preserve client-side routing and prefetching
 * - Composes MUI components to ensure consistent theming, focus handling,
 *   and accessibility defaults
 * - Keeps routing declarative and colocated with the UI, avoiding
 *   imperative navigation logic
 *
 * @returns A horizontally aligned icon button and text link that navigate home.
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
