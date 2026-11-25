import { portfolioData } from "../data/portfolioData";
import { SectionHeader } from "./SectionHeader";

export const SkillsSection = () => (
  <section
    id="skills"
    aria-labelledby="skills-heading"
    className="border-t border-[var(--border-subtle)] py-16 sm:py-24"
  >
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <SectionHeader
        index="03"
        eyebrow="Technical Matrix"
        id="skills-heading"
        title="Languages, frameworks & infrastructure."
        description="Production tools across React UI engineering, Node.js APIs, PostgreSQL data modeling, and CI/CD."
      />

      <div
        data-reveal
        className="grid grid-cols-1 overflow-hidden rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] sm:grid-cols-2"
      >
        {portfolioData.skills.map((group, idx) => (
          <div
            key={group.category}
            className={`p-5 sm:p-6 ${
              idx % 2 === 0 ? "sm:border-r sm:border-[var(--border-subtle)]" : ""
            } ${idx < 2 ? "border-b border-[var(--border-subtle)]" : idx === 2 ? "border-b border-[var(--border-subtle)] sm:border-b-0" : ""}`}
          >
            <div className="flex items-center justify-between">
              <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-[var(--text-primary)]">
                {group.category}
              </h3>
              <span className="font-mono text-[11px] text-[var(--accent)]">[{group.code}]</span>
            </div>

            <ul className="mt-4 flex flex-wrap gap-2" aria-label={group.category}>
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-md border border-[var(--border-subtle)] bg-[var(--bg-canvas)] px-2.5 py-1 font-mono text-xs text-[var(--text-secondary)] transition-colors hover:border-[var(--border-strong)] hover:text-[var(--text-primary)]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);
