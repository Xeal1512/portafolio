"use client";

import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Pasante de Desarrollo, Depto. IT",
    company: "Heinz (San Joaquín, Venezuela)",
    period: "Feb 2024 - Dic 2024",
    highlights: [
      "Participación en el desarrollo web usando Next.js.",
      "Ingeniería inversa en aplicaciones legacy y automatización de datos (SQL, SSIS).",
      "Resolución de problemas técnicos en la adquisición de datos de básculas cliente."
    ]
  },
  {
    role: "Desarrollador de Interfaces de Gestión",
    company: "Progresse Capital (Ciudad de México | Remoto)",
    period: "2023 - 2023",
    highlights: [
      "Creación de aplicaciones personalizadas con AppSheet.",
      "Análisis de lógica de negocios para definir alcance y automatizar flujos de trabajo."
    ]
  }
];

export default function Experience() {
  return (
    <section id="experiencia" className="relative py-24 px-6 lg:px-24 z-10">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-bold tracking-tight mb-4">
            <span className="text-zenit-cyan">03.</span> Experiencia
          </h2>
          <div className="w-12 h-1 bg-zenit-cyan" />
        </motion.div>

        <div className="relative border-l border-white/10 ml-4 md:ml-0">
          {experiences.map((exp, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="mb-12 pl-8 relative"
            >
              {/* Timeline Node */}
              <div className="absolute w-3 h-3 bg-zenit-cyan rounded-full -left-[6.5px] top-2 shadow-[0_0_10px_#00f0ff]" />
              
              <div className="glass-panel p-6 md:p-8 hover:border-zenit-cyan/20 transition-all duration-300">
                <span className="text-zenit-cyan font-mono text-sm tracking-widest">{exp.period}</span>
                <h3 className="text-2xl font-bold text-white mt-2 mb-1">{exp.role}</h3>
                <h4 className="text-gray-400 font-medium mb-6">{exp.company}</h4>
                
                <ul className="space-y-3">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="text-gray-300 font-light flex items-start gap-3">
                      <span className="text-zenit-cyan mt-1">▹</span>
                      <span className="leading-relaxed">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
