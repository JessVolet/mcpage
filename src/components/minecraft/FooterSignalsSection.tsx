"use client";

import { motion } from "framer-motion";
import { Globe, Shield, Terminal, Zap } from "lucide-react";
import { staggerContainerVariants, staggerItemVariants } from "@/lib/animations";
import { siteCopy } from "@/data/minecraft";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function FooterSignalsSection() {
  return (
    <motion.section
      id="infra"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={staggerContainerVariants}
      className="grid gap-10 lg:grid-cols-12"
    >
      {/* Columna Izquierda: SNAPSHOT */}
      <div className="space-y-6 lg:col-span-6">
        <motion.div variants={staggerItemVariants} className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#b584f5]">
              TECHNICAL ARCHITECTURE
            </span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-white uppercase sm:text-4xl">
            SNAPSHOT
          </h2>
          <p className="text-sm text-slate-400 leading-relaxed">
            Resumen ejecutivo del ecosistema de infraestructura self-hosted y stack técnico de alto rendimiento.
          </p>
        </motion.div>

        {/* 3 Paneles horizontales apilados */}
        <motion.div variants={staggerItemVariants} className="space-y-3">
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4 backdrop-blur-sm flex items-center justify-between transition-all hover:border-white/20 hover:bg-white/[0.04]">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#b584f5]/10 border border-[#b584f5]/20 text-[#b584f5]">
                <Zap className="h-5 w-5" />
              </div>
              <div>
                <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-slate-400 block">ENFOQUE</span>
                <span className="text-xs font-bold text-white block">Rendimiento & Cero Latencia</span>
              </div>
            </div>
            <span className="font-mono text-xs font-semibold text-emerald-400 border border-emerald-400/20 bg-emerald-400/10 px-2.5 py-1 rounded-full">
              99.9% UPTIME
            </span>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4 backdrop-blur-sm flex items-center justify-between transition-all hover:border-white/20 hover:bg-white/[0.04]">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#00e5ff]/10 border border-[#00e5ff]/20 text-[#00e5ff]">
                <Shield className="h-5 w-5" />
              </div>
              <div>
                <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-slate-400 block">MODO</span>
                <span className="text-xs font-bold text-white block">Violet Node Dark Architecture</span>
              </div>
            </div>
            <span className="font-mono text-xs font-semibold text-[#00e5ff] border border-[#00e5ff]/20 bg-[#00e5ff]/10 px-2.5 py-1 rounded-full">
              TAILSCALE MESH
            </span>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4 backdrop-blur-sm flex items-center justify-between transition-all hover:border-white/20 hover:bg-white/[0.04]">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
                <Terminal className="h-5 w-5" />
              </div>
              <div>
                <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-slate-400 block">DESPLIEGUE</span>
                <span className="text-xs font-bold text-white block">Docker Containers + Vultr Cloud</span>
              </div>
            </div>
            <span className="font-mono text-xs font-semibold text-slate-300 border border-white/10 bg-white/[0.04] px-2.5 py-1 rounded-full">
              AUTO BACKUPS
            </span>
          </div>
        </motion.div>
      </div>

      {/* Columna Derecha: FOOTER SIGNALS / CONTACT */}
      <div className="space-y-6 lg:col-span-6 flex flex-col justify-between">
        <motion.div variants={staggerItemVariants} className="space-y-4">
          <div className="space-y-1">
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-400">
              FOOTER SIGNALS
            </span>
            <p className="font-mono text-xs text-slate-500">
              © {new Date().getFullYear()} JV_SYSTEM // {siteCopy.serverIp}
            </p>
          </div>

          {/* 2 Botones oscuros rectangulares/ligeramente redondeados */}
          <div className="flex flex-wrap gap-3">
            <a
              href={siteCopy.portfolioHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-[#141b2d] px-5 py-3 text-xs font-mono font-bold text-white transition-all hover:bg-[#1f293f] hover:border-white/30 active:scale-[0.98]"
            >
              <Globe className="h-4 w-4 text-[#00e5ff]" />
              [ PORTFOLIO ]
            </a>

            <a
              href={siteCopy.githubHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-[#141b2d] px-5 py-3 text-xs font-mono font-bold text-white transition-all hover:bg-[#1f293f] hover:border-white/30 active:scale-[0.98]"
            >
              <GithubIcon className="h-4 w-4 text-[#b584f5]" />
              [ GITHUB ]
            </a>
          </div>
        </motion.div>

        {/* Tarjeta grande inferior ("CREDIT") */}
        <motion.div
          variants={staggerItemVariants}
          className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-sm space-y-3 hover:border-white/20 transition-all"
        >
          <div className="flex items-center justify-between">
            <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#b584f5] border border-[#b584f5]/30 bg-[#b584f5]/10 px-2 py-0.5 rounded">
              CREDIT // INFRASTRUCTURE
            </span>
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          </div>

          <p className="text-xs text-slate-300 leading-relaxed">
            {siteCopy.ctaSubtitle} Servidor privado de Minecraft e infraestructura automatizada autohospedada para la comunidad.
          </p>

          <div className="pt-1 flex items-center justify-between border-t border-white/10 font-mono text-[11px] text-slate-500">
            <span>HOST: VULTR HIGH-FREQUENCY</span>
            <span className="text-[#00e5ff]">ONLINE</span>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
