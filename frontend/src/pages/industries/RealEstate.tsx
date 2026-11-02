import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, Phone, Home, Building2, ShieldCheck, TrendingUp } from 'lucide-react';

interface Props { onBookConsultation: (ctx?: string) => void; }

export const RealEstatePage: React.FC<Props> = ({ onBookConsultation }) => {
  useEffect(() => {
    document.title = 'CPA for Real Estate Investors Ontario — PREC, Holdco & Rental Income Tax | Puri & Loggia LLP';
    const m = document.querySelector('meta[name="description"]');
    if (m) m.setAttribute('content', 'Specialized CPA services for Ontario real estate investors. PREC setup, holding company structure, rental income reporting, HST on new builds, and tax-efficient ownership planning. GTA CPA firm.');
  }, []);

  const specialties = [
    { icon: <Building2 size={20} color="#D97706" />, title: 'Holding Company (Holdco) Structure', desc: 'Protect rental income inside a Holdco, access the Capital Gains Exemption, and separate personal liability from investment assets.' },
    { icon: <Home size={20} color="#D97706" />, title: 'PREC — Professional Real Estate Corporation', desc: 'For licensed REALTORS®: incorporate your practice, income-split with family members, and maximize the small business deduction.' },
    { icon: <ShieldCheck size={20} color="#D97706" />, title: 'Rental Income Tax Reporting', desc: 'Accurate T776 rental property statements, CCA (depreciation) optimization, and HST on commercial leases.' },
    { icon: <TrendingUp size={20} color="#D97706" />, title: 'Capital Gains & Disposition Planning', desc: 'Principal residence exemption planning, bare trust reporting, and tax-efficient property sale strategies.' },
  ];

  const services = [
    'Real estate holding company setup & ongoing CPA oversight',
    'PREC incorporation & professional corporation compliance',
    'Rental income (T776) reporting & CCA optimization',
    'HST on new residential construction & assignment sales',
    'Capital gains planning & principal residence exemptions',
    'Land transfer tax advisory & purchase structure optimization',
    'Short-term rental (Airbnb) HST compliance & reporting',
    'Corporate T2 filing for rental holding corporations',
    'Estate planning integration for multi-property portfolios',
  ];

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'FAQPage',
        mainEntity: [
          { '@type': 'Question', name: 'Do real estate investors in Ontario need a holding company?', acceptedAnswer: { '@type': 'Answer', text: 'A holding company (Holdco) can provide significant tax advantages for Ontario real estate investors, including creditor protection, tax-deferred growth inside the corporation, and the ability to income-split. However, whether a Holdco is beneficial depends on your specific situation. A CPA analysis is recommended.' } },
          { '@type': 'Question', name: 'Do I have to charge HST on my rental property in Ontario?', acceptedAnswer: { '@type': 'Answer', text: 'Residential rental income is generally HST-exempt in Ontario. However, HST applies to commercial rentals, short-term rentals (Airbnb), and new residential construction. The rules are complex and fact-specific — always confirm with a CPA.' } },
        ]
      })}} />

      <section style={{ backgroundColor: '#0F294A', color: '#FFFFFF', padding: 'clamp(3.5rem, 5vw, 5.5rem) 0' }}>
        <div className="container">
          <div style={{ maxWidth: '820px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backgroundColor: 'rgba(252,172,20,0.15)', border: '1px solid rgba(252,172,20,0.3)', borderRadius: '20px', padding: '0.3rem 0.9rem', marginBottom: '1.25rem' }}>
              <span style={{ fontSize: '12px', fontWeight: 700, color: '#FCAC14', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Real Estate</span>
            </div>
            <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.4rem)', fontWeight: 800, color: '#FFFFFF', lineHeight: 1.18, marginBottom: '1.25rem', letterSpacing: '-0.02em' }}>
              CPA for Ontario Real Estate<br />Investors &amp; REALTORS®
            </h1>
            <p style={{ fontSize: '17.5px', color: 'rgba(255,255,255,0.88)', lineHeight: 1.75, marginBottom: '2rem', maxWidth: '640px' }}>
              From PREC incorporations and holding company structures to rental income reporting and capital gains planning — we specialize in the tax strategies that maximize after-tax returns for Ontario real estate investors.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              <button onClick={() => onBookConsultation('Real Estate Tax Planning')} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backgroundColor: '#FCAC14', color: '#0F294A', border: 'none', padding: '0.9rem 2rem', borderRadius: '4px', fontWeight: 800, fontSize: '15px', cursor: 'pointer' }}>
                <span>Book a Free Strategy Call</span><ArrowRight size={16} />
              </button>
              <a href="tel:416-801-6746" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: '#FFFFFF', border: '1px solid rgba(255,255,255,0.35)', padding: '0.9rem 1.75rem', borderRadius: '4px', fontWeight: 700, fontSize: '14.5px', textDecoration: 'none', backgroundColor: 'rgba(255,255,255,0.08)' }}>
                <Phone size={15} /><span>416-801-6746</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: '#F8FAFC', borderBottom: '1px solid var(--border-light)', padding: '5rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3.5rem' }}>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 800, color: 'var(--navy-900)', letterSpacing: '-0.02em' }}>Real Estate Tax Specializations</h2>
            <p style={{ fontSize: '16px', color: 'var(--text-secondary)', lineHeight: 1.7, marginTop: '0.75rem' }}>Complex real estate tax situations require experienced CPAs — not generalists.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {specialties.map((s, i) => (
              <div key={i} style={{ backgroundColor: '#FFFFFF', border: '1px solid var(--border-light)', borderTop: '3px solid #FCAC14', borderRadius: '8px', padding: '2rem', boxShadow: 'var(--shadow-card)' }}>
                <div style={{ marginBottom: '0.75rem' }}>{s.icon}</div>
                <h3 style={{ fontSize: '17px', fontWeight: 800, color: 'var(--navy-900)', marginBottom: '0.5rem' }}>{s.title}</h3>
                <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.65, margin: 0 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: '#FFFFFF', padding: '5.5rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)', gap: '4rem', alignItems: 'center' }} className="industry-split-grid">
            <div>
              <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 800, color: 'var(--navy-900)', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>Real Estate CPA Services</h2>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2.5rem', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {services.map((s, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', fontSize: '14.5px', color: 'var(--navy-900)' }}>
                    <CheckCircle2 size={18} color="#D97706" style={{ flexShrink: 0, marginTop: '2px' }} /><span>{s}</span>
                  </li>
                ))}
              </ul>
              <button onClick={() => onBookConsultation('Real Estate')} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backgroundColor: '#FCAC14', color: '#0F294A', border: 'none', padding: '0.9rem 2rem', borderRadius: '4px', fontWeight: 800, fontSize: '14.5px', cursor: 'pointer' }}>
                <span>Discuss My Portfolio</span><ArrowRight size={16} />
              </button>
            </div>
            <div style={{ backgroundColor: '#0F294A', borderRadius: '10px', padding: '3rem 2.5rem', color: '#FFFFFF' }}>
              <div style={{ fontSize: '13px', fontWeight: 700, color: '#FCAC14', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '1rem' }}>A Case Example</div>
              <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#FFFFFF', marginBottom: '1rem', lineHeight: 1.35 }}>How We Helped a GTA Investor Restructure 3 Properties</h3>
              <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.85)', lineHeight: 1.7, marginBottom: '1.5rem' }}>An Oakville rental property investor came to us holding 3 properties personally. We restructured ownership through a Holdco, recovered $8,200 in previously unclaimed CCA, and created an income-splitting arrangement — reducing annual tax by over $19,000.</p>
              {['Holdco structure implemented in 60 days', '$19,000+ annual tax reduction', '$8,200 in recovered CCA deductions', 'Full estate integration completed'].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.65rem', fontSize: '13.5px', color: 'rgba(255,255,255,0.9)' }}>
                  <CheckCircle2 size={15} color="#FCAC14" style={{ flexShrink: 0 }} /><span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: '#0F294A', padding: '5rem 0', textAlign: 'center' }}>
        <div className="container">
          <div style={{ maxWidth: '680px', margin: '0 auto' }}>
            <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.4rem)', fontWeight: 800, color: '#FFFFFF', marginBottom: '1rem', letterSpacing: '-0.02em' }}>Maximize Your After-Tax Returns</h2>
            <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.85)', marginBottom: '2rem', lineHeight: 1.7 }}>Book a free 30-minute strategy call. We'll review your current property structure and identify tax opportunities most investors miss.</p>
            <button onClick={() => onBookConsultation('Real Estate')} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backgroundColor: '#FCAC14', color: '#0F294A', border: 'none', padding: '0.9rem 2.25rem', borderRadius: '4px', fontWeight: 800, fontSize: '15px', cursor: 'pointer' }}>
              <span>Book My Free Strategy Call</span><ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>
      <style>{`@media (max-width: 900px) { .industry-split-grid { grid-template-columns: 1fr !important; } }`}</style>
    </div>
  );
};
