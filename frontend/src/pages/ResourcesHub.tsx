import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Calculator, BookOpen, Download, Search, Sparkles, FileText, 
  HelpCircle, ArrowRight, CheckCircle2 
} from 'lucide-react';
import { VERIFIED_DOWNLOADS, DEFAULT_BLOG_POSTS } from '../services/api';

export const ResourcesHub: React.FC<{ onOpenLeadModal: (res: any) => void }> = ({ onOpenLeadModal }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredDownloads = VERIFIED_DOWNLOADS.filter(d => 
    d.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    d.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    d.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      {/* 1. Authentic Subpage Banner (Executive desk photography) */}
      <div className="page-hero-banner">
        <div className="container">
          <div className="badge badge-gold" style={{ marginBottom: '1rem' }}>
            Knowledge Hub &bull; Financial Tools
          </div>
          <h1>Canadian Accounting &amp; Business Resources</h1>
          <p>
            Interactive financial calculators, CRA tax checklists, dynamic cash flow models, and strategic business guides.
          </p>

          {/* Quick Search */}
          <div style={{ maxWidth: '540px', margin: '2rem auto 0', position: 'relative' }}>
            <Search size={18} color="#94A3B8" style={{ position: 'absolute', left: '1.25rem', top: '50%', transform: 'translateY(-50%)' }} />
            <input
              type="text"
              className="form-input"
              placeholder="Search guides, calculators, and checklists..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ paddingLeft: '3rem', borderRadius: 'var(--radius-full)', backgroundColor: '#FFFFFF', color: '#0F294A', fontSize: '14px', border: '1px solid #CBD5E1' }}
            />
          </div>
        </div>
      </div>

      {/* 2. Featured Core Tools Grid */}
      <section className="section" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
            {/* Tool 1: Calculators */}
            <div className="card card-accent-gold" style={{ borderRadius: 'var(--radius-md)', padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', backgroundColor: '#FFFFFF' }}>
              <div>
                <span className="badge badge-gold" style={{ marginBottom: '1rem' }}>Interactive Models</span>
                <h3 style={{ fontSize: 'var(--text-xl)', marginBottom: '0.75rem', color: 'var(--navy-900)', fontWeight: 700 }}>
                  Financial Calculators
                </h3>
                <p style={{ fontSize: '13.5px', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  Interactive tools for Ontario small business tax estimation, equipment loan amortization, break-even targets, and runway burn.
                </p>
              </div>
              <Link to="/resources/calculators" className="btn btn-gold" style={{ width: '100%', justifyContent: 'center' }}>
                <span>Open Calculators &rarr;</span>
              </Link>
            </div>

            {/* Tool 2: 7 Steps */}
            <div className="card card-accent-top" style={{ borderRadius: 'var(--radius-md)', padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', backgroundColor: '#FFFFFF' }}>
              <div>
                <span className="badge badge-navy" style={{ marginBottom: '1rem' }}>Signature Framework</span>
                <h3 style={{ fontSize: 'var(--text-xl)', marginBottom: '0.75rem', color: 'var(--navy-900)', fontWeight: 700 }}>
                  7 Steps to Growing Your Business
                </h3>
                <p style={{ fontSize: '13.5px', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  A structured 7-part framework covering margin optimization, customer retention, distribution leverage, and cloud workflows.
                </p>
              </div>
              <Link to="/resources/7-steps-to-growing-your-business" className="btn btn-secondary" style={{ width: '100%', justifyContent: 'center' }}>
                <span>View 7-Step Framework &rarr;</span>
              </Link>
            </div>
          </div>

          {/* Downloadable Checklists & Templates */}
          <div style={{ marginBottom: '4rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
              <div>
                <span className="badge badge-navy" style={{ marginBottom: '0.5rem' }}>Free Templates</span>
                <h2 style={{ fontSize: 'var(--text-2xl)', color: 'var(--navy-900)' }}>Downloadable Practice Toolkits</h2>
              </div>
              <Link to="/resources/downloads" style={{ fontSize: 'var(--text-sm)', fontWeight: 700, color: 'var(--navy-800)' }}>
                View All Downloads &rarr;
              </Link>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
              {filteredDownloads.map(res => (
                <div key={res.id} className="card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', borderRadius: 'var(--radius-md)', backgroundColor: '#FFFFFF' }}>
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                      <span className="badge badge-gold" style={{ fontSize: '10px' }}>{res.format}</span>
                      <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>{res.pagesOrSize}</span>
                    </div>
                    <h4 style={{ fontSize: 'var(--text-base)', color: 'var(--navy-900)', marginBottom: '0.5rem', fontWeight: 700 }}>{res.title}</h4>
                    <p style={{ fontSize: '12.5px', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '1.25rem' }}>{res.description}</p>
                  </div>
                  <button onClick={() => onOpenLeadModal(res)} className="btn btn-primary btn-sm" style={{ width: '100%', justifyContent: 'center' }}>
                    <Download size={14} />
                    <span>Download {res.format} &rarr;</span>
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Articles */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
              <div>
                <span className="badge badge-gold" style={{ marginBottom: '0.5rem' }}>Editorial Insights</span>
                <h2 style={{ fontSize: 'var(--text-2xl)', color: 'var(--navy-900)' }}>Tax &amp; Accounting Articles</h2>
              </div>
              <Link to="/resources/blog" style={{ fontSize: 'var(--text-sm)', fontWeight: 700, color: 'var(--navy-800)' }}>
                View All Articles &rarr;
              </Link>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
              {DEFAULT_BLOG_POSTS.slice(0, 3).map(post => (
                <div key={post.id} className="card" style={{ borderRadius: 'var(--radius-md)', backgroundColor: '#FFFFFF' }}>
                  <div style={{ fontSize: '11.5px', color: 'var(--gold-600)', fontWeight: 700, marginBottom: '0.4rem' }}>{post.category} &bull; {post.readTime}</div>
                  <h4 style={{ fontSize: 'var(--text-base)', marginBottom: '0.5rem', fontWeight: 700 }}>
                    <Link to={`/resources/blog/${post.slug}`} style={{ color: 'var(--navy-900)' }}>{post.title}</Link>
                  </h4>
                  <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.5 }}>{post.excerpt}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
