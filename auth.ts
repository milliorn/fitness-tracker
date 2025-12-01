import { betterAuth } from "better-auth";
import { db } from "./db";

// https://www.better-auth.com/docs/installation#authentication-methods
export const auth = betterAuth({
  database: db,
  emailAndPassword: { enabled: true, autoSignIn: false },
});
