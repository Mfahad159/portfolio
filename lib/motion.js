export const motionFast = { duration: 0.18 };
export const motionNormal = { duration: 0.3 };
export const motionEntrance = { duration: 0.5 };

export const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: motionEntrance,
};

export const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.08 } },
  viewport: { once: true, amount: 0.15 },
};

export const heroSequence = {
  eyebrow: { initial: { opacity: 0, y: 12 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.4, delay: 0.1 } },
  heading: { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5, delay: 0.25 } },
  description: { initial: { opacity: 0, y: 16 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.45, delay: 0.4 } },
  cta: { initial: { opacity: 0, y: 16 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.45, delay: 0.55 } },
  card: { initial: { opacity: 0, x: 24, y: 12 }, animate: { opacity: 1, x: 0, y: 0 }, transition: { duration: 0.55, delay: 0.7 } },
  stack: { initial: { opacity: 0, y: 12 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.45, delay: 0.85 } },
};
