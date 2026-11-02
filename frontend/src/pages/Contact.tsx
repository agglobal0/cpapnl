import React, { useState } from 'react';
import { Phone, Mail, MapPin, CheckCircle2, ShieldCheck, ExternalLink, Send } from 'lucide-react';
import { api } from '../services/api';
import { trackEvent } from '../services/analytics';

export const Contact: React.FC<{ onBookConsultation?: (context?: string) => void }> = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [service, setService] = useState('Accounting / Bookkeeping');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      setErrorMsg('Please complete all required fields.');
      return;
    }
    setErrorMsg('');
    setIsSubmitting(true);

    try {
      await api.submitContact({
        name,
        email,
        phone,
        company,
        service,
        message,
      });

      trackEvent('contact_form_submitted', {
        service_interest: service,
        company_provided: Boolean(company.trim()),
      });

      setSubmitted(true);
    } catch (err: any) {
      setErrorMsg(err.message || 'Something went wrong. Please call us directly at 416-801-6746.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      {/* 1. Header Banner */}
      <div className="page-hero-banner">
        <div className="container">
          <h1>Contact Us</h1>
          <p>
            You can reach out to us using the details or contact form below.
          </p>
        </div>
      </div>

      {/* 2. Main Content Section */}
      <section className="section" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container">
          
          {/* Top Row: Contact Info (Left) & Ontario Locals Map (Right) */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '2.5rem',
              alignItems: 'stretch',
              marginBottom: '3.5rem',
            }}
          >
            {/* Left: Contact Info */}
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', color: 'var(--navy-800)', marginBottom: '0.75rem', fontWeight: 800 }}>
                Contact Us
              </h2>
              <p style={{ fontSize: 'var(--text-base)', color: 'var(--text-secondary)', marginBottom: '1.75rem', lineHeight: 1.6 }}>
                You can reach out to us using the details or contact form below.
              </p>

              <div
                style={{
                  backgroundColor: 'var(--surface-alt)',
                  border: '1px solid var(--border-light)',
                  borderRadius: 'var(--radius-md)',
                  padding: '1.75rem',
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <h3 style={{ fontSize: '18px', color: 'var(--navy-900)', marginBottom: '0.5rem', fontWeight: 700 }}>
                    Puri &amp; Loggia LLP
                  </h3>
                  <p style={{ fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: 1.5 }}>
                    Our team supports businesses across Canada with comprehensive accounting, corporate tax, and fractional CFO advisory.
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                      <div
                        style={{
                          width: '40px',
                          height: '40px',
                          borderRadius: 'var(--radius-xs)',
                          backgroundColor: 'var(--navy-50)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'var(--navy-800)',
                          flexShrink: 0,
                        }}
                      >
                        <Phone size={18} />
                      </div>
                      <div>
                        <div style={{ fontSize: '11px', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 700, letterSpacing: '0.04em' }}>
                          Mark Puri, CPA, MBA
                        </div>
                        <a href="tel:416-801-6746" style={{ fontWeight: 700, color: 'var(--navy-800)', fontSize: '15px' }}>
                          +1 416 801 6746
                        </a>
                      </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                      <div
                        style={{
                          width: '40px',
                          height: '40px',
                          borderRadius: 'var(--radius-xs)',
                          backgroundColor: 'var(--navy-50)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'var(--navy-800)',
                          flexShrink: 0,
                        }}
                      >
                        <Phone size={18} />
                      </div>
                      <div>
                        <div style={{ fontSize: '11px', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 700, letterSpacing: '0.04em' }}>
                          Helen Loggia, CPA
                        </div>
                        <a href="tel:416-805-1427" style={{ fontWeight: 700, color: 'var(--navy-800)', fontSize: '15px' }}>
                          +1 416 805 1427
                        </a>
                      </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                      <div
                        style={{
                          width: '40px',
                          height: '40px',
                          borderRadius: 'var(--radius-xs)',
                          backgroundColor: 'var(--navy-50)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'var(--navy-800)',
                          flexShrink: 0,
                        }}
                      >
                        <Mail size={18} />
                      </div>
                      <div>
                        <div style={{ fontSize: '11px', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 700, letterSpacing: '0.04em' }}>
                          General Support
                        </div>
                        <a href="mailto:support@cpapnl.com" style={{ fontWeight: 700, color: 'var(--navy-800)', fontSize: '15px' }}>
                          support@cpapnl.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    marginTop: '1.5rem',
                    paddingTop: '1rem',
                    borderTop: '1px solid var(--border-light)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontSize: '12px',
                    color: 'var(--text-muted)',
                  }}
                >
                  <MapPin size={14} color="var(--gold-600)" />
                  <span>Licensed Chartered Professional Accounting Firm &bull; CPA Ontario</span>
                </div>
              </div>
            </div>

            {/* Right: Ontario Locals Map */}
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', color: 'var(--navy-800)', marginBottom: '0.75rem', fontWeight: 800 }}>
                Ontario Locals
              </h2>
              <p style={{ fontSize: 'var(--text-base)', color: 'var(--text-secondary)', marginBottom: '1.75rem', lineHeight: 1.6 }}>
                Based in Ontario and providing CPA accounting, tax, and cloud advisory services across Canada.
              </p>

              <div
                className="card"
                style={{
                  padding: 0,
                  overflow: 'hidden',
                  border: '1px solid var(--border-light)',
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  boxShadow: 'var(--shadow-card)',
                }}
              >
                <iframe
                  title="Ontario, Canada Service Area"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5823758.835105996!2d-85.323214!3d44.686524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4d4cee04da839213%3A0x446e1634b071a986!2sOntario%2C%20Canada!5e0!3m2!1sen!2sca!4v1710000000000!5m2!1sen!2sca"
                  width="100%"
                  style={{ border: 0, display: 'block', flex: 1, minHeight: '260px' }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <div
                  style={{
                    padding: '1.25rem 1.5rem',
                    backgroundColor: '#FFFFFF',
                    borderTop: '1px solid var(--border-light)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '0.75rem',
                  }}
                >
                  <div>
                    <strong style={{ color: 'var(--navy-900)', fontSize: '14px', display: 'block' }}>Ontario, Canada</strong>
                    <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Greater Toronto Area &amp; Canada-Wide Virtual Engagements</span>
                  </div>
                  <a
                    href="https://maps.google.com/?q=Ontario,+Canada"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary btn-sm"
                    style={{ gap: '0.35rem' }}
                  >
                    <ExternalLink size={13} />
                    <span>Open in Maps</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section: Leave Us a Message (Form after Map & Info) */}
          <div
            className="card"
            style={{
              padding: '2.5rem',
              border: '1px solid var(--border-light)',
              boxShadow: 'var(--shadow-card)',
              backgroundColor: '#FFFFFF',
              maxWidth: '960px',
              margin: '0 auto',
            }}
          >
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <h3 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 1.85rem)', color: 'var(--navy-900)', marginBottom: '0.5rem', fontWeight: 800 }}>
                Leave Us a Message
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '15px', maxWidth: '600px', margin: '0 auto' }}>
                Fill out the form below and one of our partners will get back to you within one business day.
              </p>
            </div>

            {submitted ? (
              <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    backgroundColor: '#DEF7EC',
                    color: '#03543F',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1.5rem auto',
                  }}
                >
                  <CheckCircle2 size={36} />
                </div>
                <h4 style={{ color: 'var(--navy-900)', fontSize: '1.25rem', marginBottom: '0.5rem', fontWeight: 700 }}>
                  Thank You for Reaching Out
                </h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '15px', marginBottom: '1.75rem', maxWidth: '480px', margin: '0 auto 1.75rem auto' }}>
                  Your message has been received by Mark Puri and Helen Loggia. A partner will respond to your inquiry within one business day.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn btn-secondary"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                {errorMsg && (
                  <div
                    style={{
                      padding: '0.85rem 1rem',
                      backgroundColor: '#FDE8E8',
                      color: '#9B1C1C',
                      borderRadius: 'var(--radius-xs)',
                      fontSize: '13.5px',
                      marginBottom: '1.5rem',
                      border: '1px solid #F8B4B4',
                    }}
                  >
                    {errorMsg}
                  </div>
                )}

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem', marginBottom: '1.25rem' }}>
                  <div className="form-group" style={{ marginBottom: 0 }}>
                    <label className="form-label">Full Name *</label>
                    <input
                      type="text"
                      className="form-input"
                      placeholder="e.g., David Miller"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>

                  <div className="form-group" style={{ marginBottom: 0 }}>
                    <label className="form-label">Business Email *</label>
                    <input
                      type="email"
                      className="form-input"
                      placeholder="david@company.ca"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem', marginBottom: '1.25rem' }}>
                  <div className="form-group" style={{ marginBottom: 0 }}>
                    <label className="form-label">Phone Number</label>
                    <input
                      type="tel"
                      className="form-input"
                      placeholder="416-555-0199"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>

                  <div className="form-group" style={{ marginBottom: 0 }}>
                    <label className="form-label">Company Name</label>
                    <input
                      type="text"
                      className="form-input"
                      placeholder="Miller Dynamics Inc."
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                    />
                  </div>
                </div>

                <div className="form-group" style={{ marginBottom: '1.25rem' }}>
                  <label className="form-label">What service are you looking for?</label>
                  <select
                    className="form-select"
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                  >
                    <option value="Accounting / Bookkeeping">Accounting &amp; Bookkeeping</option>
                    <option value="Taxation">Corporate (T2) &amp; Personal Taxation</option>
                    <option value="Consulting / Technology">Advisory &amp; Fractional CFO</option>
                    <option value="Cloud Accounting">Cloud Accounting Systems (Xero / QuickBooks Online)</option>
                    <option value="General Inquiry">General Business Inquiry</option>
                  </select>
                </div>

                <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                  <label className="form-label">Message *</label>
                  <textarea
                    className="form-textarea"
                    rows={5}
                    placeholder="Briefly describe your business, current accounting/tax questions, or how we can assist..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  />
                </div>

                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '1.25rem',
                    paddingTop: '0.5rem',
                  }}
                >
                  <p style={{ fontSize: '12px', color: 'var(--text-muted)', margin: 0, display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <ShieldCheck size={16} color="var(--navy-800)" style={{ flexShrink: 0 }} />
                    <span>Your details are protected under CPA client confidentiality &amp; PIPEDA.</span>
                  </p>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn btn-primary"
                    style={{ minWidth: '180px', justifyContent: 'center' }}
                  >
                    <Send size={15} />
                    <span>{isSubmitting ? 'Sending...' : 'Submit Message'}</span>
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>
      </section>
    </div>
  );
};
