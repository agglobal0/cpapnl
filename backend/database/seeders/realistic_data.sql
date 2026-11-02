-- ============================================================
-- PURI & LOGGIA LLP - SEED DATA SCRIPT
-- ============================================================

-- 1. Insert Initial Admin User
INSERT INTO `admins` (`id`, `name`, `email`, `password_hash`, `role`, `status`) VALUES
(1, 'Mark Puri, CPA, MBA', 'admin@cpapnl.com', '$2y$10$KQKUv0Ltu10.M88bu0JCvuyucKdpQEDmAJODf21QRN7SR7fekZgAy', 'partner', 'active')
ON DUPLICATE KEY UPDATE `name` = VALUES(`name`);

-- 2. Insert Blog Posts
INSERT INTO `blog_posts` (`slug`, `title`, `excerpt`, `content`, `category`, `read_time`, `author`, `status`, `published_at`) VALUES
('salary-vs-dividends-canada-owner-operators',
 'Salary vs. Dividends in Canada: The Definitive Tax Optimization Strategy',
 'How incorporated business owners in Ontario can balance CPP contributions, RRSP room, small business tax rates, and personal marginal brackets for maximum wealth retention.',
 '# Salary vs. Dividends in Canada: The Definitive Tax Optimization Strategy\n\nFor Canadian owner-operators of Canadian-Controlled Private Corporations (CCPCs), few decisions have a greater direct impact on lifetime net worth than the annual split between salary (bonus) and dividends.\n\n## 1. How Salary Works for CCPC Shareholders\nWhen your corporation pays you a salary, it acts as a direct deductible business expense reducing corporate net income.\n\n## 2. How Non-Eligible Dividends Work\nDividends represent a distribution of after-tax corporate profit.\n\n## 3. The Hybrid Strategy: When to Use Both\nIn practice, the most resilient Canadian tax plans leverage a calibrated hybrid approach.',
 'Corporate Tax', '6 min read', 'Mark Puri, CPA, MBA', 'published', '2026-09-15 10:00:00'),

('cra-audit-triggers-canadian-small-business',
 'CRA Audit Red Flags: 7 Critical Triggers Canadian Small Businesses Must Avoid',
 'An insider guide to how the Canada Revenue Agency’s automated risk-scoring algorithms select CCPCs for audits, and how to bulletproof your books.',
 '# CRA Audit Red Flags: 7 Critical Triggers Canadian Small Businesses Must Avoid\n\nEvery year, the Canada Revenue Agency (CRA) reviews tens of thousands of corporate T2 returns and GST/HST filings.\n\n### 1. Significant Fluctuations in Shareholder Loan Accounts\n### 2. Disproportionate Automobile & Travel Expenses\n### 3. Outlier Gross Margins Compared to NAICS Industry Benchmarks\n### 4. Chronic HST Input Tax Credit (ITC) Refund Requests\n### 5. Excessive Home Office and Entertainment Claims\n### 6. Misclassification of Employees as Independent Contractors\n### 7. Late or Inconsistent Payroll Filings',
 'Tax Compliance', '8 min read', 'Helen Loggia, CPA', 'published', '2026-08-28 14:00:00'),

('migrating-from-desktop-to-cloud-accounting-blueprint',
 'Migrating from Desktop to Cloud: The Painless Blueprint for Xero & QBO',
 'Step-by-step guidance for transitioning Canadian enterprises from Sage 50 or QuickBooks Desktop to an automated, secure cloud accounting infrastructure.',
 '# Migrating from Desktop to Cloud: The Painless Blueprint for Xero & QBO\n\nMany established Canadian companies remain trapped on legacy desktop software out of fear of downtime.\n\n## The Puri & Loggia 4-Phase Migration Methodology\n- Phase 1: Pre-Migration Health Audit\n- Phase 2: Historical Data Extraction\n- Phase 3: Parallel Running\n- Phase 4: Cutover & Team Training',
 'Cloud Accounting', '5 min read', 'Mark Puri, CPA, MBA', 'published', '2026-07-14 09:30:00');

-- 3. Insert Downloadable Resources
INSERT INTO `resources` (`id`, `title`, `category`, `format`, `pages_or_size`, `description`, `is_gated`, `download_url`) VALUES
('sme-tax-checklist', 'Canadian Small Business Year-End Tax Preparation Checklist', 'Corporate Tax', 'PDF Guide', '8 Pages', 'Ensure your CCPC maximizes all allowable write-offs and organizes receipts to prevent CRA audit inquiries.', 1, '/downloads/sample-year-end-checklist.pdf'),
('13-week-cashflow-template', '13-Week Dynamic Cash Flow Forecast Model', 'Financial Modeling', 'Excel Spreadsheet', 'XLSX (1.2 MB)', 'The proven treasury forecasting template used by our fractional CFOs to protect working capital.', 1, '/downloads/sample-cash-flow-model.xlsx'),
('7-steps-business-growth-workbook', '7 Steps to Growing Your Business: Strategic Action Workbook', 'Business Growth', 'Interactive Workbook', '24 Pages', 'A structured blueprint covering pricing power, customer acquisition economics, and cloud workflows.', 0, '/downloads/sample-7-steps-workbook.pdf'),
('cloud-tech-stack-blueprint', 'Modern Canadian Cloud Accounting Tech Stack Architecture', 'Cloud Technology', 'Architecture PDF', '6 Pages', 'A diagrammed guide to connecting Xero/QBO with Stripe, Wagepoint, Hubdoc, and Shopify.', 0, '/downloads/sample-cloud-stack.pdf');

-- 4. Insert Verified Testimonials
INSERT INTO `testimonials` (`author_name`, `company_name`, `role`, `rating`, `quote`, `verified`, `is_approved`, `display_order`) VALUES
('David Chen', 'Apex Precision Technologies Inc.', 'CEO & Founder', 5, 'Before working with Mark and Helen, our month-end was always 45 days late. Puri & Loggia transitioned us to Xero, built a clear cash-flow forecast, and engineered a holding company structure that saved us tens of thousands in corporate taxes.', 1, 1, 1),
('Sarah Kowalski', 'Element Digital Agency', 'Managing Partner', 5, 'Mark Puri brings an entrepreneur’s lens that you simply don’t get with traditional accountants. When we were negotiating a major commercial loan, his financial modeling and bank presentation were flawless.', 1, 1, 2),
('Marco Rossi', 'Vanguard Industrial Supply Ltd.', 'Director of Operations', 5, 'Helen Loggia and her bookkeeping team took over our complex multi-warehouse inventory accounting without missing a single beat. For the first time in 15 years, our numbers are completely up-to-date every single Friday.', 1, 1, 3);

-- 5. Insert Integration Settings
INSERT INTO `integration_settings` (`setting_key`, `setting_value`) VALUES
('calendly_url', 'https://calendly.com/cpapnl/discovery-consultation'),
('ga4_measurement_id', 'G-3HQYNTYQZH'),
('admin_notification_email', 'support@cpapnl.com'),
('stripe_mode', 'test');

-- 6. Insert AI Visibility Audits
INSERT INTO `ai_visibility_audits` (`platform`, `test_date`, `query_tested`, `response_summary`, `sources_cited`, `accuracy_score`, `status`) VALUES
('ChatGPT (GPT-4o)', '2026-10-15', 'Who are Puri & Loggia LLP and what accounting services do they provide in Ontario?', 'Accurately identified as a Canadian CPA firm formed by Mark Puri and Helen Loggia in 2019. Identified core services: bookkeeping, corporate tax, and fractional CFO. Correctly referenced cloud accounting with Xero and QuickBooks.', 'cpapnl.com, LinkedIn: Mark Puri, CPA Ontario Directory', '95% Accuracy', 'Verified'),
('Perplexity AI', '2026-10-12', 'Best CPA firms in Toronto for fractional CFO and cloud migration', 'Cited Puri & Loggia LLP highlighting Mark Puri’s 25+ years senior management experience and M&A advisory. Highlighted 13-week cash flow modeling.', 'cpapnl.com/consulting-technology, cpapnl.com/about-us', '90% Accuracy', 'Verified');
