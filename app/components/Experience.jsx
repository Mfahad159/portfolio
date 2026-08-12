'use client';

import { motion } from 'motion/react';
import { experienceData } from '@/data/portfolio';
import Container from './ui/Container';
import SectionHeading from './ui/SectionHeading';
import TimelineItem from './ui/TimelineItem';

const Experience = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      id="experience"
      className="section-padding scroll-mt-24"
    >
      <Container>
        <SectionHeading
          eyebrow="Experience"
          title="Experience"
          description="Research and hands-on software development from my time as a CS student."
        />

        <div className="mx-auto max-w-3xl md:max-w-4xl">
          {experienceData.map((item, index) => (
            <TimelineItem
              key={item.title}
              item={item}
              index={index}
              isLast={index === experienceData.length - 1}
            />
          ))}
        </div>
      </Container>
    </motion.section>
  );
};

export default Experience;
