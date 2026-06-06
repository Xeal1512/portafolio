"use client";

import React from "react";
import { motion } from "framer-motion";

const skillsCategories = [
  {
    title: "LENGUAJES",
    items: ["JavaScript", "TypeScript", "Java", "C#", "SQL"]
  },
  {
    title: "FRAMEWORKS & LIBRERÍAS",
    items: ["Next.js", "NestJS", "React", "Tailwind CSS", "Vite.js", "REST APIs"]
  },
  {
    title: "HERRAMIENTAS & BD",
    items: ["Supabase", "SQL Server SSIS", "AppSheet", "Git"]
  },
  {
    title: "COMPETENCIAS CORE",
    items: ["Integración de IA (Gemini API)", "Automatización de Procesos", "Lógica de Negocios", "Ingeniería Inversa"]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function Skills() {
  return (
    <section id="habilidades" className="relative py-24 px-6 lg:px-24 z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-bold tracking-tight mb-4 text-right">
            Habilidades <span className="text-zenit-cyan">.02</span>
          </h2>
          <div className="w-12 h-1 bg-zenit-cyan ml-auto" />
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {skillsCategories.map((category, idx) => (
            <motion.div 
              key={idx} 
              variants={itemVariants}
              className="glass-panel p-8 group hover:border-zenit-cyan/30 transition-colors duration-500"
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="text-zenit-cyan font-mono text-sm opacity-50">{`0${idx + 1}`}</span>
                <h3 className="text-xl font-mono text-white tracking-widest uppercase">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {category.items.map((item, i) => (
                  <span 
                    key={i} 
                    className="px-4 py-2 border border-white/10 bg-white/5 text-gray-300 text-sm font-light 
                               group-hover:border-zenit-cyan/20 group-hover:bg-zenit-cyan/5 transition-all duration-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
