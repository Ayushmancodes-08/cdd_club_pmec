// app/components/GridBackground.tsx 
 "use client"; 
 
 import React, { useRef, useState, useEffect, Suspense } from 'react'; 
 import { Canvas, useFrame } from '@react-three/fiber'; 
 import { Grid } from '@react-three/drei'; 
 import * as THREE from 'three'; 
 
 /** 
  * The 3D Grid Component 
  * Animates based on the page's scroll progress. 
  */ 
 function ScrollingGrid({ scrollProgress }: { scrollProgress: number }) { 
   const gridRef = useRef<THREE.Mesh>(null!); 
 
   useFrame(() => { 
     if (gridRef.current) { 
       // Animate Scale (small to large gaps) 
       // Interpolates the scale from 0.7 (small gaps) to 2.5 (large gaps) 
       const scale = THREE.MathUtils.lerp(0.7, 2.5, scrollProgress); 
       gridRef.current.scale.set(scale, scale, 1); 
 
       // Animate Rotation (subtle) 
       const rotation = THREE.MathUtils.lerp(0, Math.PI / 4, scrollProgress); 
       gridRef.current.rotation.y = rotation; 
     } 
   }); 
 
   return ( 
     <Grid 
       ref={gridRef} 
       rotation={[Math.PI / 2, 0, 0]} // Rotate to be a flat floor 
       args={[100, 100]} 
       cellSize={0.8} // Smaller gaps for more visible lines
       cellThickness={1.5}
       cellColor="#00ffff" // Cyan color
       sectionSize={6}
       sectionThickness={2}
       sectionColor="#00ffff"
       fadeDistance={70}
       fadeStrength={0.8}
       infiniteGrid 
       followCamera 
     /> 
   ); 
 } 
 
 /** 
  * The Canvas Wrapper (Main Component) 
  * Renders the fixed canvas and listens to scroll events. 
  */ 
 export const FullPageGridBackground: React.FC = () => { 
   const [scrollProgress, setScrollProgress] = useState(0); 
 
   useEffect(() => { 
     const handleScroll = () => { 
       const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight; 
       if (totalHeight === 0) { 
         setScrollProgress(0); 
         return; 
       } 
       const currentScroll = window.scrollY; 
       const progress = currentScroll / totalHeight; 
       setScrollProgress(progress); 
     }; 
 
     window.addEventListener('scroll', handleScroll, { passive: true }); 
     handleScroll(); // Run once on mount 
     
     return () => window.removeEventListener('scroll', handleScroll); 
   }, []); 
 
   return ( 
     <div style={{
       position: 'fixed',
       top: 0,
       left: 0,
       width: '100vw',
       height: '100vh',
       zIndex: -1, // Sits BEHIND all content
       opacity: 0.4 // More visible for better appeal
     }}>
       <Suspense fallback={null}> 
         <Canvas> 
           <ambientLight intensity={0.5} /> 
           <ScrollingGrid scrollProgress={scrollProgress} /> 
         </Canvas> 
       </Suspense> 
     </div> 
   ); 
 }; 
 
 export default FullPageGridBackground;