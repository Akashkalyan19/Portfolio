import { ArrowUpRight, GraduationCap } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export const AboutSection = () => {
  const { degree, institution, graduation, role } = portfolioData.personalInfo;
  const linkedin = portfolioData.socialLinks.find((link) => link.name === "LinkedIn");

  return (
    <section className="about-section section-wrap" id="about" aria-labelledby="about-title">
      <div className="section-kicker" data-reveal><span>03</span><span>Behind the code</span><i /></div>
      <div className="about-layout">
        <div className="about-statement" data-reveal>
          <span className="about-spark" aria-hidden="true">✳</span>
          <h2 className="section-heading" id="about-title">Curious about the product.<br /><em>Serious about the details.</em></h2>
        </div>
        <div className="about-copy" data-reveal>
          <p>I’m Akash, a {role.toLowerCase()} interested in how APIs, relational data, and failure handling fit together. I enjoy building complete products while paying close attention to what the system must keep true.</p>
          <p>My sweet spot is turning a fuzzy product requirement into a clear data model, a dependable API, and an interface people can actually use.</p>
          {linkedin && <a className="text-link" href={linkedin.url} target="_blank" rel="noreferrer">More about my journey <ArrowUpRight size={16} /></a>}
        </div>
      </div>
      <div className="education-card" data-reveal>
        <span className="education-icon"><GraduationCap size={28} aria-hidden="true" /></span>
        <div><span>EDUCATION / {graduation}</span><h3>{degree}</h3><p>{institution}</p></div>
        <span className="education-stamp">B.TECH<br /><strong>’{graduation.slice(-2)}</strong></span>
      </div>
    </section>
  );
};
