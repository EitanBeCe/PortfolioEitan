import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Eitan's Portfolio",
  description: "Modern & Minimalist web developer portfolio.",
  keywords: "web development, frontend, React, Next.js, Tailwind, portfolio",
  authors: [{ name: "Eitan", url: "https://www.linkedin.com/in/eitan-elberg/" }], // FIXME: when deployed
  openGraph: {
    title: "Eitan's Portfolio",
    description: "Modern & Minimalist web developer portfolio.",
    url: "https://www.linkedin.com/in/eitan-elberg/", // FIXME: when deployed
    siteName: "Eitan's Portfolio",
    images: [
      {
        url: "https://yourwebsite.com/og-image.png", // FIXME: when deployed. og-image.png is already in Public. Maybe upload new from the finished website. Size 1200x630. To check if it works: Facebook Debugger → developers.facebook.com/tools/debug. Twitter Card Validator → cards-dev.twitter.com/validator
        width: 1200,
        height: 630,
        alt: "Eitan's Portfolio",
      },
    ],
    type: "website",
  },
  icons: {
    icon: "/favicon-32x32.png",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
