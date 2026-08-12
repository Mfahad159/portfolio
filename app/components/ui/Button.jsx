'use client';

import { motion } from 'motion/react';

const ArrowIcon = ({ className = '' }) => (
  <svg className={className} width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <path
      d="M2 7h10M8 3l4 4-4 4"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const variants = {
  primary:
    'bg-[var(--accent)] text-[var(--accent-foreground)] border border-transparent hover:bg-[var(--accent-hover)] btn-primary-shadow',
  secondary:
    'border border-[var(--border)] bg-transparent text-foreground hover:border-[var(--accent-alt)]/50 hover:bg-[var(--accent-alt-muted)]',
  ghost: 'text-foreground/70 hover:text-[var(--accent-alt)] px-2 py-1',
};

async function downloadFile(url, filename) {
  const response = await fetch(url);
  if (!response.ok) throw new Error('Download failed');
  const blob = await response.blob();
  const objectUrl = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = objectUrl;
  link.download = filename;
  link.rel = 'noopener';
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(objectUrl);
}

const Button = ({
  href,
  children,
  variant = 'primary',
  className = '',
  download,
  target,
  rel,
  type = 'button',
  onClick,
  showArrow = false,
}) => {
  const classes = `group inline-flex cursor-pointer items-center justify-center gap-2 rounded-full px-6 py-2.5 text-sm font-medium transition-all duration-200 ${variants[variant]} ${className}`;

  const handleClick = async (event) => {
    onClick?.(event);
    if (event.defaultPrevented || !download || !href) return;

    event.preventDefault();
    const filename = typeof download === 'string' ? download : 'download';

    try {
      await downloadFile(href, filename);
    } catch {
      window.location.assign(href);
    }
  };

  const content = (
    <>
      <span>{children}</span>
      {showArrow && (
        <ArrowIcon className="transition-transform duration-200 group-hover:translate-x-1" />
      )}
    </>
  );

  if (href) {
    return (
      <motion.a
        whileTap={{ scale: 0.98 }}
        href={href}
        download={download}
        target={target}
        rel={rel}
        className={classes}
        onClick={download ? handleClick : onClick}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button whileTap={{ scale: 0.98 }} type={type} className={classes} onClick={onClick}>
      {content}
    </motion.button>
  );
};

export default Button;
