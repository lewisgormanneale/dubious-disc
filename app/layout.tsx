import "@/styles/globals.css";
import { PropsWithChildren } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Gracidea",
    template: "%s | Gracidea",
  },
  description: "Your source for Pokémon Tools, Resources and News",
  icons: {
    icon: "/icon-192.png",
    shortcut: "/favicon/favicon.ico",
    apple: "/favicon/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
