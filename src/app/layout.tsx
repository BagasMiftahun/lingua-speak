import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script"; // Import Script component from Next.js
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Ling AI Speaks",
  description: "Generated by OPEN AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        {/* Use the Script component for loading the external script */}
        <Script src="./node_modules/preline/dist/preline.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
