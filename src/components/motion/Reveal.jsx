"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];

/**
 * True once the element's top has risen above `threshold` of the viewport
 * height. Checked on scroll as well as by IntersectionObserver, so content a
 * fast flick skips past (or that was passed before hydration) still reveals.
 */
function useRevealed(margin, threshold) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin });
  const [passed, setPassed] = useState(false);

  useEffect(() => {
    if (inView) return;
    let frame = 0;
    const check = () => {
      frame = 0;
      if (ref.current && ref.current.getBoundingClientRect().top < window.innerHeight * threshold) {
        setPassed(true);
      }
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(check);
    };
    check();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, [inView]);

  return [ref, inView || passed];
}

/**
 * Fades + lifts its children into view once, as they scroll in.
 * Renders as `as` (div by default) so it can stand in for li/section etc.
 */
export default function Reveal({
  children,
  as = "div",
  delay = 0,
  y = 28,
  className = "",
  ...rest
}) {
  const reduce = useReducedMotion();
  const [ref, shown] = useRevealed("0px 0px -12% 0px", 0.88);
  const Tag = motion[as] ?? motion.div;

  return (
    <Tag
      ref={ref}
      className={className}
      data-reveal=""
      initial={reduce ? false : { opacity: 0, y }}
      animate={shown ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.8, ease, delay }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

/** Staggers direct <RevealItem> children as the group enters view. */
export function RevealGroup({ children, as = "div", className = "", stagger = 0.09 }) {
  const reduce = useReducedMotion();
  const [ref, shown] = useRevealed("0px 0px -10% 0px", 0.9);
  const Tag = motion[as] ?? motion.div;
  return (
    <Tag
      ref={ref}
      className={className}
      data-reveal=""
      initial={reduce ? false : "hidden"}
      animate={shown ? "show" : undefined}
      variants={{ show: { transition: { staggerChildren: stagger } } }}
    >
      {children}
    </Tag>
  );
}

export function RevealItem({ children, as = "div", className = "", ...rest }) {
  const Tag = motion[as] ?? motion.div;
  return (
    <Tag
      className={className}
      data-reveal=""
      variants={{
        hidden: { opacity: 0, y: 24 },
        show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
