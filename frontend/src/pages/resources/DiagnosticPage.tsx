import React from 'react';
import { BusinessPlanDiagnostic } from '../../components/BusinessPlanDiagnostic';

export const DiagnosticPage: React.FC<{ onBookConsultation: (context?: string) => void }> = ({ onBookConsultation }) => {
  return (
    <div>
      <section className="section section-dark" style={{ background: 'linear-gradient(175deg, #060B14 0%, #0B132B 100%)', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="badge badge-dark-teal" style={{ marginBottom: '1rem' }}>
            Interactive Diagnostic Tool
          </div>
          <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', color: '#FFFFFF', marginBottom: '1.25rem' }}>
            Canadian Business Plan Diagnostic
          </h1>
          <p style={{ fontSize: 'var(--text-lg)', color: 'var(--text-light-secondary)', lineHeight: 1.6 }}>
            Evaluate your working capital runway, customer concentration, tax architecture, and cloud automation to receive an immediate readiness score and tailored recommendations.
          </p>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: 'var(--surface-base)' }}>
        <div className="container" style={{ maxWidth: '960px' }}>
          <BusinessPlanDiagnostic onBookConsultation={() => onBookConsultation('Diagnostic Page')} />
        </div>
      </section>
    </div>
  );
};
