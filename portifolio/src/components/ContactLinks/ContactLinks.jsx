import React, { useState } from 'react';
import './ContactLinks.css';

export function ContactLinks({ contact, t }) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contact.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
      setCopied(false);
    }
  };

  return (
    <div className="contact-links-grid">
      {/* Email Card with Copy Action */}
      <div className="contact-card glass-card">
        <div className="contact-card-icon-wrapper">
          <svg className="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect width="20" height="16" x="2" y="4" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
          </svg>
        </div>
        <div className="contact-card-content">
          <span className="contact-card-tag">{t.contact.emailLabel}</span>
          <a href={`mailto:${contact.email}`} className="contact-card-link">
            {contact.email}
          </a>
        </div>
        <button
          type="button"
          onClick={handleCopyEmail}
          className={`copy-btn ${copied ? 'copied' : ''}`}
          aria-label={t.contact.copyEmail}
          title={t.contact.copyEmail}
        >
          {copied ? (
            <>
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M20 6 9 17l-5-5" />
              </svg>
              <span>{t.contact.emailCopied}</span>
            </>
          ) : (
            <>
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
              </svg>
              <span>{t.contact.copyEmail}</span>
            </>
          )}
        </button>
      </div>

      {/* GitHub Card */}
      <a
        href={contact.github}
        target="_blank"
        rel="noopener noreferrer"
        className="contact-card glass-card interactive-card"
      >
        <div className="contact-card-icon-wrapper">
          <svg className="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
            <path d="M9 18c-4.51 2-5-2-7-2" />
          </svg>
        </div>
        <div className="contact-card-content">
          <span className="contact-card-tag">{t.contact.githubLabel}</span>
          <span className="contact-card-link">github.com/fredmarques916</span>
        </div>
        <span className="arrow-external">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M7 17 17 7M7 7h10v10" />
          </svg>
        </span>
      </a>

      {/* LinkedIn Card (Configurable) */}
      <a
        href={contact.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="contact-card glass-card interactive-card"
      >
        <div className="contact-card-icon-wrapper">
          <svg className="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect width="4" height="12" x="2" y="9" />
            <circle cx="4" cy="4" r="2" />
          </svg>
        </div>
        <div className="contact-card-content">
          <span className="contact-card-tag">{t.contact.linkedinLabel}</span>
          <span className="contact-card-link">in/fredmarques916</span>
        </div>
        <span className="arrow-external">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M7 17 17 7M7 7h10v10" />
          </svg>
        </span>
      </a>

      {/* WhatsApp Card (Configurable) */}
      <a
        href={contact.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="contact-card glass-card interactive-card"
      >
        <div className="contact-card-icon-wrapper">
          <svg className="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
        </div>
        <div className="contact-card-content">
          <span className="contact-card-tag">{t.contact.whatsappLabel}</span>
          <span className="contact-card-link">Contato via WhatsApp</span>
        </div>
        <span className="arrow-external">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M7 17 17 7M7 7h10v10" />
          </svg>
        </span>
      </a>
    </div>
  );
}

export default ContactLinks;
