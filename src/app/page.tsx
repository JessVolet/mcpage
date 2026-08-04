"use client";

import { motion } from "framer-motion";
import { Check, Copy, Gamepad2, Wrench, PackageCheck, Map, ExternalLink, RefreshCw } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { staggerContainerVariants, staggerItemVariants } from "@/lib/animations";
import { mcData } from "@/data/minecraft";

import serverIcon from "@/assets/server-icon-hd.png";
import flowersIcon from "@/assets/Flowers.jpg";
import jovGlitchIcon from "@/assets/jov-glitch.png";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
    </svg>
  );
}

export default function Home() {
  const [copied, setCopied] = useState(false);
  const [iframeKey, setIframeKey] = useState(0);

  const copyIp = async () => {
    await navigator.clipboard.writeText(mcData.serverIp);
    setCopied(true);
    toast.success("IP Copiada con éxito", {
      description: mcData.serverIp,
      className:
        "rounded-none border-2 border-black bg-purple-900 text-amber-300 font-mono uppercase shadow-[6px_6px_0px_rgba(0,0,0,1)] dark:border-amber-400",
    });
    window.setTimeout(() => setCopied(false), 1600);
  };

  return (
    <main className="dossier-grid-pattern relative min-h-screen w-full bg-[#faf8fc] text-black transition-colors duration-300 dark:bg-[#0b0714] dark:text-white overflow-x-hidden">
      {/* Glow Effects */}
      <div className="pointer-events-none absolute -left-20 top-10 h-[500px] w-[500px] rounded-full bg-purple-600/15 blur-3xl dark:bg-purple-900/25" />
      <div className="pointer-events-none absolute right-0 top-1/3 h-[500px] w-[500px] rounded-full bg-amber-400/15 blur-3xl dark:bg-amber-400/20" />

      {/* Main Outer Container */}
      <div className="relative mx-auto flex w-full flex-col gap-16 px-4 py-6 sm:gap-24 sm:px-6 md:px-10 lg:px-12 lg:py-10">

        {/* ========================================================================= */}
        {/* SECCIÓN 1: HERO & LIVE BLUEMAP SIDE-BY-SIDE (Ultra Wide Span)             */}
        {/* ========================================================================= */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainerVariants}
          className="mx-auto w-full max-w-[1760px] grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch py-4 sm:py-6"
        >
          {/* Columna Izquierda: Server Info, Server Icon & Copy Box */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-6">
            <motion.div variants={staggerItemVariants} className="flex items-center gap-3">
              <Image
                src={serverIcon}
                alt="Server Icon HD"
                className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl border-2 border-black object-cover shadow-[3px_3px_0px_rgba(0,0,0,1)] dark:border-amber-400"
                priority
              />
              <span className="inline-block border-2 border-black bg-[#fbbf24] px-4 py-1.5 font-mono text-xs font-black uppercase tracking-widest text-black shadow-[4px_4px_0px_rgba(0,0,0,1)] dark:border-amber-400 dark:bg-[#facc15] dark:shadow-[4px_4px_0px_rgba(250,204,21,0.4)]">
                SERVIDOR ONLINE // PUERTO 25565
              </span>
            </motion.div>

            {/* Title Renamed to MC.JESSVEGA.ME */}
            <motion.div variants={staggerItemVariants} className="space-y-3">
              <div className="flex items-center gap-4">
                <h1 className="font-mono text-4xl font-black uppercase tracking-tight text-black sm:text-6xl lg:text-7xl xl:text-8xl leading-none dark:text-white">
                  {mcData.title}
                </h1>
              </div>

              <div className="h-1.5 w-24 bg-[#7c3aed] dark:bg-[#facc15]" />

              <p className="font-mono text-sm leading-relaxed text-black/80 sm:text-base lg:text-lg dark:text-purple-200/90">
                {mcData.subtitle}
              </p>
            </motion.div>

            {/* Consola IP Box */}
            <motion.div variants={staggerItemVariants} className="w-full">
              <button
                onClick={copyIp}
                type="button"
                className="group w-full border-2 border-black bg-black p-5 text-left text-white shadow-[6px_6px_0px_rgba(0,0,0,1)] transition-transform hover:-translate-y-1 cursor-pointer dark:border-amber-400 dark:bg-[#170e2b] dark:text-amber-300 dark:shadow-[6px_6px_0px_rgba(251,191,36,0.35)]"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center border-2 border-white/20 bg-white/10 text-amber-300 dark:border-amber-400/40 dark:bg-amber-400/10">
                    {copied ? <Check className="h-6 w-6 text-emerald-400" /> : <Gamepad2 className="h-6 w-6" />}
                  </div>
                  <div className="grow">
                    <div className="flex items-center justify-between font-mono text-xs sm:text-sm font-black uppercase tracking-wider text-amber-400 dark:text-amber-300">
                      <span>ENTRAR AL SERVIDOR MINECRAFT</span>
                      <span className="text-[10px] sm:text-xs text-white/70 group-hover:text-white font-semibold">
                        {copied ? "[COPIADO!]" : "[COPIAR IP]"}
                      </span>
                    </div>
                    <p className="mt-1 font-mono text-xs text-white/80 dark:text-purple-200/90">
                      IP: <span className="font-bold text-[#facc15]">{mcData.serverIp}</span> • Modpack oficial self-hosted
                    </p>
                  </div>
                </div>
              </button>
            </motion.div>

            {/* Buttons Row */}
            <motion.div variants={staggerItemVariants} className="flex flex-wrap gap-4 items-center pt-2">
              <Button href="#descargas" className="px-6 py-3.5 text-xs sm:text-sm font-black">
                <PackageCheck className="h-4 w-4" />
                DESCARGAR MODPACKS
              </Button>

              <Button href={mcData.blueMapUrl} variant="outline" target="_blank" rel="noreferrer" className="px-6 py-3.5 text-xs sm:text-sm font-black">
                ABRIR BLUEMAP ↗
              </Button>
            </motion.div>

            {/* Badges, Casual Icon (Flowers.jpg) & Powered By Sponsors */}
            <motion.div variants={staggerItemVariants} className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={mcData.portfolioUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 border-2 border-black bg-purple-700 px-3.5 py-1.5 font-mono text-[11px] font-black uppercase text-white shadow-[3px_3px_0px_rgba(0,0,0,1)] transition-transform hover:-translate-y-0.5 dark:border-amber-400 dark:bg-purple-900 dark:text-amber-300"
              >
                <Image src={flowersIcon} alt="Jess Vega Casual" className="h-5 w-5 rounded-full object-cover border border-white" />
                <span>POWERED BY JESSVEGA.ME</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>

              <div className="inline-flex items-center gap-2 border-2 border-black bg-white px-3.5 py-1.5 font-mono text-[11px] font-black uppercase text-black shadow-[3px_3px_0px_rgba(0,0,0,1)] dark:border-amber-400 dark:bg-[#170e2b] dark:text-amber-300">
                <img src={mcData.playitLogo} alt="Playit.gg" className="h-4 w-4 rounded-full object-cover" />
                <span>PLAYIT.GG</span>
              </div>

              <div className="inline-flex items-center gap-2 border-2 border-black bg-white px-3.5 py-1.5 font-mono text-[11px] font-black uppercase text-black shadow-[3px_3px_0px_rgba(0,0,0,1)] dark:border-amber-400 dark:bg-[#170e2b] dark:text-amber-300">
                <img src={mcData.mediafireLogo} alt="MediaFire" className="h-3.5 w-auto object-contain" />
                <span>MEDIAFIRE</span>
              </div>
            </motion.div>
          </div>

          {/* Columna Derecha: BlueMap Iframe Embed */}
          <div className="lg:col-span-6 min-h-[480px] sm:min-h-[580px] lg:min-h-[640px] flex flex-col">
            <motion.div variants={staggerItemVariants} className="h-full flex flex-col">
              <div className="flex-1 border-2 border-black bg-black shadow-[8px_8px_0px_rgba(0,0,0,1)] dark:border-amber-400 dark:shadow-[8px_8px_0px_rgba(251,191,36,0.35)] flex flex-col overflow-hidden">
                {/* Header Bar */}
                <div className="flex flex-wrap items-center justify-between gap-2 border-b-2 border-black bg-purple-900 p-3 text-white dark:border-amber-400 dark:bg-purple-950 shrink-0">
                  <div className="flex items-center gap-2 font-mono text-xs font-black uppercase tracking-wider text-amber-300">
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>BLUEMAP LIVE // HTTPS://MAPA.MC.JESSVEGA.ME/</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setIframeKey((k) => k + 1)}
                      type="button"
                      className="inline-flex items-center gap-1 border border-amber-400/40 bg-white/10 px-2.5 py-1 font-mono text-[11px] font-bold text-amber-300 hover:bg-white/20 transition cursor-pointer"
                    >
                      <RefreshCw className="h-3 w-3" /> Recargar
                    </button>

                    <a
                      href={mcData.blueMapUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 border border-amber-400 bg-amber-400 px-3 py-1 font-mono text-[11px] font-black text-black hover:bg-amber-300 transition"
                    >
                      Pantalla Completa <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </div>

                {/* Embedded Live Iframe */}
                <div className="relative flex-1 w-full min-h-[400px] bg-black">
                  <iframe
                    key={iframeKey}
                    src={mcData.blueMapUrl}
                    title="BlueMap Live Server Map"
                    className="w-full h-full border-0"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* ========================================================================= */}
        {/* SECCIÓN 2: DESCARGAS DE MODPACKS (#descargas) - Narrower Clean Container   */}
        {/* ========================================================================= */}
        <motion.section
          id="descargas"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainerVariants}
          className="mx-auto w-full max-w-[1280px] space-y-10 py-6"
        >
          <motion.div variants={staggerItemVariants} className="text-center space-y-3">
            <div className="inline-flex items-center gap-3 justify-center">
              <div className="flex h-12 w-12 items-center justify-center border-2 border-black bg-[#fbbf24] shadow-[4px_4px_0px_rgba(0,0,0,1)] dark:border-amber-400 dark:bg-[#facc15] text-black">
                <PackageCheck className="h-6 w-6" />
              </div>
              <h2 className="text-3xl font-black uppercase sm:text-5xl text-black dark:text-white">
                CLIENTES Y MODPACKS
              </h2>
            </div>

            <div className="flex items-center justify-center gap-2 pt-1">
              <span className="font-mono text-xs font-bold uppercase text-slate-600 dark:text-purple-300">
                POWERED BY MEDIAFIRE
              </span>
              <img src={mcData.mediafireLogo} alt="MediaFire" className="h-4 w-auto object-contain" />
            </div>

            <div className="mx-auto h-1.5 w-24 bg-[#7c3aed] dark:bg-[#facc15]" />
          </motion.div>

          {/* Timeline Nodes (01, 02, 03) */}
          <motion.div variants={staggerItemVariants} className="relative hidden md:block max-w-4xl mx-auto my-6">
            <div className="absolute top-1/2 left-0 right-0 h-1.5 bg-black dark:bg-amber-400 -translate-y-1/2 z-0" />
            <div className="relative z-10 flex justify-between px-16">
              {mcData.downloads.map((item) => (
                <div
                  key={item.id}
                  className="flex h-12 w-12 items-center justify-center border-2 border-black bg-purple-600 font-mono text-sm font-black text-amber-300 shadow-[4px_4px_0px_rgba(0,0,0,1)] dark:border-amber-400 dark:bg-purple-900"
                >
                  {item.id}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Grid de 3 Tarjetas con Iconos de Modpacks */}
          <div className="grid gap-6 md:grid-cols-3">
            {mcData.downloads.map((item) => (
              <motion.div key={item.id} variants={staggerItemVariants}>
                <Card interactive className="flex flex-col h-full p-2">
                  <CardHeader className="p-5 pb-2">
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <img src={item.icon} alt={item.name} className="h-10 w-10 object-contain shrink-0" />
                        <span className="font-mono text-xs font-black uppercase text-[#7c3aed] dark:text-amber-400">
                          OPCIÓN {item.id}
                        </span>
                      </div>
                      <Badge className="bg-[#fbbf24] text-black dark:bg-amber-400 dark:text-black px-2.5 py-1 text-xs">
                        {item.badge}
                      </Badge>
                    </div>
                    <CardTitle className="mt-3 text-2xl sm:text-3xl">{item.name}</CardTitle>
                    <div className="h-1.5 w-14 bg-[#7c3aed] dark:bg-amber-400 mt-2" />
                  </CardHeader>

                  <CardContent className="grow p-5 pt-2">
                    <CardDescription className="text-sm leading-relaxed">{item.desc}</CardDescription>
                  </CardContent>

                  <CardFooter className="p-5 pt-2 flex flex-col gap-3">
                    <Button
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full bg-purple-700 text-amber-300 dark:bg-amber-400 dark:text-black hover:bg-purple-800 py-3.5 font-black text-xs"
                    >
                      DESCARGAR {item.badge} ↗
                    </Button>
                    <div className="flex items-center justify-center gap-1.5 text-[10px] font-mono text-slate-500 dark:text-purple-300">
                      <span>DESCARGA DIRECTA MEDIAFIRE</span>
                      <img src={mcData.mediafireLogo} alt="MediaFire" className="h-2.5 w-auto object-contain opacity-70" />
                    </div>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ========================================================================= */}
        {/* SECCIÓN 3: INFRAESTRUCTURA (#infra) - Narrower Clean Container            */}
        {/* ========================================================================= */}
        <motion.section
          id="infra"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainerVariants}
          className="mx-auto w-full max-w-[1280px] space-y-10 py-6"
        >
          <motion.div variants={staggerItemVariants} className="text-center space-y-3">
            <div className="inline-flex items-center gap-3 justify-center">
              <div className="flex h-12 w-12 items-center justify-center border-2 border-black bg-purple-700 shadow-[4px_4px_0px_rgba(0,0,0,1)] dark:border-amber-400 text-amber-300">
                <Wrench className="h-6 w-6" />
              </div>
              <h2 className="text-3xl font-black uppercase sm:text-5xl text-black dark:text-white">
                ARQUITECTURA DEL SERVIDOR
              </h2>
            </div>
            <div className="mx-auto h-1.5 w-24 bg-[#7c3aed] dark:bg-[#facc15]" />
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3">
            {mcData.infra.map((item) => (
              <motion.div key={item.id} variants={staggerItemVariants}>
                <Card interactive className="flex flex-col h-full p-2">
                  <CardHeader className="p-5 pb-2">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-black text-amber-500 dark:text-amber-400">
                        {item.id}
                      </span>
                      <div className="flex items-center gap-1.5">
                        {item.logo ? (
                          <img src={item.logo} alt="Playit.gg" className="h-6 w-6 rounded-full object-cover border border-black dark:border-amber-400" />
                        ) : null}
                        {item.tags.map((tag) => (
                          <Badge key={tag} className="bg-purple-700 text-white dark:bg-purple-900 dark:text-amber-300 px-2.5 py-0.5 text-[11px]">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <CardTitle className="mt-3 text-xl sm:text-2xl">{item.title}</CardTitle>
                    <div className="h-1.5 w-14 bg-purple-600 dark:bg-amber-400 mt-2" />
                  </CardHeader>

                  <CardContent className="grow p-5 pt-2">
                    <CardDescription className="text-sm leading-relaxed">{item.desc}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

      </div>

      {/* ========================================================================= */}
      {/* SECCIÓN 4: PITCH COMERCIAL & CONTACTO (Full Width Extended Black BG)     */}
      {/* ========================================================================= */}
      <motion.section
        id="contacto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainerVariants}
        className="w-full border-t-4 border-black bg-black text-white dark:border-amber-400 dark:bg-[#06030b] mt-12 py-12 sm:py-16 px-4 sm:px-6 lg:px-8"
      >
        <div className="mx-auto w-full max-w-[1280px] space-y-12">
          <motion.div variants={staggerItemVariants} className="text-center space-y-6">
            {/* Professional Freelance Contact Avatar */}
            <div className="flex justify-center">
              <Image
                src={jovGlitchIcon}
                alt="Jess Vega Freelance / Contact"
                className="h-20 w-20 sm:h-24 sm:w-24 rounded-2xl border-2 border-amber-400 object-cover shadow-[6px_6px_0px_rgba(251,191,36,0.35)]"
              />
            </div>

            <span className="inline-block border-2 border-amber-400 bg-amber-400 px-5 py-1.5 font-mono text-xs font-black uppercase text-black shadow-[4px_4px_0px_rgba(255,255,255,0.2)]">
              TRABAJEMOS JUNTOS
            </span>

            <h2 className="text-3xl font-black uppercase tracking-tight text-white sm:text-5xl lg:text-6xl">
              ¿NECESITAS UN SERVIDOR O INFRAESTRUCTURA ASÍ?
            </h2>

            <p className="mx-auto max-w-3xl font-mono text-xs sm:text-base leading-relaxed text-purple-200/90">
              Logremos esto juntos. Diseños de red, servidores autohospedados y despliegues con infraestructura actual, moderna y segura.
            </p>

            <div className="pt-2 flex justify-center">
              <Button
                href={mcData.portfolioUrl}
                target="_blank"
                rel="noreferrer"
                variant="destructive"
                className="bg-[#fbbf24] text-black border-2 border-white hover:bg-amber-400 dark:border-amber-400 dark:bg-amber-400 dark:text-black font-black text-sm px-8 py-4 shadow-[6px_6px_0px_rgba(255,255,255,0.9)]"
              >
                [ CONTACTAR Y VER PORTAFOLIO ↗ ]
              </Button>
            </div>
          </motion.div>

          <div className="border-t border-white/20 w-full" />

          <motion.div variants={staggerItemVariants} className="grid gap-8 md:grid-cols-3 font-mono text-xs sm:text-sm">
            <div className="space-y-3">
              <h3 className="font-black text-sm uppercase tracking-widest text-[#facc15]">REDES & CONTACTO</h3>
              <ul className="space-y-2">
                <li>
                  <a href={mcData.githubUrl} target="_blank" rel="noreferrer" className="text-purple-200 hover:text-white transition-colors flex items-center gap-2">
                    <GithubIcon className="h-4 w-4" /> GitHub Repository ↗
                  </a>
                </li>
                <li>
                  <a href={mcData.portfolioUrl} target="_blank" rel="noreferrer" className="text-purple-200 hover:text-white transition-colors">
                    Portafolio Principal (JessVega.me) ↗
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="font-black text-sm uppercase tracking-widest text-[#facc15]">NAVEGACIÓN DE SERVIDOR</h3>
              <ul className="space-y-2">
                <li><a href="#descargas" className="text-purple-200 hover:text-white">Descargas de Modpacks</a></li>
                <li><a href={mcData.blueMapUrl} target="_blank" rel="noreferrer" className="text-purple-200 hover:text-white">Mapa en Vivo (https://mapa.mc.jessvega.me/)</a></li>
                <li><a href="#infra" className="text-purple-200 hover:text-white">Arquitectura & Infraestructura</a></li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="font-black text-sm uppercase tracking-widest text-[#facc15]">INFRAESTRUCTURA</h3>
              <div className="flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded border border-white/20">
                  <img src={mcData.playitLogo} alt="Playit.gg" className="h-4 w-4 rounded-full object-cover" />
                  <span className="text-xs font-bold text-amber-300">Playit.gg</span>
                </div>
                <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded border border-white/20">
                  <img src={mcData.mediafireLogo} alt="MediaFire" className="h-3 w-auto object-contain" />
                  <span className="text-xs font-bold text-amber-300">MediaFire</span>
                </div>
              </div>
              <p className="text-xs text-purple-200/70 leading-relaxed pt-1">
                © 2026 {mcData.title}. Powered by Jess Vega. Todos los derechos reservados.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.section>

    </main>
  );
}