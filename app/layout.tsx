import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import ConfigureAmplifyClientSide from "@/amplifyComponents/ConfigureAmplify";
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Derek Norrbom",
  description: "Derek Norrbom",
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
      <ConfigureAmplifyClientSide />
      {children}
      <Footer />
      </body>
    </html>
  );
}
