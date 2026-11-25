import { ArrowUpRight } from "lucide-react";
import { portfolioData } from "../data/portfolioData";
import { SectionHeader } from "./SectionHeader";

export const AboutSection = () => (
  <section
    id="about"
    aria-labelledby="about-heading"
    className="border-t border-[var(--border-subtle)] py-16 sm:py-24"
  >
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <SectionHeader
        index="04"
        eyebrow="Engineering Principles"
        id="about-heading"
        title="How I reason about production code."
        description="Designing interfaces and backends around explicit state machines, database invariants, and clean contracts."
      />

      <div className="grid gap-6 lg:grid-cols-12">
        <div
          data-reveal
          className="flex flex-col justify-between rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-6 lg:col-span-5"
        >
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--accent)]">
              Profile
            </p>
            <p className="mt-4 text-sm leading-relaxed text-[var(--text-secondary)] sm:text-base">
              I&apos;m a full-stack developer (B.Tech IT, NSUT &apos;24) who enjoys owning complete
              product slices—from PostgreSQL schema constraints and Node.js REST/WebSocket APIs up
              to responsive React interfaces.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-[var(--text-secondary)] sm:text-base">
              My focus is building software that stays predictable under real-world pressure:
              concurrent seat locks, idempotent payments, role-restricted audit logs, and
              low-latency collaborative rooms.
            </p>
          </div>

          <div className="mt-6 border-t border-[var(--border-subtle)] pt-4 font-mono text-xs text-[var(--text-muted)]">
            Based in {portfolioData.personalInfo.location} · Open to Full-Time Roles
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-7">
          {portfolioData.engineeringPrinciples.map((item) => (
            <a
              key={item.index}
              href={item.url}
              target="_blank"
              rel="noreferrer"
              data-reveal
              className="group flex flex-col justify-between rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-5 transition-colors hover:border-[var(--accent)]"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] font-medium text-[var(--accent)]">
                    {item.index}
                  </span>
                  <ArrowUpRight
                    size={14}
                    className="text-[var(--text-muted)] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[var(--accent)]"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="font-display mt-3 text-sm font-semibold text-[var(--text-primary)]">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[var(--text-secondary)]">
                  {item.detail}
                </p>
              </div>
              <div className="mt-4 flex items-center justify-between border-t border-[var(--border-subtle)] pt-3 font-mono text-[10px] text-[var(--text-muted)]">
                <span>{item.project}</span>
                <span>{item.file}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  </section>
);
