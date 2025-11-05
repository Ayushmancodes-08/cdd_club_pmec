// app/components/ConstantGridBackground.tsx
"use client";

import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Grid } from '@react-three/drei';

// --- Component: The Constant Grid ---
function ConstantGrid() {
  return (
    <Grid
      // No ref or useFrame needed as it's not animated
      rotation={[Math.PI / 2, 0, 0]} // Rotate to be a flat floor
      args={[100, 100]}
      cellSize={1.5}
      cellThickness={0.7}
      cellColor="#00ffff"
      sectionSize={6}
      sectionThickness={0.5}
      sectionColor="#00ffff"
      fadeDistance={100}
      fadeStrength={0.1}
      infiniteGrid
      followCamera={false} // Makes it static
    />
  );
}

// --- Main Canvas Wrapper Component ---
export const ConstantGridBackground: React.FC = () => {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      zIndex: 0, // Base background
      opacity: 1 // Fully visible as requested
    }}>
      <Suspense fallback={null}>
        <Canvas camera={{ position: [0, 0, 10] }}>
          <ambientLight intensity={0.5} />
          <ConstantGrid />
        </Canvas>
      </Suspense>
    </div>
  );
};

export default ConstantGridBackground;
