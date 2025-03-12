import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "คำนวณเวลาการใช้งานถังออกซิเจน",
  description: "แอปพลิเคชันคำนวณเวลาการใช้งานถังออกซิเจน",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body className={`${inter.className} bg-gray-100`}>{children}</body>
    </html>
  );
}