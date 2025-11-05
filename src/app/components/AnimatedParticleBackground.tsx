// app/components/AnimatedParticleBackground.tsx
"use client";

import React, { useRef, useEffect, Suspense, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// --- Component 1: The Particle System ---
function ParticleSystem() {
  const particlesRef = useRef<THREE.Points>(null!);
  
  const particlesGeometry = useMemo(() => {
    const particleCount = 6000;
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
      particlesRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
      particlesRef.current.rotation.x = state.clock.getElapsedTime() * 0.02;
    }
  });

  return (
    <points ref={particlesRef} geometry={particlesGeometry}>
      <pointsMaterial
        color={0x00ffff} // Cyan
        size={0.012}
        transparent
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

// --- Component 2: Camera Parallax (Mouse Animation) ---
function CameraParallax({ mouse }: { mouse: THREE.Vector2 }) {
  useFrame((state) => {
    state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, mouse.x * 0.5, 0.02);
    state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, mouse.y * 0.5, 0.02);
    state.camera.lookAt(0, 0, 0);
  });
  return null;
}

// --- Main Canvas Wrapper Component ---
export const AnimatedParticleBackground: React.FC = () => {
  const mouse = useRef(new THREE.Vector2(0, 0));

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
      zIndex: 1, // Layers on top of the z-index: 0 grid
      opacity: 0.15 // Subtle
    }}>
      <Suspense fallback={null}>
        <Canvas camera={{ position: [0, 0, 10] }}>
          <ParticleSystem />
          <CameraParallax mouse={mouse.current} />
        </Canvas>
      </Suspense>
    </div>
  );
};

export default AnimatedParticleBackground;
