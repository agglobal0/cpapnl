import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle2, ArrowRight, ShieldCheck, ChevronDown, 
  ChevronUp, Phone, Calculator, FileCheck, AlertCircle, Award, Check
} from 'lucide-react';

export const Taxation: React.FC<{ onBookConsultation: (context?: string) => void }> = () => {
  useEffect(() => {
    document.title = 'Corporate Tax & Strategic Tax Planning Ontario | Puri & Loggia LLP';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Simplify your corporate tax obligations with Puri & Loggia LLP. T2 corporate returns, GST/HST filing, owner salary vs dividend planning, and CRA audit representation across Ontario.'
      );
    }
  }, []);

  // Accordion state matching the authentic live site's collapseBlock
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const ACCORDION_ITEMS = [
    {
      title: 'Financial Reporting and Analysis',
      content:
        'We understand the importance of clear and comprehensive financial statements for making informed business decisions. Our team prepares detailed financial reports that provide valuable insights into the financial health of your business. We take the time to explain these reports in a language you can understand, empowering you to make strategic decisions confidently.'
    },
    {
      title: 'Expert Advice and Support',
      content:
        'As entrepreneurs ourselves, we understand first-hand the challenges of running a small business. We strive to be more than just accountants or tax preparers—we are your trusted advisors. We are passionate about helping streamline your business operations, and we stay up to date with Canadian tax laws, CRA policies, and industry best practices to offer the most relevant advice and support.'
    },
    {
      title: 'Streamline Your Accounting and Tax Obligations Today',
      content:
        'Don’t let the complexities of accounting and tax management hinder your business growth. Partner with Puri & Loggia LLP to simplify your financial processes and ensure compliance with federal and provincial tax laws and regulations. Contact our senior partners today to discover how our tailored tax planning helps your business thrive.'
    }
  ];

  return (
    <div>
      {/* Comprehensive JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Corporate & Business Taxation Services',
            serviceType: 'Corporate Tax Preparation T2, GST/HST Filing, Tax Planning & CRA Compliance',
            provider: {
              '@type': 'AccountingService',
              name: 'Puri & Loggia LLP',
              url: 'https://cpapnl.com/taxation/',
              telephone: '+1-416-801-6746',
              address: {
                '@type': 'PostalAddress',
                addressRegion: 'Ontario',
                addressCountry: 'CA',
              },
            },
            areaServed: [
              { '@type': 'AdministrativeArea', name: 'Ontario' },
              { '@type': 'AdministrativeArea', name: 'Greater Toronto Area' },
              { '@type': 'Country', name: 'Canada' },
            ],
            description:
              'Proactive corporate income tax (T2) filing, owner salary vs dividend optimization, GST/HST compliance, and CRA dispute defense for Canadian corporations and business owners.',
          }),
        }}
      />

      {/* 1. Page Hero Banner */}
      <div className="page-hero-banner" style={{ padding: 'clamp(4rem, 6vw, 5.5rem) 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div
            style={{
              display: 'inline-block',
              fontSize: '12px',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              color: 'var(--gold-400, #FCAC14)',
              marginBottom: '0.85rem',
            }}
          >
            Corporate T2 &bull; Tax Planning &bull; CRA Compliance
          </div>
          <h1
            style={{
              fontSize: 'clamp(2.3rem, 4.2vw, 3.4rem)',
              fontWeight: 800,
              marginBottom: '1.25rem',
              letterSpacing: '-0.02em',
              lineHeight: 1.2,
              color: '#FFFFFF',
            }}
          >
            Corporate &amp; Business Taxation
          </h1>
          <p
            style={{
              maxWidth: '820px',
              margin: '0 auto',
              fontSize: 'clamp(1.05rem, 1.8vw, 1.2rem)',
              lineHeight: 1.65,
              color: 'rgba(255, 255, 255, 0.92)',
            }}
          >
            Clear, comprehensive tax services tailored to protect your bottom line. We speak the language of GST/HST, corporate T2 tax, and proactive CRA tax planning.
          </p>
        </div>
      </div>

      {/* 2. Main Content Section */}
      <section className="section" style={{ backgroundColor: '#FFFFFF', padding: '5rem 0' }}>
        <div className="container" style={{ maxWidth: '960px' }}>
          <article className="service-main-content">
            {/* Lead Section: Simplify Your Taxation */}
            <div style={{ marginBottom: '3.5rem' }}>
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
                Proactive &bull; Compliant &bull; Penalty-Free
              </div>
              <h2 style={{ fontSize: 'clamp(1.9rem, 3.2vw, 2.5rem)', color: 'var(--navy-900)', fontWeight: 800, marginBottom: '1.25rem', letterSpacing: '-0.02em', lineHeight: 1.25 }}>
                Simplify Your Taxation
              </h2>

              <h3 style={{ fontSize: '22px', color: 'var(--navy-900)', fontWeight: 800, marginTop: '1.5rem', marginBottom: '0.85rem' }}>
                Corporate Tax
              </h3>
              
              <p style={{ fontSize: '17px', color: 'var(--navy-800)', lineHeight: 1.75, marginBottom: '1.25rem' }}>
                Running a business comes with a unique set of challenges, especially when it comes to managing your tax obligations. At <strong>Puri &amp; Loggia LLP</strong>, we understand the pain, stress, and confusion that tax compliance can bring to small business owners.
              </p>

              <p style={{ fontSize: '16px', color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: '2rem' }}>
                The good news is, <strong>we love to do the stuff you hate!</strong> Our goal is to remove your stress and confusion by providing clear, comprehensive tax services tailored to meet your specific business needs.
              </p>

              {/* Specifics Box from Authentic Site */}
              <div 
                style={{ 
                  backgroundColor: '#F8FAFC', 
                  border: '1px solid var(--border-light)', 
                  borderTop: '4px solid #FCAC14',
                  borderRadius: '8px', 
                  padding: '2rem', 
                  marginBottom: '3rem',
                  boxShadow: 'var(--shadow-sm)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                  <Calculator size={22} color="#D97706" />
                  <h3 style={{ fontSize: '20px', color: 'var(--navy-900)', fontWeight: 800, margin: 0 }}>
                    Specifics We Handle for Your Business
                  </h3>
                </div>
                
                <p style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                  We handle the critical filings and tax operations that keep your corporation penalty-free:
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
                  <div style={{ backgroundColor: '#FFFFFF', padding: '1.25rem', borderRadius: '6px', border: '1px solid var(--border-light)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#D97706', fontWeight: 800, fontSize: '15px', marginBottom: '0.35rem' }}>
                      <Check size={18} />
                      <span>Smart Automated Payroll</span>
                    </div>
                    <p style={{ fontSize: '13.5px', color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0 }}>
                      Payroll setup and automated scheduling with direct deposits, source deductions, and monthly PD7A remittances.
                    </p>
                  </div>

                  <div style={{ backgroundColor: '#FFFFFF', padding: '1.25rem', borderRadius: '6px', border: '1px solid var(--border-light)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#D97706', fontWeight: 800, fontSize: '15px', marginBottom: '0.35rem' }}>
                      <Check size={18} />
                      <span>Annual Taxation Slips</span>
                    </div>
                    <p style={{ fontSize: '13.5px', color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0 }}>
                      Timely preparation and electronic CRA filing of T4, T4A, T5 (dividends), T5018 (subcontractors), and ROEs.
                    </p>
                  </div>

                  <div style={{ backgroundColor: '#FFFFFF', padding: '1.25rem', borderRadius: '6px', border: '1px solid var(--border-light)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#D97706', fontWeight: 800, fontSize: '15px', marginBottom: '0.35rem' }}>
                      <Check size={18} />
                      <span>GST/HST Return Compliance</span>
                    </div>
                    <p style={{ fontSize: '13.5px', color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0 }}>
                      Accurate sales tax calculations, maximizing eligible Input Tax Credits (ITCs), and timely quarterly/annual filing.
                    </p>
                  </div>
                </div>

                <div style={{ padding: '0.85rem 1.25rem', backgroundColor: 'rgba(252, 172, 20, 0.12)', borderRadius: '6px', borderLeft: '3px solid #FCAC14', color: 'var(--navy-900)', fontWeight: 700, fontSize: '14.5px' }}>
                  All this lets you focus on what truly matters: <strong>the BIG PICTURE of growing your business</strong>.
                </div>
              </div>

              {/* Tax Rules are Constantly Changing */}
              <div style={{ marginBottom: '3rem' }}>
                <h3 style={{ fontSize: '22px', color: 'var(--navy-900)', fontWeight: 800, marginBottom: '0.85rem' }}>
                  Tax Rules are Constantly Changing
                </h3>
                <p style={{ fontSize: '16px', color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: '1.25rem' }}>
                  Navigating through the labyrinth of Canadian tax laws, provincial guidelines, and Canada Revenue Agency regulations can be overwhelming, particularly for entrepreneurs who are busy running day-to-day operations.
                </p>
                <p style={{ fontSize: '16px', color: 'var(--text-secondary)', lineHeight: 1.75, margin: 0 }}>
                  Keeping up with constantly changing tax rules can leave you feeling confused and uncertain about how to accurately fulfill your obligations without overpaying. Let us take that burden off your shoulders! <strong>We speak the language of GST/HST and corporate tax.</strong>
                </p>
              </div>

              {/* Maximizing Profits and Tax Planning */}
              <div style={{ marginBottom: '3.5rem' }}>
                <h3 style={{ fontSize: '22px', color: 'var(--navy-900)', fontWeight: 800, marginBottom: '0.85rem' }}>
                  Maximizing Profits and Tax Planning
                </h3>
                <p style={{ fontSize: '16px', color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: '1.25rem' }}>
                  Small businesses often struggle to optimize their tax planning strategies to maximize profits. Lack of expertise and understanding in corporate tax planning can result in missed opportunities for deductions and credits, leading to increased tax liability and reduced profitability.
                </p>
                <p style={{ fontSize: '16px', color: 'var(--text-secondary)', lineHeight: 1.75, margin: 0 }}>
                  Tax planning is a smart way to ensure you get every deduction, credit, and exemption available to you under the Canadian Income Tax Act. The <strong>Puri &amp; Loggia</strong> team will work with you to prepare a proactive tax plan that aligns with your financial goals, saving you the maximum amount of tax possible while providing you with a clear outline of obligations and deadlines. This keeps your business on track and avoids penalties and interest.
                </p>
              </div>
            </div>

            {/* How We Help Section with Authentic Accordions */}
            <div style={{ marginBottom: '4rem' }}>
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
                Personal Attention &bull; Expert Guidance
              </div>
              <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.35rem)', color: 'var(--navy-900)', fontWeight: 800, marginBottom: '1rem', letterSpacing: '-0.02em' }}>
                How We Help
              </h2>
              <p style={{ fontSize: '16.5px', color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: '2rem' }}>
                At <strong>Puri &amp; Loggia LLP</strong>, our team of experienced professionals is dedicated to providing personal attention and expert guidance to integrate your operational accounting and tax planning requirements seamlessly:
              </p>

              {/* Accordions */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2.5rem' }}>
                {ACCORDION_ITEMS.map((item, idx) => (
                  <div 
                    key={idx}
                    style={{
                      border: '1px solid var(--border-light)',
                      borderRadius: '8px',
                      overflow: 'hidden',
                      backgroundColor: '#FFFFFF',
                      boxShadow: 'var(--shadow-sm)'
                    }}
                  >
                    <button
                      onClick={() => toggleAccordion(idx)}
                      style={{
                        width: '100%',
                        padding: '1.25rem 1.5rem',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        backgroundColor: openAccordion === idx ? 'var(--navy-900)' : '#F8FAFC',
                        color: openAccordion === idx ? '#FFFFFF' : 'var(--navy-900)',
                        border: 'none',
                        cursor: 'pointer',
                        textAlign: 'left',
                        fontWeight: 700,
                        fontSize: '16px',
                        transition: 'all 0.15s ease'
                      }}
                    >
                      <span>{item.title}</span>
                      {openAccordion === idx ? (
                        <ChevronUp size={20} color="#FCAC14" />
                      ) : (
                        <ChevronDown size={20} color="var(--navy-800)" />
                      )}
                    </button>

                    {openAccordion === idx && (
                      <div style={{ padding: '1.5rem', backgroundColor: '#FFFFFF', borderTop: '1px solid var(--border-light)' }}>
                        <p style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>
                          {item.content}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Direct Partner Action Box */}
            <div 
              style={{ 
                padding: '3rem 2.5rem', 
                backgroundColor: '#0F213A', 
                borderRadius: '8px', 
                color: '#FFFFFF',
                boxShadow: '0 12px 30px rgba(15, 33, 58, 0.25)',
                textAlign: 'center'
              }}
            >
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                <ShieldCheck size={20} color="#FCAC14" />
                <span style={{ color: '#FDE68A', fontSize: '12.5px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  Licensed Public Accounting Practice
                </span>
              </div>

              <h3 style={{ fontSize: 'clamp(1.7rem, 2.8vw, 2.2rem)', color: '#FFFFFF', fontWeight: 800, margin: '0 0 0.85rem', letterSpacing: '-0.01em' }}>
                Streamline Your Corporate Tax Obligations Today
              </h3>
              
              <p style={{ fontSize: '16px', color: 'rgba(255, 255, 255, 0.9)', lineHeight: 1.65, maxWidth: '680px', margin: '0 auto 2rem' }}>
                Don&rsquo;t let the complexities of corporate tax and CRA compliance hold back your growth. Speak directly to Mark Puri and Helen Loggia to review your tax position and protect your wealth.
              </p>

              <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '2rem', alignItems: 'center', marginBottom: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '15px' }}>
                  <Phone size={16} color="#FCAC14" />
                  <span style={{ color: 'rgba(255,255,255,0.7)' }}>Mark Puri, CPA:</span>
                  <a href="tel:416-801-6746" style={{ color: '#FDE68A', fontWeight: 700, textDecoration: 'none' }}>
                    +1 416 801 6746
                  </a>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '15px' }}>
                  <Phone size={16} color="#FCAC14" />
                  <span style={{ color: 'rgba(255,255,255,0.7)' }}>Helen Loggia, CPA, MBA:</span>
                  <a href="tel:416-805-1427" style={{ color: '#FDE68A', fontWeight: 700, textDecoration: 'none' }}>
                    +1 416 805 1427
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Link 
                  to="/contact" 
                  className="btn btn-primary btn-lg"
                  style={{ 
                    backgroundColor: '#FCAC14', 
                    borderColor: '#FCAC14', 
                    color: '#0F294A', 
                    fontWeight: 800,
                    padding: '0.9rem 2.25rem',
                    boxShadow: '0 4px 14px rgba(252, 172, 20, 0.4)',
                    gap: '0.5rem'
                  }}
                >
                  <span>Contact Our Office Today</span>
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};
