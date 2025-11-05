/**
 * Homepage for Coding Design Development Club
 */
"use client";

import React, { useState, useEffect, Suspense } from "react";
import { ArrowRight } from "lucide-react";
import { TypeAnimation } from "react-type-animation";

// Import all our page sections
import AboutSection from "./components/AboutSection";
import FacultySection from "./components/FacultySection";
import GalleryPreview from "./components/GalleryPreview";
import EventsPreview from "./components/EventsPreview";
import ProjectsPreview from "./components/ProjectsPreview";
import TeamSection from "./components/TeamSection";
import ContactSection from "./components/ContactSection";
import OfferSection from "./components/OfferSection";
import NewsletterSection from "./components/NewsletterSection";

// Import the TWO background components *for the homepage only*
import ConstantGridBackground from "./components/ConstantGridBackground";
import AnimatedParticleBackground from "./components/AnimatedParticleBackground";
// Import the Loader component
import Loader from "./components/Loader";

// --- Hero Component ---
// This is specific to the homepage, so it's defined here.
const Hero: React.FC = () => {
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    // Start the typewriter animation after the loader finishes (2.5 seconds)
    const timer = setTimeout(() => {
      setStartAnimation(true);
    }, 2500); // This delay matches the Loader's total duration

    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center text-center overflow-hidden z-10"
    >
      {/* Overlay to darken the background for readability */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>

      {/* Content */}
      <div className="relative z-20 p-6 text-white max-w-4xl">
        {/* --- Corrected Typewriter Animation --- */}
        {/* We use a placeholder h1 to maintain layout before animation starts */}
        <h1
          className="text-5xl md:text-7xl font-bold mb-4 leading-tight"
          style={{ whiteSpace: "pre-line", minHeight: "150px" }}
        >
          {/* This ensures no layout shift (CLS) */}
          {startAnimation ? (
            <TypeAnimation
              sequence={[
                "When Code Meets Creativity,",
                1000,
                "When Code Meets Creativity,\nMagic Happens",
                () => {
                  // Apply cyan color to "Magic Happens" after animation completes
                  const heading = document.querySelector("#hero h1");
                  if (heading) {
                    heading.innerHTML = heading.innerHTML.replace(
                      "Magic Happens",
                      '<span class="text-cyan-400">Magic Happens</span>'
                    );
                  }
                },
              ]}
              wrapper="span" // Use span inside the h1
              cursor={true}
              repeat={0}
              speed={50}
              style={{ whiteSpace: "pre-line", display: "inline-block" }}
            />
          ) : (
            // Render a non-breaking space as a placeholder to maintain height
            <span>&nbsp;</span>
          )}
        </h1>

        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8">
          Welcome to the{" "}
          <span className="font-semibold text-white">
            Coding Design Development
          </span>{" "}
          Club. Join our dynamic space where tech enthusiasts collaborate,
          explore, and create the future.
        </p>

        {/* The buttons stay the same */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
          <a
            href="#features"
            className="group bg-linear-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-black font-semibold py-3 px-8 rounded-lg transition-all transform hover:scale-105 shadow-lg shadow-cyan-500/30 flex items-center justify-center gap-2"
          >
            Our Focus
            <ArrowRight
              size={20}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
          <a
            href="#contact"
            className="group bg-transparent border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 font-semibold py-3 px-8 rounded-lg transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

// --- Main Page Component ---
export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500); // 2.5 seconds

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      {/* --- HOMEPAGE-ONLY BACKGROUNDS --- */}
      {/* These are fixed and sit at z-0 and z-1 */}
      <ConstantGridBackground />
      <AnimatedParticleBackground />

      {/* Content wrapper */}
      <main>
        <Hero />

        {/* This wrapper sits at z-10, on top of the fixed backgrounds */}
        {/* It has a very faint background to make text readable as it scrolls */}
        <div className="relative z-10 bg-gray-950/10">
          <AboutSection />
          <OfferSection />
          <FacultySection />
          <GalleryPreview />
          <EventsPreview />
          <ProjectsPreview />
          <TeamSection />
          <NewsletterSection />
          <ContactSection />
        </div>
      </main>
    </>
  );
}