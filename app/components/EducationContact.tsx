"use client";

import React from "react";
import { motion } from "framer-motion";
import { MessageCircle, Mail, MapPin } from "lucide-react";

export default function EducationContact() {
  return (
    <section id="contacto" className="relative py-24 px-6 lg:px-24 z-10">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
        
        {/* Education Column */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >
          <h2 className="text-3xl font-bold tracking-tight mb-8">
            <span className="text-zenit-cyan">05.</span> Educación
          </h2>
          
          <div className="space-y-8 border-l border-white/10 pl-6">
            <div className="relative">
              <div className="absolute w-2 h-2 bg-zenit-cyan rounded-full -left-[29px] top-2" />
              <h3 className="text-xl font-bold text-white">Ingeniería en Sistemas de Información</h3>
              <p className="text-zenit-cyan font-mono text-sm mt-1">UNITEC | 2023 - 2025</p>
            </div>
            
            <div className="relative">
              <div className="absolute w-2 h-2 bg-gray-600 rounded-full -left-[29px] top-2" />
              <h3 className="text-xl font-bold text-white">TSU en Informática</h3>
              <p className="text-gray-400 font-mono text-sm mt-1">UNITEC | 2019 - 2023</p>
            </div>
          </div>
          
          <div className="mt-12">
            <h3 className="text-sm font-mono text-gray-400 tracking-widest uppercase mb-4">Idiomas</h3>
            <div className="flex gap-4">
              <div className="glass-panel px-4 py-2 border-l-2 border-l-zenit-cyan">
                <span className="text-white font-medium">Español</span> <span className="text-gray-400 text-sm">(Nativo)</span>
              </div>
              <div className="glass-panel px-4 py-2 border-l-2 border-l-gray-600">
                <span className="text-white font-medium">Inglés</span> <span className="text-gray-400 text-sm">(B1)</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Column */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex-1 glass-panel-cyan p-8 lg:p-12 relative overflow-hidden flex flex-col justify-center"
        >
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-zenit-cyan opacity-10 rounded-full blur-[80px]" />
          
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            ¿Iniciamos un proyecto?
          </h2>
          <p className="text-gray-300 font-light text-lg mb-10 max-w-md">
            Mi bandeja de entrada siempre está abierta. Ya sea que tengas una pregunta o simplemente quieras saludar, ¡haré lo posible por responderte!
          </p>
          
          <div className="space-y-6 mb-12">
            <div className="flex items-center gap-4 text-gray-300">
              <MapPin className="text-zenit-cyan" size={20} />
              <span>Venezuela (Remoto)</span>
            </div>
            <a href="mailto:alexanderrojas15121098@gmail.com" className="flex items-center gap-4 text-gray-300 hover:text-zenit-cyan transition-colors w-fit">
              <Mail className="text-zenit-cyan" size={20} />
              <span>alexanderrojas15121098@gmail.com</span>
            </a>
          </div>

          <a 
            href="https://wa.me/584244030743" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-3 bg-zenit-cyan text-space-black font-bold py-4 px-8 uppercase tracking-widest text-sm hover:bg-white transition-colors duration-300"
          >
            <MessageCircle size={18} />
            <span>Contactar por WhatsApp</span>
          </a>
        </motion.div>
        
      </div>
      
      <div className="max-w-7xl mx-auto mt-24 text-center border-t border-white/5 pt-8">
        <p className="text-gray-600 text-sm font-mono">
          Diseñado y construido con Next.js & React Three Fiber.
        </p>
        <p className="text-gray-600 text-sm font-mono mt-1">
          &copy; {new Date().getFullYear()} Alexander Rojas.
        </p>
      </div>
    </section>
  );
}
