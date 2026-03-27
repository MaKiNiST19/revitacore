import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";
import Navigation from "@/components/Navigation";
import IntroOverlay from "@/components/IntroOverlay";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Revitacore | Premium Supplements",
  description: "Bilimsel verilere dayanan günlük takviye çözümleri.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={`${inter.className} min-h-screen bg-background text-foreground tracking-tight selection:bg-black selection:text-white`}>
        <IntroOverlay />
        <Providers>
          {children}
          <Navigation />
        </Providers>
      </body>
    </html>
  );
}
