'use client';

import React, { useEffect, useRef, useState } from 'react';
import { navLinks, siteLinks } from '@/data/portfolio';
import { useActiveSection } from '@/hooks/useActiveSection';
import Button from './ui/Button';
import { CloseIcon, MenuIcon, MoonIcon, SunIcon } from './ui/ThemeIcons';

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
            ? 'border-b border-[var(--border)] bg-[var(--background)]/80 backdrop-blur-md'
            : 'border-b border-transparent bg-transparent'
        }`}
      >
        <nav className="section-container flex h-14 items-center justify-between md:h-16">
          <a
            href="#top"
            aria-label="Home"
            className="group flex cursor-pointer items-center gap-1"
          >
            <span className="text-lg font-semibold tracking-tight md:text-xl">Fahad</span>
            <span className="text-[var(--accent)] transition-transform duration-200 group-hover:scale-110">
              .
            </span>
          </a>

          <ul className="hidden items-center gap-1 lg:flex">
            {navLinks.slice(1).map((link) => {
              const isActive = activeSection === link.id;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`group relative cursor-pointer px-3 py-2 text-sm ${
                      isActive ? 'text-[var(--accent)]' : 'text-[var(--muted)] hover:text-[var(--accent)]'
                    }`}
                  >
                    {link.label}
                    <span
                      aria-hidden="true"
                      className={`absolute bottom-0 left-3 right-3 h-px origin-left bg-[var(--accent)] transition-transform duration-300 ease-out ${
                        isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                      }`}
                    />
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setIsDarkMode((prev) => !prev)}
              aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-[var(--border)] text-[var(--foreground)] transition-colors hover:border-[var(--border-hover)] hover:text-[var(--accent)]"
            >
              {isDarkMode ? <SunIcon /> : <MoonIcon />}
            </button>
            <Button
              href={siteLinks.resume}
              download={siteLinks.resumeFileName}
              variant="secondary"
              className="hidden !px-4 !py-2 text-xs md:flex"
            >
              Resume
            </Button>
            <button
              type="button"
              className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-[var(--border)] text-[var(--foreground)] transition-colors hover:border-[var(--border-hover)] hover:text-[var(--accent)] lg:hidden"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
            >
              <MenuIcon />
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
        className={`fixed right-0 top-0 z-[70] flex h-full w-72 flex-col gap-1 border-l border-[var(--border)] bg-[var(--background)] p-6 pt-20 transition-transform duration-300 ease-out lg:hidden ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <button
          type="button"
          className="absolute right-5 top-5 flex h-8 w-8 cursor-pointer items-center justify-center text-[var(--foreground)] transition-colors hover:text-[var(--accent)]"
          onClick={closeMenu}
          aria-label="Close menu"
        >
          <CloseIcon />
        </button>
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={closeMenu}
            className={`cursor-pointer rounded-lg px-3 py-2.5 text-base transition-colors ${
              activeSection === link.id
                ? 'bg-[var(--accent-muted)] text-[var(--accent)]'
                : 'text-[var(--muted)] hover:bg-[var(--surface)] hover:text-[var(--accent)]'
            }`}
          >
            {link.label}
          </a>
        ))}
        <div className="mt-4 border-t border-[var(--border)] pt-4">
          <Button href={siteLinks.resume} download={siteLinks.resumeFileName} variant="primary" className="w-full">
            Resume
          </Button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
