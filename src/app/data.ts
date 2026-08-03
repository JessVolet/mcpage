import type { ComponentType } from "react";

export type NavItem = {
  label: string;
  href: string;
};

export type StatItem = {
  label: string;
  value: string;
};

export type DownloadItem = {
  title: string;
  description: string;
  href: string;
  badge: string;
};

export type InfraFeatureItem = {
  title: string;
  description: string;
  badge: string;
};

export type SocialItem = {
  label: string;
  href: string;
};

export type AppIcon = ComponentType<{ className?: string; alt: string }>;

// 1. TEXTOS GLOBALES Y CALL TO ACTION (CTA)
export const siteCopy = {
  brand: "JV_SYSTEM // MC",
  title: "VIOLET NODE",
  subtitle: "Servidor privado de Minecraft. Infraestructura autogestionada diseñada para el máximo rendimiento.",
  copy: "Este servidor no es solo un juego; es una demostración en vivo de orquestación de contenedores, túneles Zero-Trust y automatización de despliegues.",
  copyShort: "Servicios, mods e infraestructura en un solo lugar.",
  themeLabel: "Theme",
  copyButton: "COPIAR IP: mc.jessvega.me",
  liveMapButton: "DYNMAP EN VIVO",
  architectureTitle: "Arquitectura & Backend",
  architectureEmptyLabel: "Infraestructura Activa",
  architectureEmptyCopy: "100% Self-Hosted. Docker, Tailscale y Proxy Inverso configurados a mano para garantizar alta disponibilidad.",
  footer: "© 2026 Violet Node. Diseñado y desplegado por Jose Vega.",
  
  // NUEVO: Textos para la sección de ventas / promoción
  ctaTitle: "¿NECESITAS UN SERVIDOR O INFRAESTRUCTURA ASÍ?",
  ctaSubtitle: "Construyo arquitecturas escalables, seguras y autohospedadas. Desde servidores de juegos optimizados hasta backends empresariales complejos.",
  ctaButton: "¡MONTA EL TUYO CONMIGO! →",
  ctaLink: "https://jessvega.me" // O un enlace directo a tu WhatsApp/Email
};

// 2. NAVEGACIÓN ANCHOR LINKS
export const navItems: NavItem[] = [
  { label: "Descargas", href: "#descargas" },
  { label: "Mapa", href: "#mapa" },
  { label: "Infraestructura", href: "#infra" },
  { label: "Contacto", href: "#contacto" },
];

// 3. STATS RÁPIDOS DEL HERO
export const stats: StatItem[] = [
  { label: "Enfoque", value: "Rendimiento y Estabilidad" },
  { label: "Modo", value: "Light / Dark" },
  { label: "Despliegue", value: "Self-Hosted Infra" },
];

// 4. SECCIÓN DE DESCARGAS (Intacta, solo mejoré un poco el copy)
export const downloads: DownloadItem[] = [
  {
    title: "CurseForge",
    description: "El modpack oficial y completo para la experiencia definitiva. Ideal para PCs potentes.",
    href: "https://www.mediafire.com/file/n8banoof7s55xmz/Official_Forge.zip/file",
    badge: "MODPACK",
  },
  {
    title: "Modrinth",
    description: "Cliente alternativo ligero enfocado en mods de rendimiento esenciales. Carga rápida.",
    href: "https://www.mediafire.com/file/7axzjtnfhzgrl6x/official_Modrinth.mrpack/file",
    badge: "CLIENTE",
  },
  {
    title: "Prism Launcher",
    description: "Instancia preconfigurada lista para importar. La forma más rápida de entrar a jugar.",
    href: "https://www.mediafire.com/file/uga9zz0irev074k/Official_PrismLauncher.zip/file",
    badge: "INSTANCIA",
  },
];

// 5. SECCIÓN DE INFRAESTRUCTURA (Reemplaza a los "projects" genéricos)
export const infraFeatures: InfraFeatureItem[] = [
  {
    title: "01. HARDWARE DEDICADO",
    description: "Desplegado en infraestructura de alto rendimiento garantizando TPS estables, baja latencia y sin cuellos de botella.",
    badge: "LINUX / DOCKER",
  },
  {
    title: "02. RED ZERO-TRUST",
    description: "Enrutamiento interno seguro mediante túneles Mesh VPN y un control de acceso estricto a los puertos del servidor.",
    badge: "TAILSCALE",
  },
  {
    title: "03. ALTA DISPONIBILIDAD",
    description: "Gestión de contenedores automatizada, proxys inversos para resolución de dominios y respaldos de mundo continuos.",
    badge: "NGINX / BACKUPS",
  },
];

// 6. ENLACES DE CONTACTO
export const socials: SocialItem[] = [
  { label: "PORTAFOLIO", href: "https://jessvega.me" },
  { label: "GITHUB", href: "https://github.com/Jov-glitch" },
  { label: "LINKEDIN", href: "https://linkedin.com/in/jose-vega" }, 
];

// 7. CRÉDITOS Y PROMOCIÓN FINAL
export const infraCredit = {
  text: "Todo este ecosistema está respaldado por infraestructura autohospedada, gestionada y configurada desde cero por mí. Si buscas una solución similar, segura y a medida para tus proyectos, ponte en contacto.",
  repoHref: "https://jessvega.me",
};

export const minecraftData = {
  serverIp: "mc.jessvega.me",
  mapHref: "https://mapa.mc.jessvega.me",
  poweredBy: "Powered by Vultr",
  serverTag: "Custom Self-Hosted",
  contactHref: "https://jessvega.me",
  portfolioHref: "https://jessvega.me",
  repoHref: "https://github.com/JessVolet/ServerInfraestructureDockers",
  downloads,
  infrastructure: infraFeatures.map((feature) => `${feature.title} // ${feature.badge}`),
  promo: {
    banner: "POWERED BY JOSE VEGA",
    headline: "¿NECESITAS UN SERVIDOR O INFRAESTRUCTURA ASÍ?",
    cta: "¡EXPLORAR ARQUITECTURA DETALLADA! →",
  },
  hero: {
    title: "JV_SYSTEM // MC",
    subtitle: "Servidor privado de Minecraft con navegación por anclas, tres bloques de contenido y auto light/dark theme.",
  },
};