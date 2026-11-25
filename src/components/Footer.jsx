import { ArrowUp, Github, Linkedin } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export const Footer = () => {
  const github = portfolioData.socialLinks.find((item) => item.name === "GitHub");
  const linkedin = portfolioData.socialLinks.find((item) => item.name === "LinkedIn");

  return (
    <footer className="border-t border-[var(--border-subtle)] bg-[var(--bg-canvas)]">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-7 font-mono text-xs text-[var(--text-muted)] sm:flex-row sm:px-6 lg:px-8">
        <p>
          © {new Date().getFullYear()} {portfolioData.personalInfo.name} · Full-Stack Engineer
        </p>

        <div className="flex items-center gap-5">
          {github && (
            <a
              href={github.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-[var(--text-primary)]"
            >
              <Github size={13} aria-hidden="true" />
              <span>GitHub</span>
            </a>
          )}
          {linkedin && (
            <a
              href={linkedin.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-[var(--text-primary)]"
            >
              <Linkedin size={13} aria-hidden="true" />
              <span>LinkedIn</span>
            </a>
          )}
          <a
            href="#top"
            className="inline-flex items-center gap-1 text-[var(--text-secondary)] transition-colors hover:text-[var(--accent)]"
            aria-label="Back to top"
          >
            <span>Top</span>
            <ArrowUp size={13} aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
};
