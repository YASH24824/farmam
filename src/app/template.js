"use client";

import { motion, useReducedMotion } from "framer-motion";

// Soft fade between route changes (template re-mounts on every navigation).
export default function Template({ children }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      data-reveal=""
      initial={reduce ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
