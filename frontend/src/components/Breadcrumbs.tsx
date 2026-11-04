import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

const ROUTE_LABELS: Record<string, string> = {
  'about-us': 'About Us',
  'services': 'Services',
  'accounting-bookkeeping': 'Accounting & Bookkeeping',
  'taxation': 'Corporate Taxation',
  'consulting-technology': 'Consulting & Advisory',
  'cloud-accounting': 'Cloud Accounting',
  'payroll': 'Payroll Services',
  'partners': 'Partners',
  'referral-program': 'Referral Program',
  'xero': 'Xero Integration',
  'quickbooks-online': 'QuickBooks Online',
  'resources': 'Resources Hub',
  'blog': 'Blog & Insights',
  'calculators': 'Tax & Financial Calculators',
  '7-steps-to-growing-your-business': '7 Steps Course',
  'downloads': 'Free Downloads',
  'case-studies': 'Case Studies',
  'testimonials': 'Client Testimonials',
  'pricing': 'Pricing & Quote Builder',
  'contact': 'Contact Us',
  'client-area': 'Client Portal',
  'onboarding': 'Client Onboarding',
  'privacy': 'Privacy Policy',
  'terms': 'Terms of Engagement',
};

export const Breadcrumbs: React.FC = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(x => x);

  // Do not render breadcrumbs on root homepage or admin routes
  if (pathnames.length === 0 || pathnames[0] === 'admin') {
    return null;
  }

  return (
    <nav 
      aria-label="Breadcrumb"
      style={{
        backgroundColor: '#0F213A',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        padding: '0.65rem 0',
        fontSize: '12.5px',
      }}
    >
      <div className="container">
        <ol 
          itemScope 
          itemType="https://schema.org/BreadcrumbList"
          style={{
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '0.4rem',
            listStyle: 'none',
            margin: 0,
            padding: 0,
          }}
        >
          <li 
            itemProp="itemListElement" 
            itemScope 
            itemType="https://schema.org/ListItem"
            style={{ display: 'inline-flex', alignItems: 'center' }}
          >
            <Link 
              to="/" 
              itemProp="item"
              style={{
                color: 'rgba(255, 255, 255, 0.7)',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
              }}
            >
              <Home size={13} color="#FCAC14" />
              <span itemProp="name">Home</span>
            </Link>
            <meta itemProp="position" content="1" />
          </li>

          {pathnames.map((segment, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
            const isLast = index === pathnames.length - 1;
            const position = index + 2;
            const label = ROUTE_LABELS[segment] || segment.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());

            return (
              <React.Fragment key={routeTo}>
                <li aria-hidden="true" style={{ color: 'rgba(255, 255, 255, 0.3)', display: 'inline-flex', alignItems: 'center' }}>
                  <ChevronRight size={13} />
                </li>
                <li 
                  itemProp="itemListElement" 
                  itemScope 
                  itemType="https://schema.org/ListItem"
                  style={{ display: 'inline-flex', alignItems: 'center' }}
                >
                  {isLast ? (
                    <span 
                      itemProp="name" 
                      aria-current="page"
                      style={{ color: '#FCAC14', fontWeight: 600 }}
                    >
                      {label}
                    </span>
                  ) : (
                    <Link 
                      to={routeTo} 
                      itemProp="item"
                      style={{ color: 'rgba(255, 255, 255, 0.7)', textDecoration: 'none' }}
                    >
                      <span itemProp="name">{label}</span>
                    </Link>
                  )}
                  <meta itemProp="position" content={position.toString()} />
                </li>
              </React.Fragment>
            );
          })}
        </ol>
      </div>
    </nav>
  );
};

