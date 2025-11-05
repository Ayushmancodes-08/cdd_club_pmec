// app/components/AboutSection.tsx
"use client";

import React, { useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
// UPDATED: We now import Stars instead of TorusKnot
import { ScrollControls, Stars, useScroll } from "@react-three/drei";
import { Target, Eye, Gem } from "lucide-react";

// --- 1. The 3D Shape Component ---
// RENAMED: from Scrollable3DObject to ScrollableStars for clarity
const ScrollableStars = () => {
  const starsRef = useRef<THREE.Points>(null!);
  const scroll = useScroll();

  useFrame((state, delta) => {
    // The same scroll animation logic will now rotate the entire star field
    const scrollOffset = scroll.offset;
    if (starsRef.current) {
      starsRef.current.rotation.x = scrollOffset * Math.PI;
      starsRef.current.rotation.y = scrollOffset * Math.PI * 0.5;
    }
  });

  return (
    // REPLACED: TorusKnot with a more meaningful Stars component
    <Stars
      ref={starsRef}
      radius={50} // Size of the star field
      depth={50}
      count={5000} // Number of stars
      factor={4} // Size of individual stars
      saturation={0} // Makes all stars white (non-neon)
      fade
      speed={1} // Adds a subtle auto-animation
    />
  );
};

// --- 2. The Main About Section Component ---
const AboutSection: React.FC = () => {
  const aboutCards = [
    {
      icon: <Target className="h-8 w-8 text-cyan-400" />,
      title: "Mission",
      description:
        "To foster a culture of innovation by providing resources, mentorship, and collaborative opportunities for all tech enthusiasts.",
    },
    {
      icon: <Eye className="h-8 w-8 text-purple-400" />,
      title: "Vision",
      description:
        "To become a leading hub for student innovation that transforms ideas into impactful solutions for real-world challenges.",
    },
    {
      icon: <Gem className="h-8 w-8 text-pink-400" />,
      title: "Values",
      description:
        "Creativity, Collaboration, Integrity, and Impact – the core principles that guide our initiatives and community.",
    },
  ];

  return (
    <section id="features" className="relative container mx-auto px-6 py-20 md:py-32">
      {/* The 3D background canvas */}
      
      {/* RESPONSIVE UPDATE: 
        Added 'hidden md:block'
        This hides the canvas on mobile (screens smaller than 'md')
        and shows it on medium screens and up.
      */}
      <div className="absolute inset-0 z-0 h-full w-full opacity-10 hidden md:block">
        <Suspense fallback={null}>
          <Canvas>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <ScrollControls pages={0} damping={0.25}>
              {/* UPDATED: Using the new ScrollableStars component */}
              <ScrollableStars />
            </ScrollControls>
          </Canvas>
        </Suspense>
      </div>

      {/* The content, layered on top of the canvas */}
      <div className="relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          About <span className="text-cyan-400">CDD</span> Club
        </h2>
        <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-16">
          We are a community driven by a passion for technology and a desire to
          create, learn, and grow together.
        </p>

        {/* NOTE: This grid is already responsive!
          'grid-cols-1' (default) = 1 column on mobile
          'md:grid-cols-3' = 3 columns on desktop
        */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {aboutCards.map((card, index) => (
            <div
              key={index}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8 transform transition-all duration-300 hover:border-cyan-400 hover:-translate-y-2"
            >
              <div className="mb-4 flex justify-center">{card.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-3">
                {card.title}
              </h3>
              <p className="text-gray-400">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;