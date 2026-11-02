import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, Phone, Users, Clock, ShieldCheck, Calculator, FileText, AlertTriangle } from 'lucide-react';

interface Props { onBookConsultation: (ctx?: string) => void; }

export const Payroll: React.FC<Props> = ({ onBookConsultation }) => {
  useEffect(() => {
    document.title = 'Payroll Services for Ontario Small Business — CRA Remittance & T4 | Puri & Loggia LLP';
    const m = document.querySelector('meta[name="description"]');
    if (m) m.setAttribute('content', 'Full-service payroll management for Ontario small businesses. CRA payroll deductions (PD7A), T4 slips, ROE filing, WSIB/EHT, and payroll setup in Wagepoint or QuickBooks. Brampton & GTA CPA firm.');
  }, []);

  const features = [
    { icon: <Clock size={22} color="#D97706" />, title: 'On-Time, Every Time', desc: 'Payroll processed on your schedule — weekly, bi-weekly, or semi-monthly. Never a late CRA remittance.' },
    { icon: <ShieldCheck size={22} color="#D97706" />, title: 'Full CRA Compliance', desc: 'We handle CPP, EI, and income tax source deductions. PD7A remittances filed correctly and on time.' },
    { icon: <FileText size={22} color="#D97706" />, title: 'Year-End T4 & ROE', desc: 'T4 slips prepared and filed with CRA by February 28. ROE (Record of Employment) issued immediately on termination.' },
    { icon: <Calculator size={22} color="#D97706" />, title: 'WSIB & EHT Filing', desc: 'Ontario Employer Health Tax (EHT) and WSIB filings managed alongside your regular payroll cycle.' },
  ];

  const included = [
    'Payroll setup & employee onboarding in payroll software',
    'Weekly, bi-weekly, or semi-monthly payroll runs',
    'CRA source deductions: CPP, EI & income tax calculation',
    'PD7A remittance filing (regular & accelerated remitters)',
    'T4 & T4A slip preparation, distribution & CRA filing',
    'ROE (Record of Employment) on termination or leave',
    'Employer Health Tax (EHT) registration & annual filing',
    'WSIB account setup & premium reconciliation',
    'Paid time off (vacation pay) tracking & compliance',
    'New hire reporting to CRA (TD1 forms & onboarding)',
    'Direct deposit setup & pay stub delivery',
    'Year-end payroll reconciliation & tax slip verification',
  ];

  const penalties = [
    { trigger: 'Late PD7A remittance (1–3 days)', penalty: '3% of amount owing' },
    { trigger: 'Late PD7A remittance (4–5 days)', penalty: '5% of amount owing' },
    { trigger: 'Late PD7A remittance (6–7 days)', penalty: '7% of amount owing' },
    { trigger: 'Late PD7A remittance (over 7 days)', penalty: '10% of amount owing' },
    { trigger: 'Late T4 filing (after Feb 28)', penalty: '$100–$7,500 based on number of slips' },
    { trigger: 'Failure to deduct CPP or EI', penalty: '10% penalty + interest on shortfall' },
  ];

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'FAQPage',
        mainEntity: [
          { '@type': 'Question', name: 'How often do I need to remit payroll deductions to CRA in Ontario?', acceptedAnswer: { '@type': 'Answer', text: 'Remittance frequency depends on your average monthly withholdings. Most small businesses are regular remitters who must remit by the 15th of the following month. Employers with over $25,000 in monthly withholdings are accelerated remitters due twice a month. Late remittances incur penalties of 3–10% plus interest.' } },
          { '@type': 'Question', name: 'What is the deadline for T4 slips in Canada?', acceptedAnswer: { '@type': 'Answer', text: 'T4 slips must be distributed to employees and filed electronically with the CRA by the last day of February (February 28 or 29 in a leap year) for the prior calendar year. Late filing penalties range from $100 to $7,500 depending on the number of slips.' } },
          { '@type': 'Question', name: 'What is WSIB and does my Ontario business need it?', acceptedAnswer: { '@type': 'Answer', text: 'WSIB (Workplace Safety and Insurance Board) provides wage replacement and medical coverage for work-related injuries in Ontario. Most Ontario businesses with employees are required to register with WSIB and pay premiums based on their industry rate group and insurable earnings. Some industries and owner-operators may be exempt.' } },
        ]
      })}} />

      {/* Hero */}
      <section style={{ backgroundColor: '#0F294A', color: '#FFFFFF', padding: 'clamp(3.5rem, 5vw, 5.5rem) 0' }}>
        <div className="container">
          <div style={{ maxWidth: '820px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backgroundColor: 'rgba(252,172,20,0.15)', border: '1px solid rgba(252,172,20,0.3)', borderRadius: '20px', padding: '0.3rem 0.9rem', marginBottom: '1.25rem' }}>
              <Users size={14} color="#FCAC14" />
              <span style={{ fontSize: '12px', fontWeight: 700, color: '#FCAC14', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Payroll Services</span>
            </div>
            <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.4rem)', fontWeight: 800, color: '#FFFFFF', lineHeight: 1.18, marginBottom: '1.25rem', letterSpacing: '-0.02em' }}>
              Full-Service Payroll Management<br />for Ontario Small Business
            </h1>
            <p style={{ fontSize: '17.5px', color: 'rgba(255,255,255,0.88)', lineHeight: 1.75, marginBottom: '2rem', maxWidth: '640px' }}>
              Payroll mistakes are expensive — CRA penalties, late T4s, and missed remittances add up fast. We handle your complete payroll cycle so you pay employees accurately, stay CRA-compliant, and never miss a deadline.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              <button onClick={() => onBookConsultation('Payroll Services')} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backgroundColor: '#FCAC14', color: '#0F294A', border: 'none', padding: '0.9rem 2rem', borderRadius: '4px', fontWeight: 800, fontSize: '15px', cursor: 'pointer' }}>
                <span>Set Up My Payroll</span><ArrowRight size={16} />
              </button>
              <a href="tel:416-801-6746" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: '#FFFFFF', border: '1px solid rgba(255,255,255,0.35)', padding: '0.9rem 1.75rem', borderRadius: '4px', fontWeight: 700, fontSize: '14.5px', textDecoration: 'none', backgroundColor: 'rgba(255,255,255,0.08)' }}>
                <Phone size={15} /><span>416-801-6746</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Feature Cards */}
      <section style={{ backgroundColor: '#F8FAFC', borderBottom: '1px solid var(--border-light)', padding: '5rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3.5rem' }}>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 800, color: 'var(--navy-900)', letterSpacing: '-0.02em' }}>
              Payroll Done Right — Every Pay Period
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--text-secondary)', lineHeight: 1.7, marginTop: '0.75rem' }}>
              From first hire to year-end T4 filing, we manage the full payroll lifecycle for your business.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
            {features.map((f, i) => (
              <div key={i} style={{ backgroundColor: '#FFFFFF', border: '1px solid var(--border-light)', borderTop: '3px solid #FCAC14', borderRadius: '8px', padding: '2rem', boxShadow: 'var(--shadow-card)' }}>
                <div style={{ marginBottom: '0.75rem' }}>{f.icon}</div>
                <h3 style={{ fontSize: '17px', fontWeight: 800, color: 'var(--navy-900)', marginBottom: '0.5rem' }}>{f.title}</h3>
                <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.65, margin: 0 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full Services List */}
      <section style={{ backgroundColor: '#FFFFFF', padding: '5.5rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)', gap: '4rem', alignItems: 'start' }} className="payroll-split-grid">
            <div>
              <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 800, color: 'var(--navy-900)', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
                Everything Included in Our Payroll Service
              </h2>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2.5rem', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {included.map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', fontSize: '14.5px', color: 'var(--navy-900)' }}>
                    <CheckCircle2 size={18} color="#D97706" style={{ flexShrink: 0, marginTop: '2px' }} /><span>{item}</span>
                  </li>
                ))}
              </ul>
              <button onClick={() => onBookConsultation('Payroll Services')} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backgroundColor: '#FCAC14', color: '#0F294A', border: 'none', padding: '0.9rem 2rem', borderRadius: '4px', fontWeight: 800, fontSize: '14.5px', cursor: 'pointer' }}>
                <span>Start My Payroll Setup</span><ArrowRight size={16} />
              </button>
            </div>

            {/* CRA Penalty Reference */}
            <div>
              <div style={{ backgroundColor: '#FEF2F2', border: '1px solid #FECACA', borderRadius: '8px', padding: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.25rem' }}>
                  <AlertTriangle size={20} color="#DC2626" />
                  <h3 style={{ fontSize: '17px', fontWeight: 800, color: '#991B1B', margin: 0 }}>CRA Payroll Penalty Reference</h3>
                </div>
                <p style={{ fontSize: '13.5px', color: '#7F1D1D', marginBottom: '1.25rem', lineHeight: 1.6 }}>
                  CRA payroll penalties are automatic and non-negotiable. Missing one remittance deadline can cost hundreds to thousands of dollars.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                  {penalties.map((p, i) => (
                    <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem', padding: '0.65rem 0.85rem', backgroundColor: '#FFFFFF', borderRadius: '4px', border: '1px solid #FECACA' }}>
                      <span style={{ fontSize: '13px', color: '#7F1D1D', flex: 1, lineHeight: 1.4 }}>{p.trigger}</span>
                      <span style={{ fontSize: '12.5px', fontWeight: 800, color: '#DC2626', whiteSpace: 'nowrap' }}>{p.penalty}</span>
                    </div>
                  ))}
                </div>
                <p style={{ fontSize: '12px', color: '#9CA3AF', marginTop: '0.85rem', lineHeight: 1.5 }}>Source: Canada Revenue Agency. Penalties subject to change. Interest also applies on outstanding amounts.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: '#0F294A', padding: '5rem 0', textAlign: 'center' }}>
        <div className="container">
          <div style={{ maxWidth: '680px', margin: '0 auto' }}>
            <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.4rem)', fontWeight: 800, color: '#FFFFFF', marginBottom: '1rem', letterSpacing: '-0.02em' }}>
              Let Us Handle Your Payroll — Start This Pay Period
            </h2>
            <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.85)', marginBottom: '2rem', lineHeight: 1.7 }}>
              Book a free 20-minute call. We'll assess your current payroll setup and get you running on a compliant, automated system within days.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button onClick={() => onBookConsultation('Payroll')} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backgroundColor: '#FCAC14', color: '#0F294A', border: 'none', padding: '0.9rem 2rem', borderRadius: '4px', fontWeight: 800, fontSize: '15px', cursor: 'pointer' }}>
                <span>Set Up My Payroll Today</span><ArrowRight size={16} />
              </button>
              <Link to="/resources/tax-deadlines" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: '#FFFFFF', border: '1px solid rgba(255,255,255,0.35)', padding: '0.9rem 1.75rem', borderRadius: '4px', fontWeight: 700, fontSize: '14.5px', textDecoration: 'none' }}>
                <span>View CRA Payroll Deadlines →</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <style>{`@media (max-width: 900px) { .payroll-split-grid { grid-template-columns: 1fr !important; } }`}</style>
    </div>
  );
};
