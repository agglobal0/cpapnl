import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, Search, ArrowRight, ShieldCheck, CheckCircle2, 
  Phone, Calendar, Clock, ChevronRight, FileText, ExternalLink
} from 'lucide-react';

export const XeroResources: React.FC = () => {
  useEffect(() => {
    document.title = 'Xero Resources, Guides & Tutorials | Puri & Loggia LLP';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Practical Xero training guides, tutorials, and bookkeeping best practices for Canadian business owners. Master invoicing, bank feeds, and reporting.'
      );
    }
  }, []);

  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const ARTICLES = [
    {
      id: 1,
      title: 'How to Add a "Pay Now" Button to Your Xero Invoices',
      category: 'payments',
      categoryLabel: 'Invoicing & Payments',
      readTime: '4 min read',
      excerpt: 'Learn how connecting online payment gateways like Stripe allows customers to pay invoices instantly via credit card or direct debit, cutting your collection time in half.'
    },
    {
      id: 2,
      title: 'Automated Bank Rules & 1-Click Reconciliations in Xero',
      category: 'banking',
      categoryLabel: 'Bank Feeds',
      readTime: '5 min read',
      excerpt: 'Step-by-step instructions for creating intelligent bank rules in Xero to automatically categorize recurring subscriptions, utility bills, and supplier payouts.'
    },
    {
      id: 3,
      title: 'How to Read a Profit & Loss Statement (P&L) Like a Pro',
      category: 'reporting',
      categoryLabel: 'Financial Reporting',
      readTime: '6 min read',
      excerpt: 'Understand your gross margin, operating overhead, and net profit line items so you can evaluate whether your revenue growth is actually turning into cash.'
    },
    {
      id: 4,
      title: 'Customizing and Branding Your Invoices in Xero',
      category: 'payments',
      categoryLabel: 'Invoicing & Payments',
      readTime: '4 min read',
      excerpt: 'Make your business stand out by uploading high-resolution logos, styling invoice templates, and setting clear payment terms and banking details.'
    },
    {
      id: 5,
      title: 'Understanding the Balance Sheet: Assets, Liabilities & Equity',
      category: 'reporting',
      categoryLabel: 'Financial Reporting',
      readTime: '7 min read',
      excerpt: 'A founder-friendly walkthrough of the balance sheet, explaining working capital, retained earnings, and why commercial lenders inspect this statement first.'
    },
    {
      id: 6,
      title: 'How to Set Up Automated Invoice Reminders in Xero',
      category: 'payments',
      categoryLabel: 'Invoicing & Payments',
      readTime: '3 min read',
      excerpt: 'Put your receivables on autopilot. Configure gentle, automated email reminders 7 days before an invoice is due, on the due date, and when overdue.'
    },
    {
      id: 7,
      title: 'Setting Up Tracking Categories for Multi-Department Reporting',
      category: 'basics',
      categoryLabel: 'Business Basics',
      readTime: '5 min read',
      excerpt: 'Track profitability across distinct office locations, sales reps, or project divisions without complicating your core chart of accounts.'
    },
    {
      id: 8,
      title: 'Gross Profit vs. Net Profit: What’s the Real Difference?',
      category: 'basics',
      categoryLabel: 'Business Basics',
      readTime: '4 min read',
      excerpt: 'Discover why high sales can still leave you broke. We demystify the difference between cost of goods sold (COGS), gross margin, and bottom-line net profit.'
    },
    {
      id: 9,
      title: 'Account Transactions Report & General Ledger Audit',
      category: 'reporting',
      categoryLabel: 'Financial Reporting',
      readTime: '6 min read',
      excerpt: 'How to drill down into specific accounts, identify transaction misclassifications, and export clean, audit-ready summaries for your year-end CPA.'
    },
    {
      id: 10,
      title: 'Ask an Expert: E-Invoicing & Open Banking for Canadian Small Business',
      category: 'future',
      categoryLabel: 'Future Focus',
      readTime: '8 min read',
      excerpt: 'An insightful briefing on how Canadian open banking standards and automated e-invoicing networks are transforming cash flow management for small businesses.'
    },
    {
      id: 11,
      title: 'Importing Receipts with Dext & Hubdoc for CRA Compliance',
      category: 'banking',
      categoryLabel: 'Bank Feeds',
      readTime: '5 min read',
      excerpt: 'Never lose a receipt again. Use OCR scanning to extract supplier names, invoice numbers, and GST/HST, automatically attaching digital proof to each transaction.'
    },
    {
      id: 12,
      title: 'Structuring Your Chart of Accounts for Canadian Corporate Tax',
      category: 'basics',
      categoryLabel: 'Business Basics',
      readTime: '6 min read',
      excerpt: 'Organize your revenue and expense categories to align seamlessly with CRA General Index of Financial Information (GIFI) codes, saving time on T2 filings.'
    }
  ];

  const filtered = ARTICLES.filter(art => {
    const matchesCategory = activeCategory === 'all' || art.category === activeCategory;
    const matchesSearch = searchQuery.trim() === '' || 
      art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div>
      {/* 1. Subpage Hero Banner */}
      <div className="page-hero-banner">
        <div className="container">
          <div className="badge badge-gold" style={{ marginBottom: '1rem', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
            <BookOpen size={14} />
            <span>Xero Educational Knowledge Hub</span>
          </div>
          <h1>Xero Resources &amp; Guides</h1>
          <p>
            Practical, step-by-step tutorials, guides, and best practices curated by licensed Canadian CPAs to help you master Xero and streamline your financial operations.
          </p>
        </div>
      </div>

      {/* 2. Main Content Layout */}
      <section className="section" style={{ backgroundColor: '#FFFFFF', padding: '3.5rem 0 5rem' }}>
        <div className="container" style={{ maxWidth: '960px' }}>
          <article className="service-main-content">
              {/* Filter Tabs & Search Bar */}
              <div style={{ marginBottom: '2.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
                  <div style={{ position: 'relative', minWidth: '280px', flex: 1 }}>
                    <Search size={16} color="var(--text-muted)" style={{ position: 'absolute', left: '0.85rem', top: '50%', transform: 'translateY(-50%)' }} />
                    <input
                      type="text"
                      placeholder="Search Xero guides &amp; topics..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '0.65rem 0.85rem 0.65rem 2.25rem',
                        borderRadius: '6px',
                        border: '1px solid var(--border-medium)',
                        fontSize: '13.5px',
                        outline: 'none',
                        boxSizing: 'border-box'
                      }}
                    />
                  </div>
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {[
                    { id: 'all', label: 'All Resources' },
                    { id: 'basics', label: 'Business Basics' },
                    { id: 'payments', label: 'Invoicing & Payments' },
                    { id: 'banking', label: 'Bank Feeds & Receipts' },
                    { id: 'reporting', label: 'Financial Reporting' },
                    { id: 'future', label: 'Future Focus & Tech' }
                  ].map(cat => (
                    <button
                      key={cat.id}
                      onClick={() => setActiveCategory(cat.id)}
                      style={{
                        padding: '0.45rem 0.95rem',
                        borderRadius: '20px',
                        border: '1px solid',
                        borderColor: activeCategory === cat.id ? '#163B6B' : 'var(--border-medium)',
                        backgroundColor: activeCategory === cat.id ? '#163B6B' : '#FFFFFF',
                        color: activeCategory === cat.id ? '#FFFFFF' : 'var(--navy-900)',
                        fontSize: '12.5px',
                        fontWeight: 700,
                        cursor: 'pointer',
                        transition: 'all 0.15s ease'
                      }}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Articles Grid */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '3.5rem' }}>
                {filtered.map(art => (
                  <div 
                    key={art.id}
                    style={{
                      padding: '1.65rem',
                      borderRadius: '8px',
                      backgroundColor: '#F8FAFC',
                      border: '1px solid var(--border-light)',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      boxShadow: 'var(--shadow-xs)'
                    }}
                  >
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.65rem' }}>
                        <span style={{ fontSize: '11px', fontWeight: 800, color: '#0284C7', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                          {art.categoryLabel}
                        </span>
                        <span style={{ fontSize: '11.5px', color: 'var(--text-muted)' }}>
                          {art.readTime}
                        </span>
                      </div>

                      <h3 style={{ fontSize: '17px', fontWeight: 700, color: 'var(--navy-900)', marginBottom: '0.65rem', lineHeight: 1.4 }}>
                        {art.title}
                      </h3>

                      <p style={{ fontSize: '13.5px', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                        {art.excerpt}
                      </p>
                    </div>

                    <div style={{ marginTop: '1.25rem', paddingTop: '0.85rem', borderTop: '1px solid var(--border-light)' }}>
                      <Link 
                        to="/contact" 
                        style={{ fontSize: '13px', fontWeight: 700, color: 'var(--navy-800)', display: 'inline-flex', alignItems: 'center', gap: '0.35rem', textDecoration: 'none' }}
                      >
                        <span>Request Custom Walkthrough</span>
                        <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>

              {/* Direct Partner Action Box (NO Book a Consultation) */}
              <div 
                style={{ 
                  padding: '2.25rem', 
                  backgroundColor: '#0F213A', 
                  borderRadius: '8px', 
                  color: '#FFFFFF',
                  boxShadow: '0 8px 24px rgba(15, 33, 58, 0.15)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <ShieldCheck size={20} color="#FCAC14" />
                  <span style={{ color: '#FDE68A', fontSize: '12.5px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                    Personalized Xero Support
                  </span>
                </div>

                <h3 style={{ fontSize: '22px', color: '#FFFFFF', fontWeight: 800, margin: '0 0 0.65rem' }}>
                  Need Help Configuring Xero for Your Canadian Corporation?
                </h3>
                
                <p style={{ fontSize: '15px', color: 'rgba(255, 255, 255, 0.88)', lineHeight: 1.65, margin: '0 0 1.5rem' }}>
                  Our certified CPA advisors help you structure your chart of accounts, resolve reconciliation discrepancies, and connect custom software apps.
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.25rem', alignItems: 'center', marginBottom: '1.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '14px' }}>
                    <Phone size={15} color="#FCAC14" />
                    <span style={{ color: 'rgba(255,255,255,0.7)' }}>Mark Puri, CPA:</span>
                    <a href="tel:416-801-6746" style={{ color: '#FDE68A', fontWeight: 700, textDecoration: 'none' }}>
                      +1 416 801 6746
                    </a>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '14px' }}>
                    <Phone size={15} color="#FCAC14" />
                    <span style={{ color: 'rgba(255,255,255,0.7)' }}>Helen Loggia, CPA, MBA:</span>
                    <a href="tel:416-805-1427" style={{ color: '#FDE68A', fontWeight: 700, textDecoration: 'none' }}>
                      +1 416 805 1427
                    </a>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  <Link 
                    to="/contact" 
                    className="btn btn-primary"
                    style={{ 
                      backgroundColor: '#FCAC14', 
                      borderColor: '#FCAC14', 
                      color: '#0F294A', 
                      fontWeight: 800,
                      padding: '0.85rem 1.75rem',
                      boxShadow: '0 4px 12px rgba(252, 172, 20, 0.35)'
                    }}
                  >
                    <span>Contact Our Xero Team</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
          </article>
        </div>
      </section>
    </div>
  );
};
