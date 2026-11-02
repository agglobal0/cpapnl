import React, { useEffect } from 'react';
import { CheckCircle2, ArrowRight, Phone, Briefcase, ShieldCheck, TrendingUp, Users } from 'lucide-react';

interface Props { onBookConsultation: (ctx?: string) => void; }

export const ProfessionalServicesPage: React.FC<Props> = ({ onBookConsultation }) => {
  useEffect(() => {
    document.title = 'CPA for Professional Services — Dentists, Lawyers, Consultants Ontario | Puri & Loggia LLP';
    const m = document.querySelector('meta[name="description"]');
    if (m) m.setAttribute('content', 'CPA services for Ontario professional service firms: dentists, lawyers, engineers, consultants, and contractors. Professional corporation setup, income splitting, T2 filing, and practice management advisory. GTA CPA firm.');
  }, []);

  const profiles = [
    { icon: '🦷', title: 'Dentists & Physicians', desc: 'Dental/medical professional corporation setup, practice acquisition advisory, and income-splitting through family trusts.' },
    { icon: '⚖️', title: 'Lawyers & Paralegals', desc: 'Law Corporation compliance, trust accounting rules, and GST/HST on legal services. LLP structuring.' },
    { icon: '🏗️', title: 'Engineers & Architects', desc: 'Project-based revenue recognition, multi-provincial HST issues, and professional liability corporation setup.' },
    { icon: '💼', title: 'Consultants & Contractors', desc: 'T4 vs. T4A vs. corporation — we determine the most tax-efficient structure for your consulting practice.' },
  ];

  const services = [
    'Professional corporation (PC/PREC) incorporation & CRA compliance',
    'Income splitting through spousal salary & family trust structures',
    'Corporate T2 filing with small business deduction maximization',
    'GST/HST registration, filing & input tax credit recovery',
    'Payroll for professional corps: T4, T4A, dividends',
    'Holding company setup for passive investment income',
    'Year-end financial statements & management reporting',
    'Transition from sole proprietor to corporation — full support',
    'CRA audit representation & professional inquiries',
  ];

  return (
    <div>
      <section style={{ backgroundColor: '#0F294A', color: '#FFFFFF', padding: 'clamp(3.5rem, 5vw, 5.5rem) 0' }}>
        <div className="container">
          <div style={{ maxWidth: '820px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backgroundColor: 'rgba(252,172,20,0.15)', border: '1px solid rgba(252,172,20,0.3)', borderRadius: '20px', padding: '0.3rem 0.9rem', marginBottom: '1.25rem' }}>
              <span style={{ fontSize: '12px', fontWeight: 700, color: '#FCAC14', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Professional Services</span>
            </div>
            <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.4rem)', fontWeight: 800, color: '#FFFFFF', lineHeight: 1.18, marginBottom: '1.25rem', letterSpacing: '-0.02em' }}>
              CPA Specialists for Ontario<br />Professionals &amp; Service Firms
            </h1>
            <p style={{ fontSize: '17.5px', color: 'rgba(255,255,255,0.88)', lineHeight: 1.75, marginBottom: '2rem', maxWidth: '640px' }}>
              Dentists, lawyers, engineers, and consultants face unique tax complexity. We structure your practice for maximum after-tax income — through professional corporations, income splitting, and strategic advisory.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              <button onClick={() => onBookConsultation('Professional Services')} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backgroundColor: '#FCAC14', color: '#0F294A', border: 'none', padding: '0.9rem 2rem', borderRadius: '4px', fontWeight: 800, fontSize: '15px', cursor: 'pointer' }}>
                <span>Book a Free Consultation</span><ArrowRight size={16} />
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
            <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 800, color: 'var(--navy-900)', letterSpacing: '-0.02em' }}>We Serve Ontario Professionals Across Sectors</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
            {profiles.map((p, i) => (
              <div key={i} style={{ backgroundColor: '#FFFFFF', border: '1px solid var(--border-light)', borderTop: '3px solid #FCAC14', borderRadius: '8px', padding: '2rem', boxShadow: 'var(--shadow-card)' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{p.icon}</div>
                <h3 style={{ fontSize: '17px', fontWeight: 800, color: 'var(--navy-900)', marginBottom: '0.5rem' }}>{p.title}</h3>
                <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.65, margin: 0 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: '#FFFFFF', padding: '5.5rem 0' }}>
        <div className="container">
          <div style={{ maxWidth: '820px', margin: '0 auto' }}>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 800, color: 'var(--navy-900)', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>Professional Services CPA Scope</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '1rem' }}>
              {services.map((s, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', padding: '1rem 1.25rem', backgroundColor: '#F8FAFC', border: '1px solid var(--border-light)', borderRadius: '6px' }}>
                  <CheckCircle2 size={18} color="#D97706" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span style={{ fontSize: '14px', color: 'var(--navy-900)', lineHeight: 1.5 }}>{s}</span>
                </div>
              ))}
            </div>
            <div style={{ marginTop: '2.5rem' }}>
              <button onClick={() => onBookConsultation('Professional Services')} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backgroundColor: '#FCAC14', color: '#0F294A', border: 'none', padding: '0.9rem 2rem', borderRadius: '4px', fontWeight: 800, fontSize: '14.5px', cursor: 'pointer' }}>
                <span>Get a Custom Quote</span><ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: '#0F294A', padding: '5rem 0', textAlign: 'center' }}>
        <div className="container">
          <div style={{ maxWidth: '680px', margin: '0 auto' }}>
            <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.4rem)', fontWeight: 800, color: '#FFFFFF', marginBottom: '1rem', letterSpacing: '-0.02em' }}>Is Your Professional Corporation Optimized?</h2>
            <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.85)', marginBottom: '2rem', lineHeight: 1.7 }}>Most professionals we meet are leaving $10,000–$30,000 on the table annually through suboptimal corporate structure. Book a free call to find out what you're missing.</p>
            <button onClick={() => onBookConsultation('Professional Services')} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backgroundColor: '#FCAC14', color: '#0F294A', border: 'none', padding: '0.9rem 2.25rem', borderRadius: '4px', fontWeight: 800, fontSize: '15px', cursor: 'pointer' }}>
              <span>Book My Free Review</span><ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
