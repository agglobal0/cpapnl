import React from 'react';
import { ShieldAlert, Scale } from 'lucide-react';

export const Terms: React.FC = () => {
  return (
    <div>
      <section className="section section-dark" style={{ background: 'linear-gradient(175deg, #060B14 0%, #0B132B 100%)', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="badge badge-gold" style={{ marginBottom: '1rem' }}>
            Legal Terms
          </div>
          <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', color: '#FFFFFF', marginBottom: '1.25rem' }}>
            Terms of Website Use &amp; Engagement
          </h1>
          <p style={{ fontSize: 'var(--text-lg)', color: 'var(--text-light-secondary)', lineHeight: 1.6 }}>
            Please read these terms before accessing our resources, diagnostic tools, or submitting prospective client onboarding files.
          </p>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: 'var(--surface-base)' }}>
        <div className="container" style={{ maxWidth: '820px', lineHeight: 1.8, fontSize: 'var(--text-base)', color: 'var(--text-primary)' }}>
          <h2 style={{ fontSize: 'var(--text-2xl)', color: 'var(--navy-950)', marginBottom: '1rem' }}>
            1. Nature of Website Content &amp; Financial Calculators
          </h2>
          <p>
            The information, calculators, checklists, templates, and blog articles published on <strong>https://cpapnl.com</strong> are provided strictly for educational and informational purposes. They do not constitute formal professional accounting, legal, or tax advice.
          </p>
          <p>
            No formal CPA-client fiduciary relationship is established merely by accessing this website, submitting an inquiry, downloading a resource, or utilizing an online calculator. A binding professional engagement is established solely upon the mutual execution of an official Puri &amp; Loggia LLP Engagement Letter.
          </p>

          <h2 style={{ fontSize: 'var(--text-2xl)', color: 'var(--navy-950)', marginTop: '2.5rem', marginBottom: '1rem' }}>
            2. Limitation of Liability
          </h2>
          <p>
            While Puri &amp; Loggia LLP strives to ensure all Canadian corporate tax rates (e.g. Ontario Small Business Deduction limits, CCPC rules, CRA deadlines) are accurate and up to date, tax legislation changes frequently. Puri &amp; Loggia LLP assumes no liability for actions taken or omitted based on website content without direct professional consultation.
          </p>

          <h2 style={{ fontSize: 'var(--text-2xl)', color: 'var(--navy-950)', marginTop: '2.5rem', marginBottom: '1rem' }}>
            3. Third-Party Portals &amp; External Integrations
          </h2>
          <p>
            Our website provides convenience links to external cloud accounting platforms (Xero, QuickBooks Online, Wagepoint, Hubdoc, Stripe). These independent third parties maintain separate terms of service, security protocols, and privacy policies. Puri &amp; Loggia LLP does not operate external software servers or control their uptime.
          </p>

          <h2 style={{ fontSize: 'var(--text-2xl)', color: 'var(--navy-950)', marginTop: '2.5rem', marginBottom: '1rem' }}>
            4. Governing Law
          </h2>
          <p>
            These terms are governed exclusively by the laws of the Province of Ontario and the federal laws of Canada applicable therein. Any legal proceeding arising from website use shall be brought exclusively in the courts located in Toronto, Ontario.
          </p>
        </div>
      </section>
    </div>
  );
};
