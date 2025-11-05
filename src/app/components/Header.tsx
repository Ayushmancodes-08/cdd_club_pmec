// app/components/Header.tsx
"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link"; // Import Link for future page navigation

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight; // Assuming hero is full height
      setIsScrolled(window.scrollY > heroHeight - 100); // Small buffer
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Redesigned navLinks tied to real sections/components
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "#features" },
    { name: "Programs", href: "#offers" },
    { name: "Faculty", href: "#faculty" },
    { name: "Gallery", href: "#gallery" },
    { name: "Events", href: "#events" },
    { name: "Projects", href: "#projects" },
    { name: "Team", href: "#team" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-black/30 backdrop-blur-md'}`}>
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className={`text-2xl font-bold tracking-tighter transition-colors ${isScrolled ? 'text-black hover:text-cyan-600' : 'text-white hover:text-cyan-400'}`}
        >
          CDD Club<span className={isScrolled ? 'text-cyan-600' : 'text-cyan-400'}>.</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`transition-colors px-3 py-2 rounded-md ${isScrolled ? 'text-gray-700 hover:text-cyan-600 hover:bg-cyan-50' : 'text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10'}`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Desktop Contact Button */}
        <Link
          href="#contact"
          className={`hidden md:block py-2 px-5 rounded-lg border transition-all ${isScrolled ? 'bg-gray-100 text-gray-800 border-gray-300 hover:border-cyan-600 hover:text-cyan-600 hover:bg-cyan-50' : 'bg-gray-800 text-white border-gray-700 hover:border-cyan-400 hover:text-cyan-400'}`}
        >
          Contact Us
        </Link>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden transition-colors ${isScrolled ? 'text-black' : 'text-white'}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu (Dropdown) */}
      {isMobileMenuOpen && (
        <div className={`md:hidden px-6 pb-6 pt-2 flex flex-col space-y-2 ${isScrolled ? 'bg-white/95 backdrop-blur-lg border-t border-gray-200' : 'bg-black/80 backdrop-blur-lg'}`}>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`transition-colors py-2 text-center rounded-md ${isScrolled ? 'text-gray-700 hover:text-cyan-600 hover:bg-cyan-50' : 'text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10'}`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="#contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`font-semibold py-3 px-6 rounded-lg text-center transition-transform hover:scale-105 ${isScrolled ? 'bg-cyan-600 text-white hover:bg-cyan-700' : 'bg-cyan-500 text-black'}`}
          >
            Contact Us
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;