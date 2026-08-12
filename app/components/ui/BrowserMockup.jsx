'use client';

const BrowserMockup = ({ children, url = 'app.vercel.app' }) => (
  <div className="w-full overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--surface)] shadow-[0_20px_50px_-24px_rgba(0,0,0,0.3)] sm:rounded-2xl">
    <div className="flex items-center gap-1.5 border-b border-[var(--border)] px-3 py-2.5 sm:gap-2 sm:px-4 sm:py-3">
      <span className="h-2 w-2 rounded-full bg-[#ff5f57] sm:h-2.5 sm:w-2.5" aria-hidden="true" />
      <span className="h-2 w-2 rounded-full bg-[#febc2e] sm:h-2.5 sm:w-2.5" aria-hidden="true" />
      <span className="h-2 w-2 rounded-full bg-[#28c840] sm:h-2.5 sm:w-2.5" aria-hidden="true" />
      <div className="ml-1 min-w-0 flex-1 truncate rounded-md bg-[var(--background)] px-2 py-1 text-[10px] text-[var(--muted)] sm:ml-2 sm:px-3 sm:py-1.5 sm:text-[11px]">
        {url}
      </div>
    </div>
    {children}
  </div>
);

export default BrowserMockup;
