import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { CurrencyProvider } from "@/context/CurrencyContext";

export const metadata: Metadata = {
  title: "KoreaVerse — Everything About South Korea in One Place",
  description:
    "Study, Scholarships, Universities, Travel, Language, Culture and everything international students need to know about South Korea.",
  keywords: [
    "Study in Korea",
    "GKS Scholarship",
    "Korean Universities",
    "TOPIK",
    "South Korea Travel",
    "Korean Culture",
    "Student Visa Korea",
  ],
  openGraph: {
    title: "KoreaVerse — Everything About South Korea in One Place",
    description:
      "Your complete guide to studying, living, and exploring South Korea.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
<html lang="en">
<body
        className="bg-[#F6F8FC] text-[#14213A] antialiased"
      >
        <CurrencyProvider>
          <Navbar />
<main className="min-h-screen w-full overflow-x-hidden">{children}</main>
          <Footer />
        </CurrencyProvider>
      </body>
    </html>
  );
}
