"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "CRM Zenit",
    description: "Ecosistema de Calificación de Leads con IA (NestJS, Gemini API, React/Next.js)",
    url: "https://bot-dashboard-tau.vercel.app/",
    tech: ["Next.js", "NestJS", "Gemini API"]
  },
  {
    title: "Plataforma SaaS Deportiva",
    description: "Plataforma SaaS de Gestión Deportiva con panel administrativo completo.",
    url: "https://sport-managing-app.vercel.app/",
    tech: ["Next.js", "TypeScript", "Supabase"]
  },
  {
    title: "App King Burguer",
    description: "Sistema de administración y pedidos para comercio gastronómico.",
    url: "https://app-king-burguer.vercel.app/admin",
    tech: ["React", "Web App"]
  },
  {
    title: "Web Aventura Caribe",
    description: "Plataforma web turística para reservas y catálogo de destinos.",
    url: "https://web-aventura-caribe.vercel.app/",
    tech: ["Frontend", "UX/UI"]
  },
  {
    title: "Landing Marta Hidalgo",
    description: "Página de aterrizaje optimizada para conversión de servicios profesionales.",
    url: "https://landing-marta-hidalgo.vercel.app/",
    tech: ["Landing", "Conversión"]
  },
  {
    title: "Landing Hiperhierro",
    description: "Landing page corporativa para empresa del sector industrial/construcción.",
    url: "https://landing-page-hiperhierro.vercel.app/",
    tech: ["Corporativo", "Diseño Web"]
  }
];

export default function ProjectsGallery() {
  return (
    <section id="proyectos" className="relative py-24 px-6 lg:px-24 z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-bold tracking-tight mb-4 text-right">
            Proyectos Destacados <span className="text-zenit-cyan">.04</span>
          </h2>
          <div className="w-12 h-1 bg-zenit-cyan ml-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <motion.a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group block relative h-full"
            >
              <div className="glass-panel p-8 h-full flex flex-col justify-between hover:-translate-y-2 hover:border-zenit-cyan/40 transition-all duration-300">
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div className="text-4xl text-white/10 group-hover:text-zenit-cyan/20 font-mono transition-colors">
                      {`0${idx + 1}`}
                    </div>
                    <ExternalLink className="text-gray-400 group-hover:text-zenit-cyan transition-colors" size={20} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-zenit-cyan transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 font-light text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-xs font-mono text-zenit-cyan/80 bg-zenit-cyan/5 px-2 py-1 rounded-sm border border-zenit-cyan/10">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
