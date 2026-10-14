import React, { useState, useEffect } from 'react';
import LanguageToggle from '../LanguageToggle/LanguageToggle';
import './Navigation.css';

export function Navigation({ currentLang, onToggleLang, t }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Section spy
      const sectionIds = ['hero', 'about', 'education', 'technologies', 'projects', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'about', label: t.nav.about },
    { id: 'education', label: t.nav.education },
    { id: 'technologies', label: t.nav.technologies },
    { id: 'projects', label: t.nav.projects },
    { id: 'experience', label: t.nav.experience },
    { id: 'contact', label: t.nav.contact },
  ];

  const handleLinkClick = (id) => {
    setMobileMenuOpen(false);
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        {/* Brand Monogram */}
        <a
          href="#hero"
          className="nav-brand"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick('hero');
          }}
          aria-label="Voltar ao início - Frederico Marques"
        >
          <span className="brand-badge">FM</span>
          <span className="brand-text">MARQUES</span>
          <span className="brand-dot"></span>
        </a>

        {/* Live Status Pill (Desktop) */}
        <div className="nav-status-pill desktop-only">
          <span className="status-ping"></span>
          <span className="status-label">{t.nav.status}</span>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="desktop-nav" aria-label="Navegação principal">
          <ul className="nav-list">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.id);
                  }}
                >
                  <span className="link-number">[0{navLinks.findIndex(l => l.id === link.id) + 1}]</span>
                  <span className="link-text">{link.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right Actions: Language Toggle & Mobile Hamburger */}
        <div className="nav-actions">
          <LanguageToggle
            currentLang={currentLang}
            onToggle={onToggleLang}
            label={t.common.toggleLang}
          />

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            className={`mobile-menu-btn ${mobileMenuOpen ? 'open' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Abrir menu de navegação"
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-status-pill">
          <span className="status-ping"></span>
          <span>{t.nav.status}</span>
        </div>
        <nav aria-label="Navegação móvel">
          <ul className="mobile-nav-list">
            {navLinks.map((link, idx) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={`mobile-nav-link ${activeSection === link.id ? 'active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.id);
                  }}
                >
                  <span className="mobile-link-idx">0{idx + 1}</span>
                  <span className="mobile-link-title">{link.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navigation;
