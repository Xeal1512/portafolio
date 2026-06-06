// app/components/ui/Separator.tsx
"use client";

export function Separator() {
  return (
    <div className="w-full h-[1px] relative overflow-hidden">
      {/* Base line sutil */}
      <div className="absolute inset-0 bg-white/[0.05]" />
      
      {/* Luz difuminada animada sobre la línea */}
      <div className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent blur-[2px] animate-pulse-slow" />
      <div className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" style={{ transform: "translateX(200%)" }} />
    </div>
  );
}
