import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

export const metadata: Metadata = {
  title: "JobertDev",
  description: "Portfolio of JobertDev",
};

const jetbrains = localFont({
  src: "./fonts/Jetbrains-mono.ttf",
  variable: "--jetbrains-mono",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={jetbrains.className}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
