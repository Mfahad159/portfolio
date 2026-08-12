'use client';

import { useCallback, useEffect, useState } from 'react';

const SECTION_IDS = ['top', 'about', 'experience', 'projects', 'skills', 'community', 'contact'];

/** Navbar height + buffer — section activates when this scroll line enters it */
const ACTIVATION_OFFSET = 112;

function getSectionBounds(id) {
  const el = document.getElementById(id);
  if (!el) return null;
  const rect = el.getBoundingClientRect();
  return {
    top: rect.top + window.scrollY,
    bottom: rect.top + window.scrollY + rect.height,
  };
}

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState('top');

  const updateActiveSection = useCallback(() => {
    const marker = window.scrollY + ACTIVATION_OFFSET;
    let current = SECTION_IDS[0];

    for (const id of SECTION_IDS) {
      const bounds = getSectionBounds(id);
      if (!bounds) continue;

      if (marker >= bounds.top && marker < bounds.bottom) {
        current = id;
        break;
      }

      if (bounds.top <= marker) {
        current = id;
      }
    }

    const atBottom =
      window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
    if (atBottom) {
      current = SECTION_IDS[SECTION_IDS.length - 1];
    }

    setActiveSection((prev) => (prev !== current ? current : prev));
  }, []);

  useEffect(() => {
    updateActiveSection();

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        updateActiveSection();
        ticking = false;
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', updateActiveSection);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', updateActiveSection);
    };
  }, [updateActiveSection]);

  return activeSection;
}

export function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${breakpoint - 1}px)`);
    const update = () => setIsMobile(media.matches);
    update();
    media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, [breakpoint]);

  return isMobile;
}

export function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReduced(media.matches);
    update();
    media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, []);

  return reduced;
}
