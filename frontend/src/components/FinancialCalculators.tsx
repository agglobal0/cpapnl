import React, { useState } from 'react';
import { Calculator, DollarSign, TrendingDown, Percent, ArrowRight, ShieldAlert, Sparkles } from 'lucide-react';
import { trackEvent } from '../services/analytics';

export const FinancialCalculators: React.FC<{ 
  onConsultationClick?: () => void;
  onBookConsultation?: (context?: string) => void;
}> = ({ onConsultationClick, onBookConsultation }) => {
  const handleConsultation = () => {
    if (onConsultationClick) onConsultationClick();
    else if (onBookConsultation) onBookConsultation('Financial Calculator Tab');
  };
  const [activeTab, setActiveTab] = useState<'tax' | 'loan' | 'runway' | 'breakeven'>('tax');

  // Corporate Tax & HST State
  const [annualProfit, setAnnualProfit] = useState<number>(250000);
  const [salesRevenue, setSalesRevenue] = useState<number>(500000);

  // Loan State
  const [loanPrincipal, setLoanPrincipal] = useState<number>(100000);
  const [interestRate, setInterestRate] = useState<number>(6.5);
  const [loanYears, setLoanYears] = useState<number>(5);

  // Runway State
  const [currentCash, setCurrentCash] = useState<number>(150000);
  const [monthlyRevenue, setMonthlyRevenue] = useState<number>(45000);
  const [monthlyExpenses, setMonthlyExpenses] = useState<number>(60000);

  // Break-even State
  const [fixedCosts, setFixedCosts] = useState<number>(120000);
  const [unitPrice, setUnitPrice] = useState<number>(1500);
  const [unitCost, setUnitCost] = useState<number>(600);

  // Calculations
  // 1. Tax Calculation (CCPC Ontario Small Business 12.2% up to $500k, 26.5% general above)
  const calculateCorporateTax = () => {
    let tax = 0;
    const sbdLimit = 500000;
    if (annualProfit <= sbdLimit) {
      tax = annualProfit * 0.122; // 9% fed + 3.2% ON
    } else {
      tax = (sbdLimit * 0.122) + ((annualProfit - sbdLimit) * 0.265);
    }
    const hstCollected = salesRevenue * 0.13; // 13% Ontario HST
    const netRetained = Math.max(0, annualProfit - tax);
    return { tax, hstCollected, netRetained, effectiveRate: annualProfit > 0 ? ((tax / annualProfit) * 100).toFixed(1) : '0' };
  };

  // 2. Loan Amortization Calculation
  const calculateLoan = () => {
    const monthlyRate = interestRate / 100 / 12;
    const totalMonths = loanYears * 12;
    if (monthlyRate === 0) return { monthlyPayment: loanPrincipal / totalMonths, totalInterest: 0 };
    const monthlyPayment = (loanPrincipal * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) / (Math.pow(1 + monthlyRate, totalMonths) - 1);
    const totalInterest = (monthlyPayment * totalMonths) - loanPrincipal;
    return { monthlyPayment, totalInterest };
  };

  // 3. Runway Calculation
  const calculateRunway = () => {
    const netBurn = monthlyExpenses - monthlyRevenue;
    if (netBurn <= 0) return { netBurn: 0, months: 'Cash Flow Positive (Infinite Runway)' };
    const months = (currentCash / netBurn).toFixed(1);
    return { netBurn, months: `${months} Months` };
  };

  // 4. Break-Even Calculation
  const calculateBreakEven = () => {
    const unitContribution = unitPrice - unitCost;
    if (unitContribution <= 0) return { units: 0, revenue: 0, marginRatio: 0 };
    const units = Math.ceil(fixedCosts / unitContribution);
    const revenue = units * unitPrice;
    const marginRatio = ((unitContribution / unitPrice) * 100).toFixed(1);
    return { units, revenue, marginRatio };
  };

  const taxData = calculateCorporateTax();
  const loanData = calculateLoan();
  const runwayData = calculateRunway();
  const breakEvenData = calculateBreakEven();

  return (
    <div className="card" style={{ padding: '0', overflow: 'hidden', border: '1px solid var(--border-medium)', boxShadow: 'var(--shadow-lg)', backgroundColor: '#FFFFFF' }}>
      {/* Navigation Tabs (Classic Royal Navy & Amber Indicators) */}
      <div style={{ display: 'flex', flexWrap: 'wrap', backgroundColor: 'var(--navy-800)', borderBottom: '1px solid rgba(255, 255, 255, 0.12)' }}>
        {[
          { key: 'tax', label: 'Ontario Corporate Tax & HST', icon: Calculator },
          { key: 'runway', label: 'Cash Flow Runway Burn', icon: TrendingDown },
          { key: 'loan', label: 'Equipment & Loan Payment', icon: DollarSign },
          { key: 'breakeven', label: 'Break-Even Analysis', icon: Percent },
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.key;
          return (
            <button
              key={tab.key}
              onClick={() => {
                setActiveTab(tab.key as any);
                trackEvent('calculator_used', { calculator_type: tab.key });
              }}
              style={{
                flex: '1 1 200px',
                padding: '1.1rem 1.25rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.6rem',
                border: 'none',
                background: isActive ? 'rgba(255, 255, 255, 0.15)' : 'transparent',
                color: isActive ? '#FCD34D' : '#E2E8F0',
                fontWeight: isActive ? 700 : 600,
                fontSize: '13px',
                cursor: 'pointer',
                borderBottom: isActive ? '3.5px solid #D97706' : '3.5px solid transparent',
                transition: 'all 0.15s ease'
              }}
            >
              <Icon size={16} />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Calculator Body */}
      <div style={{ padding: '2.5rem' }}>
        {/* Tab 1: Ontario Corporate Tax & HST */}
        {activeTab === 'tax' && (
          <div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2.5rem' }}>
              <div>
                <h3 style={{ fontSize: 'var(--text-xl)', marginBottom: '0.5rem', color: 'var(--navy-900)', fontWeight: 700 }}>
                  Canadian CCPC Corporate Tax Estimator
                </h3>
                <p style={{ fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                  Estimates combined Federal and Ontario small business corporate tax rates (12.2% on active business income up to $500,000, 26.5% general corporate rate thereafter).
                </p>

                <div className="form-group">
                  <label className="form-label" htmlFor="calc-profit">
                    Annual Net Taxable Profit (CAD): <strong style={{ color: 'var(--navy-800)' }}>${annualProfit.toLocaleString()}</strong>
                  </label>
                  <input
                    id="calc-profit"
                    type="range"
                    min="25000"
                    max="1500000"
                    step="25000"
                    value={annualProfit}
                    onChange={(e) => setAnnualProfit(Number(e.target.value))}
                    className="form-input"
                    style={{ padding: '0.25rem', cursor: 'pointer' }}
                  />
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: 'var(--text-muted)' }}>
                    <span>$25k</span>
                    <span>$500k (Small Business Limit)</span>
                    <span>$1.5M+</span>
                  </div>
                </div>

                <div className="form-group" style={{ marginTop: '1.25rem' }}>
                  <label className="form-label" htmlFor="calc-sales">
                    Annual Gross Sales (for Ontario 13% HST): <strong style={{ color: 'var(--navy-800)' }}>${salesRevenue.toLocaleString()}</strong>
                  </label>
                  <input
                    id="calc-sales"
                    type="range"
                    min="50000"
                    max="5000000"
                    step="50000"
                    value={salesRevenue}
                    onChange={(e) => setSalesRevenue(Number(e.target.value))}
                    className="form-input"
                    style={{ padding: '0.25rem', cursor: 'pointer' }}
                  />
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: 'var(--text-muted)' }}>
                    <span>$50k</span>
                    <span>$2.5M</span>
                    <span>$5M+</span>
                  </div>
                </div>
              </div>

              {/* Output Display */}
              <div style={{ backgroundColor: 'var(--surface-alt)', padding: '2rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div className="badge badge-gold" style={{ marginBottom: '1rem', fontSize: '11px' }}>
                    Calculated for Ontario, Canada
                  </div>
                  
                  <div style={{ marginBottom: '1.25rem' }}>
                    <div style={{ fontSize: '12px', color: 'var(--text-muted)', fontWeight: 600 }}>Estimated Corporate Tax Due:</div>
                    <div style={{ fontSize: 'var(--text-3xl)', fontWeight: 800, color: 'var(--navy-900)' }}>
                      ${Math.round(taxData.tax).toLocaleString()} <span style={{ fontSize: 'var(--text-sm)', fontWeight: 700, color: 'var(--gold-600)' }}>({taxData.effectiveRate}% effective)</span>
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', padding: '1rem 0', borderTop: '1px solid var(--border-light)', borderBottom: '1px solid var(--border-light)', marginBottom: '1.25rem' }}>
                    <div>
                      <div style={{ fontSize: '11.5px', color: 'var(--text-muted)' }}>Net Retained in Corp:</div>
                      <div style={{ fontWeight: 700, fontSize: 'var(--text-base)', color: '#15803D' }}>
                        ${Math.round(taxData.netRetained).toLocaleString()}
                      </div>
                    </div>
                    <div>
                      <div style={{ fontSize: '11.5px', color: 'var(--text-muted)' }}>Ontario HST (13% Gross):</div>
                      <div style={{ fontWeight: 700, fontSize: 'var(--text-base)', color: 'var(--navy-900)' }}>
                        ${Math.round(taxData.hstCollected).toLocaleString()}
                      </div>
                    </div>
                  </div>

                  <p style={{ fontSize: '11px', color: 'var(--text-muted)', lineHeight: '1.4' }}>
                    *Note: Does not account for Input Tax Credits (ITCs), SR&amp;ED tax credits, or shareholder dividend gross-ups. Consult Puri &amp; Loggia LLP for personalized corporate structuring.
                  </p>
                </div>

                <button
                  onClick={handleConsultation}
                  className="btn btn-primary btn-sm"
                  style={{ marginTop: '1.5rem', width: '100%', justifyContent: 'center' }}
                >
                  <span>Discuss Tax Optimization with a CPA &rarr;</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Cash Flow Runway */}
        {activeTab === 'runway' && (
          <div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2.5rem' }}>
              <div>
                <h3 style={{ fontSize: 'var(--text-xl)', marginBottom: '0.5rem', color: 'var(--navy-900)', fontWeight: 700 }}>
                  13-Week Cash Flow Runway Estimator
                </h3>
                <p style={{ fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                  Determine exactly how many months of operational runway your company has before requiring additional debt, capital, or expense restructuring.
                </p>

                <div className="form-group">
                  <label className="form-label" htmlFor="calc-cash">Current Bank Cash Balance ($ CAD)</label>
                  <input
                    id="calc-cash"
                    type="number"
                    className="form-input"
                    value={currentCash}
                    onChange={(e) => setCurrentCash(Math.max(0, Number(e.target.value)))}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="calc-mrev">Average Monthly Cash Inflows ($ CAD)</label>
                  <input
                    id="calc-mrev"
                    type="number"
                    className="form-input"
                    value={monthlyRevenue}
                    onChange={(e) => setMonthlyRevenue(Math.max(0, Number(e.target.value)))}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="calc-mexp">Average Monthly Operating Expenses ($ CAD)</label>
                  <input
                    id="calc-mexp"
                    type="number"
                    className="form-input"
                    value={monthlyExpenses}
                    onChange={(e) => setMonthlyExpenses(Math.max(0, Number(e.target.value)))}
                  />
                </div>
              </div>

              <div style={{ backgroundColor: 'var(--surface-alt)', padding: '2rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div className="badge badge-gold" style={{ marginBottom: '1rem', fontSize: '11px' }}>
                    Cash Horizon Forecast
                  </div>

                  <div style={{ marginBottom: '1.25rem' }}>
                    <div style={{ fontSize: '12px', color: 'var(--text-muted)', fontWeight: 600 }}>Estimated Runway:</div>
                    <div style={{ fontSize: 'var(--text-3xl)', fontWeight: 800, color: 'var(--navy-900)' }}>
                      {runwayData.months}
                    </div>
                  </div>

                  <div style={{ padding: '1rem 0', borderTop: '1px solid var(--border-light)', borderBottom: '1px solid var(--border-light)', marginBottom: '1.25rem' }}>
                    <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Net Monthly Cash Burn Rate:</div>
                    <div style={{ fontWeight: 700, fontSize: 'var(--text-xl)', color: runwayData.netBurn > 0 ? '#DC2626' : '#15803D' }}>
                      ${runwayData.netBurn.toLocaleString()} / month
                    </div>
                  </div>

                  <p style={{ fontSize: '11px', color: 'var(--text-muted)' }}>
                    A healthy business maintains a minimum of 3 to 6 months of liquid operating runway. Mark Puri builds dynamic 13-week weekly models for growing firms.
                  </p>
                </div>

                <button
                  onClick={handleConsultation}
                  className="btn btn-primary btn-sm"
                  style={{ marginTop: '1.5rem', width: '100%', justifyContent: 'center' }}
                >
                  <span>Request a 13-Week Cash Model &rarr;</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Equipment Loan Amortization */}
        {activeTab === 'loan' && (
          <div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2.5rem' }}>
              <div>
                <h3 style={{ fontSize: 'var(--text-xl)', marginBottom: '0.5rem', color: 'var(--navy-900)', fontWeight: 700 }}>
                  Equipment &amp; Term Loan Amortization
                </h3>
                <p style={{ fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                  Model monthly debt payments and total interest for capital equipment purchases or commercial bank term facilities.
                </p>

                <div className="form-group">
                  <label className="form-label" htmlFor="calc-principal">Loan Principal Amount ($ CAD)</label>
                  <input
                    id="calc-principal"
                    type="number"
                    className="form-input"
                    value={loanPrincipal}
                    onChange={(e) => setLoanPrincipal(Math.max(1000, Number(e.target.value)))}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="calc-rate">Annual Interest Rate (%)</label>
                  <input
                    id="calc-rate"
                    type="number"
                    step="0.1"
                    className="form-input"
                    value={interestRate}
                    onChange={(e) => setInterestRate(Math.max(0, Number(e.target.value)))}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="calc-years">Amortization Period (Years)</label>
                  <select
                    id="calc-years"
                    className="form-select"
                    value={loanYears}
                    onChange={(e) => setLoanYears(Number(e.target.value))}
                  >
                    <option value={1}>1 Year (12 Months)</option>
                    <option value={3}>3 Years (36 Months)</option>
                    <option value={5}>5 Years (60 Months)</option>
                    <option value={7}>7 Years (84 Months)</option>
                    <option value={10}>10 Years (120 Months)</option>
                  </select>
                </div>
              </div>

              <div style={{ backgroundColor: 'var(--surface-alt)', padding: '2rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div className="badge badge-gold" style={{ marginBottom: '1rem', fontSize: '11px' }}>
                    Debt Service Summary
                  </div>

                  <div style={{ marginBottom: '1.25rem' }}>
                    <div style={{ fontSize: '12px', color: 'var(--text-muted)', fontWeight: 600 }}>Estimated Monthly Payment:</div>
                    <div style={{ fontSize: 'var(--text-3xl)', fontWeight: 800, color: 'var(--navy-900)' }}>
                      ${Math.round(loanData.monthlyPayment).toLocaleString()} <span style={{ fontSize: 'var(--text-xs)', fontWeight: 500, color: 'var(--text-muted)' }}>/ month</span>
                    </div>
                  </div>

                  <div style={{ padding: '1rem 0', borderTop: '1px solid var(--border-light)', borderBottom: '1px solid var(--border-light)', marginBottom: '1.25rem' }}>
                    <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Total Cumulative Interest:</div>
                    <div style={{ fontWeight: 700, fontSize: 'var(--text-xl)', color: 'var(--gold-600)' }}>
                      ${Math.round(loanData.totalInterest).toLocaleString()} CAD
                    </div>
                  </div>

                  <p style={{ fontSize: '11px', color: 'var(--text-muted)' }}>
                    Eligible capital equipment may qualify for accelerated Capital Cost Allowance (CCA) tax write-offs in Year 1.
                  </p>
                </div>

                <button
                  onClick={handleConsultation}
                  className="btn btn-primary btn-sm"
                  style={{ marginTop: '1.5rem', width: '100%', justifyContent: 'center' }}
                >
                  <span>Discuss Bank Financing Structuring &rarr;</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Tab 4: Break-Even Analysis */}
        {activeTab === 'breakeven' && (
          <div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2.5rem' }}>
              <div>
                <h3 style={{ fontSize: 'var(--text-xl)', marginBottom: '0.5rem', color: 'var(--navy-900)', fontWeight: 700 }}>
                  Unit Economics &amp; Break-Even Analysis
                </h3>
                <p style={{ fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                  Calculate exactly how many units, client retainers, or projects you need to deliver to cover total fixed overhead costs.
                </p>

                <div className="form-group">
                  <label className="form-label" htmlFor="calc-fixed">Annual Fixed Overhead ($ CAD)</label>
                  <input
                    id="calc-fixed"
                    type="number"
                    className="form-input"
                    value={fixedCosts}
                    onChange={(e) => setFixedCosts(Math.max(0, Number(e.target.value)))}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="calc-uprice">Average Revenue Per Unit / Project ($ CAD)</label>
                  <input
                    id="calc-uprice"
                    type="number"
                    className="form-input"
                    value={unitPrice}
                    onChange={(e) => setUnitPrice(Math.max(1, Number(e.target.value)))}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="calc-ucost">Variable Cost Per Unit / Project ($ CAD)</label>
                  <input
                    id="calc-ucost"
                    type="number"
                    className="form-input"
                    value={unitCost}
                    onChange={(e) => setUnitCost(Math.max(0, Number(e.target.value)))}
                  />
                </div>
              </div>

              <div style={{ backgroundColor: 'var(--surface-alt)', padding: '2rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div className="badge badge-gold" style={{ marginBottom: '1rem', fontSize: '11px' }}>
                    Break-Even Targets
                  </div>

                  <div style={{ marginBottom: '1.25rem' }}>
                    <div style={{ fontSize: '12px', color: 'var(--text-muted)', fontWeight: 600 }}>Break-Even Unit Volume:</div>
                    <div style={{ fontSize: 'var(--text-3xl)', fontWeight: 800, color: 'var(--navy-900)' }}>
                      {breakEvenData.units.toLocaleString()} <span style={{ fontSize: 'var(--text-xs)', fontWeight: 500, color: 'var(--text-muted)' }}>units / projects</span>
                    </div>
                  </div>

                  <div style={{ padding: '1rem', backgroundColor: '#FFFFFF', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-light)', marginBottom: '1.25rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '12px' }}>
                      <span style={{ color: 'var(--text-muted)' }}>Break-Even Revenue:</span>
                      <strong style={{ color: 'var(--navy-900)' }}>${breakEvenData.revenue.toLocaleString()} CAD</strong>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px' }}>
                      <span style={{ color: 'var(--text-muted)' }}>Contribution Margin Ratio:</span>
                      <strong style={{ color: 'var(--gold-600)' }}>{breakEvenData.marginRatio}%</strong>
                    </div>
                  </div>

                  <p style={{ fontSize: '11px', color: 'var(--text-muted)' }}>
                    Contribution margin measures the percentage of each dollar earned that contributes to paying down fixed overhead.
                  </p>
                </div>

                <button
                  onClick={handleConsultation}
                  className="btn btn-primary btn-sm"
                  style={{ marginTop: '1.5rem', width: '100%', justifyContent: 'center' }}
                >
                  <span>Optimize Your Pricing Model &rarr;</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
