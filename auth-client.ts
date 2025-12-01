import { createAuthClient } from "better-auth/react";

// https://www.better-auth.com/docs/installation#create-client-instance
export const authClient = createAuthClient({
  // no baseURL needed on same origin
  // baseURL: "http://localhost:3000",
});
