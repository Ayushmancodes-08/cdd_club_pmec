// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Header from "./components/Header";
<<<<<<< HEAD
import Footer from "./components/Footer";
// NO global background components are imported here
=======
import FullPageGridBackground from "./components/GridBackground";
>>>>>>> 528c098c898fd56b045b64d101edbe2cbf60c854

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  title: "Coding Design Development Club",
  description:
    "When Code Meets Creativity, Magic Happens. Join the CDD Club to collaborate, explore, and create the future.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      {/*
        --- THIS IS THE FIX ---
<<<<<<< HEAD
        'bg-gray-950' has been REMOVED from the body tag.
        The body is now transparent, allowing the fixed backgrounds
        on the homepage to be visible.
      */}
      <body className={`${inter.variable} font-sans text-white overflow-x-hidden`}>
=======
        'bg-gray-950' has been REMOVED from the body.
        The body is now transparent, allowing the grid to be visible.
      */}
      <body className={`${inter.variable} font-sans text-white`}>
        <FullPageGridBackground />

>>>>>>> 528c098c898fd56b045b64d101edbe2cbf60c854
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
