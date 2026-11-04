'use client';

import { motion } from 'motion/react';
import Container from './ui/Container';

const focusAreas = [
  { label: 'Full-stack products', detail: 'React · Next.js · APIs' },
  { label: 'AI & research', detail: 'LLMs · VLMs · OCR' },
  { label: 'Community', detail: 'GDG · mentoring · events' },
];

const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      id="about"
      className="section-padding scroll-mt-28"
    >
      <Container>
        <div className="mx-auto max-w-3xl space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
              About
            </p>
            <h2 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl">
              Building products,
              <br />
              not just projects.
            </h2>
            <div className="divider-line mt-8 w-16" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-6 text-base leading-relaxed text-[var(--muted)]"
          >
            <p>
              I started by wanting to understand how things worked. Eventually, I wanted
              to build them myself.
            </p>
            <p>
              That journey has taken me through full-stack products, AI, LLMs, VLMs,
              and OCR, always learning by building something real.
            </p>
            <p>
              Now I’m trying to do the same with people: build, share, mentor, and learn
              together.
            </p>
            <ul className="grid gap-3 pt-2 sm:grid-cols-3">
              {focusAreas.map((area) => (
                <li
                  key={area.label}
                  className="rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3"
                >
                  <p className="text-sm font-medium text-foreground">{area.label}</p>
                  <p className="mt-1 text-xs text-[var(--muted)]">{area.detail}</p>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </Container>
    </motion.section>
  );
};

export default About;
