# Website Audit & Migration Plan: Puri & Loggia LLP

**Target Website**: [https://cpapnl.com/](https://cpapnl.com/)  
**Audited Date**: October 2026  
**Auditor**: Senior Web Architect & Digital Strategy Team  
**Business**: Puri & Loggia LLP (Chartered Professional Accountants & Business Advisors)  
**Locations Served**: Greater Toronto Area (GTA), Ontario, and businesses across Canada  
**Primary Contact**: Mark Puri, CPA, MBA (416-801-6746) | Helen Loggia (416-805-1427) | `support@cpapnl.com`  

---

## 1. Executive Summary & Current State Analysis

Puri & Loggia LLP is a respected Canadian accounting firm formed by the 2019 merger of the practices of Mark Puri, CPA, MBA, and Helen Loggia. The firm offers comprehensive accounting, bookkeeping, corporate taxation, consulting, and cloud technology services to entrepreneurs and growing enterprises across Ontario and Canada.

The legacy website (`cpapnl.com`) was developed on an outdated WordPress theme provided by BizInk (a syndicated accounting website vendor) dating back to 2012–2024. While it successfully indexed several valuable educational pages, it suffers from critical architectural, conversion, and visual deficiencies:

1. **Broken User Experience & Outdated Scripts**: A legacy browser-detection script triggers a prominent banner stating *"You are using an outdated browser. Please upgrade your browser to improve your experience"* on modern devices (Chrome, Safari, Edge, Firefox), creating immediate distrust for new visitors.
2. **Defective Forms & Honeypots**: Gravity Forms on the site expose honeypot fields labeled with misleading titles like `LinkedIn`, `Instagram`, `URL`, or `Comments` with raw inline warnings (*"This field is for validation purposes and should be left unchanged"*), confusing screen readers and human users.
3. **Syndicated Generic Content**: Large portions of the blog, glossary, and business guides are syndicated boilerplate text shared across hundreds of other accounting firms, creating high duplicate content penalties with search engines and diminishing local authority.
4. **No Digital Client Onboarding or Secure File Exchange**: Prospective clients are instructed to email confidential financial documents over unencrypted email, risking privacy compliance and causing client drop-off.
5. **No Direct Appointment Scheduling or Modern Payments**: No self-service consultation booking (Calendly) or online payment/retainer collection (Stripe).
6. **No Content Management System for Client Independence**: Routine updates to team bios, resources, or announcements currently require developer intervention.

---

## 2. What Must Be Retained

The following core assets and identity elements must be preserved in the new platform:

| Asset / Element | Source URL / Detail | Strategic Value & Retention Requirement |
|---|---|---|
| **Firm Identity & Founders** | Mark Puri, CPA, MBA & Helen Loggia | Highlight 25+ years senior management experience across tech, real estate, manufacturing, and healthcare. Keep exact merger story (2019). |
| **Direct Contact Channels** | Mark: `416-801-6746`<br>Helen: `416-805-1427`<br>Email: `support@cpapnl.com` | Retain all active phone numbers and emails to avoid breaking existing client and supplier communications. |
| **Client Portal Links** | Xero Login (`https://login.xero.com`)<br>QuickBooks Online (`accounts.intuit.com`) | Retain prominently in the header navigation under **Client Area** so daily client workflows are never interrupted. |
| **Verified Technology Partnerships** | Xero Silver/Gold Partner, QuickBooks Online ProAdvisor, Hubdoc, Karbon HQ, Wagepoint, Stripe, Shopify, Fathom, Ignition | Retain and showcase with official modern SVG logos, positioning the firm as a modern cloud-first advisory partner. |
| **Professional Affiliation** | CPA Canada (`https://www.cpacanada.ca/`) | Retain verified CPA designation, Ontario Chartered Professional Accountant standards, and regulatory compliance. |
| **High-Performing Core Resources** | - 7 Steps to Growing Your Business<br>- Business Plan Diagnostic<br>- Free Checklist & Template Downloads<br>- Calculators<br>- Business & Accounting Glossary (A-Z) | Rebuild as interactive, modern web applications rather than static text dumps. |
| **Active GA4 Property** | `G-3HQYNTYQZH` | Maintain tracking continuity with a modern consent-aware Google Tag Manager / GA4 integration. |

---

## 3. What Must Be Redesigned

| Existing Feature / Area | Deficiency Identified | Modern Redesign Solution |
|---|---|---|
| **Visual Brand & Typography** | Generic 2014 BizInk template, dated serif/sans font pairings, low contrast `#32373c`. | Bespoke visual identity: Deep Navy (`#0B132B`, `#1C2541`), Crisp Alabaster (`#F8F9FA`), Warm Slate & Teal (`#0D9488`), and Champagne Gold accents. Custom SVG logo mark and responsive typography (Inter & Plus Jakarta Sans). |
| **Homepage Layout** | Text-heavy, repetitive copy, no clear conversion hierarchy. | Modern outcome-oriented hero, trust badges, 4 core pillars, interactive social proof, clear dual CTA ("Book a Free Consultation" / "Explore Services"). |
| **Lead Generation System** | Static contact forms with broken honeypot text. | Gated lead-magnet modals for Canadian tax checklists and business guides with instant digital delivery and CRM lead capture. |
| **Prospective Client Onboarding** | None (clients directed to generic email). | Multi-step interactive onboarding portal with business type selection, requirements scoping, and drag-and-drop secure file upload. |
| **File Storage Security** | None (unencrypted email attachments). | Private storage outside web root (`storage/private/uploads/`), random UUID hashed filenames, server-side MIME sniffing, and authenticated admin downloads. |
| **Consultation Scheduling** | Manual phone call or static email submission. | Seamless Calendly embed & direct popup modal with UTM tracking and calendar synchronization. |
| **Payments & Retainers** | Offline checks or manual e-transfers. | Stripe Checkout integration supporting consultation deposits, monthly retainer onboarding, and accounting packages. |
| **Resource Hub & Calculators** | Static, non-functioning iframes or empty tables. | Interactive Canadian tax estimators, loan amortization calculators, cash-flow run-rate tools, and searchable glossary. |
| **Admin Control** | Requires raw FTP or complex WordPress plugins. | Modern PHP REST API + React Admin Dashboard for managing leads, onboarding files, blog posts, resources, testimonials, and SEO tags. |

---

## 4. Content Strategy & Rewriting Requirements

The existing site content repeats the same phrase (*"The experienced team at Puri & Loggia streamlines your accounting to reduce costs and analyze areas of improvement"*) 4 times across different service pages. 

The new content framework will be structured around **Problem → Business Impact → How Puri & Loggia Solves It → Reassurance & Proof → Next Action**:

1. **Accounting & Bookkeeping**: Shift from passive bookkeeping to real-time financial clarity, month-end closing, cash-flow forecasting, and automated receipt processing via Xero/QBO.
2. **Corporate Taxation**: Highlight strategic tax minimization, CRA audit protection, corporate structuring, scientific research & experimental development (SR&ED) tax credits, and dividend vs. salary planning for Canadian owner-operators.
3. **Advisory & Consulting**: Leverage Mark Puri’s 25+ years of real-world M&A, business sale, and operational leadership to offer fractional CFO services, operational restructuring, and exit planning.
4. **Cloud Accounting & Technology**: Showcase turnkey migration from desktop legacy software (Sage, QuickBooks Desktop) to modern cloud ecosystems (Xero, QBO, Hubdoc, Karbon, Wagepoint, Stripe).

---

## 5. URL Migration & 301 Redirect Map

To protect domain authority, preserve existing inbound links, and ensure zero 404 errors for visitors or search engines, the following permanent 301 redirects are implemented:

| Legacy URL | New Redesigned URL | Status | Rationale |
|---|---|---|---|
| `https://cpapnl.com/` | `/` | Retained | Core Homepage |
| `https://cpapnl.com/about-us/` | `/about-us` | 301 Redirect | Clean URL structure |
| `https://cpapnl.com/accounting-bookkeeping/` | `/services/accounting-bookkeeping` | 301 Redirect | Hierarchical SEO service taxonomy |
| `https://cpapnl.com/taxation/` | `/services/taxation` | 301 Redirect | Hierarchical SEO service taxonomy |
| `https://cpapnl.com/consulting-technology/` | `/services/consulting-technology` | 301 Redirect | Hierarchical SEO service taxonomy |
| `https://cpapnl.com/cloud-accounting/` | `/services/cloud-accounting` | 301 Redirect | Hierarchical SEO service taxonomy |
| `https://cpapnl.com/xero/` | `/partners` | 301 Redirect | Consolidated partner & integrations page |
| `https://cpapnl.com/xero-resources/` | `/resources?category=xero` | 301 Redirect | Integrated resource hub |
| `https://cpapnl.com/quickbooks-online/` | `/partners` | 301 Redirect | Consolidated partner & integrations page |
| `https://cpapnl.com/quickbooks-resources/` | `/resources?category=quickbooks` | 301 Redirect | Integrated resource hub |
| `https://cpapnl.com/blog/` | `/resources/blog` | 301 Redirect | Modern publishing directory |
| `https://cpapnl.com/business-guides/` | `/resources/guides` | 301 Redirect | Searchable business guides hub |
| `https://cpapnl.com/resources/business-plan-diagnostic/` | `/resources/business-plan-diagnostic` | 301 Redirect | Interactive diagnostic web app |
| `https://cpapnl.com/resources/` | `/resources/downloads` | 301 Redirect | Free checklists & lead magnets |
| `https://cpapnl.com/calculators/` | `/resources/calculators` | 301 Redirect | Interactive financial calculators |
| `https://cpapnl.com/resources/7-steps-to-growing-your-business/` | `/resources/7-steps-to-growing-your-business` | 301 Redirect | 7-day email course & interactive workbook |
| `https://cpapnl.com/business-and-accounting-glossary/` | `/resources/glossary` | 301 Redirect | Searchable A-Z Canadian accounting dictionary |
| `https://cpapnl.com/contact-us/` | `/contact` | 301 Redirect | Streamlined contact page |
| `https://cpapnl.com/bookkeepers-ontario/` | `/services/accounting-bookkeeping` | 301 Redirect | Consolidate duplicate thin geo page |
| `https://cpapnl.com/privacy/` | `/privacy` | 301 Redirect | Legal compliance page |
| `https://cpapnl.com/terms-and-conditions/` | `/terms` | 301 Redirect | Legal terms & conditions |
| `https://cpapnl.com/client-area` | `/client-area` | Retained | Gateway to external Xero & QBO logins |

---

## 6. Technical, Security, Accessibility & Performance Requirements

1. **Security**:
   - Zero exposure of uploads: files stored in `storage/private/uploads/` with UUID-based filenames.
   - All database queries executed with PDO prepared statements.
   - CSRF protection for all POST/PUT/DELETE API endpoints.
   - Rate limiting on public submission endpoints (5 submissions / 15 minutes per IP).
   - Strict Content Security Policy (CSP), HTTP Strict Transport Security (HSTS), X-Content-Type-Options: nosniff, and X-Frame-Options: SAMEORIGIN.
2. **Accessibility (WCAG 2.1 AA Compliant)**:
   - High contrast ratios (minimum 4.5:1 for normal text, 3:1 for large text).
   - Accessible keyboard navigation (`tabindex`, skip-to-content links, visible focus outlines).
   - Screen-reader friendly forms with semantic `<label for="...">` and aria-live announcements.
   - Respect `prefers-reduced-motion` media query across all animations.
3. **Performance (Target 95+ Core Web Vitals)**:
   - Zero bulky CSS frameworks; lightweight, highly optimized modern CSS tokens.
   - Vite-bundled React with lazy-loaded route chunks.
   - SVGs for all logos and icons (zero pixelation, micro file sizes).
   - Prerendered HTML meta tags and JSON-LD structured data for instant crawlability.
