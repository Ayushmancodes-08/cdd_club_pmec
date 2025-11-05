// app/components/OfferSection.tsx
"use client";

import React from "react";
import Image from "next/image";
import { Globe, Smartphone, BrainCircuit, Gamepad2 } from "lucide-react";

// Data for the offer cards
const offersData = [
  {
    title: "Web Development",
    imageSrc: "/offers/web-dev.png",
    icon: <Globe />,
  },
  {
    title: "App Development",
    imageSrc: "/offers/app-dev.png",
    icon: <Smartphone />,
  },
  {
    title: "AI & Machine Learning",
    imageSrc: "/offers/ai-ml.png",
    icon: <BrainCircuit />,
  },
  {
    title: "Game Development",
    imageSrc: "/offers/game-dev.png",
    icon: <Gamepad2 />,
  },
];

const OfferSection: React.FC = () => {
  return (
    <section id="offers" className="container mx-auto px-6 py-20 md:py-24">
      <div className="text-center mb-16">
        <h3 className="text-lg font-semibold uppercase tracking-wider text-cyan-400">
          OUR PROGRAMS
        </h3>
        <h2 className="text-4xl md:text-5xl font-bold text-white mt-2">
          What We Offer
        </h2>
      </div>

      {/* Responsive Grid for the cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {offersData.map((offer) => (
          <div
            key={offer.title}
            // The 'group' class is essential for the hover effect
            className="group relative w-full h-72 overflow-hidden rounded-xl border border-gray-800 transform transition-all duration-500 hover:border-cyan-400 hover:shadow-2xl hover:shadow-cyan-500/20"
          >
            {/* Background Image */}
            <Image
              src={offer.imageSrc}
              alt={offer.title}
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-500 group-hover:scale-110"
            />
            
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center p-4 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="text-cyan-400 mb-2">{offer.icon}</div>
              <h3 className="text-2xl font-bold text-white">
                {offer.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OfferSection;