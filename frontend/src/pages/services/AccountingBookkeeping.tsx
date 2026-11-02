import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle2, ArrowRight, ShieldCheck, Phone, Mail, 
  FileText, Check, Clock, Layers, Sparkles, Building2, BarChart3, RefreshCw
} from 'lucide-react';

export const AccountingBookkeeping: React.FC<{ onBookConsultation: (context?: string) => void }> = () => {
  useEffect(() => {
    document.title = 'Accounting & Bookkeeping Services Toronto & Ontario | Puri & Loggia LLP';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Simplify your bookkeeping with Puri & Loggia LLP. Automated cloud accounting in Xero & QuickBooks Online, bank reconciliations, payroll, and accurate monthly reports for Canadian businesses.'
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
            name: 'Accounting and Bookkeeping Services',
            serviceType: 'Cloud Bookkeeping, Bank Reconciliation & Management Financial Reporting',
            provider: {
              '@type': 'AccountingService',
              name: 'Puri & Loggia LLP',
              url: 'https://cpapnl.com/accounting-bookkeeping/',
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
              'End-to-end cloud bookkeeping, bank and credit card reconciliations, payroll administration, and monthly financial reporting in Xero and QuickBooks Online for Canadian businesses.',
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
            Cloud Bookkeeping &bull; Financial Reporting &bull; Compliance
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
            Accounting &amp; Bookkeeping Services
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
            We remove the stress of bookkeeping, accounting, tax, and daily paperwork with smart, automated cloud systems. Accurate numbers, on-time compliance, and complete peace of mind for Canadian business owners.
          </p>
        </div>
      </div>

      {/* 2. Main Content Section */}
      <section className="section" style={{ backgroundColor: '#FFFFFF', padding: '5rem 0' }}>
        <div className="container" style={{ maxWidth: '960px' }}>
          <article className="service-main-content">
            {/* Lead Section: Simplify Your Accounting/Bookkeeping */}
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
                Accurate &bull; Automated &bull; Stress-Free
              </div>
              <h2 style={{ fontSize: 'clamp(1.9rem, 3.2vw, 2.5rem)', color: 'var(--navy-900)', fontWeight: 800, marginBottom: '1.25rem', letterSpacing: '-0.02em', lineHeight: 1.25 }}>
                Simplify Your Accounting &amp; Bookkeeping
              </h2>
              
              <p style={{ fontSize: '17px', color: 'var(--navy-800)', lineHeight: 1.75, marginBottom: '1.25rem' }}>
                Running a small business is no easy task. Between managing staff, customer delivery, sales, marketing, and everything in between, you are probably at the end of your tether. If you find yourself stressed at the thought of your finances, receipts, or looming deadlines, it is time to chat with us.
              </p>

              <p style={{ fontSize: '16px', color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: '2rem' }}>
                Here at <strong>Puri &amp; Loggia LLP</strong>, we remove the stress of bookkeeping, accounting, tax, and general business finances. We will help you implement a smart, online bookkeeping system that is automated, up-to-date, and clear&mdash;so you know exactly how your business is performing at all times.
              </p>

              {/* Authentic Callout: We Make Bookkeeping Simple */}
              <div 
                style={{ 
                  borderLeft: '4px solid #FCAC14', 
                  backgroundColor: '#F8FAFC', 
                  padding: '2rem', 
                  borderRadius: '0 8px 8px 0',
                  border: '1px solid var(--border-light)',
                  borderLeftWidth: '4px',
                  borderLeftColor: '#FCAC14'
                }}
              >
                <h3 style={{ fontSize: '21px', color: 'var(--navy-900)', fontWeight: 800, margin: '0 0 0.75rem', letterSpacing: '-0.01em' }}>
                  We Make Bookkeeping Simple
                </h3>
                <p style={{ fontSize: '15.5px', color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>
                  Bookkeeping involves navigating through a maze of financial transactions, vendor invoices, receipts, and bank statements. The complexity of tracking income and expenses, classifying entries, and ensuring precision can quickly become overwhelming. As a result, many business owners are left confused and unsure about the true financial health of their business. We cut through the confusion to give you pristine, reliable books.
                </p>
              </div>
            </div>

            {/* How We Help: 4 Authentic Pillars from Legacy cpapnl.com */}
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
                Comprehensive Practice Support
              </div>
              <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.35rem)', color: 'var(--navy-900)', fontWeight: 800, marginBottom: '1rem', letterSpacing: '-0.02em' }}>
                How We Help
              </h2>
              <p style={{ fontSize: '16.5px', color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: '2rem' }}>
                At Puri &amp; Loggia LLP, we offer comprehensive bookkeeping services designed to simplify your financial management and alleviate your stress. Our experienced team is dedicated to helping you maintain accurate and up-to-date financial records, so you can focus on growing your business:
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '2.5rem' }}>
                {/* 1. Regular Financial Management */}
                <div style={{ backgroundColor: '#F8FAFC', padding: '1.75rem', borderRadius: '8px', border: '1px solid var(--border-light)' }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: '6px', backgroundColor: 'var(--navy-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--navy-800)', marginBottom: '1rem' }}>
                    <Clock size={20} />
                  </div>
                  <h3 style={{ fontSize: '17px', color: 'var(--navy-900)', fontWeight: 800, marginBottom: '0.5rem' }}>
                    Regular Financial Management
                  </h3>
                  <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                    We take over day-to-day financial tasks, accounts payable, and back-office tracking, freeing you up to focus on what you do best&mdash;running and expanding your business.
                  </p>
                </div>

                {/* 2. Bookkeeping and Compliance */}
                <div style={{ backgroundColor: '#F8FAFC', padding: '1.75rem', borderRadius: '8px', border: '1px solid var(--border-light)' }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: '6px', backgroundColor: 'var(--navy-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--navy-800)', marginBottom: '1rem' }}>
                    <ShieldCheck size={20} />
                  </div>
                  <h3 style={{ fontSize: '17px', color: 'var(--navy-900)', fontWeight: 800, marginBottom: '0.5rem' }}>
                    Bookkeeping &amp; Compliance
                  </h3>
                  <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                    We keep your books up-to-date and organized in Xero or QuickBooks Online, saving you from the stress of disorganized paperwork, missing receipts, and CRA audit exposure.
                  </p>
                </div>

                {/* 3. Reports That Make Sense */}
                <div style={{ backgroundColor: '#F8FAFC', padding: '1.75rem', borderRadius: '8px', border: '1px solid var(--border-light)' }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: '6px', backgroundColor: 'var(--navy-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--navy-800)', marginBottom: '1rem' }}>
                    <BarChart3 size={20} />
                  </div>
                  <h3 style={{ fontSize: '17px', color: 'var(--navy-900)', fontWeight: 800, marginBottom: '0.5rem' }}>
                    Reports That Make Sense
                  </h3>
                  <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                    We prepare clear, comprehensive financial reports&mdash;including balance sheets, income statements, and cash flow statements&mdash;giving you a crystal-clear picture of your true financial position.
                  </p>
                </div>

                {/* 4. Bookkeeping Systems */}
                <div style={{ backgroundColor: '#F8FAFC', padding: '1.75rem', borderRadius: '8px', border: '1px solid var(--border-light)' }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: '6px', backgroundColor: 'var(--navy-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--navy-800)', marginBottom: '1rem' }}>
                    <RefreshCw size={20} />
                  </div>
                  <h3 style={{ fontSize: '17px', color: 'var(--navy-900)', fontWeight: 800, marginBottom: '0.5rem' }}>
                    Smart Bookkeeping Systems
                  </h3>
                  <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                    As business development experts, we know the power of smart systems. We implement modern cloud processes that streamline your bookkeeping, invoicing, bill payments, and payroll.
                  </p>
                </div>
              </div>
            </div>

            {/* Deep-Dive Sections from Authentic Site */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem', marginBottom: '4rem' }}>
              <div style={{ padding: '2rem', borderRadius: '8px', border: '1px solid var(--border-light)', backgroundColor: '#FFFFFF', boxShadow: 'var(--shadow-card)' }}>
                <h3 style={{ fontSize: '20px', color: 'var(--navy-900)', fontWeight: 800, marginBottom: '0.85rem' }}>
                  Timely &amp; Accurate Recording of Transactions
                </h3>
                <p style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>
                  We understand the critical importance of capturing every financial transaction promptly. By maintaining accurate, up-to-the-minute records, you get real-time insights into the performance of your business, ensuring you never make financial decisions based on outdated data.
                </p>
              </div>

              <div style={{ padding: '2rem', borderRadius: '8px', border: '1px solid var(--border-light)', backgroundColor: '#FFFFFF', boxShadow: 'var(--shadow-card)' }}>
                <h3 style={{ fontSize: '20px', color: 'var(--navy-900)', fontWeight: 800, marginBottom: '0.85rem' }}>
                  Reconciliation &amp; Financial Reporting
                </h3>
                <p style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>
                  We take care of the tedious task of reconciling your bank accounts and credit cards weekly. Our meticulous CPA-led approach ensures that your ledgers balance perfectly, your records are 100% reliable, and your fiscal year-end close is effortless.
                </p>
              </div>
            </div>

            {/* Action Box: Take Control of Your Business Today */}
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
                  Partner With Licensed Ontario CPAs
                </span>
              </div>

              <h3 style={{ fontSize: 'clamp(1.7rem, 2.8vw, 2.2rem)', color: '#FFFFFF', fontWeight: 800, margin: '0 0 0.85rem', letterSpacing: '-0.01em' }}>
                Take Control of Your Business Today
              </h3>
              
              <p style={{ fontSize: '16px', color: 'rgba(255, 255, 255, 0.9)', lineHeight: 1.65, maxWidth: '680px', margin: '0 auto 2rem' }}>
                Don&rsquo;t let bookkeeping be a burden on your small business. Speak directly to Mark Puri and Helen Loggia to experience genuine financial clarity and peace of mind.
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
