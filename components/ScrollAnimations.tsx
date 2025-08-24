"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface ScrollAnimationProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  y?: number;
  scale?: number;
}

export function FadeInUp({ 
  children, 
  className = "", 
  delay = 0, 
  duration = 0.8,
  y = 30 
}: ScrollAnimationProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: {
            duration,
            delay,
            ease: [0.4, 0, 0.2, 1]
          }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function FadeInScale({ 
  children, 
  className = "", 
  delay = 0, 
  duration = 0.8,
  scale = 0.9 
}: ScrollAnimationProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, scale },
        visible: { 
          opacity: 1, 
          scale: 1,
          transition: {
            duration,
            delay,
            ease: [0.4, 0, 0.2, 1]
          }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerChildren({ 
  children, 
  className = "", 
  staggerDelay = 0.1,
  delayStart = 0
}: {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  delayStart?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            delayChildren: delayStart,
            staggerChildren: staggerDelay
          }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: {
            duration: 0.6,
            ease: [0.4, 0, 0.2, 1]
          }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}