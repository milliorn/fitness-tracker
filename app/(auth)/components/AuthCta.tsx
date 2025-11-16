import NextLink from "next/link";
import { Typography, Link } from "@mui/material";

type AuthCtaProps = {
  question: string;
  href: string;
  label: string;
  "data-cy": string;
};

// Call to Action
export function AuthCta({
  question,
  href,
  label,
  "data-cy": dataCy,
}: AuthCtaProps) {
  return (
    <Typography sx={{ textAlign: "center", fontSize: "16px" }} variant="body2">
      {question}{" "}
      <Link component={NextLink} data-cy={dataCy} href={href} underline="hover">
        {label}
      </Link>
    </Typography>
  );
}
