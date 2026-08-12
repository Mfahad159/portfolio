'use client';

import Image from 'next/image';
import { motion } from 'motion/react';

const StoryImage = ({
  src,
  alt,
  className = '',
  priority = false,
  sizes = '(max-width: 768px) 100vw, 50vw',
  aspectClass = 'aspect-[4/3]',
  objectFit = 'cover',
}) => (
  <motion.div
    whileHover={{ scale: 1.03 }}
    transition={{ duration: 0.3 }}
    className={`group overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-sm ${className}`}
  >
    <div className={`relative w-full overflow-hidden ${aspectClass}`}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className={`object-${objectFit} transition duration-500 group-hover:scale-[1.02] group-hover:brightness-105`}
      />
    </div>
  </motion.div>
);

const StoryLabel = ({ number, text }) => (
  <p className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-[var(--accent)]">
    {number} / {text}
  </p>
);

const StoryDivider = () => (
  <div className="my-16 flex items-center justify-center gap-3 md:my-20" aria-hidden="true">
    <span className="h-px w-12 bg-[var(--border)]" />
    <span className="text-[10px] uppercase tracking-[0.3em] text-[var(--muted)]">Build with others → Share what you learn</span>
    <span className="h-px w-12 bg-[var(--border)]" />
  </div>
);

export { StoryImage, StoryLabel, StoryDivider };
