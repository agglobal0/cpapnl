import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, AlertTriangle, CheckCircle2, Phone, ArrowRight, Info } from 'lucide-react';

export const TaxDeadlinesPage: React.FC = () => {
  useEffect(() => {
    document.title = 'CRA Tax Filing Deadlines 2025 — Canadian Business Owner Calendar | Puri & Loggia LLP';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Complete CRA tax deadline calendar for Canadian businesses and individuals in 2025–2026. T2 corporate tax, GST/HST remittance, T4/T5 slips, payroll deductions, and instalment due dates for Ontario businesses.'
      );
    }
  }, []);

  const deadlines = [
    {
      month: 'January 2025',
      color: '#0F294A',
      items: [
        { date: 'Jan 15', label: 'Dec quarterly GST/HST remittance due (Monthly filers: Dec GST/HST)', urgent: false },
        { date: 'Jan 15', label: 'Q4 corporate tax instalment due (Dec 31 year-end corporations)', urgent: false },
        { date: 'Jan 31', label: 'T4, T4A, T5 slips issued to employees/recipients', urgent: true },
      ]
    },
    {
      month: 'February 2025',
      color: '#163B6B',
      items: [
        { date: 'Feb 15', label: 'Jan GST/HST remittance due (monthly filers)', urgent: false },
        { date: 'Feb 28', label: 'T4, T4A, T5 slips filed with CRA (electronic filing)', urgent: true },
        { date: 'Feb 28', label: 'RRSP contribution deadline for 2024 tax year', urgent: true },
      ]
    },
    {
      month: 'March 2025',
      color: '#0F294A',
      items: [
        { date: 'Mar 15', label: 'Feb GST/HST remittance due (monthly filers)', urgent: false },
        { date: 'Mar 15', label: 'Q1 corporate tax instalment (Mar 31 year-end corporations)', urgent: false },
        { date: 'Mar 31', label: 'T3 trust return and slips filing deadline', urgent: false },
      ]
    },
    {
      month: 'April 2025',
      color: '#163B6B',
      items: [
        { date: 'Apr 15', label: 'Mar GST/HST remittance due (monthly filers)', urgent: false },
        { date: 'Apr 30', label: '⚠️ Personal income tax return (T1) filing & payment deadline', urgent: true },
        { date: 'Apr 30', label: 'Balance owing on 2024 personal tax return due', urgent: true },
      ]
    },
    {
      month: 'May 2025',
      color: '#0F294A',
      items: [
        { date: 'May 15', label: 'Apr GST/HST remittance due (monthly filers)', urgent: false },
        { date: 'May 15', label: 'Q2 corporate tax instalment (Mar 31 year-end corporations)', urgent: false },
        { date: 'May 31', label: 'T1 extended deadline for self-employed individuals', urgent: true },
      ]
    },
    {
      month: 'June 2025',
      color: '#163B6B',
      items: [
        { date: 'Jun 15', label: 'May GST/HST remittance due (monthly filers)', urgent: false },
        { date: 'Jun 15', label: 'T1 filing deadline for self-employed individuals & spouses', urgent: true },
        { date: 'Jun 30', label: 'Semi-annual GST/HST remittance due (semi-annual filers)', urgent: false },
      ]
    },
    {
      month: 'September 2025',
      color: '#0F294A',
      items: [
        { date: 'Sep 15', label: 'Q3 personal income tax instalment due', urgent: false },
        { date: 'Sep 15', label: 'Aug GST/HST remittance due (monthly filers)', urgent: false },
        { date: 'Sep 30', label: 'T2 corporate tax return due (Dec 31 year-end — 6-month extension)', urgent: true },
      ]
    },
    {
      month: 'December 2025',
      color: '#163B6B',
      items: [
        { date: 'Dec 15', label: 'Q4 personal income tax instalment due', urgent: false },
        { date: 'Dec 15', label: 'Nov GST/HST remittance due (monthly filers)', urgent: false },
        { date: 'Dec 31', label: 'Corporate year-end (Dec 31 fiscal year corporations)', urgent: false },
      ]
    },
  ];

  const keyRules = [
    { title: 'T2 Corporate Tax Return', rule: 'Due 6 months after your fiscal year-end. Payment due 2 months (or 3 months for CCPCs) after year-end.' },
    { title: 'GST/HST Remittance', rule: 'Frequency depends on your annual taxable sales. Over $6M = monthly. $1.5M–$6M = quarterly. Under $1.5M = annual.' },
    { title: 'Payroll Deductions (PD7A)', rule: 'Regular remitters: by the 15th of the following month. Accelerated remitters: by the 25th of the same month.' },
    { title: 'Corporate Tax Instalments', rule: 'Quarterly instalments required if your net tax owing exceeds $3,000 in the current or either of the two preceding years.' },
    { title: 'T4/T5/T4A Slips', rule: 'Must be distributed to recipients by the last day of February and filed electronically with CRA by the same date.' },
    { title: 'Late Filing Penalties', rule: 'CRA imposes 5% of balance owing + 1% per month (up to 12 months) for late personal tax returns. Corporate late filing = 5% + 1%/month up to 12 months.' },
  ];

  return (
    <div>
      {/* JSON-LD FAQ Schema for AEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'When is the T2 corporate tax return due in Canada?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'The T2 corporate income tax return is due 6 months after the end of your fiscal year. For example, if your year-end is December 31, your T2 is due June 30. The balance of corporate tax owing is due 2 months after year-end (or 3 months for eligible Canadian-Controlled Private Corporations).'
                }
              },
              {
                '@type': 'Question',
                name: 'When are T4 slips due in Canada?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'T4 slips must be distributed to employees and filed electronically with the CRA by the last day of February each year, for the prior calendar year.'
                }
              },
              {
                '@type': 'Question',
                name: 'What is the personal income tax filing deadline in Canada?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'The personal income tax (T1) filing deadline in Canada is April 30 for most individuals. Self-employed individuals and their spouses have until June 15, but any balance owing is still due April 30 to avoid interest charges.'
                }
              },
              {
                '@type': 'Question',
                name: 'When is GST/HST due in Ontario?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'GST/HST remittance frequency depends on annual taxable sales. Businesses with over $6M in sales must remit monthly (due by the 15th of the following month). Quarterly filers remit by one month after the quarter end. Annual filers remit by 3 months after their fiscal year-end.'
                }
              }
            ]
          })
        }}
      />

      {/* Hero */}
      <section style={{ backgroundColor: '#0F294A', color: '#FFFFFF', padding: 'clamp(3.5rem, 5vw, 5rem) 0' }}>
        <div className="container">
          <div style={{ maxWidth: '800px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
              <Calendar size={18} color="#FCAC14" />
              <span style={{ fontSize: '12.5px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#FCAC14' }}>
                Free Resource
              </span>
            </div>
            <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 800, color: '#FFFFFF', lineHeight: 1.2, marginBottom: '1.25rem', letterSpacing: '-0.02em' }}>
              CRA Tax Filing Deadlines<br />for Canadian Businesses 2025
            </h1>
            <p style={{ fontSize: '17px', color: 'rgba(255,255,255,0.88)', lineHeight: 1.7, marginBottom: '2rem', maxWidth: '620px' }}>
              Never miss a CRA deadline again. This calendar covers T2 corporate tax, GST/HST remittance, T4/T5 slips, payroll deductions, and personal tax due dates for Ontario and Canadian businesses.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              <Link
                to="/contact"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backgroundColor: '#FCAC14', color: '#0F294A', padding: '0.85rem 1.75rem', borderRadius: '4px', fontWeight: 800, fontSize: '14.5px', textDecoration: 'none' }}
              >
                <span>Book a Free Tax Review</span>
                <ArrowRight size={16} />
              </Link>
              <a
                href="tel:416-801-6746"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: '#FFFFFF', border: '1px solid rgba(255,255,255,0.35)', padding: '0.85rem 1.5rem', borderRadius: '4px', fontWeight: 700, fontSize: '14.5px', textDecoration: 'none', backgroundColor: 'rgba(255,255,255,0.08)' }}
              >
                <Phone size={15} />
                <span>Call Mark: 416-801-6746</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Alert Banner */}
      <section style={{ backgroundColor: '#FEF3C7', borderBottom: '1px solid #FCD34D', padding: '1rem 0' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
            <AlertTriangle size={18} color="#D97706" style={{ flexShrink: 0 }} />
            <p style={{ fontSize: '13.5px', color: '#92400E', margin: 0, lineHeight: 1.5 }}>
              <strong>Disclaimer:</strong> Deadlines may shift when they fall on weekends or holidays. Always confirm current deadlines with a licensed CPA. This calendar is for general information only.
            </p>
          </div>
        </div>
      </section>

      {/* Key Rules */}
      <section style={{ backgroundColor: '#F8FAFC', borderBottom: '1px solid var(--border-light)', padding: '4rem 0' }}>
        <div className="container">
          <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', fontWeight: 800, color: 'var(--navy-900)', marginBottom: '2.5rem', letterSpacing: '-0.02em' }}>
            Key Filing Rules at a Glance
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.25rem' }}>
            {keyRules.map((rule, i) => (
              <div key={i} style={{ backgroundColor: '#FFFFFF', border: '1px solid var(--border-light)', borderLeft: '4px solid #FCAC14', borderRadius: '6px', padding: '1.35rem 1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
                  <Info size={15} color="#D97706" />
                  <div style={{ fontWeight: 800, fontSize: '14px', color: 'var(--navy-900)' }}>{rule.title}</div>
                </div>
                <p style={{ fontSize: '13.5px', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>{rule.rule}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Monthly Deadline Calendar */}
      <section style={{ backgroundColor: '#FFFFFF', padding: '5rem 0' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto 3rem' }}>
            <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', fontWeight: 800, color: 'var(--navy-900)', marginBottom: '0.75rem', letterSpacing: '-0.02em' }}>
              2025 CRA Filing Deadline Calendar
            </h2>
            <p style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
              Key deadlines for fiscal year December 31 corporations and calendar-year individuals. Dates for other fiscal year-ends will differ — contact us for a personalized deadline schedule.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2rem' }}>
            {deadlines.map((month, mi) => (
              <div key={mi} style={{ border: '1px solid var(--border-light)', borderRadius: '8px', overflow: 'hidden', boxShadow: 'var(--shadow-card)' }}>
                <div style={{ backgroundColor: month.color, color: '#FFFFFF', padding: '1rem 1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Clock size={16} color="#FCAC14" />
                  <span style={{ fontWeight: 800, fontSize: '15px' }}>{month.month}</span>
                </div>
                <div style={{ padding: '1.25rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {month.items.map((item, ii) => (
                    <div key={ii} style={{ display: 'flex', gap: '0.85rem', alignItems: 'flex-start' }}>
                      <div style={{ minWidth: '52px', fontWeight: 800, fontSize: '12.5px', color: item.urgent ? '#DC2626' : '#D97706', paddingTop: '2px' }}>{item.date}</div>
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.4rem', flex: 1 }}>
                        {item.urgent
                          ? <AlertTriangle size={14} color="#DC2626" style={{ flexShrink: 0, marginTop: '2px' }} />
                          : <CheckCircle2 size={14} color="#16A34A" style={{ flexShrink: 0, marginTop: '2px' }} />
                        }
                        <span style={{ fontSize: '13.5px', color: 'var(--navy-900)', lineHeight: 1.5 }}>{item.label}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: '#0F294A', color: '#FFFFFF', padding: '4.5rem 0', textAlign: 'center' }}>
        <div className="container">
          <div style={{ maxWidth: '680px', margin: '0 auto' }}>
            <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.4rem)', fontWeight: 800, color: '#FFFFFF', marginBottom: '1rem', letterSpacing: '-0.02em' }}>
              Never Miss a CRA Deadline Again
            </h2>
            <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.85)', lineHeight: 1.7, marginBottom: '2rem' }}>
              Our team monitors all your filing obligations and sends you advance reminders — so you can focus on running your business, not chasing deadlines.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link
                to="/contact"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backgroundColor: '#FCAC14', color: '#0F294A', padding: '0.9rem 2rem', borderRadius: '4px', fontWeight: 800, fontSize: '14.5px', textDecoration: 'none' }}
              >
                <span>Get a Free Tax Review</span>
                <ArrowRight size={16} />
              </Link>
              <a
                href="tel:416-801-6746"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: '#FFFFFF', border: '1px solid rgba(255,255,255,0.35)', padding: '0.9rem 1.75rem', borderRadius: '4px', fontWeight: 700, fontSize: '14.5px', textDecoration: 'none' }}
              >
                <Phone size={15} />
                <span>416-801-6746</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
