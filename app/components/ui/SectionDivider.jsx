'use client';

import { motion } from 'motion/react';

const SectionDivider = ({ number = '01' }) => {
  return (
    <div className="section-container py-6 md:py-10" aria-hidden="true">
      <div className="flex items-center gap-4">
        <span className="shrink-0 font-mono text-xs tracking-[0.2em] text-[var(--muted)]">
          {number}
        </span>
        <motion.span
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative h-px flex-1 origin-left bg-[var(--border)]"
        >
          <span className="absolute right-0 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-[var(--accent)]/60" />
        </motion.span>
      </div>
    </div>
  );
};

export default SectionDivider;
