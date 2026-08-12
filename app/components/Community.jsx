'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { communityAssets } from '@/data/portfolio';
import Container from './ui/Container';
import { StoryDivider, StoryImage, StoryLabel } from './ui/StoryImage';

const Community = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      id="community"
      className="section-padding scroll-mt-24"
    >
      <Container>
        {/* Intro */}
        <div className="mx-auto max-w-3xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]"
          >
            Community
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-[2.75rem]"
          >
            Community & Leadership
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-base text-[var(--muted)]"
          >
            Building with people, learning together, and sharing what I know.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[var(--muted)]"
          >
            Some of my most valuable learning has happened outside the editor — through developer
            communities, team collaboration, events, and mentoring other students.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 inline-flex items-center gap-2 text-sm text-[var(--muted)]"
          >
            <Image
              src={communityAssets.fastLogo}
              alt="FAST-NUCES logo"
              width={20}
              height={20}
              className="opacity-70"
            />
            <span>FAST-NUCES · Faisalabad</span>
          </motion.div>
          <div className="divider-line mx-auto mt-8 w-16" />
        </div>

        {/* 01 — Community / GDG */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5 }}
          className="mt-16 grid items-center gap-10 lg:grid-cols-2 lg:gap-14"
        >
          <div className="relative pb-10 sm:pb-14">
            <StoryImage
              src={communityAssets.gdgTechnical}
              alt="GDG on Campus CFD community activity"
              priority
              className="relative z-10"
            />
            <div className="absolute -bottom-6 -right-4 z-20 w-[45%] sm:-bottom-8 sm:-right-6 sm:w-[42%]">
              <StoryImage
                src={communityAssets.gdgCommunity}
                alt="GDG on Campus CFD community and team activity"
                className="shadow-lg"
                sizes="(max-width: 768px) 40vw, 240px"
              />
            </div>
          </div>

          <div className="lg:pl-4">
            <StoryLabel number="01" text="Community" />
            <div className="mb-4 flex items-center gap-3">
              <Image
                src={communityAssets.gdgLogo}
                alt="GDG on Campus logo"
                width={40}
                height={40}
                className="rounded-full border border-[var(--border)] object-cover"
              />
              <div>
                <h3 className="text-xl font-semibold">GDG on Campus CFD</h3>
                <p className="text-sm text-[var(--accent)]">Community Building</p>
              </div>
            </div>
            <p className="text-base leading-relaxed text-[var(--muted)]">
              Alongside product development, I lead the technical side of GDG on Campus at FAST-NUCES, working across developer and design teams to plan and execute technical events and community initiatives.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">
              I’ve led technical execution for programs including Google’s Arc Program 2026 and AI Hackathon 2026, while also mentoring junior members in web development, developer tooling, and modern engineering practices.
            </p>

          </div>
        </motion.div>

        <StoryDivider />

        {/* 02 — Mentoring */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5 }}
          className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14"
        >
          <div className="order-2 lg:order-1">
            <StoryLabel number="02" text="Mentoring" />
            <h3 className="text-2xl font-semibold">Mentoring & Sharing</h3>
            <div className="mt-4 flex flex-wrap gap-3">
              <span className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1 text-sm text-[var(--muted)]">
                60+ students
              </span>
              <span className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1 text-sm text-[var(--muted)]">
                AI + Programming
              </span>
            </div>
            <p className="mt-5 text-base leading-relaxed text-[var(--muted)]">
              One of the experiences I&apos;m especially glad to have been part of was mentoring 60+
              students in AI and programming.
            </p>
            <p className="mt-4 text-base leading-relaxed text-[var(--muted)]">
              Being able to explain technical ideas, answer questions, and help other students get
              started has been a different kind of learning experience for me.
            </p>
          </div>

          <div className="order-1 lg:order-2">
            <StoryImage
              src={communityAssets.certificate}
              alt="Muhammad Fahad receiving recognition for mentoring students in AI and programming"
              className="lg:translate-x-2"
              aspectClass="aspect-[4/5] sm:aspect-[3/4]"
              sizes="(max-width: 768px) 100vw, 480px"
            />
            <p className="mt-3 text-center text-xs text-[var(--muted)] lg:text-left">
              Recognition for mentoring students in AI and programming.
            </p>
          </div>
        </motion.div>

        <StoryDivider />

        {/* 03 — Beyond the code */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <StoryLabel number="03" text="Beyond the code" />
          <h3 className="text-2xl font-semibold">Beyond the code.</h3>
          <p className="mt-4 text-base leading-relaxed text-[var(--muted)]">
            Building software is only part of the journey. The people I build with, learn from, and
            help along the way are just as important.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 text-sm text-[var(--muted)]">
            <Image
              src={communityAssets.fastLogo}
              alt="FAST-NUCES logo"
              width={18}
              height={18}
              className="opacity-60"
            />
            <span>FAST-NUCES · Faisalabad</span>
          </div>
        </motion.div>
      </Container>
    </motion.section>
  );
};

export default Community;
