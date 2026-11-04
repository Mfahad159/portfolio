'use client';

import { motion } from 'motion/react';
import { skillCategories } from '@/data/portfolio';
import Container from './ui/Container';
import SectionHeading from './ui/SectionHeading';

const Skills = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      id="skills"
      className="section-padding scroll-mt-28"
    >
      <Container>
        <SectionHeading
          eyebrow="Skills"
          title="Skills & Tools"
          description="Technologies, platforms, and models I build with."
        />

        <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-3">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: catIndex * 0.1 }}
              className="card-surface flex flex-col p-6"
            >
              <h3 className="mb-4 text-base font-semibold tracking-tight text-foreground">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1.5 text-xs font-medium text-[var(--muted)] transition-colors hover:border-[var(--border-hover)] hover:text-[var(--accent-alt)]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </motion.section>
  );
};

export default Skills;
