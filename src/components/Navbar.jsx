import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

const navItems = [
  { label: "Work", href: "#work" },
  { label: "Approach", href: "#engineering" },
  { label: "About", href: "#about" },
];

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const updateScrollState = () => setIsScrolled(window.scrollY > 24);
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };

    window.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("keydown", closeOnEscape);
    updateScrollState();

    return () => {
      window.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", isMenuOpen);
    return () => document.body.classList.remove("menu-open");
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={"site-header" + (isScrolled ? " is-scrolled" : "")}>
      <nav className="nav-shell" aria-label="Main navigation">
        <a className="wordmark" href="#top" onClick={closeMenu} aria-label="Akash Kalyan, back to top">
          <span className="wordmark-mark" aria-hidden="true">A<span>K</span></span>
          <span className="wordmark-name">Akash Kalyan<small>Software engineer</small></span>
        </a>

        <div className="desktop-nav">
          {navItems.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
          <a className="nav-contact" href="#contact">Let’s talk <ArrowUpRight size={15} aria-hidden="true" /></a>
        </div>

        <button
          className="menu-toggle"
          type="button"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>

        <div className={"mobile-nav" + (isMenuOpen ? " is-open" : "")} id="mobile-navigation" aria-hidden={!isMenuOpen}>
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={closeMenu} tabIndex={isMenuOpen ? 0 : -1}>{item.label}</a>
          ))}
          <a href="#contact" onClick={closeMenu} tabIndex={isMenuOpen ? 0 : -1}>Let’s talk <ArrowUpRight size={16} /></a>
          <a href={portfolioData.socialLinks[0].url} target="_blank" rel="noreferrer" onClick={closeMenu} tabIndex={isMenuOpen ? 0 : -1}>GitHub <ArrowUpRight size={16} /></a>
        </div>
      </nav>
    </header>
  );
};
