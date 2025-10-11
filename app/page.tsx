import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

export default function Home() {
  return (
    <Box><Avatar alt='Homepage Logo' src='monolith.webp' sx={{
      width: 200,
      height: 200
    }}></Avatar>
      <ButtonGroup
        id="home-login-register-buttons"
        variant="outlined"
        aria-label="login and register buttons"
        sx={{
          // overrides inline-flex for consistent spacing control
          alignItems: "center",
          borderRadius: "9999px",
          display: "flex",
          justifyContent: "center",
          "& .MuiButton-root": {
            borderColor: "white",
            borderRadius: "9999px",
            color: "white",
            px: 3,
          },
          // CSS selector that targets every .MuiButton-root except the last one inside the
          // ButtonGroup to add spacing between the buttons, but not after the last one.
          "& .MuiButton-root:not(:last-of-type)": {
            marginRight: "12px",
          },
        }}
      >
        <Button>Login</Button>
        <Button>Register</Button>
      </ButtonGroup></Box>
  );
}
