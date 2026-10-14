import React from 'react';
import ContactLinks from '../../components/ContactLinks/ContactLinks';
import './Contact.css';

export function Contact({ profile, t }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="contact" className="portfolio-section contact-section" aria-labelledby="contact-heading">
      <div className="section-container">
        <div className="section-tag">{t.contact.tag}</div>
        <h2 id="contact-heading" className="section-title">
          {t.contact.title}
        </h2>
        <p className="section-subtitle">{t.contact.subtitle}</p>

        <ContactLinks
          contact={profile.contact}
          t={t}
        />

        {/* Footer */}
        <footer className="site-footer">
          <div className="footer-content">
            <div className="footer-brand">
              <span className="footer-signature font-mono">
                {t.footer.signature}
              </span>
              <p className="footer-subtext">{t.footer.rights}</p>
            </div>

            <button
              type="button"
              className="back-to-top-btn"
              onClick={scrollToTop}
              aria-label={t.footer.backToTop}
            >
              <span>{t.footer.backToTop}</span>
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="m18 15-6-6-6 6" />
              </svg>
            </button>
          </div>
        </footer>
      </div>
    </section>
  );
}

export default Contact;
