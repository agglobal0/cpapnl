import React, { useEffect } from 'react';
import { Calendar, Clock, CheckCircle2, Phone, Mail, ShieldCheck } from 'lucide-react';
import { trackEvent } from '../services/analytics';

export const BookConsultationPage: React.FC = () => {
  useEffect(() => {
    trackEvent('calendly_opened', { source: 'dedicated_page' });
  }, []);

  const calendlyUrl = import.meta.env.VITE_CALENDLY_URL || 'https://calendly.com';

  return (
    <div>
      {/* Hero */}
      <section className="section section-dark" style={{ background: 'linear-gradient(175deg, #060B14 0%, #0B132B 100%)', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="badge badge-dark-teal" style={{ marginBottom: '1rem' }}>
            Complimentary 30-Minute Discovery Session
          </div>
          <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', color: '#FFFFFF', marginBottom: '1.25rem' }}>
            Book Your Strategic Consultation
          </h1>
          <p style={{ fontSize: 'var(--text-lg)', color: 'var(--text-light-secondary)', lineHeight: 1.6 }}>
            Select an available time directly on our live calendar to discuss corporate taxation, cloud bookkeeping, or fractional CFO advisory with Mark Puri or Helen Loggia.
          </p>
        </div>
      </section>

      {/* Main Scheduling Section */}
      <section className="section" style={{ backgroundColor: 'var(--surface-base)' }}>
        <div className="container" style={{ maxWidth: '960px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'flex-start' }}>
            {/* Left: What to Expect */}
            <div>
              <span className="badge badge-teal" style={{ marginBottom: '0.75rem' }}>
                Session Agenda
              </span>
              <h2 style={{ fontSize: 'var(--text-2xl)', marginBottom: '1.25rem', color: 'var(--navy-950)' }}>
                What We Will Cover in 30 Minutes
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2.5rem' }}>
                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  <CheckCircle2 size={20} color="var(--teal-600)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong style={{ fontSize: 'var(--text-sm)', color: 'var(--navy-950)' }}>Review Current Corporate Structure</strong>
                    <p style={{ fontSize: 'var(--text-xs)', color: 'var(--text-secondary)', margin: '0.2rem 0 0' }}>
                      We evaluate your operating corporation, holding company status, and shareholder loan balances.
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  <CheckCircle2 size={20} color="var(--teal-600)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong style={{ fontSize: 'var(--text-sm)', color: 'var(--navy-950)' }}>Audit Current Accounting Bottlenecks</strong>
                    <p style={{ fontSize: 'var(--text-xs)', color: 'var(--text-secondary)', margin: '0.2rem 0 0' }}>
                      Identify delayed reconciliations, receipt clutter, and manual data-entry inefficiencies.
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  <CheckCircle2 size={20} color="var(--teal-600)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong style={{ fontSize: 'var(--text-sm)', color: 'var(--navy-950)' }}>Proactive Tax Planning Opportunities</strong>
                    <p style={{ fontSize: 'var(--text-xs)', color: 'var(--text-secondary)', margin: '0.2rem 0 0' }}>
                      Evaluate optimal salary vs. dividend splits, SR&amp;ED tax credits, and CRA risk mitigation.
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  <CheckCircle2 size={20} color="var(--teal-600)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong style={{ fontSize: 'var(--text-sm)', color: 'var(--navy-950)' }}>Transparent Fixed-Fee Scope</strong>
                    <p style={{ fontSize: 'var(--text-xs)', color: 'var(--text-secondary)', margin: '0.2rem 0 0' }}>
                      You receive a clear, scoped proposal with predictable monthly fees. Zero obligation.
                    </p>
                  </div>
                </div>
              </div>

              <div style={{ padding: '1.5rem', backgroundColor: 'var(--surface-alt)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-light)' }}>
                <div style={{ fontSize: 'var(--text-xs)', fontWeight: 700, color: 'var(--navy-950)', marginBottom: '0.5rem' }}>
                  Immediate Phone Contact:
                </div>
                <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                  <div>Mark Puri: <a href="tel:416-801-6746" style={{ fontWeight: 700, color: 'var(--teal-700)' }}>416-801-6746</a></div>
                  <div>Helen Loggia: <a href="tel:416-805-1427" style={{ fontWeight: 700, color: 'var(--teal-700)' }}>416-805-1427</a></div>
                  <div>Email: <a href="mailto:support@cpapnl.com" style={{ color: 'var(--teal-700)' }}>support@cpapnl.com</a></div>
                </div>
              </div>
            </div>

            {/* Right: Live Scheduling Launcher Card */}
            <div className="card" style={{ padding: '3rem', borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-xl)', border: '1px solid var(--border-medium)', textAlign: 'center' }}>
              <Calendar size={56} color="var(--teal-600)" style={{ margin: '0 auto 1.5rem' }} />

              <h3 style={{ fontSize: 'var(--text-xl)', color: 'var(--navy-950)', marginBottom: '0.75rem' }}>
                Open Live Calendly Schedule
              </h3>

              <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '2rem' }}>
                Our calendar connects directly with Mark Puri and Helen Loggia's real-time availability. Choose your preferred date and receive an automated Zoom/Teams video invitation.
              </p>

              <a
                href={calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-lg"
                style={{ width: '100%', marginBottom: '1.5rem' }}
                onClick={() => {
                  trackEvent('consultation_booked', { provider: 'calendly', location: 'book_consultation_page' });
                }}
              >
                <span>Launch Live Calendly Booking &rarr;</span>
              </a>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', fontSize: '11px', color: 'var(--text-muted)' }}>
                <Clock size={14} color="var(--teal-600)" />
                <span>Eastern Time (ET) &bull; 30 Minutes &bull; Video or Phone</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
