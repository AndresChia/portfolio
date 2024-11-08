"use client";

import { motion } from "framer-motion";
interface ScaleProps {
  readonly children: React.ReactNode;
  scale: number;
}

export default function Scale({ children, scale }: ScaleProps) {
  return (
    <motion.div
      className=""
      whileHover={{ scale }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      {children}
    </motion.div>
  );
}
