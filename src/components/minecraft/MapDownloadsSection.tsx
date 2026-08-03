"use client";

import { motion } from "framer-motion";
import { ExternalLink, Map, Download, ArrowUpRight } from "lucide-react";
import { staggerContainerVariants, staggerItemVariants } from "@/lib/animations";
import { downloads, siteCopy } from "@/data/minecraft";

export function MapDownloadsSection() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={staggerContainerVariants}
      className="grid gap-10 lg:grid-cols-12"
    >
      {/* Columna Izquierda: MAP */}
      <div id="mapa" className="space-y-6 lg:col-span-6">
        <motion.div variants={staggerItemVariants} className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#b584f5]">
              LIVE MAP
            </span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-white uppercase sm:text-4xl">
            MAPA EN VIVO
          </h2>
          <p className="text-sm text-slate-400 leading-relaxed">
            Explora el mundo en tiempo real, visualiza terrenos y localizaciones estratégicas directamente desde el navegador.
          </p>
        </motion.div>

        {/* Placeholder container con bordes punteados */}
        <motion.div
          variants={staggerItemVariants}
          className="relative flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-white/20 bg-white/[0.01] p-10 text-center backdrop-blur-sm min-h-[360px] overflow-hidden group hover:border-[#b584f5]/40 transition-colors"
        >
          {/* Subtle background glow */}
          <div className="absolute inset-0 bg-radial from-[#b584f5]/10 via-transparent to-transparent opacity-40 group-hover:opacity-75 transition-opacity" />

          <div className="relative z-10 space-y-5 flex flex-col items-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-[#b584f5]">
              <Map className="h-6 w-6" />
            </div>

            <div className="space-y-1">
              <span className="inline-block rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 font-mono text-[11px] font-semibold text-slate-300 uppercase tracking-widest">
                MAP SLOT READY
              </span>
              <p className="text-xs text-slate-500 pt-1">
                Servicio Dynmap / BlueMap activo en la red interna.
              </p>
            </div>

            <a
              href={siteCopy.mapHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-[#141b2d] px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-[#1d273f] hover:border-white/30 active:scale-[0.98] shadow-lg"
            >
              [ ABRIR MAPA ]
              <ExternalLink className="h-4 w-4 text-[#00e5ff]" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Columna Derecha: DOWNLOADS (Lista vertical de 3 filas) */}
      <div id="descargas" className="space-y-6 lg:col-span-6">
        <motion.div variants={staggerItemVariants} className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#00e5ff]">
              DOWNLOADS
            </span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-white uppercase sm:text-4xl">
            CLIENTES Y MODPACKS
          </h2>
          <p className="text-sm text-slate-400 leading-relaxed">
            Descarga las instancias oficiales preconfiguradas para conectar con el servidor en pocos segundos.
          </p>
        </motion.div>

        {/* List of 3 stacked items */}
        <motion.div variants={staggerItemVariants} className="space-y-4">
          {downloads.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur-sm transition-all hover:border-white/20 hover:bg-white/[0.04] space-y-4"
            >
              {/* Top: Id + Title left, Badge right */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-extrabold text-[#00e5ff] rounded-md border border-[#00e5ff]/20 bg-[#00e5ff]/10 px-2 py-0.5">
                    {item.id}
                  </span>
                  <h3 className="text-lg font-bold text-white uppercase tracking-wide">
                    {item.title}
                  </h3>
                </div>
                <span className="font-mono text-[10px] font-bold tracking-widest text-[#b584f5] border border-[#b584f5]/30 bg-[#b584f5]/10 px-2.5 py-0.5 rounded-full uppercase">
                  {item.badge}
                </span>
              </div>

              {/* Middle: Desc */}
              <p className="text-xs text-slate-400 leading-relaxed">
                {item.desc}
              </p>

              {/* Fine divider */}
              <div className="border-t border-white/10" />

              {/* Bottom: Provider left, Link cyan right */}
              <div className="flex items-center justify-between text-xs pt-0.5 font-mono">
                <span className="text-slate-500 font-semibold tracking-wider">
                  {item.provider}
                </span>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-[#00e5ff] hover:text-white transition-colors font-bold uppercase tracking-wider group"
                >
                  DESCARGAR {item.badge}
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
