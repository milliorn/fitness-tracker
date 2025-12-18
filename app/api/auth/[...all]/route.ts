import { auth } from "@/auth";
import { toNextJsHandler } from "better-auth/next-js";

/**
 * Auth Route Handler (Next.js App Router)
 *
 * This file bridges the framework-agnostic `better-auth` instance into
 * Next.js route handlers by adapting it to the App Router’s HTTP interface.

 * - All authentication logic (providers, callbacks, sessions, storage)
 *   lives in `@/auth`, not here
 * - This file should remain thin and declarative to avoid framework lock-in
 * - Exporting both GET and POST supports OAuth redirects and form-based flows
 *
 * Reference:
 * https://www.better-auth.com/docs/installation#mount-handler
 */
export const { POST, GET } = toNextJsHandler(auth);
