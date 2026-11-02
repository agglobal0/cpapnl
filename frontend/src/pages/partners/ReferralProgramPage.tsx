import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, Handshake, ShieldCheck, CheckCircle2, ArrowRight, Phone, Mail, 
  Building2, Briefcase, Award, Sparkles, Scale, Landmark, FileText 
} from 'lucide-react';
import { api } from '../../services/api';
import { trackEvent } from '../../services/analytics';

interface Props {
  onBookConsultation?: (context?: string) => void;
}

export const ReferralProgramPage: React.FC<Props> = ({ onBookConsultation }) => {
  useEffect(() => {
    document.title = 'Professional Referral Partner Program | Puri & Loggia LLP';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Partner with Puri & Loggia LLP. We collaborate with corporate lawyers, mortgage brokers, wealth managers, and realtors to provide reliable CPA services to your Canadian clients.'
      );
    }
  }, []);

  const [partnerName, setPartnerName] = useState('');
  const [partnerEmail, setPartnerEmail] = useState('');
  const [partnerPhone, setPartnerPhone] = useState('');
  const [partnerFirm, setPartnerFirm] = useState('');
  const [partnerProfession, setPartnerProfession] = useState('Corporate Lawyer');
  const [partnerNotes, setPartnerNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!partnerEmail.trim()) return;

    setIsSubmitting(true);
    try {
      await api.submitContact({
        name: partnerName,
        email: partnerEmail,
        phone: partnerPhone,
        company: `${partnerFirm} (${partnerProfession})`,
        service: 'Referral Partner Program',
        message: `Profession: ${partnerProfession}\nFirm: ${partnerFirm}\nNotes: ${partnerNotes}`,
      });
      setIsSubmitted(true);
      trackEvent('referral_partner_inquiry', { profession: partnerProfession });
    } catch {
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const partnerTypes = [
    {
      icon: <Scale size={24} color="#FCAC14" />,
      title: 'Corporate & Commercial Lawyers',
      description:
        'We collaborate on section 85 rollovers, holding company setups, share reorganizations, minute book review, and M&A tax due diligence for mutual business clients.',
    },
    {
      icon: <Building2 size={24} color="#FCAC14" />,
      title: 'Commercial & Residential REALTORS®',
      description:
        'We advise realtors and property investors on PREC incorporation, HST on new residential developments, assignment sales, and holding company structures.',
    },
    {
      icon: <Landmark size={24} color="#FCAC14" />,
      title: 'Mortgage Brokers & Lenders',
      description:
        'We deliver rapid, verified Notice of Assessment (NOA) packages, T2 corporate tax returns, and compilation financial statements to expedite commercial & residential financing.',
    },
    {
      icon: <Briefcase size={24} color="#FCAC14" />,
      title: 'Financial Planners & Wealth Advisors',
      description:
        'We coordinate corporate estate freezes, family trust distributions, capital dividend account (CDA) extractions, and corporate-owned life insurance optimization.',
    },
  ];

  return (
    <div>
      {/* 1. Hero */}
      <section
        style={{
          backgroundColor: '#0F294A',
          color: '#FFFFFF',
          paddingTop: 'clamp(3.5rem, 5.5vw, 5.5rem)',
          paddingBottom: 'clamp(3.5rem, 5.5vw, 5rem)',
          borderBottom: '4px solid #FCAC14',
        }}
      >
        <div className="container">
          <div style={{ maxWidth: '840px' }}>
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
              <Handshake size={15} color="#FCAC14" />
              <span
                style={{
                  fontSize: '12px',
                  fontWeight: 800,
                  color: '#FCAC14',
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                }}
              >
                B2B Professional Alliance
              </span>
            </div>

            <h1
              style={{
                fontSize: 'clamp(2.2rem, 4vw, 3.4rem)',
                fontWeight: 800,
                color: '#FFFFFF',
                lineHeight: 1.18,
                marginBottom: '1.25rem',
                letterSpacing: '-0.02em',
              }}
            >
              A Trusted CPA Practice in Your Corner.<br />Confidence for Your Clients.
            </h1>

            <p
              style={{
                fontSize: 'clamp(1.05rem, 1.5vw, 1.2rem)',
                color: 'rgba(255, 255, 255, 0.9)',
                lineHeight: 1.75,
                marginBottom: '2rem',
                maxWidth: '680px',
              }}
            >
              When your clients need meticulous corporate tax, pristine compilation statements, or multi-entity structuring, you need a responsive, senior CPA partner you can introduce with complete confidence.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              <a
                href="#partner-form"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  backgroundColor: '#FCAC14',
                  color: '#0F294A',
                  padding: '0.9rem 2rem',
                  borderRadius: '4px',
                  fontWeight: 800,
                  fontSize: '15px',
                  textDecoration: 'none',
                  boxShadow: '0 4px 14px rgba(252, 172, 20, 0.35)',
                }}
              >
                <span>Connect with Partners</span>
                <ArrowRight size={16} />
              </a>

              <a
                href="tel:416-801-6746"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: '#FFFFFF',
                  border: '1px solid rgba(255, 255, 255, 0.35)',
                  padding: '0.9rem 1.75rem',
                  borderRadius: '4px',
                  fontWeight: 700,
                  fontSize: '14.5px',
                  textDecoration: 'none',
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                }}
              >
                <Phone size={15} />
                <span>Mark Puri: 416-801-6746</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Why Partner Strip */}
      <section style={{ backgroundColor: '#F8FAFC', borderBottom: '1px solid var(--border-light)', padding: '5rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '740px', margin: '0 auto 3.5rem' }}>
            <h2
              style={{
                fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
                fontWeight: 800,
                color: 'var(--navy-900)',
                letterSpacing: '-0.02em',
                marginBottom: '1rem',
              }}
            >
              Why Leading Ontario Professionals Refer Clients to Us
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>
              Your reputation is on the line with every referral. Here is our commitment to our professional network:
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
            {[
              {
                title: 'Direct Partner Level Attention',
                desc: 'Your clients are never handed off to uncertified juniors or offshore call centers. Every file is directed by Mark Puri, CPA, MBA or Helen Loggia, CPA, MBA.',
              },
              {
                title: 'Prompt Communication & Turnaround',
                desc: 'We know commercial deals and mortgage submissions run on tight deadlines. We respond within 24 business hours.',
              },
              {
                title: 'Full Confidentiality & Non-Poaching',
                desc: 'We strictly stay in our lane as CPAs and advisors. We protect your client relationships and actively cross-refer clients who require legal or lending counsel.',
              },
              {
                title: 'Regulated by CPA Ontario',
                desc: 'Our practice adheres to the highest statutory ethical, compilation, and compliance standards set by the Chartered Professional Accountants of Ontario.',
              },
            ].map((col, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: '#FFFFFF',
                  border: '1px solid var(--border-light)',
                  borderTop: '3px solid #FCAC14',
                  borderRadius: '8px',
                  padding: '2rem',
                  boxShadow: 'var(--shadow-card)',
                }}
              >
                <div style={{ marginBottom: '1rem' }}>
                  <CheckCircle2 size={22} color="#D97706" />
                </div>
                <h3 style={{ fontSize: '17px', fontWeight: 800, color: 'var(--navy-900)', marginBottom: '0.65rem' }}>
                  {col.title}
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.65, margin: 0 }}>
                  {col.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Professional Segments */}
      <section style={{ backgroundColor: '#FFFFFF', padding: '5.5rem 0' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', margin: '0 auto 3.5rem', textAlign: 'center' }}>
            <h2
              style={{
                fontSize: 'clamp(1.8rem, 3vw, 2.4rem)',
                fontWeight: 800,
                color: 'var(--navy-900)',
                marginBottom: '1rem',
                letterSpacing: '-0.02em',
              }}
            >
              Who We Collaborate With
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
              Tailored workflows aligned to your specific professional requirements.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))', gap: '2rem' }}>
            {partnerTypes.map((pt, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: '#F8FAFC',
                  borderRadius: '8px',
                  padding: '2.25rem',
                  border: '1px solid var(--border-light)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <div
                    style={{
                      width: '50px',
                      height: '50px',
                      borderRadius: '8px',
                      backgroundColor: 'rgba(15, 41, 74, 0.08)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '1.25rem',
                    }}
                  >
                    {pt.icon}
                  </div>
                  <h3 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--navy-900)', marginBottom: '0.75rem' }}>
                    {pt.title}
                  </h3>
                  <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.65, margin: 0 }}>
                    {pt.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Partner Inquiry Form */}
      <section
        id="partner-form"
        style={{
          backgroundColor: '#0F294A',
          color: '#FFFFFF',
          padding: '5.5rem 0',
        }}
      >
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '4rem',
              alignItems: 'center',
            }}
          >
            <div>
              <span
                style={{
                  fontSize: '12px',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: '#FCAC14',
                  display: 'block',
                  marginBottom: '0.75rem',
                }}
              >
                Direct Partner Dialogue
              </span>
              <h2
                style={{
                  fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
                  fontWeight: 800,
                  color: '#FFFFFF',
                  marginBottom: '1.25rem',
                  lineHeight: 1.25,
                  letterSpacing: '-0.02em',
                }}
              >
                Let’s Discuss How We Can Support Your Clients
              </h2>
              <p
                style={{
                  fontSize: '16px',
                  color: 'rgba(255, 255, 255, 0.88)',
                  lineHeight: 1.75,
                  marginBottom: '2rem',
                }}
              >
                Whether you have an immediate client who needs specialized corporate restructuring or you are looking to build a reliable ongoing CPA alliance, we welcome a confidential discussion.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '14px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                  <Phone size={16} color="#FCAC14" />
                  <span>
                    Mark Puri, CPA, MBA:{' '}
                    <a href="tel:416-801-6746" style={{ color: '#FCAC14', fontWeight: 700, textDecoration: 'none' }}>
                      416-801-6746
                    </a>
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                  <Phone size={16} color="#FCAC14" />
                  <span>
                    Helen Loggia, CPA, MBA:{' '}
                    <a href="tel:416-805-1427" style={{ color: '#FCAC14', fontWeight: 700, textDecoration: 'none' }}>
                      416-805-1427
                    </a>
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                  <Mail size={16} color="#FCAC14" />
                  <span>
                    Direct Email:{' '}
                    <a href="mailto:support@cpapnl.com" style={{ color: '#FFFFFF', fontWeight: 600, textDecoration: 'none' }}>
                      support@cpapnl.com
                    </a>
                  </span>
                </div>
              </div>
            </div>

            {/* Form Container */}
            <div
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '8px',
                padding: '2.5rem',
                color: 'var(--navy-900)',
                boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
              }}
            >
              <h3 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--navy-900)', marginBottom: '0.5rem' }}>
                Referral Partner Connection
              </h3>
              <p style={{ fontSize: '13.5px', color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: 1.5 }}>
                Share your details and one of our partners will follow up within 1 business day.
              </p>

              {isSubmitted ? (
                <div
                  style={{
                    backgroundColor: '#F0FDF4',
                    border: '1px solid #BBF7D0',
                    borderRadius: '6px',
                    padding: '2rem',
                    textAlign: 'center',
                  }}
                >
                  <CheckCircle2 size={36} color="#16A34A" style={{ margin: '0 auto 0.75rem' }} />
                  <div style={{ fontWeight: 800, fontSize: '16px', color: '#166534', marginBottom: '0.4rem' }}>
                    Thank You for Connecting!
                  </div>
                  <p style={{ fontSize: '13.5px', color: '#14532D', margin: 0, lineHeight: 1.5 }}>
                    Your message was delivered directly to Mark Puri and Helen Loggia. We look forward to speaking soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, marginBottom: '0.3rem' }}>
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={partnerName}
                      onChange={(e) => setPartnerName(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '0.65rem 0.85rem',
                        border: '1px solid #CBD5E1',
                        borderRadius: '4px',
                        fontSize: '13.5px',
                        boxSizing: 'border-box',
                      }}
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, marginBottom: '0.3rem' }}>
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="jane@lawfirm.ca"
                        value={partnerEmail}
                        onChange={(e) => setPartnerEmail(e.target.value)}
                        style={{
                          width: '100%',
                          padding: '0.65rem 0.85rem',
                          border: '1px solid #CBD5E1',
                          borderRadius: '4px',
                          fontSize: '13.5px',
                          boxSizing: 'border-box',
                        }}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, marginBottom: '0.3rem' }}>
                        Phone *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="416-555-0123"
                        value={partnerPhone}
                        onChange={(e) => setPartnerPhone(e.target.value)}
                        style={{
                          width: '100%',
                          padding: '0.65rem 0.85rem',
                          border: '1px solid #CBD5E1',
                          borderRadius: '4px',
                          fontSize: '13.5px',
                          boxSizing: 'border-box',
                        }}
                      />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, marginBottom: '0.3rem' }}>
                        Profession *
                      </label>
                      <select
                        value={partnerProfession}
                        onChange={(e) => setPartnerProfession(e.target.value)}
                        style={{
                          width: '100%',
                          padding: '0.65rem 0.85rem',
                          border: '1px solid #CBD5E1',
                          borderRadius: '4px',
                          fontSize: '13.5px',
                          boxSizing: 'border-box',
                          backgroundColor: '#FFFFFF',
                        }}
                      >
                        <option value="Corporate Lawyer">Corporate Lawyer</option>
                        <option value="Real Estate Broker">Real Estate Broker</option>
                        <option value="Mortgage Broker">Mortgage Broker</option>
                        <option value="Wealth Advisor">Wealth Advisor</option>
                        <option value="Business Consultant">Business Consultant</option>
                        <option value="Other">Other Professional</option>
                      </select>
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, marginBottom: '0.3rem' }}>
                        Firm / Practice Name
                      </label>
                      <input
                        type="text"
                        placeholder="Acme Legal LLP"
                        value={partnerFirm}
                        onChange={(e) => setPartnerFirm(e.target.value)}
                        style={{
                          width: '100%',
                          padding: '0.65rem 0.85rem',
                          border: '1px solid #CBD5E1',
                          borderRadius: '4px',
                          fontSize: '13.5px',
                          boxSizing: 'border-box',
                        }}
                      />
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, marginBottom: '0.3rem' }}>
                      How Can We Collaborate? (Optional)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="e.g. We have mutual corporate clients needing Holding Company and PREC advice..."
                      value={partnerNotes}
                      onChange={(e) => setPartnerNotes(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '0.65rem 0.85rem',
                        border: '1px solid #CBD5E1',
                        borderRadius: '4px',
                        fontSize: '13.5px',
                        boxSizing: 'border-box',
                        fontFamily: 'inherit',
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    style={{
                      backgroundColor: '#FCAC14',
                      color: '#0F294A',
                      border: 'none',
                      padding: '0.85rem',
                      borderRadius: '4px',
                      fontWeight: 800,
                      fontSize: '14.5px',
                      cursor: 'pointer',
                      marginTop: '0.5rem',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                    }}
                  >
                    {isSubmitting ? 'Transmitting...' : 'Connect with Partners →'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
