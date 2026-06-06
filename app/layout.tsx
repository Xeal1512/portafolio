import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Alexander Rojas | Full-Stack & AI Integrator",
  description: "Portafolio especializado en integraciones de IA, escalamiento SaaS y automatización.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${spaceGrotesk.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-space-black text-foreground overflow-x-hidden selection:bg-zenit-cyan selection:text-space-black">
        {children}
      </body>
    </html>
  );
}
