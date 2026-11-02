import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Award, CheckCircle2, Phone, Mail, ArrowRight, TrendingUp, BookOpen, Users, Compass, Check, Sparkles, Building2 } from 'lucide-react';

export const AboutUs: React.FC<{ onBookConsultation?: (context?: string) => void }> = () => {
  useEffect(() => {
    document.title = 'About Us | Puri & Loggia LLP - Chartered Professional Accountants in Toronto';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Learn about Puri & Loggia LLP, a Greater Toronto Area CPA firm established through the 2019 merger of Mark Puri and Helen Loggia. 25+ years of senior executive and public accounting experience serving Canadian entrepreneurs.'
      );
    }
  }, []);

  return (
    <div>
      {/* Comprehensive SEO Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'AboutPage',
            name: 'About Puri & Loggia LLP | Chartered Professional Accountants',
            description:
              'Based in the Greater Toronto Area (GTA), Puri & Loggia LLP combines 25+ years of entrepreneurial, corporate executive, and licensed public accounting experience to help Canadian businesses prosper with cloud accounting, corporate tax, and strategic advisory.',
            url: 'https://cpapnl.com/about-us/',
            mainEntity: {
              '@type': 'AccountingService',
              name: 'Puri & Loggia LLP',
              alternateName: 'PnL Accountants',
              description: 'Chartered Professional Accountants and Business Advisors serving Ontario and Canada nationwide.',
              telephone: '+1-416-801-6746',
              email: 'support@cpapnl.com',
              address: {
                '@type': 'PostalAddress',
                addressRegion: 'Ontario',
                addressCountry: 'CA',
              },
              founder: [
                {
                  '@type': 'Person',
                  name: 'Mark Puri',
                  jobTitle: 'Partner, CPA, MBA',
                  telephone: '+1-416-801-6746',
                },
                {
                  '@type': 'Person',
                  name: 'Helen Loggia',
                  jobTitle: 'Partner, CPA, MBA',
                  telephone: '+1-416-805-1427',
                },
              ],
            },
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
            The Firm &bull; Leadership &bull; Proven Impact
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
            Entrepreneurs at Heart, Executives by Experience
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
            Based in the Greater Toronto Area (GTA), Puri &amp; Loggia LLP unites senior corporate financial rigour with real-world entrepreneurial business ownership to help Canadian businesses prosper.
          </p>
        </div>
      </div>

      {/* 2. Key Stats Strip (Trust, Credentials, Longevity) */}
      <section style={{ backgroundColor: '#F8FAFC', borderBottom: '1px solid var(--border-light)', padding: '2.5rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', textAlign: 'center' }}>
            <div>
              <div style={{ fontSize: '2.6rem', fontWeight: 800, color: 'var(--navy-900)', lineHeight: 1 }}>25+</div>
              <div style={{ fontSize: '13.5px', color: 'var(--text-secondary)', marginTop: '0.5rem', fontWeight: 600 }}>
                Years Senior Executive &amp; CPA Experience
              </div>
            </div>
            <div>
              <div style={{ fontSize: '2.6rem', fontWeight: 800, color: 'var(--gold-600)', lineHeight: 1 }}>2019</div>
              <div style={{ fontSize: '13.5px', color: 'var(--text-secondary)', marginTop: '0.5rem', fontWeight: 600 }}>
                Practice Merger &amp; Integrated Platform
              </div>
            </div>
            <div>
              <div style={{ fontSize: '2.6rem', fontWeight: 800, color: 'var(--navy-900)', lineHeight: 1 }}>100%</div>
              <div style={{ fontSize: '13.5px', color: 'var(--text-secondary)', marginTop: '0.5rem', fontWeight: 600 }}>
                Direct Partner Access &amp; File Oversight
              </div>
            </div>
            <div>
              <div style={{ fontSize: '2.6rem', fontWeight: 800, color: 'var(--gold-600)', lineHeight: 1 }}>CPA &bull; MBA</div>
              <div style={{ fontSize: '13.5px', color: 'var(--text-secondary)', marginTop: '0.5rem', fontWeight: 600 }}>
                Licensed Ontario Public Accounting Firm
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Welcome to Puri & Loggia LLP — Authentic Foundation Story */}
      <section className="section" style={{ backgroundColor: '#FFFFFF', padding: '5rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', alignItems: 'center' }}>
            <div>
              <div
                style={{
                  fontSize: '12.5px',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: 'var(--gold-600)',
                  marginBottom: '0.75rem',
                }}
              >
                Our Practice &amp; Philosophy
              </div>
              <h2 style={{ fontSize: 'clamp(1.9rem, 3.2vw, 2.5rem)', marginBottom: '1.35rem', color: 'var(--navy-900)', fontWeight: 800, lineHeight: 1.25, letterSpacing: '-0.02em' }}>
                Welcome to Puri &amp; Loggia LLP
              </h2>
              <p style={{ fontSize: '16.5px', color: 'var(--navy-800)', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                Headquartered in the <strong>Greater Toronto Area (GTA)</strong>, we are passionate about helping Canadian owner-managed businesses, growing corporations, and ambitious founders succeed.
              </p>
              <p style={{ fontSize: '15.5px', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                With decades of senior executive experience across diverse industry sectors and a proven track record of starting, operating, and successfully selling businesses, we understand the day-to-day realities and market pressures business owners face in today&rsquo;s competitive landscape.
              </p>
              <p style={{ fontSize: '15.5px', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '2rem' }}>
                In <strong>2019</strong>, Mark Puri and Helen Loggia merged their independent practices to expand their client offerings. This strategic merger unites two complementary disciplines under one roof: executive-level corporate strategy and operational advisory, paired with deep corporate tax mastery and modern cloud bookkeeping. Business owners gain multi-dimensional perspectives, proactive financial solutions, and direct partner counsel without corporate bureaucracy.
              </p>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link to="/contact" className="btn btn-primary" style={{ gap: '0.5rem', padding: '0.85rem 1.85rem' }}>
                  <span>Speak With Our Partners</span>
                  <ArrowRight size={16} />
                </Link>
                <Link to="/services/accounting-bookkeeping" className="btn btn-secondary" style={{ padding: '0.85rem 1.75rem' }}>
                  <span>Explore Practice Services</span>
                </Link>
              </div>
            </div>

            {/* Strategic Advantages Card */}
            <div
              style={{
                backgroundColor: 'var(--surface-alt)',
                border: '1px solid var(--border-light)',
                borderRadius: '8px',
                padding: '2.5rem',
                boxShadow: 'var(--shadow-card)',
              }}
            >
              <div style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--gold-600)', marginBottom: '0.4rem' }}>
                The PnL Advantage
              </div>
              <h3 style={{ fontSize: '1.35rem', marginBottom: '1.75rem', color: 'var(--navy-900)', fontWeight: 800 }}>
                Why Canadian Entrepreneurs Partner With Us
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ display: 'flex', gap: '1.1rem', alignItems: 'flex-start' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '6px', backgroundColor: 'var(--navy-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--navy-800)', flexShrink: 0, marginTop: '2px' }}>
                    <Compass size={20} />
                  </div>
                  <div>
                    <strong style={{ color: 'var(--navy-900)', fontSize: '15.5px' }}>Dual-Perspective Strategic Insight</strong>
                    <p style={{ fontSize: '14px', color: 'var(--text-secondary)', margin: '0.35rem 0 0', lineHeight: 1.55 }}>
                      The synergy of Mark&rsquo;s serial entrepreneurship and operational CFO leadership with Helen&rsquo;s extensive corporate taxation and CRA compliance background provides full-spectrum clarity.
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1.1rem', alignItems: 'flex-start' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '6px', backgroundColor: 'var(--navy-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--navy-800)', flexShrink: 0, marginTop: '2px' }}>
                    <ShieldCheck size={20} />
                  </div>
                  <div>
                    <strong style={{ color: 'var(--navy-900)', fontSize: '15.5px' }}>Year-Round Tax Minimization, Not Just Annual Filing</strong>
                    <p style={{ fontSize: '14px', color: 'var(--text-secondary)', margin: '0.35rem 0 0', lineHeight: 1.55 }}>
                      We proactively structure your corporate affairs throughout the fiscal year—optimizing salary vs. dividends, claiming eligible deductions, and ensuring rock-solid CRA compliance before deadlines hit.
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1.1rem', alignItems: 'flex-start' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '6px', backgroundColor: 'var(--navy-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--navy-800)', flexShrink: 0, marginTop: '2px' }}>
                    <Users size={20} />
                  </div>
                  <div>
                    <strong style={{ color: 'var(--navy-900)', fontSize: '15.5px' }}>Guaranteed Direct Partner Engagement</strong>
                    <p style={{ fontSize: '14px', color: 'var(--text-secondary)', margin: '0.35rem 0 0', lineHeight: 1.55 }}>
                      Your business is never relegated to call centers or inexperienced juniors. Both partners remain intimately involved with your accounts, available by phone and email for strategic discussions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Partner Profiles — Authentic Bios Refined with Best SEO */}
      <section className="section" style={{ backgroundColor: 'var(--surface-alt)', padding: '5.5rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3.5rem' }}>
            <div
              style={{
                fontSize: '12.5px',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: 'var(--gold-600)',
                marginBottom: '0.5rem',
              }}
            >
              Firm Leadership
            </div>
            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', marginBottom: '0.85rem', color: 'var(--navy-900)', fontWeight: 800, letterSpacing: '-0.02em' }}>
              Meet the Partners
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              Over 25 years of real-world executive management, business ownership, corporate exits, and Chartered Professional Accounting leadership.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2.5rem' }}>
            {/* Mark Puri, CPA, MBA */}
            <div
              className="card card-accent-top"
              style={{
                padding: '2.75rem 2.25rem',
                backgroundColor: '#FFFFFF',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                border: '1px solid var(--border-light)',
                borderRadius: '8px',
                boxShadow: 'var(--shadow-card)',
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.25rem' }}>
                  <div>
                    <h3 style={{ fontSize: '1.75rem', color: 'var(--navy-900)', marginBottom: '0.25rem', fontWeight: 800 }}>
                      Mark Puri
                    </h3>
                    <div style={{ fontWeight: 800, fontSize: '14.5px', color: 'var(--gold-600)' }}>
                      Partner, CPA, MBA
                    </div>
                  </div>
                  <span className="badge badge-navy" style={{ fontSize: '11.5px', padding: '0.35rem 0.75rem' }}>Senior Partner</span>
                </div>

                <div style={{ color: 'var(--navy-900)', fontWeight: 600, fontSize: '14px', marginBottom: '1.15rem', fontStyle: 'italic' }}>
                  Entrepreneurial Vision &bull; Financial Architecture &bull; Growth Advisory
                </div>

                <p style={{ fontSize: '14.5px', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.15rem' }}>
                  Mark brings an authentic, battle-tested entrepreneurial perspective to public accounting. Having successfully founded, operated, and profitably exited businesses across technology, real estate, and manufacturing, he understands the real-world operational challenges business owners encounter every day.
                </p>
                <p style={{ fontSize: '14.5px', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.15rem' }}>
                  With more than 25 years of senior management experience, Mark has led corporate finance, internal audit, accounting governance, strategic planning, and commercial development across industries including healthcare, financial services, software technology, manufacturing, and real estate.
                </p>
                <p style={{ fontSize: '14.5px', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.75rem' }}>
                  After transitioning from the corporate executive suite, Mark established his advisory practice to deliver solutions that directly move the needle for entrepreneurs: reducing unnecessary overhead, improving gross margins, implementing robust risk mitigation protocols, and positioning companies to seize high-value commercial opportunities.
                </p>

                <div style={{ marginBottom: '1.75rem' }}>
                  <div style={{ fontSize: '11.5px', fontWeight: 800, textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.65rem', letterSpacing: '0.05em' }}>
                    Core Areas of Practice:
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                    <span className="badge badge-gold" style={{ fontSize: '11px' }}>Fractional CFO</span>
                    <span className="badge badge-gold" style={{ fontSize: '11px' }}>M&amp;A Due Diligence</span>
                    <span className="badge badge-gold" style={{ fontSize: '11px' }}>Strategic Planning</span>
                    <span className="badge badge-gold" style={{ fontSize: '11px' }}>Expense Optimization</span>
                    <span className="badge badge-gold" style={{ fontSize: '11px' }}>Cash Flow Modeling</span>
                    <span className="badge badge-gold" style={{ fontSize: '11px' }}>Risk Management</span>
                  </div>
                </div>
              </div>

              <div style={{ paddingTop: '1.5rem', borderTop: '1px solid var(--border-light)', display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Phone size={16} color="var(--navy-800)" />
                  <a href="tel:416-801-6746" style={{ fontWeight: 800, color: 'var(--navy-900)', fontSize: '14.5px', textDecoration: 'none' }}>
                    +1 416 801 6746
                  </a>
                </div>
                <Link
                  to="/contact"
                  className="btn btn-secondary btn-sm"
                  style={{ fontSize: '13px', fontWeight: 700 }}
                >
                  Contact Mark
                </Link>
              </div>
            </div>

            {/* Helen Loggia, CPA, MBA */}
            <div
              className="card card-accent-top"
              style={{
                padding: '2.75rem 2.25rem',
                backgroundColor: '#FFFFFF',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                border: '1px solid var(--border-light)',
                borderRadius: '8px',
                boxShadow: 'var(--shadow-card)',
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.25rem' }}>
                  <div>
                    <h3 style={{ fontSize: '1.75rem', color: 'var(--navy-900)', marginBottom: '0.25rem', fontWeight: 800 }}>
                      Helen Loggia
                    </h3>
                    <div style={{ fontWeight: 800, fontSize: '14.5px', color: 'var(--gold-600)' }}>
                      Partner, CPA, MBA
                    </div>
                  </div>
                  <span className="badge badge-navy" style={{ fontSize: '11.5px', padding: '0.35rem 0.75rem' }}>Senior Partner</span>
                </div>

                <div style={{ color: 'var(--navy-900)', fontWeight: 600, fontSize: '14px', marginBottom: '1.15rem', fontStyle: 'italic' }}>
                  Corporate Tax Mastery &bull; CRA Representation &bull; Public Practice Excellence
                </div>

                <p style={{ fontSize: '14.5px', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.15rem' }}>
                  Helen&rsquo;s passion for taxation was sparked early by a dedicated grade 8 teacher who believed students should master the fundamentals of filing tax returns. That practical introduction inspired Helen to begin preparing and submitting tax returns for family and friends from a young age.
                </p>
                <p style={{ fontSize: '14.5px', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.15rem' }}>
                  Her interest in business economics and fiscal policy led her to earn an Honours Degree in Economics, obtain the Chartered Professional Accountant (CPA) designation, and complete an MBA, graduating with academic distinction.
                </p>
                <p style={{ fontSize: '14.5px', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.75rem' }}>
                  Helen subsequently accumulated extensive leadership experience across progressive senior management roles with multinational enterprises in financial services, consumer packaged goods, and technology. For over 25 years, Helen has led a thriving public accounting practice, providing individuals and Canadian corporate owners with sophisticated tax planning, accounting, and advisory services.
                </p>

                <div style={{ marginBottom: '1.75rem' }}>
                  <div style={{ fontSize: '11.5px', fontWeight: 800, textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.65rem', letterSpacing: '0.05em' }}>
                    Core Areas of Practice:
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                    <span className="badge badge-gold" style={{ fontSize: '11px' }}>Corporate T2 Tax</span>
                    <span className="badge badge-gold" style={{ fontSize: '11px' }}>Owner Remuneration</span>
                    <span className="badge badge-gold" style={{ fontSize: '11px' }}>CRA Dispute Defense</span>
                    <span className="badge badge-gold" style={{ fontSize: '11px' }}>GST/HST Compliance</span>
                    <span className="badge badge-gold" style={{ fontSize: '11px' }}>Personal Tax Planning</span>
                    <span className="badge badge-gold" style={{ fontSize: '11px' }}>Public Accounting</span>
                  </div>
                </div>
              </div>

              <div style={{ paddingTop: '1.5rem', borderTop: '1px solid var(--border-light)', display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Phone size={16} color="var(--navy-800)" />
                  <a href="tel:416-805-1427" style={{ fontWeight: 800, color: 'var(--navy-900)', fontSize: '14.5px', textDecoration: 'none' }}>
                    +1 416 805 1427
                  </a>
                </div>
                <Link
                  to="/contact"
                  className="btn btn-secondary btn-sm"
                  style={{ fontSize: '13px', fontWeight: 700 }}
                >
                  Contact Helen
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. How We Help Section — Authentic Matching cpapnl.com Refined for Best SEO */}
      <section className="section" style={{ backgroundColor: '#FFFFFF', padding: '5.5rem 0' }}>
        <div className="container" style={{ maxWidth: '1000px' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div
              style={{
                fontSize: '12.5px',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: 'var(--gold-600)',
                marginBottom: '0.5rem',
              }}
            >
              Comprehensive Business Solutions
            </div>
            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', color: 'var(--navy-900)', fontWeight: 800, marginBottom: '1.25rem', letterSpacing: '-0.02em' }}>
              How We Help Canadian Businesses Prosper
            </h2>
            <p style={{ fontSize: '16.5px', color: 'var(--text-secondary)', lineHeight: 1.75, maxWidth: '820px', margin: '0 auto' }}>
              At Puri &amp; Loggia LLP, we work intimately with business owners to deliver financial solutions tailored specifically to their commercial stage and goals. Whether you are a seasoned serial entrepreneur managing multi-entity structures or a fast-scaling company establishing robust financial controls, our full-spectrum services give you the confidence to focus on your core mission: <strong>growing your business</strong>.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
            {/* Pillar 1 */}
            <div className="card" style={{ padding: '2.25rem 2rem', borderRadius: '8px', border: '1px solid var(--border-light)', backgroundColor: '#F8FAFC' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '8px', backgroundColor: 'var(--navy-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--navy-800)', marginBottom: '1.35rem' }}>
                <BookOpen size={24} />
              </div>
              <h3 style={{ fontSize: '1.3rem', color: 'var(--navy-900)', marginBottom: '0.75rem', fontWeight: 800 }}>
                Accounting &amp; Bookkeeping
              </h3>
              <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '1.5rem' }}>
                Modern, touchless cloud bookkeeping built on Xero and QuickBooks Online. Weekly reconciliations, payroll administration, accounts payable, and timely month-end financial statements.
              </p>
              <Link to="/services/accounting-bookkeeping" style={{ fontSize: '13.5px', fontWeight: 700, color: 'var(--navy-800)', display: 'inline-flex', alignItems: 'center', gap: '0.4rem', textDecoration: 'none' }}>
                <span>Learn More</span>
                <ArrowRight size={14} />
              </Link>
            </div>

            {/* Pillar 2 */}
            <div className="card" style={{ padding: '2.25rem 2rem', borderRadius: '8px', border: '1px solid var(--border-light)', backgroundColor: '#F8FAFC' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '8px', backgroundColor: 'var(--navy-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--navy-800)', marginBottom: '1.35rem' }}>
                <ShieldCheck size={24} />
              </div>
              <h3 style={{ fontSize: '1.3rem', color: 'var(--navy-900)', marginBottom: '0.75rem', fontWeight: 800 }}>
                Corporate &amp; Personal Taxation
              </h3>
              <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '1.5rem' }}>
                Strategic Canadian corporate T2 preparation, owner-manager compensation optimization, GST/HST filing, holding company tax planning, and unyielding CRA dispute representation.
              </p>
              <Link to="/services/taxation" style={{ fontSize: '13.5px', fontWeight: 700, color: 'var(--navy-800)', display: 'inline-flex', alignItems: 'center', gap: '0.4rem', textDecoration: 'none' }}>
                <span>Learn More</span>
                <ArrowRight size={14} />
              </Link>
            </div>

            {/* Pillar 3 */}
            <div className="card" style={{ padding: '2.25rem 2rem', borderRadius: '8px', border: '1px solid var(--border-light)', backgroundColor: '#F8FAFC' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '8px', backgroundColor: 'var(--navy-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--navy-800)', marginBottom: '1.35rem' }}>
                <TrendingUp size={24} />
              </div>
              <h3 style={{ fontSize: '1.3rem', color: 'var(--navy-900)', marginBottom: '0.75rem', fontWeight: 800 }}>
                Consulting &amp; Technology
              </h3>
              <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '1.5rem' }}>
                Fractional CFO advisory, 13-week dynamic cash forecasting, cloud tech stack integration, overhead expense reduction, and mergers &amp; acquisitions due diligence.
              </p>
              <Link to="/services/consulting-technology" style={{ fontSize: '13.5px', fontWeight: 700, color: 'var(--navy-800)', display: 'inline-flex', alignItems: 'center', gap: '0.4rem', textDecoration: 'none' }}>
                <span>Learn More</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          {/* Contact Us to Grow Your Business CTA Box */}
          <div
            style={{
              backgroundColor: '#0F213A',
              borderRadius: '8px',
              padding: '3.5rem 2.5rem',
              color: '#FFFFFF',
              textAlign: 'center',
              boxShadow: '0 12px 30px rgba(15, 33, 58, 0.25)',
            }}
          >
            <h3 style={{ fontSize: 'clamp(1.6rem, 2.8vw, 2.1rem)', color: '#FFFFFF', marginBottom: '0.85rem', fontWeight: 800, letterSpacing: '-0.01em' }}>
              Contact Us to Grow Your Business
            </h3>
            <p style={{ fontSize: '15.5px', color: 'rgba(255, 255, 255, 0.88)', maxWidth: '640px', margin: '0 auto 2rem', lineHeight: 1.65 }}>
              Connect directly with Mark Puri, CPA, MBA and Helen Loggia, CPA, MBA to discuss your accounting, corporate tax, or strategic advisory requirements.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <Link
                to="/contact"
                className="btn btn-primary btn-lg"
                style={{
                  backgroundColor: '#FCAC14',
                  borderColor: '#FCAC14',
                  color: '#0F294A',
                  fontWeight: 800,
                  boxShadow: '0 4px 14px rgba(252, 172, 20, 0.4)',
                  padding: '0.9rem 2.25rem',
                  gap: '0.5rem',
                }}
              >
                <span>Contact Us Today</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
