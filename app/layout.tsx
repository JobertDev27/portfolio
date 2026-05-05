import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

export const metadata: Metadata = {
  title: "JobertDev",
  description: "Portfolio of JobertDev",
};

const iosevka = localFont({
  src: "./fonts/Iosevka.ttf",
  variable: "--font-iosevka",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={iosevka.className}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
