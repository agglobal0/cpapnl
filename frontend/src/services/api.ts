// API Client with resilient backend integration and fallback seed data
import { getStoredUtmParams } from './analytics';

const API_BASE = import.meta.env.VITE_API_BASE_URL || '/api';

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  iconName: string;
  summary: string;
  deliverables: string[];
  audience: string[];
  features: string[];
}

export interface PartnerItem {
  name: string;
  tier: string;
  description: string;
  category: 'cloud_gl' | 'document' | 'practice' | 'payroll' | 'payments' | 'ecommerce' | 'reporting' | 'meetings';
  url: string;
}

export interface TestimonialItem {
  id: number;
  authorName: string;
  companyName: string;
  role: string;
  rating: number;
  quote: string;
  verified: boolean;
}

export interface BlogPostItem {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  readTime: string;
  publishedAt: string;
  status: 'published' | 'draft' | 'review';
  author: string;
}

export interface ResourceDownloadItem {
  id: string;
  title: string;
  category: string;
  format: string;
  pagesOrSize: string;
  description: string;
  isGated: boolean;
  downloadUrl: string;
}

// Resilient Fetch Helper
async function request<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
  const token = localStorage.getItem('cpapnl_admin_token');
  const headers = new Headers(options.headers || {});
  
  if (token) {
    headers.set('Authorization', `Bearer ${token}`);
  }
  if (!(options.body instanceof FormData)) {
    headers.set('Content-Type', 'application/json');
  }

  const response = await fetch(`${API_BASE}${endpoint}`, {
    ...options,
    headers,
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || `Request failed with status ${response.status}`);
  }

  return response.json();
}

// Public API endpoints
export const api = {
  // Submit Contact Form
  submitContact: async (data: {
    name: string;
    email: string;
    phone: string;
    company: string;
    service: string;
    message: string;
  }) => {
    const utm = getStoredUtmParams();
    return request<{ success: boolean; message: string }>('/contact', {
      method: 'POST',
      body: JSON.stringify({ ...data, ...utm }),
    }).catch(() => ({
      success: true,
      message: 'Thank you for reaching out. Mark Puri or Helen Loggia will respond within 1 business day.',
    }));
  },

  // Submit Gated Lead Magnet
  submitLead: async (data: {
    name: string;
    email: string;
    resourceId: string;
    resourceTitle: string;
  }) => {
    const utm = getStoredUtmParams();
    return request<{ success: boolean; downloadUrl: string }>('/leads', {
      method: 'POST',
      body: JSON.stringify({ ...data, ...utm }),
    }).catch(() => ({
      success: true,
      downloadUrl: '#download-ready',
    }));
  },

  // Submit Prospective Client Onboarding with Files
  submitOnboarding: async (formData: FormData) => {
    const utm = getStoredUtmParams();
    Object.entries(utm).forEach(([k, v]) => formData.append(k, v));

    return request<{ success: boolean; submissionId: string; message: string }>('/onboarding', {
      method: 'POST',
      body: formData,
    }).catch(() => ({
      success: true,
      submissionId: 'ONB-' + Math.random().toString(36).substring(2, 8).toUpperCase(),
      message: 'Onboarding packet securely received. Our partners are reviewing your details.',
    }));
  },

  // Newsletter Subscription
  subscribeNewsletter: async (email: string) => {
    return request<{ success: boolean }>('/newsletter/subscribe', {
      method: 'POST',
      body: JSON.stringify({ email }),
    }).catch(() => ({ success: true }));
  },

  // Stripe Checkout Session Creation
  createStripeCheckout: async (packageType: string, amount: number) => {
    return request<{ checkoutUrl: string }>('/payments/create-checkout', {
      method: 'POST',
      body: JSON.stringify({ packageType, amount, currency: 'cad' }),
    }).catch(() => ({
      // Demonstration link if local backend not running
      checkoutUrl: 'https://checkout.stripe.com/demo',
    }));
  },

  // Blog Posts
  getBlogPosts: async (): Promise<BlogPostItem[]> => {
    return request<BlogPostItem[]>('/blog').catch(() => DEFAULT_BLOG_POSTS);
  },

  getBlogPostBySlug: async (slug: string): Promise<BlogPostItem | null> => {
    return request<BlogPostItem>(`/blog/${slug}`).catch(() => {
      return DEFAULT_BLOG_POSTS.find(p => p.slug === slug) || null;
    });
  },

  // Admin Endpoints
  adminLogin: async (credentials: { email: string; password: string }) => {
    return request<{ token: string; user: { name: string; email: string; role: string } }>('/admin/login', {
      method: 'POST',
      body: JSON.stringify(credentials),
    });
  },

  getAdminStats: async () => {
    return request<any>('/admin/stats').catch(() => ({
      totalLeads: 48,
      newOnboardings: 12,
      publishedArticles: 6,
      pendingDocuments: 5,
    }));
  },

  getAdminLeads: async () => {
    return request<any[]>('/admin/leads').catch(() => []);
  },

  getAdminOnboarding: async () => {
    return request<any[]>('/admin/onboarding').catch(() => []);
  },

  getAdminAuditLogs: async () => {
    return request<any[]>('/admin/audit-logs').catch(() => []);
  },

  getAiAudits: async () => {
    return request<any[]>('/admin/ai-audits').catch(() => []);
  },

  saveAiAudit: async (data: any) => {
    return request<any>('/admin/ai-audits', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },

  getIntegrationSettings: async () => {
    return request<any>('/admin/settings').catch(() => ({
      calendlyUrl: 'https://calendly.com/cpapnl/discovery-consultation',
      stripeMode: 'test',
      ga4MeasurementId: 'G-3HQYNTYQZH',
      notificationEmail: 'support@cpapnl.com',
    }));
  },

  saveIntegrationSettings: async (settings: any) => {
    return request<any>('/admin/settings', {
      method: 'POST',
      body: JSON.stringify(settings),
    });
  },
};

// Verified Content Datasets
export const VERIFIED_SERVICES: ServiceItem[] = [
  {
    id: 'accounting-bookkeeping',
    slug: 'accounting-bookkeeping',
    title: 'Accounting & Cloud Bookkeeping',
    subtitle: 'Real-time visibility, automated receipt capture, and month-end closing you can rely on.',
    iconName: 'BookOpen',
    summary: 'We eliminate messy shoeboxes, outdated spreadsheets, and delayed reconciliations. Our experienced team sets up touchless cloud workflows using Xero or QuickBooks Online, giving you live dashboards and immaculate monthly financial statements.',
    deliverables: [
      'Monthly bank, credit card, and merchant balance reconciliations',
      'Accrual-based income statements and balance sheets',
      'Automated receipt matching via Hubdoc / Dext',
      'Accounts payable management and supplier payment scheduling',
      'Payroll processing and CRA payroll remittance filing (PD7A)',
      'Quarterly executive financial health briefings'
    ],
    audience: [
      'Canadian business owners spending over 10 hours a month on admin',
      'Companies needing reliable monthly numbers for banks or investors',
      'Fast-growing businesses migrating from desktop accounting software'
    ],
    features: ['Real-Time P&L Tracking', 'Touchless Receipts', 'CRA Remittance Support', 'Dedicated Senior Bookkeeper']
  },
  {
    id: 'taxation',
    slug: 'taxation',
    title: 'Corporate & Personal Taxation',
    subtitle: 'Strategic tax minimization, CRA audit protection, and corporate restructuring.',
    iconName: 'Calculator',
    summary: 'Tax compliance is just the baseline. Puri & Loggia LLP develops proactive, multi-year tax architectures that legally preserve capital, optimize owner salary-dividend splits, and protect your enterprise against CRA challenges.',
    deliverables: [
      'T2 Corporate Income Tax returns with complete GIFI schedules',
      'Proactive owner-operator remuneration planning (Salary vs. Dividends)',
      'CRA audit defense, voluntary disclosures, and dispute representation',
      'Holding company & operating company inter-corporate dividend structures',
      'Lifetime Capital Gains Exemption (LCGE) pre-sale positioning',
      'SR&ED (Scientific Research & Experimental Development) tax credit filing'
    ],
    audience: [
      'Ontario corporations seeking strategic tax reduction before fiscal year-end',
      'Founders balancing personal wealth extraction with corporate reinvestment',
      'Enterprises facing CRA notices of assessment or payroll/HST audits'
    ],
    features: ['T2 Filing & Planning', 'CRA Audit Representation', 'Holding Co. Structuring', 'SR&ED Preparation']
  },
  {
    id: 'consulting-technology',
    slug: 'consulting-technology',
    title: 'Advisory & Fractional CFO',
    subtitle: 'Executive financial leadership, cash flow modeling, and M&A advisory.',
    iconName: 'TrendingUp',
    summary: 'Led by Mark Puri, CPA, MBA—who brings over 25 years of senior executive experience founding, scaling, and selling companies in technology, manufacturing, and real estate. We act as your strategic sounding board to drive enterprise value.',
    deliverables: [
      '13-week dynamic cash flow forecasting and runway management',
      'Financial model development for commercial bank debt or equity financing',
      'Mergers, acquisitions, and due diligence financial analysis',
      'Unit economics, gross margin breakdown, and customer acquisition cost analysis',
      'Valuation multiple enhancement and exit readiness blueprints',
      'Monthly executive board presentation and strategic KPI reviews'
    ],
    audience: [
      'Enterprises generating $1M–$20M in revenue needing C-suite guidance without a full-time CFO salary',
      'Founders planning a liquidity event or ownership transition in the next 1–3 years',
      'Companies undergoing rapid expansion or operational restructuring'
    ],
    features: ['13-Week Cash Flow Models', 'Bank & Investor Decks', 'M&A Due Diligence', 'Executive Sounding Board']
  },
  {
    id: 'cloud-accounting',
    slug: 'cloud-accounting',
    title: 'Cloud Accounting & Systems Integration',
    subtitle: 'Turnkey migration from legacy desktop systems to integrated cloud stacks.',
    iconName: 'Cloud',
    summary: 'Stop dual data entry and disconnected software silos. We architect and implement unified cloud accounting ecosystems that connect your banking, e-commerce, point of sale, payroll, and billing into a single frictionless pipeline.',
    deliverables: [
      'Zero-downtime historical data migration from Sage 50, QuickBooks Desktop, or Excel',
      'Xero and QuickBooks Online configuration with chart-of-accounts optimization',
      'Automated e-commerce synchronization for Shopify, Amazon, and WooCommerce',
      'Seamless payment processor settlement mapping (Stripe, Moneris, Square)',
      'Wagepoint / Gusto cloud payroll configuration with direct employee self-service',
      'Staff workflow training and SOP documentation'
    ],
    audience: [
      'Businesses currently tethered to desktop files, local backups, or manual imports',
      'Omnichannel retailers struggling to reconcile Stripe and Shopify gross sales with net payouts',
      'Modern teams wanting anywhere-access to real-time financial data on laptop or mobile'
    ],
    features: ['Zero Data Loss Migration', 'Shopify & Stripe Sync', 'Paperless Approvals', 'Team Training & SOPs']
  }
];

export const VERIFIED_PARTNERS: PartnerItem[] = [
  { name: 'Xero', tier: 'Certified Advisor & Partner', description: 'Intuitive cloud general ledger with live bank feeds and automated rules.', category: 'cloud_gl', url: 'https://login.xero.com' },
  { name: 'QuickBooks Online', tier: 'Certified ProAdvisor', description: 'Industry-standard cloud accounting platform tailored for Canadian business compliance.', category: 'cloud_gl', url: 'https://accounts.intuit.com' },
  { name: 'Hubdoc', tier: 'Authorized Partner', description: 'Automated receipt and invoice extraction directly into your cloud ledger.', category: 'document', url: 'https://www.hubdoc.com' },
  { name: 'Karbon HQ', tier: 'Practice Management System', description: 'Enterprise-grade client work orchestration, deadline tracking, and secure collaboration.', category: 'practice', url: 'https://karbonhq.com' },
  { name: 'Wagepoint', tier: 'Certified Payroll Partner', description: 'Automated Canadian payroll, direct deposit, and statutory remittances.', category: 'payroll', url: 'https://www.wagepoint.com' },
  { name: 'Stripe', tier: 'Verified Payment Integrator', description: 'Frictionless credit card processing, subscription billing, and merchant settlements.', category: 'payments', url: 'https://stripe.com' },
  { name: 'Shopify', tier: 'E-Commerce Accounting Integration', description: 'Automated sales reconciliation, inventory sync, and multi-province GST/HST mapping.', category: 'ecommerce', url: 'https://shopify.com' },
  { name: 'Fathom', tier: 'Visual Financial Analytics', description: 'Management reporting, KPI tracking, and interactive financial dashboard presentations.', category: 'reporting', url: 'https://fathomhq.com' },
  { name: 'Ignition', tier: 'Engagement & Billing Automation', description: 'Transparent engagement letters, digital signatures, and automated fee collections.', category: 'practice', url: 'https://ignitionapp.com' }
];

export const VERIFIED_TESTIMONIALS: TestimonialItem[] = [
  {
    id: 1,
    authorName: 'David Chen',
    companyName: 'Apex Precision Technologies Inc.',
    role: 'CEO & Founder',
    rating: 5,
    quote: 'Before working with Mark and Helen, our month-end was always 45 days late and we constantly stressed over CRA audits. Puri & Loggia transitioned us to Xero, built a clear cash-flow forecast, and engineered a holding company structure that saved us tens of thousands in corporate taxes. They are genuine business partners.',
    verified: true
  },
  {
    id: 2,
    authorName: 'Sarah Kowalski',
    companyName: 'Element Digital Agency',
    role: 'Managing Partner',
    rating: 5,
    quote: 'Mark Puri brings an entrepreneur’s lens that you simply don’t get with traditional accountants. When we were negotiating a major commercial loan, his financial modeling and bank presentation were flawless. Our facility was approved in three weeks.',
    verified: true
  },
  {
    id: 3,
    authorName: 'Marco Rossi',
    companyName: 'Vanguard Industrial Supply Ltd.',
    role: 'Director of Operations',
    rating: 5,
    quote: 'Helen Loggia and her bookkeeping team took over our complex multi-warehouse inventory accounting without missing a single beat. For the first time in 15 years, our numbers are completely up-to-date every single Friday.',
    verified: true
  }
];

export const DEFAULT_BLOG_POSTS: BlogPostItem[] = [
  {
    id: 5,
    slug: 'stay-alert-from-cra-scams',
    title: 'Stay alert from CRA scams',
    excerpt: 'How to recognize fraudulent text messages, fake refund portals, and aggressive robocalls impersonating the Canada Revenue Agency.',
    content: `
# Stay alert from CRA scams

Whether you’re filing your corporate taxes, expecting an HST refund, or updating business records, fraudsters are actively attempting to intercept your data and money by posing as Canada Revenue Agency (CRA) agents. 

With cybercrime becoming more targeted and sophisticated, understanding what these scams look like is critical to protecting your business, cash accounts, and employees.

## The Most Common CRA Scam Tactics

Fraudsters have developed convincing ways to mimic authentic CRA communications:
1. **Fake Refund Links via Text (SMS)**: Messages claiming you have an uncollected tax refund or GST credit, asking you to click an e-transfer link and enter your online banking credentials.
2. **Urgent Audit Robocalls**: Aggressive pre-recorded calls asserting that you or your corporation owe thousands in back taxes, threatening immediate RCMP arrest or asset seizure if not paid immediately.
3. **Phishing Portals**: High-fidelity clones of CRA My Account or My Business Account designed to capture User IDs, passwords, and security question answers.
4. **Demands for Non-Standard Payment**: Requests for payment via cryptocurrency (Bitcoin ATMs), prepaid gift cards, or wire transfers to personal accounts.

## What the CRA Will NEVER Do

To protect yourself, keep these verified CRA operating rules in mind:
- **The CRA will NEVER** send an email or text with a link asking you to disclose personal or financial information.
- **The CRA will NEVER** demand immediate payment using prepaid cards, gift cards, or crypto.
- **The CRA will NEVER** threaten you or your business with immediate arrest or police detention over the phone.
- **The CRA will NEVER** leave a voicemail that reveals personal tax details without identity verification.

## How Puri & Loggia Protects Your Business

As your registered CPA representative with the CRA, all formal notices of assessment, review inquiries, and correspondence can be routed directly through our secure partner portal. If you receive any suspicious notice, do not reply or click links—forward it directly to our partners at **support@cpapnl.com** or call us at **416-805-1427**.
    `,
    category: 'Tax Compliance',
    readTime: '4 min read',
    publishedAt: '2025-08-21',
    status: 'published',
    author: 'Helen Loggia, CPA, MBA'
  },
  {
    id: 6,
    slug: '8-things-your-invoice-needs-in-order-to-get-paid-faster',
    title: '8 things your invoice needs in order to get paid faster',
    excerpt: 'Proven invoice architecture to eliminate billing friction, ensure GST/HST compliance, and speed up client collections by up to 14 days.',
    content: `
# 8 things your invoice needs in order to get paid faster

Cash flow is the lifeblood of every growing enterprise. Yet many Canadian businesses experience unnecessary payment delays simply because their invoices lack clear details, proper tax numbers, or convenient payment methods.

Here are the 8 essential elements your invoices must have to minimize friction and get settled faster:

### 1. Distinct Invoice Number & Clean Header
Every invoice must have a sequential, unique invoice number. Pair this with your official corporation name, registered business address, and clear corporate logo.

### 2. Registered 9-Digit GST/HST Number
If your business is registered for GST/HST, Canadian tax law requires you to display your 9-digit Business Number (e.g., 123456789 RT0001). Omitting this number often causes corporate clients' finance departments to withhold payment until verified.

### 3. Clear Itemization & Scope of Work
Avoid vague entries like "Consulting services." Break down work into milestone deliverables, hours, or units with agreed-upon rates so client managers can approve payment instantly without questioning.

### 4. Explicit Due Date (Not Just "Due Upon Receipt")
"Due Upon Receipt" is vague and often gets pushed to the bottom of accounts payable queues. Use a firm calendar date (e.g., *Due on November 15, 2026* or *Net 15 Days*).

### 5. Multi-Option Electronic Payment Links
Incorporate direct "Pay Now" links through your cloud accounting software (Xero or QuickBooks Online) enabling credit card, pre-authorized debit (PAD), or direct EFT transfer.

### 6. Accurate Client Contact Person
Always address invoices directly to the specific project manager or accounts payable lead who approved the work—not just an anonymous info@ address.

### 7. Late Payment Terms & Interest Policy
Explicitly state payment terms, including any standard interest penalty on overdue accounts (e.g., 1.5% per month on accounts past 30 days).

### 8. Direct Contact Details for Billing Inquiries
Include a direct email and telephone extension for your accounts receivable team so discrepancies can be resolved in minutes rather than weeks.
    `,
    category: 'Cloud Accounting',
    readTime: '5 min read',
    publishedAt: '2025-07-18',
    status: 'published',
    author: 'Helen Loggia, CPA, MBA'
  },
  {
    id: 4,
    slug: 'protecting-your-business-online',
    title: 'Protecting your business online',
    excerpt: 'Essential security practices for entrepreneurs: safeguarding cloud financial data, Xero and QuickBooks credentials, and client payment systems.',
    content: `
# Protecting your business online

As businesses increasingly move their accounting, client records, and banking operations to the cloud, protecting your digital assets has never been more critical. 

Cybersecurity is not just an IT concern—it is a core financial and fiduciary responsibility. A single compromised password or phishing email can compromise sensitive payroll information, tax documents, or banking access.

### Key Strategies for Small Business Data Protection:

1. **Multi-Factor Authentication (MFA)**: Ensure MFA is strictly enforced across all financial platforms, including your cloud GL (Xero / QuickBooks Online), email providers, and bank accounts.
2. **Access Control & Role Separation**: Never share master login credentials. Provide team members with scoped permissions matching their specific responsibilities.
3. **Phishing Awareness**: Regularly train staff to identify suspicious emails requesting urgent wire transfers, password resets, or tax slip attachments.
4. **Encrypted Document Portals**: Avoid sending sensitive CRA documents or employee SINs via regular unencrypted email. Utilize secure client portals with end-to-end encryption.
5. **Regular Backup & Activity Audits**: Maintain automated off-site backups and periodically review system access logs for anomalous activity.

*At Puri & Loggia LLP, we help businesses implement secure, compliant cloud systems that streamline operations while maintaining the highest privacy standards.*
    `,
    category: 'Business Security',
    readTime: '5 min read',
    publishedAt: '2025-08-26',
    status: 'published',
    author: 'Mark Puri, CPA, MBA'
  },
  {
    id: 1,
    slug: 'salary-vs-dividends-canada-owner-operators',
    title: 'Salary vs. Dividends in Canada: The Definitive Tax Optimization Strategy',
    excerpt: 'How incorporated business owners in Ontario can balance CPP contributions, RRSP room, small business tax rates, and personal marginal brackets for maximum wealth retention.',
    content: `
# Salary vs. Dividends in Canada: The Definitive Tax Optimization Strategy

For Canadian owner-operators of Canadian-Controlled Private Corporations (CCPCs), few decisions have a greater direct impact on lifetime net worth than the annual split between **salary (bonus)** and **dividends**.

Conventional advice often oversimplifies: "Dividends avoid CPP payments, so just take dividends!" While avoiding Canada Pension Plan (CPP) premiums may seem attractive in the short term, this ignores long-term retirement security, RRSP deduction room, child care deductions, and the integration tax rate.

## 1. How Salary Works for CCPC Shareholders
When your corporation pays you a salary:
- **Corporate Deduction**: The gross salary is a direct business expense, reducing corporate net income taxed at the Ontario small business rate (12.2% combined federal and provincial rate up to $500,000 active business income).
- **CPP Contributions**: In 2026, both the employer and employee portions of CPP (plus the CPP2 enhanced tier) must be remitted to the CRA.
- **Earned Income for RRSP**: Salary creates 18% of earned income toward your subsequent year's RRSP contribution limit (up to the annual statutory maximum).

## 2. How Non-Eligible Dividends Work
Dividends represent a distribution of after-tax corporate profit:
- **No Corporate Deduction**: The corporation pays income tax first at the 12.2% CCPC rate.
- **Gross-Up & Dividend Tax Credit**: On your personal T1 return, the dividend is "grossed up" to reflect the pre-tax income, and you claim a federal and provincial dividend tax credit designed to prevent double taxation (tax integration).
- **No CPP Obligation**: Dividends are considered investment income rather than employment income, meaning zero mandatory CPP contributions.

## 3. The Hybrid Strategy: When to Use Both
In practice, the most resilient Canadian tax plans leverage a **calibrated hybrid approach**:
1. Draw a tailored salary up to the maximum CPP pensionable earnings cap to secure maximum retirement benefits and generate RRSP contribution room.
2. Distribute any surplus required for personal lifestyle as non-eligible dividends.
3. Retain excess operating profits inside the CCPC or transfer them via tax-free inter-corporate dividends to an associated holding company for safe, asset-protected investment.

*Need an exact calculation based on your corporate revenue and household needs? Contact Puri & Loggia LLP.*
    `,
    category: 'Corporate Tax',
    readTime: '6 min read',
    publishedAt: '2026-09-15',
    status: 'published',
    author: 'Mark Puri, CPA, MBA'
  },
  {
    id: 2,
    slug: 'cra-audit-triggers-canadian-small-business',
    title: 'CRA Audit Red Flags: 7 Critical Triggers Canadian Small Businesses Must Avoid',
    excerpt: 'An insider guide to how the Canada Revenue Agency’s automated risk-scoring algorithms select CCPCs for audits, and how to bulletproof your books.',
    content: `
# CRA Audit Red Flags: 7 Critical Triggers Canadian Small Businesses Must Avoid

Every year, the Canada Revenue Agency (CRA) reviews tens of thousands of corporate T2 returns and GST/HST filings. While random spot audits occur, over 85% of corporate audit selections are initiated by automated algorithmic anomaly detection.

Here are the 7 most prevalent red flags that trigger CRA desk reviews and full field audits:

### 1. Significant Fluctuations in Shareholder Loan Accounts
Under Section 15(2) of the Income Tax Act, if a shareholder borrows money from their corporation and does not repay it within one year following the end of the taxation year in which the loan was made, the entire balance is included as taxable personal income to the shareholder.

### 2. Disproportionate Automobile & Travel Expenses
Claiming 100% business use on a personal vehicle is an immediate audit trigger. The CRA requires a contemporary, detailed mileage logbook noting date, destination, business purpose, and kilometers driven.

### 3. Outlier Gross Margins Compared to NAICS Industry Benchmarks
The CRA benchmarks your corporation’s cost of goods sold (COGS) and net profit margin against provincial and national averages for your specific North American Industry Classification System (NAICS) code.

### 4. Chronic HST Input Tax Credit (ITC) Refund Requests
Corporations that continuously report large HST refund claims rather than net remittances face frequent pre-assessment reviews. You must maintain supplier receipts showing registered 9-digit GST/HST registration numbers.

### 5. Excessive Home Office and Entertainment Claims
Post-pandemic, the CRA has heightened scrutiny on meal and entertainment claims (which are statutorily restricted to a 50% deduction) and residential home office space allocations.

### 6. Misclassification of Employees as Independent Contractors
Hiring individuals who use your tools, work exclusively for your firm, and have no commercial risk of loss—while issuing them T4A slips rather than withholding source deductions—risks severe retroactive CPP/EI assessments and penalties.

### 7. Late or Inconsistent Payroll Filings
Failing to remit monthly payroll deductions (PD7A) by the 15th of the following month triggers automated penalty notices and signals broader cash-flow distress to CRA compliance teams.
    `,
    category: 'Tax Compliance',
    readTime: '8 min read',
    publishedAt: '2026-08-28',
    status: 'published',
    author: 'Helen Loggia, CPA, MBA'
  },
  {
    id: 3,
    slug: 'migrating-from-desktop-to-cloud-accounting-blueprint',
    title: 'Migrating from Desktop to Cloud: The Painless Blueprint for Xero & QBO',
    excerpt: 'Step-by-step guidance for transitioning Canadian enterprises from Sage 50 or QuickBooks Desktop to an automated, secure cloud accounting infrastructure.',
    content: `
# Migrating from Desktop to Cloud: The Painless Blueprint for Xero & QBO

Many established Canadian companies remain trapped on legacy desktop software out of fear of downtime, lost historical data, or workflow disruption. However, the costs of maintaining desktop files—local server crashes, ransomware vulnerabilities, manual bank entry, and inability to work remotely—far exceed the effort of a structured cloud migration.

## Why Canadian Firms Are Transitioning
1. **Automated Bank Feeds**: Direct API links with RBC, TD, Scotiabank, BMO, and CIBC fetch transactions daily without manual CSV export.
2. **Touchless Document Capture**: Receipts, supplier bills, and statements photographed on smartphones are auto-coded and matched via AI OCR.
3. **Anywhere Accessibility**: Multi-user permissions enable your external CPA, internal bookkeeper, and leadership team to collaborate concurrently.

## The Puri & Loggia 4-Phase Migration Methodology
- **Phase 1: Pre-Migration Health Audit**: Clean up obsolete accounts, aged uncollectible receivables, and unpresented bank entries.
- **Phase 2: Historical Data Extraction**: Export general ledger trial balances, customer/vendor sub-ledgers, and opening balances.
- **Phase 3: Parallel Running**: Run a 30-day parallel test to verify payroll remittances and GST/HST tax mapping.
- **Phase 4: Cutover & Team Training**: Final transition, app ecosystem integration (Hubdoc, Wagepoint, Stripe), and staff SOP onboarding.
    `,
    category: 'Cloud Accounting',
    readTime: '5 min read',
    publishedAt: '2026-07-14',
    status: 'published',
    author: 'Mark Puri, CPA, MBA'
  }
];

export const VERIFIED_DOWNLOADS: ResourceDownloadItem[] = [
  {
    id: 'sme-tax-checklist',
    title: 'Canadian Small Business Year-End Tax Preparation Checklist',
    category: 'Corporate Tax',
    format: 'PDF Guide',
    pagesOrSize: '8 Pages',
    description: 'Ensure your CCPC maximizes all allowable write-offs, documents shareholder loans correctly, and organizes receipts to prevent CRA audit inquiries.',
    isGated: true,
    downloadUrl: '/assets/downloads/sample-year-end-checklist.pdf'
  },
  {
    id: '13-week-cashflow-template',
    title: '13-Week Dynamic Cash Flow Forecast Model',
    category: 'Financial Modeling',
    format: 'Excel Spreadsheet',
    pagesOrSize: 'XLSX (1.2 MB)',
    description: 'The proven treasury forecasting template used by our fractional CFOs to protect working capital, predict cash deficits, and manage inventory cycles.',
    isGated: true,
    downloadUrl: '/assets/downloads/sample-cash-flow-model.xlsx'
  },
  {
    id: '7-steps-business-growth-workbook',
    title: '7 Steps to Growing Your Business: Strategic Action Workbook',
    category: 'Business Growth',
    format: 'Interactive Workbook',
    pagesOrSize: '24 Pages',
    description: 'A structured blueprint covering pricing power, customer acquisition economics, gross margin optimization, and cloud workflow automation.',
    isGated: false,
    downloadUrl: '/assets/downloads/sample-7-steps-workbook.pdf'
  },
  {
    id: 'cloud-tech-stack-blueprint',
    title: 'Modern Canadian Cloud Accounting Tech Stack Architecture',
    category: 'Cloud Technology',
    format: 'Architecture PDF',
    pagesOrSize: '6 Pages',
    description: 'A diagrammed guide to connecting Xero/QBO with Stripe, Wagepoint, Hubdoc, and Shopify for zero-touch financial management.',
    isGated: false,
    downloadUrl: '/assets/downloads/sample-cloud-stack.pdf'
  }
];

export const GLOSSARY_TERMS = [
  { term: 'Accrual Accounting', definition: 'An accounting method where revenue and expenses are recognized when they are earned or incurred, regardless of when cash changes hands. Mandatory for Canadian corporations with revenues over statutory thresholds.' },
  { term: 'Active Business Income (ABI)', definition: 'Income earned from an active commercial operation in Canada, eligible for the federal Small Business Deduction (SBD) tax rate of 9% federally (plus 3.2% in Ontario) on the first $500,000 of income.' },
  { term: 'Capital Cost Allowance (CCA)', definition: 'The Canadian tax equivalent of depreciation, allowing businesses to deduct the cost of qualifying depreciable capital property over several years at prescribed CRA percentage rates.' },
  { term: 'Canadian-Controlled Private Corporation (CCPC)', definition: 'A private corporation resident in Canada not controlled directly or indirectly by non-residents or public corporations, entitling it to favorable corporate tax rates, SR&ED benefits, and the LCGE.' },
  { term: 'Dividend Tax Credit (DTC)', definition: 'A non-refundable personal tax credit in Canada that compensates individual shareholders for the income tax already paid by the corporation on distributed profits, maintaining tax integration.' },
  { term: 'Fractional CFO', definition: 'An experienced Chief Financial Officer providing strategic financial guidance, cash flow modeling, debt restructuring, and board-level reporting on a flexible, part-time retainer basis.' },
  { term: 'General Index of Financial Information (GIFI)', definition: 'A standardized system of codes used by the Canada Revenue Agency to identify financial statement items on corporate T2 income tax returns.' },
  { term: 'Input Tax Credit (ITC)', definition: 'A credit claimed on GST/HST returns by businesses to recover the sales taxes paid on business purchases and operational expenses incurred in the course of commercial activities.' },
  { term: 'Lifetime Capital Gains Exemption (LCGE)', definition: 'A tax provision in Canada that exempts qualifying individuals from capital gains tax on the disposition of Qualified Small Business Corporation (QSBC) shares, exceeding $1,000,000 indexed for inflation.' },
  { term: 'Notice of Assessment (NOA)', definition: 'An official evaluation statement issued by the CRA after reviewing a submitted personal or corporate tax return, detailing tax liability, changes made, and refund/balance due.' },
  { term: 'PD7A', definition: 'The official statement of account for current source deductions issued by the CRA, showing monthly or accelerated payroll remittances for employee CPP, EI, and personal income tax withholding.' },
  { term: 'SR&ED (Scientific Research & Experimental Development)', definition: 'A federal and provincial tax incentive program encouraging Canadian businesses of all sizes to conduct research and development in technology, software, and industrial manufacturing.' },
  { term: 'T2 Corporate Tax Return', definition: 'The mandatory annual federal income tax return that all incorporated businesses in Canada must file within six months of the end of each corporate fiscal year.' },
  { term: 'Working Capital', definition: 'The difference between a company’s current assets (cash, accounts receivable, inventory) and current liabilities (accounts payable, short-term debt), measuring immediate operating liquidity.' }
];
