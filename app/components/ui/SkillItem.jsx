'use client';

import {
  SiFastapi,
  SiFirebase,
  SiGit,
  SiGithub,
  SiLangchain,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReact,
  SiSupabase,
  SiVercel,
} from 'react-icons/si';
import { HiOutlineCpuChip, HiOutlineSparkles } from 'react-icons/hi2';

const iconMap = {
  react: SiReact,
  nextjs: SiNextdotjs,
  python: SiPython,
  fastapi: SiFastapi,
  nodejs: SiNodedotjs,
  postgresql: SiPostgresql,
  supabase: SiSupabase,
  prisma: SiPrisma,
  firebase: SiFirebase,
  langchain: SiLangchain,
  git: SiGit,
  github: SiGithub,
  vercel: SiVercel,
  ai: HiOutlineSparkles,
  vlm: HiOutlineCpuChip,
};

const SkillItem = ({ name, icon }) => {
  const Icon = icon ? iconMap[icon] : null;

  return (
    <li className="flex items-center gap-2.5 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-3 py-2.5 transition-colors hover:border-[var(--border-hover)]">
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[var(--accent-muted)] text-[var(--accent)]">
        {Icon ? (
          <Icon className="h-4 w-4" aria-hidden="true" />
        ) : (
          <span className="text-[10px] font-semibold uppercase tracking-wide">{name.slice(0, 2)}</span>
        )}
      </span>
      <span className="text-sm font-medium">{name}</span>
    </li>
  );
};

export default SkillItem;
