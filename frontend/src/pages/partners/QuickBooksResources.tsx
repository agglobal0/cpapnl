import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, Search, ArrowRight, ShieldCheck, CheckCircle2, 
  Phone, Calendar, Clock, ChevronRight, FileText, ExternalLink
} from 'lucide-react';

export const QuickBooksResources: React.FC = () => {
  useEffect(() => {
    document.title = 'QuickBooks Resources, Guides & Tutorials | Puri & Loggia LLP';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Practical QuickBooks Online tutorials, step-by-step guides, and bookkeeping best practices from Certified ProAdvisors in Ontario. Invoicing, bank rules, HST/GST setup, and reconciliations.'
      );
    }
  }, []);

  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const ARTICLES = [
    {
      id: 1,
      title: 'How to Connect Your Canadian Bank & Credit Card Accounts to QuickBooks Online',
      category: 'banking',
      categoryLabel: 'Bank Feeds & Banking',
      readTime: '4 min read',
      excerpt: 'Link your business accounts from RBC, TD, BMO, Scotiabank, and CIBC directly into QuickBooks Online for automated daily transaction imports and zero data-entry errors.'
    },
    {
      id: 2,
      title: 'Bookkeeping Best Practices: Essential Tips & Tricks for QuickBooks Online',
      category: 'setup',
      categoryLabel: 'Getting Started',
      readTime: '6 min read',
      excerpt: 'Learn standard operating procedures for daily receipts, weekly bank reviews, and monthly reconciliations that keep your books tidy and CRA audit-ready.'
    },
    {
      id: 3,
      title: 'How to Customize Invoices and Professional Sales Forms in QuickBooks Online',
      category: 'invoicing',
      categoryLabel: 'Sales & Invoicing',
      readTime: '4 min read',
      excerpt: 'Reinforce your brand with custom logos, customized payment terms, personalized email greetings, and clear payment instructions that encourage faster client payments.'
    },
    {
      id: 4,
      title: 'How to Capture and Manage Receipts on the Go Using the QuickBooks App',
      category: 'expenses',
      categoryLabel: 'Expenses & Receipts',
      readTime: '3 min read',
      excerpt: 'Snap receipts with your phone. QuickBooks Online extracts the vendor, date, and HST/GST amount automatically, attaching the image to the transaction for paperless records.'
    },
    {
      id: 5,
      title: 'How to Reconcile Accounts: Statements, Beginning Balances & Zero-Difference Tips',
      category: 'banking',
      categoryLabel: 'Bank Feeds & Banking',
      readTime: '7 min read',
      excerpt: 'Step-by-step guidance on monthly account reconciliations, fixing opening balance discrepancies, and ensuring your balance sheet matches your actual bank statements.'
    },
    {
      id: 6,
      title: 'How to Use Bank Rules in QuickBooks Online to Automate Common Expenses',
      category: 'banking',
      categoryLabel: 'Bank Feeds & Banking',
      readTime: '5 min read',
      excerpt: 'Stop manually typing the same recurring payments. Set intelligent rules based on payee name, amount, or description to automatically assign account codes and tax rates.'
    },
    {
      id: 7,
      title: 'How to Set Up Automated Recurring Invoices and Online Autopay',
      category: 'invoicing',
      categoryLabel: 'Sales & Invoicing',
      readTime: '4 min read',
      excerpt: 'Put retainer and subscription billing on autopilot. Configure scheduled recurring invoices and enable credit card autopay so you never chase a payment again.'
    },
    {
      id: 8,
      title: 'How to Record Business Expenses Paid for with Owner Personal Funds',
      category: 'expenses',
      categoryLabel: 'Expenses & Receipts',
      readTime: '5 min read',
      excerpt: 'Learn the correct way to log company purchases made on personal credit cards without muddying your accounts, properly crediting the Owner Investment / Shareholder Loan account.'
    },
    {
      id: 9,
      title: 'Setting Up Canadian Sales Tax (HST/GST) in QuickBooks Online',
      category: 'setup',
      categoryLabel: 'Getting Started',
      readTime: '6 min read',
      excerpt: 'A comprehensive guide to configuring Ontario HST (13%) and cross-provincial GST/PST tax rates in QuickBooks Online for effortless sales tax filing and CRA compliance.'
    },
    {
      id: 10,
      title: 'How to Record Customer Refunds and Issue Credit Memos Properly',
      category: 'invoicing',
      categoryLabel: 'Sales & Invoicing',
      readTime: '4 min read',
      excerpt: 'Ensure your revenue accounts and sales tax liability accounts balance when issuing client refunds, credit notes, or discount adjustments.'
    },
    {
      id: 11,
      title: 'How to Set Up Your Products & Services List in QuickBooks Online',
      category: 'setup',
      categoryLabel: 'Getting Started',
      readTime: '5 min read',
      excerpt: 'Organize your service catalog and inventory items with clear income accounts, standard pricing, and tax codes to make quoting and billing faster than ever.'
    },
    {
      id: 12,
      title: 'How to Invite Your CPA Accountant into QuickBooks Online',
      category: 'setup',
      categoryLabel: 'Getting Started',
      readTime: '3 min read',
      excerpt: 'Grant our firm secure Accountant User access to your company file. This does not take up one of your paid user seats and allows us to provide real-time advisory.'
    },
    {
      id: 13,
      title: '1010 Wine and Events’ Secrets to Smart Business Scaling',
      category: 'growth',
      categoryLabel: 'Business Growth',
      readTime: '5 min read',
      excerpt: 'Real-world lessons from scaling entrepreneurs on utilizing real-time financial metrics to manage overhead, protect cash reserves, and fund sustainable expansion.'
    },
    {
      id: 14,
      title: 'Accounting Terms You Need to Know as a Canadian Small Business Owner',
      category: 'growth',
      categoryLabel: 'Business Growth',
      readTime: '6 min read',
      excerpt: 'Demystifying working capital, EBITDA, chart of accounts, depreciation, and retained earnings into straightforward, actionable business language.'
    }
  ];

  const CATEGORIES = [
    { key: 'all', label: 'All Resources' },
    { key: 'setup', label: 'Getting Started' },
    { key: 'invoicing', label: 'Sales & Invoicing' },
    { key: 'expenses', label: 'Expenses & Receipts' },
    { key: 'banking', label: 'Bank Feeds & Banking' },
    { key: 'growth', label: 'Business Growth' }
  ];

  const filteredArticles = ARTICLES.filter((art) => {
    const matchesCat = activeCategory === 'all' || art.category === activeCategory;
    const matchesQuery = 
      art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesQuery;
  });

  return (
    <div>
      {/* 1. Subpage Hero Banner */}
      <div className="page-hero-banner">
        <div className="container">
          <div className="badge badge-gold" style={{ marginBottom: '1rem', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
            <BookOpen size={14} />
            <span>Knowledge Base &amp; Tutorials</span>
          </div>
          <h1>QuickBooks Online Resources</h1>
          <p>
            Practical tutorials, step-by-step guides, and bookkeeping best practices curated by Certified QuickBooks ProAdvisors to help Canadian business owners master their numbers.
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
                <Link to="/cloud-accounting" style={{ color: '#004AAD', textDecoration: 'none' }}>Partners</Link>
                <span style={{ margin: '0 0.5rem' }}>/</span>
                <Link to="/quickbooks-online" style={{ color: '#004AAD', textDecoration: 'none' }}>QuickBooks Online</Link>
                <span style={{ margin: '0 0.5rem' }}>/</span>
                <span style={{ color: '#1F2937', fontWeight: 600 }}>Resources</span>
              </nav>

              {/* Search & Category Filter Bar */}
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
                    placeholder="Search QuickBooks guides (e.g., bank rules, HST, invoices, reconciliations)..."
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
                  {CATEGORIES.map((cat) => (
                    <button
                      key={cat.key}
                      onClick={() => setActiveCategory(cat.key)}
                      style={{
                        padding: '0.4rem 0.85rem',
                        borderRadius: '9999px',
                        fontSize: '0.825rem',
                        fontWeight: activeCategory === cat.key ? 700 : 500,
                        backgroundColor: activeCategory === cat.key ? '#004AAD' : '#FFFFFF',
                        color: activeCategory === cat.key ? '#FFFFFF' : '#4B5563',
                        border: activeCategory === cat.key ? '1px solid #004AAD' : '1px solid #CBD5E1',
                        cursor: 'pointer',
                        transition: 'all 0.15s ease'
                      }}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Resource Cards Grid */}
              <div style={{ marginBottom: '3rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                  <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0F2942', margin: 0 }}>
                    {activeCategory === 'all' ? 'All QuickBooks Guides & Tutorials' : CATEGORIES.find(c => c.key === activeCategory)?.label}
                  </h2>
                  <span style={{ fontSize: '0.875rem', color: '#6B7280' }}>
                    Showing {filteredArticles.length} of {ARTICLES.length} guides
                  </span>
                </div>

                {filteredArticles.length === 0 ? (
                  <div style={{ textAlign: 'center', padding: '3rem 1rem', backgroundColor: '#F9FAFB', borderRadius: '12px' }}>
                    <p style={{ color: '#6B7280', fontSize: '1rem', marginBottom: '1rem' }}>
                      No resources found matching your search.
                    </p>
                    <button 
                      onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
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
                    {filteredArticles.map((art) => (
                      <article 
                        key={art.id}
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
                              {art.categoryLabel}
                            </span>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.775rem', color: '#9CA3AF' }}>
                              <Clock size={12} />
                              <span>{art.readTime}</span>
                            </div>
                          </div>

                          <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0F2942', marginBottom: '0.75rem', lineHeight: 1.4 }}>
                            {art.title}
                          </h3>

                          <p style={{ fontSize: '0.9rem', lineHeight: 1.6, color: '#4B5563', marginBottom: '1.25rem' }}>
                            {art.excerpt}
                          </p>
                        </div>

                        <div style={{ paddingTop: '1rem', borderTop: '1px solid #F3F4F6', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <Link 
                            to="/quickbooks-online"
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
                            <span>Learn with Our CPAs</span>
                            <ChevronRight size={16} />
                          </Link>
                          <Link 
                            to="/contact-us"
                            style={{ 
                              fontSize: '0.8rem', 
                              color: '#6B7280', 
                              textDecoration: 'none' 
                            }}
                          >
                            Ask an Advisor
                          </Link>
                        </div>
                      </article>
                    ))}
                  </div>
                )}
              </div>

              {/* Direct ProAdvisor Support Box */}
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
                  <span>Personalized QuickBooks Support</span>
                </div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '0.75rem' }}>
                  Need Help Resolving an Issue in QuickBooks Online?
                </h3>
                <p style={{ color: '#D1D5DB', fontSize: '0.95rem', maxWidth: '600px', margin: '0 auto 1.5rem', lineHeight: 1.6 }}>
                  Don’t waste hours guessing how to balance clearing accounts or file HST returns. Talk directly with Mark Puri and Helen Loggia for reliable CPA solutions.
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
export default QuickBooksResources;
