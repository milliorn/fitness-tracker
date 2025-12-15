import { auth } from "@/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { DashboardClient } from "./DashboardClient";

// https://www.better-auth.com/docs/basic-usage#server-side-authentication
export default async function DashboardPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  // No valid session? Send the user to login.
  if (!session?.user) {
    redirect("/");
  }

  return (
    <DashboardClient email={session.user.email ?? "unknown email"} />
  );
}

