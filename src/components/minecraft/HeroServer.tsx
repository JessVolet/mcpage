"use client";

import { motion } from "framer-motion";
import { Check, Copy, Map, Download, Radio, Server } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { staggerContainerVariants, staggerItemVariants } from "@/lib/animations";
import { siteCopy, infraFeatures } from "@/data/minecraft";

export function HeroServer() {
  const [copied, setCopied] = useState(false);

  const copyIp = async () => {
    await navigator.clipboard.writeText(siteCopy.serverIp);
    setCopied(true);
    toast.success("IP copiada al portapapeles", {
      description: siteCopy.serverIp,
      className:
        "rounded-xl border border-white/15 bg-[#0f1524] text-white shadow-2xl font-mono text-xs",
    });
    window.setTimeout(() => setCopied(false), 1800);
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={staggerContainerVariants}
      className="grid gap-10 lg:grid-cols-12 lg:items-start"
    >
      {/* Columna Izquierda: Hero Impact & Main Controls */}
      <div className="space-y-8 lg:col-span-7">
        <motion.div variants={staggerItemVariants} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1 backdrop-blur-md">
          <span className="h-2 w-2 rounded-full bg-[#00e5ff] animate-pulse" />
          <span className="font-mono text-[11px] font-medium uppercase tracking-widest text-slate-300">
            SERVICES / PROJECTS / INFRASTRUCTURE
          </span>
        </motion.div>

        <motion.div variants={staggerItemVariants} className="space-y-4">
          <h1 className="text-5xl font-extrabold uppercase tracking-tight text-white sm:text-6xl xl:text-7xl">
            {siteCopy.title}
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg">
            {siteCopy.subtitle}
          </p>
        </motion.div>

        {/* Pill Buttons & Copy Action */}
        <motion.div variants={staggerItemVariants} className="flex flex-wrap items-center gap-4">
          <a
            href="#mapa"
            className="inline-flex items-center gap-2 rounded-full bg-[#b584f5] px-6 py-3.5 text-sm font-bold text-black transition-all hover:bg-[#a36de7] hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_24px_rgba(181,132,245,0.35)]"
          >
            <Map className="h-4 w-4" />
            [ MAP EXPLORE ]
          </a>

          <a
            href="#descargas"
            className="inline-flex items-center gap-2 rounded-full bg-[#00e5ff] px-6 py-3.5 text-sm font-bold text-black transition-all hover:bg-[#00cce6] hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_24px_rgba(0,229,255,0.35)]"
          >
            <Download className="h-4 w-4" />
            [ DOWNLOADS DOWNLOAD ]
          </a>

          <button
            onClick={copyIp}
            type="button"
            className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/[0.04] px-5 py-3.5 font-mono text-xs font-semibold text-slate-200 transition-all hover:border-white/30 hover:bg-white/[0.08] active:scale-[0.98] backdrop-blur-md cursor-pointer"
          >
            {copied ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4 text-slate-400" />}
            <span>IP: {siteCopy.serverIp}</span>
          </button>
        </motion.div>

        {/* 3 Pequenas Tarjetas Horizontales (Enfoque, Modo, Despliegue) */}
        <motion.div variants={staggerItemVariants} className="grid grid-cols-1 gap-3 sm:grid-cols-3 pt-2">
          <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4 backdrop-blur-sm transition-colors hover:border-white/20">
            <span className="font-mono text-[10px] uppercase tracking-wider text-slate-500 block">ENFOQUE</span>
            <span className="mt-1 text-xs font-semibold text-slate-200 block">Rendimiento & TPS</span>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4 backdrop-blur-sm transition-colors hover:border-white/20">
            <span className="font-mono text-[10px] uppercase tracking-wider text-slate-500 block">MODO</span>
            <span className="mt-1 text-xs font-semibold text-[#00e5ff] block">Dark Mode Violet</span>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4 backdrop-blur-sm transition-colors hover:border-white/20">
            <span className="font-mono text-[10px] uppercase tracking-wider text-slate-500 block">DESPLIEGUE</span>
            <span className="mt-1 text-xs font-semibold text-slate-200 block">Docker + Vultr</span>
          </div>
        </motion.div>
      </div>

      {/* Columna Derecha: Technical Signal & Infra Panels */}
      <div className="space-y-6 lg:col-span-5">
        {/* Quick Signal */}
        <motion.div variants={staggerItemVariants} className="space-y-3">
          <div className="flex items-center gap-2">
            <Radio className="h-3.5 w-3.5 text-[#00e5ff]" />
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-400">
              QUICK SIGNAL
            </span>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 font-mono text-xs text-slate-300 backdrop-blur-sm">
              <span className="text-slate-500">BRAND:</span>
              <span className="font-bold text-white">Violet Node</span>
            </div>
            <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 font-mono text-xs text-slate-300 backdrop-blur-sm">
              <span className="text-slate-500">MODE:</span>
              <span className="font-bold text-[#00e5ff]">Dark</span>
            </div>
            <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 font-mono text-xs text-slate-300 backdrop-blur-sm">
              <span className="text-slate-500">STATUS:</span>
              <span className="flex items-center gap-2 font-bold text-emerald-400">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                Active
              </span>
            </div>
          </div>
        </motion.div>

        {/* Infra Snapshot (3 Vertical Cards) */}
        <motion.div variants={staggerItemVariants} className="space-y-3 pt-2">
          <div className="flex items-center gap-2">
            <Server className="h-3.5 w-3.5 text-[#b584f5]" />
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-400">
              INFRA SNAPSHOT
            </span>
          </div>
          <div className="space-y-3">
            {infraFeatures.map((item) => (
              <div
                key={item.id}
                className="rounded-xl border border-white/10 bg-white/[0.02] p-4 backdrop-blur-sm transition-all hover:border-white/20 hover:bg-white/[0.04]"
              >
                <div className="flex items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-[#b584f5]">{item.id}</span>
                    <h3 className="font-bold uppercase tracking-tight text-white text-sm">{item.title}</h3>
                  </div>
                  <div className="flex gap-1.5">
                    {item.badges.map((badge) => (
                      <span
                        key={badge}
                        className="rounded-full border border-white/10 bg-white/[0.04] px-2 py-0.5 font-mono text-[10px] font-medium text-slate-400"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
