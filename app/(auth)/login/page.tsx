"use client";

import { useState } from "react";
import {
  Box,
  Button,
  Stack,
  TextField,
  Typography,
  Link as MUILink,
} from "@mui/material";
import Link from "next/link";

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
      sx={{ display: "grid", placeItems: "center", minHeight: "100dvh" }}
    >
      <Box
        component="form"
        onSubmit={onSubmit}
        sx={{ width: "100%", maxWidth: 300 }}
      >
        <Stack spacing={4}>
          <Typography variant="h4" component="h1">
            Log in
          </Typography>
          <TextField
            label="Email"
            type="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            required
          />
          <TextField
            label="Password"
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
            required
          />
          <Button type="submit" variant="contained">
            Log in
          </Button>
          <Typography variant="body2">
            Don’t have an account?{" "}
            <MUILink component={Link} href="/register" underline="hover">
              Register
            </MUILink>
          </Typography>
        </Stack>
      </Box>
    </Box>
  );
}
