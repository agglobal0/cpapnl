import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ExternalLink, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import { Logo } from '../assets/brand/Logo';
import { api } from '../services/api';
import { trackEvent } from '../services/analytics';

export const Footer: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [subscribeSuccess, setSubscribeSuccess] = useState(false);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) return;
    setIsSubscribing(true);

    try {
      await api.subscribeNewsletter(newsletterEmail.trim());
      trackEvent('newsletter_subscribed', { source_page: window.location.pathname });
      setSubscribeSuccess(true);
      setNewsletterEmail('');
    } catch {
      setSubscribeSuccess(true);
    } finally {
      setIsSubscribing(false);
    }
  };

  return (
    <footer
      style={{
        backgroundColor: '#071220',
        color: 'rgba(255, 255, 255, 0.75)',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        paddingTop: '3.75rem',
        paddingBottom: '2.5rem',
      }}
    >
      <div className="container">
        
        {/* 1. Newsletter Strip (Spacious, prominent, beautifully balanced) */}
        <div
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: 'var(--radius-md)',
            padding: '2rem 2.25rem',
            marginBottom: '3.5rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1.75rem',
          }}
        >
          <div style={{ maxWidth: '520px' }}>
            <div
              style={{
                fontSize: '11px',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: 'var(--gold-400)',
                marginBottom: '0.35rem',
              }}
            >
              Canadian Tax &amp; Business Briefing
            </div>
            <h3 style={{ color: '#FFFFFF', fontSize: '18px', fontWeight: 700, marginBottom: '0.4rem', letterSpacing: '-0.01em' }}>
              Stay Ahead of CRA Deadlines &amp; Tax Strategies
            </h3>
            <p style={{ color: 'rgba(255, 255, 255, 0.65)', fontSize: '13.5px', margin: 0, lineHeight: 1.5 }}>
              Bi-weekly financial insights curated by Ontario CPAs for business owners. Zero spam, unsubscribe anytime.
            </p>
          </div>

          <div style={{ width: '100%', maxWidth: '420px' }}>
            {!subscribeSuccess ? (
              <form onSubmit={handleNewsletterSubmit} style={{ display: 'flex', gap: '0.5rem', width: '100%' }}>
                <input
                  type="email"
                  placeholder="Enter your business email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  required
                  style={{
                    flex: 1,
                    minWidth: 0,
                    padding: '0.65rem 1rem',
                    fontSize: '13.5px',
                    backgroundColor: 'rgba(255, 255, 255, 0.07)',
                    border: '1px solid rgba(255, 255, 255, 0.16)',
                    borderRadius: 'var(--radius-xs)',
                    color: '#FFFFFF',
                    outline: 'none',
                  }}
                />
                <button
                  type="submit"
                  disabled={isSubscribing}
                  className="btn"
                  style={{
                    backgroundColor: 'var(--gold-500)',
                    color: '#071220',
                    fontWeight: 700,
                    fontSize: '13.5px',
                    padding: '0.65rem 1.25rem',
                    whiteSpace: 'nowrap',
                    border: 'none',
                    borderRadius: 'var(--radius-xs)',
                    cursor: 'pointer',
                  }}
                >
                  {isSubscribing ? 'Subscribing...' : 'Subscribe'}
                </button>
              </form>
            ) : (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  color: 'var(--teal-400)',
                  fontSize: '13.5px',
                  backgroundColor: 'rgba(20, 184, 166, 0.1)',
                  padding: '0.65rem 1rem',
                  borderRadius: 'var(--radius-xs)',
                  border: '1px solid rgba(20, 184, 166, 0.25)',
                }}
              >
                <CheckCircle2 size={18} />
                <span>Thank you for subscribing! Check your inbox for confirmation.</span>
              </div>
            )}
          </div>
        </div>

        {/* 2. Main 4-Column Grid (Balanced & Evenly Spaced) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '2.5rem',
            marginBottom: '3.5rem',
            alignItems: 'start',
          }}
        >
          {/* Column 1: Firm Overview */}
          <div>
            <Link to="/" style={{ textDecoration: 'none', display: 'inline-block', marginBottom: '1.25rem' }}>
              <Logo variant="dark" height={42} />
            </Link>
            <p
              style={{
                fontSize: '13.5px',
                lineHeight: 1.6,
                color: 'rgba(255, 255, 255, 0.68)',
                marginBottom: '1.5rem',
              }}
            >
              Puri &amp; Loggia LLP is a full-service Canadian accounting and business advisory firm. Formed by Mark Puri, CPA, MBA and Helen Loggia, CPA, we combine 25+ years of financial leadership to help businesses grow.
            </p>

            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                padding: '0.5rem 0.85rem',
                borderRadius: 'var(--radius-xs)',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
              }}
            >
              <ShieldCheck size={16} color="var(--gold-400)" />
              <div style={{ fontSize: '11.5px', color: '#FFFFFF', fontWeight: 600 }}>
                Chartered Professional Accountants &bull; Ontario
              </div>
            </div>
          </div>

          {/* Column 2: Core Services */}
          <div>
            <h4
              style={{
                color: '#FFFFFF',
                fontSize: '12px',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                marginBottom: '1.25rem',
                fontWeight: 700,
              }}
            >
              Core Services
            </h4>
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '0.85rem',
                fontSize: '13.5px',
              }}
            >
              <li>
                <Link to="/services/accounting-bookkeeping" className="footer-link">
                  Accounting &amp; Cloud Bookkeeping
                </Link>
              </li>
              <li>
                <Link to="/services/taxation" className="footer-link">
                  Corporate &amp; Personal Taxation (T2)
                </Link>
              </li>
              <li>
                <Link to="/services/payroll" className="footer-link">
                  Payroll Management &amp; CRA Remittance
                </Link>
              </li>
              <li>
                <Link to="/services/consulting-technology" className="footer-link">
                  Advisory &amp; Fractional CFO Services
                </Link>
              </li>
              <li>
                <Link to="/services/cloud-accounting" className="footer-link">
                  Cloud Accounting Systems (Xero / QBO)
                </Link>
              </li>
              <li>
                <Link
                  to="/onboarding"
                  style={{
                    color: 'var(--gold-400)',
                    fontWeight: 600,
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                  }}
                >
                  <span>Client Onboarding Portal</span>
                  <ArrowRight size={13} />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Resources & Tools */}
          <div>
            <h4
              style={{
                color: '#FFFFFF',
                fontSize: '12px',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                marginBottom: '1.25rem',
                fontWeight: 700,
              }}
            >
              Resources &amp; Tools
            </h4>
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '0.85rem',
                fontSize: '13.5px',
              }}
            >
              <li>
                <Link to="/pricing" className="footer-link" style={{ color: 'var(--gold-400)', fontWeight: 700 }}>
                  Pricing &amp; Quote Builder &rarr;
                </Link>
              </li>
              <li>
                <Link to="/case-studies" className="footer-link" style={{ fontWeight: 700, color: '#FFFFFF' }}>
                  Client Case Studies &amp; Results &rarr;
                </Link>
              </li>
              <li>
                <Link to="/partners/referral-program" className="footer-link" style={{ color: 'var(--gold-400)' }}>
                  Professional Referral Program &rarr;
                </Link>
              </li>
              <li>
                <Link to="/resources/calculators" className="footer-link">
                  Financial &amp; Tax Calculators
                </Link>
              </li>
              <li>
                <Link to="/resources/7-steps-to-growing-your-business" className="footer-link">
                  7 Steps to Growing Your Business
                </Link>
              </li>
              <li>
                <Link to="/resources/blog" className="footer-link">
                  Tax &amp; Accounting Blog
                </Link>
              </li>
              <li>
                <Link to="/resources/downloads" className="footer-link">
                  Free Checklist &amp; Template Downloads
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Direct Contact (Clean, spacious, uncrowded) */}
          <div>
            <h4
              style={{
                color: '#FFFFFF',
                fontSize: '12px',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                marginBottom: '1.25rem',
                fontWeight: 700,
              }}
            >
              Direct Contact
            </h4>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem', fontSize: '13.5px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <div
                  style={{
                    width: '30px',
                    height: '30px',
                    borderRadius: 'var(--radius-xs)',
                    backgroundColor: 'rgba(255, 255, 255, 0.06)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--gold-400)',
                    flexShrink: 0,
                  }}
                >
                  <Phone size={14} />
                </div>
                <div>
                  <div style={{ fontSize: '11px', color: 'rgba(255, 255, 255, 0.5)', textTransform: 'uppercase', fontWeight: 600 }}>Mark Puri, CPA, MBA</div>
                  <a href="tel:416-801-6746" style={{ color: '#FFFFFF', fontWeight: 700 }}>
                    +1 416 801 6746
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <div
                  style={{
                    width: '30px',
                    height: '30px',
                    borderRadius: 'var(--radius-xs)',
                    backgroundColor: 'rgba(255, 255, 255, 0.06)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--gold-400)',
                    flexShrink: 0,
                  }}
                >
                  <Phone size={14} />
                </div>
                <div>
                  <div style={{ fontSize: '11px', color: 'rgba(255, 255, 255, 0.5)', textTransform: 'uppercase', fontWeight: 600 }}>Helen Loggia, CPA</div>
                  <a href="tel:416-805-1427" style={{ color: '#FFFFFF', fontWeight: 700 }}>
                    +1 416 805 1427
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <div
                  style={{
                    width: '30px',
                    height: '30px',
                    borderRadius: 'var(--radius-xs)',
                    backgroundColor: 'rgba(255, 255, 255, 0.06)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--gold-400)',
                    flexShrink: 0,
                  }}
                >
                  <Mail size={14} />
                </div>
                <div>
                  <div style={{ fontSize: '11px', color: 'rgba(255, 255, 255, 0.5)', textTransform: 'uppercase', fontWeight: 600 }}>Support &amp; Inquiries</div>
                  <a href="mailto:support@cpapnl.com" style={{ color: '#FFFFFF', fontWeight: 600 }}>
                    support@cpapnl.com
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', paddingTop: '0.25rem' }}>
                <div
                  style={{
                    width: '30px',
                    height: '30px',
                    borderRadius: 'var(--radius-xs)',
                    backgroundColor: 'rgba(255, 255, 255, 0.06)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--gold-400)',
                    flexShrink: 0,
                  }}
                >
                  <MapPin size={14} />
                </div>
                <div style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '12.5px', lineHeight: 1.4 }}>
                  Greater Toronto Area (GTA), Ontario<br />
                  <span style={{ color: 'rgba(255, 255, 255, 0.5)' }}>Serving Canada Nationwide</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Client Portals & Technology Badges */}
        <div
          style={{
            padding: '1.5rem 0',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1.25rem',
            fontSize: '12.5px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <span style={{ color: '#FFFFFF', fontWeight: 600 }}>Client Portals:</span>
            <a
              href="https://login.xero.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: 'rgba(255, 255, 255, 0.85)',
                backgroundColor: 'rgba(255, 255, 255, 0.06)',
                padding: '0.35rem 0.75rem',
                borderRadius: 'var(--radius-xs)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                textDecoration: 'none',
              }}
            >
              <span>Xero Portal</span>
              <ExternalLink size={12} color="var(--gold-400)" />
            </a>
            <a
              href="https://accounts.intuit.com/app/sign-in?app_group=QBO"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: 'rgba(255, 255, 255, 0.85)',
                backgroundColor: 'rgba(255, 255, 255, 0.06)',
                padding: '0.35rem 0.75rem',
                borderRadius: 'var(--radius-xs)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                textDecoration: 'none',
              }}
            >
              <span>QuickBooks Online</span>
              <ExternalLink size={12} color="var(--gold-400)" />
            </a>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              flexWrap: 'wrap',
              color: 'rgba(255, 255, 255, 0.55)',
              fontSize: '12px',
            }}
          >
            <span style={{ color: 'rgba(255, 255, 255, 0.75)', fontWeight: 600 }}>Accounting Ecosystem:</span>
            <span>Xero</span>
            <span>&bull;</span>
            <span>QuickBooks</span>
            <span>&bull;</span>
            <span>Hubdoc</span>
            <span>&bull;</span>
            <span>Wagepoint</span>
            <span>&bull;</span>
            <span>Karbon</span>
            <span>&bull;</span>
            <span>Stripe</span>
          </div>
        </div>

        {/* 4. Bottom Legal / Copyright Bar */}
        <div
          style={{
            paddingTop: '1.75rem',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1rem',
            fontSize: '12px',
            color: 'rgba(255, 255, 255, 0.5)',
          }}
        >
          <div>
            &copy; 2024 &ndash; 2026 Puri &amp; Loggia LLP. All Rights Reserved. Licensed Public Accounting Firm &bull; CPA Ontario.
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
            <Link to="/privacy" style={{ color: 'rgba(255, 255, 255, 0.65)', textDecoration: 'none' }}>
              Privacy Policy
            </Link>
            <Link to="/terms" style={{ color: 'rgba(255, 255, 255, 0.65)', textDecoration: 'none' }}>
              Terms of Engagement
            </Link>
            <Link to="/admin" style={{ color: 'rgba(255, 255, 255, 0.65)', textDecoration: 'none' }}>
              Staff Portal
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
};
