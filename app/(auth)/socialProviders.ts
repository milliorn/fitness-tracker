/**
 * Supported social authentication providers.
 *
 * This union type constrains all social sign-in flows to a known,
 * explicitly supported set of providers. Using a string union
 * (rather than free-form strings) provides compile-time safety
 * and prevents accidental drift between UI, auth configuration,
 * and routing logic.
 */
export type SocialProvider = "google" | "discord" | "github";

/**
 * Declarative configuration for social authentication buttons.
 */
export const SOCIAL_PROVIDERS: {
  provider: SocialProvider;
  label: string;
  dataCy: string;
}[] = [
  {
    provider: "google",
    label: "Continue with Google",
    dataCy: "google-signin",
  },
  {
    provider: "discord",
    label: "Continue with Discord",
    dataCy: "discord-signin",
  },
  {
    provider: "github",
    label: "Continue with GitHub",
    dataCy: "github-signin",
  },
];
