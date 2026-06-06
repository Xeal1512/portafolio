"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Text3D, Center, ContactShadows, Environment } from "@react-three/drei";
import * as THREE from "three";

function LogoZ() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.2;
    }
  });

  // We can use a simple ExtrudeGeometry or Text3D. 
  // For maximum compatibility without an external font JSON, we use a simple BoxGeometry shaped like a Z
  // Wait, let's create a custom Z geometry using Shape
  const zShape = new THREE.Shape();
  zShape.moveTo(0, 4);
  zShape.lineTo(4, 4);
  zShape.lineTo(4, 3);
  zShape.lineTo(1, -3);
  zShape.lineTo(4, -3);
  zShape.lineTo(4, -4);
  zShape.lineTo(0, -4);
  zShape.lineTo(0, -3);
  zShape.lineTo(3, 3);
  zShape.lineTo(0, 3);
  zShape.lineTo(0, 4);

  const extrudeSettings = {
    depth: 1,
    bevelEnabled: true,
    bevelSegments: 2,
    steps: 2,
    bevelSize: 0.1,
    bevelThickness: 0.1,
  };

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} position={[0, 0, 0]} castShadow>
        <extrudeGeometry args={[zShape, extrudeSettings]} />
        <meshStandardMaterial 
          color="#050505" 
          emissive="#00f0ff"
          emissiveIntensity={0.5}
          metalness={0.9} 
          roughness={0.1} 
        />
      </mesh>
    </Float>
  );
}

export default function Scene3D() {
  return (
    <div className="w-full h-full min-h-[400px] sm:min-h-[600px]">
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        
        <Center>
          <LogoZ />
        </Center>
        
        <Environment preset="city" />
        <ContactShadows position={[0, -4.5, 0]} opacity={0.4} scale={20} blur={2} far={10} color="#00f0ff" />
      </Canvas>
    </div>
  );
}
