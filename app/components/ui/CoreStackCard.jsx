'use client';

import { motion } from 'motion/react';
import { SiFastapi, SiNextdotjs, SiPython, SiReact } from 'react-icons/si';

const iconMap = {
  react: SiReact,
  nextjs: SiNextdotjs,
  python: SiPython,
  fastapi: SiFastapi,
};

const CoreStackCard = ({ item, index }) => {
  const Icon = iconMap[item.icon];

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.9 + index * 0.08 }}
      whileHover={{ y: -4 }}
      className="card-surface group flex flex-col gap-3 p-4 md:p-5"
    >
      <div className="flex items-center justify-between">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--accent-muted)] text-[var(--accent)] transition-colors group-hover:bg-[var(--accent)] group-hover:text-white">
          {Icon && <Icon className="h-5 w-5" />}
        </div>
        <span className="text-[10px] font-semibold uppercase tracking-widest text-[var(--muted)]">
          {item.category}
        </span>
      </div>
      <div>
        <h3 className="text-base font-semibold">{item.name}</h3>
        <p className="mt-1 text-sm text-[var(--muted)]">{item.description}</p>
      </div>
    </motion.div>
  );
};

export default CoreStackCard;
