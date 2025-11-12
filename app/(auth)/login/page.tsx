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
    >
      <Stack spacing={2} sx={{ width: "100%", maxWidth: 320 }}>
        <BackToHome />
        {/* Form */}
        <Box
          component="form"
          onSubmit={onSubmit}
        >
          <Stack spacing={3}>
            <Typography variant="h4" component="h1">
              Log in
            </Typography>

            {/* Shrink labels = better contrast on dark */}
            <TextField
              autoComplete="email"
              fullWidth
              label="Email"
              onChange={(e) => setEmail(e.target.value)}
              required
              slotProps={{ inputLabel: { shrink: true } }}
              type="email"
              value={email}
            />

            <TextField
              autoComplete="current-password"
              fullWidth
              label="Password"
              onChange={(e) => setPassword(e.target.value)}
              required
              slotProps={{ inputLabel: { shrink: true } }}
              type="password"
              value={password}
            />

            <Button
              fullWidth
              sx={{ py: 1, textTransform: "none", fontWeight: 600 }}
              type="submit"
              variant="contained"
            >
              Log in
            </Button>

            <Typography
              sx={{ textAlign: "center", fontSize: "16px" }}
              variant="body2"
            >
              Don’t have an account?{" "}
              <MUILink
                component={Link}
                data-cy="register-cta"
                href="/register"
                underline="hover"
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
