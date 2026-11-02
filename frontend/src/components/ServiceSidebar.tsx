import React, { useState } from 'react';
import { CheckCircle2, Award } from 'lucide-react';
import { api } from '../services/api';
import { trackEvent } from '../services/analytics';

interface ServiceSidebarProps {
  pageContext?: string;
  onBookConsultation?: (context?: string) => void;
}

export const ServiceSidebar: React.FC<ServiceSidebarProps> = ({ 
  pageContext = 'Service Page'
}) => {
  // 7 Steps Lead Form State
  const [leadFirstName, setLeadFirstName] = useState('');
  const [leadLastName, setLeadLastName] = useState('');
  const [leadEmail, setLeadEmail] = useState('');
  const [leadSubmitting, setLeadSubmitting] = useState(false);
  const [leadSuccess, setLeadSuccess] = useState(false);
  const [leadError, setLeadError] = useState('');

  const handleLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!leadEmail) return;

    setLeadSubmitting(true);
    setLeadError('');
    try {
      await api.submitLead({
        name: `${leadFirstName} ${leadLastName}`.trim(),
        email: leadEmail,
        resourceId: '7-steps-to-growing-your-business',
        resourceTitle: '7 Steps to Growing Your Business Course'
      });
      setLeadSuccess(true);
      trackEvent('lead_magnet_download', { resource: '7-steps-course', source: pageContext });
    } catch {
      setLeadSuccess(true);
    } finally {
      setLeadSubmitting(false);
    }
  };

  return (
    <aside style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {/* Widget 1: 7 Steps to Growing Your Business */}
      <div 
        style={{
          backgroundColor: '#FFFFFF',
          border: '1px solid var(--border-light)',
          borderRadius: '4px',
          boxShadow: 'var(--shadow-sm)',
          overflow: 'hidden'
        }}
      >
        <div 
          style={{
            backgroundColor: 'var(--navy-900)',
            color: '#FFFFFF',
            padding: '1.25rem 1.5rem',
            borderBottom: '3px solid var(--gold-500)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
            <Award size={18} color="var(--gold-400)" />
            <h3 style={{ margin: 0, fontSize: '17px', fontWeight: 700, color: '#FFFFFF', letterSpacing: '-0.01em' }}>
              7 Steps to growing your business
            </h3>
          </div>
          <p style={{ margin: '0.4rem 0 0', fontSize: '13px', color: 'rgba(255,255,255,0.85)', lineHeight: 1.45 }}>
            Enter your details below and sign up for our seven-day course full of useful tips on growing your business.
          </p>
        </div>

        <div style={{ padding: '1.5rem' }}>
          {leadSuccess ? (
            <div style={{ padding: '1.25rem', backgroundColor: '#F0FDF4', border: '1px solid #86EFAC', borderRadius: '4px', textAlign: 'center' }}>
              <CheckCircle2 size={28} color="#16A34A" style={{ margin: '0 auto 0.5rem' }} />
              <div style={{ fontWeight: 700, color: '#166534', fontSize: '14px', marginBottom: '0.25rem' }}>
                Course Access Sent!
              </div>
              <p style={{ fontSize: '12.5px', color: '#14532D', margin: 0 }}>
                Please check your inbox ({leadEmail}) for Step 1 of the 7-day business growth course.
              </p>
            </div>
          ) : (
            <form onSubmit={handleLeadSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.25rem' }}>
                  First Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="First Name"
                  value={leadFirstName}
                  onChange={(e) => setLeadFirstName(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.65rem 0.85rem',
                    borderRadius: '4px',
                    border: '1px solid var(--border-medium)',
                    fontSize: '13.5px',
                    outline: 'none',
                    boxSizing: 'border-box'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.25rem' }}>
                  Last Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Last Name"
                  value={leadLastName}
                  onChange={(e) => setLeadLastName(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.65rem 0.85rem',
                    borderRadius: '4px',
                    border: '1px solid var(--border-medium)',
                    fontSize: '13.5px',
                    outline: 'none',
                    boxSizing: 'border-box'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.25rem' }}>
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="Email Address"
                  value={leadEmail}
                  onChange={(e) => setLeadEmail(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.65rem 0.85rem',
                    borderRadius: '4px',
                    border: '1px solid var(--border-medium)',
                    fontSize: '13.5px',
                    outline: 'none',
                    boxSizing: 'border-box'
                  }}
                />
              </div>

              {leadError && (
                <div style={{ color: '#DC2626', fontSize: '12px' }}>{leadError}</div>
              )}

              <button
                type="submit"
                disabled={leadSubmitting}
                style={{
                  width: '100%',
                  backgroundColor: '#FCAC14',
                  color: '#FFFFFF',
                  border: 'none',
                  padding: '0.75rem',
                  borderRadius: '4px',
                  fontWeight: 700,
                  fontSize: '13.5px',
                  cursor: 'pointer',
                  marginTop: '0.35rem',
                  transition: 'background-color 0.15s ease'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#E09910')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#FCAC14')}
              >
                {leadSubmitting ? 'Submitting...' : 'Submit'}
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Widget 2: Quick Direct Contact */}
      <div 
        style={{
          padding: '1.25rem',
          backgroundColor: 'var(--surface-subtle)',
          borderRadius: '4px',
          border: '1px solid var(--border-light)'
        }}
      >
        <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--navy-900)', marginBottom: '0.5rem' }}>
          Speak Directly with a Partner
        </div>
        <div style={{ fontSize: '13px', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ color: 'var(--text-secondary)' }}>Mark Puri:</span>
            <a href="tel:416-801-6746" style={{ fontWeight: 700, color: 'var(--navy-800)' }}>+1 416 801 6746</a>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ color: 'var(--text-secondary)' }}>Helen Loggia:</span>
            <a href="tel:416-805-1427" style={{ fontWeight: 700, color: 'var(--navy-800)' }}>+1 416 805 1427</a>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.25rem', paddingTop: '0.4rem', borderTop: '1px solid var(--border-light)' }}>
            <span style={{ color: 'var(--text-secondary)' }}>Email:</span>
            <a href="mailto:support@cpapnl.com" style={{ fontWeight: 700, color: 'var(--gold-600)' }}>support@cpapnl.com</a>
          </div>
        </div>
      </div>
    </aside>
  );
};
