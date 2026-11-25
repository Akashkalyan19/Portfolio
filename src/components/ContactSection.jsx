import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ArrowUpRight, Check, Copy, Download, Github, Linkedin, Mail, Phone, Send } from "lucide-react";
import { portfolioData } from "../data/portfolioData";
import { useCopyEmail } from "../hooks/useCopyEmail";
import { SectionHeader } from "./SectionHeader";

const SOCIAL_ICONS = {
  GitHub: Github,
  LinkedIn: Linkedin,
};

export const ContactSection = () => {
  const formRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: "idle", message: "" });
  const { email, phone, resumeUrl, resumeFilename } = portfolioData.personalInfo;
  const { copied, copyEmail } = useCopyEmail(email);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, VITE_EMAILJS_PUBLIC_KEY } =
      import.meta.env;

    if (!VITE_EMAILJS_SERVICE_ID || !VITE_EMAILJS_TEMPLATE_ID || !VITE_EMAILJS_PUBLIC_KEY) {
      setStatus({
        type: "error",
        message: "Form credentials are missing. Please copy my email directly.",
      });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: "idle", message: "" });

    try {
      await emailjs.sendForm(
        VITE_EMAILJS_SERVICE_ID,
        VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        VITE_EMAILJS_PUBLIC_KEY
      );
      formRef.current.reset();
      setStatus({
        type: "success",
        message: "Message sent! Thanks for reaching out—I will get back to you shortly.",
      });
    } catch {
      setStatus({
        type: "error",
        message: "Unable to send via form right now. Please email me directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="border-t border-[var(--border-subtle)] py-16 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          index="05"
          eyebrow="Contact"
          id="contact-heading"
          title="Let’s work together."
          description="Open to Full-Stack and Backend Software Engineer roles. Reach out directly or send a message below."
        />

        <div className="grid gap-6 lg:grid-cols-12">
          {/* Left: Direct Channels & Resume */}
          <div
            data-reveal
            className="flex flex-col justify-between rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-6 lg:col-span-5"
          >
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--accent)]">
                Direct Channels
              </p>
              <h3 className="font-display mt-2 text-xl font-semibold text-[var(--text-primary)]">
                Fastest ways to connect
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">
                Looking for an engineer who cares about clean UI and solid PostgreSQL/Node.js
                architecture? Copy my email or download my resume PDF directly.
              </p>

              {/* Email Copy Box */}
              <div className="mt-5 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-canvas)] p-3.5">
                <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--text-muted)]">
                  Email
                </span>
                <div className="mt-1.5 flex flex-wrap items-center justify-between gap-2">
                  <a
                    href={`mailto:${email}`}
                    className="inline-flex items-center gap-2 font-mono text-xs font-medium text-[var(--text-primary)] hover:text-[var(--accent)] sm:text-sm"
                  >
                    <Mail size={14} className="shrink-0 text-[var(--accent)]" aria-hidden="true" />
                    <span className="break-all">{email}</span>
                  </a>

                  <button
                    type="button"
                    onClick={copyEmail}
                    className="inline-flex h-7 items-center gap-1.5 rounded border border-[var(--border-strong)] bg-[var(--bg-surface)] px-2.5 font-mono text-[11px] text-[var(--text-primary)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
                  >
                    {copied ? (
                      <>
                        <Check size={12} className="text-emerald-500" aria-hidden="true" />
                        <span className="text-emerald-500">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy size={12} aria-hidden="true" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Phone */}
              <div className="mt-3 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-canvas)] p-3.5">
                <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--text-muted)]">
                  Phone
                </span>
                <div className="mt-1.5">
                  <a
                    href={`tel:${phone.replace(/\s+/g, "")}`}
                    className="inline-flex items-center gap-2 font-mono text-xs font-medium text-[var(--text-primary)] hover:text-[var(--accent)] sm:text-sm"
                  >
                    <Phone size={14} className="text-[var(--accent)]" aria-hidden="true" />
                    <span>{phone}</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-2 border-t border-[var(--border-subtle)] pt-5">
              {portfolioData.socialLinks.map((link) => {
                const Icon = SOCIAL_ICONS[link.name] || ArrowUpRight;
                return (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-9 items-center gap-1.5 rounded-md border border-[var(--border-strong)] bg-[var(--bg-canvas)] px-3.5 text-xs font-medium text-[var(--text-primary)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
                  >
                    <Icon size={14} aria-hidden="true" />
                    <span>{link.name}</span>
                    <ArrowUpRight size={12} aria-hidden="true" />
                  </a>
                );
              })}

              <a
                href={resumeUrl}
                download={resumeFilename}
                className="inline-flex h-9 items-center gap-1.5 rounded-md border border-[var(--border-strong)] bg-[var(--bg-canvas)] px-3.5 text-xs font-medium text-[var(--text-primary)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                <Download size={14} aria-hidden="true" />
                <span>Resume PDF</span>
              </a>
            </div>
          </div>

          {/* Right: Clean EmailJS Form */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            data-reveal
            className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-6 lg:col-span-7"
          >
            <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-4">
              <span className="font-mono text-xs uppercase tracking-wider text-[var(--text-muted)]">
                Send a note
              </span>
              <span className="font-mono text-[11px] text-[var(--text-muted)]">
                Direct to inbox
              </span>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-1.5 block font-mono text-[11px] uppercase tracking-wider text-[var(--text-secondary)]"
                >
                  Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Jane Smith"
                  required
                  className="h-11 w-full rounded-md border border-[var(--border-subtle)] bg-[var(--bg-canvas)] px-3.5 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] transition-colors focus:border-[var(--accent)] focus:outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-1.5 block font-mono text-[11px] uppercase tracking-wider text-[var(--text-secondary)]"
                >
                  Email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="jane@company.com"
                  required
                  className="h-11 w-full rounded-md border border-[var(--border-subtle)] bg-[var(--bg-canvas)] px-3.5 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] transition-colors focus:border-[var(--accent)] focus:outline-none"
                />
              </div>
            </div>

            <div className="mt-4">
              <label
                htmlFor="contact-message"
                className="mb-1.5 block font-mono text-[11px] uppercase tracking-wider text-[var(--text-secondary)]"
              >
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={4}
                placeholder="Tell me about the role, team, or project..."
                required
                className="w-full resize-y rounded-md border border-[var(--border-subtle)] bg-[var(--bg-canvas)] px-3.5 py-3 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] transition-colors focus:border-[var(--accent)] focus:outline-none"
              />
            </div>

            <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex h-11 items-center gap-2 rounded-md bg-[var(--accent)] px-6 text-sm font-semibold text-white transition-colors hover:bg-[var(--accent-hover)] disabled:cursor-wait disabled:opacity-60"
              >
                <Send size={14} aria-hidden="true" />
                <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
              </button>

              {status.message && (
                <p
                  role="status"
                  aria-live="polite"
                  className={`text-xs font-medium ${
                    status.type === "error" ? "text-rose-500" : "text-emerald-500"
                  }`}
                >
                  {status.message}
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
