/* eslint-disable react/prop-types */
import { ArrowUpRight, CheckCircle2, Code2, Github } from "lucide-react";
import { portfolioData } from "../data/portfolioData";
import { SectionHeader } from "./SectionHeader";

const ViewportFrame = ({ project }) => {
  const host = project.demoUrl.replace(/^https?:\/\//, "").replace(/\/$/, "");

  return (
    <a
      href={project.demoUrl}
      target="_blank"
      rel="noreferrer"
      className="group/frame block overflow-hidden rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-canvas)] transition-colors hover:border-[var(--border-strong)]"
      aria-label={`Launch ${project.title} live demo`}
    >
      <div className="flex items-center justify-between border-b border-[var(--border-subtle)] bg-[var(--bg-surface)] px-3 py-2">
        <div className="flex items-center gap-2 font-mono text-[10px] text-[var(--text-muted)]">
          <span className="inline-block h-1.5 w-1.5 rounded-xs bg-[var(--accent)]" />
          <span className="truncate">{host}</span>
        </div>
        <span className="inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-wider text-[var(--text-muted)] transition-colors group-hover/frame:text-[var(--accent)]">
          Live
          <ArrowUpRight size={11} aria-hidden="true" />
        </span>
      </div>

      <div className="aspect-[16/9] overflow-hidden bg-zinc-950/20">
        <img
          src={project.image}
          alt={project.imageAlt}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover object-top transition-transform duration-300 group-hover/frame:scale-[1.02]"
        />
      </div>
    </a>
  );
};

const ProjectActionBar = ({ project }) => (
  <div className="mt-5 border-t border-[var(--border-subtle)] pt-4">
    <div className="flex flex-wrap items-center gap-2.5">
      <a
        href={project.demoUrl}
        target="_blank"
        rel="noreferrer"
        className="inline-flex h-10 items-center justify-center gap-1.5 rounded-md bg-[var(--accent)] px-4 text-xs font-semibold text-white transition-colors hover:bg-[var(--accent-hover)]"
      >
        <span>Live Demo</span>
        <ArrowUpRight size={14} aria-hidden="true" />
      </a>

      <a
        href={project.repoUrl}
        target="_blank"
        rel="noreferrer"
        className="inline-flex h-10 items-center justify-center gap-1.5 rounded-md border border-[var(--border-strong)] bg-[var(--bg-canvas)] px-4 text-xs font-semibold text-[var(--text-primary)] transition-colors hover:border-[var(--text-primary)]"
      >
        <Github size={14} aria-hidden="true" />
        <span>GitHub</span>
      </a>
    </div>

    {project.demoNote && (
      <p className="mt-2.5 font-mono text-[10px] text-[var(--text-muted)]">{project.demoNote}</p>
    )}
  </div>
);

const ProjectMeta = ({ project }) => (
  <>
    <div className="flex items-center justify-between gap-2">
      <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--accent)]">
        {project.index} · {project.category}
      </span>
    </div>

    <h3 className="font-display mt-2 text-2xl font-bold tracking-[-0.02em] text-[var(--text-primary)]">
      {project.title}
    </h3>
    <p className="font-mono text-xs text-[var(--text-muted)]">{project.tagline}</p>

    <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">{project.summary}</p>

    <div className="mt-4 flex items-start gap-2 rounded-md border border-[var(--border-subtle)] bg-[var(--bg-canvas)] px-3 py-2.5">
      <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-emerald-500" aria-hidden="true" />
      <p className="text-xs leading-relaxed text-[var(--text-secondary)]">{project.impact}</p>
    </div>

    <div className="mt-4 flex flex-wrap gap-1.5" aria-label="Tech stack">
      {project.tags.map((tag) => (
        <span
          key={tag}
          className="rounded border border-[var(--border-subtle)] bg-[var(--bg-canvas)] px-2 py-1 font-mono text-[11px] text-[var(--text-secondary)]"
        >
          {tag}
        </span>
      ))}
    </div>

    {project.highlights && project.highlights.length > 0 && (
      <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1.5">
        <span className="inline-flex items-center gap-1 font-mono text-[11px] text-[var(--text-muted)]">
          <Code2 size={12} aria-hidden="true" /> Source:
        </span>
        {project.highlights.map((item) => (
          <a
            key={item.label}
            href={item.url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 font-mono text-[11px] text-[var(--text-secondary)] underline decoration-[var(--border-strong)] underline-offset-4 transition-colors hover:text-[var(--accent)] hover:decoration-[var(--accent)]"
          >
            {item.label}
            <ArrowUpRight size={11} aria-hidden="true" />
          </a>
        ))}
      </div>
    )}
  </>
);

export const ProjectsSection = () => {
  const [ticketBlitz, prodWatch, chitChatGPT] = portfolioData.projects;

  return (
    <section id="projects" aria-labelledby="projects-heading" className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          index="01"
          eyebrow="Featured Work"
          id="projects-heading"
          title="Built for concurrency, security & real-time scale."
          description="Full-stack systems where relational data integrity, state transitions, and responsive frontend UX work together."
        />

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          {/* Spotlight Card: TicketBlitz */}
          <article
            id={ticketBlitz.id}
            data-reveal
            className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-5 transition-colors hover:border-[var(--border-strong)] sm:p-6 lg:col-span-2 lg:grid lg:grid-cols-12 lg:items-center lg:gap-8"
          >
            <div className="lg:col-span-6">
              <ViewportFrame project={ticketBlitz} />
            </div>
            <div className="mt-5 flex flex-col justify-between lg:col-span-6 lg:mt-0">
              <div>
                <ProjectMeta project={ticketBlitz} />
              </div>
              <ProjectActionBar project={ticketBlitz} />
            </div>
          </article>

          {/* Twin Bento Cards: ProdWatch & ChitChatGPT */}
          {[prodWatch, chitChatGPT].map((project) => (
            <article
              key={project.id}
              id={project.id}
              data-reveal
              className="flex flex-col justify-between rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-5 transition-colors hover:border-[var(--border-strong)] sm:p-6"
            >
              <div>
                <ViewportFrame project={project} />
                <div className="mt-5">
                  <ProjectMeta project={project} />
                </div>
              </div>
              <ProjectActionBar project={project} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
