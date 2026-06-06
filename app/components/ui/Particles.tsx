"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function Particles() {
  const [particles, setParticles] = useState<Array<{ id: number, x: number, y: number, size: number, duration: number, delay: number }>>([]);

  useEffect(() => {
    // Generar partículas sutiles
    const particleCount = 100; // Cantidad controlada y no ruidosa
    const newParticles = Array.from({ length: particleCount }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2, // Tamaños un poco más grandes
      duration: Math.random() * 15 + 10,
      delay: Math.random() * 5
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-cyan-400 mix-blend-screen"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            top: `${p.y}%`,
            boxShadow: `0 0 ${p.size * 3}px rgba(34, 211, 238, 0.8)`
          }}
          animate={{
            y: [0, -40, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
