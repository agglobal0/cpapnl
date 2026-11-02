import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, ShieldCheck, CheckCircle2, TrendingUp, BookOpen, 
  Calculator, Calendar, Award, ChevronRight, Check, Phone, Mail,
  Clock, Sparkles, Building2, Layers, BarChart3
} from 'lucide-react';
import { VERIFIED_SERVICES, VERIFIED_PARTNERS, DEFAULT_BLOG_POSTS, api } from '../services/api';

import { trackEvent } from '../services/analytics';

interface HomeProps {
  onBookConsultation: (context?: string) => void;
  onOpenLeadModal: (resource: any) => void;
  onOpenStripeModal: () => void;
}

export const Home: React.FC<HomeProps> = ({
  onBookConsultation,
  onOpenLeadModal,
  onOpenStripeModal
}) => {
  // Set SEO document title and meta description dynamically
  useEffect(() => {
    document.title = 'Chartered Professional Accountants in Toronto & Ontario | Puri & Loggia LLP';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Puri & Loggia LLP provides expert cloud bookkeeping, corporate tax filing (T2), CRA audit protection, and business advisory services for Ontario and Canadian entrepreneurs.'
      );
    }
  }, []);

  // Hero 7-Steps Course Form State
  const [heroFirstName, setHeroFirstName] = useState('');
  const [heroLastName, setHeroLastName] = useState('');
  const [heroEmail, setHeroEmail] = useState('');
  const [heroSubmitting, setHeroSubmitting] = useState(false);
  const [heroSuccess, setHeroSuccess] = useState(false);


  const handleHeroSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!heroEmail.trim()) return;

    setHeroSubmitting(true);
    try {
      await api.submitLead({
        name: `${heroFirstName} ${heroLastName}`.trim(),
        email: heroEmail,
        resourceId: '7-steps-to-growing-your-business',
        resourceTitle: '7 Steps to Growing Your Business Course'
      });
      setHeroSuccess(true);
      trackEvent('lead_captured_hero', { resource: '7-steps-course' });
    } catch {
      setHeroSuccess(true);
    } finally {
      setHeroSubmitting(false);
    }
  };

  return (
    <div>
      {/* Comprehensive JSON-LD Local Accounting Service Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'AccountingService',
            name: 'Puri & Loggia LLP',
            alternateName: 'PnL Chartered Professional Accountants',
            url: 'https://cpapnl.com/',
            logo: 'https://cpapnl.com/wp-content/uploads/cropped-crop-546-3-colored-chosen.png',
            image: 'https://cpapnl.com/wp-content/uploads/cropped-crop-546-3-colored-chosen.png',
            description:
              'Puri & Loggia LLP is a licensed Ontario Chartered Professional Accounting practice offering cloud bookkeeping, corporate tax preparation (T2), GST/HST filing, CRA audit defense, and business advisory services for Canadian entrepreneurs.',
            telephone: '+1-416-801-6746',
            email: 'support@cpapnl.com',
            priceRange: '$$',
            address: {
              '@type': 'PostalAddress',
              addressRegion: 'Ontario',
              addressCountry: 'CA',
            },
            geo: {
              '@type': 'GeoCoordinates',
              latitude: 43.6532,
              longitude: -79.3832,
            },
            areaServed: [
              { '@type': 'City', name: 'Toronto' },
              { '@type': 'City', name: 'Mississauga' },
              { '@type': 'AdministrativeArea', name: 'Greater Toronto Area' },
              { '@type': 'AdministrativeArea', name: 'Ontario' },
              { '@type': 'Country', name: 'Canada' },
            ],
            knowsAbout: [
              'Corporate Tax Preparation T2',
              'Cloud Bookkeeping',
              'Xero Accounting',
              'QuickBooks Online',
              'CRA Audit Defense',
              'GST/HST Filing',
              'CCPC Tax Planning',
              'Payroll Services Canada',
              'Cash Flow Forecasting',
            ],
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'Accounting, Bookkeeping & Tax Services',
              itemListElement: [
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Accounting & Cloud Bookkeeping',
                    description:
                      'Automated monthly bookkeeping, bank reconciliations, payroll, and financial reporting with Xero and QuickBooks Online.',
                  },
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Corporate & Personal Taxation',
                    description:
                      'T2 corporate income tax filing, GST/HST preparation, owner salary vs dividend optimization, and CRA audit representation.',
                  },
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Consulting & Technology Advisory',
                    description:
                      'Strategic business planning, 13-week dynamic cash flow forecasting, cloud software setup, and operational advisory.',
                  },
                },
              ],
            },
          }),
        }}
      />

      {/* 1. Hero Section: Simple, Punchy & High-Converting */}
      <section 
        style={{ 
          position: 'relative',
          backgroundImage: 'linear-gradient(rgba(15, 33, 58, 0.88), rgba(15, 33, 58, 0.92)), url("/images/main_hero_bg.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: '#FFFFFF',
          paddingTop: 'clamp(3.5rem, 6vw, 5.5rem)',
          paddingBottom: 'clamp(4rem, 6vw, 6rem)',
        }}
      >
        <div className="container">
          <div 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'minmax(0, 1.25fr) minmax(320px, 420px)', 
              gap: '3.5rem',
              alignItems: 'center'
            }}
            className="home-hero-grid"
          >
            {/* Left: Punchy Headline & Value Proposition */}
            <div>

              <h1 
                style={{ 
                  fontSize: 'clamp(2.3rem, 4.3vw, 3.6rem)', 
                  lineHeight: 1.18, 
                  color: '#FFFFFF',
                  marginBottom: '1.25rem',
                  letterSpacing: '-0.02em',
                  fontWeight: 800,
                  textShadow: '0 2px 10px rgba(0,0,0,0.3)'
                }}
              >
                Focused on Helping Canadian Entrepreneurs Grow Their Business
              </h1>

              <p 
                style={{ 
                  fontSize: 'clamp(1.05rem, 1.5vw, 1.2rem)', 
                  color: 'rgba(255, 255, 255, 0.92)', 
                  lineHeight: 1.65,
                  marginBottom: '2rem',
                  maxWidth: '620px'
                }}
              >
                We remove the burden of bookkeeping, corporate T2 tax, and CRA compliance. The experienced partners at <strong>Puri &amp; Loggia LLP</strong> provide clean financial numbers, proactive tax minimization, and direct CPA advice so you can build your business with total confidence.
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
                <Link 
                  to="/services/accounting-bookkeeping" 
                  className="btn btn-primary btn-lg"
                  style={{ 
                    backgroundColor: '#FCAC14', 
                    borderColor: '#FCAC14', 
                    color: '#0F294A',
                    fontWeight: 800,
                    boxShadow: '0 4px 14px rgba(252, 172, 20, 0.4)',
                    gap: '0.5rem',
                    padding: '0.9rem 2rem'
                  }}
                >
                  <span>Explore Our Services</span>
                  <ArrowRight size={18} />
                </Link>

                <Link 
                  to="/contact" 
                  className="btn btn-secondary btn-lg"
                  style={{ 
                    color: '#FFFFFF',
                    borderColor: 'rgba(255, 255, 255, 0.35)',
                    backgroundColor: 'rgba(255, 255, 255, 0.08)',
                    padding: '0.9rem 1.85rem'
                  }}
                >
                  <span>Contact Our Office</span>
                </Link>
              </div>

            </div>

            {/* Right: 7 Steps to Growing Your Business Form */}
            <div 
              style={{
                backgroundColor: 'rgba(15, 33, 58, 0.95)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderTop: '4px solid #FCAC14',
                borderRadius: '8px',
                padding: '2.25rem',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.45)',
                backdropFilter: 'blur(8px)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.4rem' }}>
                <Award size={22} color="#FCAC14" />
                <h2 style={{ fontSize: '20px', fontWeight: 800, color: '#FFFFFF', margin: 0, letterSpacing: '-0.01em' }}>
                  7 Steps to growing your business
                </h2>
              </div>

              <p style={{ fontSize: '13.5px', color: 'rgba(255, 255, 255, 0.85)', lineHeight: 1.55, marginBottom: '1.5rem' }}>
                Sign up for our free 7-day email course full of practical, proven strategies to maximize cash flow, reduce taxes, and accelerate growth.
              </p>

              {heroSuccess ? (
                <div style={{ padding: '1.75rem', backgroundColor: 'rgba(34, 197, 94, 0.15)', border: '1px solid #22C55E', borderRadius: '6px', textAlign: 'center' }}>
                  <CheckCircle2 size={36} color="#4ADE80" style={{ margin: '0 auto 0.75rem' }} />
                  <div style={{ color: '#FFFFFF', fontWeight: 800, fontSize: '16px', marginBottom: '0.35rem' }}>
                    Welcome to the Course!
                  </div>
                  <p style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '13.5px', margin: 0, lineHeight: 1.5 }}>
                    Step 1 is on its way to <strong>{heroEmail}</strong>. Check your inbox to begin today.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleHeroSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: 'rgba(255, 255, 255, 0.85)', marginBottom: '0.35rem' }}>
                      Name (Required)
                    </label>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.65rem' }}>
                      <input
                        type="text"
                        required
                        placeholder="First"
                        value={heroFirstName}
                        onChange={(e) => setHeroFirstName(e.target.value)}
                        style={{
                          width: '100%',
                          padding: '0.75rem 0.85rem',
                          borderRadius: '4px',
                          border: '1px solid rgba(255, 255, 255, 0.25)',
                          backgroundColor: '#FFFFFF',
                          color: '#0F294A',
                          fontSize: '13.5px',
                          outline: 'none',
                          boxSizing: 'border-box'
                        }}
                      />
                      <input
                        type="text"
                        required
                        placeholder="Last"
                        value={heroLastName}
                        onChange={(e) => setHeroLastName(e.target.value)}
                        style={{
                          width: '100%',
                          padding: '0.75rem 0.85rem',
                          borderRadius: '4px',
                          border: '1px solid rgba(255, 255, 255, 0.25)',
                          backgroundColor: '#FFFFFF',
                          color: '#0F294A',
                          fontSize: '13.5px',
                          outline: 'none',
                          boxSizing: 'border-box'
                        }}
                      />
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: 'rgba(255, 255, 255, 0.85)', marginBottom: '0.35rem' }}>
                      Email Address (Required)
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@business.com"
                      value={heroEmail}
                      onChange={(e) => setHeroEmail(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '0.75rem 0.85rem',
                        borderRadius: '4px',
                        border: '1px solid rgba(255, 255, 255, 0.25)',
                        backgroundColor: '#FFFFFF',
                        color: '#0F294A',
                        fontSize: '13.5px',
                        outline: 'none',
                        boxSizing: 'border-box'
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={heroSubmitting}
                    style={{
                      width: '100%',
                      backgroundColor: '#FCAC14',
                      color: '#0F294A',
                      border: 'none',
                      padding: '0.9rem',
                      borderRadius: '4px',
                      fontWeight: 800,
                      fontSize: '14.5px',
                      cursor: 'pointer',
                      marginTop: '0.25rem',
                      letterSpacing: '0.01em',
                      transition: 'background-color 0.15s ease',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#E09910')}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#FCAC14')}
                  >
                    {heroSubmitting ? 'Registering...' : 'Get Free Course'}
                  </button>

                  <div style={{ textAlign: 'center', fontSize: '11.5px', color: 'rgba(255, 255, 255, 0.65)' }}>
                    No spam ever &bull; Unsubscribe anytime with 1 click
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 2. Key Differentiators / Trust Highlights Strip */}
      <section style={{ backgroundColor: '#0B1D36', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', padding: '1.75rem 0' }}>
        <div className="container">
          <div 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', 
              gap: '1.5rem',
              alignItems: 'center' 
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', color: '#FFFFFF' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'rgba(252, 172, 20, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FCAC14' }}>
                <ShieldCheck size={20} />
              </div>
              <div>
                <div style={{ fontWeight: 800, fontSize: '14.5px' }}>Licensed Ontario CPAs</div>
                <div style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.7)' }}>Regulated by CPA Ontario</div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', color: '#FFFFFF' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'rgba(252, 172, 20, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FCAC14' }}>
                <Layers size={20} />
              </div>
              <div>
                <div style={{ fontWeight: 800, fontSize: '14.5px' }}>Certified Cloud Systems</div>
                <div style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.7)' }}>Xero Silver &amp; QBO Advanced</div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', color: '#FFFFFF' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'rgba(252, 172, 20, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FCAC14' }}>
                <Calculator size={20} />
              </div>
              <div>
                <div style={{ fontWeight: 800, fontSize: '14.5px' }}>Proactive Tax Planning</div>
                <div style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.7)' }}>Legally minimize corporate T2 tax</div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', color: '#FFFFFF' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'rgba(252, 172, 20, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FCAC14' }}>
                <Phone size={20} />
              </div>
              <div>
                <div style={{ fontWeight: 800, fontSize: '14.5px' }}>Direct Partner Access</div>
                <div style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.7)' }}>No call centers or juniors</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Feature Spotlight: Simplify Your Accounting & Bookkeeping */}
      <section 
        style={{ 
          backgroundColor: '#F8FAFC', 
          borderBottom: '1px solid var(--border-light)',
          padding: '5rem 0'
        }}
      >
        <div className="container">
          <div style={{ maxWidth: '880px', margin: '0 auto', textAlign: 'center' }}>
            <div
              style={{
                fontSize: '12.5px',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: 'var(--gold-600)',
                marginBottom: '0.6rem'
              }}
            >
              Modern Cloud Accounting
            </div>
            <h2 
              style={{ 
                fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', 
                color: 'var(--navy-900)', 
                fontWeight: 800, 
                marginBottom: '1.25rem',
                letterSpacing: '-0.02em'
              }}
            >
              Simplify Your Accounting &amp; Bookkeeping with Real-Time Cloud Systems
            </h2>

            <p style={{ fontSize: '17.5px', color: 'var(--navy-800)', lineHeight: 1.7, marginBottom: '1.25rem' }}>
              The experienced team at <strong>Puri &amp; Loggia LLP</strong> streamlines your day-to-day accounting, cuts administrative friction, and gives you real-time visibility into your numbers.
            </p>

            <p style={{ fontSize: '16px', color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: '2.5rem' }}>
              We implement modern, automated bookkeeping in Xero and QuickBooks Online. You get spotless monthly reporting, touchless receipt scanning, and on-time CRA compliance&mdash;leaving you free to focus on what matters most: growing your business.
            </p>

            {/* 3 Visual Advantage Points */}
            <div 
              style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
                gap: '1.5rem', 
                textAlign: 'left',
                marginBottom: '2.75rem'
              }}
            >
              <div style={{ backgroundColor: '#FFFFFF', padding: '1.5rem', borderRadius: '6px', border: '1px solid var(--border-light)' }}>
                <div style={{ color: '#D97706', fontWeight: 800, fontSize: '15px', marginBottom: '0.35rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Check size={18} />
                  <span>Real-Time Bank Feeds</span>
                </div>
                <p style={{ fontSize: '13.5px', color: 'var(--text-secondary)', lineHeight: 1.55, margin: 0 }}>
                  Bank accounts and credit cards auto-reconcile weekly with bank-grade accuracy and zero manual spreadsheet entry.
                </p>
              </div>

              <div style={{ backgroundColor: '#FFFFFF', padding: '1.5rem', borderRadius: '6px', border: '1px solid var(--border-light)' }}>
                <div style={{ color: '#D97706', fontWeight: 800, fontSize: '15px', marginBottom: '0.35rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Check size={18} />
                  <span>Touchless Receipt Capture</span>
                </div>
                <p style={{ fontSize: '13.5px', color: 'var(--text-secondary)', lineHeight: 1.55, margin: 0 }}>
                  Snap receipts from your smartphone or forward invoices. Every expense is matched and stored CRA audit-ready.
                </p>
              </div>

              <div style={{ backgroundColor: '#FFFFFF', padding: '1.5rem', borderRadius: '6px', border: '1px solid var(--border-light)' }}>
                <div style={{ color: '#D97706', fontWeight: 800, fontSize: '15px', marginBottom: '0.35rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Check size={18} />
                  <span>Clear Monthly Financial Reports</span>
                </div>
                <p style={{ fontSize: '13.5px', color: 'var(--text-secondary)', lineHeight: 1.55, margin: 0 }}>
                  Know your gross margin, operating overhead, and cash reserves on the 15th of every month. No surprises.
                </p>
              </div>
            </div>

            <Link 
              to="/services/accounting-bookkeeping"
              className="btn btn-primary btn-lg"
              style={{
                backgroundColor: '#FCAC14',
                borderColor: '#FCAC14',
                color: '#0F294A',
                fontWeight: 800,
                padding: '0.9rem 2.25rem',
                gap: '0.5rem',
                boxShadow: '0 4px 14px rgba(252, 172, 20, 0.3)'
              }}
            >
              <span>Explore Bookkeeping Solutions</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. The Three Core Pillars: Accounting, Taxation, Consulting */}
      <section className="section" style={{ backgroundColor: '#FFFFFF', padding: '5.5rem 0' }}>
        <div className="container">
          {/* Header Copy */}
          <div style={{ maxWidth: '860px', margin: '0 auto 4rem', textAlign: 'center' }}>
            <div
              style={{
                fontSize: '12.5px',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: 'var(--gold-600)',
                marginBottom: '0.6rem'
              }}
            >
              Complete Financial Architecture
            </div>
            <h2 
              style={{ 
                fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', 
                color: 'var(--navy-900)', 
                fontWeight: 800, 
                marginBottom: '1.25rem',
                letterSpacing: '-0.02em'
              }}
            >
              Everything Your Business Needs Under One Trusted CPA Roof
            </h2>

            <p style={{ fontSize: '17px', color: 'var(--navy-800)', lineHeight: 1.7, marginBottom: '1rem' }}>
              From regular cloud bookkeeping and corporate T2 tax compliance to strategic growth consulting and CRA audit defense, our firm takes financial management completely off your desk.
            </p>

            <p style={{ fontSize: '16px', color: 'var(--text-secondary)', lineHeight: 1.75, margin: 0 }}>
              With Puri &amp; Loggia LLP, your books are always accurate, up to date, and audit-ready so you have the clarity you need to make confident, profitable decisions.
            </p>
          </div>

          {/* Three Service Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))', gap: '2rem' }}>
            {/* Pillar 1: Accounting/Bookkeeping */}
            <div 
              className="card card-accent-top"
              style={{ 
                padding: '2.5rem 2rem', 
                borderRadius: '8px', 
                backgroundColor: '#F8FAFC',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                border: '1px solid var(--border-light)',
                boxShadow: 'var(--shadow-card)'
              }}
            >
              <div>
                <div 
                  style={{ 
                    width: '56px', 
                    height: '56px', 
                    borderRadius: '50%', 
                    backgroundColor: 'rgba(252, 172, 20, 0.15)', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    marginBottom: '1.5rem',
                    color: '#D97706'
                  }}
                >
                  <BookOpen size={28} />
                </div>

                <div style={{ fontSize: '11.5px', fontWeight: 800, color: 'var(--gold-600)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.35rem' }}>
                  Daily Financial Operations
                </div>

                <h3 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--navy-900)', marginBottom: '0.75rem' }}>
                  Accounting &amp; Bookkeeping
                </h3>

                <p style={{ fontSize: '14.5px', color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '1.5rem' }}>
                  Keep your books organized and up to date without the hassle. We handle bank reconciliations, payroll, accounts payable, and monthly financial reports in Xero and QBO.
                </p>

                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0', display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '13.5px', color: 'var(--navy-900)' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Check size={16} color="#D97706" />
                    <span>Real-time cloud bank feeds &amp; reconciliations</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Check size={16} color="#D97706" />
                    <span>Payroll &amp; CRA source deductions (PD7A)</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Check size={16} color="#D97706" />
                    <span>Clear monthly P&amp;L and balance sheet packages</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Check size={16} color="#D97706" />
                    <span>Accounts payable, bills &amp; vendor invoicing</span>
                  </li>
                </ul>
              </div>

              <div>
                <Link 
                  to="/services/accounting-bookkeeping"
                  className="btn btn-secondary btn-sm"
                  style={{ fontWeight: 700, width: '100%', justifyContent: 'center' }}
                >
                  <span>Learn More</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Pillar 2: Taxation */}
            <div 
              className="card card-accent-top"
              style={{ 
                padding: '2.5rem 2rem', 
                borderRadius: '8px', 
                backgroundColor: '#F8FAFC',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                border: '1px solid var(--border-light)',
                boxShadow: 'var(--shadow-card)'
              }}
            >
              <div>
                <div 
                  style={{ 
                    width: '56px', 
                    height: '56px', 
                    borderRadius: '50%', 
                    backgroundColor: 'rgba(252, 172, 20, 0.15)', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    marginBottom: '1.5rem',
                    color: '#D97706'
                  }}
                >
                  <Calculator size={28} />
                </div>

                <div style={{ fontSize: '11.5px', fontWeight: 800, color: 'var(--gold-600)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.35rem' }}>
                  Corporate Tax Planning
                </div>

                <h3 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--navy-900)', marginBottom: '0.75rem' }}>
                  Corporate &amp; Personal Taxation
                </h3>

                <p style={{ fontSize: '14.5px', color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '1.5rem' }}>
                  We speak the language of GST/HST and corporate tax. We ensure timely filing, legally minimize your taxes through year-round planning, and protect your business against CRA reviews.
                </p>

                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0', display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '13.5px', color: 'var(--navy-900)' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Check size={16} color="#D97706" />
                    <span>Corporate T2 income tax filing &amp; notices of assessment</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Check size={16} color="#D97706" />
                    <span>Owner salary vs. dividend optimization</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Check size={16} color="#D97706" />
                    <span>GST/HST preparation &amp; Input Tax Credit recovery</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Check size={16} color="#D97706" />
                    <span>Full CRA representation &amp; audit dispute defense</span>
                  </li>
                </ul>
              </div>

              <div>
                <Link 
                  to="/services/taxation"
                  className="btn btn-secondary btn-sm"
                  style={{ fontWeight: 700, width: '100%', justifyContent: 'center' }}
                >
                  <span>Learn More</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Pillar 3: Consulting/Technology */}
            <div 
              className="card card-accent-top"
              style={{ 
                padding: '2.5rem 2rem', 
                borderRadius: '8px', 
                backgroundColor: '#F8FAFC',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                border: '1px solid var(--border-light)',
                boxShadow: 'var(--shadow-card)'
              }}
            >
              <div>
                <div 
                  style={{ 
                    width: '56px', 
                    height: '56px', 
                    borderRadius: '50%', 
                    backgroundColor: 'rgba(252, 172, 20, 0.15)', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    marginBottom: '1.5rem',
                    color: '#D97706'
                  }}
                >
                  <TrendingUp size={28} />
                </div>

                <div style={{ fontSize: '11.5px', fontWeight: 800, color: 'var(--gold-600)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.35rem' }}>
                  Strategic Advisory
                </div>

                <h3 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--navy-900)', marginBottom: '0.75rem' }}>
                  Consulting &amp; Technology
                </h3>

                <p style={{ fontSize: '14.5px', color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '1.5rem' }}>
                  Harness smart financial tools and executive advisory. We help you create actionable growth roadmaps, forecast cash flow, and eliminate operational bottlenecks.
                </p>

                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0', display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '13.5px', color: 'var(--navy-900)' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Check size={16} color="#D97706" />
                    <span>Business planning &amp; financial roadmaps</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Check size={16} color="#D97706" />
                    <span>13-week dynamic cash flow forecasting</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Check size={16} color="#D97706" />
                    <span>Cloud software setup &amp; workflow integration</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Check size={16} color="#D97706" />
                    <span>M&amp;A due diligence &amp; valuation guidance</span>
                  </li>
                </ul>
              </div>

              <div>
                <Link 
                  to="/services/consulting-technology"
                  className="btn btn-secondary btn-sm"
                  style={{ fontWeight: 700, width: '100%', justifyContent: 'center' }}
                >
                  <span>Learn More</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Business Growth Advisory Banner */}
      <section 
        style={{ 
          position: 'relative',
          backgroundImage: 'linear-gradient(rgba(15, 33, 58, 0.90), rgba(15, 33, 58, 0.94)), url("/images/growth_banner_bg.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: '#FFFFFF',
          padding: '5.5rem 0',
          textAlign: 'center'
        }}
      >
        <div className="container">
          <div style={{ maxWidth: '860px', margin: '0 auto' }}>
            <h2 
              style={{ 
                fontSize: 'clamp(2rem, 3.6vw, 2.85rem)', 
                fontWeight: 800, 
                color: '#FFFFFF',
                marginBottom: '1.5rem',
                letterSpacing: '-0.02em',
                lineHeight: 1.25
              }}
            >
              We Help Canadian Businesses Manage and Accelerate Growth
            </h2>

            <p 
              style={{ 
                fontSize: 'clamp(1.05rem, 1.5vw, 1.15rem)', 
                color: 'rgba(255, 255, 255, 0.92)', 
                lineHeight: 1.8,
                marginBottom: '2.5rem'
              }}
            >
              At Puri &amp; Loggia LLP, we understand that as your enterprise expands, its financial complexity multiplies. We partner closely with our clients as a trusted sounding board and strategic advisor. From identifying margin opportunities and cutting overhead to refining financial workflows, our services help your business prosper.
            </p>

            <Link 
              to="/services/consulting-technology"
              className="btn btn-primary btn-lg"
              style={{ 
                backgroundColor: '#FCAC14', 
                borderColor: '#FCAC14', 
                color: '#0F294A',
                fontWeight: 800,
                padding: '0.9rem 2.25rem',
                gap: '0.5rem',
                boxShadow: '0 4px 14px rgba(252, 172, 20, 0.35)'
              }}
            >
              <span>Explore Consulting &amp; Advisory</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>


      {/* 7. Authentic Blog Section (Thought Leadership) */}
      <section 
        style={{ 
          backgroundColor: '#F8FAFC', 
          borderTop: '1px solid var(--border-light)',
          borderBottom: '1px solid var(--border-light)',
          padding: '5.5rem 0'
        }}
      >
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <div
                style={{
                  fontSize: '12.5px',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: 'var(--gold-600)',
                  marginBottom: '0.5rem'
                }}
              >
                Thought Leadership &amp; Insights
              </div>
              <h2 style={{ fontSize: 'clamp(2rem, 3.2vw, 2.5rem)', color: 'var(--navy-900)', fontWeight: 800, margin: 0, letterSpacing: '-0.02em' }}>
                From Our Blog &amp; Knowledge Hub
              </h2>
            </div>
            <Link 
              to="/resources/blog"
              style={{ fontSize: '14.5px', fontWeight: 700, color: 'var(--navy-800)', display: 'flex', alignItems: 'center', gap: '0.35rem', textDecoration: 'none' }}
            >
              <span>View All Articles</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {DEFAULT_BLOG_POSTS.slice(0, 3).map((post) => (
              <article 
                key={post.id}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '8px',
                  border: '1px solid var(--border-light)',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  boxShadow: 'var(--shadow-sm)'
                }}
              >
                {/* Blog Image */}
                <div style={{ height: '200px', backgroundColor: 'var(--navy-900)', position: 'relative', overflow: 'hidden' }}>
                  <img 
                    src={post.id === 4 ? '/images/blog_cybersecurity.jpg' : '/images/executive_desk_banner.jpg'}
                    alt={post.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div style={{ position: 'absolute', top: '1rem', left: '1rem', backgroundColor: '#FCAC14', color: '#0F294A', padding: '0.25rem 0.65rem', borderRadius: '4px', fontSize: '11px', fontWeight: 800 }}>
                    {post.category}
                  </div>
                </div>

                <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ fontSize: '12.5px', color: 'var(--text-muted)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <Calendar size={13} />
                      <span>{post.publishedAt}</span>
                      <span>&bull;</span>
                      <span>{post.readTime}</span>
                    </div>

                    <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--navy-900)', marginBottom: '0.75rem', lineHeight: 1.4 }}>
                      <Link to={`/resources/blog/${post.slug}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                        {post.title}
                      </Link>
                    </h3>

                    <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                      {post.excerpt}
                    </p>
                  </div>

                  <div style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid var(--border-light)' }}>
                    <Link 
                      to={`/resources/blog/${post.slug}`}
                      style={{ fontSize: '13.5px', fontWeight: 700, color: 'var(--navy-800)', display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}
                    >
                      <span>Read Full Article</span>
                      <ChevronRight size={16} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Certified Partners & Technology Ecosystem */}
      <section className="section" style={{ backgroundColor: '#FFFFFF', padding: '5rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3rem' }}>
            <div
              style={{
                fontSize: '12.5px',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: 'var(--gold-600)',
                marginBottom: '0.5rem'
              }}
            >
              Certified Integrations
            </div>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', color: 'var(--navy-900)', fontWeight: 800, marginBottom: '0.75rem', letterSpacing: '-0.02em' }}>
              Trusted Technology &amp; Accounting Ecosystem
            </h2>
            <p style={{ fontSize: '15.5px', color: 'var(--text-secondary)' }}>
              Certified and partnered with leading Canadian and global cloud accounting software.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem', marginBottom: '2.5rem' }}>
            {VERIFIED_PARTNERS.slice(0, 4).map((partner, idx) => (
              <div 
                key={idx}
                className="card"
                style={{
                  padding: '1.65rem',
                  borderRadius: '8px',
                  backgroundColor: '#F8FAFC',
                  border: '1px solid var(--border-light)'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.4rem' }}>
                  <div style={{ fontWeight: 800, fontSize: '17px', color: 'var(--navy-900)' }}>
                    {partner.name}
                  </div>
                  <span className="badge badge-gold" style={{ fontSize: '10.5px' }}>
                    {partner.tier.includes('Certified') ? 'Certified' : 'Partner'}
                  </span>
                </div>
                <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--gold-600)', marginBottom: '0.5rem' }}>
                  {partner.tier}
                </div>
                <p style={{ fontSize: '13.5px', color: 'var(--text-secondary)', lineHeight: 1.55, margin: 0 }}>
                  {partner.description}
                </p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <Link to="/partners" className="btn btn-secondary">
              <span>View All Supported Platforms &rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 9. Direct Partner Access & Next Steps Banner (NO Book a Consultation) */}
      <section 
        style={{ 
          backgroundColor: '#0F213A', 
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          color: '#FFFFFF',
          padding: '4.5rem 0'
        }}
      >
        <div className="container">
          <div 
            style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center', 
              flexWrap: 'wrap', 
              gap: '2.5rem' 
            }}
          >
            <div style={{ maxWidth: '620px' }}>
              <div 
                className="badge badge-gold" 
                style={{ 
                  marginBottom: '1rem', 
                  backgroundColor: 'rgba(252, 172, 20, 0.2)',
                  borderColor: '#FCAC14',
                  color: '#FDE68A',
                  padding: '0.35rem 0.85rem', 
                  fontSize: '12px' 
                }}
              >
                <span>Direct Partner Line</span>
              </div>
              <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.3rem)', fontWeight: 800, color: '#FFFFFF', marginBottom: '0.75rem', letterSpacing: '-0.02em' }}>
                Speak Directly with an Experienced CPA Partner
              </h2>
              <p style={{ fontSize: '15.5px', color: 'rgba(255, 255, 255, 0.85)', lineHeight: 1.6, margin: 0 }}>
                Whether you need to organize your bookkeeping, file your corporate T2 tax return, or plan your next phase of growth, we provide straightforward, responsive guidance.
              </p>

              <div style={{ marginTop: '1.5rem', display: 'flex', flexWrap: 'wrap', gap: '1.5rem', fontSize: '14px' }}>
                <div>
                  <div style={{ color: 'rgba(255, 255, 255, 0.65)', fontSize: '12px', marginBottom: '0.2rem' }}>Mark Puri, CPA</div>
                  <a href="tel:416-801-6746" style={{ color: '#FDE68A', fontWeight: 700, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                    <Phone size={14} />
                    <span>+1 416 801 6746</span>
                  </a>
                </div>
                <div>
                  <div style={{ color: 'rgba(255, 255, 255, 0.65)', fontSize: '12px', marginBottom: '0.2rem' }}>Helen Loggia, CPA, MBA</div>
                  <a href="tel:416-805-1427" style={{ color: '#FDE68A', fontWeight: 700, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                    <Phone size={14} />
                    <span>+1 416 805 1427</span>
                  </a>
                </div>
                <div>
                  <div style={{ color: 'rgba(255, 255, 255, 0.65)', fontSize: '12px', marginBottom: '0.2rem' }}>General Support</div>
                  <a href="mailto:support@cpapnl.com" style={{ color: '#FFFFFF', fontWeight: 600, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                    <Mail size={14} />
                    <span>support@cpapnl.com</span>
                  </a>
                </div>
              </div>
            </div>

            <div>
              <Link 
                to="/contact" 
                className="btn btn-primary btn-lg"
                style={{ 
                  backgroundColor: '#FCAC14', 
                  borderColor: '#FCAC14', 
                  color: '#0F294A',
                  fontWeight: 800,
                  boxShadow: '0 4px 14px rgba(252, 172, 20, 0.4)',
                  padding: '1rem 2.25rem',
                  fontSize: '15px'
                }}
              >
                <span>Contact Our Office</span>
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 992px) {
          .home-hero-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }
      `}</style>
    </div>
  );
};
