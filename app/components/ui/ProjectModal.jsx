'use client';

import { motion, AnimatePresence } from 'motion/react';
import { useEffect } from 'react';
import TechChip from './TechChip';
import ProjectImage from './ProjectImage';
import Button from './Button';

const ProjectModal = ({ project, isOpen, onClose }) => {
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => e.key === 'Escape' && onClose();
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-end justify-center p-4 sm:items-center"
          onClick={onClose}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.25 }}
            className="card-surface relative z-10 max-h-[90vh] w-full max-w-2xl overflow-y-auto bg-[var(--background)] p-0 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
          >
            <div className="relative aspect-[21/9] min-h-[160px] overflow-hidden border-b border-[var(--border)]">
              {project.image ? (
                <ProjectImage
                  src={project.image}
                  alt={project.imageAlt || `${project.title} screenshot`}
                  fit={project.imageFit || 'cover'}
                />
              ) : (
                <div className="flex h-full items-center justify-center bg-[var(--surface)] text-sm text-[var(--muted)]">
                  Screenshot coming soon
                </div>
              )}
              <button
                onClick={onClose}
                className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white backdrop-blur-sm transition-colors hover:bg-black/70"
                aria-label="Close project details"
              >
                ×
              </button>
            </div>

            <div className="space-y-5 p-6 md:p-8">
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-[var(--accent)]">
                  {project.category}
                </span>
                <h2 id="project-modal-title" className="mt-2 text-2xl font-semibold">
                  {project.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{project.description}</p>
                {project.role && (
                  <p className="mt-2 text-sm text-[var(--muted)]">
                    <span className="font-medium text-foreground/90">My role:</span> {project.role}
                  </p>
                )}
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <h3 className="mb-1 text-xs font-semibold uppercase tracking-widest text-[var(--muted)]">
                    Problem
                  </h3>
                  <p className="text-sm leading-relaxed">{project.problem}</p>
                </div>
                <div>
                  <h3 className="mb-1 text-xs font-semibold uppercase tracking-widest text-[var(--muted)]">
                    Solution
                  </h3>
                  <p className="text-sm leading-relaxed">{project.solution}</p>
                </div>
              </div>

              <div>
                <h3 className="mb-1 text-xs font-semibold uppercase tracking-widest text-[var(--muted)]">
                  What I built
                </h3>
                <p className="text-sm leading-relaxed">{project.contribution}</p>
              </div>

              <div>
                <h3 className="mb-2 text-xs font-semibold uppercase tracking-widest text-[var(--muted)]">
                  Built with
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <TechChip key={t} label={t} />
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                {project.github && (
                  <Button href={project.github} target="_blank" rel="noopener noreferrer" showArrow>
                    View on GitHub
                  </Button>
                )}
                {project.demo && (
                  <Button href={project.demo} variant="secondary" target="_blank" rel="noopener noreferrer">
                    Live Demo
                  </Button>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
