import React, { useState } from 'react';
import { X, CreditCard, ShieldCheck, Check, AlertCircle } from 'lucide-react';
import { api } from '../services/api';
import { trackEvent } from '../services/analytics';

interface StripeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PACKAGES = [
  {
    id: 'consultation_deposit',
    name: 'Discovery Retainer Deposit',
    price: 250,
    description: 'Applied 100% toward your first monthly accounting or tax filing package.',
    features: ['Credited against full engagement', 'Guaranteed partner priority scheduling', 'NDA & Confidentiality agreement']
  },
  {
    id: 'tax_planning_deep_dive',
    name: 'Comprehensive Corporate Tax Assessment',
    price: 950,
    description: 'Complete multi-year T2 and owner-operator salary/dividend optimization audit.',
    features: ['Historical 3-year T2 tax review', 'Holding company & asset protection review', 'Written tax architecture blueprint', '60-min partner strategy session']
  },
  {
    id: 'cloud_migration_deposit',
    name: 'Cloud Onboarding & Setup Deposit',
    price: 650,
    description: 'Initial deposit for turnkey migration to Xero or QuickBooks Online + Hubdoc + Wagepoint.',
    features: ['Full historical trial balance migration', 'Bank feed & automated rules setup', 'Chart of accounts optimization', 'Team workflow training session']
  }
];

export const StripeModal: React.FC<StripeModalProps> = ({ isOpen, onClose }) => {
  const [selectedPkg, setSelectedPkg] = useState(PACKAGES[0]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const handleProceedToStripe = async () => {
    setIsLoading(true);
    setErrorMsg('');

    trackEvent('payment_initiated', {
      package_id: selectedPkg.id,
      amount: selectedPkg.price,
      currency: 'cad',
    });

    try {
      const res = await api.createStripeCheckout(selectedPkg.id, selectedPkg.price);
      if (res && res.checkoutUrl) {
        // Redirect to Stripe Checkout
        window.location.href = res.checkoutUrl;
      }
    } catch (err: any) {
      setErrorMsg(err.message || 'Payment service currently initializing. Please contact support@cpapnl.com.');
      setIsLoading(false);
    }
  };

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div 
        className="modal-content"
        style={{ maxWidth: '640px' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div style={{ padding: '1.5rem 2rem', borderBottom: '1px solid var(--border-light)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'var(--navy-900)', color: '#FFFFFF' }}>
          <div>
            <div className="badge badge-gold" style={{ marginBottom: '0.4rem' }}>
              Secure 256-Bit SSL Checkout
            </div>
            <h3 style={{ fontSize: 'var(--text-xl)', color: '#FFFFFF' }}>
              Select an Advisory Package or Deposit
            </h3>
          </div>
          <button
            onClick={onClose}
            style={{ background: 'none', border: 'none', color: '#94A3B8', cursor: 'pointer', padding: '0.5rem' }}
            aria-label="Close"
          >
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <div style={{ padding: '2rem' }}>
          <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
            All payments are processed securely through <strong>Stripe Canada</strong>. We accept Visa, MasterCard, American Express, and Interac Online.
          </p>

          {errorMsg && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 1rem', marginBottom: '1.25rem', backgroundColor: '#FEF2F2', border: '1px solid #FCA5A5', borderRadius: 'var(--radius-md)', color: '#991B1B', fontSize: 'var(--text-xs)' }}>
              <AlertCircle size={16} />
              <span>{errorMsg}</span>
            </div>
          )}

          {/* Package Selector */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.75rem' }}>
            {PACKAGES.map((pkg) => {
              const isSelected = selectedPkg.id === pkg.id;
              return (
                <div
                  key={pkg.id}
                  onClick={() => setSelectedPkg(pkg)}
                  style={{
                    padding: '1.25rem',
                    borderRadius: 'var(--radius-lg)',
                    border: isSelected ? '2px solid var(--teal-600)' : '1px solid var(--border-light)',
                    backgroundColor: isSelected ? 'var(--teal-50)' : 'var(--surface-base)',
                    cursor: 'pointer',
                    transition: 'all var(--transition-fast)'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.4rem' }}>
                    <div style={{ fontWeight: 700, fontSize: 'var(--text-base)', color: 'var(--navy-950)' }}>
                      {pkg.name}
                    </div>
                    <div style={{ fontWeight: 800, fontSize: 'var(--text-lg)', color: 'var(--teal-700)' }}>
                      ${pkg.price} <span style={{ fontSize: 'var(--text-xs)', fontWeight: 500, color: 'var(--text-muted)' }}>CAD + HST</span>
                    </div>
                  </div>
                  <p style={{ fontSize: 'var(--text-xs)', color: 'var(--text-secondary)', marginBottom: '0.75rem' }}>
                    {pkg.description}
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                    {pkg.features.map((feat, idx) => (
                      <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '11px', color: 'var(--text-secondary)' }}>
                        <Check size={12} color="var(--teal-600)" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem', backgroundColor: 'var(--surface-alt)', borderRadius: 'var(--radius-md)', marginBottom: '1.5rem', fontSize: 'var(--text-xs)', color: 'var(--text-secondary)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <ShieldCheck size={18} color="var(--teal-600)" />
              <span>PCI-DSS Level 1 Encrypted • Zero Card Storage</span>
            </div>
            <div>
              <strong>Amount Due:</strong> ${selectedPkg.price}.00 CAD
            </div>
          </div>

          <button
            onClick={handleProceedToStripe}
            disabled={isLoading}
            className="btn btn-primary btn-lg"
            style={{ width: '100%' }}
          >
            <CreditCard size={20} />
            <span>{isLoading ? 'Connecting to Stripe...' : `Proceed to Secure Stripe Checkout ($${selectedPkg.price} CAD)`}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
