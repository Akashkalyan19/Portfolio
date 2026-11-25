/* eslint-disable react/prop-types */
import { useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowRight,
  Check,
  Copy,
  Download,
  ExternalLink,
  Search,
  SunMoon,
  X,
} from "lucide-react";
import { portfolioData } from "../data/portfolioData";
import { useCopyEmail } from "../hooks/useCopyEmail";

export const CommandPalette = ({ isOpen, onClose, theme, onToggleTheme }) => {
  const [query, setQuery] = useState("");
  const [activeIdx, setActiveIdx] = useState(0);
  const inputRef = useRef(null);
  const { personalInfo, socialLinks } = portfolioData;
  const { copied, copyEmail } = useCopyEmail(personalInfo.email);

  const commands = useMemo(
    () => [
      {
        id: "projects",
        group: "Navigate",
        label: "Featured Projects",
        hint: "#projects",
        run: () => {
          document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
          onClose();
        },
      },
      {
        id: "ticketblitz",
        group: "Projects",
        label: "TicketBlitz — Concurrency Seat Booking",
        hint: "01",
        run: () => {
          document.getElementById("ticketblitz")?.scrollIntoView({ behavior: "smooth" });
          onClose();
        },
      },
      {
        id: "prodwatch",
        group: "Projects",
        label: "ProdWatch — Incident & Audit System",
        hint: "02",
        run: () => {
          document.getElementById("prodwatch")?.scrollIntoView({ behavior: "smooth" });
          onClose();
        },
      },
      {
        id: "chitchatgpt",
        group: "Projects",
        label: "ChitChatGPT — WebRTC & Gemini Chat",
        hint: "03",
        run: () => {
          document.getElementById("chitchatgpt")?.scrollIntoView({ behavior: "smooth" });
          onClose();
        },
      },
      {
        id: "experience",
        group: "Navigate",
        label: "Experience & Education",
        hint: "#experience",
        run: () => {
          document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" });
          onClose();
        },
      },
      {
        id: "skills",
        group: "Navigate",
        label: "Technical Stack",
        hint: "#skills",
        run: () => {
          document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" });
          onClose();
        },
      },
      {
        id: "about",
        group: "Navigate",
        label: "Engineering Mindset",
        hint: "#about",
        run: () => {
          document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
          onClose();
        },
      },
      {
        id: "contact",
        group: "Navigate",
        label: "Contact & Message Form",
        hint: "#contact",
        run: () => {
          document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
          onClose();
        },
      },
      {
        id: "copy-email",
        group: "Actions",
        label: copied ? `Copied ${personalInfo.email}` : `Copy Email (${personalInfo.email})`,
        hint: "Clipboard",
        icon: copied ? Check : Copy,
        run: () => {
          copyEmail();
        },
      },
      {
        id: "download-resume",
        group: "Actions",
        label: "Download Resume PDF",
        hint: "PDF",
        icon: Download,
        run: () => {
          const link = document.createElement("a");
          link.href = personalInfo.resumeUrl;
          link.download = personalInfo.resumeFilename;
          link.click();
          onClose();
        },
      },
      {
        id: "theme",
        group: "Actions",
        label: `Switch to ${theme === "dark" ? "Light" : "Dark"} Mode`,
        hint: "Theme",
        icon: SunMoon,
        run: () => {
          onToggleTheme();
          onClose();
        },
      },
      ...socialLinks.map((social) => ({
        id: social.name.toLowerCase(),
        group: "Links",
        label: `Open ${social.name} (${social.handle})`,
        hint: "External",
        icon: ExternalLink,
        run: () => {
          window.open(social.url, "_blank", "noopener,noreferrer");
          onClose();
        },
      })),
    ],
    [copied, copyEmail, onClose, onToggleTheme, personalInfo, socialLinks, theme]
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return commands;
    return commands.filter(
      (cmd) =>
        cmd.label.toLowerCase().includes(q) ||
        cmd.group.toLowerCase().includes(q) ||
        cmd.hint.toLowerCase().includes(q)
    );
  }, [commands, query]);

  useEffect(() => {
    if (!isOpen) {
      setQuery("");
      setActiveIdx(0);
      return undefined;
    }

    const timer = window.setTimeout(() => inputRef.current?.focus(), 10);
    document.body.style.overflow = "hidden";

    return () => {
      window.clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    setActiveIdx(0);
  }, [query]);

  useEffect(() => {
    if (!isOpen) return undefined;

    const handleKey = (e) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        setActiveIdx((prev) => (filtered.length ? (prev + 1) % filtered.length : 0));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setActiveIdx((prev) =>
          filtered.length ? (prev - 1 + filtered.length) % filtered.length : 0
        );
      } else if (e.key === "Enter" && filtered[activeIdx]) {
        e.preventDefault();
        filtered[activeIdx].run();
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [activeIdx, filtered, isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center bg-black/70 px-4 pt-20 backdrop-blur-xs sm:pt-28"
      role="dialog"
      aria-modal="true"
      aria-label="Quick command palette"
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg overflow-hidden rounded-xl border border-[var(--border-strong)] bg-[var(--bg-surface)] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 border-b border-[var(--border-subtle)] px-4 py-3">
          <Search size={16} className="shrink-0 text-[var(--accent)]" aria-hidden="true" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Jump to project, copy email, download resume..."
            className="w-full bg-transparent text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none"
            aria-label="Search commands"
          />
          <button
            type="button"
            onClick={onClose}
            className="rounded border border-[var(--border-subtle)] p-1 text-[var(--text-muted)] hover:text-[var(--text-primary)]"
            aria-label="Close command palette"
          >
            <X size={14} aria-hidden="true" />
          </button>
        </div>

        <ul className="max-h-80 overflow-y-auto p-2" role="listbox">
          {filtered.length === 0 ? (
            <li className="px-3 py-6 text-center font-mono text-xs text-[var(--text-muted)]">
              No matching commands
            </li>
          ) : (
            filtered.map((cmd, index) => {
              const Icon = cmd.icon || ArrowRight;
              const active = index === activeIdx;
              return (
                <li key={cmd.id}>
                  <button
                    type="button"
                    onClick={cmd.run}
                    onMouseEnter={() => setActiveIdx(index)}
                    className={`flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left text-sm transition-colors ${
                      active
                        ? "bg-[var(--accent-soft)] text-[var(--text-primary)]"
                        : "text-[var(--text-secondary)] hover:bg-[var(--bg-elevated)]"
                    }`}
                  >
                    <span className="flex items-center gap-2.5">
                      <Icon
                        size={14}
                        className={active ? "text-[var(--accent)]" : "text-[var(--text-muted)]"}
                        aria-hidden="true"
                      />
                      <span>{cmd.label}</span>
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--text-muted)]">
                      {cmd.hint}
                    </span>
                  </button>
                </li>
              );
            })
          )}
        </ul>

        <div className="flex items-center justify-between border-t border-[var(--border-subtle)] bg-[var(--bg-canvas)] px-4 py-2 font-mono text-[10px] text-[var(--text-muted)]">
          <span>↑↓ Navigate · ↵ Run</span>
          <span>ESC Close</span>
        </div>
      </div>
    </div>
  );
};
