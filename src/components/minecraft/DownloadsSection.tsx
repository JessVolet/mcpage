"use client";

import { motion } from "framer-motion";
import { Briefcase, ArrowRight } from "lucide-react";
import { staggerContainerVariants, staggerItemVariants } from "@/lib/animations";
import { downloads } from "@/data/minecraft";

export function DownloadsSection() {
  return (
    <motion.section
      id="descargas"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={staggerContainerVariants}
      className="space-y-10 py-6"
    >
      {/* Title with Briefcase Icon */}
      <motion.div variants={staggerItemVariants} className="text-center space-y-3">
        <div className="inline-flex items-center gap-3 justify-center">
          <div className="flex h-10 w-10 items-center justify-center border-2 border-black bg-white shadow-[3px_3px_0px_rgba(0,0,0,1)] text-[#FF0000]">
            <Briefcase className="h-6 w-6 text-[#FF0000]" />
          </div>
          <h2 className="text-3xl font-black uppercase sm:text-4xl text-black">
            CLIENTES Y MODPACKS
          </h2>
        </div>
        <div className="mx-auto h-1 w-16 bg-[#FF0000]" />
      </motion.div>

      {/* Timeline Nodes Row */}
      <motion.div variants={staggerItemVariants} className="relative hidden md:block max-w-4xl mx-auto my-6">
        <div className="absolute top-1/2 left-0 right-0 h-1 bg-black -translate-y-1/2 z-0" />
        <div className="relative z-10 flex justify-between px-16">
          {downloads.map((item) => (
            <div
              key={item.id}
              className="flex h-12 w-12 items-center justify-center border-2 border-black bg-white font-mono text-sm font-black text-black shadow-[4px_4px_0px_rgba(0,0,0,1)]"
            >
              {item.id}
            </div>
          ))}
        </div>
      </motion.div>

      {/* 3 Column Grid Cards */}
      <div className="grid gap-6 md:grid-cols-3">
        {downloads.map((item) => (
          <motion.div key={item.id} variants={staggerItemVariants}>
            <div className="flex flex-col h-full border-2 border-black bg-white p-6 shadow-[6px_6px_0px_rgba(0,0,0,1)] transition-transform hover:-translate-y-1">
              {/* Header dates/badge */}
              <div className="font-mono text-[11px] font-bold uppercase tracking-wider text-black/50 mb-2">
                MEDIAFIRE // {item.badge}
              </div>

              {/* Title */}
              <h3 className="text-base font-black uppercase text-black leading-tight mb-2">
                {item.title} ({item.subtitle})
              </h3>

              {/* Red Link */}
              <a
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 font-mono text-xs font-black uppercase text-[#FF0000] hover:underline mb-3"
              >
                DESCARGAR {item.badge} ↗
              </a>

              {/* Red line divider */}
              <div className="h-0.5 w-10 bg-[#FF0000] mb-4" />

              {/* Description */}
              <p className="font-sans text-xs leading-relaxed text-black/75 grow">
                {item.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Big Red CTA Button */}
      <motion.div variants={staggerItemVariants} className="flex justify-center pt-2">
        <a
          href={downloads[0]?.href || "#"}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-3 border-2 border-black bg-[#FF0000] px-8 py-4 font-mono text-xs font-black uppercase text-white shadow-[6px_6px_0px_rgba(0,0,0,1)] transition-transform hover:-translate-y-1 active:translate-y-0"
        >
          ¡OBTÉN TU ACCESO Y DESCARGA EL MODPACK! <ArrowRight className="h-5 w-5" />
        </a>
      </motion.div>
    </motion.section>
  );
}
