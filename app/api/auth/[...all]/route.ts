import { auth } from "@/auth";
import { toNextJsHandler } from "better-auth/next-js";

/**
 * Authentication route handler for the Next.js App Router.
 *
 * - All authentication configuration and business logic (providers,
 *   callbacks, session handling, storage) live in `@/auth`
 *
 * - Exporting both `GET` and `POST` handlers is required to support:
 *   - OAuth redirects and callbacks (GET)
 *   - Credential-based or form-driven flows (POST)
 *
 * Reference:
 * https://www.better-auth.com/docs/installation#mount-handler
 *
 * @returns Next.js-compatible route handlers for authentication requests.
 */
export const { POST, GET } = toNextJsHandler(auth);
