import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ArrowRight, Calendar, User, Clock } from 'lucide-react';
import { DEFAULT_BLOG_POSTS } from '../../services/api';

export const BlogList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('ALL');

  const categories = ['ALL', 'Corporate Tax', 'Tax Compliance', 'Cloud Accounting'];

  const filtered = DEFAULT_BLOG_POSTS.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCat = categoryFilter === 'ALL' || post.category === categoryFilter;
    return matchesSearch && matchesCat;
  });

  return (
    <div>
      {/* 1. Authentic Subpage Banner */}
      <div className="page-hero-banner">
        <div className="container">
          <div className="badge badge-gold" style={{ marginBottom: '1rem' }}>
            Thought Leadership &amp; Advisory
          </div>
          <h1>Tax &amp; Accounting Articles</h1>
          <p>
            Practical, executive-level insights on Canadian corporate tax optimization, CRA audit protection, and modern cloud bookkeeping.
          </p>

          <div style={{ maxWidth: '540px', margin: '2rem auto 0', position: 'relative' }}>
            <Search size={18} color="#94A3B8" style={{ position: 'absolute', left: '1.25rem', top: '50%', transform: 'translateY(-50%)' }} />
            <input
              type="text"
              className="form-input"
              placeholder="Search articles by topic..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ paddingLeft: '3rem', borderRadius: 'var(--radius-full)', backgroundColor: '#FFFFFF', color: '#0F294A', fontSize: '14px', border: '1px solid #CBD5E1' }}
            />
          </div>
        </div>
      </div>

      {/* 2. Main Articles List */}
      <section className="section" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container">
          {/* Category Tabs */}
          <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', marginBottom: '3.5rem', flexWrap: 'wrap' }}>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setCategoryFilter(cat)}
                className={`btn btn-sm ${categoryFilter === cat ? 'btn-primary' : 'btn-secondary'}`}
                style={{ padding: '0.5rem 1rem' }}
              >
                {cat}
              </button>
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
            {filtered.map(post => (
              <article 
                key={post.id} 
                className="card card-accent-top"
                style={{ 
                  borderRadius: 'var(--radius-md)', 
                  padding: '2.25rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  backgroundColor: '#FFFFFF'
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                    <span className="badge badge-gold">{post.category}</span>
                    <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{post.readTime}</span>
                  </div>

                  <h2 style={{ fontSize: 'var(--text-xl)', color: 'var(--navy-900)', marginBottom: '0.75rem', lineHeight: 1.35, fontWeight: 700 }}>
                    <Link to={`/resources/blog/${post.slug}`} style={{ color: 'inherit' }}>
                      {post.title}
                    </Link>
                  </h2>

                  <p style={{ fontSize: '13.5px', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                    {post.excerpt}
                  </p>
                </div>

                <div style={{ paddingTop: '1.25rem', borderTop: '1px solid var(--border-light)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '12px' }}>
                  <span style={{ color: 'var(--text-muted)' }}>By {post.author}</span>
                  <Link to={`/resources/blog/${post.slug}`} style={{ fontWeight: 700, color: 'var(--navy-800)', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                    <span>Read Article</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
