import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Search } from 'lucide-react';

export const NotFound: React.FC = () => {
  return (
    <div className="section section-dark" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', textAlign: 'center', background: 'linear-gradient(175deg, #060B14 0%, #0B132B 100%)' }}>
      <div className="container" style={{ maxWidth: '640px' }}>
        <div style={{ fontSize: 'clamp(5rem, 12vw, 8rem)', fontWeight: 800, color: 'var(--teal-500)', lineHeight: 1 }}>
          404
        </div>
        <h1 style={{ fontSize: 'var(--text-3xl)', color: '#FFFFFF', margin: '1rem 0' }}>
          Page Not Found
        </h1>
        <p style={{ fontSize: 'var(--text-base)', color: 'var(--text-light-secondary)', lineHeight: 1.6, marginBottom: '2.5rem' }}>
          The requested page may have been moved as part of our recent website migration. Use our directory below to locate the desired service or resource.
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center', marginBottom: '3rem' }}>
          <Link to="/" className="btn btn-primary">
            <Home size={16} />
            <span>Return to Homepage</span>
          </Link>
          <Link to="/resources" className="btn btn-secondary-dark">
            <span>Explore Resource Hub &rarr;</span>
          </Link>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', fontSize: 'var(--text-xs)', color: 'var(--text-light-muted)' }}>
          <Link to="/services/accounting-bookkeeping" style={{ color: 'var(--teal-400)' }}>Bookkeeping</Link>
          <span>&bull;</span>
          <Link to="/services/taxation" style={{ color: 'var(--teal-400)' }}>Corporate Tax</Link>
          <span>&bull;</span>
          <Link to="/resources/calculators" style={{ color: 'var(--teal-400)' }}>Calculators</Link>
          <span>&bull;</span>
          <Link to="/contact" style={{ color: 'var(--teal-400)' }}>Contact</Link>
        </div>
      </div>
    </div>
  );
};
