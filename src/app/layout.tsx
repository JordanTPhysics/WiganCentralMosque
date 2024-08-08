
import { Inter } from "next/font/google";
import { Metadata } from "next";
import React from "react";

import Footer from "../components/Footer";
import Header from "../components/Header";
import "@/app/styles/globals.css";


const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Wigan Central Masjid",
  description: "Wigan Central Masjid & Community Centre, by Create Next App",
  icons: "/favicon.ico",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="description" content={metadata.description || ""} />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <title>{String(metadata.title)}</title>
      </head>
      <body className={inter.className}>
        <Header />
          {children}
        <Footer />
      </body>
    </html>
  );
}
