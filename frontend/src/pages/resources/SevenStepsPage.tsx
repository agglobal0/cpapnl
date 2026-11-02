import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Download, ArrowRight, Calendar, Sparkles, TrendingUp, Users, Target, Globe, Layers, Repeat, ShoppingBag } from 'lucide-react';
import { VERIFIED_DOWNLOADS } from '../../services/api';

export const SevenStepsPage: React.FC<{ 
  onBookConsultation?: (context?: string) => void;
  onOpenLeadModal: (res: any) => void;
}> = ({ onOpenLeadModal }) => {
  const [activeStep, setActiveStep] = useState(0);

  const STEPS = [
    {
      number: '01',
      title: 'Maximize Existing Assets & Reduce Churn',
      subtitle: 'Can you grow significantly using the customers, staff, and capacity you already have?',
      icon: Users,
      description: 'Acquiring a new customer in Canada costs 5x to 7x more than retaining an existing client. Step 1 focuses on eliminating involuntary customer churn, conducting client satisfaction reviews, and cross-selling high-margin complementary services to your existing account base.',
      actionItems: [
        'Calculate your annual churn rate and revenue lost to dormant accounts',
        'Package an existing recurring service into a predictable monthly retainer',
        'Audit underutilized staff capacity and automate manual administrative bottlenecks'
      ]
    },
    {
      number: '02',
      title: 'Acquire High-Value Target Accounts',
      subtitle: 'Shift from broad scattershot advertising to precision Ideal Customer Profiles (ICPs).',
      icon: Target,
      description: 'Stop competing on price. By defining your Top 20% most profitable client persona, you can align marketing spend to attract clients who value strategic outcomes, pay on time, and have high lifetime value (LTV).',
      actionItems: [
        'Segment your current client base by gross margin contribution',
        'Establish a consistent lead-generation pipeline focusing on referrals and thought leadership',
        'Implement standardized onboarding to shorten sales-to-revenue cycle times'
      ]
    },
    {
      number: '03',
      title: 'Introduce High-Margin Products & Services',
      subtitle: 'What additional problems can you solve for your existing customers?',
      icon: ShoppingBag,
      description: 'Analyze the friction points your clients experience before and after consuming your core product. Launching advisory, ongoing maintenance, or specialized compliance packages allows you to expand margins without increasing overhead.',
      actionItems: [
        'Survey your top 10 clients about their primary operational headaches',
        'Develop tiered service bundles (Good, Better, Best) to capture willingness to pay',
        'Review unit economics and variable costs before finalizing pricing'
      ]
    },
    {
      number: '04',
      title: 'Explore New Geographic & Industry Verticals',
      subtitle: 'Can your proven core competency be adapted to adjacent Canadian markets?',
      icon: Globe,
      description: 'Leverage modern cloud infrastructure to service clients across Ontario, Quebec, Alberta, and British Columbia without opening physical satellite offices. Identify industry niches that share identical regulatory or compliance hurdles.',
      actionItems: [
        'Verify inter-provincial tax compliance (HST, PST, QST registration requirements)',
        'Create targeted industry landing pages addressing specific vertical pain points',
        'Establish virtual client delivery protocols using Zoom and cloud collaboration'
      ]
    },
    {
      number: '05',
      title: 'Unlock Alternative Distribution Channels',
      subtitle: 'How can you reach end consumers through trusted intermediaries and partners?',
      icon: Layers,
      description: 'Rather than selling one-to-one, establish strategic channel partnerships with complementary service providers (e.g., software vendors, commercial banks, industry associations) who can refer dozens of clients concurrently.',
      actionItems: [
        'Map out non-competing businesses that serve your exact ideal customer profile',
        'Design a formal reciprocal referral agreement with clear compensation or mutual benefit',
        'Publish joint educational content, webinars, and co-branded diagnostic tools'
      ]
    },
    {
      number: '06',
      title: 'Transition to Recurring & Retainer Models',
      subtitle: 'Transform transactional, unpredictable one-off billings into predictable monthly cash flow.',
      icon: Repeat,
      description: 'Transactional revenue forces you to start at $0 on the first day of every month. Converting project work into subscription-based or retainer-based agreements dramatically stabilizes working capital and multiplies your enterprise valuation multiple upon exit.',
      actionItems: [
        'Identify repeat customer transactions that occur on an annual or quarterly cadence',
        'Structure a monthly advisory membership providing priority access and routine reporting',
        'Automate recurring credit card or pre-authorized debit (PAD) collections via Stripe'
      ]
    },
    {
      number: '07',
      title: 'Pursue Strategic Mergers & Acquisitions (M&A)',
      subtitle: 'Accelerate growth by buying competitor client books, technology, or senior talent.',
      icon: TrendingUp,
      description: 'Inorganic growth allows you to instantly acquire market share, eliminate competitors, and achieve economies of scale. Partner Mark Puri has led numerous M&A transactions, helping business owners navigate letter of intent (LOI) terms, quality of earnings due diligence, and commercial bank debt structuring.',
      actionItems: [
        'Identify retiring business owners in your industry seeking a transition partner',
        'Conduct rigorous financial and tax due diligence to uncover hidden liabilities',
        'Secure commercial bank acquisition financing backed by the target’s recurring cash flows'
      ]
    }
  ];

  const current = STEPS[activeStep];
  const workbookResource = VERIFIED_DOWNLOADS.find(d => d.id === '7-steps-business-growth-workbook') || VERIFIED_DOWNLOADS[2];

  return (
    <div>
      {/* 1. Authentic Subpage Banner */}
      <div className="page-hero-banner">
        <div className="container">
          <div className="badge badge-gold" style={{ marginBottom: '1rem' }}>
            Signature Strategic Framework
          </div>
          <h1>7 Steps to Growing Your Business</h1>
          <p>
            A proven roadmap engineered by entrepreneur-CPAs to increase enterprise valuation, maximize gross margins, and achieve sustainable expansion.
          </p>
          <div style={{ marginTop: '1.75rem' }}>
            <button onClick={() => onOpenLeadModal(workbookResource)} className="btn btn-gold btn-lg">
              <Download size={18} />
              <span>Download the Free 24-Page Action Workbook</span>
            </button>
          </div>
        </div>
      </div>

      {/* 2. Main Framework Interactive Explorer */}
      <section className="section" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'flex-start' }}>
            {/* Step Navigation Sidebar */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              <div style={{ fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', color: 'var(--text-muted)', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>
                Framework Steps
              </div>

              {STEPS.map((step, idx) => {
                const Icon = step.icon;
                const isActive = activeStep === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveStep(idx)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem',
                      padding: '1rem 1.25rem',
                      borderRadius: 'var(--radius-md)',
                      border: isActive ? '2px solid var(--navy-800)' : '1px solid var(--border-light)',
                      backgroundColor: isActive ? 'var(--navy-50)' : '#FFFFFF',
                      cursor: 'pointer',
                      textAlign: 'left',
                      transition: 'all 0.15s ease'
                    }}
                  >
                    <div style={{ fontWeight: 800, fontSize: 'var(--text-base)', color: isActive ? 'var(--navy-800)' : 'var(--text-muted)' }}>
                      {step.number}
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: '13.5px', fontWeight: 700, color: isActive ? 'var(--navy-900)' : 'var(--text-primary)' }}>
                        {step.title}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Step Detail Card */}
            <div className="card" style={{ padding: '3rem', borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-xl)', border: '1px solid var(--border-medium)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <span className="badge badge-teal" style={{ fontSize: '12px' }}>
                  Step {current.number}
                </span>
              </div>

              <h2 style={{ fontSize: 'var(--text-2xl)', color: 'var(--navy-950)', marginBottom: '0.5rem' }}>
                {current.title}
              </h2>

              <p style={{ fontSize: 'var(--text-sm)', fontWeight: 600, color: 'var(--teal-700)', marginBottom: '1.5rem' }}>
                {current.subtitle}
              </p>

              <p style={{ fontSize: 'var(--text-base)', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '2rem' }}>
                {current.description}
              </p>

              <div style={{ backgroundColor: 'var(--surface-alt)', padding: '1.75rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-light)', marginBottom: '2.5rem' }}>
                <div style={{ fontSize: 'var(--text-xs)', fontWeight: 800, textTransform: 'uppercase', color: 'var(--navy-950)', letterSpacing: '0.05em', marginBottom: '1rem' }}>
                  Immediate Action Checklist:
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {current.actionItems.map((act, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                      <CheckCircle2 size={18} color="var(--teal-600)" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span style={{ fontSize: 'var(--text-xs)', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                        {act}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'space-between', alignItems: 'center' }}>
                <Link
                  to="/contact"
                  className="btn btn-primary"
                >
                  <span>Contact Our Office &rarr;</span>
                </Link>

                <button
                  onClick={() => onOpenLeadModal(workbookResource)}
                  className="btn btn-secondary"
                >
                  <Download size={14} />
                  <span>Download Full Workbook (PDF)</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
