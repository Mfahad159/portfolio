'use client';

import { siteLinks } from '@/data/portfolio';
import { motion } from 'motion/react';
import { useState } from 'react';
import Container from './ui/Container';
import SectionHeading from './ui/SectionHeading';
import Button from './ui/Button';

const Contact = () => {
  const [result, setResult] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult('Sending...');
    const formData = new FormData(event.target);
    formData.append('access_key', '6f5fb0d4-6c6d-40e2-bb2e-ed1fb5231ade');

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();
    setResult(data.success ? 'Message sent. I\'ll get back to you soon.' : data.message);
    if (data.success) event.target.reset();
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      id="contact"
      className="section-padding scroll-mt-28"
    >
      <Container>
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something useful."
          description="Open to research, and technical collaborations."
        />

        <div className="mx-auto mb-12 flex max-w-2xl flex-wrap items-center justify-center gap-3">
          <Button href={`mailto:${siteLinks.email}`}>Email Me</Button>
          <Button href={siteLinks.github} target="_blank" rel="noopener noreferrer" variant="secondary">
            GitHub
          </Button>
          <Button href={siteLinks.linkedin} target="_blank" rel="noopener noreferrer" variant="secondary">
            LinkedIn
          </Button>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          onSubmit={onSubmit}
          className="card-surface mx-auto max-w-2xl p-6 md:p-8"
        >
          <div className="mb-4 grid gap-4 sm:grid-cols-2">
            <input
              name="name"
              className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-3 text-sm outline-none transition-colors focus:border-[var(--accent)]/50"
              type="text"
              placeholder="Your name"
              required
              aria-label="Your name"
            />
            <input
              name="email"
              className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-3 text-sm outline-none transition-colors focus:border-[var(--accent)]/50"
              type="email"
              placeholder="Your email"
              required
              aria-label="Your email"
            />
          </div>
          <textarea
            name="message"
            className="mb-5 w-full rounded-lg border border-[var(--border)] bg-[var(--surface)] p-4 text-sm outline-none transition-colors focus:border-[var(--accent)]/50"
            rows="5"
            placeholder="Your message"
            required
            aria-label="Your message"
          />
          <div className="flex justify-center">
            <Button type="submit" showArrow>
              Send Message
            </Button>
          </div>
          {result && <p className="mt-4 text-center text-sm text-[var(--muted)]">{result}</p>}
        </motion.form>
      </Container>
    </motion.section>
  );
};

export default Contact;
