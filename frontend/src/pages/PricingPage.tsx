import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Calculator, Check, ShieldCheck, ArrowRight, Phone, CheckCircle2, 
  HelpCircle, Sparkles, Building2, TrendingUp, Users, DollarSign, 
  Clock, AlertCircle 
} from 'lucide-react';
import { api } from '../services/api';
import { trackEvent } from '../services/analytics';

interface Props {
  onBookConsultation?: (context?: string) => void;
}

export const PricingPage: React.FC<Props> = ({ onBookConsultation }) => {
  useEffect(() => {
    document.title = 'Transparent CPA Pricing & Custom Quote Builder | Puri & Loggia LLP';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Transparent, fixed monthly CPA accounting packages for Ontario and Canadian businesses. Calculate your custom monthly estimate with our interactive quote builder.'
      );
    }
  }, []);

  // Mode: 'packages' or 'calculator'
  const [activeTab, setActiveTab] = useState<'calculator' | 'packages'>('calculator');

  // Interactive Quote Builder State
  const [annualRevenue, setAnnualRevenue] = useState<'starter' | 'growth' | 'scaling' | 'enterprise'>('growth');
  const [bookkeepingFreq, setBookkeepingFreq] = useState<'monthly' | 'quarterly' | 'cleanup'>('monthly');
  const [employees, setEmployees] = useState<'none' | '1-5' | '6-15' | '16+'>('1-5');
  const [taxScope, setTaxScope] = useState<'t2_only' | 't2_hst' | 'advanced'>('t2_hst');
  const [advisoryScope, setAdvisoryScope] = useState<'none' | 'quarterly' | 'cfo_monthly'>('quarterly');

  // Lead capture state
  const [quoteName, setQuoteName] = useState('');
  const [quoteEmail, setQuoteEmail] = useState('');
  const [quotePhone, setQuotePhone] = useState('');
  const [quoteSubmitted, setQuoteSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Dynamic Calculation Logic
  const calculateEstimate = () => {
    let baseMin = 450;
    let baseMax = 550;

    // Revenue weighting
    if (annualRevenue === 'starter') {
      baseMin += 0;
      baseMax += 0;
    } else if (annualRevenue === 'growth') {
      baseMin += 150;
      baseMax += 200;
    } else if (annualRevenue === 'scaling') {
      baseMin += 350;
      baseMax += 450;
    } else if (annualRevenue === 'enterprise') {
      baseMin += 650;
      baseMax += 850;
    }

    // Bookkeeping
    if (bookkeepingFreq === 'quarterly') {
      baseMin -= 100;
      baseMax -= 100;
    } else if (bookkeepingFreq === 'cleanup') {
      baseMin += 200;
      baseMax += 300;
    }

    // Employees / Payroll
    if (employees === 'none') {
      baseMin += 0;
      baseMax += 0;
    } else if (employees === '1-5') {
      baseMin += 100;
      baseMax += 150;
    } else if (employees === '6-15') {
      baseMin += 220;
      baseMax += 300;
    } else if (employees === '16+') {
      baseMin += 400;
      baseMax += 550;
    }

    // Tax
    if (taxScope === 't2_hst') {
      baseMin += 100;
      baseMax += 150;
    } else if (taxScope === 'advanced') {
      baseMin += 250;
      baseMax += 350;
    }

    // Advisory CFO
    if (advisoryScope === 'quarterly') {
      baseMin += 200;
      baseMax += 300;
    } else if (advisoryScope === 'cfo_monthly') {
      baseMin += 600;
      baseMax += 850;
    }

    return { min: baseMin, max: baseMax };
  };

  const estimate = calculateEstimate();

  const handleQuoteSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!quoteEmail.trim()) return;

    setIsSubmitting(true);
    const summary = `Selected Scope: Revenue=${annualRevenue}, Bookkeeping=${bookkeepingFreq}, Payroll=${employees}, Tax=${taxScope}, Advisory=${advisoryScope}. Estimate: $${estimate.min} - $${estimate.max}/mo`;

    try {
      await api.submitContact({
        name: quoteName,
        email: quoteEmail,
        phone: quotePhone,
        company: 'Quote Builder Submission',
        service: 'Custom Quote Calculator',
        message: summary,
      });
      setQuoteSubmitted(true);
      trackEvent('quote_builder_submitted', {
        estimated_min: estimate.min,
        estimated_max: estimate.max,
        revenue_tier: annualRevenue,
      });
    } catch {
      setQuoteSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      {/* Comprehensive JSON-LD FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'How much does a CPA cost per month in Ontario?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Monthly CPA accounting packages in Ontario typically range from $499 to $1,799 per month for small to mid-sized businesses. Packages generally include cloud bookkeeping, corporate T2 tax filings, GST/HST preparation, and strategic partner advisory.',
                },
              },
              {
                '@type': 'Question',
                name: 'Are there hidden hourly charges or surprise bills?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'No. Puri & Loggia LLP operates on a transparent, fixed monthly fee model. Your recurring bookkeeping, tax filings, and scheduled partner advisory are bundled into a predictable monthly investment.',
                },
              },
              {
                '@type': 'Question',
                name: 'What software is included in the monthly fee?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'We are certified Xero Silver Partners and QuickBooks Online Advanced advisors. We integrate your bank accounts, credit cards, payment processors (Stripe/PayPal), and touchless receipt capture tools into a seamless cloud ecosystem.',
                },
              },
            ],
          }),
        }}
      />

      {/* 1. Hero Header */}
      <section
        style={{
          backgroundColor: '#0F294A',
          color: '#FFFFFF',
          paddingTop: 'clamp(3.5rem, 5.5vw, 5.5rem)',
          paddingBottom: 'clamp(3.5rem, 5.5vw, 5rem)',
          borderBottom: '4px solid #FCAC14',
          textAlign: 'center',
        }}
      >
        <div className="container">
          <div style={{ maxWidth: '820px', margin: '0 auto' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                backgroundColor: 'rgba(252, 172, 20, 0.15)',
                border: '1px solid rgba(252, 172, 20, 0.35)',
                borderRadius: '20px',
                padding: '0.35rem 0.95rem',
                marginBottom: '1.25rem',
              }}
            >
              <DollarSign size={15} color="#FCAC14" />
              <span
                style={{
                  fontSize: '12px',
                  fontWeight: 800,
                  color: '#FCAC14',
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                }}
              >
                Fixed &bull; Predictable &bull; Value-Driven
              </span>
            </div>

            <h1
              style={{
                fontSize: 'clamp(2.3rem, 4.2vw, 3.5rem)',
                fontWeight: 800,
                color: '#FFFFFF',
                lineHeight: 1.18,
                marginBottom: '1.25rem',
                letterSpacing: '-0.02em',
              }}
            >
              Transparent Monthly CPA Pricing.<br />Zero Surprise Hourly Invoices.
            </h1>

            <p
              style={{
                fontSize: 'clamp(1.05rem, 1.5vw, 1.2rem)',
                color: 'rgba(255, 255, 255, 0.9)',
                lineHeight: 1.75,
                marginBottom: '2.5rem',
              }}
            >
              Say goodbye to the outdated billable hour. Partner with experienced Ontario CPAs who provide proactive tax planning, clean cloud books, and direct executive advice for one fixed monthly retainer.
            </p>

            {/* Segment Toggle */}
            <div
              style={{
                display: 'inline-flex',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                padding: '0.35rem',
                borderRadius: '8px',
                gap: '0.35rem',
                border: '1px solid rgba(255, 255, 255, 0.18)',
              }}
            >
              <button
                onClick={() => setActiveTab('calculator')}
                style={{
                  backgroundColor: activeTab === 'calculator' ? '#FCAC14' : 'transparent',
                  color: activeTab === 'calculator' ? '#0F294A' : '#FFFFFF',
                  border: 'none',
                  padding: '0.65rem 1.4rem',
                  borderRadius: '6px',
                  fontWeight: 800,
                  fontSize: '14px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  transition: 'all 0.15s ease',
                }}
              >
                <Calculator size={16} />
                <span>Custom Quote Builder</span>
              </button>

              <button
                onClick={() => setActiveTab('packages')}
                style={{
                  backgroundColor: activeTab === 'packages' ? '#FCAC14' : 'transparent',
                  color: activeTab === 'packages' ? '#0F294A' : '#FFFFFF',
                  border: 'none',
                  padding: '0.65rem 1.4rem',
                  borderRadius: '6px',
                  fontWeight: 800,
                  fontSize: '14px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  transition: 'all 0.15s ease',
                }}
              >
                <Building2 size={16} />
                <span>Standard Packages</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TAB 1: Interactive Quote Builder */}
      {activeTab === 'calculator' && (
        <section style={{ backgroundColor: '#F8FAFC', padding: '5rem 0' }}>
          <div className="container">
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'minmax(0, 1.4fr) minmax(320px, 420px)',
                gap: '3rem',
                alignItems: 'start',
              }}
              className="quote-builder-grid"
            >
              {/* Left Column: Interactive Selectors */}
              <div
                style={{
                  backgroundColor: '#FFFFFF',
                  border: '1px solid var(--border-light)',
                  borderRadius: '12px',
                  padding: 'clamp(1.75rem, 3vw, 2.75rem)',
                  boxShadow: 'var(--shadow-card)',
                }}
              >
                <div style={{ marginBottom: '2.5rem' }}>
                  <div style={{ fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--gold-600)', marginBottom: '0.35rem' }}>
                    Step 1 of 5
                  </div>
                  <h3 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--navy-900)', marginBottom: '0.75rem' }}>
                    Annual Business Revenue
                  </h3>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '0.65rem' }}>
                    {[
                      { id: 'starter', label: '< $250K', sub: 'Early Stage' },
                      { id: 'growth', label: '$250K – $750K', sub: 'Growing' },
                      { id: 'scaling', label: '$750K – $2M', sub: 'Established' },
                      { id: 'enterprise', label: '$2M – $5M+', sub: 'High Volume' },
                    ].map((rev) => (
                      <button
                        key={rev.id}
                        type="button"
                        onClick={() => setAnnualRevenue(rev.id as any)}
                        style={{
                          padding: '0.85rem 0.5rem',
                          borderRadius: '6px',
                          border: annualRevenue === rev.id ? '2px solid #FCAC14' : '1px solid #CBD5E1',
                          backgroundColor: annualRevenue === rev.id ? '#FFFBEB' : '#FFFFFF',
                          cursor: 'pointer',
                          textAlign: 'center',
                        }}
                      >
                        <div style={{ fontWeight: 800, fontSize: '14px', color: 'var(--navy-900)' }}>{rev.label}</div>
                        <div style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '0.2rem' }}>{rev.sub}</div>
                      </button>
                    ))}
                  </div>
                </div>

                <div style={{ marginBottom: '2.5rem' }}>
                  <div style={{ fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--gold-600)', marginBottom: '0.35rem' }}>
                    Step 2 of 5
                  </div>
                  <h3 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--navy-900)', marginBottom: '0.75rem' }}>
                    Cloud Bookkeeping &amp; Reconciliations
                  </h3>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '0.65rem' }}>
                    {[
                      { id: 'monthly', label: 'Monthly Reconciled', desc: 'Standard clean monthly reporting' },
                      { id: 'quarterly', label: 'Quarterly Review', desc: 'Lower transaction volume' },
                      { id: 'cleanup', label: 'Catch-Up / Cleanup', desc: 'Prior periods require catch-up' },
                    ].map((b) => (
                      <button
                        key={b.id}
                        type="button"
                        onClick={() => setBookkeepingFreq(b.id as any)}
                        style={{
                          padding: '1rem 0.85rem',
                          borderRadius: '6px',
                          border: bookkeepingFreq === b.id ? '2px solid #FCAC14' : '1px solid #CBD5E1',
                          backgroundColor: bookkeepingFreq === b.id ? '#FFFBEB' : '#FFFFFF',
                          cursor: 'pointer',
                          textAlign: 'left',
                        }}
                      >
                        <div style={{ fontWeight: 800, fontSize: '14px', color: 'var(--navy-900)' }}>{b.label}</div>
                        <div style={{ fontSize: '11.5px', color: 'var(--text-secondary)', marginTop: '0.25rem', lineHeight: 1.4 }}>{b.desc}</div>
                      </button>
                    ))}
                  </div>
                </div>

                <div style={{ marginBottom: '2.5rem' }}>
                  <div style={{ fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--gold-600)', marginBottom: '0.35rem' }}>
                    Step 3 of 5
                  </div>
                  <h3 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--navy-900)', marginBottom: '0.75rem' }}>
                    Employees on Payroll
                  </h3>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(110px, 1fr))', gap: '0.65rem' }}>
                    {[
                      { id: 'none', label: 'None', sub: 'Owners only' },
                      { id: '1-5', label: '1 – 5 Staff', sub: 'PD7A & direct deposit' },
                      { id: '6-15', label: '6 – 15 Staff', sub: 'WSIB + EHT managed' },
                      { id: '16+', label: '16+ Staff', sub: 'Full lifecycle HR' },
                    ].map((e) => (
                      <button
                        key={e.id}
                        type="button"
                        onClick={() => setEmployees(e.id as any)}
                        style={{
                          padding: '0.85rem 0.5rem',
                          borderRadius: '6px',
                          border: employees === e.id ? '2px solid #FCAC14' : '1px solid #CBD5E1',
                          backgroundColor: employees === e.id ? '#FFFBEB' : '#FFFFFF',
                          cursor: 'pointer',
                          textAlign: 'center',
                        }}
                      >
                        <div style={{ fontWeight: 800, fontSize: '14px', color: 'var(--navy-900)' }}>{e.label}</div>
                        <div style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '0.2rem' }}>{e.sub}</div>
                      </button>
                    ))}
                  </div>
                </div>

                <div style={{ marginBottom: '2.5rem' }}>
                  <div style={{ fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--gold-600)', marginBottom: '0.35rem' }}>
                    Step 4 of 5
                  </div>
                  <h3 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--navy-900)', marginBottom: '0.75rem' }}>
                    Corporate Tax &amp; CRA Filings
                  </h3>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '0.65rem' }}>
                    {[
                      { id: 't2_only', label: 'T2 Return Only', desc: 'Annual corporate return & compilation' },
                      { id: 't2_hst', label: 'T2 + GST/HST Filing', desc: 'Corporate return + sales tax remitted' },
                      { id: 'advanced', label: 'T2 + Multi-Entity / Holdco', desc: 'Operating & Holding company integration' },
                    ].map((t) => (
                      <button
                        key={t.id}
                        type="button"
                        onClick={() => setTaxScope(t.id as any)}
                        style={{
                          padding: '1rem 0.85rem',
                          borderRadius: '6px',
                          border: taxScope === t.id ? '2px solid #FCAC14' : '1px solid #CBD5E1',
                          backgroundColor: taxScope === t.id ? '#FFFBEB' : '#FFFFFF',
                          cursor: 'pointer',
                          textAlign: 'left',
                        }}
                      >
                        <div style={{ fontWeight: 800, fontSize: '14px', color: 'var(--navy-900)' }}>{t.label}</div>
                        <div style={{ fontSize: '11.5px', color: 'var(--text-secondary)', marginTop: '0.25rem', lineHeight: 1.4 }}>{t.desc}</div>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <div style={{ fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--gold-600)', marginBottom: '0.35rem' }}>
                    Step 5 of 5
                  </div>
                  <h3 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--navy-900)', marginBottom: '0.75rem' }}>
                    Fractional CFO &amp; Advisory
                  </h3>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '0.65rem' }}>
                    {[
                      { id: 'none', label: 'Compliance Focus', desc: 'Standard tax & bookkeeping' },
                      { id: 'quarterly', label: 'Quarterly Strategy', desc: 'Tax minimization & owner dividend sync' },
                      { id: 'cfo_monthly', label: 'Monthly Fractional CFO', desc: '13-week runway, board deck & forecasting' },
                    ].map((a) => (
                      <button
                        key={a.id}
                        type="button"
                        onClick={() => setAdvisoryScope(a.id as any)}
                        style={{
                          padding: '1rem 0.85rem',
                          borderRadius: '6px',
                          border: advisoryScope === a.id ? '2px solid #FCAC14' : '1px solid #CBD5E1',
                          backgroundColor: advisoryScope === a.id ? '#FFFBEB' : '#FFFFFF',
                          cursor: 'pointer',
                          textAlign: 'left',
                        }}
                      >
                        <div style={{ fontWeight: 800, fontSize: '14px', color: 'var(--navy-900)' }}>{a.label}</div>
                        <div style={{ fontSize: '11.5px', color: 'var(--text-secondary)', lineHeight: 1.4, marginTop: '0.25rem' }}>{a.desc}</div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Live Estimate & Lead Form */}
              <div
                style={{
                  backgroundColor: '#0F294A',
                  color: '#FFFFFF',
                  borderRadius: '12px',
                  padding: '2.25rem',
                  position: 'sticky',
                  top: '100px',
                  boxShadow: '0 20px 40px rgba(15, 41, 74, 0.4)',
                  border: '2px solid #FCAC14',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <Sparkles size={18} color="#FCAC14" />
                  <span style={{ fontSize: '12px', fontWeight: 800, color: '#FCAC14', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                    Estimated Investment
                  </span>
                </div>

                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.35rem', marginBottom: '0.5rem' }}>
                  <span style={{ fontSize: 'clamp(2.4rem, 3.5vw, 3rem)', fontWeight: 900, color: '#FFFFFF', lineHeight: 1 }}>
                    ${estimate.min} – ${estimate.max}
                  </span>
                  <span style={{ fontSize: '15px', color: 'rgba(255,255,255,0.7)' }}>/mo</span>
                </div>

                <div style={{ fontSize: '12px', color: '#FDE68A', marginBottom: '1.75rem', fontWeight: 600 }}>
                  Fixed CAD retainer &bull; Includes all selected scope &bull; No hourly fees
                </div>

                {/* Summary checklist */}
                <div style={{ borderTop: '1px solid rgba(255,255,255,0.15)', paddingTop: '1.25rem', marginBottom: '1.75rem' }}>
                  <div style={{ fontSize: '11.5px', fontWeight: 700, textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', letterSpacing: '0.05em', marginBottom: '0.75rem' }}>
                    Included in Your Selected Plan:
                  </div>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '13px' }}>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                      <Check size={14} color="#FCAC14" />
                      <span>Direct Licensed Partner CPA oversight</span>
                    </li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                      <Check size={14} color="#FCAC14" />
                      <span>Xero or QuickBooks Online integration</span>
                    </li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                      <Check size={14} color="#FCAC14" />
                      <span>Corporate T2 filing &amp; CRA representation</span>
                    </li>
                    {advisoryScope !== 'none' && (
                      <li style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                        <Check size={14} color="#FCAC14" />
                        <span>Executive CPA advisory &amp; tax planning</span>
                      </li>
                    )}
                  </ul>
                </div>

                {/* Lead Form */}
                {quoteSubmitted ? (
                  <div style={{ backgroundColor: 'rgba(34, 197, 94, 0.15)', border: '1px solid #22C55E', borderRadius: '6px', padding: '1.5rem', textAlign: 'center' }}>
                    <CheckCircle2 size={32} color="#4ADE80" style={{ margin: '0 auto 0.5rem' }} />
                    <div style={{ fontWeight: 800, fontSize: '15px', color: '#FFFFFF', marginBottom: '0.25rem' }}>
                      Estimate Delivered!
                    </div>
                    <p style={{ fontSize: '12.5px', color: 'rgba(255,255,255,0.9)', margin: 0, lineHeight: 1.5 }}>
                      We sent your estimate to <strong>{quoteEmail}</strong>. Mark Puri will connect within 1 business day.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleQuoteSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    <div style={{ fontSize: '12.5px', fontWeight: 700, color: '#FFFFFF', marginBottom: '0.2rem' }}>
                      Lock In This Estimate &amp; Request Partner Review:
                    </div>
                    <input
                      type="text"
                      required
                      placeholder="Your Full Name"
                      value={quoteName}
                      onChange={(e) => setQuoteName(e.target.value)}
                      style={{
                        padding: '0.65rem 0.85rem',
                        borderRadius: '4px',
                        border: '1px solid rgba(255,255,255,0.25)',
                        backgroundColor: '#FFFFFF',
                        color: '#0F294A',
                        fontSize: '13px',
                        outline: 'none',
                      }}
                    />
                    <input
                      type="email"
                      required
                      placeholder="business@company.ca"
                      value={quoteEmail}
                      onChange={(e) => setQuoteEmail(e.target.value)}
                      style={{
                        padding: '0.65rem 0.85rem',
                        borderRadius: '4px',
                        border: '1px solid rgba(255,255,255,0.25)',
                        backgroundColor: '#FFFFFF',
                        color: '#0F294A',
                        fontSize: '13px',
                        outline: 'none',
                      }}
                    />
                    <input
                      type="tel"
                      required
                      placeholder="Phone (e.g. 416-555-0123)"
                      value={quotePhone}
                      onChange={(e) => setQuotePhone(e.target.value)}
                      style={{
                        padding: '0.65rem 0.85rem',
                        borderRadius: '4px',
                        border: '1px solid rgba(255,255,255,0.25)',
                        backgroundColor: '#FFFFFF',
                        color: '#0F294A',
                        fontSize: '13px',
                        outline: 'none',
                      }}
                    />
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      style={{
                        backgroundColor: '#FCAC14',
                        color: '#0F294A',
                        border: 'none',
                        padding: '0.85rem',
                        borderRadius: '4px',
                        fontWeight: 900,
                        fontSize: '14px',
                        cursor: 'pointer',
                        marginTop: '0.25rem',
                      }}
                    >
                      {isSubmitting ? 'Calculating...' : 'Send Estimate & Book Call →'}
                    </button>
                    <div style={{ textAlign: 'center', fontSize: '11px', color: 'rgba(255,255,255,0.6)' }}>
                      No obligation &bull; Confidential &bull; Free 30-min discovery call
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 3. TAB 2: Standard Packages */}
      {activeTab === 'packages' && (
        <section style={{ backgroundColor: '#F8FAFC', padding: '5.5rem 0' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))', gap: '2rem', maxWidth: '1150px', margin: '0 auto 4rem' }}>
              {/* Essentials */}
              <div style={{ backgroundColor: '#FFFFFF', border: '1px solid var(--border-light)', borderRadius: '8px', padding: '2.5rem 2rem', display: 'flex', flexDirection: 'column', boxShadow: 'var(--shadow-card)' }}>
                <div style={{ fontSize: '12px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
                  Essentials
                </div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.25rem', marginBottom: '0.35rem' }}>
                  <span style={{ fontSize: '2.75rem', fontWeight: 900, color: 'var(--navy-900)' }}>$499</span>
                  <span style={{ fontSize: '14px', color: 'var(--text-muted)' }}>/mo</span>
                </div>
                <div style={{ fontSize: '12.5px', color: 'var(--text-muted)', marginBottom: '1.75rem' }}>
                  Starting from &bull; Custom quote on consultation
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '13.5px', color: 'var(--navy-900)', flex: 1 }}>
                  {['Monthly cloud bookkeeping (Xero or QBO)', 'Bank & credit card reconciliation', 'Corporate T2 income tax filing', 'GST/HST filing & remittance', 'Year-end financial statements (Compilation)', 'CRA correspondence & account maintenance'].map((item, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                      <span style={{ color: '#D97706', marginTop: '2px', flexShrink: 0 }}>✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <button onClick={() => onBookConsultation ? onBookConsultation('Essentials Package') : null} className="btn btn-secondary" style={{ justifyContent: 'center', fontWeight: 700 }}>
                  Get Started →
                </button>
              </div>

              {/* Growth */}
              <div style={{ backgroundColor: '#0F294A', border: '2px solid #FCAC14', borderRadius: '8px', padding: '2.5rem 2rem', display: 'flex', flexDirection: 'column', boxShadow: '0 8px 32px rgba(15, 41, 74, 0.25)', position: 'relative' }}>
                <div style={{ position: 'absolute', top: '-14px', left: '50%', transform: 'translateX(-50%)', backgroundColor: '#FCAC14', color: '#0F294A', fontSize: '11px', fontWeight: 900, padding: '0.3rem 1rem', borderRadius: '20px', textTransform: 'uppercase', letterSpacing: '0.06em', whiteSpace: 'nowrap' }}>
                  Most Popular
                </div>
                <div style={{ fontSize: '12px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'rgba(255,255,255,0.6)', marginBottom: '0.5rem' }}>
                  Growth
                </div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.25rem', marginBottom: '0.35rem' }}>
                  <span style={{ fontSize: '2.75rem', fontWeight: 900, color: '#FFFFFF' }}>$899</span>
                  <span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.65)' }}>/mo</span>
                </div>
                <div style={{ fontSize: '12.5px', color: 'rgba(255,255,255,0.6)', marginBottom: '1.75rem' }}>
                  Starting from &bull; Tailored to volume
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '13.5px', color: '#FFFFFF', flex: 1 }}>
                  {['Everything in Essentials', 'Proactive year-round tax planning', 'Owner salary vs. dividend optimization', 'Payroll setup & source deductions (PD7A)', '2× annual CPA partner strategy sessions', 'CRA audit defense & dispute representation', 'Accounts payable & receipt capture matching'].map((item, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                      <span style={{ color: '#FCAC14', marginTop: '2px', flexShrink: 0 }}>✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => onBookConsultation ? onBookConsultation('Growth Package') : null}
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', backgroundColor: '#FCAC14', color: '#0F294A', border: 'none', padding: '0.85rem 1.5rem', borderRadius: '4px', fontWeight: 800, fontSize: '14.5px', cursor: 'pointer' }}
                >
                  <span>Book a Free Call →</span>
                </button>
              </div>

              {/* Advisory CFO */}
              <div style={{ backgroundColor: '#FFFFFF', border: '1px solid var(--border-light)', borderRadius: '8px', padding: '2.5rem 2rem', display: 'flex', flexDirection: 'column', boxShadow: 'var(--shadow-card)' }}>
                <div style={{ fontSize: '12px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
                  Advisory CFO
                </div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.25rem', marginBottom: '0.35rem' }}>
                  <span style={{ fontSize: '2.75rem', fontWeight: 900, color: 'var(--navy-900)' }}>$1,799</span>
                  <span style={{ fontSize: '14px', color: 'var(--text-muted)' }}>/mo</span>
                </div>
                <div style={{ fontSize: '12.5px', color: 'var(--text-muted)', marginBottom: '1.75rem' }}>
                  Starting from &bull; Full finance leadership
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '13.5px', color: 'var(--navy-900)', flex: 1 }}>
                  {['Everything in Growth', 'Fractional CFO — monthly advisory calls', '13-week rolling cash flow runway forecasting', 'Board-ready financial statement reporting', 'Corporate Holdco & multi-entity structuring', 'M&A due diligence & valuation support', 'Direct mobile partner access with Mark & Helen'].map((item, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                      <span style={{ color: '#D97706', marginTop: '2px', flexShrink: 0 }}>✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <button onClick={() => onBookConsultation ? onBookConsultation('Advisory CFO Package') : null} className="btn btn-secondary" style={{ justifyContent: 'center', fontWeight: 700 }}>
                  Discuss My Needs →
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 4. In-House vs Puri & Loggia ROI Comparison */}
      <section style={{ backgroundColor: '#FFFFFF', padding: '5.5rem 0', borderTop: '1px solid var(--border-light)' }}>
        <div className="container">
          <div style={{ maxWidth: '820px', margin: '0 auto 3.5rem', textAlign: 'center' }}>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 800, color: 'var(--navy-900)', letterSpacing: '-0.02em', marginBottom: '1rem' }}>
              Why Outsourcing to Puri &amp; Loggia Beats Hiring In-House
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>
              Compare the true total cost of an in-house accounting hire against a dedicated CPA advisory practice:
            </p>
          </div>

          <div style={{ maxWidth: '900px', margin: '0 auto', overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '14px' }}>
              <thead>
                <tr style={{ backgroundColor: '#0F294A', color: '#FFFFFF' }}>
                  <th style={{ padding: '1.25rem 1.5rem', fontWeight: 800 }}>Comparison Factor</th>
                  <th style={{ padding: '1.25rem 1.5rem', fontWeight: 800, color: '#FCAC14' }}>Puri &amp; Loggia LLP</th>
                  <th style={{ padding: '1.25rem 1.5rem', fontWeight: 800, color: 'rgba(255,255,255,0.7)' }}>In-House Hire</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { factor: 'Annual Cost', us: 'From $6,000 – $15,000 / year', them: '$75,000 – $120,000 salary + benefits' },
                  { factor: 'Experience Level', us: '25+ years senior CPA/MBA partners', them: 'Usually junior bookkeeper or single CPA' },
                  { factor: 'Software Subscriptions', us: 'Integrated & discounted licenses', them: 'Company pays 100% of GL + app fees' },
                  { factor: 'CRA Audit Protection', us: 'Direct representation by authorized CPA', them: 'Still requires external CPA firm' },
                  { factor: 'Turnover & Sick Days', us: 'Zero downtime, continuous firm coverage', them: 'Vacation, turnover & training overhead' },
                ].map((row, idx) => (
                  <tr key={idx} style={{ borderBottom: '1px solid var(--border-light)', backgroundColor: idx % 2 === 0 ? '#F8FAFC' : '#FFFFFF' }}>
                    <td style={{ padding: '1.1rem 1.5rem', fontWeight: 700, color: 'var(--navy-900)' }}>{row.factor}</td>
                    <td style={{ padding: '1.1rem 1.5rem', color: '#166534', fontWeight: 800 }}>{row.us}</td>
                    <td style={{ padding: '1.1rem 1.5rem', color: 'var(--text-secondary)' }}>{row.them}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 5. FAQs */}
      <section style={{ backgroundColor: '#F8FAFC', padding: '5rem 0', borderTop: '1px solid var(--border-light)' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', margin: '0 auto' }}>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 800, color: 'var(--navy-900)', textAlign: 'center', marginBottom: '3rem', letterSpacing: '-0.02em' }}>
              Frequently Asked Questions About Our Pricing
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {[
                {
                  q: 'Are your fees really 100% fixed?',
                  a: 'Yes. Once we evaluate your monthly transaction volume and corporate structure during our free discovery call, we issue a clear Engagement Letter with a fixed monthly retainer. You never receive an unexpected bill for a brief phone call or quick question.',
                },
                {
                  q: 'How does the onboarding process work?',
                  a: 'We make switching effortless. Our secure portal lets you upload your prior T2 tax return, financial statements, and CRA notices. We connect to your bank feeds, clean up your chart of accounts, and typically have you running on cloud systems within 10 business days.',
                },
                {
                  q: 'What if my books are behind by several months or years?',
                  a: 'Catch-up and forensic cleanup is a core specialty. We review your bank statements and unfiled periods, negotiate CRA voluntary disclosure where appropriate, and bring your corporate filings 100% up to date.',
                },
                {
                  q: 'Can I change my package as my business grows?',
                  a: 'Absolutely. Many of our clients start on Essentials for core bookkeeping and T2 filing, and scale up to Growth or Advisory CFO as they hire staff, expand lines of credit, or structure holding companies.',
                },
              ].map((faq, i) => (
                <div key={i} style={{ backgroundColor: '#FFFFFF', border: '1px solid var(--border-light)', borderRadius: '8px', padding: '1.75rem', boxShadow: 'var(--shadow-card)' }}>
                  <h3 style={{ fontSize: '16px', fontWeight: 800, color: 'var(--navy-900)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                    <HelpCircle size={17} color="#D97706" />
                    <span>{faq.q}</span>
                  </h3>
                  <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.65, margin: 0, paddingLeft: '1.55rem' }}>
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. Bottom CTA */}
      <section style={{ backgroundColor: '#0F294A', color: '#FFFFFF', padding: '5rem 0', textAlign: 'center' }}>
        <div className="container">
          <div style={{ maxWidth: '680px', margin: '0 auto' }}>
            <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.4rem)', fontWeight: 800, color: '#FFFFFF', marginBottom: '1rem', letterSpacing: '-0.02em' }}>
              Ready for a Straightforward, Value-Driven CPA?
            </h2>
            <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.85)', marginBottom: '2rem', lineHeight: 1.7 }}>
              Book a complimentary 30-minute discovery consultation. We will analyze your current tax setup and prepare a customized monthly quote.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button
                onClick={() => onBookConsultation ? onBookConsultation('Pricing Page Bottom') : null}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  backgroundColor: '#FCAC14',
                  color: '#0F294A',
                  border: 'none',
                  padding: '0.95rem 2.25rem',
                  borderRadius: '4px',
                  fontWeight: 800,
                  fontSize: '15px',
                  cursor: 'pointer',
                }}
              >
                <span>Book Free Discovery Call</span>
                <ArrowRight size={16} />
              </button>
              <a
                href="tel:416-801-6746"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: '#FFFFFF',
                  border: '1px solid rgba(255,255,255,0.35)',
                  padding: '0.95rem 1.75rem',
                  borderRadius: '4px',
                  fontWeight: 700,
                  fontSize: '15px',
                  textDecoration: 'none',
                  backgroundColor: 'rgba(255,255,255,0.08)',
                }}
              >
                <Phone size={15} />
                <span>Call Mark: 416-801-6746</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .quote-builder-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};

