import { siteLinks } from '@/data/portfolio';
import Container from './ui/Container';

const Footer = () => {
  return (
    <footer className="border-t border-[var(--border)] py-8">
      <Container className="flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-[var(--muted)]">© 2026 Muhammad Fahad. All rights reserved.</p>
        <ul className="flex items-center gap-6">
          {[
            { label: 'GitHub', href: siteLinks.github },
            { label: 'LinkedIn', href: siteLinks.linkedin },
            { label: 'Email', href: `mailto:${siteLinks.email}` },
          ].map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target={link.label !== 'Email' ? '_blank' : undefined}
                rel={link.label !== 'Email' ? 'noopener noreferrer' : undefined}
                className="group cursor-pointer text-sm text-[var(--muted)] transition-colors hover:text-[var(--accent-alt)]"
              >
                {link.label}
                <span className="ml-0.5 inline-block transition-transform duration-200 group-hover:translate-x-0.5">
                  →
                </span>
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </footer>
  );
};

export default Footer;
