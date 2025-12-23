export type SocialProvider = "google" | "discord" | "github";

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
