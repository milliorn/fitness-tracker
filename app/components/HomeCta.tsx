import Button from "@mui/material/Button";
import Link from "next/link";

type HomeCtaProps = {
  /**
   * Destination URL for the CTA.
   *
   * Passed directly to Next.js `Link` to enable client-side navigation
   * and preserve framework-level optimizations (prefetching, routing).
   */
  href: string;

  /**
   * Cypress selector used for end-to-end and regression testing.
   */
  cy: string;

  /**
   * Visible label rendered inside the button.
   */
  label: string;
};

/**Home page Call-To-Action button.
 *
 * This component composes MUI's `Button` with Next.js `Link` to:
 * - Preserve semantic anchor behavior and client-side routing
 * - Enforce consistent CTA styling across the home page
 * - Avoid duplicating style logic in multiple places
 *
 * Styling is defined inline via `sx` to keep CTA-specific design
 * decisions, rather than leaking into the
 * global theme.
 *
 * @param props - {@link HomeCtaProps}
 * @returns A styled, link-backed call-to-action button.
 */
export function HomeCta({ href, cy, label }: HomeCtaProps) {
  // MUI Button is rendered as a Next.js Link to combine visual styling
  // with proper routing behavior and accessibility semantics.
  return (
    <Button
      component={Link}
      href={href}
      data-cy={cy}
      variant="outlined"
      sx={{
        borderColor: "common.white",
        borderRadius: "9999px",
        color: "common.white",
        px: 4,
        "&:hover": { borderColor: "common.white" },
      }}
    >
      {label}
    </Button>
  );
}
