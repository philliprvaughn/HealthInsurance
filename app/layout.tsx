
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Phil Vaughn | Licensed Health Insurance Agent",
  description: "Simple, honest health insurance guidance for individuals, families, and small businesses.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
