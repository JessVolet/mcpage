import * as React from "react";
import { cn } from "@/lib/utils";

type BadgeProps = React.HTMLAttributes<HTMLSpanElement>;

export function Badge({ className, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center border-2 border-black bg-white px-3 py-1 font-mono text-[10px] font-black uppercase tracking-[0.22em] text-black shadow-[4px_4px_0px_rgba(0,0,0,0.8)] dark:border-purple-500/30 dark:bg-[#0f1423] dark:text-[#b584f5] dark:shadow-none",
        className
      )}
      {...props}
    />
  );
}
