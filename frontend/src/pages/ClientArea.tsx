import React from 'react';
import { ExternalLink, ShieldCheck, Lock, HelpCircle, Phone, Mail, ArrowRight } from 'lucide-react';
import { trackEvent } from '../services/analytics';

export const ClientArea: React.FC<{ onBookConsultation: (context?: string) => void }> = ({ onBookConsultation }) => {
  const handlePortalClick = (portal: string) => {
    trackEvent('portal_login_click', { portal });
  };

  return (
    <div>
      {/* 1. Authentic Subpage Banner (Executive desk photography) */}
      <div className="page-hero-banner">
        <div className="container">
          <div className="badge badge-gold" style={{ marginBottom: '1rem' }}>
            Client Access Gateway
          </div>
          <h1>Client Portal Login Hub</h1>
          <p>
            Access your cloud accounting software, view live financial dashboards, and approve invoices. Log in directly through your authorized cloud provider below.
          </p>
        </div>
      </div>

      {/* 2. Main Portals Grid */}
      <section className="section" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container" style={{ maxWidth: '960px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem', marginBottom: '4rem' }}>
            {/* Xero Login Card */}
            <div className="card card-accent-top" style={{ padding: '2.5rem', backgroundColor: '#FFFFFF', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                  <div style={{ fontWeight: 800, fontSize: 'var(--text-2xl)', color: '#13B5EA' }}>
                    Xero
                  </div>
                  <span className="badge badge-navy">Certified Partner</span>
                </div>

                <h3 style={{ fontSize: 'var(--text-lg)', color: 'var(--navy-900)', marginBottom: '0.75rem', fontWeight: 700 }}>
                  Xero Cloud Accounting Login
                </h3>

                <p style={{ fontSize: '13.5px', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '2rem' }}>
                  Sign in to your Xero general ledger to view real-time bank reconciliations, create invoices, review accounts payable, and access management reporting.
                </p>
              </div>

              <div>
                <a
                  href="https://login.xero.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => handlePortalClick('Xero')}
                  className="btn btn-primary btn-lg"
                  style={{ width: '100%', justifyContent: 'center', backgroundColor: '#13B5EA', borderColor: '#13B5EA' }}
                >
                  <span>Launch Xero Login</span>
                  <ExternalLink size={16} />
                </a>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginTop: '1rem', fontSize: '11px', color: 'var(--text-muted)' }}>
                  <Lock size={12} />
                  <span>256-bit TLS bank-level encryption hosted by Xero.</span>
                </div>
              </div>
            </div>

            {/* QuickBooks Online Login Card */}
            <div className="card card-accent-gold" style={{ padding: '2.5rem', backgroundColor: '#FFFFFF', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                  <div style={{ fontWeight: 800, fontSize: 'var(--text-2xl)', color: '#2CA01C' }}>
                    QuickBooks
                  </div>
                  <span className="badge badge-gold">Certified ProAdvisor</span>
                </div>

                <h3 style={{ fontSize: 'var(--text-lg)', color: 'var(--navy-900)', marginBottom: '0.75rem', fontWeight: 700 }}>
                  QuickBooks Online Login
                </h3>

                <p style={{ fontSize: '13.5px', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '2rem' }}>
                  Sign in to QuickBooks Online (Intuit) to manage your Canadian sales tax, run payroll, track inventory, and review real-time profit &amp; loss statements.
                </p>
              </div>

              <div>
                <a
                  href="https://accounts.intuit.com/app/sign-in?app_group=QBO"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => handlePortalClick('QuickBooks Online')}
                  className="btn btn-primary btn-lg"
                  style={{ width: '100%', justifyContent: 'center', backgroundColor: '#2CA01C', borderColor: '#2CA01C' }}
                >
                  <span>Launch QuickBooks Online</span>
                  <ExternalLink size={16} />
                </a>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginTop: '1rem', fontSize: '11px', color: 'var(--text-muted)' }}>
                  <Lock size={12} />
                  <span>Official Intuit Single Sign-On (SSO) gateway.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Security & Access Information */}
          <div style={{ backgroundColor: 'var(--surface-alt)', borderRadius: 'var(--radius-md)', padding: '2.5rem', border: '1px solid var(--border-light)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
              <ShieldCheck size={22} color="var(--navy-800)" />
              <h3 style={{ fontSize: 'var(--text-lg)', color: 'var(--navy-900)', margin: 0, fontWeight: 700 }}>
                Client Portal Security &amp; Confidentiality Notice
              </h3>
            </div>

            <p style={{ fontSize: '13.5px', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
              Puri &amp; Loggia LLP does not store your third-party accounting login credentials (passwords or 2-factor authentication keys). When you click the login buttons above, you are redirected directly to the authenticated, encrypted servers of Xero or Intuit QuickBooks.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem', fontSize: '12px', color: 'var(--text-secondary)' }}>
              <div>
                <strong style={{ color: 'var(--navy-900)' }}>Forgot your portal password?</strong>
                <p style={{ margin: '0.25rem 0 0' }}>Please use the official password recovery options on Xero or Intuit’s login screens.</p>
              </div>

              <div>
                <strong style={{ color: 'var(--navy-900)' }}>Need access permissions for a new employee?</strong>
                <p style={{ margin: '0.25rem 0 0' }}>Contact Helen Loggia at <a href="mailto:support@cpapnl.com" style={{ color: 'var(--navy-800)', fontWeight: 600 }}>support@cpapnl.com</a> with the authorized staff email.</p>
              </div>

              <div>
                <strong style={{ color: 'var(--navy-900)' }}>Looking for website staff login?</strong>
                <p style={{ margin: '0.25rem 0 0' }}>Firm staff can access the CMS at the <a href="/admin" style={{ color: 'var(--navy-800)', fontWeight: 600 }}>Administrative Portal</a>.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
