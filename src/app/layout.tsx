import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/styles/globals.css";
import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ParallaxSection from "./components/ParallaxSection";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wigan Central Mosque",
  description: "Wigan Central Mosque & Community Centre, by Create Next App",
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
          {children}
        <Footer />
      </body>
    </html>
  );
}
