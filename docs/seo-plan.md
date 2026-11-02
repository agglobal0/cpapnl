# Technical SEO & Local Search Optimization Plan: Puri & Loggia LLP

**Domain**: `https://cpapnl.com/`  
**Market**: Greater Toronto Area (GTA), Ontario, and Canada-wide  
**Focus**: B2B Accounting, Corporate Tax, Cloud Bookkeeping, Advisory & Fractional CFO  

---

## 1. Information Architecture & URL Hierarchy

The new URL structure is designed for intuitive user navigation, semantic topic clustering, and search-engine crawl efficiency:

```
https://cpapnl.com/
├── /about-us
├── /services/
│   ├── /accounting-bookkeeping
│   ├── /taxation
│   ├── /consulting-technology
│   └── /cloud-accounting
├── /partners
├── /resources/
│   ├── /blog/
│   │   └── /:slug
│   ├── /guides
│   ├── /business-plan-diagnostic
│   ├── /downloads
│   ├── /calculators
│   ├── /7-steps-to-growing-your-business
│   └── /glossary
├── /testimonials
├── /contact
├── /book-consultation
├── /client-area
├── /onboarding
├── /privacy
└── /terms
```

---

## 2. Structured Data (Schema.org) Strategy

Every page includes validated JSON-LD schema markup tailored to its specific purpose:

### A. Organization & AccountingService (Site-wide / Home)
```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AccountingService",
      "@id": "https://cpapnl.com/#organization",
      "name": "Puri & Loggia LLP",
      "legalName": "Puri & Loggia LLP",
      "url": "https://cpapnl.com",
      "logo": "https://cpapnl.com/assets/brand/logo-full-dark.svg",
      "image": "https://cpapnl.com/assets/brand/og-card.jpg",
      "description": "Chartered Professional Accountants & Business Advisors serving entrepreneurs and growing enterprises across the Greater Toronto Area (GTA), Ontario, and Canada.",
      "telephone": "+1-416-801-6746",
      "email": "support@cpapnl.com",
      "address": {
        "@type": "PostalAddress",
        "addressRegion": "Ontario",
        "addressCountry": "CA"
      },
      "areaServed": [
        {
          "@type": "AdministrativeArea",
          "name": "Ontario"
        },
        {
          "@type": "Country",
          "name": "Canada"
        }
      ],
      "founder": [
        {
          "@type": "Person",
          "name": "Mark Puri",
          "jobTitle": "Partner, CPA, MBA",
          "sameAs": "https://www.linkedin.com/in/markpuri"
        },
        {
          "@type": "Person",
          "name": "Helen Loggia",
          "jobTitle": "Partner, CPA"
        }
      ],
      "priceRange": "$$"
    }
  ]
}
```

### B. Service Schemas
Each service landing page implements `Service` schema linking back to the provider, defining deliverables, audience, and area served.

### C. Article & FAQ Schemas
- Blog posts embed `Article` or `BlogPosting` with author, publisher, datePublished, and dateModified.
- Resource and FAQ sections embed `FAQPage` schema to capture rich snippets on Google Search.

---

## 3. Meta Tags & Open Graph Specifications

Each page features uniquely tailored titles and meta descriptions adhering strictly to character constraints (Titles: 50–60 chars, Descriptions: 140–155 chars):

| Page | Title Tag | Meta Description |
|---|---|---|
| **Home** | `Puri & Loggia LLP | CPAs & Business Advisors Ontario` | `Empowering Canadian entrepreneurs with proactive accounting, strategic corporate taxation, and modern cloud bookkeeping across Ontario & Canada.` |
| **About Us** | `About Us | Puri & Loggia LLP - Chartered Professional Accountants` | `Meet Mark Puri, CPA, MBA and Helen Loggia. 25+ years of strategic leadership, entrepreneurial perspective, and verified CPA Canada excellence.` |
| **Accounting & Bookkeeping** | `Accounting & Cloud Bookkeeping Services Ontario | Puri & Loggia` | `Eliminate shoeboxes and delayed reconciliations. Turnkey month-end closing, real-time Xero/QBO reporting, and cash flow control for growing businesses.` |
| **Taxation** | `Corporate Tax Planning & CRA Compliance | Puri & Loggia LLP` | `Proactive tax minimization, corporate restructuring, SR&ED, and audit defense for Canadian owner-operators and growing enterprises.` |
| **Consulting & Tech** | `Fractional CFO & Advisory Services | Puri & Loggia LLP` | `Strategic financial modeling, M&A advisory, operational turnaround, and debt restructuring led by seasoned entrepreneur-CPAs.` |
| **Cloud Accounting** | `Cloud Accounting & Modern Systems Integration | Puri & Loggia` | `Seamless migration to Xero, QuickBooks Online, Wagepoint, Hubdoc, and Stripe. Build a paperless, automated financial back office.` |
| **Resources Hub** | `Business Tools, Tax Checklists & Guides | Puri & Loggia LLP` | `Free business plan diagnostics, Canadian tax calculators, financial checklists, and our 7 Steps to Growing Your Business framework.` |
| **Calculators** | `Interactive Financial & Tax Calculators | Puri & Loggia LLP` | `Accurate, interactive calculators for Canadian business owners: loan amortization, cash-flow runway, break-even analysis, and GST/HST estimation.` |
| **Business Plan Diagnostic** | `Business Plan Diagnostic Tool | Puri & Loggia LLP` | `Take our free 3-minute diagnostic to evaluate the financial feasibility, cash flow resilience, and bank-readiness of your business plan.` |
| **Glossary** | `Canadian Business & Accounting Glossary A-Z | Puri & Loggia` | `Plain-English explanations of key Canadian corporate tax, bookkeeping, financial statement, and CRA terminology.` |
| **Contact** | `Contact Puri & Loggia LLP | Schedule a Free Consultation` | `Get in touch with our Toronto/Ontario team at +1 416 801 6746 or book a direct introductory video consultation with our partners.` |

---

## 4. Local SEO & Google Business Profile Checklist

1. **NAP Consistency**: Standardize Name ("Puri & Loggia LLP"), Address (Greater Toronto Area, Ontario, Canada), and Phone (`+1 416 801 6746`) across all web assets and citations.
2. **CPA Canada & Provincial Directories**: Ensure active, verified listings in the CPA Ontario member registry and Canadian business directories (YellowPages Canada, Dun & Bradstreet, Canadian Chamber of Commerce).
3. **Ontario Service Landing Pages**: Built-in geo-targeting highlighting Toronto, Mississauga, Markham, Oakville, Vaughan, Ottawa, and province-wide virtual advisory.
4. **Google Business Profile Workflow**:
   - Primary category: *Certified Public Accountant*.
   - Secondary categories: *Accounting Service, Tax Preparation Service, Bookkeeping Service, Business Management Consultant*.
   - Upload verified team photos, modern office imagery, and official brand logo.
   - Set up Google Appointment link directly pointing to `/book-consultation`.
