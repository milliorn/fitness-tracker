import { auth } from "@/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { DashboardClient } from "./DashboardClient";

/**
 * Server-side dashboard page.
 *
 * This is a Next.js App Router **Server Component** responsible for:
 * - Fetching the authoritative authentication session on the server
 * - Enforcing access control before any UI is rendered
 * - Redirecting unauthenticated users away from protected content
 *
 * All authentication checks happen here to ensure:
 * - Session validation cannot be bypassed client-side
 * - Protected data is never rendered or streamed to unauthenticated users
 *
 * Reference:
 * https://www.better-auth.com/docs/basic-usage#server-side-authentication
 *
 * @returns A server-rendered dashboard page or a redirect for unauthenticated users.
 */
export default async function DashboardPage() {
  /**
   * Retrieve the current authentication session using request headers.
   *
   * Passing `headers()` ensures the auth system has access to cookies
   * and other request metadata required to resolve the session.
   *
   * This represents the **source of truth** for authentication state.
   */
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  /**
   * Guard clause: if no valid user identity exists, the session
   * is considered unauthenticated.
   *
   * Redirects are executed on the server to prevent rendering
   * protected UI or leaking session-dependent data.
   */
  if (!session?.user) {
    redirect("/");
  }

  return (
    <DashboardClient
      email={session.user.email ?? "unknown email"}
      session={session}
    />
  );
}
