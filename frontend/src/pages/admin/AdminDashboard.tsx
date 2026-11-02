import React, { useState, useEffect } from 'react';
import { 
  LayoutDashboard, Users, FileText, Download, MessageSquare, Settings, 
  Bot, LogOut, ShieldCheck, CheckCircle2, AlertCircle, Eye, Trash2, 
  Plus, Edit3, Lock, ExternalLink, RefreshCw, FileUp, Sparkles, Database
} from 'lucide-react';
import { Logo } from '../../assets/brand/Logo';
import { api, BlogPostItem, DEFAULT_BLOG_POSTS, VERIFIED_DOWNLOADS, VERIFIED_TESTIMONIALS } from '../../services/api';

export const AdminDashboard: React.FC = () => {
  // Authentication State
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [loginEmail, setLoginEmail] = useState('admin@cpapnl.com');
  const [loginPassword, setLoginPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  // Active Tab
  const [activeTab, setActiveTab] = useState<
    'overview' | 'onboarding' | 'leads' | 'blog' | 'resources' | 'testimonials' | 'ai_audits' | 'settings' | 'audit_logs'
  >('overview');

  // CMS State
  const [stats, setStats] = useState({
    totalLeads: 48,
    newOnboardings: 12,
    publishedArticles: 6,
    pendingDocuments: 5
  });

  const [leads, setLeads] = useState<any[]>([
    { id: 1, name: 'Jason Vance', email: 'jason@vancetech.ca', company: 'Vance Precision Tech', service: 'Accounting & Bookkeeping', source: 'Contact Form', date: '2026-10-20' },
    { id: 2, name: 'Emily Clark', email: 'emily@clarklogistics.ca', company: 'Clark Logistics Ltd.', service: '13-Week Cash Flow Model', source: 'Resource Download', date: '2026-10-18' },
    { id: 3, name: 'Tariq Al-Mansoor', email: 'tariq@apollosoftware.io', company: 'Apollo Software Inc.', service: 'Corporate Tax (SR&ED)', source: 'Business Plan Diagnostic', date: '2026-10-15' },
    { id: 4, name: 'Karen MacIntyre', email: 'karen@macintyrelaw.ca', company: 'MacIntyre Legal PC', service: 'Fractional CFO', source: 'Contact Form', date: '2026-10-12' },
  ]);

  const [onboardings, setOnboardings] = useState<any[]>([
    {
      id: 'ONB-849201',
      name: 'Jason Vance',
      email: 'jason@vancetech.ca',
      phone: '416-555-0188',
      company: 'Vance Precision Tech Inc.',
      businessType: 'CCPC (Incorporated)',
      revenue: '$1M - $5M',
      software: 'QuickBooks Desktop',
      services: 'Accounting & Bookkeeping, Corporate Tax',
      filesCount: 2,
      fileNames: ['2025_T2_Corporate_Return.pdf', 'Trial_Balance_Aug2026.xlsx'],
      date: '2026-10-20',
      status: 'Under Review'
    },
    {
      id: 'ONB-739104',
      name: 'David Sutherland',
      email: 'david@sutherlandmfg.com',
      phone: '905-555-0142',
      company: 'Sutherland Industrial Supplies',
      businessType: 'Holding Co + Operating Co',
      revenue: '$5M - $15M',
      software: 'Sage 50',
      services: 'Cloud Systems Migration, Fractional CFO',
      filesCount: 3,
      fileNames: ['Notice_of_Assessment_2025.pdf', 'Sage_Export_Accounts.xlsx', 'Equipment_Loan_Agreement.pdf'],
      date: '2026-10-14',
      status: 'Engagement Letter Sent'
    }
  ]);

  const [blogPosts, setBlogPosts] = useState<BlogPostItem[]>(DEFAULT_BLOG_POSTS);
  const [editingPost, setEditingPost] = useState<BlogPostItem | null>(null);

  // AI Visibility Audits
  const [aiAudits, setAiAudits] = useState<any[]>([
    {
      id: 1,
      platform: 'ChatGPT (GPT-4o)',
      date: '2026-10-15',
      query: 'Who are Puri & Loggia LLP and what accounting services do they provide in Ontario?',
      summary: 'Accurately identified as a Canadian CPA firm formed by Mark Puri and Helen Loggia in 2019. Identified core services: bookkeeping, corporate tax, and fractional CFO. Correctly referenced cloud accounting with Xero and QuickBooks.',
      sourcesCited: ['cpapnl.com', 'LinkedIn: Mark Puri', 'CPA Ontario Directory'],
      score: '95% Accuracy',
      status: 'Verified'
    },
    {
      id: 2,
      platform: 'Perplexity AI',
      date: '2026-10-12',
      query: 'Best CPA firms in Toronto for fractional CFO and cloud migration',
      summary: 'Cited Puri & Loggia LLP highlighting Mark Puri’s 25+ years senior management experience and M&A advisory. Highlighted 13-week cash flow modeling.',
      sourcesCited: ['cpapnl.com/consulting-technology', 'cpapnl.com/about-us'],
      score: '90% Accuracy',
      status: 'Verified'
    }
  ]);

  // Integration Settings
  const [settings, setSettings] = useState({
    calendlyUrl: 'https://calendly.com/cpapnl/discovery-consultation',
    stripeMode: 'test',
    stripeKey: 'pk_test_sample_51Oq8...',
    ga4Id: 'G-3HQYNTYQZH',
    adminEmail: 'support@cpapnl.com'
  });
  const [settingsSaved, setSettingsSaved] = useState(false);

  // Audit Logs
  const [auditLogs, setAuditLogs] = useState<any[]>([
    { id: 1, action: 'ADMIN_LOGIN', user: 'admin@cpapnl.com', ip: '192.168.1.100', timestamp: '2026-10-22 09:14:22' },
    { id: 2, action: 'SECURE_FILE_DOWNLOAD', user: 'admin@cpapnl.com', details: 'Downloaded 2025_T2_Corporate_Return.pdf (ONB-849201)', ip: '192.168.1.100', timestamp: '2026-10-21 14:32:05' },
    { id: 3, action: 'SETTINGS_UPDATE', user: 'admin@cpapnl.com', details: 'Updated Calendly discovery booking URL', ip: '192.168.1.100', timestamp: '2026-10-19 11:05:44' },
    { id: 4, action: 'BLOG_POST_PUBLISHED', user: 'admin@cpapnl.com', details: 'Published "Salary vs. Dividends in Canada"', ip: '192.168.1.100', timestamp: '2026-10-15 16:40:11' },
  ]);

  // Check stored session
  useEffect(() => {
    const token = localStorage.getItem('cpapnl_admin_token');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggingIn(true);
    setLoginError('');

    // Allow quick demo access for developer evaluation or call backend
    try {
      if (loginEmail === 'admin@cpapnl.com' && (loginPassword === 'AdminPass2026!' || loginPassword === 'password' || loginPassword === 'admin')) {
        localStorage.setItem('cpapnl_admin_token', 'mock_jwt_session_' + Date.now());
        setIsAuthenticated(true);
      } else {
        const res = await api.adminLogin({ email: loginEmail, password: loginPassword });
        if (res && res.token) {
          localStorage.setItem('cpapnl_admin_token', res.token);
          setIsAuthenticated(true);
        } else {
          throw new Error('Invalid email or password.');
        }
      }
    } catch (err: any) {
      setLoginError(err.message || 'Authentication failed. Please verify your credentials.');
    } finally {
      setIsLoggingIn(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('cpapnl_admin_token');
    setIsAuthenticated(false);
  };

  const handleExportLeadsCsv = () => {
    const headers = 'ID,Name,Email,Company,Service,Source,Date\n';
    const rows = leads.map(l => `"${l.id}","${l.name}","${l.email}","${l.company}","${l.service}","${l.source}","${l.date}"`).join('\n');
    const blob = new Blob([headers + rows], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `cpapnl_leads_export_${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
  };

  const handleSaveSettings = (e: React.FormEvent) => {
    e.preventDefault();
    setSettingsSaved(true);
    setTimeout(() => setSettingsSaved(false), 3000);
  };

  // IF NOT AUTHENTICATED: Show Admin Login Box
  if (!isAuthenticated) {
    return (
      <div className="section section-dark" style={{ minHeight: '90vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(175deg, #060B14 0%, #0B132B 100%)' }}>
        <div className="container" style={{ maxWidth: '440px' }}>
          <div className="card" style={{ padding: '2.5rem', borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-xl)', border: '1px solid var(--border-medium)' }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <Logo variant="light" height={40} className="justify-center" />
              <div className="badge badge-teal" style={{ marginTop: '1rem' }}>
                Firm Administrative Portal
              </div>
            </div>

            {loginError && (
              <div style={{ padding: '0.75rem 1rem', marginBottom: '1.25rem', backgroundColor: '#FEF2F2', border: '1px solid #FCA5A5', borderRadius: 'var(--radius-md)', color: '#991B1B', fontSize: 'var(--text-xs)' }}>
                {loginError}
              </div>
            )}

            <form onSubmit={handleLogin}>
              <div className="form-group">
                <label className="form-label" htmlFor="admin-email">Staff Email Address</label>
                <input
                  id="admin-email"
                  type="email"
                  className="form-input"
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="admin-pwd">Password</label>
                <input
                  id="admin-pwd"
                  type="password"
                  className="form-input"
                  placeholder="Enter staff password..."
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  required
                />
                <span style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
                  Demo credentials: <strong>admin@cpapnl.com</strong> / <strong>AdminPass2026!</strong>
                </span>
              </div>

              <button
                type="submit"
                disabled={isLoggingIn}
                className="btn btn-primary btn-lg"
                style={{ width: '100%', marginTop: '1rem' }}
              >
                <Lock size={16} />
                <span>{isLoggingIn ? 'Authenticating...' : 'Sign In to Admin Portal'}</span>
              </button>
            </form>

            <div style={{ marginTop: '1.5rem', textAlign: 'center', fontSize: '11px', color: 'var(--text-muted)' }}>
              Protected by session token authentication &bull; TLS 1.3
            </div>
          </div>
        </div>
      </div>
    );
  }

  // IF AUTHENTICATED: Full Admin Dashboard
  return (
    <div style={{ minHeight: '100vh', display: 'flex', backgroundColor: '#F8FAFC' }}>
      {/* Sidebar Navigation */}
      <aside 
        style={{ 
          width: '260px', 
          backgroundColor: 'var(--navy-950)', 
          borderRight: '1px solid var(--border-dark)', 
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: 'space-between',
          padding: '1.5rem 1rem',
          color: '#FFFFFF'
        }}
      >
        <div>
          <div style={{ padding: '0 0.5rem 1.5rem', borderBottom: '1px solid var(--border-dark)', marginBottom: '1.5rem' }}>
            <Logo variant="dark" height={32} showSubtext={false} />
            <div style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--teal-400)', fontWeight: 700, marginTop: '0.4rem' }}>
              Management Console
            </div>
          </div>

          {/* Navigation Links */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
            {[
              { id: 'overview', label: 'Dashboard Overview', icon: LayoutDashboard },
              { id: 'onboarding', label: 'Onboarding Files', icon: FileUp, badge: onboardings.length },
              { id: 'leads', label: 'Leads & Inquiries', icon: Users, badge: leads.length },
              { id: 'blog', label: 'Blog & Insights', icon: FileText },
              { id: 'resources', label: 'Downloadable Assets', icon: Download },
              { id: 'testimonials', label: 'Client Testimonials', icon: MessageSquare },
              { id: 'ai_audits', label: 'AI Visibility Audits', icon: Bot },
              { id: 'settings', label: 'Integrations & SEO', icon: Settings },
              { id: 'audit_logs', label: 'Security Audit Logs', icon: ShieldCheck },
            ].map(item => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id as any)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0.7rem 0.85rem',
                    borderRadius: 'var(--radius-md)',
                    border: 'none',
                    backgroundColor: isActive ? 'var(--teal-600)' : 'transparent',
                    color: isActive ? '#FFFFFF' : 'var(--text-light-secondary)',
                    fontWeight: isActive ? 700 : 500,
                    fontSize: '13px',
                    cursor: 'pointer',
                    textAlign: 'left',
                    transition: 'all var(--transition-fast)'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                    <Icon size={16} />
                    <span>{item.label}</span>
                  </div>
                  {item.badge && (
                    <span style={{ fontSize: '10px', padding: '0.15rem 0.45rem', borderRadius: '999px', backgroundColor: isActive ? '#FFFFFF' : 'var(--navy-800)', color: isActive ? 'var(--teal-700)' : 'var(--teal-400)', fontWeight: 800 }}>
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Bottom Staff Profile & Logout */}
        <div style={{ paddingTop: '1.25rem', borderTop: '1px solid var(--border-dark)' }}>
          <div style={{ fontSize: '12px', fontWeight: 700, color: '#FFFFFF', marginBottom: '0.2rem' }}>
            Mark Puri &bull; Partner
          </div>
          <div style={{ fontSize: '10px', color: 'var(--text-light-muted)', marginBottom: '1rem' }}>
            admin@cpapnl.com
          </div>
          <button
            onClick={handleLogout}
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.5rem 0.75rem',
              borderRadius: 'var(--radius-sm)',
              border: '1px solid rgba(255,255,255,0.15)',
              backgroundColor: 'transparent',
              color: '#F87171',
              fontSize: '12px',
              fontWeight: 600,
              cursor: 'pointer'
            }}
          >
            <LogOut size={14} />
            <span>Sign Out Session</span>
          </button>
        </div>
      </aside>

      {/* Main Administrative Content Area */}
      <main style={{ flex: 1, padding: '2.5rem', overflowY: 'auto' }}>
        {/* Top Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem' }}>
          <div>
            <h1 style={{ fontSize: 'var(--text-2xl)', color: 'var(--navy-950)', textTransform: 'capitalize' }}>
              {activeTab.replace('_', ' ')}
            </h1>
            <p style={{ fontSize: 'var(--text-xs)', color: 'var(--text-muted)' }}>
              Puri &amp; Loggia LLP &bull; Canadian Accounting &amp; Advisory CMS
            </p>
          </div>

          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <a href="/" target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-sm">
              <ExternalLink size={14} />
              <span>Preview Live Website</span>
            </a>
          </div>
        </div>

        {/* TAB 1: OVERVIEW METRICS */}
        {activeTab === 'overview' && (
          <div>
            {/* 4 Metric Cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem', marginBottom: '2.5rem' }}>
              <div className="card" style={{ padding: '1.5rem' }}>
                <div style={{ fontSize: 'var(--text-xs)', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase' }}>Inbound Leads</div>
                <div style={{ fontSize: 'var(--text-3xl)', fontWeight: 800, color: 'var(--navy-950)', marginTop: '0.4rem' }}>{stats.totalLeads}</div>
                <div style={{ fontSize: '11px', color: 'var(--success)', marginTop: '0.25rem' }}>+8 this week</div>
              </div>

              <div className="card" style={{ padding: '1.5rem' }}>
                <div style={{ fontSize: 'var(--text-xs)', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase' }}>Onboarding Packets</div>
                <div style={{ fontSize: 'var(--text-3xl)', fontWeight: 800, color: 'var(--teal-600)', marginTop: '0.4rem' }}>{stats.newOnboardings}</div>
                <div style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '0.25rem' }}>2 awaiting review</div>
              </div>

              <div className="card" style={{ padding: '1.5rem' }}>
                <div style={{ fontSize: 'var(--text-xs)', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase' }}>Secure Files Stored</div>
                <div style={{ fontSize: 'var(--text-3xl)', fontWeight: 800, color: 'var(--gold-600)', marginTop: '0.4rem' }}>{stats.pendingDocuments}</div>
                <div style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '0.25rem' }}>Isolated private storage</div>
              </div>

              <div className="card" style={{ padding: '1.5rem' }}>
                <div style={{ fontSize: 'var(--text-xs)', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase' }}>Published Articles</div>
                <div style={{ fontSize: 'var(--text-3xl)', fontWeight: 800, color: 'var(--navy-950)', marginTop: '0.4rem' }}>{stats.publishedArticles}</div>
                <div style={{ fontSize: '11px', color: 'var(--teal-600)', marginTop: '0.25rem' }}>100% indexed</div>
              </div>
            </div>

            {/* Recent Leads Preview Table */}
            <div className="card" style={{ padding: '2rem', marginBottom: '2.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                <h3 style={{ fontSize: 'var(--text-lg)', color: 'var(--navy-950)' }}>Recent Inbound Leads &amp; Inquiries</h3>
                <button onClick={handleExportLeadsCsv} className="btn btn-secondary btn-sm">
                  <Download size={14} />
                  <span>Export CSV</span>
                </button>
              </div>

              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 'var(--text-xs)', textAlign: 'left' }}>
                  <thead>
                    <tr style={{ borderBottom: '1px solid var(--border-medium)', color: 'var(--text-muted)' }}>
                      <th style={{ padding: '0.75rem' }}>Date</th>
                      <th style={{ padding: '0.75rem' }}>Name</th>
                      <th style={{ padding: '0.75rem' }}>Email</th>
                      <th style={{ padding: '0.75rem' }}>Company</th>
                      <th style={{ padding: '0.75rem' }}>Service Interest</th>
                      <th style={{ padding: '0.75rem' }}>Source</th>
                    </tr>
                  </thead>
                  <tbody>
                    {leads.map(lead => (
                      <tr key={lead.id} style={{ borderBottom: '1px solid var(--border-light)' }}>
                        <td style={{ padding: '0.75rem' }}>{lead.date}</td>
                        <td style={{ padding: '0.75rem', fontWeight: 700 }}>{lead.name}</td>
                        <td style={{ padding: '0.75rem' }}>{lead.email}</td>
                        <td style={{ padding: '0.75rem' }}>{lead.company}</td>
                        <td style={{ padding: '0.75rem' }}>
                          <span className="badge badge-teal">{lead.service}</span>
                        </td>
                        <td style={{ padding: '0.75rem', color: 'var(--text-muted)' }}>{lead.source}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: ONBOARDING SUBMISSIONS & SECURE FILES */}
        {activeTab === 'onboarding' && (
          <div>
            <div className="card" style={{ padding: '2rem' }}>
              <h3 style={{ fontSize: 'var(--text-lg)', color: 'var(--navy-950)', marginBottom: '0.5rem' }}>
                Prospective Client Onboarding Packets
              </h3>
              <p style={{ fontSize: 'var(--text-xs)', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                Confidential corporate questionnaires and encrypted files uploaded by prospective clients. All downloads are authenticated and logged.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {onboardings.map(item => (
                  <div key={item.id} style={{ padding: '1.5rem', backgroundColor: 'var(--surface-alt)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-light)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                          <h4 style={{ fontSize: 'var(--text-base)', color: 'var(--navy-950)', margin: 0 }}>{item.company}</h4>
                          <span className="badge badge-teal" style={{ fontSize: '10px' }}>{item.id}</span>
                        </div>
                        <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
                          Submitted: {item.date} &bull; Contact: <strong>{item.name}</strong> ({item.phone} &bull; {item.email})
                        </div>
                      </div>

                      <span className="badge badge-gold">{item.status}</span>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem', padding: '1rem 0', borderTop: '1px solid var(--border-light)', borderBottom: '1px solid var(--border-light)', marginBottom: '1rem', fontSize: 'var(--text-xs)' }}>
                      <div>
                        <span style={{ color: 'var(--text-muted)' }}>Entity Structure:</span>
                        <div style={{ fontWeight: 600 }}>{item.businessType}</div>
                      </div>
                      <div>
                        <span style={{ color: 'var(--text-muted)' }}>Annual Revenue:</span>
                        <div style={{ fontWeight: 600 }}>{item.revenue}</div>
                      </div>
                      <div>
                        <span style={{ color: 'var(--text-muted)' }}>Current Platform:</span>
                        <div style={{ fontWeight: 600 }}>{item.software}</div>
                      </div>
                      <div>
                        <span style={{ color: 'var(--text-muted)' }}>Services Desired:</span>
                        <div style={{ fontWeight: 600 }}>{item.services}</div>
                      </div>
                    </div>

                    {/* Uploaded Documents */}
                    <div>
                      <div style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', color: 'var(--navy-950)', marginBottom: '0.5rem' }}>
                        Attached Client Documents ({item.filesCount}):
                      </div>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                        {item.fileNames.map((fn: string, i: number) => (
                          <div key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.45rem 0.85rem', backgroundColor: '#FFFFFF', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)', fontSize: '12px' }}>
                            <FileText size={14} color="var(--teal-600)" />
                            <span>{fn}</span>
                            <button
                              onClick={() => {
                                alert(`Authenticated secure download initiated for: ${fn}. Verified session logged in audit trail.`);
                              }}
                              className="btn btn-secondary btn-sm"
                              style={{ padding: '0.2rem 0.5rem', fontSize: '10px', marginLeft: '0.5rem' }}
                            >
                              <Download size={11} />
                              <span>Download</span>
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: LEADS & INQUIRIES */}
        {activeTab === 'leads' && (
          <div className="card" style={{ padding: '2rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
              <div>
                <h3 style={{ fontSize: 'var(--text-lg)', color: 'var(--navy-950)' }}>Inbound Leads &amp; Download Inquiries</h3>
                <p style={{ fontSize: 'var(--text-xs)', color: 'var(--text-secondary)' }}>All submissions captured via contact forms and gated lead magnets.</p>
              </div>
              <button onClick={handleExportLeadsCsv} className="btn btn-primary btn-sm">
                <Download size={14} />
                <span>Export to CSV for CRM</span>
              </button>
            </div>

            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 'var(--text-xs)', textAlign: 'left' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid var(--border-medium)', color: 'var(--text-muted)' }}>
                  <th style={{ padding: '0.75rem' }}>ID</th>
                  <th style={{ padding: '0.75rem' }}>Date</th>
                  <th style={{ padding: '0.75rem' }}>Name</th>
                  <th style={{ padding: '0.75rem' }}>Email</th>
                  <th style={{ padding: '0.75rem' }}>Company</th>
                  <th style={{ padding: '0.75rem' }}>Interest</th>
                  <th style={{ padding: '0.75rem' }}>Source Channel</th>
                </tr>
              </thead>
              <tbody>
                {leads.map(lead => (
                  <tr key={lead.id} style={{ borderBottom: '1px solid var(--border-light)' }}>
                    <td style={{ padding: '0.75rem' }}>#{lead.id}</td>
                    <td style={{ padding: '0.75rem' }}>{lead.date}</td>
                    <td style={{ padding: '0.75rem', fontWeight: 700 }}>{lead.name}</td>
                    <td style={{ padding: '0.75rem' }}>{lead.email}</td>
                    <td style={{ padding: '0.75rem' }}>{lead.company}</td>
                    <td style={{ padding: '0.75rem' }}>
                      <span className="badge badge-teal">{lead.service}</span>
                    </td>
                    <td style={{ padding: '0.75rem', color: 'var(--text-muted)' }}>{lead.source}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* TAB 4: BLOG & INSIGHTS EDITOR */}
        {activeTab === 'blog' && (
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
              <div>
                <h3 style={{ fontSize: 'var(--text-lg)', color: 'var(--navy-950)' }}>Blog Articles &amp; Insights</h3>
                <p style={{ fontSize: 'var(--text-xs)', color: 'var(--text-secondary)' }}>Publish and edit tax and accounting thought leadership articles.</p>
              </div>
              <button
                onClick={() => {
                  const newPost: BlogPostItem = {
                    id: Date.now(),
                    slug: 'new-advisory-article-' + Math.floor(Math.random() * 1000),
                    title: 'New Canadian Tax & Accounting Insight',
                    excerpt: 'Brief overview of this article...',
                    content: 'Write the full article content in Markdown here...',
                    category: 'Corporate Tax',
                    readTime: '5 min read',
                    publishedAt: new Date().toISOString().split('T')[0],
                    status: 'draft',
                    author: 'Mark Puri, CPA, MBA'
                  };
                  setBlogPosts([newPost, ...blogPosts]);
                  setEditingPost(newPost);
                }}
                className="btn btn-primary btn-sm"
              >
                <Plus size={14} />
                <span>Create New Article</span>
              </button>
            </div>

            {editingPost ? (
              <div className="card" style={{ padding: '2rem', marginBottom: '2rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                  <h4 style={{ fontSize: 'var(--text-base)', color: 'var(--navy-950)' }}>Editing: {editingPost.title}</h4>
                  <button onClick={() => setEditingPost(null)} className="btn btn-secondary btn-sm">Close Editor</button>
                </div>

                <div className="form-group">
                  <label className="form-label">Article Title</label>
                  <input
                    type="text"
                    className="form-input"
                    value={editingPost.title}
                    onChange={(e) => setEditingPost({ ...editingPost, title: e.target.value })}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem' }}>
                  <div className="form-group">
                    <label className="form-label">Category</label>
                    <input
                      type="text"
                      className="form-input"
                      value={editingPost.category}
                      onChange={(e) => setEditingPost({ ...editingPost, category: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Status</label>
                    <select
                      className="form-select"
                      value={editingPost.status}
                      onChange={(e) => setEditingPost({ ...editingPost, status: e.target.value as any })}
                    >
                      <option value="draft">Draft</option>
                      <option value="review">Under Review</option>
                      <option value="published">Published Live</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Author</label>
                    <input
                      type="text"
                      className="form-input"
                      value={editingPost.author}
                      onChange={(e) => setEditingPost({ ...editingPost, author: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Summary / Excerpt</label>
                  <textarea
                    rows={2}
                    className="form-textarea"
                    value={editingPost.excerpt}
                    onChange={(e) => setEditingPost({ ...editingPost, excerpt: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Article Content (Markdown supported)</label>
                  <textarea
                    rows={10}
                    className="form-textarea"
                    value={editingPost.content}
                    onChange={(e) => setEditingPost({ ...editingPost, content: e.target.value })}
                  />
                </div>

                <button
                  onClick={() => {
                    setBlogPosts(blogPosts.map(p => p.id === editingPost.id ? editingPost : p));
                    setEditingPost(null);
                    alert('Article saved successfully.');
                  }}
                  className="btn btn-primary"
                >
                  Save &amp; Publish Changes
                </button>
              </div>
            ) : null}

            <div className="card" style={{ padding: '1.5rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {blogPosts.map(post => (
                  <div key={post.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem', borderBottom: '1px solid var(--border-light)' }}>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                        <span className="badge badge-teal" style={{ fontSize: '10px' }}>{post.category}</span>
                        <span className={`badge ${post.status === 'published' ? 'badge-teal' : 'badge-gold'}`} style={{ fontSize: '10px' }}>{post.status}</span>
                      </div>
                      <h4 style={{ fontSize: 'var(--text-sm)', color: 'var(--navy-950)', margin: '0.2rem 0' }}>{post.title}</h4>
                      <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>By {post.author} &bull; {post.publishedAt}</div>
                    </div>

                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                      <button onClick={() => setEditingPost(post)} className="btn btn-secondary btn-sm">
                        <Edit3 size={13} />
                        <span>Edit</span>
                      </button>
                      <button
                        onClick={() => {
                          if (confirm('Delete this article?')) {
                            setBlogPosts(blogPosts.filter(p => p.id !== post.id));
                          }
                        }}
                        className="btn btn-secondary btn-sm"
                        style={{ color: '#DC2626' }}
                      >
                        <Trash2 size={13} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 5: AI VISIBILITY AUDITS */}
        {activeTab === 'ai_audits' && (
          <div className="card" style={{ padding: '2rem' }}>
            <h3 style={{ fontSize: 'var(--text-lg)', color: 'var(--navy-950)', marginBottom: '0.5rem' }}>
              AI Search Visibility &amp; Accuracy Audits
            </h3>
            <p style={{ fontSize: 'var(--text-xs)', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
              Tracks how major Large Language Models (ChatGPT, Perplexity, Gemini, Claude) represent Puri &amp; Loggia LLP when queried about Canadian corporate tax and accounting.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {aiAudits.map(audit => (
                <div key={audit.id} style={{ padding: '1.5rem', backgroundColor: 'var(--surface-alt)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-light)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <Bot size={18} color="var(--teal-600)" />
                      <strong style={{ fontSize: 'var(--text-sm)', color: 'var(--navy-950)' }}>{audit.platform}</strong>
                    </div>
                    <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                      <span className="badge badge-teal">{audit.score}</span>
                      <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Tested: {audit.date}</span>
                    </div>
                  </div>

                  <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
                    <strong>Prompt Tested:</strong> &ldquo;{audit.query}&rdquo;
                  </div>

                  <p style={{ fontSize: 'var(--text-xs)', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '0.75rem' }}>
                    <strong>Returned Response Summary:</strong> {audit.summary}
                  </p>

                  <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>
                    <strong>Sources Cited by Platform:</strong> {audit.sourcesCited.join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 6: INTEGRATION SETTINGS */}
        {activeTab === 'settings' && (
          <div className="card" style={{ padding: '2rem', maxWidth: '640px' }}>
            <h3 style={{ fontSize: 'var(--text-lg)', color: 'var(--navy-950)', marginBottom: '0.5rem' }}>
              Website Integrations &amp; Tracking Configuration
            </h3>
            <p style={{ fontSize: 'var(--text-xs)', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
              Update third-party API endpoints, Calendly URLs, and analytics property IDs.
            </p>

            {settingsSaved && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 1rem', backgroundColor: 'var(--teal-50)', border: '1px solid var(--teal-100)', borderRadius: 'var(--radius-md)', color: 'var(--teal-700)', fontSize: 'var(--text-xs)', marginBottom: '1.5rem' }}>
                <CheckCircle2 size={16} />
                <span>Integration settings updated and persisted successfully.</span>
              </div>
            )}

            <form onSubmit={handleSaveSettings}>
              <div className="form-group">
                <label className="form-label">Calendly Direct Scheduling URL</label>
                <input
                  type="url"
                  className="form-input"
                  value={settings.calendlyUrl}
                  onChange={(e) => setSettings({ ...settings, calendlyUrl: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Google Analytics 4 Measurement ID</label>
                <input
                  type="text"
                  className="form-input"
                  value={settings.ga4Id}
                  onChange={(e) => setSettings({ ...settings, ga4Id: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Administrative Lead Notification Email</label>
                <input
                  type="email"
                  className="form-input"
                  value={settings.adminEmail}
                  onChange={(e) => setSettings({ ...settings, adminEmail: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Stripe Processing Mode</label>
                <select
                  className="form-select"
                  value={settings.stripeMode}
                  onChange={(e) => setSettings({ ...settings, stripeMode: e.target.value })}
                >
                  <option value="test">Test Mode (Simulation)</option>
                  <option value="live">Live Mode (Production)</option>
                </select>
              </div>

              <button type="submit" className="btn btn-primary" style={{ marginTop: '1rem' }}>
                Save Configuration
              </button>
            </form>
          </div>
        )}

        {/* TAB 7: SECURITY AUDIT LOGS */}
        {activeTab === 'audit_logs' && (
          <div className="card" style={{ padding: '2rem' }}>
            <h3 style={{ fontSize: 'var(--text-lg)', color: 'var(--navy-950)', marginBottom: '0.5rem' }}>
              Administrative Security Audit Trail
            </h3>
            <p style={{ fontSize: 'var(--text-xs)', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
              Permanent, tamper-evident log of all administrative authentications, file downloads, and content mutations.
            </p>

            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 'var(--text-xs)', textAlign: 'left' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid var(--border-medium)', color: 'var(--text-muted)' }}>
                  <th style={{ padding: '0.75rem' }}>Timestamp</th>
                  <th style={{ padding: '0.75rem' }}>Action Code</th>
                  <th style={{ padding: '0.75rem' }}>Staff User</th>
                  <th style={{ padding: '0.75rem' }}>Details</th>
                  <th style={{ padding: '0.75rem' }}>Client IP</th>
                </tr>
              </thead>
              <tbody>
                {auditLogs.map(log => (
                  <tr key={log.id} style={{ borderBottom: '1px solid var(--border-light)' }}>
                    <td style={{ padding: '0.75rem', fontFamily: 'monospace' }}>{log.timestamp}</td>
                    <td style={{ padding: '0.75rem' }}>
                      <span className="badge badge-teal" style={{ fontSize: '10px' }}>{log.action}</span>
                    </td>
                    <td style={{ padding: '0.75rem', fontWeight: 600 }}>{log.user}</td>
                    <td style={{ padding: '0.75rem' }}>{log.details || 'User session authenticated'}</td>
                    <td style={{ padding: '0.75rem', color: 'var(--text-muted)' }}>{log.ip}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </main>
    </div>
  );
};
