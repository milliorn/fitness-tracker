import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

export default function Home() {
  return (
    <ButtonGroup
      variant="outlined"
      aria-label="login and register buttons"
      sx={{
        "& .MuiButton-root": {
          borderColor: "white",
          borderRadius: '9999px',
          color: "white",
          px: 2

        },
      }}
    >
      <Button>Login</Button>
      <Button>Register</Button>
    </ButtonGroup>
  );
}
