'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import BrowserMockup from './BrowserMockup';

const getCategoryTags = (project) => {
  const fromCategory = project.category
    .split('/')
    .map((part) => part.trim())
    .filter(Boolean);
  return fromCategory.slice(0, 3);
};

const getDemoUrl = (project) => {
  if (!project.demo) return 'localhost:3000';
  try {
    return new URL(project.demo).hostname;
  } catch {
    return project.demo.replace(/^https?:\/\//, '');
  }
};

const FeaturedProjectCard = ({ project, priority = false, index = 0, reversed = false }) => {
  const reducedMotion = useReducedMotion();
  const tags = getCategoryTags(project);
  const imageFit = project.imageFit || 'cover';
  const aspectClass = project.imageAspect || 'aspect-[16/10]';

  const revealTransition = reducedMotion
    ? { duration: 0.01 }
    : { duration: 0.9, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] };

  const primaryHref = project.demo || project.github;
  const primaryLabel = project.demo ? 'View project' : 'View code';

  return (
    <motion.article
      initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={revealTransition}
      className={`grid items-center gap-8 md:gap-10 lg:grid-cols-2 lg:gap-16 ${
        reversed ? 'lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1' : ''
      }`}
    >
      <motion.div
        initial={reducedMotion ? { opacity: 1 } : { opacity: 0, x: reversed ? 20 : -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ ...revealTransition, delay: (revealTransition.delay || 0) + 0.05 }}
        className="space-y-5 sm:space-y-6"
      >
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1 text-xs font-medium text-[var(--muted)]"
            >
              {tag}
            </span>
          ))}
        </div>

        <div>
          <h3 className="text-2xl font-semibold leading-tight tracking-tight sm:text-3xl md:text-4xl">
            {project.title}
          </h3>
          <p className="mt-3 max-w-lg text-sm leading-relaxed text-[var(--muted)] sm:mt-4 sm:text-base">
            {project.description}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 sm:gap-4">
          {primaryHref && (
            <a
              href={primaryHref}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex cursor-pointer items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90 sm:px-6 sm:py-3"
            >
              {primaryLabel}
              <span
                aria-hidden="true"
                className="transition-transform duration-200 group-hover:translate-x-0.5"
              >
                →
              </span>
            </a>
          )}

          {project.demo && project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex cursor-pointer items-center gap-1.5 text-sm font-medium text-[var(--muted)] transition-colors hover:text-[var(--accent-alt)]"
            >
              View code →
            </a>
          )}
        </div>
      </motion.div>

      <motion.div
        initial={reducedMotion ? { opacity: 1 } : { opacity: 0, x: reversed ? -20 : 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ ...revealTransition, delay: (revealTransition.delay || 0) + 0.1 }}
        whileHover={reducedMotion ? undefined : { y: -6 }}
        className="group/mockup w-full"
      >
        <BrowserMockup url={getDemoUrl(project)}>
          <motion.div
            initial={
              reducedMotion
                ? { filter: 'blur(0px)', opacity: 1, scale: 1 }
                : { filter: 'blur(12px)', opacity: 0.75, scale: 1.04 }
            }
            whileInView={{ filter: 'blur(0px)', opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={revealTransition}
            className={`relative overflow-hidden bg-[var(--bg-primary)] ${aspectClass}`}
          >
            <Image
              src={project.image}
              alt={project.imageAlt || `${project.title} screenshot`}
              fill
              priority={priority}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 560px"
              className={`transition duration-700 ease-out group-hover/mockup:scale-[1.03] ${
                imageFit === 'contain' ? 'object-contain p-2 sm:p-3' : 'object-cover object-top'
              }`}
            />
          </motion.div>
        </BrowserMockup>
      </motion.div>
    </motion.article>
  );
};

export default FeaturedProjectCard;
