import type { Variants } from "framer-motion";

export const staggerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.04,
    },
  },
};

export const staggerItemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: "easeOut",
    },
  },
};

export const buttonHoverVariants: Variants = {
  rest: { scale: 1, y: 0 },
  hover: { scale: 1.02, y: -2 },
  tap: { scale: 0.98, y: 0 },
};

export const cardHoverVariants: Variants = {
  rest: { y: 0, boxShadow: "8px 8px 0px rgba(0,0,0,0.8)" },
  hover: { y: -4, boxShadow: "12px 12px 0px rgba(0,0,0,0.8)" },
};
