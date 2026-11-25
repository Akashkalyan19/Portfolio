/* eslint-disable react/prop-types */
export const SectionHeader = ({ index, eyebrow, title, description, id }) => (
  <div
    className="mb-10 flex flex-col justify-between gap-4 border-b border-[var(--border-subtle)] pb-6 sm:mb-12 md:flex-row md:items-end"
    data-reveal
  >
    <div>
      <div className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--accent)]">
        <span>[{index}]</span>
        <span className="text-[var(--text-muted)]">/</span>
        <span>{eyebrow}</span>
      </div>
      <h2
        id={id}
        className="font-display mt-2.5 text-2xl font-semibold tracking-[-0.03em] text-[var(--text-primary)] sm:text-3xl"
      >
        {title}
      </h2>
    </div>
    {description && (
      <p className="max-w-md text-sm leading-relaxed text-[var(--text-secondary)]">
        {description}
      </p>
    )}
  </div>
);
