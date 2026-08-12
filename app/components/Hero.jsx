'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { assets } from '@/assets/assets';
import { siteLinks } from '@/data/portfolio';
import { heroSequence } from '@/lib/motion';
import { useIsMobile } from '@/hooks/useActiveSection';
import Button from './ui/Button';
import Container from './ui/Container';
import DotGrid from './ui/DotGrid';
import SystemCard from './ui/SystemCard';

const Hero = () => {
  const isMobile = useIsMobile();

  return (
    <section id="top" className="hero-section relative">
      {!isMobile && <DotGrid />}

      <Container className="relative">
        <div className="grid items-start gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, type: 'spring', stiffness: 100, delay: 0.05 }}
              className="mb-6 flex justify-center lg:justify-start"
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
              className="mb-3 text-sm font-medium tracking-wide text-[var(--accent)]"
            >
              Muhammad Fahad
            </motion.p>

            <motion.h1
              {...heroSequence.heading}
              className="text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-[3.25rem]"
            >
              Product Engineer
              <br />
              <span className="text-gradient-accent">building products across software & AI.</span>
            </motion.h1>

            <motion.div
              {...heroSequence.description}
              className="mx-auto mt-6 flex max-w-md flex-wrap justify-center gap-2 lg:mx-0 lg:justify-start"
            >
              {['Full-stack', 'AI & LLMs', 'FAST-NUCES'].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1 text-xs font-medium text-[var(--muted)] sm:text-sm"
                >
                  {item}
                </span>
              ))}
            </motion.div>

            <motion.div
              {...heroSequence.cta}
              className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap lg:justify-start"
            >
              <Button href="#projects" showArrow>
                View My Work
              </Button>
              <Button href={siteLinks.resume} download={siteLinks.resumeFileName} variant="secondary">
                Download Resume
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

          <div className="flex justify-center lg:justify-end">
            <motion.div {...heroSequence.card} className="hidden w-full max-w-xs sm:block sm:max-w-sm">
              <SystemCard />
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
