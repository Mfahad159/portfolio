'use client';

import { motion } from 'motion/react';

const SectionHeading = ({ eyebrow, title, description, align = 'center' }) => {
  const alignClass = align === 'left' ? 'text-left' : 'text-center';

  return (
    <div className={`mb-12 md:mb-14 ${alignClass}`}>
      {eyebrow && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.35 }}
          className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]"
        >
          {eyebrow}
        </motion.p>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.45, delay: 0.05 }}
        className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-[2.75rem] md:leading-tight"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4, delay: 0.12 }}
          className={`mt-4 text-base leading-relaxed text-[var(--muted)] ${align === 'center' ? 'mx-auto max-w-2xl' : 'max-w-2xl'}`}
        >
          {description}
        </motion.div>
      )}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className={`divider-line mt-6 ${align === 'center' ? 'mx-auto w-16' : 'w-16'}`}
      />
    </div>
  );
};

export default SectionHeading;
