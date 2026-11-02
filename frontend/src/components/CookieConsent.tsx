import React, { useState, useEffect } from 'react';
import { ShieldCheck, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cpapnl_cookie_consent');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cpapnl_cookie_consent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cpapnl_cookie_consent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '1.25rem',
        left: '1.25rem',
        right: '1.25rem',
        maxWidth: '560px',
        margin: '0 auto',
        backgroundColor: 'var(--navy-900)',
        border: '1px solid var(--border-dark)',
        borderRadius: 'var(--radius-lg)',
        boxShadow: 'var(--shadow-xl)',
        padding: '1.25rem 1.5rem',
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        gap: '0.75rem',
        color: '#FFFFFF'
      }}
      role="region"
      aria-label="Privacy and Cookie Consent"
    >
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <ShieldCheck size={20} color="var(--teal-400)" />
          <h4 style={{ fontSize: 'var(--text-sm)', color: '#FFFFFF', margin: 0 }}>
            Canadian Privacy &amp; Cookie Consent
          </h4>
        </div>
        <button
          onClick={handleDecline}
          style={{ background: 'none', border: 'none', color: 'var(--text-light-muted)', cursor: 'pointer', padding: '0.2rem' }}
          aria-label="Close"
        >
          <X size={16} />
        </button>
      </div>

      <p style={{ fontSize: 'var(--text-xs)', color: 'var(--text-light-secondary)', margin: 0, lineHeight: 1.5 }}>
        We use privacy-conscious analytics to measure site traffic and improve our advisory tools in compliance with PIPEDA. We never sell your data or share uploaded financial documents. Read our{' '}
        <Link to="/privacy" style={{ color: 'var(--teal-400)', textDecoration: 'underline' }}>
          Privacy Policy
        </Link>.
      </p>

      <div style={{ display: 'flex', gap: '0.6rem', justifyContent: 'flex-end', marginTop: '0.25rem' }}>
        <button onClick={handleDecline} className="btn btn-secondary-dark btn-sm">
          Essential Only
        </button>
        <button onClick={handleAccept} className="btn btn-primary btn-sm">
          Accept All
        </button>
      </div>
    </div>
  );
};
