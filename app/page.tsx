import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

export default function Home() {
  return (
    <Box
      component="main"
      sx={{
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
        minHeight: "100vh",
        paddingBottom: "4rem",
      }}
    >
      <Box
        sx={{
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          gap: 4,
          maxWidth: 480,
          width: "100%",
        }}
      >
        <Avatar
          alt="Homepage Logo"
          // Keep the fallback modest to avoid oversized speculative fetches
          src="/monolith-320.webp"
          // Candidates cover 160→320px slots across DPR 2–3
          slotProps={{
            img: {
              // Candidates cover 160→320px slots across DPR 2–3
              srcSet: [
                "/monolith-320.webp 320w", // 160px @ 2x
                "/monolith-400.webp 400w",
                "/monolith-480.webp 480w", // 160px @ 3x or 240px @ 2x
                "/monolith-560.webp 560w",
                "/monolith-640.webp 640w", // 320px @ 2x
                "/monolith-960.webp 960w", // 320px @ 3x (iPhone 12/14 Pro/Max, some Plus models)
              ].join(", "),
              // Mirror your sx widths (xs→xl). Browser picks the right candidate.
              sizes:
                "(min-width: 1536px) 320px, " +
                "(min-width: 1200px) 280px, " +
                "(min-width: 900px) 240px, " +
                "(min-width: 600px) 200px, " +
                "160px",
              loading: "lazy",
              ...({
                decoding: "async",
              } as unknown as React.ImgHTMLAttributes<HTMLImageElement>),
            },
          }}
          sx={{
            border: "1px solid",
            borderColor: "common.white",
            height: [160, 200, 240, 280, 320],
            width: [160, 200, 240, 280, 320],
          }}
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
              borderColor: "common.white",
              borderRadius: "9999px",
              color: "common.white",
              px: 4,
              "&:hover": { borderColor: "common.white" },
            }}
          >
            Login
          </Button>
          <Button
            variant="outlined"
            sx={{
              borderColor: "common.white",
              borderRadius: "9999px",
              color: "common.white",
              px: 4,
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
