'use client';

import { motion } from 'motion/react';
import TechChip from './TechChip';

const icons = {
  research: (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
    </svg>
  ),
  development: (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
    </svg>
  ),
};

const TimelineItem = ({ item, index, isLast }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.45, delay: index * 0.1 }}
      className="group relative flex gap-5 pb-12 last:pb-0 md:gap-8"
    >
      {!isLast && (
        <div className="absolute left-[15px] top-10 h-[calc(100%-20px)] w-px bg-[var(--border)] md:left-[19px]" />
      )}

      <div className="relative z-10 shrink-0 pt-1">
        <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--background)] font-mono text-[10px] tracking-wider text-[var(--accent)] transition-colors duration-300 group-hover:border-[var(--accent)] md:h-10 md:w-10 md:text-xs">
          {item.number || String(index + 1).padStart(2, '0')}
        </div>
      </div>

      <div className="min-w-0 flex-1 border-b border-[var(--border)] pb-12 last:border-b-0 last:pb-0">
        <div className="mb-3 flex flex-wrap items-start justify-between gap-3">
          <div>
            <div className="mb-1 flex flex-wrap items-center gap-2">
              {item.date && (
                <span className="rounded-full bg-[var(--accent-muted)] px-2.5 py-0.5 font-mono text-[11px] tracking-wide text-[var(--accent)]">
                  {item.date}
                </span>
              )}
            </div>
            <h3 className="text-xl font-semibold md:text-2xl">{item.title}</h3>
            <p className="mt-1 text-sm text-[var(--accent)]">{item.organization}</p>
          </div>
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--accent-muted)] text-[var(--accent)]">
            {icons[item.icon] || icons.development}
          </div>
        </div>
        <p className="max-w-2xl text-sm leading-relaxed text-[var(--muted)] sm:text-base">{item.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {(item.tags || [item.category]).map((tag) => (
            <TechChip key={tag} label={tag} size="sm" />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default TimelineItem;
