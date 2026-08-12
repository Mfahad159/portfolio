'use client';

import { motion } from 'motion/react';
import TechChip from './TechChip';
import ProjectImage from './ProjectImage';

const ProjectCard = ({ project, onSelect, className = '', priority = false }) => {
  const hasDetails = project.problem && project.solution;

  return (
    <motion.article
      layout
      whileHover={{ y: -4 }}
      transition={{ duration: 0.22 }}
      className={`card-surface group flex h-full flex-col overflow-hidden ${className}`}
      onClick={() => hasDetails && onSelect?.(project)}
      onKeyDown={(e) => e.key === 'Enter' && hasDetails && onSelect?.(project)}
      role={hasDetails ? 'button' : undefined}
      tabIndex={hasDetails ? 0 : undefined}
      aria-label={hasDetails ? `View details for ${project.title}` : undefined}
    >
      {project.image ? (
        <div className="relative aspect-[16/10] overflow-hidden border-b border-[var(--border)]">
          <ProjectImage
            src={project.image}
            alt={project.imageAlt || `${project.title} screenshot`}
            fit="cover"
            priority={priority}
          />
          <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/50 px-3 py-1 text-[11px] font-medium text-white backdrop-blur-sm">
            {project.category}
          </span>
        </div>
      ) : (
        <div className="border-b border-[var(--border)] px-5 pt-5">
          <span className="inline-block rounded-full bg-[var(--accent-muted)] px-3 py-1 text-xs font-medium text-[var(--accent)]">
            {project.category}
          </span>
        </div>
      )}

      <div className="flex flex-1 flex-col p-5 md:p-6">
        <h3 className="mb-2 text-lg font-semibold">{project.title}</h3>
        <p className="mb-4 flex-1 text-sm leading-relaxed text-[var(--muted)]">{project.description}</p>
        <div className="mb-5 flex flex-wrap gap-2">
          {project.tech.map((item) => (
            <TechChip key={item} label={item} size="sm" />
          ))}
        </div>
        <div className="flex flex-wrap items-center gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="group/link inline-flex items-center gap-1.5 rounded-full border border-[var(--border)] px-4 py-2 text-sm font-medium transition-colors hover:border-[var(--border-hover)] hover:bg-[var(--accent-alt-muted)]"
            >
              GitHub
              <span className="transition-transform duration-200 group-hover/link:translate-x-0.5">→</span>
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1.5 rounded-full bg-[var(--accent)] px-4 py-2 text-sm font-medium text-[var(--accent-foreground)] transition-colors hover:bg-[var(--accent-hover)]"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
