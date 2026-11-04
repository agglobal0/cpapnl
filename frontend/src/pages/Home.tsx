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
  // Set SEO document title, meta description, and canonical per-page
  useEffect(() => {
    document.title = 'Puri & Loggia LLP | CPAs & Business Advisors Ontario';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Empowering Canadian entrepreneurs with proactive accounting, strategic corporate taxation, and modern cloud bookkeeping across Ontario & Canada.'
      );
    }
    // Canonical
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = 'https://cpapnl.com/';

    // OG / Twitter update per page
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', 'Puri & Loggia LLP | CPAs & Business Advisors Ontario');
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', 'Empowering Canadian entrepreneurs with proactive accounting, strategic corporate taxation, and modern cloud bookkeeping across Ontario & Canada.');
    const twTitle = document.querySelector('meta[name="twitter:title"]');
    if (twTitle) twTitle.setAttribute('content', 'Puri & Loggia LLP | CPAs & Business Advisors Ontario');
    const twDesc = document.querySelector('meta[name="twitter:description"]');
    if (twDesc) twDesc.setAttribute('content', 'Empowering Canadian entrepreneurs with proactive accounting, strategic corporate taxation, and modern cloud bookkeeping across Ontario & Canada.');
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
      {/* Comprehensive JSON-LD Schema Graph: Organization + AccountingService + FAQPage + BreadcrumbList + WebSite */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'Organization',
                '@id': 'https://cpapnl.com/#organization',
                name: 'Puri & Loggia LLP',
                legalName: 'Puri & Loggia LLP',
                alternateName: 'PnL Chartered Professional Accountants',
                url: 'https://cpapnl.com/',
                logo: {
                  '@type': 'ImageObject',
                  url: 'https://cpapnl.com/wp-content/uploads/cropped-crop-546-3-colored-chosen.png',
                  width: 300,
                  height: 60,
                },
                image: 'https://cpapnl.com/images/main_hero_bg.jpg',
                description:
                  'Puri & Loggia LLP is a licensed Ontario Chartered Professional Accounting firm offering cloud bookkeeping, corporate tax preparation (T2), GST/HST filing, CRA audit defense, and business advisory for Canadian entrepreneurs.',
                telephone: '+1-416-801-6746',
                email: 'support@cpapnl.com',
                priceRange: '$$',
                address: {
                  '@type': 'PostalAddress',
                  addressLocality: 'Toronto',
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
                  { '@type': 'City', name: 'Markham' },
                  { '@type': 'City', name: 'Oakville' },
                  { '@type': 'AdministrativeArea', name: 'Greater Toronto Area' },
                  { '@type': 'AdministrativeArea', name: 'Ontario' },
                  { '@type': 'Country', name: 'Canada' },
                ],
                sameAs: [
                  'https://www.linkedin.com/company/puri-loggia-llp',
                  'https://www.facebook.com/cpapnl',
                  'https://twitter.com/cpapnl',
                  'https://www.google.com/maps?cid=cpapnl',
                  'https://www.yelp.com/biz/puri-loggia-llp',
                ],
                founder: [
                  {
                    '@type': 'Person',
                    '@id': 'https://cpapnl.com/#mark-puri',
                    name: 'Mark Puri',
                    jobTitle: 'Partner, CPA, MBA',
                    telephone: '+1-416-801-6746',
                    email: 'support@cpapnl.com',
                    sameAs: 'https://www.linkedin.com/in/markpuri',
                    worksFor: { '@id': 'https://cpapnl.com/#organization' },
                  },
                  {
                    '@type': 'Person',
                    '@id': 'https://cpapnl.com/#helen-loggia',
                    name: 'Helen Loggia',
                    jobTitle: 'Partner, CPA, MBA',
                    telephone: '+1-416-805-1427',
                    email: 'support@cpapnl.com',
                    worksFor: { '@id': 'https://cpapnl.com/#organization' },
                  },
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
                  'Fractional CFO Services',
                  'SR&ED Tax Credits',
                  'Owner Salary vs Dividend Optimization',
                ],
              },
              {
                '@type': 'AccountingService',
                '@id': 'https://cpapnl.com/#accounting-service',
                name: 'Puri & Loggia LLP',
                url: 'https://cpapnl.com/',
                provider: { '@id': 'https://cpapnl.com/#organization' },
                hasOfferCatalog: {
                  '@type': 'OfferCatalog',
                  name: 'Accounting, Bookkeeping & Tax Services',
                  itemListElement: [
                    {
                      '@type': 'Offer',
                      itemOffered: {
                        '@type': 'Service',
                        name: 'Accounting & Cloud Bookkeeping',
                        url: 'https://cpapnl.com/services/accounting-bookkeeping',
                        description:
                          'Automated monthly bookkeeping, bank reconciliations, payroll, and financial reporting with Xero and QuickBooks Online.',
                        provider: { '@id': 'https://cpapnl.com/#organization' },
                        areaServed: { '@type': 'AdministrativeArea', name: 'Ontario' },
                      },
                    },
                    {
                      '@type': 'Offer',
                      itemOffered: {
                        '@type': 'Service',
                        name: 'Corporate & Personal Taxation',
                        url: 'https://cpapnl.com/services/taxation',
                        description:
                          'T2 corporate income tax filing, GST/HST preparation, owner salary vs dividend optimization, and CRA audit representation.',
                        provider: { '@id': 'https://cpapnl.com/#organization' },
                        areaServed: { '@type': 'Country', name: 'Canada' },
                      },
                    },
                    {
                      '@type': 'Offer',
                      itemOffered: {
                        '@type': 'Service',
                        name: 'Consulting & Fractional CFO Advisory',
                        url: 'https://cpapnl.com/services/consulting-technology',
                        description:
                          'Strategic business planning, 13-week dynamic cash flow forecasting, fractional CFO services, cloud software setup, and operational advisory.',
                        provider: { '@id': 'https://cpapnl.com/#organization' },
                        areaServed: { '@type': 'Country', name: 'Canada' },
                      },
                    },
                    {
                      '@type': 'Offer',
                      itemOffered: {
                        '@type': 'Service',
                        name: 'Payroll Management & CRA Remittance',
                        url: 'https://cpapnl.com/services/payroll',
                        description:
                          'Full payroll processing, CRA source deductions, T4 slips, ROE filing, and Wagepoint/QBO Payroll integration.',
                        provider: { '@id': 'https://cpapnl.com/#organization' },
                        areaServed: { '@type': 'Country', name: 'Canada' },
                      },
                    },
                  ],
                },
              },
              {
                '@type': 'WebSite',
                '@id': 'https://cpapnl.com/#website',
                url: 'https://cpapnl.com/',
                name: 'Puri & Loggia LLP',
                publisher: { '@id': 'https://cpapnl.com/#organization' },
                potentialAction: {
                  '@type': 'SearchAction',
                  target: {
                    '@type': 'EntryPoint',
                    urlTemplate: 'https://cpapnl.com/resources/blog?q={search_term_string}',
                  },
                  'query-input': 'required name=search_term_string',
                },
                inLanguage: 'en-CA',
              },
              {
                '@type': 'WebPage',
                '@id': 'https://cpapnl.com/#webpage',
                url: 'https://cpapnl.com/',
                name: 'Puri & Loggia LLP | CPAs & Business Advisors Ontario',
                description:
                  'Empowering Canadian entrepreneurs with proactive accounting, strategic corporate taxation, and modern cloud bookkeeping across Ontario & Canada.',
                isPartOf: { '@id': 'https://cpapnl.com/#website' },
                about: { '@id': 'https://cpapnl.com/#organization' },
                datePublished: '2024-01-01',
                dateModified: '2026-11-04',
                inLanguage: 'en-CA',
                speakable: {
                  '@type': 'SpeakableSpecification',
                  cssSelector: ['h1', '.speakable-intro', '.speakable-services', '#faq'],
                },
                breadcrumb: {
                  '@type': 'BreadcrumbList',
                  itemListElement: [
                    {
                      '@type': 'ListItem',
                      position: 1,
                      name: 'Home',
                      item: 'https://cpapnl.com/',
                    },
                  ],
                },
              },
              {
                '@type': 'FAQPage',
                '@id': 'https://cpapnl.com/#faqpage',
                mainEntity: [
                  {
                    '@type': 'Question',
                    name: 'What accounting services does Puri & Loggia LLP offer?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Puri & Loggia LLP offers cloud bookkeeping (Xero & QuickBooks Online), corporate T2 tax filing, GST/HST preparation, payroll management, CRA audit defense, fractional CFO advisory, and business consulting services for Canadian entrepreneurs and growing businesses across Ontario and Canada.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'How much do accounting services cost at Puri & Loggia LLP?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Pricing starts at $499/month for the Essentials plan (cloud bookkeeping, T2 tax filing, GST/HST), $899/month for Growth (adds proactive tax planning and payroll), and $1,799/month for the Advisory CFO plan (adds fractional CFO, cash flow forecasting, and M&A support). All plans are in CAD and include a free 30-minute discovery call.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'Do you serve businesses outside of Toronto?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Yes. Puri & Loggia LLP serves clients across the Greater Toronto Area (GTA), Mississauga, Markham, Oakville, Ottawa, and all of Canada through virtual cloud-based accounting services. All client collaboration happens securely online via Xero, QuickBooks Online, and secure video calls.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'What is a corporate T2 tax return in Canada?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'A T2 is the corporate income tax return that all Canadian corporations must file with the Canada Revenue Agency (CRA) each year, typically within 6 months of the fiscal year-end. It reports business income, deductions, and calculates the tax owing. Puri & Loggia LLP prepares T2 returns for CCPCs, professional corporations, and holding companies across Ontario.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'What is the difference between salary and dividends for a Canadian business owner?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'As a Canadian owner-operator, you can pay yourself a salary (which creates RRSP contribution room and CPP contributions) or dividends (which are taxed at a lower personal rate but do not create RRSP room). The optimal mix depends on your corporate profit level, personal income needs, and long-term wealth goals. Our CPAs model both scenarios annually and recommend the most tax-efficient combination.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'How does Puri & Loggia LLP handle CRA audits?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'When a client receives a CRA audit notice, our CPA partners manage the full process â€” gathering documentation, responding to CRA queries, and attending meetings on your behalf. We have successfully defended audits covering GST/HST, payroll deductions, and corporate income tax for clients across Ontario. Direct partner access means you are never handed off to a junior.',
                    },
                  },
                ],
              },
            ],
          }),
        }}
      />

      {/* 1. Hero Section: Simple, Punchy & High-Converting */}
      <section 
        id="main-content"
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
                className="speakable-intro"
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
                <form 
                  id="lead-course-form"
                  name="lead-course-form"
                  onSubmit={handleHeroSubmit}
                  style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
                  aria-label="7 Steps to growing your business course signup form"
                  toolname="enrollInCourse"
                  tooldescription="Enroll in the free 7-day email course full of strategies to maximize cash flow and reduce taxes"
                >
                  <div>
                    <label htmlFor="hero-first-name" style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: 'rgba(255, 255, 255, 0.85)', marginBottom: '0.35rem' }}>
                      Name (Required)
                    </label>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.65rem' }}>
                      <input
                        id="hero-first-name"
                        name="firstName"
                        type="text"
                        required
                        placeholder="First"
                        value={heroFirstName}
                        onChange={(e) => setHeroFirstName(e.target.value)}
                        toolparamdescription="First name of the entrepreneur"
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
                        id="hero-last-name"
                        name="lastName"
                        type="text"
                        required
                        placeholder="Last"
                        value={heroLastName}
                        onChange={(e) => setHeroLastName(e.target.value)}
                        toolparamdescription="Last name of the entrepreneur"
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
                    <label htmlFor="hero-email" style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: 'rgba(255, 255, 255, 0.85)', marginBottom: '0.35rem' }}>
                      Email Address (Required)
                    </label>
                    <input
                      id="hero-email"
                      name="email"
                      type="email"
                      required
                      placeholder="name@business.com"
                      value={heroEmail}
                      onChange={(e) => setHeroEmail(e.target.value)}
                      toolparamdescription="Business email address to receive daily course lessons"
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

      {/* PHASE 1 â€” Social Proof Numbers Bar */}
      <section style={{ backgroundColor: '#FCAC14', padding: '1.5rem 0' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '1rem',
              alignItems: 'center',
              textAlign: 'center',
            }}
          >
            {[
              { value: '25+', label: 'Years of CPA Experience' },
              { value: '200+', label: 'Businesses Served Across Canada' },
              { value: '$2M+', label: 'In Client Tax Savings' },
              { value: '100%', label: 'Direct Partner Access â€” No Juniors' },
            ].map((stat, i) => (
              <div key={i}>
                <div style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 900, color: '#0F294A', lineHeight: 1 }}>
                  {stat.value}
                </div>
                <div style={{ fontSize: '12.5px', fontWeight: 700, color: '#0F294A', marginTop: '0.3rem', opacity: 0.8 }}>
                  {stat.label}
                </div>
              </div>
            ))}
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
              id="cloud-accounting"
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
              id="our-services"
              className="speakable-services"
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
                  <span>Explore Accounting & Bookkeeping Services</span>
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
                  <span>Explore Corporate Tax Services</span>
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
                  <span>Explore Advisory & CFO Services</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PHASE 1 â€” Transparent Pricing Tiers */}
      <section style={{ backgroundColor: '#F8FAFC', borderTop: '1px solid var(--border-light)', borderBottom: '1px solid var(--border-light)', padding: '5.5rem 0' }}>
        <div className="container">
          <div style={{ maxWidth: '860px', margin: '0 auto 4rem', textAlign: 'center' }}>
            <div style={{ fontSize: '12.5px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--gold-600)', marginBottom: '0.6rem' }}>
              Transparent & Predictable
            </div>
            <h2 id="pricing" style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', color: 'var(--navy-900)', fontWeight: 800, marginBottom: '1rem', letterSpacing: '-0.02em' }}>
              Simple Monthly Pricing â€” No Surprises
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
              Every engagement starts with a free 30-minute discovery call. Custom quotes available for complex or growing businesses.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', maxWidth: '1100px', margin: '0 auto 3rem' }}>
            {/* Essentials */}
            <div style={{ backgroundColor: '#FFFFFF', border: '1px solid var(--border-light)', borderRadius: '8px', padding: '2.5rem 2rem', display: 'flex', flexDirection: 'column', boxShadow: 'var(--shadow-card)' }}>
              <div style={{ fontSize: '12px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>Essentials</div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.25rem', marginBottom: '0.35rem' }}>
                <span style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--navy-900)' }}>$499</span>
                <span style={{ fontSize: '14px', color: 'var(--text-muted)' }}>/mo</span>
              </div>
              <div style={{ fontSize: '12.5px', color: 'var(--text-muted)', marginBottom: '1.75rem' }}>Starting from Â· Custom quote on consultation</div>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '13.5px', color: 'var(--navy-900)', flex: 1 }}>
                {['Monthly cloud bookkeeping (Xero or QBO)', 'Bank & credit card reconciliation', 'Corporate T2 income tax filing', 'GST/HST filing & remittance', 'Year-end financial statements'].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                    <span style={{ color: '#D97706', marginTop: '2px', flexShrink: 0 }}>âœ“</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="btn btn-secondary" style={{ justifyContent: 'center', fontWeight: 700 }}>
                Get Started â†’
              </Link>
            </div>

            {/* Growth â€” Featured */}
            <div style={{ backgroundColor: '#0F294A', border: '2px solid #FCAC14', borderRadius: '8px', padding: '2.5rem 2rem', display: 'flex', flexDirection: 'column', boxShadow: '0 8px 32px rgba(15, 41, 74, 0.25)', position: 'relative' }}>
              <div style={{ position: 'absolute', top: '-14px', left: '50%', transform: 'translateX(-50%)', backgroundColor: '#FCAC14', color: '#0F294A', fontSize: '11px', fontWeight: 900, padding: '0.3rem 1rem', borderRadius: '20px', textTransform: 'uppercase', letterSpacing: '0.06em', whiteSpace: 'nowrap' }}>
                Most Popular
              </div>
              <div style={{ fontSize: '12px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'rgba(255,255,255,0.6)', marginBottom: '0.5rem' }}>Growth</div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.25rem', marginBottom: '0.35rem' }}>
                <span style={{ fontSize: '2.5rem', fontWeight: 900, color: '#FFFFFF' }}>$899</span>
                <span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.65)' }}>/mo</span>
              </div>
              <div style={{ fontSize: '12.5px', color: 'rgba(255,255,255,0.6)', marginBottom: '1.75rem' }}>Starting from Â· Custom quote on consultation</div>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '13.5px', color: '#FFFFFF', flex: 1 }}>
                {['Everything in Essentials', 'Proactive year-round tax planning', 'Owner salary vs. dividend optimization', 'Payroll setup & source deductions (PD7A)', '2Ã— annual CPA strategy sessions', 'CRA audit representation & support'].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                    <span style={{ color: '#FCAC14', marginTop: '2px', flexShrink: 0 }}>âœ“</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/contact" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', backgroundColor: '#FCAC14', color: '#0F294A', padding: '0.85rem 1.5rem', borderRadius: '4px', fontWeight: 800, fontSize: '14.5px', textDecoration: 'none' }}>
                Book a Free Call â†’
              </Link>
            </div>

            {/* Advisory CFO */}
            <div style={{ backgroundColor: '#FFFFFF', border: '1px solid var(--border-light)', borderRadius: '8px', padding: '2.5rem 2rem', display: 'flex', flexDirection: 'column', boxShadow: 'var(--shadow-card)' }}>
              <div style={{ fontSize: '12px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>Advisory CFO</div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.25rem', marginBottom: '0.35rem' }}>
                <span style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--navy-900)' }}>$1,799</span>
                <span style={{ fontSize: '14px', color: 'var(--text-muted)' }}>/mo</span>
              </div>
              <div style={{ fontSize: '12.5px', color: 'var(--text-muted)', marginBottom: '1.75rem' }}>Starting from Â· Custom quote on consultation</div>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '13.5px', color: 'var(--navy-900)', flex: 1 }}>
                {['Everything in Growth', 'Fractional CFO â€” monthly advisory calls', '13-week rolling cash flow forecasting', 'Board-ready financial reporting', 'M&A due diligence & valuation support', 'Corporate restructuring & Holdco advisory', 'Unlimited CPA partner access'].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                    <span style={{ color: '#D97706', marginTop: '2px', flexShrink: 0 }}>âœ“</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="btn btn-secondary" style={{ justifyContent: 'center', fontWeight: 700 }}>
                Discuss My Needs â†’
              </Link>
            </div>
          </div>

          <p style={{ textAlign: 'center', fontSize: '13.5px', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
            All plans include a complimentary 30-minute discovery call Â· Pricing in CAD Â· Tailored quotes for complex engagements
          </p>

          <div style={{ textAlign: 'center' }}>
            <Link
              to="/pricing"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
                backgroundColor: '#0F294A',
                color: '#FCAC14',
                padding: '0.85rem 1.85rem',
                borderRadius: '6px',
                fontWeight: 800,
                fontSize: '14px',
                textDecoration: 'none',
                boxShadow: '0 4px 12px rgba(15, 41, 74, 0.2)',
              }}
            >
              <span>Calculate Custom Scope in our Interactive Quote Builder</span>
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* Step-by-Step Onboarding Workflow - Targets "How to" Featured Snippets */}
      <section style={{ backgroundColor: '#F8FAFC', padding: '5rem 0', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container">
          <div style={{ maxWidth: '960px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
              <div style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--gold-600)', marginBottom: '0.5rem' }}>
                Frictionless Onboarding
              </div>
              <h2 id="how-to-switch" style={{ fontSize: 'clamp(1.9rem, 3.2vw, 2.6rem)', color: 'var(--navy-900)', fontWeight: 800, marginBottom: '0.75rem', letterSpacing: '-0.02em' }}>
                How to Switch Your Accounting to Puri &amp; Loggia LLP in 3 Steps
              </h2>
              <p style={{ fontSize: '16px', color: 'var(--text-secondary)', lineHeight: 1.65, maxWidth: '680px', margin: '0 auto' }}>
                Transitioning to modern cloud accounting takes less than 7 days. Our senior partners manage the handover directly from your prior accountant with zero disruption.
              </p>
            </div>

            <ol 
              style={{ 
                listStyle: 'none', 
                padding: 0, 
                margin: '0 0 2.5rem 0', 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
                gap: '1.75rem' 
              }}
            >
              {[
                {
                  step: '1',
                  title: 'Book a 30-Minute Discovery & Strategy Call',
                  desc: 'We review your prior tax filings, current accounting software, and business structure to confirm exact requirements and provide a transparent, fixed monthly quote.'
                },
                {
                  step: '2',
                  title: 'Turnkey Professional Handover Request',
                  desc: 'With your written consent, we contact your previous accountant for working papers, prior trial balances, and CRA authorizations. You do not have to mediate awkward conversations.'
                },
                {
                  step: '3',
                  title: 'Cloud Setup & Proactive Advisory',
                  desc: 'We configure your Xero or QuickBooks Online ledger, link automated live bank feeds, eliminate receipt clutter, and deliver on-time monthly financials with proactive tax planning.'
                }
              ].map((item, idx) => (
                <li 
                  key={idx}
                  style={{ 
                    backgroundColor: '#FFFFFF', 
                    borderRadius: '8px', 
                    padding: '2rem 1.75rem', 
                    border: '1px solid var(--border-light)',
                    boxShadow: 'var(--shadow-sm)',
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'relative'
                  }}
                >
                  <div 
                    style={{ 
                      width: '38px', 
                      height: '38px', 
                      borderRadius: '50%', 
                      backgroundColor: '#FCAC14', 
                      color: '#0F294A', 
                      fontWeight: 900, 
                      fontSize: '18px', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      marginBottom: '1.25rem'
                    }}
                  >
                    {item.step}
                  </div>
                  <h3 style={{ fontSize: '17px', fontWeight: 800, color: 'var(--navy-900)', marginBottom: '0.65rem', lineHeight: 1.35 }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '13.5px', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                    {item.desc}
                  </p>
                </li>
              ))}
            </ol>

            <div style={{ textAlign: 'center' }}>
              <Link 
                to="/onboarding"
                className="btn btn-primary"
                style={{
                  backgroundColor: '#FCAC14',
                  borderColor: '#FCAC14',
                  color: '#0F294A',
                  fontWeight: 800,
                  padding: '0.85rem 2rem'
                }}
              >
                <span>Read Full Onboarding Guide &amp; Checklist</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Canadian Accounting & Tax Definitions — Targets Direct Definition Snippets & LLM Entities */}
      <section style={{ backgroundColor: '#FFFFFF', padding: '4.5rem 0', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container">
          <div style={{ maxWidth: '960px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
              <div style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--gold-600)', marginBottom: '0.5rem' }}>
                Knowledge Base &amp; Glossary
              </div>
              <h2 id="canadian-tax-definitions" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.3rem)', fontWeight: 800, color: 'var(--navy-900)', marginBottom: '0.75rem', letterSpacing: '-0.02em' }}>
                Key Canadian Accounting &amp; Corporate Tax Definitions
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '15.5px', maxWidth: '640px', margin: '0 auto', lineHeight: 1.6 }}>
                Clear, authoritative explanations of essential CRA concepts every Canadian entrepreneur should understand.
              </p>
            </div>

            <dl style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.75rem', margin: 0 }}>
              <div style={{ backgroundColor: '#F8FAFC', padding: '1.75rem', borderRadius: '8px', border: '1px solid var(--border-light)', display: 'flex', flexDirection: 'column' }}>
                <dt style={{ fontWeight: 800, fontSize: '16px', color: 'var(--navy-900)', marginBottom: '0.5rem' }}>
                  What is a Canadian-Controlled Private Corporation (CCPC)?
                </dt>
                <dd style={{ margin: 0, fontSize: '13.5px', color: 'var(--navy-800)', lineHeight: 1.65 }}>
                  A <strong>Canadian-Controlled Private Corporation (CCPC) is a</strong> private corporation resident in Canada that is not controlled directly or indirectly by non-residents or public corporations. CCPCs qualify for the preferential Small Business Deduction, resulting in a combined federal and Ontario corporate tax rate of just 12.2% on the first $500,000 of active business income.
                </dd>
              </div>

              <div style={{ backgroundColor: '#F8FAFC', padding: '1.75rem', borderRadius: '8px', border: '1px solid var(--border-light)', display: 'flex', flexDirection: 'column' }}>
                <dt style={{ fontWeight: 800, fontSize: '16px', color: 'var(--navy-900)', marginBottom: '0.5rem' }}>
                  What is a Corporate T2 Tax Return &amp; Notice of Assessment?
                </dt>
                <dd style={{ margin: 0, fontSize: '13.5px', color: 'var(--navy-800)', lineHeight: 1.65 }}>
                  A <strong>Corporate T2 Tax Return is the</strong> mandatory annual corporate income tax filing Canadian corporations must file with the Canada Revenue Agency (CRA) within 6 months of fiscal year-end. Following review, the CRA issues an official <strong>Notice of Assessment (NOA)</strong> verifying assessed tax liabilities, loss carry-forwards, and final refunds.
                </dd>
              </div>

              <div style={{ backgroundColor: '#F8FAFC', padding: '1.75rem', borderRadius: '8px', border: '1px solid var(--border-light)', display: 'flex', flexDirection: 'column' }}>
                <dt style={{ fontWeight: 800, fontSize: '16px', color: 'var(--navy-900)', marginBottom: '0.5rem' }}>
                  What is an Input Tax Credit (ITC) for GST/HST?
                </dt>
                <dd style={{ margin: 0, fontSize: '13.5px', color: 'var(--navy-800)', lineHeight: 1.65 }}>
                  An <strong>Input Tax Credit (ITC) refers to</strong> the dollar-for-dollar credit that GST/HST-registered businesses claim to recover the sales tax paid or payable on commercial purchases, commercial rent, and operational expenses. ITCs directly offset the GST/HST collected from customers on sales.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* PHASE 1 â€” Social Proof / Google Reviews Highlight */}
      <section style={{ backgroundColor: '#FFFFFF', borderBottom: '1px solid var(--border-light)', padding: '5rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 3.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.35rem', marginBottom: '0.75rem' }}>
              {[1,2,3,4,5].map(i => (
                <svg key={i} width="22" height="22" viewBox="0 0 24 24" fill="#FCAC14"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              ))}
              <span style={{ fontSize: '18px', fontWeight: 900, color: 'var(--navy-900)', marginLeft: '0.35rem' }}>5.0</span>
              <span style={{ fontSize: '14px', color: 'var(--text-muted)', marginLeft: '0.25rem' }}>on Google</span>
            </div>
            <h2 id="client-reviews" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.4rem)', color: 'var(--navy-900)', fontWeight: 800, marginBottom: '0.75rem', letterSpacing: '-0.02em' }}>
              Trusted by Canadian Business Owners
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
              Real results from real clients across the GTA and Canada.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.75rem', marginBottom: '3rem' }}>
            {[
              {
                quote: "Mark and Helen are the real deal. After switching to Puri & Loggia, we uncovered $14,000 in missed HST input tax credits from prior years. They're proactive, responsive, and genuinely invested in our success.",
                name: 'David K.',
                role: 'President, Construction Subcontractor',
                location: 'Brampton, ON'
              },
              {
                quote: "I was intimidated by the CRA audit notice. Mark represented us directly and resolved everything in 6 weeks. Having a CPA partner who picks up the phone makes all the difference.",
                name: 'Priya S.',
                role: 'Owner, Medical Clinic',
                location: 'Mississauga, ON'
              },
              {
                quote: "Finally a CPA firm that actually explains things in plain English. They set up our Xero system, cleaned up 2 years of messy books, and now I get clean financials by the 15th every month.",
                name: 'James T.',
                role: 'Founder, eCommerce Brand',
                location: 'Toronto, ON'
              }
            ].map((t, i) => (
              <div key={i} style={{ backgroundColor: '#F8FAFC', border: '1px solid var(--border-light)', borderRadius: '8px', padding: '2rem', boxShadow: 'var(--shadow-card)' }}>
                <div style={{ display: 'flex', gap: '0.2rem', marginBottom: '1rem' }}>
                  {[1,2,3,4,5].map(s => (
                    <svg key={s} width="16" height="16" viewBox="0 0 24 24" fill="#FCAC14"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                  ))}
                </div>
                <p style={{ fontSize: '14.5px', color: 'var(--navy-900)', lineHeight: 1.7, marginBottom: '1.5rem', fontStyle: 'italic' }}>
                  "{t.quote}"
                </p>
                <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '1rem' }}>
                  <div style={{ fontWeight: 800, fontSize: '14px', color: 'var(--navy-900)' }}>{t.name}</div>
                  <div style={{ fontSize: '12.5px', color: 'var(--text-muted)' }}>{t.role} Â· {t.location}</div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <Link to="/testimonials" className="btn btn-secondary" style={{ fontWeight: 700 }}>
              Read All Client Stories â†’
            </Link>
          </div>
        </div>
      </section>

      {/* PHASE 4 â€” Featured Client Case Studies Spotlight */}
      <section style={{ backgroundColor: '#0F294A', color: '#FFFFFF', padding: '5.5rem 0', borderTop: '4px solid #FCAC14' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3.5rem', flexWrap: 'wrap', gap: '1.5rem' }}>
            <div>
              <div style={{ fontSize: '12px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#FCAC14', marginBottom: '0.5rem' }}>
                Measurable Financial Outcomes
              </div>
              <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontWeight: 800, color: '#FFFFFF', margin: 0, letterSpacing: '-0.02em' }}>
                Proven Results for Canadian Founders
              </h2>
            </div>
            <Link
              to="/case-studies"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                color: '#FCAC14',
                fontWeight: 700,
                fontSize: '14.5px',
                textDecoration: 'none',
              }}
            >
              <span>View All Detailed Case Studies</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {[
              {
                metric: '$28,400',
                metricLabel: 'Annual Tax Reduction',
                badge: 'Holdco & Asset Protection',
                client: 'Commercial Concrete Contractor',
                location: 'Brampton, ON',
                summary: 'Restructured operating company into Holdco with equipment leasing, preserving the 12.2% CCPC tax rate and shielding $450K in heavy machinery from trade liability.',
              },
              {
                metric: '$43,000',
                metricLabel: 'Year 1 Tax Optimization',
                badge: 'Medical Professional Corp',
                client: '3-Physician Family Health Clinic',
                location: 'Mississauga, ON',
                summary: 'Incorporated individual MPCs and a joint Management Services Organization, eliminating CRA payroll penalties and establishing passive wealth Holdcos.',
              },
              {
                metric: '$16,800',
                metricLabel: 'Recovered CRA Cash Refund',
                badge: 'Multi-Province HST Audit',
                client: 'Omnichannel eCommerce Brand',
                location: 'GTA Nationwide',
                summary: 'Audited 24 months of Shopify and Amazon transactions, recovering $16,800 in unremitted Input Tax Credits and automating daily cloud reconciliations.',
              },
            ].map((cs, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  borderRadius: '10px',
                  padding: '2.25rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.25rem' }}>
                    <span
                      style={{
                        backgroundColor: 'rgba(252, 172, 20, 0.15)',
                        border: '1px solid rgba(252, 172, 20, 0.3)',
                        color: '#FCAC14',
                        padding: '0.25rem 0.65rem',
                        borderRadius: '4px',
                        fontSize: '11px',
                        fontWeight: 800,
                        textTransform: 'uppercase',
                        letterSpacing: '0.04em',
                      }}
                    >
                      {cs.badge}
                    </span>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ fontSize: '1.85rem', fontWeight: 900, color: '#FCAC14', lineHeight: 1 }}>{cs.metric}</div>
                      <div style={{ fontSize: '10.5px', color: 'rgba(255,255,255,0.65)', fontWeight: 600 }}>{cs.metricLabel}</div>
                    </div>
                  </div>

                  <h3 style={{ fontSize: '17px', fontWeight: 800, color: '#FFFFFF', marginBottom: '0.35rem' }}>
                    {cs.client}
                  </h3>
                  <div style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.6)', marginBottom: '1rem' }}>
                    {cs.location}
                  </div>

                  <p style={{ fontSize: '13.5px', color: 'rgba(255, 255, 255, 0.85)', lineHeight: 1.6, margin: 0 }}>
                    {cs.summary}
                  </p>
                </div>

                <div style={{ marginTop: '1.75rem', paddingTop: '1.25rem', borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
                  <Link
                    to="/case-studies"
                    style={{
                      color: '#FCAC14',
                      fontSize: '13px',
                      fontWeight: 700,
                      textDecoration: 'none',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                    }}
                  >
                    <span>Read Full Case Study</span>
                    <ChevronRight size={15} />
                  </Link>
                </div>
              </div>
            ))}
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
              <h2 id="insights" style={{ fontSize: 'clamp(2rem, 3.2vw, 2.5rem)', color: 'var(--navy-900)', fontWeight: 800, margin: 0, letterSpacing: '-0.02em' }}>
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

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {DEFAULT_BLOG_POSTS.slice(0, 3).map((post) => (
              <article 
                key={post.id}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '8px',
                  border: '1px solid var(--border-light)',
                  borderTop: '4px solid #FCAC14',
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: 'var(--shadow-sm)'
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                    <span className="badge badge-gold" style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      {post.category}
                    </span>
                    <span style={{ fontSize: '12px', color: 'var(--text-muted)', fontWeight: 600 }}>
                      {post.readTime}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '19px', fontWeight: 800, color: 'var(--navy-900)', marginBottom: '0.75rem', lineHeight: 1.35 }}>
                    <Link to={`/resources/blog/${post.slug}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                      {post.title}
                    </Link>
                  </h3>

                  <p style={{ fontSize: '13.5px', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0, marginBottom: '1.5rem' }}>
                    {post.excerpt}
                  </p>
                </div>

                <div style={{ paddingTop: '1.25rem', borderTop: '1px solid var(--border-light)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ fontSize: '12px', color: 'var(--text-muted)', fontWeight: 600, display: 'flex', flexDirection: 'column', gap: '0.15rem' }}>
                    <span>{post.author}</span>
                    {post.publishedAt && (
                      <time dateTime={post.publishedAt} style={{ fontSize: '11px', color: 'var(--text-muted)', fontWeight: 400 }}>
                        {new Date(post.publishedAt).toLocaleDateString('en-CA', { year: 'numeric', month: 'long', day: 'numeric' })}
                      </time>
                    )}
                  </div>
                  <Link 
                    to={`/resources/blog/${post.slug}`}
                    aria-label={`Read article: ${post.title}`}
                    style={{ fontSize: '13.5px', fontWeight: 700, color: '#D97706', display: 'inline-flex', alignItems: 'center', gap: '0.35rem', textDecoration: 'none' }}
                  >
                    <span>Read Article</span>
                    <ChevronRight size={16} />
                  </Link>
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

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '2.5rem' }}>
            {VERIFIED_PARTNERS.slice(0, 3).map((partner, idx) => (
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

      {/* 10. FAQ Section â€” AEO / Answer Engine Optimization + Voice Search */}
      <section
        id="faq"
        style={{
          backgroundColor: '#F8FAFC',
          borderTop: '1px solid var(--border-light)',
          padding: '5.5rem 0',
        }}
        itemScope
        itemType="https://schema.org/FAQPage"
      >
        <div className="container">
          <div style={{ maxWidth: '860px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
              <div
                style={{
                  fontSize: '12.5px',
                  fontWeight: 700,
                  textTransform: 'uppercase' as const,
                  letterSpacing: '0.08em',
                  color: 'var(--gold-600)',
                  marginBottom: '0.6rem',
                }}
              >
                Common Questions
              </div>
              <h2
                id="frequently-asked-questions"
                style={{
                  fontSize: 'clamp(2rem, 3.2vw, 2.5rem)',
                  color: 'var(--navy-900)',
                  fontWeight: 800,
                  marginBottom: '1rem',
                  letterSpacing: '-0.02em',
                }}
              >
                Frequently Asked Questions About Our CPA Services
              </h2>
              <p style={{ fontSize: '16px', color: 'var(--text-secondary)', lineHeight: 1.65, maxWidth: '640px', margin: '0 auto' }}>
                Answers to the most common questions from Canadian business owners about accounting, taxes, and advisory services.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {[
                {
                  q: 'What accounting services does Puri & Loggia LLP offer?',
                  a: 'Puri & Loggia LLP offers cloud bookkeeping (Xero & QuickBooks Online), corporate T2 tax filing, GST/HST preparation, payroll management, CRA audit defense, fractional CFO advisory, and business consulting for Canadian entrepreneurs and growing businesses across Ontario and Canada.',
                },
                {
                  q: 'How much do your accounting services cost?',
                  a: 'Pricing starts at $499/month for the Essentials plan (cloud bookkeeping, T2 tax, GST/HST), $899/month for Growth (adds proactive tax planning and payroll), and $1,799/month for the Advisory CFO plan (adds fractional CFO and cash flow forecasting). All plans are in CAD and include a complimentary 30-minute discovery call.',
                },
                {
                  q: 'Do you serve businesses outside of Toronto?',
                  a: 'Yes. We serve clients across the Greater Toronto Area (GTA), Mississauga, Markham, Oakville, Ottawa, and all of Canada through virtual cloud-based accounting. All collaboration happens securely online via Xero, QuickBooks Online, and secure video calls.',
                },
                {
                  q: 'What is a corporate T2 tax return in Canada?',
                  a: 'A T2 is the corporate income tax return all Canadian corporations must file with the CRA each year â€” typically within 6 months of fiscal year-end. It reports business income, deductions, and calculates tax owing. Puri & Loggia LLP prepares T2 returns for CCPCs, professional corporations, and holding companies across Ontario.',
                },
                {
                  q: 'What is the difference between salary and dividends for a Canadian business owner?',
                  a: 'As an owner-operator, you can pay yourself a salary (which creates RRSP room and CPP contributions) or dividends (taxed at a lower personal rate but no RRSP room). The optimal mix depends on corporate profit, personal income needs, and long-term wealth goals. Our CPAs model both scenarios annually and recommend the most tax-efficient combination.',
                },
                {
                  q: 'How does Puri & Loggia LLP handle CRA audits?',
                  a: 'When a client receives a CRA audit notice, our CPA partners manage the full process â€” gathering documentation, responding to CRA queries, and attending meetings on your behalf. We have successfully defended audits covering GST/HST, payroll deductions, and corporate income tax for clients across Ontario. Direct partner access means you are never handed off to a junior.',
                },
              ].map((item, i) => (
                <div
                  key={i}
                  itemScope
                  itemProp="mainEntity"
                  itemType="https://schema.org/Question"
                  style={{
                    backgroundColor: '#FFFFFF',
                    border: '1px solid var(--border-light)',
                    borderRadius: '8px',
                    padding: '1.75rem 2rem',
                    boxShadow: 'var(--shadow-sm)',
                  }}
                >
                  <h3
                    itemProp="name"
                    style={{
                      fontSize: '17px',
                      fontWeight: 800,
                      color: 'var(--navy-900)',
                      marginBottom: '0.75rem',
                      lineHeight: 1.4,
                    }}
                  >
                    {item.q}
                  </h3>
                  <div
                    itemScope
                    itemProp="acceptedAnswer"
                    itemType="https://schema.org/Answer"
                  >
                    <p
                      itemProp="text"
                      style={{
                        fontSize: '15px',
                        color: 'var(--text-secondary)',
                        lineHeight: 1.7,
                        margin: 0,
                      }}
                    >
                      {item.a}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
              <Link
                to="/contact"
                className="btn btn-secondary"
                style={{ fontWeight: 700 }}
              >
                Have a Different Question? Contact Us â†’
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

