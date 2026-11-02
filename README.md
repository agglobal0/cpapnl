# Puri & Loggia LLP — Premium Website Redesign & Lead-Generation Platform

**Client**: Puri & Loggia LLP (Chartered Professional Accountants & Business Advisors)  
**Legacy Website**: [https://cpapnl.com/](https://cpapnl.com/)  
**Primary Market**: Greater Toronto Area (GTA), Ontario, and Canada Nationwide  
**Key Partners**: Mark Puri, CPA, MBA (416-801-6746) & Helen Loggia, CPA (416-805-1427)  
**Stack**: React 19 + TypeScript + Vite, PHP 8.2+ REST API (PDO), MySQL 8+ / SQLite.

---

## 1. Project Overview & Deliverables Summary

This repository contains the complete redesign and re-architecture of the Puri & Loggia LLP digital presence, transforming an outdated 2012 BizInk template into a modern, bespoke advisory and lead-generation platform.

### Core Systems Built:
1. **Frontend Application (`frontend/`)**:
   - Modern brand visual direction with custom SVG logos, tokens, and responsive typography (Plus Jakarta Sans & Inter).
   - High-converting Homepage with clear outcome messaging, 4 service pillars, verified client testimonials, and dual CTAs.
   - Dedicated service landing pages for **Accounting & Bookkeeping**, **Corporate & Personal Taxation (T2)**, **Advisory & Fractional CFO**, and **Cloud Systems Integration**.
   - **Interactive Business Plan Diagnostic**: Multi-step assessment with live scoring (0–100), grading (A, B, C), tailored recommendations, and executive email report capture.
   - **Interactive Canadian Financial Calculators**: Ontario Corporate Tax (CCPC 12.2% vs 26.5%) & 13% HST estimator, 13-Week Cash Flow Runway model, equipment loan amortization, and break-even calculator.
   - **7 Steps to Growing Your Business**: Interactive framework and downloadable 24-page action workbook.
   - **Searchable Accounting Glossary (A-Z)**: Plain-English definitions of Canadian tax and accounting terminology (CCPC, LCGE, GIFI, ITC, PD7A, etc.).
   - **Prospective Client Onboarding Portal**: 3-step intake workflow with drag-and-drop file upload for prior T2 returns and financial statements.
   - **Client Area Hub**: Direct login launchpad for Xero and QuickBooks Online portals.
   - **Stripe Payments Modal**: Retainer deposit and advisory package checkout.
   - **Calendly Modal Integration**: Live appointment booking synchronized with partner availability in Eastern Time (ET).
   - **PIPEDA & CASL Cookie Consent**: Privacy-conscious tracking banner with zero transmission of sensitive personal/financial data.

2. **Backend REST API (`backend/`)**:
   - Built on PHP 8.3 / 8.2+ with PDO prepared statements and strict input validation.
   - **Database Architecture**: Full MySQL 8+ schema (`001_initial_schema.sql`) and seeders (`realistic_data.sql`), with zero-config SQLite fallback for local developer testing.
   - **Secure File Storage**: Private storage outside the public web root (`storage/private/uploads/`), SHA-256 hash validation, UUID-renamed files, MIME type sniffing, and authenticated streaming downloads.
   - **Security Controls**: CSRF protection, IP-based rate limiting on public endpoints, and tamper-evident audit logging (`audit_logs` table).

3. **Administrative CMS Dashboard (`frontend/src/pages/admin/`)**:
   - Partner login portal with Bearer token authentication.
   - Dashboard metrics (inbound leads, onboarding packets, secure files, articles).
   - Leads manager with instant CSV export for CRM import.
   - Onboarding submission manager with secure client file download controls.
   - Markdown blog post editor with draft/publish status controls.
   - AI Search Visibility audit tracker (evaluating ChatGPT, Perplexity, Claude, and Gemini responses).
   - Permanent administrative security audit trail.

4. **Strategic Documentation Suite (`docs/`)**:
   - `website-audit.md`: Full audit of legacy `cpapnl.com`, retained assets, and complete 301 redirect map.
   - `brand-and-content-guide.md`: Brand tokens, typography scale, editorial voice, and service messaging matrices.
   - `seo-plan.md`: JSON-LD structured data schemas (AccountingService, Service, FAQPage), meta titles, and local SEO plan.
   - `content-roadmap.md`: 90-day editorial calendar and 1-article-to-5-assets social repurposing workflow.
   - `analytics-event-plan.md`: GA4 and GTM event taxonomy, conversion definitions, and UTM parameter persistence.
   - `deployment-guide.md`: Step-by-step production server setup, database migration, and web server `.htaccess` rules.
   - `admin-guide.md`: Client user manual for managing blog posts, leads, and secure client documents.
   - `environment-variables.md`: Complete reference of all frontend and backend configuration variables.

---

## 2. Quick Start (Local Development)

### 1. Start the PHP REST API (Port 8000)
```bash
php -S 127.0.0.1:8000 -t backend/public
```
*Health check URL*: `http://127.0.0.1:8000/health`

### 2. Start the React + Vite Frontend (Port 5173)
```bash
cd frontend
npm install
npm run dev
```
*Frontend URL*: `http://127.0.0.1:5173/`

### 3. Build for Production
```bash
cd frontend
npm run build
```
Compiled production assets will be generated in `frontend/dist/`.

---

## 3. Administrative Credentials (Local Testing)
- **Admin Portal**: `http://127.0.0.1:5173/admin`
- **Email**: `admin@cpapnl.com`
- **Password**: `AdminPass2026!`
