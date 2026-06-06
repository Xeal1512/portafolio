"use client";

import React from "react";
import { motion } from "framer-motion";

export default function BackgroundGrid() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      <div className="absolute inset-0 bg-space-black" />
      <div className="absolute inset-0 bg-grid-white opacity-20" />
      
      {/* Orb 1: Moves in a large figure-8 / elliptical pattern */}
      <motion.div
        animate={{
          x: [0, 200, 400, 200, 0, -200, -400, -200, 0],
          y: [0, -100, 0, 100, 0, -100, 0, 100, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-[20%] left-[30%] w-96 h-96 bg-zenit-cyan rounded-full mix-blend-screen filter blur-[120px] opacity-10"
      />
      
      {/* Orb 2: Moves in a counter-pattern */}
      <motion.div
        animate={{
          x: [0, -300, 0, 300, 0],
          y: [0, 200, 400, 200, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-[20%] right-[30%] w-[30rem] h-[30rem] bg-zenit-cyan rounded-full mix-blend-screen filter blur-[150px] opacity-10"
      />
    </div>
  );
}
