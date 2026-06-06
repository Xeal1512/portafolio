"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { Particles } from "../ui/Particles";

export function HeroSection() {
  const { scrollY } = useScroll();
  const yText = useTransform(scrollY, [0, 800], [0, 200]);
  const opacityText = useTransform(scrollY, [0, 600], [1, 0]);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 60, damping: 15 } }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 z-10">
      <Particles />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[600px] bg-cyan-900/20 blur-[150px] rounded-full pointer-events-none mix-blend-screen" />

      <motion.div 
        style={{ y: yText, opacity: opacityText }}
        className="relative z-10 max-w-5xl mx-auto px-6 text-center"
      >
        <motion.div
           variants={container}
           initial="hidden"
           animate="show"
        >
          <motion.span variants={item} className="inline-block py-1.5 px-4 rounded-full bg-zinc-900/80 backdrop-blur-md border border-zinc-800 text-cyan-400 text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] mb-8 shadow-2xl">
            B2B SOFTWARE ARCHITECTURE & AI
          </motion.span>
          
          <motion.h1 variants={item} className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white mb-8 tracking-tighter leading-[1.05]">
            Arquitectura e IA Diseñada para <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 drop-shadow-sm">
              Multiplicar tu Eficiencia Operativa.
            </span>
          </motion.h1>
          
          <motion.p variants={item} className="text-lg md:text-2xl text-zinc-400 max-w-3xl mx-auto mb-12 leading-relaxed font-light">
            Soy <strong className="text-white font-medium">Alexander Rojas</strong>, Full-Stack Developer & AI Integrator. Construyo plataformas SaaS, CRMs y agentes conversacionales que eliminan prospectos "mirones" y aceleran tus ciclos de venta.
          </motion.p>
          
          <motion.div variants={item} className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://wa.me/1234567890?text=Hola%20Alexander,%20me%20interesa%20una%20consultoría%20sobre%20arquitectura%20SaaS%20e%20IA." 
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto px-10 py-4 bg-white text-black text-sm uppercase tracking-wider font-bold rounded-full transition-shadow hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] text-center flex items-center justify-center"
            >
              Agendar Consultoría Estratégica
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#proyectos" 
              className="w-full sm:w-auto px-10 py-4 bg-transparent text-white text-sm uppercase tracking-wider font-bold rounded-full border border-zinc-700 hover:border-zinc-500 hover:bg-zinc-900/50 transition-all text-center flex items-center justify-center backdrop-blur-sm"
            >
              Desglosar Casos de Éxito
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
