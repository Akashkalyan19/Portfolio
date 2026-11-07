import { ArrowUp } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export const Footer = () => (
  <footer className="site-footer">
    <div className="footer-inner">
      <p>© {new Date().getFullYear()} {portfolioData.personalInfo.name}</p>
      <p>Built with care, from the data layer up.</p>
      <a href="#top" aria-label="Back to top">
        Back to top <ArrowUp size={15} aria-hidden="true" />
      </a>
    </div>
  </footer>
);
