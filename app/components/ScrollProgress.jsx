'use client';

import { motion, useScroll, useSpring } from 'motion/react';

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="pointer-events-none fixed left-0 right-0 top-0 z-[100] h-[2px] origin-left bg-[var(--accent)]"
      style={{ scaleX }}
    />
  );
};

export default ScrollProgress;
