import { Button } from "@mui/material";

export type SocialProvider = "google" | "discord" | "github";

type SocialSignInButtonsProps = {
  onSignIn: (provider: SocialProvider) => void;
};

const SOCIAL_PROVIDERS: {
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

export function SocialSignInButtons({
  onSignIn,
}: SocialSignInButtonsProps) {
  return (
    <>
      {SOCIAL_PROVIDERS.map(({ provider, label, dataCy }) => (
        <Button
          key={provider}
          data-cy={dataCy}
          fullWidth
          onClick={() => onSignIn(provider)}
          sx={{ py: 1, textTransform: "none", fontWeight: 600 }}
          type="button"
          variant="contained"
        >
          {label}
        </Button>
      ))}
    </>
  );
}
