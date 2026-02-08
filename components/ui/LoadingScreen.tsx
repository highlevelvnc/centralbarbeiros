"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { logoText } from "@/lib/images";

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-dark"
    >
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gold mb-2 tracking-wider">
            {logoText}
          </h1>
          <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-gold to-transparent" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="relative w-64 h-1 bg-dark-secondary rounded-full overflow-hidden mx-auto"
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-gold-400 via-gold to-gold-400"
            animate={{
              x: ["-100%", "100%"],
            }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              ease: "linear",
            }}
            style={{
              width: "50%",
            }}
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-6 text-gold-200/60 text-sm tracking-widest"
        >
          EXCELÊNCIA EM PRODUTOS PROFISSIONAIS
        </motion.p>
      </div>
    </motion.div>
  );
}
