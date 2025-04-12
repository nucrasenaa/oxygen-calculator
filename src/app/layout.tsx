import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Script from "next/script";
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from "@vercel/speed-insights/next"
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "คำนวณเวลาการใช้งานถังออกซิเจน | Oxygen Tank Calculator",
  description: "แอปพลิเคชันคำนวณเวลาการใช้งานถังออกซิเจนฟรี สำหรับคำนวณระยะเวลาการใช้งานถังออกซิเจนขนาด D, E, M, H cylinder ด้วยการใส่ค่า LPM และแรงดัน PSI",
  keywords: ["oxygen calculator", "oxygen tank", "medical calculator", "ออกซิเจน", "คำนวณออกซิเจน", "ถังออกซิเจน", "แอปพลิเคชันทางการแพทย์"],
  openGraph: {
    title: "คำนวณเวลาการใช้งานถังออกซิเจน | Oxygen Tank Calculator",
    description: "แอปพลิเคชันคำนวณเวลาการใช้งานถังออกซิเจนฟรี สำหรับคำนวณระยะเวลาการใช้งานถังออกซิเจนขนาด D, E, M, H cylinder",
    url: "https://oxygen-calculator.vercel.app",
    type: "website",
    images: [
      {
        url: "https://oxygen-calculator.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Oxygen Calculator Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "คำนวณเวลาการใช้งานถังออกซิเจน | Oxygen Tank Calculator",
    description: "แอปพลิเคชันคำนวณเวลาการใช้งานถังออกซิเจนฟรี สำหรับคำนวณระยะเวลาการใช้งานถังออกซิเจน",
    images: ["https://oxygen-calculator.vercel.app/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Sakarin" />
        <link rel="canonical" href="https://oxygen-calculator.vercel.app" />
        <meta name="robots" content="index, follow" />
      </head>
      <body className={`${inter.className} bg-gray-100 flex flex-col min-h-screen`}>
        <div className="flex-grow">
          {children}
          <Analytics />
          <SpeedInsights/>
        </div>
        <Footer />
        <Script id="structured-data" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "คำนวณเวลาการใช้งานถังออกซิเจน",
              "description": "แอปพลิเคชันคำนวณเวลาการใช้งานถังออกซิเจนฟรี สำหรับคำนวณระยะเวลาการใช้งานถังออกซิเจนขนาด D, E, M, H cylinder",
              "url": "https://oxygen-calculator.vercel.app",
              "applicationCategory": "HealthApplication",
              "operatingSystem": "All",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "THB"
              },
              "author": {
                "@type": "Person",
                "name": "Sakarin",
                "email": "crase_sakarin@hotmail.com"
              }
            }
          `}
        </Script>
      </body>
    </html>
  );
}