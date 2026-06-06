"use client";
import { motion, Variants } from "framer-motion";
import { Bot, Database, Rocket } from "lucide-react";
import { services } from "../../data/content";

export function ServicesSection() {
  const icons = [
    <Bot key="bot" className="w-7 h-7 text-cyan-400" />,
    <Database key="db" className="w-7 h-7 text-purple-400" />,
    <Rocket key="rocket" className="w-7 h-7 text-emerald-400" />
  ];

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const item: Variants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    show: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 60, damping: 15 } }
  };

  return (
    <section id="servicios" className="py-40 relative z-10">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-20 text-center sm:text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Servicios diseñados para <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Escalar tus Operaciones.</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl text-lg">
            No me limito a escribir código; analizo tu modelo de negocio e integro las tecnologías necesarias para resolver cuellos de botella y multiplicar tus márgenes.
          </p>
        </div>
        
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-10"
        >
          {services.map((service, idx) => (
            <motion.div 
              key={idx}
              variants={item}
              whileHover={{ y: -8 }}
              className="p-10 rounded-3xl bg-zinc-950/80 backdrop-blur-sm border border-zinc-800/50 hover:border-zinc-700/80 transition-all group shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-[200px] bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none" />
              
              <div className="p-4 bg-black border border-zinc-800 rounded-2xl inline-block mb-8 shadow-inner group-hover:shadow-[0_0_30px_rgba(34,211,238,0.15)] group-hover:scale-110 transition-all duration-300">
                {icons[idx]}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 tracking-tight drop-shadow-sm">{service.title}</h3>
              <p className="text-zinc-400 leading-relaxed text-sm font-medium">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
