import Button from "@mui/material/Button";
import Link from "next/link";

type HomeCtaProps = {
  href: string;
  cy: string;
  label: string;
};

export function HomeCta({ href, cy, label }: HomeCtaProps) {
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
