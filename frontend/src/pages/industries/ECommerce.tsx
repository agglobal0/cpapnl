import React, { useEffect } from 'react';
import { CheckCircle2, ArrowRight, Phone, ShoppingCart, Globe, Calculator, ShieldCheck } from 'lucide-react';

interface Props { onBookConsultation: (ctx?: string) => void; }

export const ECommercePage: React.FC<Props> = ({ onBookConsultation }) => {
  useEffect(() => {
    document.title = 'CPA for eCommerce & Shopify Sellers in Canada — HST, Amazon & Tax | Puri & Loggia LLP';
    const m = document.querySelector('meta[name="description"]');
    if (m) m.setAttribute('content', 'CPA services for Canadian eCommerce businesses on Shopify, Amazon, Etsy, and WooCommerce. Multi-province HST, US sales tax, inventory costing, and T2 corporate tax. Ontario CPA firm serving sellers nationwide.');
  }, []);

  const challenges = [
    { icon: <Calculator size={20} color="#D97706" />, title: 'Multi-Province HST Compliance', desc: 'Selling across provinces triggers complex HST/GST rules. We handle registration, filing, and cross-border obligations in every province where you have nexus.' },
    { icon: <Globe size={20} color="#D97706" />, title: 'US Sales & Cross-Border Tax', desc: 'US state sales tax (nexus rules), import duties, and USD to CAD revenue tracking — we handle the cross-border complexity so you don\'t have to.' },
    { icon: <ShoppingCart size={20} color="#D97706" />, title: 'Inventory & COGS Accuracy', desc: 'Shopify, Amazon, and Etsy payouts don\'t equal revenue. We reconcile platform fees, refunds, chargebacks, and FBA costs to get your real COGS right.' },
    { icon: <ShieldCheck size={20} color="#D97706" />, title: 'Payment Processor Reconciliation', desc: 'Stripe, PayPal, Square, Shopify Payments — each has its own payout schedule and fee structure. We reconcile all feeds into a single clean P&L.' },
  ];

  const services = [
    'Shopify, Amazon, WooCommerce & Etsy revenue reconciliation',
    'Multi-province HST/GST registration, filing & returns',
    'US sales tax nexus analysis & state registration advisory',
    'Inventory costing (FIFO/average cost) & COGS reporting',
    'Stripe, PayPal & Shopify Payments reconciliation',
    'FBA (Fulfilled by Amazon) inventory & fee accounting',
    'Corporate T2 filing for eCommerce operating companies',
    'International supplier payments & import duty tracking',
    'Cash flow forecasting for seasonal eCommerce businesses',
    'Xero or QuickBooks eCommerce integration & automation',
  ];

  return (
    <div>
      <section style={{ backgroundColor: '#0F294A', color: '#FFFFFF', padding: 'clamp(3.5rem, 5vw, 5.5rem) 0' }}>
        <div className="container">
          <div style={{ maxWidth: '820px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backgroundColor: 'rgba(252,172,20,0.15)', border: '1px solid rgba(252,172,20,0.3)', borderRadius: '20px', padding: '0.3rem 0.9rem', marginBottom: '1.25rem' }}>
              <span style={{ fontSize: '12px', fontWeight: 700, color: '#FCAC14', textTransform: 'uppercase', letterSpacing: '0.06em' }}>eCommerce</span>
            </div>
            <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.4rem)', fontWeight: 800, color: '#FFFFFF', lineHeight: 1.18, marginBottom: '1.25rem', letterSpacing: '-0.02em' }}>
              CPA for Canadian eCommerce<br />&amp; Online Sellers
            </h1>
            <p style={{ fontSize: '17.5px', color: 'rgba(255,255,255,0.88)', lineHeight: 1.75, marginBottom: '2rem', maxWidth: '640px' }}>
              Shopify, Amazon, Etsy, WooCommerce — we understand how online revenue really flows. From multi-province HST to US sales tax and inventory COGS, we turn platform chaos into clean financials.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              <button onClick={() => onBookConsultation('eCommerce Accounting')} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backgroundColor: '#FCAC14', color: '#0F294A', border: 'none', padding: '0.9rem 2rem', borderRadius: '4px', fontWeight: 800, fontSize: '15px', cursor: 'pointer' }}>
                <span>Book a Free Discovery Call</span><ArrowRight size={16} />
              </button>
              <a href="tel:416-801-6746" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: '#FFFFFF', border: '1px solid rgba(255,255,255,0.35)', padding: '0.9rem 1.75rem', borderRadius: '4px', fontWeight: 700, fontSize: '14.5px', textDecoration: 'none', backgroundColor: 'rgba(255,255,255,0.08)' }}>
                <Phone size={15} /><span>416-801-6746</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: '#F8FAFC', borderBottom: '1px solid var(--border-light)', padding: '5rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3.5rem' }}>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 800, color: 'var(--navy-900)', letterSpacing: '-0.02em' }}>eCommerce Tax Challenges We Solve</h2>
            <p style={{ fontSize: '16px', color: 'var(--text-secondary)', lineHeight: 1.7, marginTop: '0.75rem' }}>Generic accountants don't understand platform accounting. We do.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {challenges.map((c, i) => (
              <div key={i} style={{ backgroundColor: '#FFFFFF', border: '1px solid var(--border-light)', borderTop: '3px solid #FCAC14', borderRadius: '8px', padding: '2rem', boxShadow: 'var(--shadow-card)' }}>
                <div style={{ marginBottom: '0.75rem' }}>{c.icon}</div>
                <h3 style={{ fontSize: '17px', fontWeight: 800, color: 'var(--navy-900)', marginBottom: '0.5rem' }}>{c.title}</h3>
                <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.65, margin: 0 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: '#FFFFFF', padding: '5.5rem 0' }}>
        <div className="container">
          <div style={{ maxWidth: '820px', margin: '0 auto' }}>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 800, color: 'var(--navy-900)', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>eCommerce CPA Services</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '1rem', marginBottom: '2.5rem' }}>
              {services.map((s, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', padding: '1rem 1.25rem', backgroundColor: '#F8FAFC', border: '1px solid var(--border-light)', borderRadius: '6px' }}>
                  <CheckCircle2 size={18} color="#D97706" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span style={{ fontSize: '14px', color: 'var(--navy-900)', lineHeight: 1.5 }}>{s}</span>
                </div>
              ))}
            </div>
            <button onClick={() => onBookConsultation('eCommerce')} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backgroundColor: '#FCAC14', color: '#0F294A', border: 'none', padding: '0.9rem 2rem', borderRadius: '4px', fontWeight: 800, fontSize: '14.5px', cursor: 'pointer' }}>
              <span>Get a Free eCommerce Tax Review</span><ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: '#0F294A', padding: '5rem 0', textAlign: 'center' }}>
        <div className="container">
          <div style={{ maxWidth: '680px', margin: '0 auto' }}>
            <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.4rem)', fontWeight: 800, color: '#FFFFFF', marginBottom: '1rem', letterSpacing: '-0.02em' }}>Selling Online Across Canada or Into the US?</h2>
            <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.85)', marginBottom: '2rem', lineHeight: 1.7 }}>Book a free 30-minute call with our team. We'll review your platforms, current tax setup, and identify what you may be missing.</p>
            <button onClick={() => onBookConsultation('eCommerce')} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backgroundColor: '#FCAC14', color: '#0F294A', border: 'none', padding: '0.9rem 2.25rem', borderRadius: '4px', fontWeight: 800, fontSize: '15px', cursor: 'pointer' }}>
              <span>Book My Free Call</span><ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
