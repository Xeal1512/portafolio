"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 lg:px-24 overflow-hidden pt-20 lg:pt-0">
      {/* Text Content */}
      <div className="z-10 flex w-full flex-col items-center justify-center space-y-8 text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-zenit-cyan font-mono tracking-widest uppercase text-sm md:text-base mb-6">
            Desarrollador Full-Stack e Integrador de IA
          </p>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-none text-white drop-shadow-md">
            Alexander <br /> Rojas.
          </h1>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-gray-400 max-w-2xl text-lg md:text-2xl font-light"
        >
          Construyendo plataformas SaaS escalables, ecosistemas CRM personalizados y arquitecturas impulsadas por Inteligencia Artificial.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-6 pt-8"
        >
          <a href="#proyectos" className="glass-panel-cyan text-zenit-cyan px-10 py-4 rounded-none uppercase tracking-widest text-sm hover:bg-zenit-cyan/10 transition-colors">
            Ver Proyectos
          </a>
          <a href="#contacto" className="border border-white/20 text-white px-10 py-4 rounded-none uppercase tracking-widest text-sm hover:bg-white/5 transition-colors">
            Contactar
          </a>
        </motion.div>
      </div>
    </section>
  );
}
