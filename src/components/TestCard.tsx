'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Sparkles, RefreshCw } from 'lucide-react';

interface TestCardProps {
  title?: string;
  description?: string;
}

export function TestCard({
  title = "Componente de Prueba",
  description = "Este es un componente de prueba interactivo creado para verificar el funcionamiento.",
}: TestCardProps) {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((prev) => prev + 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="w-full max-w-md rounded-xl border-2 border-black/80 bg-white p-6 shadow-[8px_8px_0px_rgba(0,0,0,0.85)] dark:border-purple-500/30 dark:bg-zinc-950 dark:shadow-none">
      <div className="flex items-center justify-between gap-3 mb-4">
        <div className="flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-amber-500 animate-pulse" />
          <h3 className="font-mono text-lg font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
            {title}
          </h3>
        </div>
        {count > 0 && (
          <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-semibold text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
            <CheckCircle2 className="h-3.5 w-3.5" />
            Activo
          </span>
        )}
      </div>

      <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed">
        {description}
      </p>

      <div className="flex items-center justify-between rounded-lg bg-zinc-100 dark:bg-zinc-900 p-3 mb-6 font-mono text-xs text-zinc-700 dark:text-zinc-300">
        <span>Clicks registrados:</span>
        <span className="font-bold text-base text-purple-600 dark:text-purple-400">{count}</span>
      </div>

      <div className="flex items-center gap-3">
        <Button onClick={handleClick} variant="default" className="flex-1">
          Probar Botón ({count})
        </Button>
        {count > 0 && (
          <Button onClick={handleReset} variant="outline" className="px-3" title="Reiniciar">
            <RefreshCw className="h-4 w-4" />
          </Button>
        )}
      </div>
    </div>
  );
}

export default TestCard;
