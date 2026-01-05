import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layouts/Header";
import { Footer } from "@/components/layouts/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MindMood - AI-Powered Mental Wellness",
  description:
    "MindMood is an AI-powered mental wellness platform designed to support your emotional wellbeing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} relative text-neutral-700 text-[13px] not-italic normal-nums font-normal accent-auto tracking-[normal] leading-[21.45px] list-outside list-disc overflow-x-hidden overflow-y-auto pointer-events-auto text-start indent-0 normal-case visible border-separate font-questrial`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
