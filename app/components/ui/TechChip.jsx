const TechChip = ({ label, highlight = false, size = 'default' }) => {
  const sizeClass = size === 'sm' ? 'px-2.5 py-1 text-[11px]' : 'px-3 py-1.5 text-xs';

  return (
    <span
      className={`inline-block rounded-full border font-medium transition-colors duration-200 ${sizeClass} ${
        highlight
          ? 'border-[var(--accent)]/35 bg-[var(--accent-muted)] text-[var(--accent)]'
          : 'border-[var(--border)] bg-[var(--surface-elevated)] text-[var(--muted)]'
      }`}
    >
      {label}
    </span>
  );
};

export default TechChip;
