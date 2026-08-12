'use client';

import { motion } from 'motion/react';
import { skills } from '@/data/portfolio';
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
          description="Technologies and tools I build with."
        />

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}
          className="mx-auto flex max-w-4xl flex-wrap justify-center gap-3"
        >
          {skills.map((skill, index) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.02 }}
              className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm text-[var(--muted)] transition-colors hover:border-[var(--border-hover)] hover:text-[var(--accent-alt)]"
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>
      </Container>
    </motion.section>
  );
};

export default Skills;
