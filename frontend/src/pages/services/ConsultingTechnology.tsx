import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle2, ArrowRight, ShieldCheck, Compass, 
  Cpu, Phone, TrendingUp, Layers, Users, Sparkles, Building2, Check, RefreshCw
} from 'lucide-react';

export const ConsultingTechnology: React.FC<{ onBookConsultation: (context?: string) => void }> = () => {
  useEffect(() => {
    document.title = 'Business Consulting & Accounting Technology Services Ontario | Puri & Loggia LLP';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Simplify your business strategy and accounting technology with Puri & Loggia LLP. Financial forecasting, process optimization, Xero & QBO software implementation, and systems integration across Ontario.'
      );
    }
  }, []);

  return (
    <div>
      {/* Comprehensive JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Business Consulting and Accounting Technology Advisory',
            serviceType: 'Business Strategy, Financial Modeling & Cloud Technology Integration',
            provider: {
              '@type': 'AccountingService',
              name: 'Puri & Loggia LLP',
              url: 'https://cpapnl.com/consulting-technology/',
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
              'Strategic financial planning, cash flow forecasting, accounting software selection (Xero & QuickBooks Online), data migration, and workflow automation for Canadian businesses.',
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
            Business Consulting &bull; Cloud Software &bull; Systems Integration
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
            Consulting &amp; Technology Advisory
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
            Strategic financial guidance and modern accounting technology to help Canadian businesses overcome operational friction, optimize cash flow, and scale with confidence.
          </p>
        </div>
      </div>

      {/* 2. Main Content Section */}
      <section className="section" style={{ backgroundColor: '#FFFFFF', padding: '5rem 0' }}>
        <div className="container" style={{ maxWidth: '960px' }}>
          <article className="service-main-content">
            {/* Lead Section: Simplify Your Strategy */}
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
                Strategy &bull; Technology &bull; Scalable Growth
              </div>
              <h2 style={{ fontSize: 'clamp(1.9rem, 3.2vw, 2.5rem)', color: 'var(--navy-900)', fontWeight: 800, marginBottom: '1.25rem', letterSpacing: '-0.02em', lineHeight: 1.25 }}>
                Simplify Your Strategy
              </h2>
              
              <p style={{ fontSize: '17px', color: 'var(--navy-800)', lineHeight: 1.75, marginBottom: '1.25rem' }}>
                As an entrepreneur, you understand the challenges of using accounting and business software effectively. From complex initial setups to software compatibility issues, navigating the ever-changing technology landscape can quickly become overwhelming.
              </p>

              <p style={{ fontSize: '16px', color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: '2.5rem' }}>
                The <strong>Puri &amp; Loggia LLP</strong> team specializes in providing expert guidance and practical support to help businesses like yours overcome pain points and harness the full power of technology for sustainable, long-term growth.
              </p>
            </div>

            {/* Consulting Section */}
            <div style={{ marginBottom: '4rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '1rem' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '50%', backgroundColor: 'rgba(252, 172, 20, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#D97706' }}>
                  <Compass size={22} />
                </div>
                <div>
                  <h3 style={{ fontSize: '24px', color: 'var(--navy-900)', fontWeight: 800, margin: 0, letterSpacing: '-0.01em' }}>
                    Consulting
                  </h3>
                  <div style={{ fontSize: '13.5px', color: 'var(--text-secondary)' }}>Strategic planning, cash forecasting, and operational advisory</div>
                </div>
              </div>

              <p style={{ fontSize: '16px', color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: '1.75rem' }}>
                Whether you are just starting out or looking to expand an established operation, we offer tailored solutions that address your specific commercial challenges. With deep executive understanding across healthcare, tech, manufacturing, and real estate, our consulting services cover:
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.15rem', marginBottom: '2.5rem' }}>
                <div style={{ display: 'flex', gap: '1.15rem', alignItems: 'flex-start', padding: '1.35rem', backgroundColor: '#F8FAFC', borderRadius: '8px', border: '1px solid var(--border-light)' }}>
                  <CheckCircle2 size={20} color="#D97706" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong style={{ fontSize: '15.5px', color: 'var(--navy-900)', display: 'block', marginBottom: '0.3rem' }}>
                      Business Planning &amp; Strategy Development:
                    </strong>
                    <span style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                      We help you create a concrete roadmap for success by developing actionable business plans, commercial pricing models, and sustainable expansion strategies.
                    </span>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1.15rem', alignItems: 'flex-start', padding: '1.35rem', backgroundColor: '#F8FAFC', borderRadius: '8px', border: '1px solid var(--border-light)' }}>
                  <CheckCircle2 size={20} color="#D97706" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong style={{ fontSize: '15.5px', color: 'var(--navy-900)', display: 'block', marginBottom: '0.3rem' }}>
                      Financial Analysis &amp; Forecasting:
                    </strong>
                    <span style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                      Our experts analyze your historical financial data to provide valuable insights, dynamic 13-week cash flow forecasts, and KPI tracking for informed decision-making.
                    </span>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1.15rem', alignItems: 'flex-start', padding: '1.35rem', backgroundColor: '#F8FAFC', borderRadius: '8px', border: '1px solid var(--border-light)' }}>
                  <CheckCircle2 size={20} color="#D97706" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong style={{ fontSize: '15.5px', color: 'var(--navy-900)', display: 'block', marginBottom: '0.3rem' }}>
                      Process Optimization &amp; Efficiency Improvement:
                    </strong>
                    <span style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                      We identify opportunities to eliminate overhead waste, streamline your operations, optimize internal workflows, and expand gross operating margins.
                    </span>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1.15rem', alignItems: 'flex-start', padding: '1.35rem', backgroundColor: '#F8FAFC', borderRadius: '8px', border: '1px solid var(--border-light)' }}>
                  <CheckCircle2 size={20} color="#D97706" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong style={{ fontSize: '15.5px', color: 'var(--navy-900)', display: 'block', marginBottom: '0.3rem' }}>
                      Risk Management &amp; Compliance:
                    </strong>
                    <span style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                      We assist you in identifying and mitigating potential financial and operational risks while ensuring full regulatory and statutory compliance across Canada.
                    </span>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1.15rem', alignItems: 'flex-start', padding: '1.35rem', backgroundColor: '#F8FAFC', borderRadius: '8px', border: '1px solid var(--border-light)' }}>
                  <CheckCircle2 size={20} color="#D97706" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong style={{ fontSize: '15.5px', color: 'var(--navy-900)', display: 'block', marginBottom: '0.3rem' }}>
                      Team Training:
                    </strong>
                    <span style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                      We have completed dozens of complex software and financial system integrations and will train your team thoroughly to guarantee a seamless transition.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Technology Section */}
            <div style={{ marginBottom: '4rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '1rem' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '50%', backgroundColor: 'rgba(252, 172, 20, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#D97706' }}>
                  <Cpu size={22} />
                </div>
                <div>
                  <h3 style={{ fontSize: '24px', color: 'var(--navy-900)', fontWeight: 800, margin: 0, letterSpacing: '-0.01em' }}>
                    Technology
                  </h3>
                  <div style={{ fontSize: '13.5px', color: 'var(--text-secondary)' }}>Cloud software selection, migration, and automation</div>
                </div>
              </div>

              <p style={{ fontSize: '16px', color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: '1.75rem' }}>
                Implementing and utilizing accounting software correctly can be difficult without experienced guidance. Our team specializes in assisting businesses with modern accounting technology:
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '2.5rem' }}>
                <div style={{ backgroundColor: '#F8FAFC', padding: '1.75rem', borderRadius: '8px', border: '1px solid var(--border-light)' }}>
                  <h4 style={{ fontSize: '16.5px', color: 'var(--navy-900)', fontWeight: 800, marginBottom: '0.5rem' }}>
                    Software Selection &amp; Implementation
                  </h4>
                  <p style={{ fontSize: '13.5px', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                    We help you choose the right accounting software (Xero or QuickBooks Online) that matches your business model, scale, and goals, ensuring smooth implementation from day one.
                  </p>
                </div>

                <div style={{ backgroundColor: '#F8FAFC', padding: '1.75rem', borderRadius: '8px', border: '1px solid var(--border-light)' }}>
                  <h4 style={{ fontSize: '16.5px', color: 'var(--navy-900)', fontWeight: 800, marginBottom: '0.5rem' }}>
                    Data Migration &amp; Integration
                  </h4>
                  <p style={{ fontSize: '13.5px', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                    Our specialists ensure a seamless transition by cleanly migrating historical financial data from legacy desktop software and integrating directly with your bank, POS, and CRM systems.
                  </p>
                </div>

                <div style={{ backgroundColor: '#F8FAFC', padding: '1.75rem', borderRadius: '8px', border: '1px solid var(--border-light)' }}>
                  <h4 style={{ fontSize: '16.5px', color: 'var(--navy-900)', fontWeight: 800, marginBottom: '0.5rem' }}>
                    Customization &amp; Workflow Automation
                  </h4>
                  <p style={{ fontSize: '13.5px', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                    We tailor software architectures to meet your specific industry requirements and automate repetitive invoicing and reconciliation tasks, saving hours each week.
                  </p>
                </div>

                <div style={{ backgroundColor: '#F8FAFC', padding: '1.75rem', borderRadius: '8px', border: '1px solid var(--border-light)' }}>
                  <h4 style={{ fontSize: '16.5px', color: 'var(--navy-900)', fontWeight: 800, marginBottom: '0.5rem' }}>
                    User Training &amp; Ongoing Support
                  </h4>
                  <p style={{ fontSize: '13.5px', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                    We provide practical hands-on training for your team, empowering them to utilize key features confidently, backed by direct support whenever questions arise.
                  </p>
                </div>
              </div>

              <p style={{ fontSize: '16px', color: 'var(--navy-800)', lineHeight: 1.75, margin: 0 }}>
                The experts at <strong>Puri &amp; Loggia LLP</strong> provide customized solutions, a collaborative partnership, and a distinct competitive edge. We believe in building long-term relationships with our clients, working closely with you to achieve your milestones and grow your business.
              </p>
            </div>

            {/* Get in Touch CTA Box */}
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
                  Strategic Advisory &bull; Technology Mastery
                </span>
              </div>

              <h3 style={{ fontSize: 'clamp(1.7rem, 2.8vw, 2.2rem)', color: '#FFFFFF', fontWeight: 800, margin: '0 0 0.85rem', letterSpacing: '-0.01em' }}>
                Get in Touch With Our Partners
              </h3>
              
              <p style={{ fontSize: '16px', color: 'rgba(255, 255, 255, 0.9)', lineHeight: 1.65, maxWidth: '680px', margin: '0 auto 2rem' }}>
                Our team is eager to understand your unique challenges and provide tailored solutions that drive growth and operational efficiency. If you are ready to transform your business and unlock its full potential, contact Puri &amp; Loggia LLP today.
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
