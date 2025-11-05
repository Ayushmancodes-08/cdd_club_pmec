// app/components/Footer.tsx
"use client";

import React from "react";
import { Github, Linkedin, Twitter } from "lucide-react";

const Footer: React.FC = () => {
  return (
    // This is a clean footer without the contact form.
    <footer className="bg-gray-950/90 backdrop-blur-sm border-t border-gray-800">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-400">
          <p className="text-center md:text-left mb-4 md:mb-0">
            © {new Date().getFullYear()} Coding Design Development Club.
          </p>
          <div className="flex space-x-6">
            <a
              href="#"
              className="hover:text-cyan-400 hover:scale-110 transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(0,255,255,0.8)]"
              aria-label="GitHub"
            >
              <Github />
            </a>
            <a
              href="#"
              className="hover:text-cyan-400 hover:scale-110 transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(0,255,255,0.8)]"
              aria-label="LinkedIn"
            >
              <Linkedin />
            </a>
            <a
              href="#"
              className="hover:text-cyan-400 hover:scale-110 transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(0,255,255,0.8)]"
              aria-label="Twitter"
            >
              <Twitter />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;