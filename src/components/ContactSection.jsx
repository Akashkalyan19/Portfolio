import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ArrowUpRight, Check, Copy, Github, Linkedin, Mail } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

const socialIcons = { GitHub: Github, LinkedIn: Linkedin };

export const ContactSection = () => {
  const formRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [status, setStatus] = useState({ type: "idle", message: "" });
  const { email } = portfolioData.personalInfo;

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setIsCopied(true);
      window.setTimeout(() => setIsCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, VITE_EMAILJS_PUBLIC_KEY } = import.meta.env;
    if (!VITE_EMAILJS_SERVICE_ID || !VITE_EMAILJS_TEMPLATE_ID || !VITE_EMAILJS_PUBLIC_KEY) {
      setStatus({ type: "error", message: "This form isn’t configured right now. Please email me directly." });
      return;
    }
    setIsSubmitting(true);
    setStatus({ type: "idle", message: "" });
    try {
      await emailjs.sendForm(VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, formRef.current, VITE_EMAILJS_PUBLIC_KEY);
      formRef.current.reset();
      setStatus({ type: "success", message: "Message sent. Thanks for reaching out—I’ll get back to you." });
    } catch {
      setStatus({ type: "error", message: "The message could not be sent. Please email me directly instead." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-title">
      <div className="section-wrap">
        <div className="section-kicker" data-reveal><span>04</span><span>Say hello</span><i /></div>
        <div className="contact-layout">
          <div className="contact-copy" data-reveal>
            <p className="contact-overline">HAVE A ROLE, PROJECT, OR JUST A GOOD QUESTION?</p>
            <h2 id="contact-title">Let’s build<br /><em>something solid.</em></h2>
            <p>I’m currently open to junior backend and backend-focused full-stack opportunities. If you think I’d be a good fit, my inbox is open.</p>
            <div className="email-row">
              <a href={"mailto:" + email}><Mail size={18} />{email}</a>
              <button type="button" onClick={copyEmail} aria-label="Copy email address">{isCopied ? <Check size={17} /> : <Copy size={17} />}<span>{isCopied ? "Copied" : "Copy"}</span></button>
            </div>
            <div className="social-links">
              {portfolioData.socialLinks.map((link) => {
                const Icon = socialIcons[link.name];
                return <a key={link.name} href={link.url} target="_blank" rel="noreferrer"><Icon size={17} />{link.name}<ArrowUpRight size={14} /></a>;
              })}
            </div>
          </div>
          <form className="contact-form" ref={formRef} onSubmit={handleSubmit} data-reveal>
            <div className="form-heading"><span>DROP ME A LINE</span><span aria-hidden="true">↗</span></div>
            <label htmlFor="contact-name">Your name</label>
            <input id="contact-name" name="name" type="text" autoComplete="name" placeholder="Jane Smith" required />
            <label htmlFor="contact-email">Your email</label>
            <input id="contact-email" name="email" type="email" autoComplete="email" placeholder="jane@company.com" required />
            <label htmlFor="contact-message">What’s on your mind?</label>
            <textarea id="contact-message" name="message" rows="4" placeholder="Tell me about the role, team, or project…" required />
            <button className="button form-submit" type="submit" disabled={isSubmitting}>{isSubmitting ? "Sending…" : "Send message"}<ArrowUpRight size={17} /></button>
            <p className={"form-status" + (status.type === "error" ? " is-error" : "")} role="status" aria-live="polite">{status.message}</p>
          </form>
        </div>
      </div>
    </section>
  );
};
