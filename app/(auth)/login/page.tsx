"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Box,
  Button,
  Stack,
  TextField,
  Typography,
  Link as MUILink,
} from "@mui/material";
import BackToHome from "../components/BacktoHome";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: call your auth endpoint
  }

  return (
    <Box
      component="main"
      sx={{
        minHeight: "100dvh",
        display: "grid",
        placeItems: "center",
        p: 2,
      }}
    >
      <Stack spacing={2} sx={{ width: "100%", maxWidth: 320 }}>
        <BackToHome />
        {/* Form */}
        <Box
          component="form"
          onSubmit={onSubmit}
          sx={{
            p: 3,
            borderRadius: 3,
            boxShadow: 8,
            bgcolor: "background.paper",
          }}
        >
          <Stack spacing={3}>
            <Typography variant="h4" component="h1">
              Log in
            </Typography>

            {/* Shrink labels = better contrast on dark */}
            <TextField
              label="Email"
              type="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              fullWidth
              required
              slotProps={{ inputLabel: { shrink: true } }}
            />

            <TextField
              label="Password"
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              fullWidth
              required
              slotProps={{ inputLabel: { shrink: true } }}
            />

            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{ py: 1, textTransform: "none", fontWeight: 600 }}
            >
              Log in
            </Button>

            <Typography variant="body2" sx={{ textAlign: "center" }}>
              Don’t have an account?{" "}
              <MUILink
                component={Link}
                href="/register"
                underline="hover"
                data-cy="register-cta"
              >
                Register
              </MUILink>
            </Typography>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
}
