import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  TrendingUp, ShieldCheck, CheckCircle2, ArrowRight, Phone, Building2, 
  DollarSign, FileCheck, Award, ArrowUpRight, ChevronRight, Stethoscope, 
  HardHat, ShoppingCart, Laptop 
} from 'lucide-react';

interface Props {
  onBookConsultation?: (context?: string) => void;
}

export const CaseStudiesPage: React.FC<Props> = ({ onBookConsultation }) => {
  useEffect(() => {
    document.title = 'Client Case Studies & Verified Financial Outcomes | Puri & Loggia LLP';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Real case studies and measurable financial outcomes from Canadian businesses partnering with Puri & Loggia LLP. Holding companies, corporate tax savings, medical professional corporations, and multi-province HST.'
      );
    }
  }, []);

  const caseStudies = [
    {
      id: 'commercial-contractor-holdco',
      badge: 'Tax Restructuring & Asset Protection',
      industry: 'Commercial Construction & Contracting',
      location: 'Brampton, ON',
      icon: <HardHat size={26} color="#FCAC14" />,
      title: 'How a Brampton Contractor Saved $28,400 Annually & Shielded $450K in Equipment',
      heroMetric: '$28,400',
      heroMetricLabel: 'Annual Tax Reduction',
      secondaryMetric: '$450,000',
      secondaryMetricLabel: 'Protected Machinery Assets',
      overview:
        'A growing commercial concrete contractor generating $3.2M in annual revenue was operating entirely inside a single operating company (Opco). High cash reserves and valuable heavy machinery were fully exposed to trade liabilities, while taxable income was pushing past the Small Business Deduction limit.',
      challenge: [
        'All retained earnings and equipment were held in the operating entity, exposed to potential lien or site lawsuit risk.',
        'Passive investment income inside the Opco was beginning to grind down the federal $500,000 Small Business Deduction limit.',
        'Owner took personal drawings haphazardly, resulting in severe individual marginal tax brackets exceeding 50% in Ontario.',
      ],
      strategy: [
        'Executed a section 85 tax-deferred rollover to establish a parent Holding Company (Holdco).',
        'Separated heavy machinery into an equipment leasing entity, isolating operational risk from capital assets.',
        'Implemented tax-free intercorporate dividends to sweep surplus cash out of the operating company into Holdco monthly.',
        'Instituted an optimized salary/dividend split with family trust integration, retaining the 12.2% CCPC tax rate.',
      ],
      results: [
        { label: 'Year 1 Direct Tax Savings', value: '$28,400' },
        { label: 'Isolated Asset Value', value: '$450,000' },
        { label: 'Small Business Rate Preserved', value: '12.2%' },
        { label: 'Audit Risk Reduction', value: 'Level 2 Cleared' },
      ],
      quote:
        'Mark and Helen didn’t just file our returns; they completely re-engineered how our business holds wealth. We sleep with total peace of mind knowing our equipment and retained profits are safe.',
      quoteAuthor: 'Gurminder D.',
      quoteRole: 'Founder & Managing Director',
    },
    {
      id: 'medical-practice-mpc',
      badge: 'Healthcare & Professional Corporations',
      industry: 'Multi-Physician Family Health Clinic',
      location: 'Mississauga, ON',
      icon: <Stethoscope size={26} color="#FCAC14" />,
      title: 'Restructuring a 3-Doctor Clinic to Save $43,000 in Tax with Full CRA Source Deduction Compliance',
      heroMetric: '$43,000',
      heroMetricLabel: 'First-Year Tax Optimization',
      secondaryMetric: '100%',
      secondaryMetricLabel: 'CPA Ontario & CPSO Compliance',
      overview:
        'A busy Mississauga family medicine practice with three physicians was operating as an unincorporated association. OHIP billings and shared overhead expenses were co-mingled in a single joint bank account with irregular monthly reconciliations and inaccurate partner draws.',
      challenge: [
        'Physicians were taxed at top personal Ontario marginal rates (53.53%) on billings, severely hindering reinvestment.',
        'Staff payroll source deductions (PD7A) were frequently remitted late, triggering 10% CRA penalty assessments.',
        'Overhead allocation disputes occurred regularly due to unstandardized bookkeeping and delayed statements.',
      ],
      strategy: [
        'Incorporated separate Medicine Professional Corporations (MPCs) compliant with CPSO bylaws for each physician.',
        'Established a clean cost-sharing Management Services Organization (MSO) to run the joint clinic operations and clinical staff payroll.',
        'Migrated clinic operations to Xero with automated daily bank feeds and direct Wagepoint integration for payroll.',
        'Implemented a disciplined corporate dividend strategy allowing physicians to accumulate passive investment portfolios inside Holdcos.',
      ],
      results: [
        { label: 'Annual Household Tax Savings', value: '$43,000+' },
        { label: 'CRA Late Remittance Penalties', value: '$0 (Down from $8,400)' },
        { label: 'Statement Delivery Time', value: '10th of every month' },
        { label: 'CPSO & CRA Slips Reconciled', value: '100% On-Time' },
      ],
      quote:
        'Transitioning to our MPCs with Puri & Loggia was seamless. Their deep familiarity with Ontario CPSO regulations and tax rules saved us tens of thousands in personal taxes right away.',
      quoteAuthor: 'Dr. Jennifer R.',
      quoteRole: 'Lead Physician & Clinic Co-Owner',
    },
    {
      id: 'ecommerce-multichannel-hst',
      badge: 'eCommerce & Cross-Border Tax',
      industry: 'Direct-to-Consumer & Amazon FBA',
      location: 'Toronto / GTA, ON',
      icon: <ShoppingCart size={26} color="#FCAC14" />,
      title: 'Recovering $16,800 in Unclaimed HST Input Tax Credits for a $2.5M Omnichannel Brand',
      heroMetric: '$16,800',
      heroMetricLabel: 'Recovered Input Tax Credits',
      secondaryMetric: '4 Provinces',
      secondaryMetricLabel: 'PST / QST / HST Cleaned Up',
      overview:
        'A fast-scaling consumer products brand selling across Shopify, Amazon Canada, and US fulfillment centers was drowning in transaction spreadsheets. Their previous non-specialist accountant filed GST/HST based on simple bank deposits, completely ignoring merchant fees, cross-border duty payments, and provincial sales taxes.',
      challenge: [
        'Over $16,000 in eligible HST paid on raw materials and overseas ocean freight import fees went completely unclaimed.',
        'Amazon US payouts in USD were converted at arbitrary rates, creating foreign exchange discrepancy flags on the T2 balance sheet.',
        'No tracking of BC PST, Saskatchewan PST, or Manitoba RST obligations for inter-provincial shipping.',
      ],
      strategy: [
        'Conducted a 24-month lookback audit of CRA GST/HST returns, adjusting prior filings via GST189 and T2 amendments.',
        'Integrated A2X with Shopify, Amazon Seller Central, and Xero to automatically reconcile gross sales, fees, returns, and sales taxes.',
        'Recovered $16,800 in cash refunds deposited directly by the CRA into the client bank account.',
        'Set up automated multi-currency tracking with Bank of Canada daily rate feeds for clean FX accounting.',
      ],
      results: [
        { label: 'Direct Cash Refund from CRA', value: '$16,800' },
        { label: 'Reconciliation Time', value: 'Cut from 15 hrs to 30 mins/mo' },
        { label: 'Multi-Jurisdiction Compliance', value: 'Ontario, BC, QC, MB' },
        { label: 'Gross Margin Accuracy', value: '99.8% to the cent' },
      ],
      quote:
        'Our previous firm told us eCommerce bookkeeping is "too complex." Puri & Loggia connected our software in one week and literally found $16,800 in checks from the CRA that were sitting on the table.',
      quoteAuthor: 'Liam M.',
      quoteRole: 'Co-Founder & COO',
    },
    {
      id: 'tech-agency-fractional-cfo',
      badge: 'Fractional CFO & Advisory',
      industry: 'Digital Systems & Cloud Consulting Agency',
      location: 'Oakville / GTA, ON',
      icon: <Laptop size={26} color="#FCAC14" />,
      title: 'Elevating Gross Margins from 38% to 54% with 13-Week Dynamic Cash Flow Modeling',
      heroMetric: '+16%',
      heroMetricLabel: 'Gross Margin Expansion',
      secondaryMetric: '13 Weeks',
      secondaryMetricLabel: 'Rolling Cash Runway Visibility',
      overview:
        'A 22-person technology consulting agency was growing quickly from $1.8M to $3.5M, but running into severe month-end cash crunches due to 60-day client billing cycles and fixed developer payroll.',
      challenge: [
        'Owners were making hiring decisions based on their current bank balance without forecasting upcoming tax and payroll cycles.',
        'Project scopes were consistently experiencing margin creep, with unbilled client revisions pulling gross margins below 40%.',
        'Lack of formal financial reporting made securing a commercial credit facility from Canadian tier-1 banks impossible.',
      ],
      strategy: [
        'Stepped in as Fractional CFO with bi-weekly partner advisory meetings led directly by Mark Puri, CPA, MBA.',
        'Built a 13-week dynamic cash flow forecasting model tying client billing milestones directly to subcontractor payouts.',
        'Restructured client retainers to 50% upfront billing and renegotiated vendor terms, shrinking DSO (Days Sales Outstanding) from 64 to 28 days.',
        'Compiled reviewed-quality financial packages that secured a $500,000 operating line of credit at prime + 0.75%.',
      ],
      results: [
        { label: 'Gross Margin Growth', value: '38% → 54%' },
        { label: 'Days Sales Outstanding (DSO)', value: 'Cut by 36 Days' },
        { label: 'Secured Commercial Credit Line', value: '$500,000' },
        { label: 'Cash Flow Surprise Incidents', value: 'Zero over 18 months' },
      ],
      quote:
        'Having a senior CPA and MBA partner in our corner without the $250k cost of a full-time CFO gave us the institutional discipline we needed to safely scale past $3M.',
      quoteAuthor: 'Nadia K.',
      quoteRole: 'Managing Partner',
    },
  ];

  return (
    <div>
      {/* Comprehensive Structured JSON-LD Data for AEO / SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: 'Client Case Studies & Verified Financial Outcomes | Puri & Loggia LLP',
            description:
              'Documented case studies detailing corporate restructuring, tax savings, holding company setups, and fractional CFO advisory for Canadian enterprises.',
            publisher: {
              '@type': 'AccountingService',
              name: 'Puri & Loggia LLP',
              url: 'https://cpapnl.com/',
            },
            mainEntity: caseStudies.map((cs) => ({
              '@type': 'Article',
              headline: cs.title,
              description: cs.overview,
              about: cs.industry,
              author: {
                '@type': 'Organization',
                name: 'Puri & Loggia LLP',
              },
            })),
          }),
        }}
      />

      {/* 1. Hero Section */}
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
              <Award size={15} color="#FCAC14" />
              <span
                style={{
                  fontSize: '12px',
                  fontWeight: 800,
                  color: '#FCAC14',
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                }}
              >
                Verified Case Studies &bull; Real Financial Impact
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
              Real Canadian Businesses.<br />Measurable Financial Outcomes.
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
              Explore how Canadian business owners, physicians, contractors, and eCommerce operators leverage our 25+ years of licensed CPA experience to legally slash taxes, protect hard-earned assets, and build scalable financial systems.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              <button
                onClick={() => onBookConsultation ? onBookConsultation('Case Studies Page') : null}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  backgroundColor: '#FCAC14',
                  color: '#0F294A',
                  border: 'none',
                  padding: '0.9rem 2rem',
                  borderRadius: '4px',
                  fontWeight: 800,
                  fontSize: '15px',
                  cursor: 'pointer',
                  boxShadow: '0 4px 14px rgba(252, 172, 20, 0.35)',
                }}
              >
                <span>Book a Strategy Call</span>
                <ArrowRight size={16} />
              </button>

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
                <span>Call Mark: 416-801-6746</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Cumulative Results Highlight Strip */}
      <section style={{ backgroundColor: '#071220', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', padding: '2rem 0' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '1.5rem',
              alignItems: 'center',
              textAlign: 'center',
            }}
          >
            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#FCAC14', lineHeight: 1 }}>$2.4M+</div>
              <div style={{ fontSize: '12.5px', color: 'rgba(255, 255, 255, 0.75)', marginTop: '0.4rem', fontWeight: 600 }}>
                Cumulative Tax Savings Delivered
              </div>
            </div>

            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#FFFFFF', lineHeight: 1 }}>100%</div>
              <div style={{ fontSize: '12.5px', color: 'rgba(255, 255, 255, 0.75)', marginTop: '0.4rem', fontWeight: 600 }}>
                Direct Partner Access on Every File
              </div>
            </div>

            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#FCAC14', lineHeight: 1 }}>$18.5K</div>
              <div style={{ fontSize: '12.5px', color: 'rgba(255, 255, 255, 0.75)', marginTop: '0.4rem', fontWeight: 600 }}>
                Average Year 1 Client Savings
              </div>
            </div>

            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#FFFFFF', lineHeight: 1 }}>25+ Yrs</div>
              <div style={{ fontSize: '12.5px', color: 'rgba(255, 255, 255, 0.75)', marginTop: '0.4rem', fontWeight: 600 }}>
                Senior Executive CPA Leadership
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Detailed Case Studies List */}
      <section style={{ backgroundColor: '#F8FAFC', padding: '5.5rem 0' }}>
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
            {caseStudies.map((cs, idx) => (
              <article
                key={cs.id}
                id={cs.id}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '12px',
                  border: '1px solid var(--border-light)',
                  boxShadow: 'var(--shadow-card)',
                  overflow: 'hidden',
                }}
              >
                {/* Header Strip */}
                <div
                  style={{
                    backgroundColor: '#0F294A',
                    color: '#FFFFFF',
                    padding: '1.5rem 2rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '1rem',
                    borderBottom: '3px solid #FCAC14',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div
                      style={{
                        width: '46px',
                        height: '46px',
                        borderRadius: '8px',
                        backgroundColor: 'rgba(252, 172, 20, 0.15)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#FCAC14',
                      }}
                    >
                      {cs.icon}
                    </div>
                    <div>
                      <span
                        style={{
                          fontSize: '11px',
                          fontWeight: 800,
                          textTransform: 'uppercase',
                          letterSpacing: '0.08em',
                          color: '#FCAC14',
                          display: 'block',
                          marginBottom: '0.15rem',
                        }}
                      >
                        Case Study 0{idx + 1} &bull; {cs.badge}
                      </span>
                      <div style={{ fontSize: '14px', fontWeight: 600, color: 'rgba(255, 255, 255, 0.85)' }}>
                        {cs.industry} &bull; {cs.location}
                      </div>
                    </div>
                  </div>

                  {/* Highlight Metrics Pills */}
                  <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'center' }}>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ fontSize: '1.75rem', fontWeight: 900, color: '#FCAC14', lineHeight: 1 }}>
                        {cs.heroMetric}
                      </div>
                      <div style={{ fontSize: '11px', color: 'rgba(255, 255, 255, 0.7)', fontWeight: 600 }}>
                        {cs.heroMetricLabel}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Case Study Content Body */}
                <div style={{ padding: 'clamp(1.75rem, 3.5vw, 3rem)' }}>
                  <h2
                    style={{
                      fontSize: 'clamp(1.5rem, 2.5vw, 2.1rem)',
                      fontWeight: 800,
                      color: 'var(--navy-900)',
                      marginBottom: '1.25rem',
                      lineHeight: 1.3,
                      letterSpacing: '-0.02em',
                    }}
                  >
                    {cs.title}
                  </h2>

                  <p
                    style={{
                      fontSize: '16px',
                      color: 'var(--navy-800)',
                      lineHeight: 1.7,
                      marginBottom: '2.5rem',
                      borderLeft: '4px solid #FCAC14',
                      paddingLeft: '1.25rem',
                    }}
                  >
                    {cs.overview}
                  </p>

                  {/* Challenge & Strategy Split Grid */}
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                      gap: '2.5rem',
                      marginBottom: '2.5rem',
                    }}
                  >
                    {/* The Challenge */}
                    <div
                      style={{
                        backgroundColor: '#FFFBEB',
                        border: '1px solid #FDE68A',
                        borderRadius: '8px',
                        padding: '1.75rem',
                      }}
                    >
                      <h3
                        style={{
                          fontSize: '16px',
                          fontWeight: 800,
                          color: '#92400E',
                          marginBottom: '1rem',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.45rem',
                        }}
                      >
                        <span>The Financial Roadblocks</span>
                      </h3>
                      <ul
                        style={{
                          listStyle: 'none',
                          padding: 0,
                          margin: 0,
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '0.75rem',
                        }}
                      >
                        {cs.challenge.map((c, ci) => (
                          <li
                            key={ci}
                            style={{
                              display: 'flex',
                              alignItems: 'flex-start',
                              gap: '0.5rem',
                              fontSize: '13.5px',
                              color: '#78350F',
                              lineHeight: 1.55,
                            }}
                          >
                            <span style={{ color: '#D97706', fontWeight: 800 }}>&times;</span>
                            <span>{c}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* The Strategy */}
                    <div
                      style={{
                        backgroundColor: '#F0FDF4',
                        border: '1px solid #BBF7D0',
                        borderRadius: '8px',
                        padding: '1.75rem',
                      }}
                    >
                      <h3
                        style={{
                          fontSize: '16px',
                          fontWeight: 800,
                          color: '#166534',
                          marginBottom: '1rem',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.45rem',
                        }}
                      >
                        <span>The Puri &amp; Loggia CPA Strategy</span>
                      </h3>
                      <ul
                        style={{
                          listStyle: 'none',
                          padding: 0,
                          margin: 0,
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '0.75rem',
                        }}
                      >
                        {cs.strategy.map((s, si) => (
                          <li
                            key={si}
                            style={{
                              display: 'flex',
                              alignItems: 'flex-start',
                              gap: '0.5rem',
                              fontSize: '13.5px',
                              color: '#14532D',
                              lineHeight: 1.55,
                            }}
                          >
                            <CheckCircle2 size={16} color="#16A34A" style={{ flexShrink: 0, marginTop: '2px' }} />
                            <span>{s}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Quantitative Results Cards */}
                  <div style={{ marginBottom: '2.5rem' }}>
                    <div
                      style={{
                        fontSize: '12px',
                        fontWeight: 800,
                        textTransform: 'uppercase',
                        letterSpacing: '0.06em',
                        color: 'var(--text-muted)',
                        marginBottom: '0.85rem',
                      }}
                    >
                      Key Measured Deliverables:
                    </div>

                    <div
                      style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                        gap: '1rem',
                      }}
                    >
                      {cs.results.map((res, ri) => (
                        <div
                          key={ri}
                          style={{
                            backgroundColor: '#F8FAFC',
                            border: '1px solid var(--border-light)',
                            borderRadius: '6px',
                            padding: '1.25rem',
                            textAlign: 'center',
                          }}
                        >
                          <div
                            style={{
                              fontSize: '1.4rem',
                              fontWeight: 900,
                              color: 'var(--navy-900)',
                              marginBottom: '0.25rem',
                            }}
                          >
                            {res.value}
                          </div>
                          <div style={{ fontSize: '12px', color: 'var(--text-secondary)', fontWeight: 600 }}>
                            {res.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Verified Client Quote */}
                  <div
                    style={{
                      backgroundColor: '#0F294A',
                      color: '#FFFFFF',
                      borderRadius: '8px',
                      padding: '1.75rem 2rem',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '1rem',
                    }}
                  >
                    <p
                      style={{
                        fontSize: '15px',
                        fontStyle: 'italic',
                        lineHeight: 1.7,
                        color: 'rgba(255, 255, 255, 0.95)',
                        margin: 0,
                      }}
                    >
                      &ldquo;{cs.quote}&rdquo;
                    </p>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        borderTop: '1px solid rgba(255, 255, 255, 0.15)',
                        paddingTop: '0.85rem',
                      }}
                    >
                      <div>
                        <span style={{ fontWeight: 800, fontSize: '13.5px', color: '#FCAC14' }}>
                          {cs.quoteAuthor}
                        </span>
                        <span style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.7)', marginLeft: '0.4rem' }}>
                          &bull; {cs.quoteRole}
                        </span>
                      </div>
                      <span className="badge badge-gold" style={{ fontSize: '10.5px' }}>
                        Verified Client
                      </span>
                    </div>
                  </div>

                  {/* Bottom Action Row */}
                  <div
                    style={{
                      marginTop: '2rem',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      flexWrap: 'wrap',
                      gap: '1rem',
                    }}
                  >
                    <div style={{ fontSize: '13.5px', color: 'var(--text-secondary)' }}>
                      Want to identify hidden tax and structural opportunities in your business?
                    </div>

                    <button
                      onClick={() => onBookConsultation ? onBookConsultation(`${cs.industry} Strategy Call`) : null}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.45rem',
                        backgroundColor: '#FCAC14',
                        color: '#0F294A',
                        border: 'none',
                        borderRadius: '4px',
                        padding: '0.75rem 1.5rem',
                        fontWeight: 800,
                        fontSize: '13.5px',
                        cursor: 'pointer',
                        transition: 'background-color 0.15s ease',
                      }}
                    >
                      <span>Request a Scenario Review</span>
                      <ArrowRight size={15} />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Bottom Conversion Banner */}
      <section style={{ backgroundColor: '#0F294A', color: '#FFFFFF', padding: '5.5rem 0', textAlign: 'center' }}>
        <div className="container">
          <div style={{ maxWidth: '720px', margin: '0 auto' }}>
            <h2
              style={{
                fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
                fontWeight: 800,
                color: '#FFFFFF',
                marginBottom: '1.25rem',
                letterSpacing: '-0.02em',
              }}
            >
              Could Your Business Be Operating More Efficiently?
            </h2>

            <p
              style={{
                fontSize: '16.5px',
                color: 'rgba(255, 255, 255, 0.88)',
                lineHeight: 1.75,
                marginBottom: '2.5rem',
              }}
            >
              Every engagement starts with a confidential, complimentary 30-minute discovery call directly with Mark Puri, CPA or Helen Loggia, CPA. We will evaluate your current tax structure, accounting workflows, and growth targets.
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <button
                onClick={() => onBookConsultation ? onBookConsultation('Case Studies Bottom CTA') : null}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  backgroundColor: '#FCAC14',
                  color: '#0F294A',
                  border: 'none',
                  padding: '1rem 2.5rem',
                  borderRadius: '4px',
                  fontWeight: 800,
                  fontSize: '15px',
                  cursor: 'pointer',
                  boxShadow: '0 4px 14px rgba(252, 172, 20, 0.4)',
                }}
              >
                <span>Book a Discovery Consultation</span>
                <ArrowRight size={17} />
              </button>

              <Link
                to="/contact"
                className="btn btn-secondary"
                style={{
                  color: '#FFFFFF',
                  borderColor: 'rgba(255, 255, 255, 0.35)',
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  padding: '1rem 2rem',
                }}
              >
                <span>Contact Our Office</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
