'use client';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Work from './components/Work';
import Skills from './components/Skills';
import Community from './components/Community';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import ScrollToTop from './components/ui/ScrollToTop';
import SectionDivider from './components/ui/SectionDivider';
import { useEffect, useState } from 'react';

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const stored = localStorage.theme;
    if (stored === 'dark') {
      setIsDarkMode(true);
    } else if (stored === 'light') {
      setIsDarkMode(false);
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
    localStorage.theme = isDarkMode ? 'dark' : 'light';
  }, [isDarkMode]);

  return (
    <>
      <ScrollProgress />
      <ScrollToTop />
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <main>
        <Hero />
        <SectionDivider number="01" />
        <About />
        <SectionDivider number="02" />
        <Experience />
        <SectionDivider number="03" />
        <Work />
        <SectionDivider number="04" />
        <Skills />
        <SectionDivider number="05" />
        <Community />
        <SectionDivider number="06" />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
