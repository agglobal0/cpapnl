import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, Phone, TrendingUp, ShieldCheck, Calculator, Users } from 'lucide-react';

interface Props { onBookConsultation: (ctx?: string) => void; }

export const SmallBusinessPage: React.FC<Props> = ({ onBookConsultation }) => {
  useEffect(() => {
    document.title = 'CPA for Small Business in GTA — Accounting, Tax & Advisory | Puri & Loggia LLP';
    const m = document.querySelector('meta[name="description"]');
    if (m) m.setAttribute('content', 'Puri & Loggia LLP provides small business accounting, corporate tax (T2), bookkeeping, and CFO advisory for Ontario entrepreneurs. Brampton, Mississauga, and Toronto CPA firm.');
  }, []);

  const painPoints = [
    { icon: <Calculator size={22} color="#D97706" />, title: 'Messy Books, No Real Numbers', desc: 'You\'re running your business on gut feel because your bookkeeping is months behind and your P&L doesn\'t match reality.' },
    { icon: <ShieldCheck size={22} color="#D97706" />, title: 'CRA Surprises & Unexpected Tax Bills', desc: 'Year-end comes and you owe far more than expected. No one warned you about instalments, dividends, or HST rules.' },
    { icon: <TrendingUp size={22} color="#D97706" />, title: 'Growth Slowed by Financial Blind Spots', desc: 'You want to hire, expand, or buy equipment — but you\'re not sure if the cash flow supports it.' },
    { icon: <Users size={22} color="#D97706" />, title: 'Junior Accountants, Not Real Advisors', desc: 'Your current accountant just files returns. You want a real CPA who gives strategic advice, not just compliance.' },
  ];

  const services = [
    'Monthly cloud bookkeeping (Xero or QuickBooks Online)',
    'Corporate T2 income tax filing & CRA communications',
    'GST/HST registration, filing & ITC recovery',
    'Owner salary vs. dividend tax optimization',
    'Payroll setup, T4 slips & CRA remittances (PD7A)',
    'Year-end financial statements (compilation)',
    'Business incorporation & corporate structure advisory',
    'Cash flow forecasting & budget planning',
    'CRA audit representation & dispute resolution',
  ];

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'FAQPage',
        mainEntity: [
          { '@type': 'Question', name: 'How much does a small business accountant cost in Brampton Ontario?', acceptedAnswer: { '@type': 'Answer', text: 'Small business accounting packages in the GTA typically start from $499/month for cloud bookkeeping plus T2 corporate tax filing. Pricing varies by transaction volume and services needed. Puri & Loggia LLP offers a free 30-minute discovery call to provide a custom quote.' } },
          { '@type': 'Question', name: 'Does a small business in Ontario need a CPA?', acceptedAnswer: { '@type': 'Answer', text: 'While not legally required, a CPA is strongly recommended for incorporated businesses. A CPA ensures accurate T2 corporate tax filing, GST/HST compliance, and can identify legal tax minimization strategies that often save far more than the cost of the engagement.' } },
        ]
      })}} />

      {/* Hero */}
      <section style={{ backgroundColor: '#0F294A', color: '#FFFFFF', padding: 'clamp(3.5rem, 5vw, 5.5rem) 0' }}>
        <div className="container">
          <div style={{ maxWidth: '820px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backgroundColor: 'rgba(252,172,20,0.15)', border: '1px solid rgba(252,172,20,0.3)', borderRadius: '20px', padding: '0.3rem 0.9rem', marginBottom: '1.25rem' }}>
              <span style={{ fontSize: '12px', fontWeight: 700, color: '#FCAC14', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Small Business</span>
            </div>
            <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.4rem)', fontWeight: 800, color: '#FFFFFF', lineHeight: 1.18, marginBottom: '1.25rem', letterSpacing: '-0.02em' }}>
              CPA Firm Built for<br />Ontario Small Business Owners
            </h1>
            <p style={{ fontSize: '17.5px', color: 'rgba(255,255,255,0.88)', lineHeight: 1.75, marginBottom: '2rem', maxWidth: '640px' }}>
              We speak small business — not corporate jargon. Puri & Loggia LLP takes bookkeeping, tax, and financial complexity completely off your plate so you can focus on growing your company.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              <button onClick={() => onBookConsultation('Small Business Accounting')} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backgroundColor: '#FCAC14', color: '#0F294A', border: 'none', padding: '0.9rem 2rem', borderRadius: '4px', fontWeight: 800, fontSize: '15px', cursor: 'pointer' }}>
                <span>Book a Free Discovery Call</span><ArrowRight size={16} />
              </button>
              <a href="tel:416-801-6746" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: '#FFFFFF', border: '1px solid rgba(255,255,255,0.35)', padding: '0.9rem 1.75rem', borderRadius: '4px', fontWeight: 700, fontSize: '14.5px', textDecoration: 'none', backgroundColor: 'rgba(255,255,255,0.08)' }}>
                <Phone size={15} /><span>416-801-6746</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section style={{ backgroundColor: '#F8FAFC', borderBottom: '1px solid var(--border-light)', padding: '5rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3.5rem' }}>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 800, color: 'var(--navy-900)', letterSpacing: '-0.02em' }}>
              We Know the Challenges Small Business Owners Face
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {painPoints.map((p, i) => (
              <div key={i} style={{ backgroundColor: '#FFFFFF', border: '1px solid var(--border-light)', borderTop: '3px solid #FCAC14', borderRadius: '8px', padding: '2rem', boxShadow: 'var(--shadow-card)' }}>
                <div style={{ marginBottom: '0.75rem' }}>{p.icon}</div>
                <h3 style={{ fontSize: '17px', fontWeight: 800, color: 'var(--navy-900)', marginBottom: '0.5rem' }}>{p.title}</h3>
                <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.65, margin: 0 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section style={{ backgroundColor: '#FFFFFF', padding: '5.5rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)', gap: '4rem', alignItems: 'center' }} className="industry-split-grid">
            <div>
              <div style={{ fontSize: '12.5px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--gold-600)', marginBottom: '0.75rem' }}>What We Handle For You</div>
              <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 800, color: 'var(--navy-900)', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
                Complete Financial Back-Office for Your Business
              </h2>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2.5rem', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {services.map((s, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', fontSize: '14.5px', color: 'var(--navy-900)' }}>
                    <CheckCircle2 size={18} color="#D97706" style={{ flexShrink: 0, marginTop: '2px' }} /><span>{s}</span>
                  </li>
                ))}
              </ul>
              <button onClick={() => onBookConsultation('Small Business')} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backgroundColor: '#FCAC14', color: '#0F294A', border: 'none', padding: '0.9rem 2rem', borderRadius: '4px', fontWeight: 800, fontSize: '14.5px', cursor: 'pointer' }}>
                <span>Get a Custom Quote</span><ArrowRight size={16} />
              </button>
            </div>
            <div style={{ backgroundColor: '#0F294A', borderRadius: '10px', padding: '3rem 2.5rem', color: '#FFFFFF' }}>
              <div style={{ fontSize: '13px', fontWeight: 700, color: '#FCAC14', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '1rem' }}>Why Puri & Loggia LLP?</div>
              <h3 style={{ fontSize: '22px', fontWeight: 800, color: '#FFFFFF', marginBottom: '1.5rem', lineHeight: 1.3 }}>The Firm That Startup Accountants Call When It Gets Complicated</h3>
              {['25+ combined years of senior CPA experience', 'Direct access to licensed CPA partners — no juniors', 'Proactive tax planning, not just year-end compliance', 'CRA audit representation with proven track record', 'Xero Silver & QuickBooks Advanced certified', 'Local GTA presence — Brampton & Mississauga'].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.85rem', fontSize: '14px', color: 'rgba(255,255,255,0.9)' }}>
                  <CheckCircle2 size={16} color="#FCAC14" style={{ flexShrink: 0 }} /><span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section style={{ backgroundColor: '#F8FAFC', borderTop: '1px solid var(--border-light)', padding: '4.5rem 0' }}>
        <div className="container">
          <div style={{ maxWidth: '740px', margin: '0 auto', textAlign: 'center' }}>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '0.25rem', marginBottom: '1.25rem' }}>
              {[1,2,3,4,5].map(i => <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill="#FCAC14"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>)}
            </div>
            <blockquote style={{ fontSize: '18px', color: 'var(--navy-900)', lineHeight: 1.75, fontStyle: 'italic', marginBottom: '1.5rem' }}>
              "Mark and Helen cleaned up two years of messy books, restructured our corporate ownership, and saved us over $22,000 in the first year alone. They actually explain what they're doing — that matters."
            </blockquote>
            <div style={{ fontWeight: 800, fontSize: '14.5px', color: 'var(--navy-900)' }}>Michael R.</div>
            <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Owner, Manufacturing Subcontractor · Brampton, ON</div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: '#0F294A', padding: '5rem 0', textAlign: 'center' }}>
        <div className="container">
          <div style={{ maxWidth: '680px', margin: '0 auto' }}>
            <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.4rem)', fontWeight: 800, color: '#FFFFFF', marginBottom: '1rem', letterSpacing: '-0.02em' }}>
              Ready to Stop Worrying About Your Books & Taxes?
            </h2>
            <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.85)', marginBottom: '2rem', lineHeight: 1.7 }}>
              Start with a free 30-minute discovery call. We'll review your situation and give you a clear, no-surprise quote.
            </p>
            <button onClick={() => onBookConsultation('Small Business')} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backgroundColor: '#FCAC14', color: '#0F294A', border: 'none', padding: '0.9rem 2.25rem', borderRadius: '4px', fontWeight: 800, fontSize: '15px', cursor: 'pointer' }}>
              <span>Book My Free Call</span><ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>
      <style>{`.industry-split-grid { @media (max-width: 900px) { grid-template-columns: 1fr !important; } }`}</style>
    </div>
  );
};
