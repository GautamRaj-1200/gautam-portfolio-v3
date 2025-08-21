import type { Metadata } from "next";
import { Space_Grotesk, Sour_Gummy } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const sourGummy = Sour_Gummy({
  variable: "--font-sour-gummy",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gautam's Portfolio",
  description: "Gautam's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${spaceGrotesk.className} antialiased bg-gradient-to-b from-black to-gray-600`}
      >
        <Navbar />
        <div className="max-w-5xl mx-auto">{children}</div>
      </body>
    </html>
  );
}
