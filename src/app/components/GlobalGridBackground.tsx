// app/components/GlobalGridBackground.tsx
"use client";

import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Grid } from '@react-three/drei';
import * as THREE from 'three';

// --- Component: The Constant Grid ---
function ConstantGrid() {
  const gridRef = useRef<THREE.Mesh>(null!);
  useFrame(() => {
    if (gridRef.current) {
      // No animation, constant grid
    }
  });
  return (
    <Grid
      ref={gridRef}
      args={[100, 100]}
      cellSize={1.0}
      cellThickness={0.5}
      cellColor="#00ffff"
      sectionSize={6}
      sectionThickness={0.5}
      sectionColor="#00ffff"
      fadeDistance={50}
      fadeStrength={1}
      infiniteGrid
      followCamera={false} // Disable followCamera to make it static
    />
  );
}

// --- Main Canvas Wrapper Component ---
export const GlobalGridBackground: React.FC = () => {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      zIndex: 0, // Behind content
      opacity: 1 // Full visible, no glassmorphism
    }}>
      <Canvas camera={{ position: [0, 0, 10] }}>
        <ambientLight intensity={0.5} />
        <ConstantGrid />
      </Canvas>
    </div>
  );
};

export default GlobalGridBackground;
