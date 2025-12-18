import NextLink from "next/link";
import { Typography, Link } from "@mui/material";

/**
 * Props for {@link AuthCta}.
 *
 * A standardized authentication-related call-to-action (CTA) used across
 * login and registration flows to ensure visual, behavioral, and testing
 * consistency.
 *
 * Requiring the Cypress selector at the type level enforces testability
 * as a first-class concern and prevents accidental omission in critical
 * auth paths.
 */
type AuthCtaProps = {
  /**
   * Contextual prompt displayed before the CTA link.
   */
  question: string;

  /**
   * Destination route for the CTA.
   */
  href: string;

  /**
   * Visible, clickable label rendered as the link text.
   */
  label: string;

  /**
   * Cypress selector used for stable end-to-end testing.
   */
  "data-cy": string;
};

/**
 * Inline authentication call-to-action component.
 *
 * This component renders:
 * - Non-interactive contextual copy (`question`)
 * - A semantic, client-routed link (`label`)
 *
 * - Composes MUI `Link` with Next.js `Link` to preserve client-side routing
 *   while retaining MUI theming and accessibility behavior.
 * - Rendered as a `span` to allow inline placement without forcing
 *   block-level layout behavior.
 *
 * @param props - {@link AuthCtaProps}
 * @returns An inline authentication CTA suitable for login and register views.
 */
export function AuthCta({
  question,
  href,
  label,
  "data-cy": dataCy,
}: AuthCtaProps) {
  return (
    <Typography
      component="span"
      sx={{ textAlign: "center", fontSize: 16 }}
      variant="body2"
    >
      {question}{" "}
      <Link component={NextLink} data-cy={dataCy} href={href}>
        {label}
      </Link>
    </Typography>
  );
}
