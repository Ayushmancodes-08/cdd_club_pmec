import type { Metadata } from "next";
// import { Inter } from "next/font/google"; // Removed: Cannot be resolved in this environment
import "./globals.css";

import Header from "./components/Header";
import Footer from "./components/Footer";

// const inter = Inter({ subsets: ["latin"], variable: "--font-inter" }); // Removed

export const metadata: Metadata = { // Added 'Metadata' type for clarity
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
        'bg-gray-950' has been REMOVED from the body tag.
        The body is now transparent, allowing the fixed backgrounds
        on the homepage (or any other page) to be visible.
        'overflow-x-hidden' prevents horizontal scrollbars.
      */}
      <body
        className={`font-sans text-white overflow-x-hidden`} // Removed 'inter.variable'
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}