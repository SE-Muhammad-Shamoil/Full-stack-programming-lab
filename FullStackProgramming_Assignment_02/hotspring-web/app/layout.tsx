import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "HotSpring Portable Spas",
    template: "%s | HotSpring Portable Spas",
  },
  description: "Portable spas and hot tubs — HotSpring Portable Spas storefront (Assignment 1 design in Next.js).",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/css/style.css" />
      </head>
      <body>
        {children}
        <Script src="https://code.jquery.com/jquery-3.6.4.min.js" strategy="afterInteractive" />
        <Script src="/js/script.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
