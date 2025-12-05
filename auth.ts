import { betterAuth } from "better-auth";
import { db } from "./db";

// https://www.better-auth.com/docs/installation#authentication-methods
// https://www.better-auth.com/docs/basic-usage#sign-up
export const auth = betterAuth({
  database: db,
  emailAndPassword: {
    enabled: false, // pivot away from email/password for now
  },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    },
  },
});