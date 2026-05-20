import localFont from "next/font/local";
import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "JobertDev",
  description: "Portfolio of JobertDev",
};

const jetbrains = localFont({
  src: "./fonts/JetBrainsMono-Regular.ttf",
  display: "swap",
  variable: "--jetbrains-mono",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={jetbrains.variable}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
