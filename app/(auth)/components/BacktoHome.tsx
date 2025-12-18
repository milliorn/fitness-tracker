import NextLink from "next/link";
import { Box, IconButton, Link } from "@mui/material";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";

/**
 * Back-to-home navigation control for authentication flows.
 *
 * This component provides a clear escape hatch from auth-related pages
 * (such as login and registration) back to the public landing page.
 *
 * - Exposes both an icon-based control and a text link to accommodate
 *   different user preferences and accessibility needs
 *
 * - Uses Next.js `Link` for client-side navigation
 * - Composes MUI components to preserve consistent theming and focus behavior
 * - Keeps routing logic declarative and colocated with the UI
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
