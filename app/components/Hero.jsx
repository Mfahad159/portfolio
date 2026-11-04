'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { assets } from '@/assets/assets';
import { siteLinks } from '@/data/portfolio';
import { heroSequence } from '@/lib/motion';
import Button from './ui/Button';
import Container from './ui/Container';
import DotGrid from './ui/DotGrid';

const Hero = () => {
  return (
    <section id="top" className="hero-section relative">
      <DotGrid />

      <Container className="relative">
        <div className="max-w-3xl text-center lg:text-left">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, type: 'spring', stiffness: 100, delay: 0.05 }}
            className="mb-4 flex justify-center sm:mb-5 lg:justify-start"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-[var(--accent)]/20 blur-xl" />
              <Image
                src={assets.profile_img_2}
                alt="Muhammad Fahad"
                width={128}
                height={128}
                priority
                className="relative h-28 w-28 rounded-full border-2 border-[var(--accent)]/30 object-cover shadow-lg sm:h-32 sm:w-32"
              />
            </div>
          </motion.div>

          <motion.p
            {...heroSequence.eyebrow}
            className="mb-6 text-xl font-bold tracking-tight text-[var(--accent)] sm:mb-8 sm:text-2xl"
          >
            Muhammad Fahad
          </motion.p>

          <motion.h1
            {...heroSequence.heading}
            className="text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-[3.25rem]"
          >
            CS student building & shipping
            <br />
            <span className="text-gradient-accent">software & AI products.</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.4 }}
            className="mt-8 flex flex-col items-center gap-3 sm:mt-10 sm:flex-row sm:flex-wrap lg:justify-start"
          >
            <Button href="#projects" showArrow>
              View My Work
            </Button>
            <Button href={siteLinks.resume} target="_blank" rel="noopener noreferrer" variant="secondary">
              View Resume
            </Button>
            <Button
              href={siteLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              variant="ghost"
              className="!px-0"
            >
              GitHub →
            </Button>
            <Button
              href={siteLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              variant="ghost"
              className="!px-0"
            >
              LinkedIn →
            </Button>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
