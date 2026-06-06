"use client";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

export function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Ocultar Navbar al scrollear hacia abajo y mostrar al subir
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    setIsScrolled(latest > 50);
  });

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        isScrolled ? "bg-black/70 backdrop-blur-lg border-b border-zinc-800/50 shadow-[0_4px_30px_rgba(0,0,0,0.1)]" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#" className="text-white font-bold text-2xl tracking-tighter hover:opacity-80 transition-opacity">
          A<span className="text-cyan-500">.</span>R<span className="text-cyan-500">.</span>
        </a>
        
        <div className="hidden md:flex gap-8 items-center">
          <a href="#" className="text-sm font-medium text-zinc-300 hover:text-white transition-colors">Inicio</a>
          <a href="#proyectos" className="text-sm font-medium text-zinc-300 hover:text-white transition-colors">Proyectos</a>
          <a href="#servicios" className="text-sm font-medium text-zinc-300 hover:text-white transition-colors">Servicios</a>
        </div>
        
        <a 
          href="https://wa.me/1234567890?text=Hola%20Alexander,%20me%20gustaría%20agendar%20una%20consultoría%20sobre%20integración%20de%20IA."
          target="_blank" 
          rel="noreferrer"
          className="text-sm font-semibold bg-white text-black px-6 py-2.5 rounded-full hover:bg-zinc-200 transition-colors shadow-[0_0_15px_rgba(255,255,255,0.2)]"
        >
          Agendar Cita
        </a>
      </div>
    </motion.nav>
  );
}
