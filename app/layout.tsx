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
      <body>
        <Navbar />
        <main className="max-w-7xl mx-auto px-6">{children}</main>
      </body>
    </html>
  );
}
