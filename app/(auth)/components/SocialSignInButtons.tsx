import { Button } from "@mui/material";
import { SOCIAL_PROVIDERS, SocialProvider } from "../socialProviders";

/**
 * Props for the SocialButtons component.
 */
type SocialButtonsProps = {
  /**
   * Callback invoked when a social provider button is selected.
   */
  onAction: (provider: SocialProvider) => void;
};

/**
 * Renders a list of social authentication buttons.
 *
 * @param props - {@link SocialButtonsProps}
 * @returns A vertically stacked set of social sign-in buttons.
 */
export function SocialButtons({ onAction }: SocialButtonsProps) {
  /**
   * Mapping over a static provider definition
   */
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
