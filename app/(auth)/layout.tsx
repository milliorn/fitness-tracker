import { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        display: "grid",
        minHeight: "100dvh",
        padding: "16px",
        placeItems: "center",
      }}
    >
      <div style={{ width: "100%", maxWidth: 320 }}>{children}</div>
    </div>
  );
}
