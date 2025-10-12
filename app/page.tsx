import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

export default function Home() {
  return (
    <Box
      component="main"
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: 480,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 4,
        }}
      >
        <Avatar
          alt="Homepage Logo"
          src="/monolith.webp"
          sx={{ width: [160, 200, 240, 280, 320], height: [160, 200, 240, 280, 320] }}
        />

        <Stack
          id="home-login-register-buttons"
          direction={"row"}
          spacing={2}
          sx={{ alignItems: "center", justifyContent: "center", width: "100%" }}
        >
          <Button
            variant="outlined"
            sx={{
              borderRadius: "9999px",
              px: 2,
              color: "common.white",
              borderColor: "common.white",
              "&:hover": { borderColor: "common.white" },
            }}
          >
            Login
          </Button>
          <Button
            variant="outlined"
            sx={{
              borderRadius: "9999px",
              px: 2,
              color: "common.white",
              borderColor: "common.white",
              "&:hover": { borderColor: "common.white" },
            }}
          >
            Register
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}
