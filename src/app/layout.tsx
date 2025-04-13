import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/presentation/components/Navbar";

export const metadata: Metadata = {
  title: "Solar system",
  description: "Solar system",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
