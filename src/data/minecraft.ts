export const mcData = {
  brand: "JV_SYSTEM // MC",
  title: "MC.JESSVEGA.ME",
  subtitle: "Servidor privado de Minecraft con mods, infraestructura dedicada y alta disponibilidad.",
  serverIp: "mc.jessvega.me",
  blueMapUrl: "http://mapa.mc.jessvega.me/",
  portfolioUrl: "https://jessvega.me",
  githubUrl: "https://github.com/JessVolet/ServerInfraestructureDockers",
  mediafireLogo: "https://static.cdnlogo.com/logos/m/74/mediafire-wordmark.svg",
  playitLogo: "https://pbs.twimg.com/profile_images/1517521195410739200/EAWeQYz0_400x400.jpg",
  
  downloads: [
    {
      id: "01",
      name: "CURSEFORGE",
      badge: "MODPACK",
      desc: "El modpack oficial completo para la experiencia optimizada.",
      href: "https://www.mediafire.com/file/n8banoof7s55xmz/Official_Forge.zip/file",
      icon: "https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/logos/curseforge-1ggrlxplc9gjkajypnzcdh.png/curseforge-vqyvsa5do1rsh8njqkqpam.png?_a=DATAiZAAZAA0"
    },
    {
      id: "02",
      name: "MODRINTH",
      badge: "CLIENTE",
      desc: "Cliente alternativo ligero con mods de rendimiento de carga rápida.",
      href: "https://www.mediafire.com/file/7axzjtnfhzgrl6x/official_Modrinth.mrpack/file",
      icon: "https://dl.flathub.org/media/com/modrinth/ModrinthApp/57ded7981aee8479969ef916ee0c57dc/icons/128x128@2/com.modrinth.ModrinthApp.png"
    },
    {
      id: "03",
      name: "PRISM LAUNCHER",
      badge: "INSTANCIA",
      desc: "Instancia preconfigurada lista para importar directamente.",
      href: "https://www.mediafire.com/file/uga9zz0irev074k/Official_PrismLauncher.zip/file",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Prism_Launcher_logo.svg/3840px-Prism_Launcher_logo.svg.png"
    }
  ],

  infra: [
    {
      id: "01",
      title: "HARDWARE DEDICADO",
      desc: "Instancia dedicada para garantizar TPS estables sin cuellos de botella.",
      tags: ["LINUX", "DOCKER"]
    },
    {
      id: "02",
      title: "PLAYIT.GG TUNNELING",
      desc: "Enrutamiento global de alta velocidad y baja latencia garantizando protección y túneles seguros.",
      tags: ["PLAYIT.GG", "PROXY"],
      logo: "https://pbs.twimg.com/profile_images/1517521195410739200/EAWeQYz0_400x400.jpg"
    },
    {
      id: "03",
      title: "ALTA DISPONIBILIDAD",
      desc: "Despliegues automatizados, SSL y respaldos continuos de mapa.",
      tags: ["NGINX", "BACKUPS"]
    }
  ]
};

export const siteCopy = {
  brand: mcData.brand,
  title: mcData.title,
  subtitle: mcData.subtitle,
  serverIp: mcData.serverIp,
  poweredBy: "Powered by Playit.gg & MediaFire",
  mapHref: mcData.blueMapUrl,
  portfolioHref: mcData.portfolioUrl,
  githubHref: mcData.githubUrl,
  ctaTitle: "¿NECESITAS UN SERVIDOR O INFRAESTRUCTURA ASÍ?",
  ctaSubtitle: "Logremos esto juntos. Diseños de red, servidores autohospedados y despliegues con infraestructura actual, moderna y segura.",
  ctaButton: "[ CONTACTAR Y VER PORTAFOLIO ↗ ]",
};

export const downloads = mcData.downloads.map((d) => ({
  id: d.id,
  title: d.name,
  subtitle: d.badge,
  desc: d.desc,
  href: d.href,
  badge: d.badge,
  provider: "MEDIAFIRE",
}));

export const infraFeatures = mcData.infra.map((i) => ({
  id: i.id,
  title: i.title,
  desc: i.desc,
  badges: i.tags,
}));

export type DownloadItem = typeof downloads[number];
export type DownloadLink = DownloadItem;
