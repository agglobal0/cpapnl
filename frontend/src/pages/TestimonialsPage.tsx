import React from 'react';
import { Link } from 'react-router-dom';
import { VERIFIED_TESTIMONIALS } from '../services/api';
import { ShieldCheck, Calendar, ArrowRight, Star } from 'lucide-react';

export const TestimonialsPage: React.FC<{ onBookConsultation?: (context?: string) => void }> = () => {
  return (
    <div>
      {/* 1. Authentic Subpage Banner */}
      <div className="page-hero-banner">
        <div className="container">
          <div className="badge badge-gold" style={{ marginBottom: '1rem' }}>
            Verified Client Feedback
          </div>
          <h1>Client Stories &amp; Testimonials</h1>
          <p>
            In accordance with CPA Ontario professional standards, we publish verified feedback from founders and executives who partner with Puri &amp; Loggia LLP.
          </p>
        </div>
      </div>

      {/* 2. Main Testimonials Grid */}
      <section className="section" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem', marginBottom: '4rem' }}>
            {VERIFIED_TESTIMONIALS.map(t => (
              <div 
                key={t.id}
                className="card card-accent-top"
                style={{ 
                  borderRadius: 'var(--radius-md)', 
                  padding: '2.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  backgroundColor: '#FFFFFF'
                }}
              >
                <div>
                  <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '1.25rem' }}>
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} size={18} fill="#D97706" color="#D97706" />
                    ))}
                  </div>
                  <p style={{ fontSize: '15px', color: 'var(--navy-950)', fontStyle: 'italic', lineHeight: 1.7, marginBottom: '2rem' }}>
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                <div style={{ paddingTop: '1.25rem', borderTop: '1px solid var(--border-light)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <div style={{ fontWeight: 800, fontSize: 'var(--text-base)', color: 'var(--navy-900)' }}>{t.authorName}</div>
                    <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{t.role} &bull; {t.companyName}</div>
                  </div>
                  <span className="badge badge-gold" style={{ fontSize: '10px' }}>
                    Verified
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', padding: '3.5rem', backgroundColor: 'var(--navy-900)', borderRadius: 'var(--radius-lg)', color: '#FFFFFF' }}>
            <h3 style={{ fontSize: 'var(--text-2xl)', color: '#FFFFFF', marginBottom: '1rem', fontWeight: 800 }}>
              Experience the Puri &amp; Loggia Difference
            </h3>
            <p style={{ fontSize: 'var(--text-base)', color: '#E2E8F0', maxWidth: '600px', margin: '0 auto 2rem', lineHeight: 1.6 }}>
              Join forward-thinking Canadian founders who rely on our practice for immaculate bookkeeping, strategic corporate taxation, and fractional CFO guidance.
            </p>
            <Link to="/contact" className="btn btn-gold btn-lg">
              <span>Contact Our Team &rarr;</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
