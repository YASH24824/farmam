"use client";

import { motion, useReducedMotion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];

/**
 * Hero copy block: words of the headline rise out of a mask one by one,
 * then the supporting copy and actions follow.
 * `lines` is an array of [text, highlighted?] pairs.
 */
export default function HeroHeadline({ lines, children }) {
  const reduce = useReducedMotion();
  let index = 0;

  return (
    <>
      <h1 className="mt-4 font-serif text-[2.4rem] leading-[1.06] text-cream text-balance sm:text-5xl lg:text-[4.2rem]">
        {lines.map(([text, highlight]) =>
          text.split(" ").map((word) => {
            const i = index++;
            return (
              <span key={i} className="inline-block overflow-hidden pb-[0.08em] align-bottom">
                <motion.span
                  className={`inline-block ${highlight ? "text-gold italic" : ""}`}
                  data-reveal=""
                  initial={reduce ? false : { y: "105%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.9, ease, delay: 0.15 + i * 0.06 }}
                >
                  {word}&nbsp;
                </motion.span>
              </span>
            );
          })
        )}
      </h1>
      <motion.div
        data-reveal=""
        initial={reduce ? false : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease, delay: 0.25 + index * 0.06 }}
      >
        {children}
      </motion.div>
    </>
  );
}
