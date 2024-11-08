"use client";

import { useScroll, useTransform, motion } from "framer-motion";

import { useRef } from "react";

export default function Presentation() {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "150vh"]);

  return (
    <section
      ref={container}
      className="flex flex-col items-center justify-center h-screen px-8"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <motion.div
        style={{ y }}
        className="relative md:h-full h-2/3 top-[220px]"
      >
        <div className="flex flex-col items-center justify-center text-center h-screen-half">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl sm:text-6xl lg:text-9xl">Andres Chia</h1>
            <h2 className="font-light text-4xl sm:text-5xl lg:text-5xl">
              Senior Front End Developer
            </h2>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
