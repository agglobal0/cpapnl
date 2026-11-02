import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  ShieldCheck, UploadCloud, FileText, CheckCircle2, AlertCircle, 
  Trash2, ArrowRight, Lock, Check, Calendar, Phone, Mail 
} from 'lucide-react';
import { api } from '../services/api';
import { trackEvent } from '../services/analytics';

export const Onboarding: React.FC<{ onBookConsultation: (context?: string) => void }> = ({ onBookConsultation }) => {
  // Step State (1: Company & Contact, 2: Financial Profile & Scope, 3: Secure Document Upload)
  const [step, setStep] = useState(1);

  // Form Fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [website, setWebsite] = useState('');
  const [preferredContact, setPreferredContact] = useState('Video Call');

  const [businessType, setBusinessType] = useState('CCPC (Incorporated)');
  const [revenueRange, setRevenueRange] = useState('$500k - $1M');
  const [currentSoftware, setCurrentSoftware] = useState('QuickBooks Desktop');
  const [selectedServices, setSelectedServices] = useState<string[]>(['Accounting & Bookkeeping']);
  const [requirements, setRequirements] = useState('');

  // Files State
  const [files, setFiles] = useState<File[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submissionId, setSubmissionId] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const toggleService = (srv: string) => {
    setSelectedServices(prev => 
      prev.includes(srv) ? prev.filter(s => s !== srv) : [...prev, srv]
    );
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const allowedExts = ['pdf', 'xlsx', 'csv', 'docx', 'jpg', 'jpeg', 'png'];
      const maxBytes = 25 * 1024 * 1024; // 25MB
      const newFiles: File[] = [];

      for (let i = 0; i < e.target.files.length; i++) {
        const file = e.target.files[i];
        const ext = file.name.split('.').pop()?.toLowerCase() || '';

        if (!allowedExts.includes(ext)) {
          setErrorMsg(`File "${file.name}" has an unsupported format. Allowed: PDF, XLSX, CSV, DOCX, JPG, PNG.`);
          return;
        }
        if (file.size > maxBytes) {
          setErrorMsg(`File "${file.name}" exceeds the 25MB maximum limit.`);
          return;
        }
        newFiles.push(file);
      }

      setErrorMsg('');
      setFiles(prev => [...prev, ...newFiles]);
      trackEvent('onboarding_file_uploaded', { file_count: newFiles.length });
    }
  };

  const removeFile = (idx: number) => {
    setFiles(prev => prev.filter((_, i) => i !== idx));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg('');

    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('email', email);
      formData.append('phone', phone);
      formData.append('company', company);
      formData.append('website', website);
      formData.append('preferredContact', preferredContact);
      formData.append('businessType', businessType);
      formData.append('revenueRange', revenueRange);
      formData.append('currentSoftware', currentSoftware);
      formData.append('services', JSON.stringify(selectedServices));
      formData.append('requirements', requirements);

      files.forEach((file) => {
        formData.append('documents[]', file);
      });

      const res = await api.submitOnboarding(formData);

      setSubmissionId(res.submissionId || 'ONB-' + Math.random().toString(36).substring(2, 8).toUpperCase());
      setIsSuccess(true);

      try {
        confetti({ particleCount: 100, spread: 80, origin: { y: 0.6 } });
      } catch {}

      trackEvent('onboarding_submitted', {
        service_category: selectedServices.join(', '),
        business_type: businessType,
        has_uploads: files.length > 0,
      });
    } catch (err: any) {
      setErrorMsg(err.message || 'Submission failed. Please try again or call us at 416-801-6746.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      {/* 1. Authentic Subpage Banner (Executive desk photography) */}
      <div className="page-hero-banner">
        <div className="container">
          <div className="badge badge-gold" style={{ marginBottom: '1rem' }}>
            Encrypted Client Onboarding
          </div>
          <h1>Prospective Client Onboarding</h1>
          <p>
            Tell us about your company and securely upload prior T2 returns or financial statements so our partners can prepare a tailored advisory proposal.
          </p>
        </div>
      </div>

      {/* 2. Main Multi-Step Form */}
      <section className="section" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container" style={{ maxWidth: '840px' }}>
          {!isSuccess ? (
            <div className="card" style={{ padding: 'clamp(1.5rem, 5vw, 3.5rem)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-lg)', border: '1px solid var(--border-light)', backgroundColor: '#FFFFFF' }}>
              {/* Stepper Progress Bar */}
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '3rem', position: 'relative' }}>
                <div style={{ position: 'absolute', top: '18px', left: '10%', right: '10%', height: '2px', backgroundColor: 'var(--border-light)', zIndex: 0 }} />
                
                {[
                  { num: 1, label: 'Company & Contact' },
                  { num: 2, label: 'Financial Profile' },
                  { num: 3, label: 'Secure Uploads & Review' },
                ].map(s => {
                  const isCurrent = step === s.num;
                  const isDone = step > s.num;
                  return (
                    <div key={s.num} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', zIndex: 1 }}>
                      <div
                        style={{
                          width: '38px',
                          height: '38px',
                          borderRadius: '999px',
                          backgroundColor: isDone ? '#15803D' : isCurrent ? 'var(--navy-800)' : '#FFFFFF',
                          border: isDone ? '2px solid #15803D' : isCurrent ? '2px solid var(--navy-800)' : '2px solid var(--border-medium)',
                          color: isCurrent || isDone ? '#FFFFFF' : 'var(--text-muted)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontWeight: 800,
                          fontSize: 'var(--text-xs)',
                          marginBottom: '0.5rem'
                        }}
                      >
                        {isDone ? <Check size={18} /> : s.num}
                      </div>
                      <span style={{ fontSize: 'var(--text-xs)', fontWeight: isCurrent ? 700 : 500, color: isCurrent ? 'var(--navy-900)' : 'var(--text-muted)' }}>
                        {s.label}
                      </span>
                    </div>
                  );
                })}
              </div>

              {errorMsg && (
                <div style={{ padding: '0.85rem 1.25rem', marginBottom: '1.75rem', backgroundColor: '#FEF2F2', border: '1px solid #FCA5A5', borderRadius: 'var(--radius-md)', color: '#991B1B', fontSize: 'var(--text-xs)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <AlertCircle size={16} />
                  <span>{errorMsg}</span>
                </div>
              )}

              {/* STEP 1: Company & Contact Information */}
              {step === 1 && (
                <div>
                  <h3 style={{ fontSize: 'var(--text-xl)', color: 'var(--navy-950)', marginBottom: '0.5rem' }}>
                    1. Primary Contact &amp; Business Details
                  </h3>
                  <p style={{ fontSize: 'var(--text-xs)', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                    Please provide your contact information so Mark Puri and Helen Loggia can coordinate your onboarding review.
                  </p>

                  <div className="form-group">
                    <label className="form-label" htmlFor="onb-name">Contact Full Name *</label>
                    <input
                      id="onb-name"
                      type="text"
                      className="form-input"
                      placeholder="e.g. Jason Vance"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div className="form-group">
                      <label className="form-label" htmlFor="onb-email">Business Email Address *</label>
                      <input
                        id="onb-email"
                        type="email"
                        className="form-input"
                        placeholder="jason@vancetech.ca"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="onb-phone">Direct Telephone Number *</label>
                      <input
                        id="onb-phone"
                        type="tel"
                        className="form-input"
                        placeholder="e.g. 416-555-0188"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div className="form-group">
                      <label className="form-label" htmlFor="onb-company">Legal Company Name *</label>
                      <input
                        id="onb-company"
                        type="text"
                        className="form-input"
                        placeholder="e.g. Vance Precision Manufacturing Inc."
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="onb-website">Company Website (Optional)</label>
                      <input
                        id="onb-website"
                        type="url"
                        className="form-input"
                        placeholder="https://yourcompany.ca"
                        value={website}
                        onChange={(e) => setWebsite(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="onb-pref">Preferred Contact Method</label>
                    <select
                      id="onb-pref"
                      className="form-select"
                      value={preferredContact}
                      onChange={(e) => setPreferredContact(e.target.value)}
                    >
                      <option value="Video Call">Video Call (Zoom / Teams)</option>
                      <option value="Phone Call">Direct Phone Call</option>
                      <option value="Email">Email Communication First</option>
                    </select>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '2rem' }}>
                    <button
                      type="button"
                      onClick={() => {
                        if (!name.trim() || !email.trim() || !company.trim()) {
                          setErrorMsg('Please complete all required fields (*).');
                          return;
                        }
                        setErrorMsg('');
                        setStep(2);
                      }}
                      className="btn btn-primary"
                    >
                      <span>Continue to Financial Profile &rarr;</span>
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 2: Financial Profile & Scope */}
              {step === 2 && (
                <div>
                  <h3 style={{ fontSize: 'var(--text-xl)', color: 'var(--navy-950)', marginBottom: '0.5rem' }}>
                    2. Company Operating Profile &amp; Services Desired
                  </h3>
                  <p style={{ fontSize: 'var(--text-xs)', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                    This helps us understand your legal structure and existing cloud software ecosystem.
                  </p>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div className="form-group">
                      <label className="form-label" htmlFor="onb-btype">Entity Structure</label>
                      <select
                        id="onb-btype"
                        className="form-select"
                        value={businessType}
                        onChange={(e) => setBusinessType(e.target.value)}
                      >
                        <option value="CCPC (Incorporated)">CCPC (Incorporated Canadian Business)</option>
                        <option value="Holding Company + Operating Co">Holding Company + Operating Co</option>
                        <option value="Sole Proprietorship">Sole Proprietorship (Unincorporated)</option>
                        <option value="Partnership">Partnership</option>
                        <option value="Non-Profit / Charity">Non-Profit Organization</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="onb-rev">Annual Gross Revenue Bracket</label>
                      <select
                        id="onb-rev"
                        className="form-select"
                        value={revenueRange}
                        onChange={(e) => setRevenueRange(e.target.value)}
                      >
                        <option value="Pre-Revenue / Startup">Pre-Revenue / Startup</option>
                        <option value="$100k - $500k">$100k - $500k</option>
                        <option value="$500k - $1M">$500k - $1M</option>
                        <option value="$1M - $5M">$1M - $5M</option>
                        <option value="$5M - $15M">$5M - $15M</option>
                        <option value="$15M+">$15M+</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="onb-software">Current Accounting Platform</label>
                    <select
                      id="onb-software"
                      className="form-select"
                      value={currentSoftware}
                      onChange={(e) => setCurrentSoftware(e.target.value)}
                    >
                      <option value="QuickBooks Desktop">QuickBooks Desktop (Local PC / Server)</option>
                      <option value="QuickBooks Online">QuickBooks Online (Cloud)</option>
                      <option value="Xero">Xero (Cloud)</option>
                      <option value="Sage 50 / Simply Accounting">Sage 50 (Simply Accounting)</option>
                      <option value="Excel / Spreadsheets">Excel / Manual Spreadsheets</option>
                      <option value="Other / None">Other Software / None</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Services of Interest (Select all that apply):</label>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.75rem', marginTop: '0.5rem' }}>
                      {[
                        'Accounting & Bookkeeping',
                        'Corporate Tax (T2 Return)',
                        'Advisory & Fractional CFO',
                        'Cloud Systems Migration',
                        'CRA Audit Assistance',
                        'Holding Co Structuring'
                      ].map(srv => {
                        const isChecked = selectedServices.includes(srv);
                        return (
                          <div
                            key={srv}
                            onClick={() => toggleService(srv)}
                            style={{
                              padding: '0.75rem 1rem',
                              borderRadius: 'var(--radius-md)',
                              border: isChecked ? '2px solid var(--teal-600)' : '1px solid var(--border-medium)',
                              backgroundColor: isChecked ? 'var(--teal-50)' : 'var(--surface-base)',
                              cursor: 'pointer',
                              display: 'flex',
                              alignItems: 'center',
                              gap: '0.5rem',
                              fontSize: 'var(--text-xs)',
                              fontWeight: isChecked ? 700 : 500,
                              color: isChecked ? 'var(--navy-950)' : 'var(--text-primary)',
                              transition: 'all var(--transition-fast)'
                            }}
                          >
                            <div style={{ width: '16px', height: '16px', borderRadius: '4px', border: isChecked ? '2px solid var(--teal-600)' : '2px solid var(--border-medium)', backgroundColor: isChecked ? 'var(--teal-600)' : 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                              {isChecked && <Check size={12} color="#FFFFFF" />}
                            </div>
                            <span>{srv}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="form-group" style={{ marginTop: '1.25rem' }}>
                    <label className="form-label" htmlFor="onb-req">Describe Your Immediate Business Challenges &amp; Goals</label>
                    <textarea
                      id="onb-req"
                      rows={3}
                      className="form-textarea"
                      placeholder="e.g. We are switching from Sage to Xero and need help setting up monthly reconciliations and corporate tax filing before October..."
                      value={requirements}
                      onChange={(e) => setRequirements(e.target.value)}
                    />
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '2rem' }}>
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="btn btn-secondary"
                    >
                      &larr; Back
                    </button>
                    <button
                      type="button"
                      onClick={() => setStep(3)}
                      className="btn btn-primary"
                    >
                      <span>Continue to Document Upload &rarr;</span>
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 3: Secure Document Upload & Final Submission */}
              {step === 3 && (
                <form onSubmit={handleSubmit}>
                  <h3 style={{ fontSize: 'var(--text-xl)', color: 'var(--navy-950)', marginBottom: '0.5rem' }}>
                    3. Secure Financial Document Upload (Optional)
                  </h3>
                  <p style={{ fontSize: 'var(--text-xs)', color: 'var(--text-secondary)', marginBottom: '1.75rem' }}>
                    To accelerate your engagement review, attach your most recent corporate Notice of Assessment (NOA), prior year T2 return, or latest trial balance.
                  </p>

                  {/* Drag-and-Drop Dropzone */}
                  <div
                    style={{
                      border: '2px dashed var(--border-medium)',
                      borderRadius: 'var(--radius-xl)',
                      padding: '2.5rem 1.5rem',
                      textAlign: 'center',
                      backgroundColor: 'var(--surface-alt)',
                      cursor: 'pointer',
                      marginBottom: '1.5rem',
                      transition: 'border-color var(--transition-fast)'
                    }}
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={(e) => {
                      e.preventDefault();
                      if (e.dataTransfer.files) {
                        handleFileChange({ target: { files: e.dataTransfer.files } } as any);
                      }
                    }}
                    onClick={() => document.getElementById('file-input')?.click()}
                  >
                    <UploadCloud size={44} color="var(--teal-600)" style={{ margin: '0 auto 1rem' }} />
                    <div style={{ fontWeight: 700, fontSize: 'var(--text-sm)', color: 'var(--navy-950)', marginBottom: '0.35rem' }}>
                      Click to Browse or Drag &amp; Drop Documents Here
                    </div>
                    <p style={{ fontSize: 'var(--text-xs)', color: 'var(--text-muted)', margin: 0 }}>
                      Accepted formats: PDF, XLSX, CSV, DOCX, JPG, PNG (Max 25MB per file)
                    </p>
                    <input
                      id="file-input"
                      type="file"
                      multiple
                      onChange={handleFileChange}
                      style={{ display: 'none' }}
                      accept=".pdf,.xlsx,.csv,.docx,.jpg,.jpeg,.png"
                    />
                  </div>

                  {/* Uploaded File List */}
                  {files.length > 0 && (
                    <div style={{ marginBottom: '1.75rem' }}>
                      <div style={{ fontSize: 'var(--text-xs)', fontWeight: 700, color: 'var(--navy-950)', marginBottom: '0.75rem' }}>
                        Attached Documents ({files.length}):
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        {files.map((f, i) => (
                          <div
                            key={i}
                            style={{
                              padding: '0.75rem 1rem',
                              backgroundColor: 'var(--surface-base)',
                              border: '1px solid var(--border-light)',
                              borderRadius: 'var(--radius-md)',
                              display: 'flex',
                              justifyContent: 'space-between',
                              alignItems: 'center',
                              fontSize: 'var(--text-xs)'
                            }}
                          >
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                              <FileText size={16} color="var(--teal-600)" />
                              <span style={{ fontWeight: 600 }}>{f.name}</span>
                              <span style={{ color: 'var(--text-muted)' }}>({(f.size / (1024 * 1024)).toFixed(2)} MB)</span>
                            </div>
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                removeFile(i);
                              }}
                              style={{ background: 'none', border: 'none', color: '#DC2626', cursor: 'pointer', padding: '0.2rem' }}
                              aria-label="Remove file"
                            >
                              <Trash2 size={16} />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Security Notice */}
                  <div style={{ padding: '1rem 1.25rem', backgroundColor: 'var(--navy-900)', borderRadius: 'var(--radius-lg)', color: '#FFFFFF', marginBottom: '2rem', display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                    <Lock size={20} color="var(--teal-400)" style={{ flexShrink: 0 }} />
                    <div style={{ fontSize: '11px', color: 'var(--text-light-secondary)', lineHeight: 1.5 }}>
                      <strong>Strict Security &amp; Private Storage Guarantee:</strong> All uploads are encrypted in transit via TLS 1.3 and stored in an isolated, private directory outside public web access. Only authenticated Puri &amp; Loggia LLP partners have access.
                    </div>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="btn btn-secondary"
                    >
                      &larr; Back
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn btn-primary btn-lg"
                    >
                      <span>{isSubmitting ? 'Securing & Encrypting Uploads...' : 'Submit Complete Onboarding Packet &rarr;'}</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          ) : (
            /* Success Confirmation State */
            <div className="card" style={{ padding: '4rem 2rem', textAlign: 'center', borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-xl)', border: '1px solid var(--border-medium)' }}>
              <CheckCircle2 size={72} color="var(--teal-600)" style={{ margin: '0 auto 1.5rem' }} />

              <span className="badge badge-teal" style={{ marginBottom: '1rem' }}>
                Onboarding Packet Encrypted &amp; Received
              </span>

              <h2 style={{ fontSize: 'var(--text-3xl)', color: 'var(--navy-950)', marginBottom: '0.75rem' }}>
                Welcome to Puri &amp; Loggia LLP
              </h2>

              <p style={{ fontSize: 'var(--text-base)', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 1.5rem', lineHeight: 1.6 }}>
                Thank you, <strong>{name}</strong>. Your onboarding profile for <strong>{company}</strong> has been assigned tracking code:
              </p>

              <div style={{ display: 'inline-block', padding: '0.75rem 2rem', backgroundColor: 'var(--surface-alt)', border: '2px dashed var(--teal-600)', borderRadius: 'var(--radius-lg)', fontWeight: 800, fontSize: 'var(--text-xl)', color: 'var(--teal-700)', letterSpacing: '0.05em', marginBottom: '2.5rem' }}>
                {submissionId}
              </div>

              <div style={{ maxWidth: '580px', margin: '0 auto 2.5rem', textAlign: 'left', padding: '1.5rem', backgroundColor: 'var(--surface-alt)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-light)' }}>
                <div style={{ fontWeight: 700, fontSize: 'var(--text-xs)', color: 'var(--navy-950)', marginBottom: '0.5rem', textTransform: 'uppercase' }}>
                  Next Steps:
                </div>
                <ul style={{ fontSize: 'var(--text-xs)', color: 'var(--text-secondary)', lineHeight: 1.6, paddingLeft: '1.25rem', margin: 0 }}>
                  <li>Partners Mark Puri and Helen Loggia will review your corporate background within 24 hours.</li>
                  <li>We will prepare a customized fixed-fee engagement letter and roadmap.</li>
                  <li>You will receive an invitation to connect your cloud general ledger (Xero or QuickBooks Online).</li>
                </ul>
              </div>

              <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                <a href="/contact" className="btn btn-primary">
                  <span>Contact Our Partners</span>
                </a>
                <a href="/" className="btn btn-secondary">
                  <span>Return to Homepage</span>
                </a>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
