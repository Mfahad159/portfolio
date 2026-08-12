'use client';

import { motion } from 'motion/react';
import { featuredProjects, moreProjects } from '@/data/portfolio';
import Container from './ui/Container';
import SectionHeading from './ui/SectionHeading';
import FeaturedProjectCard from './ui/FeaturedProjectCard';
import MoreProjectsList from './ui/MoreProjectsList';

const Work = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5 }}
      id="projects"
      className="section-padding scroll-mt-28"
    >
      <Container>
        <SectionHeading
          eyebrow="Selected Work"
          title="Projects"
          description="A few projects that show how I learn and build."
        />

        <div className="space-y-16 sm:space-y-20 md:space-y-28">
          {featuredProjects.map((project, index) => (
            <FeaturedProjectCard
              key={project.title}
              project={project}
              index={index}
              priority={index === 0}
              reversed={index % 2 === 1}
            />
          ))}
        </div>

        <MoreProjectsList projects={moreProjects} />
      </Container>
    </motion.section>
  );
};

export default Work;
