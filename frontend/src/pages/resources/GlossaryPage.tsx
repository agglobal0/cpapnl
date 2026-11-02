import React, { useState } from 'react';
import { Search, BookOpen, ArrowRight } from 'lucide-react';
import { GLOSSARY_TERMS } from '../../services/api';

export const GlossaryPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLetter, setSelectedLetter] = useState<string>('ALL');

  const alphabet = ['ALL', ...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')];

  const filtered = GLOSSARY_TERMS.filter(item => {
    const matchesSearch = item.term.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          item.definition.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLetter = selectedLetter === 'ALL' || item.term.toUpperCase().startsWith(selectedLetter);
    return matchesSearch && matchesLetter;
  });

  return (
    <div>
      {/* 1. Authentic Subpage Banner */}
      <div className="page-hero-banner">
        <div className="container">
          <div className="badge badge-gold" style={{ marginBottom: '1rem' }}>
            Reference Dictionary
          </div>
          <h1>Canadian Business &amp; Accounting Glossary</h1>
          <p>
            Plain-English explanations of key Canadian tax, corporate accounting, CRA compliance forms, and financial statement terminology.
          </p>

          <div style={{ maxWidth: '540px', margin: '2rem auto 0', position: 'relative' }}>
            <Search size={18} color="#94A3B8" style={{ position: 'absolute', left: '1.25rem', top: '50%', transform: 'translateY(-50%)' }} />
            <input
              type="text"
              className="form-input"
              placeholder="Search terminology (e.g., CCPC, LCGE, Accrual)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ paddingLeft: '3rem', borderRadius: 'var(--radius-full)', backgroundColor: '#FFFFFF', color: '#0F294A', fontSize: '14px', border: '1px solid #CBD5E1' }}
            />
          </div>
        </div>
      </div>

      {/* 2. Main Glossary Directory */}
      <section className="section" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container">
          {/* Alphabet Bar */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', justifyContent: 'center', marginBottom: '3.5rem' }}>
            {alphabet.map(letter => (
              <button
                key={letter}
                onClick={() => setSelectedLetter(letter)}
                style={{
                  width: letter === 'ALL' ? '48px' : '36px',
                  height: '36px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 'var(--radius-xs)',
                  border: selectedLetter === letter ? '1.5px solid var(--navy-800)' : '1px solid var(--border-light)',
                  backgroundColor: selectedLetter === letter ? 'var(--navy-800)' : '#FFFFFF',
                  color: selectedLetter === letter ? '#FFFFFF' : 'var(--navy-900)',
                  fontWeight: 700,
                  fontSize: '12px',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease'
                }}
              >
                {letter}
              </button>
            ))}
          </div>

          {/* Terms Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {filtered.map((item, idx) => (
              <div 
                key={idx}
                className="card card-accent-top"
                style={{
                  padding: '2rem',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: '#FFFFFF',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                    <BookOpen size={16} color="var(--gold-500)" />
                    <h3 style={{ fontSize: 'var(--text-lg)', color: 'var(--navy-900)', fontWeight: 700 }}>
                      {item.term}
                    </h3>
                  </div>
                  <p style={{ fontSize: '13.5px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                    {item.definition}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div style={{ textAlign: 'center', padding: '4rem 0', color: 'var(--text-muted)' }}>
              <p>No terms found matching "{searchTerm}". Try another search keyword.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
