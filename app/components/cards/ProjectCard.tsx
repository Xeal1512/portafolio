"use client";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { MouseEvent } from "react";
import { AlertTriangle, Wrench, TrendingUp, ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  tags: string[];
  problem: string;
  solution: string;
  roi: string;
  link?: string;
}

export function ProjectCard({ title, tags, problem, solution, roi, link }: ProjectCardProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div 
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="relative group rounded-2xl bg-zinc-950 border border-zinc-800/80 p-8 overflow-hidden shadow-2xl transition-all hover:border-zinc-700/80"
    >
      {/* Efecto Spotlight Tracker */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              450px circle at ${mouseX}px ${mouseY}px,
              rgba(34, 211, 238, 0.1),
              transparent 80%
            )
          `,
        }}
      />
      {/* Background radial fijo base */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-700 pointer-events-none" />
      
      <div className="relative z-10">
        <h3 className="text-2xl font-bold text-white mb-4 tracking-tight drop-shadow-sm">{title}</h3>
        <div className="flex flex-wrap gap-2 mb-8">
          {tags.map(tag => (
            <span key={tag} className="px-3 py-1 text-[11px] font-bold uppercase tracking-widest bg-zinc-900 border border-zinc-800/80 text-zinc-300 rounded-full shadow-inner">
              {tag}
            </span>
          ))}
        </div>
      
      <div className="space-y-6">
        <div>
          <h4 className="text-red-400 text-xs font-bold uppercase tracking-widest mb-2 flex items-center gap-2">
            <AlertTriangle className="w-4 h-4" /> El Problema
          </h4>
          <p className="text-zinc-400 text-sm leading-relaxed">{problem}</p>
        </div>
        
        <div>
          <h4 className="text-cyan-400 text-xs font-bold uppercase tracking-widest mb-2 flex items-center gap-2">
            <Wrench className="w-4 h-4" /> La Solución Técnica
          </h4>
          <p className="text-zinc-400 text-sm leading-relaxed">{solution}</p>
        </div>
        
        <div className="pt-5 border-t border-zinc-800/80">
          <h4 className="text-emerald-400 text-sm font-bold mb-2 flex items-center gap-2 uppercase tracking-wide">
            <TrendingUp className="w-5 h-5" /> Impacto de Negocio (ROI)
          </h4>
          <p className="text-white font-medium">{roi}</p>
        </div>

        {link && (
          <div className="pt-6">
            <motion.a 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href={link} 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-transparent hover:bg-zinc-200 text-black text-sm font-bold rounded-xl transition-colors group/link cursor-pointer shadow-[0_0_20px_rgba(255,255,255,0.1)]"
            >
              Inspeccionar Proyecto 
              <ExternalLink className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
            </motion.a>
          </div>
        )}
      </div>
      </div>
    </motion.div>
  );
}
