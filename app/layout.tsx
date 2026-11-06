import type { Metadata } from "next";
import "./globals.css";
import { AppShell } from "@/core/layout/AppShell";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000"),
  title: "StellarDock",
  description: "Open-source developer utilities for inspecting the Stellar network — accounts, assets, transactions and Soroban contracts.",
  icons: {
    icon: "/devtool-profile.png",
    apple: "/devtool-profile.png"
  },
  openGraph: {
    title: "StellarDock",
    description: "Open-source developer utilities for inspecting the Stellar network — accounts, assets, transactions and Soroban contracts.",
    images: ["/devtool-profile.png"]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
