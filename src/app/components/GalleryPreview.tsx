// app/components/GalleryPreview.tsx
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

// --- Placeholder images ---
// Replace these with the actual paths to your images in the /public folder
const photoTemple = "/gallery/photo-temple.jpg";
const photoCafe = "/gallery/photo-cafe.jpg";
const photoTeamFront = "/gallery/photo-team-front.jpg";
const photoTeamBack = "/gallery/photo-team-back.jpg";
const photoTeamIndoor = "/gallery/photo-team-indoor.jpg";

const GalleryPreview: React.FC = () => {
  return (
    <section id="gallery" className="container mx-auto px-6 py-20 md:py-24">
      <div className="text-center mb-16">
        <h3 className="text-lg font-semibold uppercase tracking-wider text-cyan-400">
          GALLERY
        </h3>
        <h2 className="text-4xl md:text-5xl font-bold text-white mt-2">
          Club Photos
        </h2>
      </div>

      {/* Responsive Photo Grid */}
      {/*
        This grid is responsive:
        - 1 column on mobile (grid-cols-1)
        - 2 columns on tablets (md:grid-cols-2)
        - 4 columns on desktop (lg:grid-cols-4)
      */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {/* Card 1: Temple Photo */}
        <div className="group relative h-96 w-full overflow-hidden rounded-xl border border-gray-800 transform transition-all duration-300 hover:border-cyan-400 hover:-translate-y-2">
          <Image
            src={photoTemple}
            alt="Club photo at temple"
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        {/* Card 2: Cafe Photo */}
        <div className="group relative h-96 w-full overflow-hidden rounded-xl border border-gray-800 transform transition-all duration-300 hover:border-cyan-400 hover:-translate-y-2">
          <Image
            src={photoCafe}
            alt="Club members at cafe"
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        {/* Card 3: Team Photos (Stacked) */}
        <div className="flex flex-col h-96 gap-6">
          <div className="group relative h-1/2 w-full overflow-hidden rounded-xl border border-gray-800 transform transition-all duration-300 hover:border-cyan-400 hover:-translate-y-1">
            <Image
              src={photoTeamFront}
              alt="Club team front view"
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-500 group-hover:scale-110"
            />
          </div>
          <div className="group relative h-1/2 w-full overflow-hidden rounded-xl border border-gray-800 transform transition-all duration-300 hover:border-cyan-400 hover:-translate-y-1">
            <Image
              src={photoTeamBack}
              alt="Club team back view"
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        </div>

        {/* Card 4: Indoor Photo */}
        <div className="group relative h-96 w-full overflow-hidden rounded-xl border border-gray-800 transform transition-all duration-300 hover:border-cyan-400 hover:-translate-y-2">
          <Image
            src={photoTeamIndoor}
            alt="Club team indoor"
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-500 group-hover:scale-110"
          />
        </div>
      </div>

      {/* "See More" Button */}
      <div className="text-center mt-16">
        <Link
          href="/gallery" // This will link to the dedicated page later
          className="group bg-gray-800 text-white py-3 px-8 rounded-lg border border-gray-700 hover:border-cyan-400 hover:text-cyan-400 transition-all inline-flex items-center gap-2"
        >
          See More Photos
          <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
};

export default GalleryPreview;