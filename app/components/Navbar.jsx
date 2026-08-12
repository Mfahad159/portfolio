'use client';

import React, { useEffect, useRef, useState } from 'react';
import { navLinks, siteLinks } from '@/data/portfolio';
import { useActiveSection } from '@/hooks/useActiveSection';
import Button from './ui/Button';
import { CloseIcon, MenuIcon, MoonIcon, SunIcon } from './ui/ThemeIcons';

const iconClass = 'h-5 w-5 md:h-[18px] md:w-[18px]';

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [isScroll, setIsScroll] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const sideMenuRef = useRef();
  const activeSection = useActiveSection();

  useEffect(() => {
    const onScroll = () => setIsScroll(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          isScroll
            ? 'border-b border-[var(--border)] bg-[var(--background)]/85 backdrop-blur-md'
            : 'border-b border-transparent bg-transparent'
        }`}
      >
        <nav className="section-container flex h-[4.25rem] items-center justify-between gap-3 sm:h-[4.5rem] md:h-16 lg:h-[4.25rem]">
          <a
            href="#top"
            aria-label="Home"
            className="group flex shrink-0 cursor-pointer items-center gap-0.5"
          >
            <span className="text-[1.35rem] font-bold tracking-tight sm:text-2xl md:text-xl lg:text-[1.35rem]">
              Fahad
            </span>
            <span className="text-xl font-bold text-[var(--accent)] transition-transform duration-200 group-hover:scale-110 md:text-lg lg:text-xl">
              .
            </span>
          </a>

          <ul className="hidden items-center gap-0.5 lg:flex">
            {navLinks.slice(1).map((link) => {
              const isActive = activeSection === link.id;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`group relative cursor-pointer px-3.5 py-2.5 text-[15px] ${
                      isActive ? 'text-[var(--accent)]' : 'text-[var(--muted)] hover:text-[var(--accent)]'
                    }`}
                  >
                    {link.label}
                    <span
                      aria-hidden="true"
                      className={`absolute bottom-1 left-3.5 right-3.5 h-px origin-left bg-[var(--accent)] transition-transform duration-300 ease-out ${
                        isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                      }`}
                    />
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-2.5 sm:gap-3">
            <button
              type="button"
              onClick={() => setIsDarkMode((prev) => !prev)}
              aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              className="flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-full border border-[var(--border)] text-[var(--foreground)] transition-colors hover:border-[var(--border-hover)] hover:text-[var(--accent)] md:h-10 md:w-10"
            >
              {isDarkMode ? <SunIcon className={iconClass} /> : <MoonIcon className={iconClass} />}
            </button>
            <Button
              href={siteLinks.resume}
              download={siteLinks.resumeFileName}
              variant="secondary"
              className="!px-4 !py-2.5 !text-sm sm:!px-5 md:!px-4 md:!py-2 md:!text-sm"
            >
              Resume
            </Button>
            <button
              type="button"
              className="flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-full border border-[var(--border)] text-[var(--foreground)] transition-colors hover:border-[var(--border-hover)] hover:text-[var(--accent)] lg:hidden"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
            >
              <MenuIcon className={iconClass} />
            </button>
          </div>
        </nav>
      </header>

      <div
        className={`fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          menuOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      <div
        ref={sideMenuRef}
        className={`fixed right-0 top-0 z-[70] flex h-full w-[min(100vw-3rem,20rem)] flex-col gap-1 border-l border-[var(--border)] bg-[var(--background)] p-6 pt-24 transition-transform duration-300 ease-out lg:hidden ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <button
          type="button"
          className="absolute right-5 top-6 flex h-11 w-11 cursor-pointer items-center justify-center text-[var(--foreground)] transition-colors hover:text-[var(--accent)]"
          onClick={closeMenu}
          aria-label="Close menu"
        >
          <CloseIcon className="h-5 w-5" />
        </button>
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={closeMenu}
            className={`cursor-pointer rounded-lg px-4 py-3 text-base transition-colors ${
              activeSection === link.id
                ? 'bg-[var(--accent-muted)] text-[var(--accent)]'
                : 'text-[var(--muted)] hover:bg-[var(--surface)] hover:text-[var(--accent)]'
            }`}
          >
            {link.label}
          </a>
        ))}
      </div>
    </>
  );
};

export default Navbar;
