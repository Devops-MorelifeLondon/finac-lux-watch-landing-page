import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sell Your Luxury Watch in the UK | Finacforce Luxury Horology",
  description:
    "Looking to sell a luxury watch in the UK? Get a complimentary, personalised valuation for Rolex, Patek Philippe, Audemars Piguet, Omega, Cartier and prestige timepieces. Transparent, no-obligation appraisal service.",
  keywords: [
    "sell luxury watch UK",
    "sell Rolex UK",
    "sell Patek Philippe UK",
    "sell Audemars Piguet UK",
    "sell Omega watch UK",
    "sell Cartier watch UK",
    "luxury watch valuation UK",
    "watch appraisal London",
    "pre-owned luxury watch buyers UK",
  ],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Sell Your Luxury Watch in the UK | Finacforce Luxury",
    description:
      "Get a personalised valuation for Rolex, Patek Philippe, Audemars Piguet, Omega and fine horology. Transparent, no-obligation appraisal service.",
    url: "https://luxury.finacforce.com",
    siteName: "Finacforce Luxury Horology",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen flex flex-col bg-[#fffefb] text-[#201515] font-sans selection:bg-[#00da04] selection:text-black`}
      >
        {children}
      </body>
    </html>
  );
}
