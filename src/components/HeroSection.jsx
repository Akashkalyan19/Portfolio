import { useEffect, useRef, useState } from "react";
import {
  ArrowDownRight,
  Check,
  Copy,
  Download,
  Github,
  Linkedin,
  Play,
  RotateCcw,
  Terminal,
} from "lucide-react";
import { portfolioData } from "../data/portfolioData";
import { useCopyEmail } from "../hooks/useCopyEmail";

const INITIAL_WORKERS = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  state: "idle",
}));

const AUDIT_STATES = ["OPEN", "INVESTIGATING", "MITIGATED", "RESOLVED"];

const InteractiveSystemConsole = () => {
  const [activeTab, setActiveTab] = useState("concurrency");
  const [workers, setWorkers] = useState(INITIAL_WORKERS);
  const [isRunning, setIsRunning] = useState(false);
  const [winnerId, setWinnerId] = useState(null);
  const [auditIndex, setAuditIndex] = useState(1);
  const timerIdsRef = useRef([]);

  const clearTimers = () => {
    timerIdsRef.current.forEach((id) => window.clearTimeout(id));
    timerIdsRef.current = [];
  };

  useEffect(() => {
    return () => clearTimers();
  }, []);

  const runConcurrencyTest = () => {
    if (isRunning) return;
    clearTimers();
    setIsRunning(true);
    setWinnerId(null);

    const winner = Math.floor(Math.random() * 20) + 1;
    setWorkers(INITIAL_WORKERS.map((w) => ({ ...w, state: "pending" })));

    INITIAL_WORKERS.forEach((worker, idx) => {
      const delay = 140 + ((idx * 37) % 340);
      const tid = window.setTimeout(() => {
        setWorkers((prev) =>
          prev.map((item) =>
            item.id === worker.id
              ? { ...item, state: worker.id === winner ? "booked" : "rejected" }
              : item
          )
        );
      }, delay);
      timerIdsRef.current.push(tid);
    });

    const endTid = window.setTimeout(() => {
      setWinnerId(winner);
      setIsRunning(false);
    }, 560);
    timerIdsRef.current.push(endTid);
  };

  const resetConcurrencyTest = () => {
    clearTimers();
    setIsRunning(false);
    setWinnerId(null);
    setWorkers(INITIAL_WORKERS);
  };

  const prevStatus = AUDIT_STATES[(auditIndex - 1 + AUDIT_STATES.length) % AUDIT_STATES.length];
  const currentStatus = AUDIT_STATES[auditIndex];

  const bookedCount = workers.filter((w) => w.state === "booked").length;
  const rejectedCount = workers.filter((w) => w.state === "rejected").length;

  return (
    <aside
      className="relative overflow-hidden rounded-xl border border-[var(--border-strong)] bg-[var(--bg-surface)]"
      aria-label="Interactive backend engineering simulator"
    >
      {/* Top Tab Bar */}
      <div className="flex items-center justify-between border-b border-[var(--border-subtle)] bg-[var(--bg-canvas)] px-3 py-2">
        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={() => setActiveTab("concurrency")}
            className={`inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 font-mono text-[11px] transition-colors ${
              activeTab === "concurrency"
                ? "bg-[var(--bg-surface)] font-medium text-[var(--text-primary)] shadow-2xs ring-1 ring-[var(--border-subtle)]"
                : "text-[var(--text-muted)] hover:text-[var(--text-primary)]"
            }`}
          >
            <Terminal size={11} className="text-[var(--accent)]" aria-hidden="true" />
            <span>ticketblitz.sql</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("trigger")}
            className={`inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 font-mono text-[11px] transition-colors ${
              activeTab === "trigger"
                ? "bg-[var(--bg-surface)] font-medium text-[var(--text-primary)] shadow-2xs ring-1 ring-[var(--border-subtle)]"
                : "text-[var(--text-muted)] hover:text-[var(--text-primary)]"
            }`}
          >
            <span>audit_trigger.sql</span>
          </button>
        </div>

        <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--text-muted)]">
          Interactive
        </span>
      </div>

      {/* Tab Body */}
      <div className="p-4 sm:p-5">
        {activeTab === "concurrency" ? (
          <div>
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="font-mono text-[11px] text-[var(--accent)]">
                  POST /bookings · FOR UPDATE
                </p>
                <p className="mt-0.5 text-xs text-[var(--text-secondary)]">
                  Simulate 20 simultaneous buyers targeting Seat #A12:
                </p>
              </div>
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={runConcurrencyTest}
                  disabled={isRunning}
                  className="inline-flex h-7 items-center gap-1 rounded-md bg-[var(--accent)] px-2.5 font-mono text-[11px] font-medium text-white transition-colors hover:bg-[var(--accent-hover)] disabled:opacity-60"
                >
                  <Play size={11} aria-hidden="true" />
                  <span>{isRunning ? "Locking..." : "Fire 20x"}</span>
                </button>
                {winnerId && (
                  <button
                    type="button"
                    onClick={resetConcurrencyTest}
                    className="inline-flex h-7 w-7 items-center justify-center rounded-md border border-[var(--border-subtle)] text-[var(--text-muted)] hover:text-[var(--text-primary)]"
                    aria-label="Reset concurrency simulation"
                  >
                    <RotateCcw size={12} aria-hidden="true" />
                  </button>
                )}
              </div>
            </div>

            {/* 20 Concurrent Workers Grid */}
            <div className="mt-4 grid grid-cols-5 gap-1.5">
              {workers.map((w) => {
                const stateStyles =
                  w.state === "booked"
                    ? "border-emerald-500/60 bg-emerald-500/15 text-emerald-500 font-semibold"
                    : w.state === "rejected"
                      ? "border-[var(--border-subtle)] bg-[var(--bg-canvas)] text-[var(--text-muted)]"
                      : w.state === "pending"
                        ? "border-[var(--accent)]/60 bg-[var(--accent-soft)] text-[var(--accent)]"
                        : "border-[var(--border-subtle)] bg-[var(--bg-canvas)] text-[var(--text-secondary)]";

                return (
                  <div
                    key={w.id}
                    className={`flex h-8 items-center justify-between rounded border px-2 font-mono text-[10px] transition-colors ${stateStyles}`}
                  >
                    <span>#{String(w.id).padStart(2, "0")}</span>
                    <span>
                      {w.state === "booked"
                        ? "200"
                        : w.state === "rejected"
                          ? "409"
                          : w.state === "pending"
                            ? "..."
                            : "RDY"}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Live Invariant Output */}
            <div className="mt-4 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-canvas)] px-3 py-2.5 font-mono text-[11px]">
              <div className="flex flex-wrap items-center justify-between gap-2 text-[var(--text-secondary)]">
                <span>
                  Booked:{" "}
                  <strong className="text-emerald-500">{bookedCount}</strong> · Rejected:{" "}
                  <strong className="text-[var(--text-primary)]">{rejectedCount}</strong>
                </span>
                <span className="text-[var(--text-muted)]">
                  {winnerId
                    ? `Winner Req #${String(winnerId).padStart(2, "0")} · 0 double-bookings`
                    : "Click 'Fire 20x' to verify row lock"}
                </span>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="font-mono text-[11px] text-[var(--accent)]">
                  AFTER UPDATE ON incidents
                </p>
                <p className="mt-0.5 text-xs text-[var(--text-secondary)]">
                  DB trigger captures immutable snapshots automatically:
                </p>
              </div>
              <button
                type="button"
                onClick={() => setAuditIndex((prev) => (prev + 1) % AUDIT_STATES.length)}
                className="inline-flex h-7 items-center gap-1 rounded-md bg-[var(--accent)] px-2.5 font-mono text-[11px] font-medium text-white transition-colors hover:bg-[var(--accent-hover)]"
              >
                <span>Mutate State</span>
              </button>
            </div>

            <pre className="mt-4 overflow-x-auto rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-canvas)] p-3 font-mono text-[11px] leading-relaxed text-[var(--text-secondary)]">
              <code>
                {`{\n  "table": "incidents",\n  "action": "UPDATE",\n  "old": { "status": "${prevStatus}" },\n  "new": { "status": "${currentStatus}" },\n  "changed_by": "app.current_user_id"\n}`}
              </code>
            </pre>
          </div>
        )}

        {/* Bottom Spec Strip */}
        <div className="mt-4 grid grid-cols-3 gap-2 border-t border-[var(--border-subtle)] pt-4">
          {portfolioData.heroSpecs.map((spec) => (
            <div key={spec.label} className="rounded-md bg-[var(--bg-canvas)] px-2.5 py-2">
              <p className="font-mono text-[9px] uppercase tracking-wider text-[var(--text-muted)]">
                {spec.label}
              </p>
              <p className="font-display mt-0.5 text-base font-bold tabular-nums text-[var(--text-primary)]">
                {spec.value}
              </p>
              <p className="font-mono text-[10px] text-[var(--text-secondary)]">{spec.note}</p>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};

export const HeroSection = () => {
  const { name, availability, email, resumeUrl, resumeFilename } = portfolioData.personalInfo;
  const { copied, copyEmail } = useCopyEmail(email);

  const github = portfolioData.socialLinks.find((item) => item.name === "GitHub");
  const linkedin = portfolioData.socialLinks.find((item) => item.name === "LinkedIn");

  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-[var(--border-subtle)]"
    >
      <div
        className="bg-drafting-dots pointer-events-none absolute inset-0 opacity-50"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left 7 Cols: Bold Identity & Recruiter Actions */}
          <div className="lg:col-span-7">
            {/* Availability Status */}
            <div className="inline-flex items-center gap-2 rounded-md border border-[var(--border-subtle)] bg-[var(--bg-surface)] px-3 py-1.5 font-mono text-[11px] text-[var(--text-secondary)]">
              <span className="h-2 w-2 rounded-full bg-emerald-500" aria-hidden="true" />
              <span>{availability}</span>
            </div>

            <p className="mt-6 font-mono text-xs uppercase tracking-[0.16em] text-[var(--text-muted)]">
              {name} — Full-Stack Software Engineer
            </p>

            <h1 className="font-display mt-3 text-4xl font-bold tracking-[-0.04em] text-[var(--text-primary)] sm:text-5xl lg:text-[3.65rem] lg:leading-[1.03]">
              Full-stack systems engineered to{" "}
              <em className="font-editorial font-normal italic text-[var(--accent)]">hold</em>{" "}
              under pressure.
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg">
              I build responsive React & TypeScript interfaces backed by Node.js APIs and PostgreSQL
              data layers—focusing on row-level concurrency safety, RBAC auditability, and
              real-time WebSocket workflows.
            </p>

            {/* Primary CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex h-11 items-center gap-2 rounded-md bg-[var(--accent)] px-5 text-sm font-semibold text-white transition-colors hover:bg-[var(--accent-hover)]"
              >
                <span>View Projects</span>
                <ArrowDownRight size={16} aria-hidden="true" />
              </a>

              <a
                href={resumeUrl}
                download={resumeFilename}
                className="inline-flex h-11 items-center gap-2 rounded-md border border-[var(--border-strong)] bg-[var(--bg-surface)] px-5 text-sm font-semibold text-[var(--text-primary)] transition-colors hover:border-[var(--text-primary)]"
              >
                <Download size={15} aria-hidden="true" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Direct Links + One-Click Copy Email */}
            <div className="mt-6 flex flex-wrap items-center gap-2.5">
              {github && (
                <a
                  href={github.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub profile"
                  title="GitHub"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-[var(--border-subtle)] bg-[var(--bg-surface)] text-[var(--text-secondary)] transition-colors hover:border-[var(--border-strong)] hover:text-[var(--text-primary)]"
                >
                  <Github size={16} aria-hidden="true" />
                </a>
              )}

              {linkedin && (
                <a
                  href={linkedin.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn profile"
                  title="LinkedIn"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-[var(--border-subtle)] bg-[var(--bg-surface)] text-[var(--text-secondary)] transition-colors hover:border-[var(--border-strong)] hover:text-[var(--text-primary)]"
                >
                  <Linkedin size={16} aria-hidden="true" />
                </a>
              )}

              <button
                type="button"
                onClick={copyEmail}
                className="inline-flex h-9 items-center gap-2 rounded-md border border-[var(--border-subtle)] bg-[var(--bg-surface)] px-3 font-mono text-xs text-[var(--text-secondary)] transition-colors hover:border-[var(--border-strong)] hover:text-[var(--text-primary)]"
                aria-label="Copy email address"
              >
                {copied ? (
                  <>
                    <Check size={13} className="text-emerald-500" aria-hidden="true" />
                    <span className="text-emerald-500">Copied {email}</span>
                  </>
                ) : (
                  <>
                    <Copy size={13} aria-hidden="true" />
                    <span>{email}</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Right 5 Cols: Interactive Backend Playground */}
          <div className="lg:col-span-5">
            <InteractiveSystemConsole />
          </div>
        </div>
      </div>
    </section>
  );
};
