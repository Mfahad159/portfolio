'use client';

const DotGrid = ({ className = '' }) => {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 -z-10 overflow-hidden ${className}`}
    >
      <div className="dot-grid absolute inset-0 opacity-[0.35] dark:opacity-[0.22]" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--background)]" />
      <div className="absolute left-1/2 top-1/3 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--accent)] opacity-[0.07] blur-[100px] md:h-[520px] md:w-[520px]" />
    </div>
  );
};

export default DotGrid;
