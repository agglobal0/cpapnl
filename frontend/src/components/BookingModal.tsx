import React, { useEffect } from 'react';
import { X, Calendar, Clock, CheckCircle2, Phone, Mail } from 'lucide-react';
import { trackEvent } from '../services/analytics';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceContext?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  serviceContext = 'General Consultation'
}) => {
  useEffect(() => {
    if (isOpen) {
      trackEvent('calendly_opened', { service_context: serviceContext });
    }
  }, [isOpen, serviceContext]);

  if (!isOpen) return null;

  const calendlyUrl = import.meta.env.VITE_CALENDLY_URL || 'https://calendly.com';

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="booking-title">
      <div 
        className="modal-content"
        style={{ maxWidth: '780px', maxHeight: '90vh', display: 'flex', flexDirection: 'column' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div style={{ padding: '1.5rem 2rem', borderBottom: '1px solid var(--border-light)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'var(--navy-800)', color: '#FFFFFF' }}>
          <div>
            <div className="badge badge-gold" style={{ marginBottom: '0.4rem', fontSize: '11px' }}>
              Complimentary 30-Minute Session
            </div>
            <h2 id="booking-title" style={{ fontSize: 'var(--text-xl)', color: '#FFFFFF', fontWeight: 800 }}>
              Schedule Your Discovery Consultation
            </h2>
            <p style={{ fontSize: '12.5px', color: '#E2E8F0', marginTop: '0.2rem' }}>
              Direct video consultation with Mark Puri, CPA, MBA or Helen Loggia. Context: <strong style={{ color: '#FCD34D' }}>{serviceContext}</strong>
            </p>
          </div>
          <button
            onClick={onClose}
            style={{ background: 'none', border: 'none', color: '#FFFFFF', cursor: 'pointer', padding: '0.5rem' }}
            aria-label="Close modal"
          >
            <X size={24} />
          </button>
        </div>

        {/* Modal Body / Calendly Container */}
        <div style={{ flex: 1, minHeight: '440px', overflowY: 'auto', backgroundColor: '#FFFFFF', position: 'relative' }}>
          <div style={{ padding: '1.25rem 2rem', borderBottom: '1px solid var(--border-light)', backgroundColor: 'var(--surface-alt)', display: 'flex', flexWrap: 'wrap', gap: '1.25rem', justifyContent: 'space-between', fontSize: '12.5px', color: 'var(--text-secondary)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Clock size={16} color="var(--navy-800)" />
              <span><strong>30 Minutes</strong> &bull; Zoom or Google Meet</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <CheckCircle2 size={16} color="#15803D" />
              <span>No-obligation corporate tax &amp; cloud review</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Phone size={16} color="var(--navy-800)" />
              <span>Immediate Phone: <strong>416-801-6746</strong></span>
            </div>
          </div>

          {/* Embedded Calendly Action Card */}
          <div style={{ padding: '2.5rem', textAlign: 'center' }}>
            <div style={{ maxWidth: '520px', margin: '0 auto', padding: '2rem', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-md)', backgroundColor: '#FFFFFF', boxShadow: 'var(--shadow-sm)' }}>
              <div style={{ width: '64px', height: '64px', borderRadius: '50%', backgroundColor: 'var(--navy-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--navy-800)', margin: '0 auto 1.25rem auto' }}>
                <Calendar size={32} />
              </div>
              <h3 style={{ fontSize: 'var(--text-lg)', marginBottom: '0.5rem', color: 'var(--navy-900)', fontWeight: 700 }}>
                Select an Available Time Slot
              </h3>
              <p style={{ fontSize: '13.5px', color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: 1.5 }}>
                Our calendar syncs directly with our partners' live availability in Eastern Time (ET). Choose a date and time that fits your schedule.
              </p>
              
              <a
                href={calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-gold btn-lg"
                style={{ width: '100%', marginBottom: '1.25rem', justifyContent: 'center' }}
                onClick={() => {
                  trackEvent('consultation_booked', { service_context: serviceContext, provider: 'calendly' });
                }}
              >
                <span>Open Live Calendly Schedule &rarr;</span>
              </a>

              <p style={{ fontSize: '12px', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                Prefer to connect immediately? Call Mark Puri directly at <a href="tel:416-801-6746" style={{ fontWeight: 700, color: 'var(--navy-800)' }}>416-801-6746</a> or email <a href="mailto:support@cpapnl.com" style={{ fontWeight: 700, color: 'var(--navy-800)' }}>support@cpapnl.com</a>.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div style={{ padding: '1rem 2rem', borderTop: '1px solid var(--border-light)', display: 'flex', justifyContent: 'flex-end', backgroundColor: 'var(--surface-alt)' }}>
          <button onClick={onClose} className="btn btn-secondary btn-sm">
            Close Window
          </button>
        </div>
      </div>
    </div>
  );
};
