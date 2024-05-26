import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { notoSanKr } from "./fonts";

export const metadata: Metadata = {
  title: "Pedro Féo",
  description: "This is an online portfolio for Pedro Féo, software engineer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={notoSanKr.className}>
      <body>{children}</body>
    </html>
  );
}
