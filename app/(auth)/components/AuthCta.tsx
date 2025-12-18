import NextLink from "next/link";
import { Typography, Link } from "@mui/material";

/**
 * Props for AuthCta.
 *
 * This component is intentionally narrow in scope: it represents a
 * standardized authentication-related call-to-action (CTA) used across
 * login/register flows to ensure visual, behavioral, and testing consistency.
 *
 * Requiring `data-cy` at the type level enforces testability as a first-class
 * concern and prevents accidental omission when the component is consumed.
 */
type AuthCtaProps = {
  /** Contextual question shown before the CTA (e.g. "Don't have an account?") */
  question: string;

  /** Destination route for the CTA (e.g. "/register", "/login") */
  href: string;

  /** Clickable label for the CTA link */
  label: string;

  /**
   * Cypress selector.
   * Enforced here (rather than optional) to guarantee stable E2E selectors
   * for auth flows, which are critical paths and prone to UI churn.
   */
  "data-cy": string;
};

/**
 * AuthCta
 *
 * Renders a small, inline authentication CTA composed of:
 *  - non-interactive contextual text (`question`)
 *  - a semantic link (`label`) that performs client-side navigation
 *
 * Design notes:
 * - Uses MUI `Link` + `NextLink` to preserve Next.js client routing
 *   while maintaining MUI theming and accessibility defaults.
 * - Wrapped in `Typography` to keep text alignment, font sizing, and
 *   line-height consistent with surrounding auth copy.
 * - Rendered as a `span` to allow inline placement within forms/layouts
 *   without forcing block-level behavior.
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
      <Link
        component={NextLink} 
        data-cy={dataCy}
        href={href}
      >
        {label}
      </Link>
    </Typography>
  );
}
