/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Command, FileText, Menu, Moon, Sun, X } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

const NAV_ITEMS = [
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
];

export const Navbar = ({ theme, onToggleTheme, onOpenPalette }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { name, resumeUrl } = portfolioData.personalInfo;

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    const onKeyDown = (e) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("keydown", onKeyDown);
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header
      className={`sticky top-0 z-40 transition-colors duration-200 ${isScrolled
        ? "border-b border-[var(--border-subtle)] bg-[var(--bg-canvas)]/90 backdrop-blur-md"
        : "border-b border-[var(--border-subtle)]/60 bg-[var(--bg-canvas)]/75 backdrop-blur-sm"
        }`}
    >
      <nav
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        {/* Left: Clean Typographic Wordmark */}
        <a
          href="#top"
          onClick={closeMenu}
          className="group inline-flex items-baseline"
          aria-label="Akash Kalyan, back to top"
        >
          <span className="font-display text-base font-bold tracking-[-0.03em] text-[var(--text-primary)] transition-colors group-hover:text-[var(--accent)]">
            {name}
          </span>

        </a>

        {/* Center: Anchor Links */}
        <div className="hidden items-center gap-6 md:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-mono text-xs uppercase tracking-wider text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Right: Palette + Theme + Direct Resume PDF + Contact */}
        <div className="hidden items-center gap-2 md:flex">
          <button
            type="button"
            onClick={onOpenPalette}
            className="inline-flex h-8 items-center gap-1.5 rounded-md border border-[var(--border-subtle)] bg-[var(--bg-surface)] px-2.5 font-mono text-[11px] text-[var(--text-muted)] transition-colors hover:border-[var(--border-strong)] hover:text-[var(--text-primary)]"
            aria-label="Open quick command palette"
            title="Quick actions (Ctrl/Cmd + K)"
          >
            <Command size={12} aria-hidden="true" />
            <span>K</span>
          </button>

          <button
            type="button"
            onClick={onToggleTheme}
            className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-[var(--border-subtle)] bg-[var(--bg-surface)] text-[var(--text-secondary)] transition-colors hover:border-[var(--border-strong)] hover:text-[var(--text-primary)]"
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            {theme === "dark" ? <Sun size={15} aria-hidden="true" /> : <Moon size={15} aria-hidden="true" />}
          </button>

          <a
            href={resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-8 items-center gap-1.5 rounded-md border border-[var(--border-strong)] bg-[var(--bg-surface)] px-3 font-mono text-xs font-medium text-[var(--text-primary)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
          >
            <FileText size={13} aria-hidden="true" />
            <span>Resume / CV</span>
          </a>

          <a
            href="#contact"
            className="inline-flex h-8 items-center rounded-md bg-[var(--accent)] px-3.5 text-xs font-semibold text-white transition-colors hover:bg-[var(--accent-hover)]"
          >
            Contact
          </a>
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={onToggleTheme}
            className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-[var(--border-subtle)] bg-[var(--bg-surface)] text-[var(--text-secondary)]"
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            {theme === "dark" ? <Sun size={15} aria-hidden="true" /> : <Moon size={15} aria-hidden="true" />}
          </button>

          <button
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-[var(--border-subtle)] bg-[var(--bg-surface)] text-[var(--text-primary)]"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? <X size={17} aria-hidden="true" /> : <Menu size={17} aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {isMenuOpen && (
        <div
          id="mobile-menu"
          className="border-t border-[var(--border-subtle)] bg-[var(--bg-canvas)] px-4 pb-5 pt-3 md:hidden"
        >
          <div className="flex flex-col space-y-1">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="rounded-md px-3 py-2.5 font-mono text-xs uppercase tracking-wider text-[var(--text-secondary)] hover:bg-[var(--bg-surface)] hover:text-[var(--text-primary)]"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="mt-3 grid grid-cols-2 gap-2 border-t border-[var(--border-subtle)] pt-3">
            <a
              href={resumeUrl}
              target="_blank"
              rel="noreferrer"
              onClick={closeMenu}
              className="inline-flex h-9 items-center justify-center gap-1.5 rounded-md border border-[var(--border-strong)] bg-[var(--bg-surface)] font-mono text-xs font-medium text-[var(--text-primary)]"
            >
              <FileText size={13} aria-hidden="true" />
              <span>Resume / CV</span>
            </a>
            <a
              href="#contact"
              onClick={closeMenu}
              className="inline-flex h-9 items-center justify-center rounded-md bg-[var(--accent)] text-xs font-semibold text-white"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
