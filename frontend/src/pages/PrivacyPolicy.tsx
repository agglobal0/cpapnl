import React from 'react';
import { ShieldCheck, Lock } from 'lucide-react';

export const PrivacyPolicy: React.FC = () => {
  return (
    <div>
      <section className="section section-dark" style={{ background: 'linear-gradient(175deg, #060B14 0%, #0B132B 100%)', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="badge badge-dark-teal" style={{ marginBottom: '1rem' }}>
            Canadian Legal Compliance
          </div>
          <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', color: '#FFFFFF', marginBottom: '1.25rem' }}>
            Privacy Policy &amp; Data Protection
          </h1>
          <p style={{ fontSize: 'var(--text-lg)', color: 'var(--text-light-secondary)', lineHeight: 1.6 }}>
            Last Updated: October 2026. Compliant with PIPEDA, Canadian Anti-Spam Legislation (CASL), and CPA Ontario professional codes of conduct.
          </p>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: 'var(--surface-base)' }}>
        <div className="container" style={{ maxWidth: '820px', lineHeight: 1.8, fontSize: 'var(--text-base)', color: 'var(--text-primary)' }}>
          <h2 style={{ fontSize: 'var(--text-2xl)', color: 'var(--navy-950)', marginBottom: '1rem' }}>
            1. Our Commitment to Client Confidentiality
          </h2>
          <p>
            Puri &amp; Loggia LLP (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;the firm&rdquo;) operates in strict adherence to the Personal Information Protection and Electronic Documents Act (PIPEDA) and the rigorous professional confidentiality standards mandated by the Chartered Professional Accountants of Ontario (CPA Ontario).
          </p>
          <p>
            We hold client financial records, corporate tax returns, and strategic documents in strict professional confidence. We never sell, monetize, or disclose your personal or corporate data to unauthorized third parties.
          </p>

          <h2 style={{ fontSize: 'var(--text-2xl)', color: 'var(--navy-950)', marginTop: '2.5rem', marginBottom: '1rem' }}>
            2. Personal &amp; Corporate Information We Collect
          </h2>
          <p>When you engage with our digital platform, we collect:</p>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
            <li><strong>Contact Identification</strong>: Name, business email, direct phone number, company legal name, and physical business address.</li>
            <li><strong>Corporate Financial Disclosures</strong>: Trial balances, CRA Notices of Assessment, T2 corporate tax filings, and accounting software files provided voluntarily during prospective client onboarding.</li>
            <li><strong>Technical Analytics</strong>: Anonymized IP addresses, browser user-agents, and aggregate click-stream events collected via Google Analytics 4 (GA4) with IP anonymization enabled.</li>
          </ul>

          <h2 style={{ fontSize: 'var(--text-2xl)', color: 'var(--navy-950)', marginTop: '2.5rem', marginBottom: '1rem' }}>
            3. Storage &amp; Encryption of Uploaded Financial Documents
          </h2>
          <p>
            All documents uploaded via our Prospective Client Onboarding workflow are transmitted exclusively over Transport Layer Security (TLS 1.3) with 256-bit encryption. Uploaded files are immediately stored in an isolated, private server directory outside the public web root. Direct public URL access is permanently disabled.
          </p>

          <h2 style={{ fontSize: 'var(--text-2xl)', color: 'var(--navy-950)', marginTop: '2.5rem', marginBottom: '1rem' }}>
            4. Canada Anti-Spam Legislation (CASL) Compliance
          </h2>
          <p>
            We strictly enforce express and implied consent under CASL. When subscribing to our Canadian Tax &amp; Finance Briefing or downloading lead-magnet resources, you will only receive relevant tax alerts and firm updates. Every marketing communication contains a functioning one-click unsubscribe mechanism.
          </p>

          <h2 style={{ fontSize: 'var(--text-2xl)', color: 'var(--navy-950)', marginTop: '2.5rem', marginBottom: '1rem' }}>
            5. Payment Information Security (Stripe)
          </h2>
          <p>
            All electronic payments, retainers, and deposits are processed via Stripe Canada, a PCI-DSS Level 1 certified payment processor. Puri &amp; Loggia LLP does not store or process raw credit card numbers, CVVs, or bank account PINs on our servers.
          </p>

          <h2 style={{ fontSize: 'var(--text-2xl)', color: 'var(--navy-950)', marginTop: '2.5rem', marginBottom: '1rem' }}>
            6. Privacy Officer Contact
          </h2>
          <p>
            If you have questions regarding our data governance policies or wish to request the deletion of your prospective onboarding file, contact our designated privacy officer:
          </p>
          <div style={{ padding: '1.5rem', backgroundColor: 'var(--surface-alt)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-light)', marginTop: '1rem' }}>
            <div><strong>Puri &amp; Loggia LLP &bull; Privacy Officer</strong></div>
            <div>Mark Puri, CPA, MBA</div>
            <div>Email: <a href="mailto:support@cpapnl.com" style={{ color: 'var(--teal-600)' }}>support@cpapnl.com</a></div>
            <div>Phone: +1 416-801-6746</div>
            <div>Greater Toronto Area, Ontario, Canada</div>
          </div>
        </div>
      </section>
    </div>
  );
};
