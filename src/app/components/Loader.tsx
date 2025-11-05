// app/components/Loader.tsx
"use client";

import React, { useState, useEffect } from "react";

const Loader: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // Start fading out after 2 seconds
    const fadeTimer = setTimeout(() => {
      setIsFading(true);
    }, 2000);

    // Remove from DOM after fade-out (2.5s total)
    const loadTimer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(loadTimer);
    };
  }, []); // Empty array ensures this runs only once on mount

  if (!isLoading) {
    return null;
  }

  return (
    <div
      className={`fixed inset-0 z-9999 flex items-center justify-center bg-gray-950 transition-opacity duration-500
      ${isFading ? "opacity-0" : "opacity-100"}`}
    >
      <div className="h-16 w-16 animate-spin rounded-full border-4 border-solid border-cyan-400 border-t-transparent"></div>
    </div>
  );
};

export default Loader;
