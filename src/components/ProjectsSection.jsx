/* eslint-disable react/prop-types */
import { ArrowRight, ArrowUpRight, Check, Github } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

const ProjectLinks = ({ project }) => (
  <div className="project-links">
    <a className="project-link-primary" href={project.demoUrl} target="_blank" rel="noreferrer">
      View live project <ArrowUpRight size={17} aria-hidden="true" />
    </a>
    <a className="project-link-secondary" href={project.repoUrl} target="_blank" rel="noreferrer">
      <Github size={16} aria-hidden="true" /> Source code
    </a>
  </div>
);

const BrowserFrame = ({ project, label }) => (
  <div className="browser-frame">
    <div className="browser-bar">
      <span className="window-dots"><i /><i /><i /></span>
      <span>{label}</span>
      <ArrowUpRight size={14} aria-hidden="true" />
    </div>
    <div className="project-image-wrap">
      <img src={project.image} alt={project.imageAlt} width="1712" height="869" loading="lazy" decoding="async" />
    </div>
  </div>
);

const FeaturedProject = ({ project, index }) => (
  <article className={`project-card project-card-${index + 1}`} id={project.id} aria-labelledby={`${project.id}-title`} data-reveal>
    <div className="project-card-copy">
      <div className="project-card-topline">
        <span>{project.number} / FEATURED BUILD</span>
        <span>{index === 0 ? "CONCURRENCY" : "SECURITY & AUDIT"}</span>
      </div>
      <h3 id={`${project.id}-title`}>{project.title}</h3>
      <p className="project-subtitle">{project.subtitle}</p>
      <div className="project-story">
        <div><span>THE PROBLEM</span><p>{project.challenge}</p></div>
        <div><span>THE APPROACH</span><p>{project.approach}</p></div>
      </div>
      <div className="project-outcome"><Check size={17} aria-hidden="true" /><p>{project.outcome}</p></div>
      <div className="tag-list" aria-label="Technologies used">
        {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
      </div>
      <ProjectLinks project={project} />
      {project.demoNote && <p className="demo-note">{project.demoNote}</p>}
    </div>
    <a className="project-card-visual" href={project.demoUrl} target="_blank" rel="noreferrer" aria-label={`Open ${project.title} live project`}>
      <span className="visual-note">{index === 0 ? "NO DOUBLE BOOKINGS" : "EVERY CHANGE, TRACEABLE"} <ArrowUpRight size={15} /></span>
      <BrowserFrame project={project} label={index === 0 ? "ticketblitz / live booking" : "prodwatch / incident control"} />
      <span className="visual-footnote">{index === 0 ? "TRANSACTION-SAFE BOOKING FLOW" : "ROLE-BASED INCIDENT WORKSPACE"}<span>0{index + 1}</span></span>
    </a>
  </article>
);

export const ProjectsSection = () => {
  const [ticketBlitz, prodWatch, chitChatGPT] = portfolioData.projects;

  return (
    <section className="work-section" id="work" aria-labelledby="work-title">
      <div className="section-wrap">
        <div className="section-kicker" data-reveal><span>01</span><span>Selected work</span><i /></div>
        <div className="section-intro" data-reveal>
          <h2 className="section-heading" id="work-title">Real products.<br /><em>Real engineering decisions.</em></h2>
          <div className="section-sidecopy"><span>FROM IDEA TO IMPLEMENTATION</span><p>A selection of full-stack builds, with the backend thinking brought to the front.</p></div>
        </div>

        <div className="featured-projects">
          <FeaturedProject project={ticketBlitz} index={0} />
          <FeaturedProject project={prodWatch} index={1} />
        </div>

        <article className="supporting-project" aria-labelledby="chitchat-title" data-reveal>
          <a className="supporting-project-image" href={chitChatGPT.demoUrl} target="_blank" rel="noreferrer" aria-label="Open ChitChatGPT live project">
            <img src={chitChatGPT.image} alt={chitChatGPT.imageAlt} width="1916" height="870" loading="lazy" decoding="async" />
            <span>OPEN LIVE PROJECT <ArrowUpRight size={16} /></span>
          </a>
          <div className="supporting-project-copy">
            <div className="project-card-topline"><span>{chitChatGPT.number} / ALSO BUILT</span><span>REAL-TIME</span></div>
            <h3 id="chitchat-title">{chitChatGPT.title}</h3>
            <p className="project-subtitle">{chitChatGPT.subtitle}</p>
            <p className="supporting-description">{chitChatGPT.description}</p>
            <div className="tag-list" aria-label="Technologies used">{chitChatGPT.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
            <ProjectLinks project={chitChatGPT} />
          </div>
        </article>

        <a className="github-cta" href={portfolioData.socialLinks[0].url} target="_blank" rel="noreferrer" data-reveal>
          <span>There’s more in the repository.</span>
          <strong>Explore my GitHub <ArrowRight size={26} /></strong>
        </a>
      </div>
    </section>
  );
};
