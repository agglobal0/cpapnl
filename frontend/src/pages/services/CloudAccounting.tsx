import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Cloud, CheckCircle2, ShieldCheck, ArrowRight, Phone, 
  Smartphone, Clock, BarChart3, Lock, Zap, Users, RefreshCw
} from 'lucide-react';

export const CloudAccounting: React.FC<{ onBookConsultation?: (context?: string) => void }> = () => {
  useEffect(() => {
    document.title = 'Cloud Accounting Software & Setup Ontario | Puri & Loggia LLP';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Modernize your business finances with automated cloud accounting in Xero and QuickBooks Online. Real-time bank feeds, touchless receipt capture, and CPA support.'
      );
    }
  }, []);

  const BENEFITS = [
    {
      icon: Clock,
      title: 'Saves You Valuable Time',
      desc: 'Automatic bank feeds, simple dashboards, and zero manual data entry. Stop chasing paper receipts or messy spreadsheets—cloud systems organize transactions automatically.'
    },
    {
      icon: Smartphone,
      title: 'Run Your Business on the Go',
      desc: 'Access your financial numbers, customer invoices, and management reports from anywhere, anytime, on your smartphone, tablet, Mac, or PC.'
    },
    {
      icon: BarChart3,
      title: 'Real-Time Financial Data',
      desc: 'View live cash balances and operating margins instantly. Have the accurate metrics on hand to make quick, confident business decisions whenever opportunity knocks.'
    },
    {
      icon: Zap,
      title: 'Accurate Picture of Your Business',
      desc: 'Making sound decisions requires timely information. We streamline your reporting so you get clean, audit-ready balance sheets and P&Ls by the 15th of every month.'
    },
    {
      icon: RefreshCw,
      title: 'Improve Cash Flow & Get Paid Faster',
      desc: 'Send professional invoices directly from your phone. With online payment buttons and automated payment reminders, clients pay you up to twice as fast.'
    },
    {
      icon: Users,
      title: 'Work Collaboratively with Your CPA',
      desc: 'No more emailing heavy desktop backup files. We access your cloud ledger simultaneously to provide timely tax advice, reconciliations, and strategic adjustments.'
    },
    {
      icon: Cloud,
      title: 'Go 100% Paperless & Streamline Operations',
      desc: 'Capture receipts with your camera and file vendor bills digitally. Going paperless keeps every expense receipt matched and CRA audit-ready for 7 years.'
    },
    {
      icon: Lock,
      title: 'Bank-Grade Cloud Security',
      desc: 'Your data is protected by multi-layered bank-grade encryption and automated cloud backups. Even if a laptop is lost or damaged, your books remain completely secure.'
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
            name: 'Cloud Accounting Solutions',
            serviceType: 'Cloud Accounting Setup, Migration & Automation',
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
              'Expert cloud accounting software selection, setup, and integration in Xero and QuickBooks Online for Canadian entrepreneurs.',
          }),
        }}
      />

      {/* 1. Subpage Hero Banner */}
      <div className="page-hero-banner">
        <div className="container">
          <div className="badge badge-gold" style={{ marginBottom: '1rem', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
            <ShieldCheck size={14} />
            <span>Certified Cloud Accounting Practice</span>
          </div>
          <h1>Cloud Accounting</h1>
          <p>
            Cloud accounting is designed to make your life easier. We are experts in multiple cloud platforms and business apps, helping you choose and automate the right system for your company.
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
                Modern Financial Infrastructure
              </div>
              <h2 style={{ fontSize: '30px', color: 'var(--navy-900)', fontWeight: 800, marginBottom: '1.25rem', letterSpacing: '-0.02em', lineHeight: 1.25 }}>
                Cloud Accounting is Designed to Make Your Life Easier
              </h2>
              
              <p style={{ fontSize: '17px', color: 'var(--navy-800)', lineHeight: 1.75, marginBottom: '1.25rem' }}>
                Managing business finances should never be an overwhelming maze of paperwork, lost receipts, and disconnected computer files. At <strong>Puri &amp; Loggia LLP</strong>, we help Canadian entrepreneurs transition away from legacy desktop software to seamless cloud systems that automate daily administration.
              </p>

              <p style={{ fontSize: '16px', color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: '2.5rem' }}>
                Whether you run an established enterprise or a fast-growing startup, we select, configure, and manage cloud accounting platforms tailored to your industry. You get clear numbers, instant invoicing, and total peace of mind.
              </p>

              {/* 8 Benefit Cards Grid */}
              <h3 style={{ fontSize: '24px', color: 'var(--navy-900)', fontWeight: 800, marginBottom: '1.5rem', letterSpacing: '-0.01em' }}>
                Benefits of Cloud Accounting Software
              </h3>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '3.5rem' }}>
                {BENEFITS.map((item, idx) => {
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
                        <div style={{ width: '42px', height: '42px', borderRadius: '50%', backgroundColor: 'rgba(252, 172, 20, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#D97706', marginBottom: '1rem' }}>
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

              {/* Platform Spotlight: Xero & QuickBooks */}
              <h3 style={{ fontSize: '24px', color: 'var(--navy-900)', fontWeight: 800, marginBottom: '1.25rem', letterSpacing: '-0.01em' }}>
                Explore Our Certified Cloud Accounting Platforms
              </h3>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
                {/* Xero Box */}
                <div 
                  style={{ 
                    padding: '2rem', 
                    borderRadius: '8px', 
                    border: '1px solid var(--border-light)', 
                    borderTop: '4px solid #13B5EA',
                    backgroundColor: '#FFFFFF',
                    boxShadow: 'var(--shadow-sm)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                  }}
                >
                  <div>
                    <span className="badge badge-gold" style={{ fontSize: '11px', marginBottom: '0.75rem' }}>
                      Certified Silver Champion Partner
                    </span>
                    <h4 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--navy-900)', marginBottom: '0.5rem' }}>
                      Xero Cloud Accounting
                    </h4>
                    <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                      Beautiful online accounting software designed for collaboration. Automatic bank feeds, touchless receipt scanning, and seamless integration with over 1,000 ecosystem apps.
                    </p>
                  </div>
                  <div>
                    <Link to="/xero" className="btn btn-secondary btn-sm" style={{ width: '100%', justifyContent: 'center', fontWeight: 700 }}>
                      <span>Learn About Xero</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>

                {/* QuickBooks Online Box */}
                <div 
                  style={{ 
                    padding: '2rem', 
                    borderRadius: '8px', 
                    border: '1px solid var(--border-light)', 
                    borderTop: '4px solid #2CA01C',
                    backgroundColor: '#FFFFFF',
                    boxShadow: 'var(--shadow-sm)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                  }}
                >
                  <div>
                    <span className="badge badge-gold" style={{ fontSize: '11px', marginBottom: '0.75rem' }}>
                      Certified Advanced ProAdvisor
                    </span>
                    <h4 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--navy-900)', marginBottom: '0.5rem' }}>
                      QuickBooks Online
                    </h4>
                    <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                      All the features you need to grow. Manage inventory, automate expense tracking, run Canadian payroll, and access comprehensive financial reporting from any device.
                    </p>
                  </div>
                  <div>
                    <Link to="/quickbooks-online" className="btn btn-secondary btn-sm" style={{ width: '100%', justifyContent: 'center', fontWeight: 700 }}>
                      <span>Learn About QuickBooks</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
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
                    Seamless Cloud Migration
                  </span>
                </div>

                <h3 style={{ fontSize: '22px', color: '#FFFFFF', fontWeight: 800, margin: '0 0 0.65rem' }}>
                  Ready to Migrate Your Books to the Cloud?
                </h3>
                
                <p style={{ fontSize: '15px', color: 'rgba(255, 255, 255, 0.88)', lineHeight: 1.65, margin: '0 0 1.5rem' }}>
                  Speak directly with our certified cloud accounting partners to migrate your historical data, set up bank rules, and train your staff.
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
                    <span>Contact Cloud Specialists</span>
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
