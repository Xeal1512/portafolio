"use client";

import dynamic from "next/dynamic";
import Hero from "./components/Hero";
import Profile from "./components/Profile";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import ProjectsGallery from "./components/ProjectsGallery";
import EducationContact from "./components/EducationContact";

const BinaryRiverCanvas = dynamic(() => import("./components/BinaryRiverCanvas"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="relative min-h-screen bg-space-black selection:bg-zenit-cyan selection:text-space-black overflow-x-hidden">
      <BinaryRiverCanvas />
      
      <div className="relative z-10 max-w-[1920px] mx-auto">
        <Hero />
        <Profile />
        <Skills />
        <Experience />
        <ProjectsGallery />
        <EducationContact />
      </div>
    </main>
  );
}
