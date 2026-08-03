import * as React from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "default" | "outline" | "secondary" | "destructive";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  href?: string;
  target?: string;
  rel?: string;
}

const variantClasses: Record<ButtonVariant, string> = {
  default: "border-black bg-[color:var(--primary)] text-black dark:border-purple-500/30 dark:bg-[#b584f5] dark:text-black",
  outline: "border-black bg-transparent text-black dark:border-purple-500/30 dark:text-white",
  secondary: "border-black bg-black text-white dark:border-purple-500/30 dark:bg-[#00f0ff] dark:text-black",
  destructive: "border-black bg-[#ff0000] text-white dark:border-purple-500/30 dark:bg-[#b584f5] dark:text-black",
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", type = "button", href, target, rel, ...props }, ref) => {
    const sharedClassName = cn(
      "inline-flex items-center justify-center gap-2 border-2 px-5 py-3 font-mono text-[12px] font-black uppercase tracking-[0.22em] shadow-[8px_8px_0px_rgba(0,0,0,0.8)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[12px_12px_0px_rgba(0,0,0,0.8)] dark:shadow-none dark:hover:translate-y-[-2px] dark:hover:shadow-none disabled:pointer-events-none disabled:opacity-50",
      variantClasses[variant],
      className
    );

    if (href) {
      return (
        <a ref={ref as never} href={href} target={target} rel={rel} className={sharedClassName} {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)} />
      );
    }

    return (
      <button
        ref={ref}
        type={type}
        className={sharedClassName}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
