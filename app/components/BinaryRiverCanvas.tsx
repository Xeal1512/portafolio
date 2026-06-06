"use client";

import React, { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

const PARTICLE_COUNT = 3000;
const SECTION_IDS = ["perfil", "habilidades", "experiencia", "proyectos", "contacto"];

// Función para generar las texturas de 0 y 1 dinámicamente sin usar fuentes externas.
// Esto garantiza velocidad de carga y reduce dependencias externas para WebGL.
function createTextTexture(char: string) {
  const canvas = document.createElement("canvas");
  canvas.width = 64;
  canvas.height = 64;
  const ctx = canvas.getContext("2d")!;

  ctx.fillStyle = "rgba(0,0,0,0)";
  ctx.fillRect(0, 0, 64, 64);

  // Usamos una fuente monoespaciada genérica del sistema para máxima eficiencia
  ctx.font = "bold 48px monospace";
  ctx.fillStyle = "#ffffff";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(char, 32, 35);

  const texture = new THREE.CanvasTexture(canvas);
  texture.minFilter = THREE.LinearFilter;
  return texture;
}

function RiverInstances() {
  const mesh0Ref = useRef<THREE.InstancedMesh>(null);
  const mesh1Ref = useRef<THREE.InstancedMesh>(null);

  // Texturas cacheadas
  const tex0 = useMemo(() => createTextTexture("0"), []);
  const tex1 = useMemo(() => createTextTexture("1"), []);

  // Geometría y Material (MeshBasicMaterial no se ve afectado por la luz, ideal para un efecto "pantalla/neón")
  const geometry = useMemo(() => new THREE.PlaneGeometry(0.8, 0.8), []);
  const mat0 = useMemo(() => new THREE.MeshBasicMaterial({ map: tex0, transparent: true, toneMapped: false, depthWrite: false }), [tex0]);
  const mat1 = useMemo(() => new THREE.MeshBasicMaterial({ map: tex1, transparent: true, toneMapped: false, depthWrite: false }), [tex1]);

  // Estado inicial de las partículas
  const particles = useMemo(() => {
    const arr = [];
    const color = new THREE.Color();
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      arr.push({
        isOne: Math.random() > 0.5,
        x: (Math.random() - 0.5) * 70, // Rango de anchura ampliado
        y: (Math.random() - 0.5) * 70, // Altura inicial
        z: (Math.random() - 0.5) * 20 - 10, // Profundidad
        speed: 0.015 + Math.random() * 0.02, // Velocidad base más rápida y natural
        baseX: (Math.random() - 0.5) * 70, // Posición X original a la cual volver
        color: color.clone().setRGB(0.15, 0.15, 0.15), // Gris oscuro técnico
      });
    }
    return arr;
  }, []);

  const dummy = useMemo(() => new THREE.Object3D(), []);

  // Colores base y resplandor
  const baseColor = useMemo(() => new THREE.Color(0.15, 0.15, 0.15), []);
  // "Zenit Cyan" multiplicado para disparar el efecto Bloom (valores > 1)
  const glowColor = useMemo(() => new THREE.Color(0, 3, 3), []);

  // Estado del scroll para calcular momentum
  const scrollData = useRef({ y: 0, delta: 0, lastY: 0 });

  // Referencias a los elementos del DOM enlazadas una vez para evitar llamadas a getElementById en cada frame
  const domElements = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    // Almacenamos las referencias
    domElements.current = SECTION_IDS.map(id => document.getElementById(id));

    const handleScroll = () => {
      const cy = window.scrollY;
      scrollData.current.delta = cy - scrollData.current.lastY;
      scrollData.current.lastY = cy;
      scrollData.current.y = cy;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useFrame(() => {
    if (!mesh0Ref.current || !mesh1Ref.current) return;

    // Fricción del momentum del scroll
    scrollData.current.delta *= 0.92; // Un poco menos de fricción para que el efecto dure un instante más

    // Permitimos momentum en ambas direcciones para el efecto de "volver en el tiempo"
    const scrollMomentum = scrollData.current.delta * 0.025; // Sensibilidad ajustada para que el reverso sea evidente

    const windowH = window.innerHeight;
    const viewportCenterY = windowH / 2;

    // Evaluar qué sección está activa (cerca del centro de la pantalla)
    let activeIntensity = 0;

    for (const el of domElements.current) {
      if (el) {
        const rect = el.getBoundingClientRect();
        // Centro del elemento respecto al viewport
        const elementCenterY = rect.top + rect.height / 2;

        // Distancia del centro del elemento al centro del viewport
        const dist = Math.abs(elementCenterY - viewportCenterY);
        // Si el centro de la sección está dentro de un rango visible
        if (dist < 400) {
          activeIntensity = 1 - (dist / 400); // 0 a 1 dependiendo de qué tan cerca esté del centro
          break; // Nos quedamos con el primero que coincida
        }
      }
    }

    // Solución al problema de que el río se vuelve a unir en márgenes o secciones largas:
    // Una vez que el usuario hace scroll hacia abajo, forzamos que se mantenga separado.
    activeIntensity = Math.max(activeIntensity, Math.min(1, (window.scrollY - 150) / 300));

    let count0 = 0;
    let count1 = 0;

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const p = particles[i];

      // Aplicar velocidad natural + momentum del scroll (que puede ser negativo para retroceder)
      p.y -= (p.speed + scrollMomentum);

      // Reciclar la partícula cuando cae demasiado (flujo normal hacia abajo)
      if (p.y < -35) {
        p.y = 35;
        p.x = p.baseX;
      } 
      // Reciclar la partícula cuando sube demasiado (flujo en reversa hacia arriba)
      else if (p.y > 35) {
        p.y = -35;
        p.x = p.baseX;
      }

      // Lógica de Esquive (Dodge) con curvas más pronunciadas
      if (activeIntensity > 0) {
        // Aumentamos el espacio libre en el centro para abrir más la vista segura
        const spaceClearance = 40;

        let targetX = p.baseX;

        // Si la partícula iba a caer cerca del centro, la empujamos en una curva hacia afuera
        if (Math.abs(p.baseX) < spaceClearance) {
          const pushForce = Math.pow(1 - (Math.abs(p.baseX) / spaceClearance), 2) * 12;

          // Ondas más pronunciadas en los bordes internos basadas en la posición Y
          const wave = Math.sin(p.y * 0.15) * 4;

          targetX = p.baseX >= 0
            ? spaceClearance + pushForce + wave // Hacia la derecha, con onda
            : -spaceClearance - pushForce - wave; // Hacia la izquierda, con onda
        } else if (Math.abs(p.baseX) < spaceClearance + 15) {
          // Las partículas adyacentes al borde interno también siguen la onda suavemente
          const wave = Math.sin(p.y * 0.15) * 3;
          targetX += p.baseX >= 0 ? wave : -wave;
        }

        // Aplicamos la interpolación para crear una curva (bezier natural)
        p.x += (targetX - p.x) * 0.05 * activeIntensity;

        // Iluminar el río que ahora enmarca el contenido
        p.color.lerpColors(baseColor, glowColor, activeIntensity * 1.5);
      } else {
        // Retornar a flujo normal lentamente para hacer la curva de salida fluida
        p.x += (p.baseX - p.x) * 0.02;
        p.color.lerp(baseColor, 0.1); // Apagar lentamente
      }

      // Actualizar matriz de la instancia
      dummy.position.set(p.x, p.y, p.z);
      dummy.updateMatrix();

      // Separar actualizaciones entre los 0s y los 1s
      if (p.isOne) {
        mesh1Ref.current.setMatrixAt(count1, dummy.matrix);
        mesh1Ref.current.setColorAt(count1, p.color);
        count1++;
      } else {
        mesh0Ref.current.setMatrixAt(count0, dummy.matrix);
        mesh0Ref.current.setColorAt(count0, p.color);
        count0++;
      }
    }

    mesh0Ref.current.count = count0;
    mesh1Ref.current.count = count1;

    // Indicar a Three.js que los buffers han cambiado
    mesh0Ref.current.instanceMatrix.needsUpdate = true;
    mesh0Ref.current.instanceColor!.needsUpdate = true;
    mesh1Ref.current.instanceMatrix.needsUpdate = true;
    mesh1Ref.current.instanceColor!.needsUpdate = true;
  });

  return (
    <>
      <instancedMesh ref={mesh0Ref} args={[geometry, mat0, PARTICLE_COUNT]}>
        <instancedBufferAttribute attach="instanceColor" args={[new Float32Array(PARTICLE_COUNT * 3), 3]} />
      </instancedMesh>
      <instancedMesh ref={mesh1Ref} args={[geometry, mat1, PARTICLE_COUNT]}>
        <instancedBufferAttribute attach="instanceColor" args={[new Float32Array(PARTICLE_COUNT * 3), 3]} />
      </instancedMesh>
    </>
  );
}

export default function BinaryRiverCanvas() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none bg-space-black">
      {/* 
        Canvas configurado para no interceptar eventos del mouse, 
        y con un campo de visión amplio para englobar las partículas 
      */}
      <Canvas camera={{ position: [0, 0, 20], fov: 60 }} dpr={[1, 2]}>
        <RiverInstances />
        {/* Post-procesamiento Bloom para el resplandor de partículas activas */}
        <EffectComposer disableNormalPass>
          <Bloom luminanceThreshold={1} luminanceSmoothing={0.9} intensity={1.5} mipmapBlur />
        </EffectComposer>
      </Canvas>
    </div>
  );
}
