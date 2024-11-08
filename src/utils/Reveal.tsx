"use client";

import { motion } from "framer-motion";

interface RevealProps {
  readonly children: React.ReactNode;
  readonly left?: boolean;
}

export default function Reveal({ children, left = true }: RevealProps) {
  return (
    <motion.div
      className="card"
      initial={{
        opacity: 0,
        // if odd index card,slide from right instead of left
        x: left ? 50 : -50,
      }}
      whileInView={{
        opacity: 1,
        x: 0, // Slide in to its original position
        transition: {
          duration: 1, // Animation duration
        },
      }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}
