import React from 'react';
import { FinancialCalculators } from '../../components/FinancialCalculators';

export const CalculatorsPage: React.FC<{ onBookConsultation: (context?: string) => void }> = ({ onBookConsultation }) => {
  return (
    <div>
      <section className="section section-dark" style={{ background: 'linear-gradient(175deg, #060B14 0%, #0B132B 100%)', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="badge badge-gold" style={{ marginBottom: '1rem' }}>
            Interactive Financial Modeling Tools
          </div>
          <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', color: '#FFFFFF', marginBottom: '1.25rem' }}>
            Canadian Business Calculators
          </h1>
          <p style={{ fontSize: 'var(--text-lg)', color: 'var(--text-light-secondary)', lineHeight: 1.6 }}>
            Accurate, interactive modeling for Ontario small business corporate taxes, commercial loan amortizations, break-even unit volumes, and cash flow runway depletion.
          </p>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: 'var(--surface-base)' }}>
        <div className="container" style={{ maxWidth: '1040px' }}>
          <FinancialCalculators onBookConsultation={() => onBookConsultation('Calculators Page')} />
        </div>
      </section>
    </div>
  );
};
