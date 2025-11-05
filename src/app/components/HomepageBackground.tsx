// app/components/HomepageBackground.tsx
"use client";

import React, { useRef, useState, useEffect, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Grid } from '@react-three/drei';
import * as THREE from 'three';

// --- Component 1: The Scrolling Grid ---
function ScrollingGrid({ scrollProgress }: { scrollProgress: number }) {
  const gridRef = useRef<THREE.Mesh>(null!);
  useFrame(() => {
    if (gridRef.current) {
      // Animate scale based on scroll
      const scale = THREE.MathUtils.lerp(0.7, 2.5, scrollProgress);
      gridRef.current.scale.set(scale, scale, 1);
      // Animate rotation based on scroll
      const rotation = THREE.MathUtils.lerp(0, Math.PI / 4, scrollProgress);
      gridRef.current.rotation.y = rotation;
    }
  });
  return (
    <Grid
      ref={gridRef}
      rotation={[Math.PI / 2, 0, 0]}
      args={[100, 100]}
      cellSize={1.2}
      cellThickness={1}
      cellColor="#00ffff"
      sectionSize={6}
      sectionThickness={1.5}
      sectionColor="#00ffff"
      fadeDistance={50}
      fadeStrength={1}
      infiniteGrid
      followCamera
    />
  );
}

// --- Component 2: The Particle System ---
function ParticleSystem() {
  const particlesRef = useRef<THREE.Points>(null!);

  // Memoize the geometry so it's not recalculated
  const particlesGeometry = React.useMemo(() => {
    const particleCount = 8000;
    const positions = new Float32Array(particleCount * 3);
    const geometry = new THREE.BufferGeometry();
    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      positions[i3] = (Math.random() - 0.5) * 20; // x
      positions[i3 + 1] = (Math.random() - 0.5) * 20; // y
      positions[i3 + 2] = (Math.random() - 0.5) * 15; // z
    }
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    return geometry;
  }, []);

  useFrame((state) => {
    if (particlesRef.current) {
      // Time-based animation - intensified rotation
      particlesRef.current.rotation.y = state.clock.getElapsedTime() * 0.08;
      particlesRef.current.rotation.x = state.clock.getElapsedTime() * 0.03;
    }
  });

  return (
    <points ref={particlesRef} geometry={particlesGeometry}>
      <pointsMaterial
        color={0x00ffff} // Cyan
        size={0.015}
        transparent
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

// Helper to animate camera based on mouse
function CameraParallax({ mouse }: { mouse: THREE.Vector2 }) {
  useFrame((state) => {
    state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, mouse.x * 0.5, 0.02);
    state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, mouse.y * 0.5, 0.02);
    state.camera.lookAt(0, 0, 0);
  });
  return null;
}

// --- Main Canvas Wrapper Component ---
export const HomepageBackground: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const mouse = useRef(new THREE.Vector2(0, 0));

  // Scroll listener for grid animation
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (totalHeight === 0) return setScrollProgress(0);
      const progress = window.scrollY / totalHeight;
      setScrollProgress(progress);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Mouse listener for parallax animation
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      zIndex: 0, // Sits behind content, but in front of body
      opacity: 0.3 // Increased opacity for better visibility
    }}>
      <Suspense fallback={null}>
        <Canvas camera={{ position: [0, 0, 10] }}>
          <ambientLight intensity={0.5} />
          <ScrollingGrid scrollProgress={scrollProgress} />
          <ParticleSystem />
          <CameraParallax mouse={mouse.current} />
        </Canvas>
      </Suspense>
    </div>
  );
};

export default HomepageBackground;
