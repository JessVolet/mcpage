"use client";

import { motion } from "framer-motion";
import { Wrench, ArrowRight } from "lucide-react";
import { staggerContainerVariants, staggerItemVariants } from "@/lib/animations";
import { siteCopy } from "@/data/minecraft";

const minecraftTechCategories = [
  {
    title: "CÓMPUTO Y CONTENEDORES",
    sections: [
      {
        label: "SERVIDOR DE MINECRAFT",
        items: ["PAPER / FABRIC", "DOCKER", "VULTR HIGH-FREQUENCY"],
      },
      {
        label: "SISTEMA OPERATIVO & AUTOMATIZACIÓN",
        items: ["DEBIAN LINUX", "SYSTEMD SERVICES", "DOCKER COMPOSE"],
      },
    ],
  },
  {
    title: "RED Y SEGURIDAD ZERO-TRUST",
    sections: [
      {
        label: "ENRUTAMIENTO INTERNO",
        items: ["TAILSCALE MESH VPN", "NGINX REVERSE PROXY"],
      },
      {
        label: "SEGURIDAD DE RED",
        items: ["OPNSENSE FIREWALL", "SSH HARDENING", "ACLS IPV4"],
      },
      {
        label: "CONTROL DE ACCESO",
        items: ["ZERO-TRUST ARCHITECTURE", "SIN PUERTOS EXPUESTOS"],
      },
    ],
  },
  {
    title: "DISPONIBILIDAD Y RENDIMIENTO",
    sections: [
      {
        label: "OPTIMIZACIÓN DE TPS",
        items: ["20 TPS ESTABLES", "CHUNKS PRE-GENERADOS", "MEMORY HARDENING"],
      },
      {
        label: "RESPALDOS CONTINUOS",
        items: ["AUTOMATED WORLD BACKUPS", "AUTO RESTART ON CRASH"],
      },
    ],
  },
  {
    title: "INTEGRACIÓN Y SERVICIOS",
    sections: [
      {
        label: "VISOR EN VIVO",
        items: ["MAPA DYNMAP / BLUEMAP", "MAPA.MC.JESSVEGA.ME"],
      },
      {
        label: "ALMACENAMIENTO DE ARCHIVOS",
        items: ["MEDIAFIRE FAST STORAGE", "DIRECT DOWNLOADS"],
      },
    ],
  },
  {
    title: "ESTÁNDARES Y MANTENIMIENTO",
    sections: [
      {
        label: "BUENAS PRÁCTICAS",
        items: ["CONTENEDORES AISLADOS", "MONITOREO CONTINUO", "ISOLATED NETWORKS"],
      },
    ],
  },
];

export function InfrastructureSection() {
  return (
    <motion.section
      id="infra"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={staggerContainerVariants}
      className="space-y-10 py-6"
    >
      {/* Title with Wrench Icon */}
      <motion.div variants={staggerItemVariants} className="text-center space-y-3">
        <div className="inline-flex items-center gap-3 justify-center">
          <div className="flex h-10 w-10 items-center justify-center border-2 border-black bg-white shadow-[3px_3px_0px_rgba(0,0,0,1)] text-[#0066FF]">
            <Wrench className="h-6 w-6 text-[#0066FF]" />
          </div>
          <h2 className="text-3xl font-black uppercase sm:text-4xl text-black">
            ARQUITECTURA & INFRAESTRUCTURA
          </h2>
        </div>
        <div className="mx-auto h-1 w-16 bg-[#0066FF]" />
      </motion.div>

      {/* Grid of 5 Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {minecraftTechCategories.map((cat, idx) => (
          <motion.div
            key={cat.title}
            variants={staggerItemVariants}
            className={idx === 1 ? "lg:row-span-2" : ""}
          >
            <div className="flex flex-col h-full border-2 border-black bg-white p-6 shadow-[6px_6px_0px_rgba(0,0,0,1)]">
              {/* Card Title */}
              <h3 className="text-sm font-black uppercase text-black text-center tracking-tight mb-2">
                {cat.title}
              </h3>
              <div className="mx-auto h-0.5 w-8 bg-[#0066FF] mb-6" />

              {/* Card Sections */}
              <div className="space-y-5 grow">
                {cat.sections.map((sec) => (
                  <div key={sec.label} className="text-center space-y-2">
                    <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-black/50 block">
                      {sec.label}
                    </span>
                    <div className="flex flex-wrap justify-center gap-1.5">
                      {sec.items.map((item) => (
                        <span
                          key={item}
                          className="border border-black bg-[#f4f4f5] px-2.5 py-1 font-mono text-[10px] font-bold uppercase text-black shadow-[1.5px_1.5px_0px_rgba(0,0,0,1)]"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Big Red CTA Button */}
      <motion.div variants={staggerItemVariants} className="flex justify-center pt-2">
        <a
          href={siteCopy.githubHref}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-3 border-2 border-black bg-[#FF0000] px-8 py-4 font-mono text-xs font-black uppercase text-white shadow-[6px_6px_0px_rgba(0,0,0,1)] transition-transform hover:-translate-y-1 active:translate-y-0"
        >
          ¡EXPLORAR ARQUITECTURA EN GITHUB! <ArrowRight className="h-5 w-5" />
        </a>
      </motion.div>
    </motion.section>
  );
}
