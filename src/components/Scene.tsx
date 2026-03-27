'use client';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

function PremiumPill() {
  const mesh = useRef<THREE.Group>(null!);
  const { viewport } = useThree();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    const scrollY = window.scrollY;
    
    // New Ultra-tight layout: 700vh Max Scroll
    // Fast, snappy transitions without dead space.
    const maxScroll = Math.max(document.body.scrollHeight - window.innerHeight, 1);
    let progress = scrollY / maxScroll;
    if (progress > 1) progress = 1;
    if (progress < 0) progress = 0;

    let targetX = 0; let targetY = 0; let scale = 1;
    const w = viewport.width; const h = viewport.height;

    // Timeline mapping for 700vh tight scroll
    if (progress < 0.14) {
      targetX = 0; targetY = 0; // Hero
    } else if (progress < 0.20) {
      const p = (progress - 0.14) / 0.06;
      targetX = THREE.MathUtils.lerp(0, -w * 0.25, p); targetY = 0; // Move Left fast
    } else if (progress < 0.42) {
      targetX = -w * 0.25; targetY = 0; // Pin Left (Lines Draw)
    } else if (progress < 0.48) {
      const p = (progress - 0.42) / 0.06;
      targetX = THREE.MathUtils.lerp(-w * 0.25, w * 0.25, p); targetY = 0; // Move Right fast
    } else if (progress < 0.71) {
      targetX = w * 0.25; targetY = 0; // Pin Right (Lines Draw)
    } else if (progress < 0.85) {
      const p = (progress - 0.71) / 0.14;
      targetX = THREE.MathUtils.lerp(w * 0.25, 0, p); 
      targetY = THREE.MathUtils.lerp(0, -h * 0.35, p); // Fly down
    } else {
      const p = Math.min((progress - 0.85) / 0.05, 1);
      targetX = 0;
      targetY = THREE.MathUtils.lerp(-h * 0.35, -h * 0.6, p); // Plunge into bottle
      scale = THREE.MathUtils.lerp(1, 0, p);
    }

    if (mesh.current) {
      mesh.current.position.x = THREE.MathUtils.lerp(mesh.current.position.x, targetX, 0.12);
      mesh.current.position.y = THREE.MathUtils.lerp(mesh.current.position.y, targetY + Math.sin(t * 3) * 0.06, 0.12); 
      mesh.current.scale.setScalar(THREE.MathUtils.lerp(mesh.current.scale.x, scale, 0.15));

      mesh.current.rotation.x = Math.sin(t / 2) * 0.5 + progress * Math.PI * 6;
      mesh.current.rotation.y = Math.cos(t / 3) * 0.5 + progress * Math.PI * 4;
      mesh.current.rotation.z = progress * Math.PI * 3;
    }
  });

  return (
    <group ref={mesh} position={[0, 0, 0]}>
      {/* Upper Cap (Premium Color) */}
      <mesh position={[0, 0.5, 0]}>
        <cylinderGeometry args={[0.5, 0.5, 1, 64]} />
        <meshPhysicalMaterial color="#C56A32" roughness={0.15} metalness={0.1} clearcoat={1} clearcoatRoughness={0.1} />
      </mesh>
      <mesh position={[0, 1, 0]}>
        <sphereGeometry args={[0.5, 64, 64, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshPhysicalMaterial color="#C56A32" roughness={0.15} metalness={0.1} clearcoat={1} clearcoatRoughness={0.1} />
      </mesh>
      {/* Lower Body (Premium White/Off-White) */}
      <mesh position={[0, -0.5, 0]}>
        <cylinderGeometry args={[0.5, 0.5, 1, 64]} />
        <meshPhysicalMaterial color="#F5F5F3" roughness={0.1} metalness={0.2} clearcoat={1} clearcoatRoughness={0.15} />
      </mesh>
      <mesh position={[0, -1, 0]} rotation={[Math.PI, 0, 0]}>
        <sphereGeometry args={[0.5, 64, 64, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshPhysicalMaterial color="#F5F5F3" roughness={0.1} metalness={0.2} clearcoat={1} clearcoatRoughness={0.15} />
      </mesh>
      {/* Middle Ring connecting them */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.51, 0.51, 0.06, 64]} />
        <meshPhysicalMaterial color="#E0E0E0" roughness={0.2} metalness={0.8} />
      </mesh>
    </group>
  );
}

export default function Scene() {
  return (
    <div className="fixed inset-0 w-full h-screen pointer-events-none z-10">
      <Canvas camera={{ position: [0, 0, 12], fov: 35 }}>
        <ambientLight intensity={1.5} />
        <spotLight position={[10, 10, 10]} intensity={4} angle={0.4} penumbra={1} castShadow />
        <Environment preset="studio" />
        <PremiumPill />
      </Canvas>
    </div>
  );
}
