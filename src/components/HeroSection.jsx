import { ArrowDownRight, ArrowUpRight, Database, Github, Server, ShieldCheck } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

const SystemVisual = () => (
  <div className="system-card" aria-label="A visual representation of Akash's backend engineering approach">
    <div className="system-card-head">
      <span>ENGINEERING PROFILE / 2026</span>
      <span className="live-label"><i /> OPEN TO WORK</span>
    </div>
    <div className="system-card-title">
      <span>My default setting</span>
      <strong>Make it work.<br />Make it hold.</strong>
    </div>
    <div className="system-map" aria-hidden="true">
      <div className="system-node">
        <span className="node-icon"><Server size={18} /></span>
        <span><small>01 / INTERFACE</small><b>Express API</b></span>
        <em>VALIDATE</em>
      </div>
      <div className="system-connector"><i /><span>safe requests</span><i /></div>
      <div className="system-node">
        <span className="node-icon"><Database size={18} /></span>
        <span><small>02 / DATA</small><b>PostgreSQL</b></span>
        <em>PROTECT</em>
      </div>
      <div className="system-connector"><i /><span>clear ownership</span><i /></div>
      <div className="system-node">
        <span className="node-icon"><ShieldCheck size={18} /></span>
        <span><small>03 / OUTCOME</small><b>Reliable product</b></span>
        <em>DELIVER</em>
      </div>
    </div>
    <div className="proof-chip">
      <span className="proof-number">20<span>:1</span></span>
      <p>concurrent requests tested.<br /><strong>One valid booking.</strong></p>
      <a href="#ticketblitz" aria-label="See the TicketBlitz concurrency test case study"><ArrowDownRight size={22} /></a>
    </div>
  </div>
);

export const HeroSection = () => {
  const { name, role, intro } = portfolioData.personalInfo;
  const github = portfolioData.socialLinks.find((link) => link.name === "GitHub");

  return (
    <section className="hero section-wrap" id="top" aria-labelledby="hero-title">
      <div className="hero-topline">
        <p><span className="status-pip" /> Available for backend & full-stack opportunities</p>
        <span>PORTFOLIO / {new Date().getFullYear()}</span>
      </div>

      <div className="hero-grid">
        <div className="hero-copy">
          <p className="hero-name"><span>Hello, I’m {name}.</span> {role}</p>
          <h1 id="hero-title">
            Backend brains.<br />
            <em>Product instincts.</em>
          </h1>
          <div className="hero-bottom">
            <p className="hero-intro">{intro}</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">See selected work <ArrowDownRight size={18} aria-hidden="true" /></a>
              {github && <a className="round-link" href={github.url} target="_blank" rel="noreferrer" aria-label="View Akash's GitHub profile"><Github size={21} /></a>}
              <a className="text-link" href="#contact">Start a conversation <ArrowUpRight size={16} /></a>
            </div>
          </div>
        </div>
        <SystemVisual />
      </div>

      <div className="hero-footer">
        <span>NODE.JS</span><i>✳</i><span>POSTGRESQL</span><i>✳</i><span>REACT</span><i>✳</i><span>SYSTEM DESIGN</span><i>✳</i><span>API DEVELOPMENT</span>
      </div>
    </section>
  );
};
