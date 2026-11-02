import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, ArrowRight, CheckCircle2, Phone, 
  ExternalLink, Layers, Users, CreditCard, RefreshCw, BarChart2, Smartphone, BookOpen
} from 'lucide-react';

export const AboutXero: React.FC = () => {
  useEffect(() => {
    document.title = 'Xero Certified Accountants & Setup Ontario | Puri & Loggia LLP';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Certified Xero Silver Champion Partners in Ontario. Setup, bank feed reconciliation, app integrations, and real-time CPA advisory for Canadian businesses.'
      );
    }
  }, []);

  const XERO_FEATURES = [
    {
      icon: Users,
      title: 'A Better Way to Work — Together',
      desc: 'Share live access to your business numbers with our CPA team. Everyone stays on the same page, allowing us to offer real-time tax planning and advisory without emailing spreadsheets.'
    },
    {
      icon: Layers,
      title: 'Connection to 1,000+ Business Apps',
      desc: 'Xero connects seamlessly with over 1,000 specialized applications including Hubdoc, Dext, Stripe, Shopify, Plooto, and Wagepoint, building an automated financial back-office.'
    },
    {
      icon: CreditCard,
      title: 'Connect with Your Customers & Get Paid Faster',
      desc: 'Create professional, branded invoices and send them online with Stripe and credit card payment options. Automated invoice reminders ensure you get paid up to twice as fast.'
    },
    {
      icon: RefreshCw,
      title: 'Connect Your Canadian Bank Accounts',
      desc: 'Automated bank feeds import and categorize daily transactions from RBC, TD, BMO, Scotiabank, CIBC, and credit cards. Simply review and click OK to reconcile in seconds.'
    },
    {
      icon: BarChart2,
      title: 'Everything You Need to Scale',
      desc: 'From Canadian payroll and expense claims to fixed asset tracking, budgets, and executive P&L reporting—all beautifully presented whenever and wherever you need it.'
    },
    {
      icon: Smartphone,
      title: 'A Pleasure Doing Business',
      desc: 'Log in securely anytime on Mac, Windows, iPhone, or Android. The interface is clean, modern, and intuitive—giving you clarity over your enterprise with zero accounting headache.'
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
            name: 'Xero Cloud Accounting & Advisory Services',
            serviceType: 'Xero Setup, Migration, Integration & Support',
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
              'Certified Xero Silver Champion Partners providing cloud bookkeeping setup, data migration, and proactive accounting support for Ontario businesses.',
          }),
        }}
      />

      {/* 1. Subpage Hero Banner */}
      <div className="page-hero-banner">
        <div className="container">
          <div className="badge badge-gold" style={{ marginBottom: '1rem', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
            <ShieldCheck size={14} />
            <span>Xero Certified Silver Champion Partner</span>
          </div>
          <h1>We’re Experts in Xero!</h1>
          <p>
            Xero is online accounting software that’s easy to love. Run your Canadian business smoothly, collaborate with your CPA in real time, and gain absolute clarity over your cash flow.
          </p>
        </div>
      </div>

      {/* 2. Main Content Layout */}
      <section className="section" style={{ backgroundColor: '#FFFFFF', padding: '3.5rem 0 5rem' }}>
        <div className="container" style={{ maxWidth: '960px' }}>
          <article className="service-main-content">
              <div 
                style={{
                  fontSize: '12px',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: 'var(--gold-600)',
                  marginBottom: '0.5rem'
                }}
              >
                Certified Cloud General Ledger
              </div>
              <h2 style={{ fontSize: '30px', color: 'var(--navy-900)', fontWeight: 800, marginBottom: '1.25rem', letterSpacing: '-0.02em', lineHeight: 1.25 }}>
                Online Accounting Software That’s Easy to Love
              </h2>
              
              <p style={{ fontSize: '17px', color: 'var(--navy-800)', lineHeight: 1.75, marginBottom: '1.25rem' }}>
                At <strong>Puri &amp; Loggia LLP</strong>, we are proud to be certified Xero advisors. We help Ontario and Canadian business owners move away from clunky desktop systems into a fast, beautiful, and secure cloud platform.
              </p>

              <p style={{ fontSize: '16px', color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: '2.5rem' }}>
                With Xero, your accounting is no longer a stressful chore at the end of the year. Your bank transactions feed in daily, receipts are captured via smartphone, and you always have an up-to-date picture of your profitability.
              </p>

              {/* Video Showcase Card */}
              <div 
                style={{
                  backgroundColor: '#0F213A',
                  borderRadius: '8px',
                  padding: '2rem',
                  color: '#FFFFFF',
                  marginBottom: '3.5rem',
                  boxShadow: 'var(--shadow-card)'
                }}
              >
                <div style={{ maxWidth: '640px', margin: '0 auto', textAlign: 'center' }}>
                  <div style={{ display: 'inline-block', backgroundColor: 'rgba(19, 181, 234, 0.2)', color: '#38BDF8', padding: '0.25rem 0.75rem', borderRadius: '4px', fontSize: '12px', fontWeight: 800, marginBottom: '0.75rem' }}>
                    XERO TOUR
                  </div>
                  <h3 style={{ fontSize: '22px', fontWeight: 800, color: '#FFFFFF', marginBottom: '0.75rem' }}>
                    Experience How Xero Transforms Your Back-Office
                  </h3>
                  <p style={{ fontSize: '14.5px', color: 'rgba(255, 255, 255, 0.85)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                    Watch how Canadian small businesses use Xero to automate invoicing, reconcile bank accounts in one click, and access real-time financial dashboards.
                  </p>
                  <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.2)' }}>
                    <iframe 
                      src="https://www.youtube.com/embed/6sjDwyOLNNY" 
                      title="Why Xero for Business"
                      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
              </div>

              {/* 6 Feature Pillars */}
              <h3 style={{ fontSize: '24px', color: 'var(--navy-900)', fontWeight: 800, marginBottom: '1.5rem', letterSpacing: '-0.01em' }}>
                Why Growing Canadian Businesses Choose Xero
              </h3>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '3.5rem' }}>
                {XERO_FEATURES.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div 
                      key={idx}
                      style={{
                        padding: '1.5rem',
                        backgroundColor: '#F8FAFC',
                        borderRadius: '8px',
                        border: '1px solid var(--border-light)',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between'
                      }}
                    >
                      <div>
                        <div style={{ width: '42px', height: '42px', borderRadius: '50%', backgroundColor: 'rgba(19, 181, 234, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0284C7', marginBottom: '1rem' }}>
                          <Icon size={22} />
                        </div>
                        <h4 style={{ fontSize: '17px', fontWeight: 700, color: 'var(--navy-900)', marginBottom: '0.5rem', lineHeight: 1.35 }}>
                          {item.title}
                        </h4>
                        <p style={{ fontSize: '13.5px', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Xero Resources Banner */}
              <div 
                style={{ 
                  backgroundColor: '#F0F9FF', 
                  border: '1px solid #BAE6FD', 
                  borderRadius: '8px', 
                  padding: '2rem', 
                  marginBottom: '3rem',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  gap: '1.5rem'
                }}
              >
                <div style={{ maxWidth: '520px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#0284C7', fontWeight: 800, fontSize: '12.5px', textTransform: 'uppercase', marginBottom: '0.35rem' }}>
                    <BookOpen size={16} />
                    <span>Free Educational Library</span>
                  </div>
                  <h4 style={{ fontSize: '20px', fontWeight: 800, color: '#0F213A', margin: '0 0 0.5rem' }}>
                    Explore Our Xero Training &amp; Best Practices
                  </h4>
                  <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                    Step-by-step guides on invoice branding, bank rules, chart of accounts customization, and reading your balance sheet like a pro.
                  </p>
                </div>
                <div>
                  <Link to="/xero-resources" className="btn btn-primary" style={{ backgroundColor: '#FCAC14', borderColor: '#FCAC14', color: '#0F294A', fontWeight: 800 }}>
                    <span>Browse Xero Resources</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
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
                    Certified Xero Migration &amp; Setup
                  </span>
                </div>

                <h3 style={{ fontSize: '22px', color: '#FFFFFF', fontWeight: 800, margin: '0 0 0.65rem' }}>
                  Interested in Moving Your Business to Xero?
                </h3>
                
                <p style={{ fontSize: '15px', color: 'rgba(255, 255, 255, 0.88)', lineHeight: 1.65, margin: '0 0 1.5rem' }}>
                  Connect with our certified Xero partners today to discuss your setup, migrate historical data from QuickBooks desktop or Sage, and automate your back-office.
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
