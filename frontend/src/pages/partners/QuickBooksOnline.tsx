import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, ArrowRight, CheckCircle2, Phone, 
  ExternalLink, Layers, Users, CreditCard, RefreshCw, 
  BarChart2, Smartphone, DollarSign, Receipt, FileText, BookOpen
} from 'lucide-react';

export const QuickBooksOnline: React.FC = () => {
  useEffect(() => {
    document.title = 'QuickBooks Online Certified ProAdvisor Accountants Ontario | Puri & Loggia LLP';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Certified QuickBooks Online ProAdvisors in Ontario. Expert QBO setup, bank feed reconciliation, automated payroll, invoicing, and real-time CPA advisory for Canadian businesses.'
      );
    }
  }, []);

  const QBO_FEATURES = [
    {
      icon: Layers,
      title: 'Effortless Organization & App Sync',
      desc: 'Connect your business bank and credit card accounts for automated daily transaction downloads and intelligent categorization. Integrate directly with Shopify, Stripe, and specialized apps you already rely on.'
    },
    {
      icon: DollarSign,
      title: 'Real-Time Cash Flow Management',
      desc: 'Stay ahead of cash flow bottlenecks. Know exactly who owes you, invoice aging stages, and upcoming vendor payables with intuitive live dashboards accessible 24/7.'
    },
    {
      icon: CreditCard,
      title: 'Customized Invoicing & Fast Payments',
      desc: 'Issue polished, branded invoices, estimates, and sales receipts from any device. Allow clients to pay instantly online with credit cards and bank transfers to shorten payment cycles.'
    },
    {
      icon: BarChart2,
      title: 'Instant Financial Reporting',
      desc: 'Gain instant insight into your financial health. Generate detailed Profit & Loss statements, Balance Sheets, and customized cash flow forecasts at the touch of a button.'
    },
    {
      icon: Users,
      title: 'Seamless CPA Collaboration & Tax Readiness',
      desc: 'Grant our CPA team secure real-time access to your books. We monitor your numbers all year, eliminating year-end tax scrambles and ensuring painless HST/GST and T2 filing.'
    },
    {
      icon: Smartphone,
      title: 'Full-Featured Mobile Accounting',
      desc: 'Manage your business from anywhere with the QuickBooks mobile app. Snap photos of expense receipts, send invoices on site, check balances, and answer client queries on the move.'
    },
    {
      icon: RefreshCw,
      title: 'Automated Canadian Payroll',
      desc: 'Process payroll in minutes with automated tax calculations for CPP, EI, and federal/provincial withholdings. Pay employees via direct deposit and file T4s and ROEs without stress.'
    },
    {
      icon: Receipt,
      title: 'Direct Canadian Bank Feeds',
      desc: 'Securely sync statements from RBC, TD, BMO, Scotiabank, CIBC, and credit card providers. Live feeds eliminate manual data entry and catch discrepancies early.'
    },
    {
      icon: FileText,
      title: 'Automated Bill Pay & Expense Tracking',
      desc: 'Keep track of bills and vendor payments in one central hub. Schedule recurring disbursements and avoid late payment fees while keeping supplier relationships strong.'
    }
  ];

  return (
    <div>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'QuickBooks Online Cloud Accounting & Setup Services',
            serviceType: 'QuickBooks Online Certified ProAdvisor Setup, Migration & Advisory',
            provider: {
              '@type': 'AccountingService',
              name: 'Puri & Loggia LLP',
              url: 'https://cpapnl.com/',
              telephone: '+1-416-801-6746',
            },
            areaServed: [
              { '@type': 'AdministrativeArea', name: 'Ontario' },
              { '@type': 'AdministrativeArea', name: 'Greater Toronto Area' },
              { '@type': 'Country', name: 'Canada' },
            ],
            description:
              'Certified QuickBooks Online ProAdvisors providing complete cloud bookkeeping setup, data migration, automated bank feeds, payroll, and proactive accounting support for Ontario businesses.',
          }),
        }}
      />

      {/* 1. Subpage Hero Banner */}
      <div className="page-hero-banner">
        <div className="container">
          <div className="badge badge-gold" style={{ marginBottom: '1rem', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
            <ShieldCheck size={14} />
            <span>Certified QuickBooks Online ProAdvisor</span>
          </div>
          <h1>We’re Experts in QuickBooks Online!</h1>
          <p>
            All the powerful cloud tools you need to run, manage, and scale your Canadian enterprise. Experience seamless bank connectivity, automated bookkeeping, and proactive CPA guidance.
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
                <span style={{ color: '#1F2937', fontWeight: 600 }}>QuickBooks Online</span>
              </nav>

              {/* Intro Title & Overview */}
              <div style={{ marginBottom: '2.5rem' }}>
                <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#0F2942', marginBottom: '1rem', lineHeight: 1.25 }}>
                  Grow Your Business with Certified QuickBooks Online Expertise
                </h2>
                <p style={{ fontSize: '1.05rem', lineHeight: 1.7, color: '#4B5563', marginBottom: '1.25rem' }}>
                  At <strong>Puri &amp; Loggia LLP</strong>, we are proud <strong>Certified QuickBooks Online ProAdvisors</strong> helping entrepreneurs across Ontario streamline their accounting. QuickBooks Online (QBO) gives you complete visibility over cash flow, vendor bills, invoicing, and Canadian payroll from any device—anywhere, anytime.
                </p>
                <p style={{ fontSize: '1.05rem', lineHeight: 1.7, color: '#4B5563' }}>
                  Whether you are transitioning from QuickBooks Desktop, migrating away from manual spreadsheets, or seeking expert oversight of your current QBO file, our CPA firm configures your system according to strict Canadian accounting standards so your numbers are always accurate and tax-ready.
                </p>
              </div>

              {/* Video Tour Section */}
              <div 
                style={{ 
                  backgroundColor: '#F8FAFC', 
                  borderRadius: '16px', 
                  padding: '2rem', 
                  border: '1px solid #E2E8F0',
                  marginBottom: '3rem',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)'
                }}
              >
                <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: '#004AAD', fontWeight: 700, fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.25rem' }}>
                    <span>Software Tour</span>
                  </div>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0F2942', margin: 0 }}>
                    Watch How QuickBooks Online Powers Business Growth
                  </h3>
                </div>

                <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '12px', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}>
                  <iframe 
                    src="https://www.youtube.com/embed/K9IgH_VdmAI?rel=0&showinfo=0" 
                    title="QuickBooks Online Feature Tour"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
                  />
                </div>
              </div>

              {/* Core Features Grid */}
              <div style={{ marginBottom: '3rem' }}>
                <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                  <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#0F2942', marginBottom: '0.5rem' }}>
                    All the Tools You Need in One Unified Cloud Platform
                  </h3>
                  <p style={{ color: '#6B7280', fontSize: '0.95rem', maxWidth: '600px', margin: '0 auto' }}>
                    QuickBooks Online combines everyday bookkeeping with deep operational automation to keep your business running smoothly.
                  </p>
                </div>

                <div 
                  style={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
                    gap: '1.5rem' 
                  }}
                >
                  {QBO_FEATURES.map((feat, idx) => {
                    const IconComp = feat.icon;
                    return (
                      <div 
                        key={idx}
                        style={{
                          backgroundColor: '#FFFFFF',
                          border: '1px solid #E5E7EB',
                          borderRadius: '12px',
                          padding: '1.5rem',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '0.75rem',
                          transition: 'all 0.2s ease',
                          boxShadow: '0 2px 4px rgba(0,0,0,0.02)'
                        }}
                      >
                        <div 
                          style={{ 
                            width: '44px', 
                            height: '44px', 
                            borderRadius: '10px', 
                            backgroundColor: '#EFF6FF', 
                            color: '#004AAD',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontWeight: 700
                          }}
                        >
                          <IconComp size={22} />
                        </div>
                        <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0F2942', margin: 0 }}>
                          {feat.title}
                        </h4>
                        <p style={{ fontSize: '0.9rem', lineHeight: 1.6, color: '#4B5563', margin: 0, flexGrow: 1 }}>
                          {feat.desc}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* ProAdvisor Difference Callout */}
              <div 
                style={{ 
                  backgroundColor: '#0F2942', 
                  color: '#FFFFFF', 
                  borderRadius: '16px', 
                  padding: '2.5rem', 
                  marginBottom: '3rem',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <div style={{ position: 'relative', zIndex: 1 }}>
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backgroundColor: '#FCAC14', color: '#0F2942', padding: '0.3rem 0.75rem', borderRadius: '9999px', fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', marginBottom: '1rem' }}>
                    <ShieldCheck size={14} />
                    <span>The ProAdvisor Advantage</span>
                  </div>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '1rem' }}>
                    Why Work with a Certified QuickBooks ProAdvisor?
                  </h3>
                  <p style={{ color: '#D1D5DB', lineHeight: 1.7, fontSize: '0.975rem', marginBottom: '1.5rem' }}>
                    Setting up QuickBooks Online improperly can lead to duplicated revenue, unreconciled clearing accounts, and inaccurate tax filings. As Certified ProAdvisors, Mark Puri and Helen Loggia build your file correctly from day one:
                  </p>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                      <CheckCircle2 size={18} style={{ color: '#FCAC14', flexShrink: 0, marginTop: '2px' }} />
                      <span style={{ fontSize: '0.9rem', color: '#E5E7EB' }}>Customized Canadian Chart of Accounts aligned with your industry</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                      <CheckCircle2 size={18} style={{ color: '#FCAC14', flexShrink: 0, marginTop: '2px' }} />
                      <span style={{ fontSize: '0.9rem', color: '#E5E7EB' }}>Seamless Desktop-to-Online data migration without data loss</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                      <CheckCircle2 size={18} style={{ color: '#FCAC14', flexShrink: 0, marginTop: '2px' }} />
                      <span style={{ fontSize: '0.9rem', color: '#E5E7EB' }}>Correct HST/GST sales tax configuration and remittance schedules</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                      <CheckCircle2 size={18} style={{ color: '#FCAC14', flexShrink: 0, marginTop: '2px' }} />
                      <span style={{ fontSize: '0.9rem', color: '#E5E7EB' }}>Integration with point-of-sale, e-commerce, and inventory platforms</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Link to QuickBooks Resources Library */}
              <div 
                style={{ 
                  backgroundColor: '#EFF6FF', 
                  border: '1px solid #BFDBFE', 
                  borderRadius: '12px', 
                  padding: '1.75rem', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '1.25rem',
                  marginBottom: '3rem'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '10px', backgroundColor: '#004AAD', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <BookOpen size={24} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0F2942', margin: 0 }}>
                      QuickBooks Tutorials, Guides &amp; Best Practices
                    </h4>
                    <p style={{ fontSize: '0.875rem', color: '#4B5563', margin: 0 }}>
                      Browse our library of step-by-step guides on sales receipts, bank rules, billable expenses, and reconciliations.
                    </p>
                  </div>
                </div>
                <Link 
                  to="/quickbooks-resources" 
                  className="btn btn-primary"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', whiteSpace: 'nowrap' }}
                >
                  <span>Explore Resources</span>
                  <ArrowRight size={16} />
                </Link>
              </div>

              {/* Direct Partner Contact Box */}
              <div 
                style={{ 
                  backgroundColor: '#F9FAFB', 
                  border: '1px solid #E5E7EB', 
                  borderRadius: '16px', 
                  padding: '2rem',
                  textAlign: 'center'
                }}
              >
                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0F2942', marginBottom: '0.5rem' }}>
                  Interested in QuickBooks Online Solutions?
                </h3>
                <p style={{ color: '#4B5563', fontSize: '0.95rem', maxWidth: '580px', margin: '0 auto 1.5rem', lineHeight: 1.6 }}>
                  Connect directly with our partners to discuss file setup, cleanups, migrations, or ongoing bookkeeping and corporate tax support.
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
                  <Link 
                    to="/contact-us" 
                    className="btn btn-primary"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
                  >
                    <span>Send a Message</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default QuickBooksOnline;
