'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import TechChip from './TechChip';

const MoreProjectsList = ({ projects }) => {
  const [open, setOpen] = useState(false);

  if (!projects.length) return null;

  return (
    <div className="mt-14">
      <div className="flex justify-center">
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
          aria-controls="more-projects-panel"
          className="group inline-flex cursor-pointer items-center gap-2 text-sm font-medium text-[var(--muted)] transition-colors hover:text-[var(--accent-alt)]"
        >
          See more projects
          <span
            aria-hidden="true"
            className={`transition-transform duration-300 ${open ? 'rotate-90' : 'group-hover:translate-x-0.5'}`}
          >
            →
          </span>
        </button>
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id="more-projects-panel"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
            className="overflow-hidden"
          >
            <ul className="mx-auto mt-8 max-w-3xl divide-y divide-[var(--border)] rounded-2xl border border-[var(--border)] bg-[var(--surface)]">
              {projects.map((project, index) => (
                <motion.li
                  key={project.title}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="p-5 md:p-6"
                >
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div className="min-w-0 flex-1">
                      <p className="mb-1 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--accent)]">
                        {project.category}
                      </p>
                      <h4 className="text-lg font-semibold">{project.title}</h4>
                      <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
                        {project.description}
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {project.tech.map((item) => (
                          <TechChip key={item} label={item} size="sm" />
                        ))}
                      </div>
                    </div>
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="shrink-0 cursor-pointer text-sm font-medium text-[var(--accent-alt)] transition-colors hover:text-[var(--accent-alt-hover)]"
                      >
                        View Code ↗
                      </a>
                    )}
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MoreProjectsList;
