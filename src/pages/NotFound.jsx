import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";

export const NotFound = () => {
  useTheme();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[var(--bg-canvas)] px-4 text-center text-[var(--text-primary)]">
      <p className="font-mono text-xs uppercase tracking-widest text-[var(--accent)]">[404]</p>
      <h1 className="font-display mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
        Route not found
      </h1>
      <p className="mt-2 max-w-md text-sm text-[var(--text-secondary)]">
        The requested path does not exist. Return to Akash Kalyan&apos;s portfolio.
      </p>
      <Link
        to="/"
        className="mt-6 inline-flex h-10 items-center gap-2 rounded-md bg-[var(--accent)] px-4 text-xs font-semibold text-white transition-colors hover:bg-[var(--accent-hover)]"
      >
        <ArrowLeft size={14} aria-hidden="true" />
        <span>Back to Portfolio</span>
      </Link>
    </main>
  );
};
