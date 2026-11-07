import { ArrowUpRight, Braces, Database, GitBranch, Layers3 } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

const stackIcons = [Braces, Database, Layers3, GitBranch];

export const EngineeringSection = () => (
  <section className="engineering-section" id="engineering" aria-labelledby="engineering-title">
    <div className="section-wrap">
      <div className="section-kicker" data-reveal><span>02</span><span>How I engineer</span><i /></div>
      <div className="section-intro" data-reveal>
        <h2 className="section-heading" id="engineering-title">Beyond “it works<br /><em>on my machine.”</em></h2>
        <div className="section-sidecopy"><span>THINK IN INVARIANTS</span><p>I look for what could break, what must stay true, and how to prove the solution holds.</p></div>
      </div>

      <div className="principle-grid">
        {portfolioData.engineering.map((item, index) => (
          <a className="principle-card" href={item.url} target="_blank" rel="noreferrer" key={item.label} data-reveal>
            <div className="principle-card-head"><span>0{index + 1}</span><ArrowUpRight size={20} aria-hidden="true" /></div>
            <h3>{item.label}</h3>
            <p>{item.text}</p>
            <span className="principle-project">IN {item.project.toUpperCase()}</span>
          </a>
        ))}
      </div>

      <div className="stack-block" data-reveal>
        <div className="stack-heading"><span>THE TOOLBOX</span><h3>Technologies I use<br />to ship the idea.</h3></div>
        <div className="stack-list">
          {portfolioData.stack.map((group, index) => {
            const Icon = stackIcons[index];
            return (
              <div className="stack-row" key={group.category}>
                <Icon size={20} aria-hidden="true" />
                <strong>{group.category}</strong>
                <p>{group.items.join(" · ")}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  </section>
);
