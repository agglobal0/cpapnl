import React, { useState } from 'react';
import { X, Download, CheckCircle2, ShieldCheck, FileText, ArrowRight } from 'lucide-react';
import { api, ResourceDownloadItem } from '../services/api';
import { trackEvent } from '../services/analytics';

interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
  resource: ResourceDownloadItem | null;
}

export const LeadModal: React.FC<LeadModalProps> = ({ isOpen, onClose, resource }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen || !resource) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) {
      setErrorMsg('Please provide your name and business email address.');
      return;
    }
    setErrorMsg('');
    setIsSubmitting(true);

    try {
      await api.submitLead({
        name,
        email,
        resourceId: resource.id,
        resourceTitle: resource.title,
      });

      trackEvent('lead_captured', {
        resource_id: resource.id,
        resource_title: resource.title,
        company_provided: Boolean(company.trim()),
      });

      setIsSuccess(true);
    } catch (err: any) {
      setErrorMsg(err.message || 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDownloadClick = () => {
    trackEvent('resource_downloaded', {
      resource_id: resource.id,
      resource_title: resource.title,
    });

    const link = document.createElement('a');
    link.href = '#download-completed';
    link.setAttribute('download', `${resource.id}.${resource.format.toLowerCase().includes('excel') ? 'xlsx' : 'pdf'}`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div 
        className="modal-content"
        style={{ maxWidth: '540px', backgroundColor: '#FFFFFF' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div style={{ padding: '1.5rem 2rem', borderBottom: '1px solid var(--border-light)', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', backgroundColor: 'var(--navy-800)', color: '#FFFFFF' }}>
          <div>
            <span className="badge badge-gold" style={{ marginBottom: '0.4rem', fontSize: '11px' }}>
              {resource.format} &bull; {resource.pagesOrSize}
            </span>
            <h3 style={{ fontSize: 'var(--text-lg)', color: '#FFFFFF', marginTop: '0.2rem', fontWeight: 800 }}>
              {resource.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            style={{ background: 'none', border: 'none', color: '#FFFFFF', cursor: 'pointer', padding: '0.25rem' }}
            aria-label="Close"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content Body */}
        <div style={{ padding: '2rem' }}>
          {!isSuccess ? (
            <form onSubmit={handleSubmit}>
              <p style={{ fontSize: '13.5px', color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: 1.5 }}>
                {resource.description}
              </p>

              {errorMsg && (
                <div style={{ padding: '0.75rem 1rem', marginBottom: '1rem', backgroundColor: '#FEF2F2', border: '1px solid #FCA5A5', borderRadius: 'var(--radius-xs)', color: '#991B1B', fontSize: '12px' }}>
                  {errorMsg}
                </div>
              )}

              <div className="form-group">
                <label className="form-label" htmlFor="lead-name">Your Full Name *</label>
                <input
                  id="lead-name"
                  type="text"
                  className="form-input"
                  placeholder="e.g., Sarah Jenkins"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="lead-email">Business Email Address *</label>
                <input
                  id="lead-email"
                  type="email"
                  className="form-input"
                  placeholder="name@yourcompany.ca"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="lead-company">Company Name (Optional)</label>
                <input
                  id="lead-company"
                  type="text"
                  className="form-input"
                  placeholder="e.g., Apex Technologies Inc."
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                />
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', margin: '1rem 0 1.5rem', fontSize: '12px', color: 'var(--text-muted)' }}>
                <ShieldCheck size={16} color="var(--navy-800)" />
                <span>CASL Compliant. Zero spam. We never share your contact information.</span>
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                style={{ width: '100%', padding: '0.85rem', justifyContent: 'center' }}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Generating Secure Access...' : (
                  <>
                    <Download size={16} />
                    <span>Get Instant Free Access &rarr;</span>
                  </>
                )}
              </button>
            </form>
          ) : (
            <div style={{ textAlign: 'center', padding: '1rem 0' }}>
              <CheckCircle2 size={56} color="#15803D" style={{ margin: '0 auto 1rem' }} />
              <h4 style={{ fontSize: 'var(--text-xl)', marginBottom: '0.5rem', color: 'var(--navy-900)', fontWeight: 800 }}>
                Your Resource is Ready!
              </h4>
              <p style={{ fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                Thank you, <strong>{name}</strong>. A copy has also been sent to <strong>{email}</strong>.
              </p>

              <button
                onClick={handleDownloadClick}
                className="btn btn-gold btn-lg"
                style={{ width: '100%', marginBottom: '1rem', justifyContent: 'center' }}
              >
                <Download size={18} />
                <span>Download {resource.format} Now</span>
              </button>

              <div style={{ padding: '1.25rem', backgroundColor: 'var(--surface-alt)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-light)', marginTop: '1.5rem', textAlign: 'left' }}>
                <div style={{ fontWeight: 700, fontSize: '13px', color: 'var(--navy-900)', marginBottom: '0.25rem' }}>
                  Need help applying this to your company?
                </div>
                <p style={{ fontSize: '12.5px', color: 'var(--text-secondary)', margin: 0 }}>
                  Our partners Mark Puri and Helen Loggia offer complimentary 30-minute discovery sessions.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
