"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Profile() {
  return (
    <section id="perfil" className="relative py-24 px-6 lg:px-24 z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col lg:flex-row gap-12 items-start"
        >
          <div className="lg:w-1/3">
            <h2 className="text-3xl lg:text-5xl font-bold tracking-tight mb-4">
              <span className="text-zenit-cyan">01.</span> Perfil
            </h2>
            <div className="w-12 h-1 bg-zenit-cyan" />
          </div>
          
          <div className="lg:w-2/3 glass-panel p-8 lg:p-12 relative overflow-hidden group">
            {/* Subtle glow effect */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-zenit-cyan opacity-5 rounded-full blur-[80px] group-hover:opacity-10 transition-opacity duration-700" />
            
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed font-light">
              Ingeniero de Software orientado a resultados, especializado en arquitecturas modernas <span className="text-white font-medium">(Next.js, NestJS, TypeScript)</span> e integraciones de <span className="text-zenit-cyan font-medium">Inteligencia Artificial</span>.
            </p>
            <p className="mt-6 text-gray-300 text-lg md:text-xl leading-relaxed font-light">
              Construyo plataformas SaaS escalables, ecosistemas CRM personalizados y chatbots NLP automatizados diseñados para optimizar operaciones comerciales y calificar leads. Apasionado por traducir requisitos comerciales complejos en productos digitales fluidos y de alto rendimiento que impulsan los ingresos y la eficiencia operativa.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
