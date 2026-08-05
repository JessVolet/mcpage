"use client";

import React, { useEffect, useRef, useState } from 'react';

interface ServerStatusResponse {
  online: boolean;
  players?: {
    online: number;
    max: number;
  };
  version?: {
    name_clean: string;
  };
  motd?: {
    html: string;
  };
  icon?: string;
}

interface ServerHeaderBannerProps {
  serverIconSrc: string;
  favIconSrc: string;
  serverAddress?: string;
  initialStatusData?: ServerStatusResponse;
}

const RAND_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?';

const ServerHeaderBanner: React.FC<ServerHeaderBannerProps> = ({
  serverIconSrc,
  favIconSrc,
  serverAddress = 'mc.jessvega.me',
  initialStatusData,
}) => {
  const [statusData, setStatusData] = useState<ServerStatusResponse | undefined>(initialStatusData);
  const [loading, setLoading] = useState<boolean>(!initialStatusData);
  const motdRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let isMounted = true;
    const fetchStatus = async () => {
      try {
        const res = await fetch(`https://api.mcstatus.io/v2/status/java/${serverAddress}`);
        if (!res.ok) return;
        const data: ServerStatusResponse = await res.json();
        if (isMounted) {
          setStatusData(data);
        }
      } catch (err) {
        console.error('Error fetching Minecraft server status:', err);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchStatus();
    const interval = setInterval(fetchStatus, 60000);

    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, [serverAddress]);

  // Animación para el efecto de obfuscated / §k de Minecraft
  useEffect(() => {
    if (!motdRef.current) return;

    const obfuscatedEls = motdRef.current.querySelectorAll('.minecraft-format-obfuscated');
    if (!obfuscatedEls.length) return;

    const interval = setInterval(() => {
      obfuscatedEls.forEach((el) => {
        const length = 34;
        let randStr = '';
        for (let i = 0; i < length; i++) {
          randStr += RAND_CHARS.charAt(Math.floor(Math.random() * RAND_CHARS.length));
        }
        el.textContent = randStr;
      });
    }, 10);

    return () => clearInterval(interval);
  }, [statusData]);

  const isOnline = statusData?.online ?? true;
  const onlinePlayers = statusData?.players?.online ?? 0;
  const maxPlayers = statusData?.players?.max ?? 20;
  const version = statusData?.version?.name_clean ?? '1.20.1';
  const motdHtml = statusData?.motd?.html;
  const iconSrc = statusData?.icon || serverIconSrc;

  return (
    <div className="group flex flex-col gap-4 border-2 border-black bg-black p-5 text-left text-white shadow-[6px_6px_0px_rgba(0,0,0,1)] transition-transform hover:-translate-y-1 dark:border-amber-400 dark:bg-[#170e2b] dark:text-amber-300 dark:shadow-[6px_6px_0px_rgba(251,191,36,0.35)] sm:flex-row sm:items-center sm:justify-between w-full">
      <div className="flex flex-1 items-center space-x-4 min-w-0">
        {/* Icono del Servidor */}
        <div className="relative h-16 w-16 shrink-0 overflow-hidden border-4 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] transition-transform hover:scale-105 dark:border-amber-400 dark:shadow-[4px_4px_0px_rgba(251,191,36,0.5)] sm:h-20 sm:w-20 lg:h-24 lg:w-24">
          <img src={iconSrc} alt="Server Icon" className="h-full w-full object-cover" />
        </div>

        {/* Info & MOTD Parseado (Aprovecha todo el ancho disponible) */}
        <div className="flex flex-col space-y-2 flex-1 min-w-0">
          <div className="flex items-center space-x-3">
            <span className="relative flex h-3.5 w-3.5 shrink-0">
              <span className={`absolute inline-flex h-full w-full animate-ping rounded-full opacity-75 ${isOnline ? 'bg-emerald-400' : 'bg-rose-400'}`} />
              <span className={`relative inline-flex h-3.5 w-3.5 rounded-full ${isOnline ? 'bg-emerald-500' : 'bg-rose-500'}`} />
            </span>
            <span className="font-mono text-sm sm:text-base font-extrabold uppercase tracking-wider text-amber-400">
              {loading ? 'CARGANDO ESTADO...' : isOnline ? `ONLINE — ${onlinePlayers}/${maxPlayers} PLAYERS` : 'OFFLINE'}
            </span>
            <span className="font-mono text-xs sm:text-sm font-semibold text-amber-400/80">v{version}</span>
          </div>

          {/* Renderizado de MOTD HTML en vivo */}
          {motdHtml ? (
            <div
              ref={motdRef}
              className="w-full font-mono text-xs sm:text-sm leading-relaxed whitespace-pre-wrap opacity-95 [&_span]:inline break-words"
              dangerouslySetInnerHTML={{ __html: motdHtml }}
            />
          ) : (
            <p className="font-mono text-xs sm:text-sm text-amber-100/70">mc.jessvega.me — Servidor Privado</p>
          )}
        </div>
      </div>

      {/* Badge Violet Node */}
      <div className="flex items-center shrink-0 self-start sm:self-center">
        <div className="flex items-center space-x-1.5 rounded border-2 border-black bg-[#fbbf24] px-2.5 py-1 dark:bg-[#facc15]">
          <img src={favIconSrc} alt="Fav Icon" className="h-5 w-5" />
          <span className="font-mono text-xs font-bold text-black whitespace-nowrap">POWERED BY VIOLET NODE</span>
        </div>
      </div>
    </div>
  );
};

export default ServerHeaderBanner;


