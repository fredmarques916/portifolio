import React from 'react';
import './LanguageToggle.css';

export function LanguageToggle({ currentLang, onToggle, label }) {
  return (
    <button
      type="button"
      className="lang-toggle-btn"
      onClick={onToggle}
      aria-label={label}
      title={label}
    >
      <span className="lang-indicator">
        <span className={`lang-badge ${currentLang === 'pt' ? 'active' : ''}`}>PT</span>
        <span className="lang-divider">/</span>
        <span className={`lang-badge ${currentLang === 'en' ? 'active' : ''}`}>EN</span>
      </span>
      <span className="sr-only">{label}</span>
    </button>
  );
}

export default LanguageToggle;
