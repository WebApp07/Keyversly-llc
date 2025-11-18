import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title:
    "Keyversly — Affordable Microsoft, Adobe & Autodesk Software Keys genuine",
  description:
    "Buy genuine software license keys for Microsoft, Adobe, Autodesk, Office, Windows, and more at Keyversly. Instant delivery, secure checkout, and best prices online.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-poppins antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
