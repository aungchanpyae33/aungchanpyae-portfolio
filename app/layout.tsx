import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { outputBaseUrl } from "@/lib/utils";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aung Chan Pyae — Frontend Developer",
  description:
    "Frontend developer specializing in building exceptional digital experiences with React, TypeScript, and modern web technologies.",
  keywords: [
    "frontend developer",
    "react",
    "typescript",
    "next.js",
    "portfolio",
  ],
  authors: [{ name: "Aung Chan Pyae" }],
  openGraph: {
    title: "Aung Chan Pyae — Frontend Developer",
    description:
      "Frontend developer specializing in building exceptional digital experiences.",
    type: "website",
  },

  metadataBase: outputBaseUrl(),
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    apple: "/apple-touch-icon.png",
  },

  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${firaCode.variable}`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
