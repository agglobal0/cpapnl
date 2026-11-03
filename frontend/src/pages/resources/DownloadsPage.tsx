import React from 'react';
import { Download, FileText, CheckCircle2 } from 'lucide-react';
import { VERIFIED_DOWNLOADS } from '../../services/api';

export const DownloadsPage: React.FC<{ onOpenLeadModal: (res: any) => void }> = ({ onOpenLeadModal }) => {
  return (
    <div>
      {/* 1. Authentic Subpage Banner */}
      <div className="page-hero-banner">
        <div className="container">
          <div className="badge badge-gold" style={{ marginBottom: '1rem' }}>
            Free Practice Toolkits
          </div>
          <h1>Checklists, Templates &amp; Downloads</h1>
          <p>
            Download the battle-tested financial models, year-end tax preparation checklists, and business growth workbooks used by Puri &amp; Loggia LLP.
          </p>
        </div>
      </div>

      {/* 2. Main Downloads Grid */}
      <section className="section" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
            {VERIFIED_DOWNLOADS.map(res => (
              <div 
                key={res.id} 
                className="card card-accent-top"
                style={{ 
                  borderRadius: 'var(--radius-md)', 
                  padding: '2.25rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  backgroundColor: '#FFFFFF'
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                    <span className="badge badge-gold">{res.format}</span>
                    <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{res.pagesOrSize}</span>
                  </div>

                  <h3 style={{ fontSize: 'var(--text-xl)', color: 'var(--navy-900)', marginBottom: '0.75rem', fontWeight: 700 }}>
                    {res.title}
                  </h3>

                  <p style={{ fontSize: '13.5px', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                    {res.description}
                  </p>
                </div>

                <div style={{ paddingTop: '1.5rem', borderTop: '1px solid var(--border-light)' }}>
                  <button 
                    onClick={() => onOpenLeadModal(res)}
                    className="btn btn-primary"
                    style={{ width: '100%', justifyContent: 'center' }}
                  >
                    <Download size={16} />
                    <span>Download Free Toolkit &rarr;</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
