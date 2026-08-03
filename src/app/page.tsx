"use client";

/* eslint-disable @next/next/no-img-element */

import { useState } from "react";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

type DownloadItem = {
  title: string;
  subtitle: string;
  href: string;
  icon: string;
  accent: string;
  label: string;
  fallback: string;
};

const downloads: DownloadItem[] = [
  {
    title: "Official Forge",
    subtitle: "Paquete base para servidores y clientes Forge.",
    href: "https://www.mediafire.com/file/n8banoof7s55xmz/Official_Forge.zip/file",
    icon: "https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/logos/curseforge-1ggrlxplc9gjkajypnzcdh.png/curseforge-vqyvsa5do1rsh8njqkqpam.png?_a=DATAiZAAZAA0",
    accent: "bg-[#ff3b30]",
    label: "Forge",
    fallback: "CF",
  },
  {
    title: "Official Modrinth",
    subtitle: "Instalación rápida con perfil Modrinth.",
    href: "https://www.mediafire.com/file/7axzjtnfhzgrl6x/official_Modrinth.mrpack/file",
    icon: "https://upload.wikimedia.org/wikipedia/commons/7/74/Prism_Launcher_logo.svg",
    accent: "bg-[#00c853]",
    label: "Modrinth",
    fallback: "MR",
  },
  {
    title: "Official PrismLauncher",
    subtitle: "Perfil listo para PrismLauncher y arranque limpio.",
    href: "https://www.mediafire.com/file/uga9zz0irev074k/Official_PrismLauncher.zip/file",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW8EAqEiKCkEgSo3B1FgaEFBhF16nzwRhqzqaorZuaPilXyVM4mN1KwvBK&s=10",
    accent: "bg-[#0066ff]",
    label: "Prism",
    fallback: "PL",
  },
];

const tutorialSteps = [
  "Descarga el perfil que coincida con tu launcher.",
  "Abre BlueMap en la red interna y verifica el spawn.",
  "Usa el mapa y los paquetes para preparar tu sesión o tutorial.",
];

function MotionFrame({ children, className = "", id }: { children: ReactNode; className?: string; id?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className={className}
      id={id}
    >
      {children}
    </motion.div>
  );
}

function BrandIcon({ src, alt, fallback, accent }: { src: string; alt: string; fallback: string; accent: string }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className={`flex h-16 w-16 items-center justify-center border-2 border-black ${accent} text-xl font-black text-black shadow-[4px_4px_0_#000]`}>
        {fallback}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      onError={() => setFailed(true)}
      className="h-16 w-16 border-2 border-black bg-white object-contain p-2 shadow-[4px_4px_0_#000]"
    />
  );
}

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-transparent text-black">
      <div className="absolute inset-0 grid-noise opacity-50" />
      <div className="absolute -left-24 top-16 h-72 w-72 rounded-full bg-[#ff3b30]/15 blur-3xl" />
      <div className="absolute right-0 top-44 h-80 w-80 rounded-full bg-[#0066ff]/15 blur-3xl" />
      <div className="absolute bottom-0 left-1/4 h-72 w-72 rounded-full bg-[#00c853]/15 blur-3xl" />

      <div className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col gap-6 px-4 py-4 sm:px-6 lg:px-8 lg:py-6">
        <header className="brutal-frame flex flex-col gap-4 p-4 sm:p-5 lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 brutal-chip bg-[#fff3bf] px-3 py-1 text-[11px] font-black uppercase tracking-[0.24em]">
              <span className="h-2 w-2 bg-[#ff3b30]" />
              mc.jessvega.me
            </div>
            <h1 className="max-w-3xl text-3xl font-black uppercase leading-[0.92] tracking-tight sm:text-5xl lg:text-7xl">
              Hola, soy Jess Vega.
            </h1>
          </div>

          <div className="grid gap-3 lg:max-w-xl">
            <div className="flex flex-wrap gap-2">
              {[
                ["Next.js", "bg-[#ffde59]"],
                ["Tailwind", "bg-[#9ef01a]"],
                ["framer-motion", "bg-[#ff7eb6]"],
                ["Minecraft", "bg-[#7cc6fe]"],
              ].map(([label, tone]) => (
                <span key={label} className={`brutal-chip px-3 py-2 text-xs font-black uppercase tracking-[0.18em] ${tone}`}>
                  {label}
                </span>
              ))}
            </div>
          </div>
        </header>

        <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <MotionFrame className="brutal-frame relative overflow-hidden p-5 sm:p-7 bg-[#fff8f0]">
            <div className="absolute right-4 top-4 brutal-chip bg-[#ffb703] px-3 py-1 text-[11px] font-black uppercase tracking-[0.22em]">
              Portafolio
            </div>
            <p className="text-sm font-black uppercase tracking-[0.28em] text-black/60">Hola</p>
            <h2 className="mt-3 max-w-2xl text-4xl font-black uppercase leading-none sm:text-6xl">
              Un portafolio para mostrar mi mundo de Minecraft.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 sm:text-lg">
              Todo lo importante está en una sola página: el mapa, las descargas y una guía rápida para que cualquiera se ubique al instante.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#map"
                className="brutal-frame-soft brutal-hover !bg-[#ff3b30] px-5 py-3 text-sm font-black uppercase tracking-[0.18em] !text-black"
              >
                Ver mapa
              </a>
              <a
                href="#downloads"
                className="brutal-frame-soft brutal-hover !bg-[#0066ff] px-5 py-3 text-sm font-black uppercase tracking-[0.18em] !text-white"
              >
                Descargar modpacks
              </a>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {[
                ["Tutoriales", "Pasos cortos y útiles"],
                ["Mundo", "BlueMap listo para explorar"],
                ["Descargas", "Links directos y claros"],
              ].map(([title, copy]) => (
                <div key={title} className="brutal-chip bg-[#e8ffef] p-4">
                  <p className="text-sm font-black uppercase tracking-[0.18em]">{title}</p>
                  <p className="mt-2 text-sm leading-6">{copy}</p>
                </div>
              ))}
            </div>
          </MotionFrame>

          <MotionFrame className="brutal-frame flex flex-col justify-between gap-4 p-5 sm:p-7 bg-[#e7f1ff]">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.28em] text-black/60">Estado rápido</p>
              <div className="mt-3 space-y-3">
                <div className="brutal-chip flex items-center justify-between bg-white px-4 py-3 text-sm font-black uppercase tracking-[0.18em]">
                  <span>BlueMap</span>
                  <span className="text-[#00c853]">Online</span>
                </div>
                <div className="brutal-chip flex items-center justify-between bg-white px-4 py-3 text-sm font-black uppercase tracking-[0.18em]">
                  <span>Red</span>
                  <span>10.89.2.87:8100</span>
                </div>
              </div>
            </div>

            <div className="brutal-frame-soft grid gap-4 bg-[#fff3bf] p-4">
              <p className="text-sm font-black uppercase tracking-[0.24em]">Guía rápida</p>
              <ol className="space-y-3 text-sm leading-6">
                {tutorialSteps.map((step, index) => (
                  <li key={step} className="flex gap-3">
                    <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center border-2 border-black bg-white font-black shadow-[3px_3px_0_#000]">
                      {index + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </MotionFrame>
        </section>

        <section id="map" className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <MotionFrame className="brutal-frame overflow-hidden p-4 sm:p-5 bg-[#fff7fb]">
            <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.28em] text-black/60">Mapa</p>
                <h3 className="text-2xl font-black uppercase">BlueMap Live View</h3>
              </div>
              <a
                href="http://mapa.mc.jessvega.me/"
                target="_blank"
                rel="noreferrer"
                className="brutal-chip brutal-hover !bg-[#00c853] px-4 py-2 text-xs font-black uppercase tracking-[0.22em] !text-black"
              >
                Abrir en pestaña
              </a>
            </div>

            <div className="relative aspect-[16/10] overflow-hidden border-4 border-black bg-white shadow-[8px_8px_0_#000]">
              <iframe
                src="http://mapa.mc.jessvega.me/"
                title="BlueMap"
                className="h-full w-full"
                loading="lazy"
              />
            </div>
          </MotionFrame>

          <MotionFrame className="brutal-frame flex flex-col gap-4 p-4 sm:p-5 bg-[#f1fff6]" id="downloads">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.28em] text-black/60">Descargas</p>
              <h3 className="mt-1 text-2xl font-black uppercase">Mods y launchers</h3>
            </div>

            <div className="grid gap-4">
              {downloads.map((item) => (
                <article key={item.title} className="brutal-frame-soft bg-white p-4">
                  <div className="flex gap-4">
                    <BrandIcon src={item.icon} alt={item.title} fallback={item.fallback} accent={item.accent} />
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <h4 className="text-lg font-black uppercase leading-none">{item.title}</h4>
                        <span className={`brutal-chip px-2 py-1 text-[10px] font-black uppercase tracking-[0.18em] ${item.accent}`}>{item.label}</span>
                      </div>
                      <p className="mt-2 text-sm leading-6 text-black/80">{item.subtitle}</p>
                    </div>
                  </div>
                  <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                    <span className="text-xs font-black uppercase tracking-[0.22em] text-black/60">MediaFire</span>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="brutal-hover brutal-chip !bg-[#ff3b30] px-4 py-2 text-xs font-black uppercase tracking-[0.22em] !text-black"
                    >
                      Descargar
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </MotionFrame>
        </section>

        <MotionFrame className="brutal-frame flex flex-col gap-4 p-5 sm:flex-row sm:items-end sm:justify-between sm:p-6 bg-[#fff0e6]">
          <div className="max-w-3xl space-y-2">
            <p className="text-sm font-black uppercase tracking-[0.28em] text-black/60">Tutoriales</p>
            <h3 className="text-2xl font-black uppercase sm:text-3xl">Directo al punto: mirar, bajar y jugar.</h3>
            <p className="text-sm leading-6 sm:text-base">
              Esta versión está pensada como presentación de portafolio: breve, colorida y clara, sin sentirse como una demo técnica.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="https://www.mediafire.com/file/n8banoof7s55xmz/Official_Forge.zip/file"
              target="_blank"
              rel="noreferrer"
              className="brutal-chip brutal-hover !bg-black px-4 py-3 text-xs font-black uppercase tracking-[0.22em] !text-[#fff3bf]"
            >
              Forge Pack
            </a>
            <a
              href="https://www.mediafire.com/file/7axzjtnfhzgrl6x/official_Modrinth.mrpack/file"
              target="_blank"
              rel="noreferrer"
              className="brutal-chip brutal-hover !bg-[#00c853] px-4 py-3 text-xs font-black uppercase tracking-[0.22em] !text-black"
            >
              Modrinth Pack
            </a>
            <a
              href="https://www.mediafire.com/file/uga9zz0irev074k/Official_PrismLauncher.zip/file"
              target="_blank"
              rel="noreferrer"
              className="brutal-chip brutal-hover !bg-[#0066ff] px-4 py-3 text-xs font-black uppercase tracking-[0.22em] !text-white"
            >
              Prism Launcher
            </a>
          </div>
        </MotionFrame>

        <footer className="pb-2 text-center text-[11px] font-black uppercase tracking-[0.3em] text-black/55">
          mc.jessvega.me // mapa, mods y tutoriales
        </footer>
      </div>
    </main>
  );
}
