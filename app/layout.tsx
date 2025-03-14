import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Report Penjualan",
  description: "Build & Develop by Fahmi Dhika",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
