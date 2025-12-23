import { Button } from "@mui/material";
import { SOCIAL_PROVIDERS, SocialProvider } from "../socialProviders";

type SocialButtonsProps = {
  onAction: (provider: SocialProvider) => void;
};

export function SocialButtons({ onAction }: SocialButtonsProps) {
  return (
    <>
      {SOCIAL_PROVIDERS.map(({ provider, label, dataCy }) => (
        <Button
          key={provider}
          data-cy={dataCy}
          fullWidth
          onClick={() => onAction(provider)}
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
