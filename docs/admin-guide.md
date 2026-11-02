# Administrator & Content Management Guide: Puri & Loggia LLP

This guide provides instructions for the partners and staff of Puri & Loggia LLP to manage website content, prospective client inquiries, uploaded documents, blog posts, and marketing resources.

---

## 1. Accessing the Admin Dashboard

- **URL**: `https://cpapnl.com/admin` (or `/admin/login`)
- **Credentials**: Use your authorized staff email and secure password.
- **Session Security**: Sessions expire automatically after 2 hours of inactivity. All administrative logins and data mutations are permanently recorded in the system audit log.

---

## 2. Managing Inbound Leads & Onboarding Submissions

### A. Prospective Client Onboarding Submissions (`/admin/onboarding`)
When a prospective client completes the onboarding workflow:
1. View the business name, contact person, business email, phone number, and selected services.
2. Review their operating profile (annual revenue bracket, entity structure, current accounting software).
3. **Secure Document Access**: If the prospect attached tax returns, Notice of Assessments, or financial statements, click **"Download Secure File"**. The server checks your administrative authorization, verifies your session, and serves the file securely without exposing its physical storage path.

### B. Contact Inquiries & Gated Lead Magnets (`/admin/leads`)
1. View all inquiries from the general contact form and lead-magnet downloads (e.g. *7 Steps to Growing Your Business*, *Tax Prep Checklist*).
2. Filter by date, service interest, or download type.
3. Export leads to CSV for importing into your practice CRM or email platform.

---

## 3. Publishing & Editing Content

### A. Blog Articles & Insights (`/admin/blog`)
1. Click **"New Article"** to open the markdown-enabled editor.
2. Enter the Title, Excerpt, Content, Category, Estimated Reading Time, and SEO Meta Description.
3. Toggle status between **Draft**, **Under Review**, and **Published**.
4. Draft articles remain hidden from public visitors and search engine crawlers.

### B. Downloadable Resources & Checklists (`/admin/resources`)
1. Add new downloadable guides, templates, or checklists.
2. Toggle gating:
   - **Gated**: Requires visitor to submit name and email before downloading (creates a lead record).
   - **Public**: Direct instant download (ideal for general SEO authority).

### C. Client Testimonials (`/admin/testimonials`)
1. Add verified client feedback with client name, company, industry, and quote.
2. Only testimonials marked **"Approved"** are displayed on the public website.
3. *Note*: In accordance with CPA Ontario professional standards, never publish unverified client claims or fabricate reviews.

---

## 4. Integration Settings & AI Visibility Tracking

### A. Third-Party Integrations (`/admin/settings`)
- **Calendly URL**: Update the partner booking link when Calendly schedules change.
- **Stripe Mode**: Toggle between Stripe Test Mode and Live Mode for payment retainers.
- **Tracking IDs**: Update GA4 measurement ID (`G-3HQYNTYQZH`) or Google Tag Manager container IDs.

### B. AI Visibility Audits (`/admin/ai-audits`)
Maintain a record of quarterly research evaluating how major AI search engines (ChatGPT, Google Gemini, Perplexity, Claude, Microsoft Copilot) describe Puri & Loggia LLP:
- Record tested prompts (e.g. *"Best corporate tax CPA in Mississauga/Toronto"*).
- Document which services were correctly identified and which citations were referenced.
- Track action items to improve knowledge-graph presence.
