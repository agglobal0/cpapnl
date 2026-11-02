import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, CheckCircle2, ShieldCheck, ArrowRight, Calendar } from 'lucide-react';
import { VERIFIED_PARTNERS } from '../services/api';
import { trackEvent } from '../services/analytics';

export const Partners: React.FC<{ onBookConsultation: (context?: string) => void }> = ({ onBookConsultation }) => {
  const [filter, setFilter] = useState<string>('all');

  const filtered = filter === 'all' 
    ? VERIFIED_PARTNERS 
    : VERIFIED_PARTNERS.filter(p => p.category === filter);

  return (
    <div>
      {/* 1. Authentic Subpage Banner (Executive desk photography) */}
      <div className="page-hero-banner">
        <div className="container">
          <div className="badge badge-gold" style={{ marginBottom: '1rem' }}>
            Verified Technology Ecosystem
          </div>
          <h1>Partners &amp; Cloud Integrations</h1>
          <p>
            Puri &amp; Loggia LLP partners with industry-leading cloud platforms to eliminate paper, automate reconciliations, and deliver real-time financial intelligence.
          </p>
        </div>
      </div>

      {/* 2. Main Partners Grid */}
      <section className="section" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container">
          {/* Category Filters */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', justifyContent: 'center', marginBottom: '3.5rem' }}>
            {[
              { id: 'all', label: 'All Partners' },
              { id: 'cloud_gl', label: 'General Ledgers (Xero / QBO)' },
              { id: 'document', label: 'Receipt Automation' },
              { id: 'payroll', label: 'Canadian Payroll' },
              { id: 'payments', label: 'Payment Gateways' },
              { id: 'ecommerce', label: 'E-Commerce' },
              { id: 'reporting', label: 'Financial Analytics' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`btn btn-sm ${filter === tab.id ? 'btn-primary' : 'btn-secondary'}`}
                style={{ padding: '0.5rem 1rem' }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
            {filtered.map((partner, idx) => (
              <div 
                key={idx}
                className="card card-accent-top"
                style={{
                  padding: '2rem',
                  borderRadius: 'var(--radius-md)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  backgroundColor: '#FFFFFF'
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                    <h3 style={{ fontSize: 'var(--text-xl)', color: 'var(--navy-900)', fontWeight: 700 }}>
                      {partner.name}
                    </h3>
                    <span className="badge badge-gold" style={{ fontSize: '11px' }}>
                      {partner.tier.includes('Certified') ? 'Certified' : 'Partner'}
                    </span>
                  </div>

                  <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--gold-600)', marginBottom: '1rem' }}>
                    {partner.tier}
                  </div>

                  <p style={{ fontSize: '13.5px', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                    {partner.description}
                  </p>
                </div>

                <div style={{ paddingTop: '1.25rem', borderTop: '1px solid var(--border-light)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <a
                    href={partner.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackEvent('portal_login_click', { partner: partner.name })}
                    style={{ fontSize: '13px', fontWeight: 700, color: 'var(--navy-800)', display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}
                  >
                    <span>Launch Portal</span>
                    <ExternalLink size={13} />
                  </a>

                  <Link
                    to="/contact"
                    className="btn btn-secondary btn-sm"
                  >
                    Discuss Setup
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Migration Banner */}
          <div style={{ backgroundColor: 'var(--navy-900)', borderRadius: 'var(--radius-lg)', padding: '3.5rem', color: '#FFFFFF', textAlign: 'center' }}>
            <h3 style={{ fontSize: 'var(--text-2xl)', color: '#FFFFFF', marginBottom: '1rem', fontWeight: 800 }}>
              Want to Integrate These Platforms into Your Business?
            </h3>
            <p style={{ fontSize: 'var(--text-base)', color: '#E2E8F0', maxWidth: '640px', margin: '0 auto 2rem', lineHeight: 1.6 }}>
              Our certified cloud consultants handle data migration, bank feed mapping, and staff training so your back-office runs smoothly from day one.
            </p>
            <Link to="/contact" className="btn btn-gold btn-lg">
              <span>Contact Our Integration Team &rarr;</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
