import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Clock, Share2, Mail, Copy, Check, ShieldCheck } from 'lucide-react';
import { api, BlogPostItem, DEFAULT_BLOG_POSTS } from '../../services/api';
import { setPageSEO } from '../../services/seo';

export const BlogPost: React.FC<{ onBookConsultation: (context?: string) => void }> = ({ onBookConsultation }) => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPostItem | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (slug) {
      api.getBlogPostBySlug(slug).then(p => {
        if (p) {
          setPost(p);
          setPageSEO({
            title: `${p.title.slice(0, 55)} | Puri & Loggia LLP`,
            description: p.excerpt.slice(0, 155),
            canonical: `https://cpapnl.com/resources/blog/${p.slug}`,
          });
        } else {
          setPost(DEFAULT_BLOG_POSTS[0]);
        }
      });
    }
  }, [slug]);

  if (!post) {
    return (
      <div className="section" style={{ textAlign: 'center', padding: '6rem 0' }}>
        <p>Loading article...</p>
      </div>
    );
  }

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div>
      {/* 1. Authentic Subpage Banner */}
      <div className="page-hero-banner">
        <div className="container" style={{ maxWidth: '840px', textAlign: 'left' }}>
          <Link to="/resources/blog" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: '#FCD34D', fontSize: '13px', fontWeight: 700, marginBottom: '1.25rem' }}>
            <ArrowLeft size={14} />
            <span>Back to All Articles</span>
          </Link>

          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '1rem', flexWrap: 'wrap' }}>
            <span className="badge badge-gold">{post.category}</span>
            <span style={{ fontSize: '12px', color: '#E2E8F0' }}>{post.readTime}</span>
            <span style={{ fontSize: '12px', color: '#E2E8F0' }}>Published: {post.publishedAt}</span>
          </div>

          <h1 style={{ fontSize: 'clamp(1.85rem, 3.8vw, 3rem)', color: '#FFFFFF', marginBottom: '1.5rem', lineHeight: 1.25, fontWeight: 800 }}>
            {post.title}
          </h1>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', paddingTop: '1.25rem', borderTop: '1px solid rgba(255,255,255,0.15)' }}>
            <div style={{ width: '42px', height: '42px', borderRadius: 'var(--radius-xs)', backgroundColor: 'var(--navy-800)', color: '#FCD34D', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, border: '1px solid #D97706' }}>
              {post.author.charAt(0)}
            </div>
            <div>
              <div style={{ color: '#FFFFFF', fontWeight: 700, fontSize: '14px' }}>{post.author}</div>
              <div style={{ fontSize: '12px', color: '#E2E8F0' }}>Puri &amp; Loggia LLP &bull; Chartered Professional Accountants</div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Article Body */}
      <section className="section" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container" style={{ maxWidth: '840px' }}>
          {/* Share Bar */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '1.5rem', marginBottom: '2.5rem', borderBottom: '1px solid var(--border-light)' }}>
            <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase' }}>
              Share this Advisory Article:
            </span>

            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button
                onClick={handleCopyLink}
                className="btn btn-secondary btn-sm"
                style={{ fontSize: '12px', gap: '0.35rem' }}
              >
                {copied ? <Check size={14} color="#15803D" /> : <Copy size={14} />}
                <span>{copied ? 'Copied URL!' : 'Copy Link'}</span>
              </button>
            </div>
          </div>

          {/* Render Content Cleanly */}
          <div 
            style={{ 
              fontSize: '16.5px', 
              color: 'var(--text-secondary)', 
              lineHeight: 1.85,
              whiteSpace: 'pre-line'
            }}
          >
            {post.content}
          </div>

          {/* Author Callout Box */}
          <div style={{ marginTop: '4rem', padding: '2.5rem', backgroundColor: 'var(--surface-alt)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
              <div style={{ flex: 1, minWidth: '260px' }}>
                <span className="badge badge-gold" style={{ marginBottom: '0.5rem' }}>
                  Need Guidance on This Topic?
                </span>
                <h3 style={{ fontSize: 'var(--text-xl)', marginBottom: '0.5rem', color: 'var(--navy-900)', fontWeight: 800 }}>
                  Discuss Your Business Strategy with Mark Puri &amp; Helen Loggia
                </h3>
                <p style={{ fontSize: '13.5px', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                  Reach out to our partners to evaluate your corporate structure, tax minimization opportunities, and cloud accounting workflows.
                </p>
              </div>

              <Link
                to="/contact"
                className="btn btn-primary btn-lg"
                style={{ flexShrink: 0 }}
              >
                <span>Contact Our Team &rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
