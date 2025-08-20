import React from 'react'
import { motion, useScroll, useSpring } from 'motion/react'

const ScrollProgress = ({ isDarkMode }) => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className={`fixed top-0 left-0 right-0 h-1 z-50 origin-left ${
        isDarkMode ? 'bg-gradient-to-r from-purple-500 to-pink-500' : 'bg-gradient-to-r from-blue-500 to-green-500'
      }`}
      style={{ scaleX }}
    />
  );
};

export default ScrollProgress;
