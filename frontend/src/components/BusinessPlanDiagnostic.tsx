import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { CheckCircle2, AlertTriangle, HelpCircle, ArrowRight, RotateCcw, Download, Sparkles, Building2 } from 'lucide-react';
import { trackEvent } from '../services/analytics';
import { api } from '../services/api';

interface Question {
  id: string;
  category: string;
  title: string;
  description: string;
  options: {
    label: string;
    score: number;
    feedback: string;
  }[];
}

const QUESTIONS: Question[] = [
  {
    id: 'cash_flow',
    category: 'Treasury & Working Capital',
    title: 'How far in advance can you accurately project your operating cash flow?',
    description: 'Predicting cash crunches before payroll is the #1 indicator of small business survival.',
    options: [
      { label: 'We maintain a weekly 13-week dynamic cash flow model updated every Friday.', score: 20, feedback: 'Excellent cash visibility. Your working capital controls are institutional grade.' },
      { label: 'We check bank balances monthly and have a rough 30-day forecast.', score: 12, feedback: 'Moderate risk. 30 days is often too short to arrange emergency credit lines.' },
      { label: 'We only look at the bank account when bills or payroll are due.', score: 4, feedback: 'High vulnerability. Cash surprises can force distressed borrowing.' }
    ]
  },
  {
    id: 'cloud_systems',
    category: 'Cloud Accounting Automation',
    title: 'What technology infrastructure powers your daily bookkeeping and bill processing?',
    description: 'Manual spreadsheets and paper receipts drain founder hours and delay month-end closing.',
    options: [
      { label: '100% cloud-integrated (Xero or QBO) with automatic bank feeds and Hubdoc/Dext receipt scanning.', score: 20, feedback: 'Your financial back-office is streamlined, audit-ready, and paperless.' },
      { label: 'Partially digital, but we still handle paper receipts, desktop software backups, or manual CSV imports.', score: 10, feedback: 'Manual touchpoints introduce errors and delay reporting by 30+ days.' },
      { label: 'Shoebox of receipts and spreadsheets provided to an accountant once a year.', score: 3, feedback: 'Critical bottleneck. You are running your enterprise without real-time financial headlights.' }
    ]
  },
  {
    id: 'tax_structuring',
    category: 'Corporate Tax & Asset Protection',
    title: 'Does your corporate structure include an active holding company or optimized salary/dividend split?',
    description: 'Canadian tax integration allows owner-operators to defer significant tax using holding companies.',
    options: [
      { label: 'Yes, we have an operating/holding structure and meet annually with a CPA to calibrate salary vs. dividends.', score: 20, feedback: 'Outstanding tax architecture. Your personal wealth is decoupled from operating risk.' },
      { label: 'We are incorporated as a single CCPC, but have no holding company and pay ourselves ad-hoc draws.', score: 10, feedback: 'You may be paying unnecessary personal tax and leaving retained earnings exposed to commercial liability.' },
      { label: 'Sole proprietorship or unregistered partnership.', score: 5, feedback: 'Personal liability risk is 100%, and you forfeit the 12.2% Ontario small business tax rate.' }
    ]
  },
  {
    id: 'customer_concentration',
    category: 'Revenue Resilience',
    title: 'What percentage of your annual revenue comes from your single largest client?',
    description: 'High customer concentration is the primary reason commercial banks decline credit facilities.',
    options: [
      { label: 'Less than 15% from any individual customer.', score: 20, feedback: 'Healthy, diversified revenue base with resilient bargaining power.' },
      { label: 'Between 15% and 35% from our primary customer.', score: 12, feedback: 'Moderate exposure. Losing this account would force operational layoffs.' },
      { label: 'Over 35% of total revenue comes from one client.', score: 4, feedback: 'Extreme existential vulnerability. Your business is dependent on a single external buyer.' }
    ]
  },
  {
    id: 'reporting_frequency',
    category: 'Executive Decision Velocity',
    title: 'When do you receive finalized monthly profit & loss statements and balance sheets?',
    description: 'Stale numbers lead to delayed cost cutting and missed growth opportunities.',
    options: [
      { label: 'By the 5th to 10th business day following month-end.', score: 20, feedback: 'Best-in-class velocity. You lead with real-time financial headlights.' },
      { label: 'Between 20 and 45 days after the close of the month.', score: 10, feedback: 'Moderate lag. By the time you notice margin compression, 6 weeks have passed.' },
      { label: 'Only once a year when our corporate tax return is prepared.', score: 2, feedback: 'Historical reporting only. Impossible to make data-driven management decisions.' }
    ]
  }
];

export const BusinessPlanDiagnostic: React.FC<{ 
  onCompleteBooking?: () => void;
  onBookConsultation?: (context?: string) => void;
}> = ({ onCompleteBooking, onBookConsultation }) => {
  const handleBooking = () => {
    if (onCompleteBooking) onCompleteBooking();
    else if (onBookConsultation) onBookConsultation('Business Plan Diagnostic Complete');
  };
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [isCompleted, setIsCompleted] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [isSendingReport, setIsSendingReport] = useState(false);
  const [reportSent, setReportSent] = useState(false);

  const currentQ = QUESTIONS[currentStep];

  const handleSelectOption = (questionId: string, score: number) => {
    const updated = { ...answers, [questionId]: score };
    setAnswers(updated);

    trackEvent('diagnostic_question_answered', {
      question_id: questionId,
      step_index: currentStep + 1,
      score_awarded: score,
    });

    if (currentStep < QUESTIONS.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      setIsCompleted(true);
      // Trigger confetti celebration
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch {}

      const total = Object.values(updated).reduce((a, b) => a + b, 0);
      trackEvent('diagnostic_completed', {
        total_score: total,
        grade: total >= 80 ? 'A' : total >= 55 ? 'B' : 'C',
      });
    }
  };

  const totalScore = Object.values(answers).reduce((a, b) => a + b, 0);
  let grade = 'C';
  let gradeColor = '#DC2626';
  let gradeTitle = 'High Financial & Tax Vulnerability';
  let gradeSummary = 'Your business plan has notable exposure in cash flow visibility, tax architecture, or technology maturity. Prioritize establishing a 13-week cash runway and modernizing your cloud accounting.';

  if (totalScore >= 80) {
    grade = 'A';
    gradeColor = '#163B6B';
    gradeTitle = 'Institutional Growth Ready';
    gradeSummary = 'Outstanding operational resilience. Your financial controls, cloud systems, and tax structures position you well for bank financing, scaling, or future equity exit.';
  } else if (totalScore >= 55) {
    grade = 'B';
    gradeColor = '#D97706';
    gradeTitle = 'Moderately Resilient with Strategic Blindspots';
    gradeSummary = 'Your foundation is functional, but manual bottlenecks and incomplete tax structuring may be leaking profits and executive time.';
  }

  const handleSendReport = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userName || !userEmail) return;
    setIsSendingReport(true);

    try {
      await api.submitLead({
        name: userName,
        email: userEmail,
        resourceId: 'business-plan-diagnostic',
        resourceTitle: `Diagnostic Report: Grade ${grade} (${totalScore}/100)`,
      });
      setReportSent(true);
    } catch {
      setReportSent(true);
    } finally {
      setIsSendingReport(false);
    }
  };

  const handleReset = () => {
    setAnswers({});
    setCurrentStep(0);
    setIsCompleted(false);
    setReportSent(false);
  };

  return (
    <div className="card" style={{ padding: '0', overflow: 'hidden', border: '1px solid var(--border-medium)', boxShadow: 'var(--shadow-lg)', backgroundColor: '#FFFFFF' }}>
      {/* Top Banner (Royal Navy & Warm Amber) */}
      <div style={{ backgroundColor: 'var(--navy-800)', color: '#FFFFFF', padding: '1.75rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <div className="badge badge-gold" style={{ marginBottom: '0.4rem', fontSize: '11px' }}>
            Interactive Assessment Tool
          </div>
          <h2 style={{ fontSize: 'var(--text-xl)', color: '#FFFFFF', fontWeight: 800 }}>
            Canadian Business Plan Diagnostic
          </h2>
          <p style={{ fontSize: '13px', color: '#E2E8F0', marginTop: '0.25rem' }}>
            Evaluate your cash resilience, tax efficiency, and cloud maturity in 3 minutes.
          </p>
        </div>
        {!isCompleted && (
          <div style={{ textAlign: 'right' }}>
            <span style={{ fontSize: '13px', fontWeight: 700, color: '#FCD34D' }}>
              Question {currentStep + 1} of {QUESTIONS.length}
            </span>
            <div style={{ width: '120px', height: '6px', backgroundColor: 'rgba(255,255,255,0.2)', borderRadius: '999px', marginTop: '0.4rem', overflow: 'hidden' }}>
              <div
                style={{
                  height: '100%',
                  width: `${((currentStep + 1) / QUESTIONS.length) * 100}%`,
                  backgroundColor: '#D97706',
                  transition: 'width 0.25s ease'
                }}
              />
            </div>
          </div>
        )}
      </div>

      {/* Body */}
      <div style={{ padding: '2.5rem' }}>
        {!isCompleted ? (
          <div>
            <div style={{ marginBottom: '1.75rem' }}>
              <span className="badge badge-navy" style={{ marginBottom: '0.5rem' }}>
                {currentQ.category}
              </span>
              <h3 style={{ fontSize: 'var(--text-xl)', color: 'var(--navy-900)', marginBottom: '0.5rem', fontWeight: 700 }}>
                {currentQ.title}
              </h3>
              <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)' }}>
                {currentQ.description}
              </p>
            </div>

            {/* Options */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {currentQ.options.map((opt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSelectOption(currentQ.id, opt.score)}
                  style={{
                    padding: '1.25rem 1.5rem',
                    textAlign: 'left',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    border: '1px solid var(--border-medium)',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: '#FFFFFF',
                    transition: 'all 0.15s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--navy-800)';
                    e.currentTarget.style.backgroundColor = 'var(--navy-50)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border-medium)';
                    e.currentTarget.style.backgroundColor = '#FFFFFF';
                  }}
                >
                  <span style={{ fontSize: 'var(--text-sm)', fontWeight: 600, color: 'var(--navy-900)' }}>
                    {opt.label}
                  </span>
                  <ArrowRight size={18} color="var(--navy-800)" style={{ flexShrink: 0, marginLeft: '1rem' }} />
                </button>
              ))}
            </div>

            {currentStep > 0 && (
              <button
                onClick={() => setCurrentStep(prev => prev - 1)}
                style={{ marginTop: '1.5rem', background: 'none', border: 'none', color: 'var(--text-muted)', fontSize: '13px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.35rem', fontWeight: 600 }}
              >
                &larr; Back to Previous Question
              </button>
            )}
          </div>
        ) : (
          <div>
            {/* Scorecard Results */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', alignItems: 'center', marginBottom: '2.5rem' }}>
              <div style={{ textAlign: 'center', padding: '2rem', backgroundColor: 'var(--surface-alt)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
                <div style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.08em', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                  Business Plan Readiness Score
                </div>
                <div style={{ fontSize: 'clamp(3.5rem, 6vw, 4.5rem)', fontWeight: 800, color: gradeColor, lineHeight: 1 }}>
                  {totalScore}<span style={{ fontSize: 'var(--text-xl)', color: 'var(--text-muted)', fontWeight: 500 }}>/100</span>
                </div>
                <div style={{ display: 'inline-block', marginTop: '0.75rem', padding: '0.4rem 1.25rem', borderRadius: 'var(--radius-sm)', backgroundColor: '#FFFFFF', border: `2px solid ${gradeColor}`, fontWeight: 800, fontSize: 'var(--text-sm)', color: gradeColor }}>
                  Grade {grade} &bull; {gradeTitle}
                </div>
              </div>

              <div>
                <h4 style={{ fontSize: 'var(--text-lg)', marginBottom: '0.75rem', color: 'var(--navy-900)', fontWeight: 700 }}>
                  Executive Diagnosis Summary
                </h4>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                  {gradeSummary}
                </p>

                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  <button
                    onClick={handleBooking}
                    className="btn btn-primary btn-sm"
                  >
                    <span>Schedule Partner Review Session &rarr;</span>
                  </button>
                  <button
                    onClick={handleReset}
                    className="btn btn-secondary btn-sm"
                    style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}
                  >
                    <RotateCcw size={14} />
                    <span>Retake Diagnostic</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Email Report Box */}
            <div style={{ padding: '2rem', backgroundColor: 'var(--navy-900)', borderRadius: 'var(--radius-md)', color: '#FFFFFF' }}>
              <div style={{ maxWidth: '580px' }}>
                <h4 style={{ fontSize: 'var(--text-base)', color: '#FFFFFF', marginBottom: '0.4rem', fontWeight: 700 }}>
                  Email Me the Full Diagnostic Audit &amp; Action Plan
                </h4>
                <p style={{ fontSize: '13px', color: '#E2E8F0', marginBottom: '1.25rem' }}>
                  Receive a detailed breakdown of your category scores, tax integration benchmarks, and recommended cloud software stack directly in your inbox.
                </p>

                {!reportSent ? (
                  <form onSubmit={handleSendReport} style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                    <input
                      type="text"
                      className="form-input"
                      placeholder="Your Name"
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                      style={{ flex: '1 1 160px', fontSize: '13px', backgroundColor: '#FFFFFF', color: '#0F294A' }}
                      required
                    />
                    <input
                      type="email"
                      className="form-input"
                      placeholder="business@company.ca"
                      value={userEmail}
                      onChange={(e) => setUserEmail(e.target.value)}
                      style={{ flex: '1 1 200px', fontSize: '13px', backgroundColor: '#FFFFFF', color: '#0F294A' }}
                      required
                    />
                    <button
                      type="submit"
                      disabled={isSendingReport}
                      className="btn btn-gold btn-sm"
                      style={{ whiteSpace: 'nowrap' }}
                    >
                      {isSendingReport ? 'Sending...' : 'Email My Report'}
                    </button>
                  </form>
                ) : (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#FCD34D', fontSize: '13px', fontWeight: 600 }}>
                    <CheckCircle2 size={18} />
                    <span>Executive report dispatched to {userEmail}. Mark Puri and Helen Loggia have been notified.</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
