import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, Search, ArrowRight, ShieldCheck, CheckCircle2, 
  Phone, Clock, ChevronRight, FileText, TrendingUp, DollarSign,
  Briefcase, Activity, Rocket, Key
} from 'lucide-react';

export const BusinessGuidesPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Canadian Business Guides & Advisory Library | Puri & Loggia LLP';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Practical business guides on cash flow forecasting, pricing defense, starting up in Ontario, buying a business, and succession planning by Puri & Loggia LLP.'
      );
    }
  }, []);

  const [activeTopic, setActiveTopic] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const TOPICS = [
    { key: 'all', label: 'All Guides' },
    { key: 'cashflow', label: 'Cashflow' },
    { key: 'growth', label: 'Growth' },
    { key: 'profit', label: 'Improve Profit' },
    { key: 'resilience', label: 'Resilience' },
    { key: 'startup', label: 'Starting Up' },
    { key: 'succession', label: 'Succession & Exit' }
  ];

  const GUIDES = [
    {
      id: 1,
      title: 'A Resilience Guide for Small Business Owners',
      topic: 'resilience',
      topicLabel: 'Resilience',
      readTime: '6 min read',
      excerpt: 'Essential steps to buffer your corporate balance sheet, audit recurring vendor commitments, and establish a dedicated 3-month operational cash reserve against economic volatility.'
    },
    {
      id: 2,
      title: 'Achieve Growth by Buying Another Business (M&A Strategy)',
      topic: 'growth',
      topicLabel: 'Growth',
      readTime: '7 min read',
      excerpt: 'How acquiring a competitor or retiring owner’s client book provides instant market share, predictable recurring cash flow, and cost synergies without starting from zero.'
    },
    {
      id: 3,
      title: 'Alternatives to Traditional Commercial Bank Loans',
      topic: 'startup',
      topicLabel: 'Starting Up',
      readTime: '5 min read',
      excerpt: 'Exploring equipment leasing, Canadian government innovation grants (IRAP, SR&ED), supplier credit terms, and customer advance payments when bank financing is restrictive.'
    },
    {
      id: 4,
      title: 'Assessing a New Market for Viability & Customer Demand',
      topic: 'growth',
      topicLabel: 'Growth',
      readTime: '6 min read',
      excerpt: 'A disciplined financial framework to model unit economics, examine provincial regulatory barriers, and validate customer willingness to pay before committing capital.'
    },
    {
      id: 5,
      title: 'Asset Finance Guide: Equipment Leasing vs. Buying in Ontario',
      topic: 'cashflow',
      topicLabel: 'Cashflow',
      readTime: '5 min read',
      excerpt: 'Evaluate the corporate tax deductions, Capital Cost Allowance (CCA) asset classes, and cash flow differences between leasing vs. debt-financing capital equipment.'
    },
    {
      id: 6,
      title: 'Automating New Lead Generation & Sales Pipelines',
      topic: 'growth',
      topicLabel: 'Growth',
      readTime: '5 min read',
      excerpt: 'Synchronize your CRM and invoicing platforms to accurately track Customer Acquisition Cost (CAC), Lifetime Value (LTV), and convert inquiries into recurring retainers.'
    },
    {
      id: 7,
      title: 'How to Avoid Running Out of Money: Managing Your Cash Burn',
      topic: 'cashflow',
      topicLabel: 'Cashflow',
      readTime: '6 min read',
      excerpt: 'Proven treasury controls to measure net monthly burn, shorten accounts receivable collection cycles, and maintain rolling working capital headroom.'
    },
    {
      id: 8,
      title: 'Avoiding Credit Card Fraud & Merchant Processing Risks',
      topic: 'resilience',
      topicLabel: 'Resilience',
      readTime: '4 min read',
      excerpt: 'Protect your cash reserves with 3D Secure authentication, automated address verification (AVS), and strict chargeback defense protocols for e-commerce and B2B billing.'
    },
    {
      id: 9,
      title: 'Bootstrapping Your Startup: Lean Operating Principles',
      topic: 'startup',
      topicLabel: 'Starting Up',
      readTime: '6 min read',
      excerpt: 'Practical methods to fund early operational milestones using customer cash flows, cloud software automation, and fractional advisors while maintaining 100% equity.'
    },
    {
      id: 10,
      title: 'Budgeting for Business Expansion & Multi-Location Scaling',
      topic: 'cashflow',
      topicLabel: 'Cashflow',
      readTime: '7 min read',
      excerpt: 'Accurately forecast initial tenant improvements, inventory build-up, and staged hiring before signing commercial leases or opening secondary facilities.'
    },
    {
      id: 11,
      title: 'Building a Defensible, Sustainable Competitive Advantage',
      topic: 'growth',
      topicLabel: 'Growth',
      readTime: '5 min read',
      excerpt: 'Structure proprietary operating procedures, client experience touchpoints, and bundled subscriptions that insulate your firm from commodity price wars.'
    },
    {
      id: 12,
      title: 'Calculating Your True Break-Even Point in Units and Revenue',
      topic: 'profit',
      topicLabel: 'Improve Profit',
      readTime: '6 min read',
      excerpt: 'Dissect fixed operational overhead versus variable delivery costs to determine the exact billable days or unit volumes required to generate net positive cash flow.'
    },
    {
      id: 13,
      title: 'Cash Flow Improvement Toolkit & 13-Week Dynamic Forecasting',
      topic: 'cashflow',
      topicLabel: 'Cashflow',
      readTime: '8 min read',
      excerpt: 'How our CPA team implements 13-week rolling cash forecasts to identify potential liquidity crunches 60 to 90 days before payroll or corporate tax installments.'
    },
    {
      id: 14,
      title: 'Checklist to Set Up a Corporation in Ontario',
      topic: 'startup',
      topicLabel: 'Starting Up',
      readTime: '7 min read',
      excerpt: 'Federal vs. Ontario provincial incorporation, CRA Business Number setup, HST registration, WSIB compliance, and opening commercial banking facilities.'
    },
    {
      id: 15,
      title: 'Determining Your Exit Strategy & Business Succession Planning',
      topic: 'succession',
      topicLabel: 'Succession & Exit',
      readTime: '7 min read',
      excerpt: 'Prepare your business for maximum valuation, utilize the Lifetime Capital Gains Exemption (LCGE), and plan a tax-efficient ownership transfer to family or third parties.'
    },
    {
      id: 16,
      title: 'Defend and Justify Your Pricing Without Discounting',
      topic: 'profit',
      topicLabel: 'Improve Profit',
      readTime: '5 min read',
      excerpt: 'Stop eroding gross margins. Learn how to articulate ROI, position tiered packages, and introduce annual inflation adjustments without losing valued customers.'
    }
  ];

  const filteredGuides = GUIDES.filter((guide) => {
    const matchesTopic = activeTopic === 'all' || guide.topic === activeTopic;
    const matchesQuery = 
      guide.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      guide.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      guide.topicLabel.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTopic && matchesQuery;
  });

  return (
    <div>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: 'Business Guides & Financial Management Library',
            provider: {
              '@type': 'AccountingService',
              name: 'Puri & Loggia LLP',
              url: 'https://cpapnl.com/',
              telephone: '+1-416-801-6746',
            },
            description:
              'Curated business guides on cash flow forecasting, pricing defense, starting up in Ontario, buying a business, and succession planning by Canadian CPAs.',
          }),
        }}
      />

      {/* 1. Subpage Hero Banner */}
      <div className="page-hero-banner">
        <div className="container">
          <div className="badge badge-gold" style={{ marginBottom: '1rem', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
            <BookOpen size={14} />
            <span>Executive Business Guides</span>
          </div>
          <h1>Business Guides</h1>
          <p>
            Strategic financial blueprints, growth frameworks, and practical operating guides authored by experienced Chartered Professional Accountants to help Canadian entrepreneurs succeed.
          </p>
        </div>
      </div>

      {/* 2. Main Content Layout */}
      <section className="section" style={{ backgroundColor: '#FFFFFF', padding: '3.5rem 0 5rem' }}>
        <div className="container" style={{ maxWidth: '960px' }}>
          <div className="service-main-content">
              {/* Breadcrumb Navigation */}
              <nav aria-label="Breadcrumb" style={{ marginBottom: '1.5rem', fontSize: '0.875rem', color: '#6B7280' }}>
                <Link to="/" style={{ color: '#004AAD', textDecoration: 'none' }}>Home</Link>
                <span style={{ margin: '0 0.5rem' }}>/</span>
                <Link to="/resources" style={{ color: '#004AAD', textDecoration: 'none' }}>Resources</Link>
                <span style={{ margin: '0 0.5rem' }}>/</span>
                <span style={{ color: '#1F2937', fontWeight: 600 }}>Business Guides</span>
              </nav>

              {/* Search & Topic Filter Bar */}
              <div 
                style={{ 
                  backgroundColor: '#F8FAFC', 
                  borderRadius: '16px', 
                  padding: '1.5rem', 
                  border: '1px solid #E2E8F0',
                  marginBottom: '2.5rem'
                }}
              >
                {/* Search Box */}
                <div style={{ position: 'relative', marginBottom: '1.25rem' }}>
                  <Search 
                    size={18} 
                    style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: '#9CA3AF' }} 
                  />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search guides by keyword (e.g., cash flow, break-even, pricing, M&A, incorporation)..."
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem 0.75rem 2.75rem',
                      borderRadius: '10px',
                      border: '1px solid #CBD5E1',
                      fontSize: '0.95rem',
                      outline: 'none',
                      backgroundColor: '#FFFFFF'
                    }}
                  />
                </div>

                {/* Topic Pills */}
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#4B5563', marginRight: '0.25rem' }}>
                    Topics:
                  </span>
                  {TOPICS.map((top) => (
                    <button
                      key={top.key}
                      onClick={() => setActiveTopic(top.key)}
                      style={{
                        padding: '0.4rem 0.85rem',
                        borderRadius: '9999px',
                        fontSize: '0.825rem',
                        fontWeight: activeTopic === top.key ? 700 : 500,
                        backgroundColor: activeTopic === top.key ? '#004AAD' : '#FFFFFF',
                        color: activeTopic === top.key ? '#FFFFFF' : '#4B5563',
                        border: activeTopic === top.key ? '1px solid #004AAD' : '1px solid #CBD5E1',
                        cursor: 'pointer',
                        transition: 'all 0.15s ease'
                      }}
                    >
                      {top.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Guides Grid */}
              <div style={{ marginBottom: '3rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                  <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0F2942', margin: 0 }}>
                    {activeTopic === 'all' ? 'All Business Guides & Articles' : TOPICS.find(t => t.key === activeTopic)?.label}
                  </h2>
                  <span style={{ fontSize: '0.875rem', color: '#6B7280' }}>
                    Showing {filteredGuides.length} of {GUIDES.length} guides
                  </span>
                </div>

                {filteredGuides.length === 0 ? (
                  <div style={{ textAlign: 'center', padding: '3rem 1rem', backgroundColor: '#F9FAFB', borderRadius: '12px' }}>
                    <p style={{ color: '#6B7280', fontSize: '1rem', marginBottom: '1rem' }}>
                      No guides found matching your search.
                    </p>
                    <button 
                      onClick={() => { setSearchQuery(''); setActiveTopic('all'); }}
                      className="btn btn-secondary"
                      style={{ fontSize: '0.85rem' }}
                    >
                      Reset Filters
                    </button>
                  </div>
                ) : (
                  <div 
                    style={{ 
                      display: 'grid', 
                      gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
                      gap: '1.5rem' 
                    }}
                  >
                    {filteredGuides.map((guide) => (
                      <article 
                        key={guide.id}
                        style={{
                          backgroundColor: '#FFFFFF',
                          border: '1px solid #E5E7EB',
                          borderRadius: '12px',
                          padding: '1.5rem',
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'space-between',
                          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.02)',
                          transition: 'transform 0.2s ease, box-shadow 0.2s ease'
                        }}
                      >
                        <div>
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                            <span 
                              style={{ 
                                fontSize: '0.75rem', 
                                fontWeight: 700, 
                                color: '#004AAD', 
                                backgroundColor: '#EFF6FF', 
                                padding: '0.2rem 0.6rem', 
                                borderRadius: '6px',
                                textTransform: 'uppercase',
                                letterSpacing: '0.04em'
                              }}
                            >
                              {guide.topicLabel}
                            </span>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.775rem', color: '#9CA3AF' }}>
                              <Clock size={12} />
                              <span>{guide.readTime}</span>
                            </div>
                          </div>

                          <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0F2942', marginBottom: '0.75rem', lineHeight: 1.4 }}>
                            {guide.title}
                          </h3>

                          <p style={{ fontSize: '0.9rem', lineHeight: 1.6, color: '#4B5563', marginBottom: '1.25rem' }}>
                            {guide.excerpt}
                          </p>
                        </div>

                        <div style={{ paddingTop: '1rem', borderTop: '1px solid #F3F4F6', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <Link 
                            to="/contact"
                            style={{ 
                              display: 'inline-flex', 
                              alignItems: 'center', 
                              gap: '0.3rem', 
                              color: '#004AAD', 
                              fontWeight: 700, 
                              fontSize: '0.875rem', 
                              textDecoration: 'none' 
                            }}
                          >
                            <span>Discuss with a CPA</span>
                            <ChevronRight size={16} />
                          </Link>
                          <Link 
                            to="/resources"
                            style={{ 
                              fontSize: '0.8rem', 
                              color: '#6B7280', 
                              textDecoration: 'none' 
                            }}
                          >
                            Related Templates
                          </Link>
                        </div>
                      </article>
                    ))}
                  </div>
                )}
              </div>

              {/* Direct Partner Advisory Box */}
              <div 
                style={{ 
                  backgroundColor: '#0F2942', 
                  color: '#FFFFFF', 
                  borderRadius: '16px', 
                  padding: '2.5rem', 
                  textAlign: 'center' 
                }}
              >
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backgroundColor: '#FCAC14', color: '#0F2942', padding: '0.3rem 0.75rem', borderRadius: '9999px', fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', marginBottom: '1rem' }}>
                  <ShieldCheck size={14} />
                  <span>Strategic CPA Advisory</span>
                </div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '0.75rem' }}>
                  Ready to Put These Strategies to Work in Your Business?
                </h3>
                <p style={{ color: '#D1D5DB', fontSize: '0.95rem', maxWidth: '600px', margin: '0 auto 1.5rem', lineHeight: 1.6 }}>
                  Whether you are navigating cash flow challenges, preparing for an acquisition, or optimizing your tax posture, Mark Puri and Helen Loggia are ready to assist.
                </p>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                  <a 
                    href="tel:+14168016746" 
                    className="btn btn-secondary"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
                  >
                    <Phone size={16} />
                    <span>Call Mark Puri: +1 (416) 801-6746</span>
                  </a>
                  <a 
                    href="tel:+14168051427" 
                    className="btn btn-secondary"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
                  >
                    <Phone size={16} />
                    <span>Call Helen Loggia: +1 (416) 805-1427</span>
                  </a>
                </div>
              </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default BusinessGuidesPage;
