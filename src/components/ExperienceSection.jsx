import { Award, Briefcase, GraduationCap, Trophy } from "lucide-react";
import { portfolioData } from "../data/portfolioData";
import { SectionHeader } from "./SectionHeader";

export const ExperienceSection = () => {
  const { experience, education, achievements } = portfolioData;

  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="border-t border-[var(--border-subtle)] py-16 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          index="02"
          eyebrow="Experience & Credentials"
          id="experience-heading"
          title="Internship, education & algorithmic proof."
          description="Industry internship experience paired with a B.Tech in Information Technology and competitive problem solving."
        />

        {/* Architectural Ledger: Experience + Education */}
        <div
          data-reveal
          className="overflow-hidden rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] divide-y divide-[var(--border-subtle)]"
        >
          {experience.map((item) => (
            <div
              key={`${item.organization}-${item.period}`}
              className="grid gap-3 p-5 sm:grid-cols-12 sm:items-center sm:px-6"
            >
              <div className="font-mono text-xs text-[var(--text-muted)] sm:col-span-3">
                {item.period}
              </div>

              <div className="flex items-center gap-3 sm:col-span-6">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-[var(--border-subtle)] bg-[var(--bg-canvas)] text-[var(--accent)]">
                  <Briefcase size={15} aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-display text-base font-semibold text-[var(--text-primary)]">
                    {item.role}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)]">{item.organization}</p>
                </div>
              </div>

              <div className="sm:col-span-3 sm:text-right">
                <span className="inline-block rounded border border-[var(--border-subtle)] bg-[var(--bg-canvas)] px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider text-[var(--text-secondary)]">
                  {item.kind}
                </span>
              </div>
            </div>
          ))}

          {/* Education Row */}
          <div className="grid gap-3 p-5 sm:grid-cols-12 sm:items-center sm:px-6">
            <div className="font-mono text-xs text-[var(--text-muted)] sm:col-span-3">
              {education.period}
            </div>

            <div className="flex items-center gap-3 sm:col-span-6">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-[var(--border-subtle)] bg-[var(--bg-canvas)] text-[var(--text-primary)]">
                <GraduationCap size={16} aria-hidden="true" />
              </span>
              <div>
                <h3 className="font-display text-base font-semibold text-[var(--text-primary)]">
                  {education.degree}
                </h3>
                <p className="text-sm text-[var(--text-secondary)]">{education.institution}</p>
              </div>
            </div>

            <div className="sm:col-span-3 sm:text-right">
              <span className="inline-block rounded border border-[var(--border-subtle)] bg-[var(--bg-canvas)] px-2.5 py-1 font-mono text-[11px] font-medium text-[var(--text-primary)]">
                {education.grade}
              </span>
            </div>
          </div>
        </div>

        {/* Achievements & Certifications Grid */}
        <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-3">
          {achievements.map((item, idx) => {
            const Icon = idx === 0 ? Trophy : Award;
            return (
              <article
                key={item.title}
                data-reveal
                className="flex flex-col justify-between rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-5 transition-colors hover:border-[var(--border-strong)]"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 font-mono text-[11px] text-[var(--accent)]">
                      <Icon size={13} aria-hidden="true" />
                      <span>{item.index}</span>
                    </span>
                    <span className="font-mono text-[11px] text-[var(--text-muted)]">
                      {item.period}
                    </span>
                  </div>
                  <h3 className="font-display mt-3 text-sm font-semibold text-[var(--text-primary)]">
                    {item.title}
                  </h3>
                  <p className="mt-0.5 font-mono text-[11px] text-[var(--text-muted)]">
                    {item.issuer}
                  </p>
                </div>
                <p className="mt-3 text-xs leading-relaxed text-[var(--text-secondary)]">
                  {item.detail}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
