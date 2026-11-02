# Brand Identity & Content Guide: Puri & Loggia LLP

**Firm**: Puri & Loggia LLP — Chartered Professional Accountants & Business Advisors  
**Brand Positioning**: The Strategic Financial Partner for Growing Canadian Enterprises  
**Core Promise**: Beyond compliance — delivering proactive financial clarity, tax strategy, and modern cloud intelligence so entrepreneurs can scale with total confidence.

---

## 1. Brand Attributes & Persona

| Brand Attribute | How It Translates in Practice | How It Avoids Stereotypes |
|---|---|---|
| **Trustworthy** | Precise, verified, CPA Canada standards, clear engagement terms, and transparent communication. | No cheesy stock handshake photos; real business advisory credibility. |
| **Strategic** | Founded by an entrepreneur-CPA with 25+ years of M&A and C-suite experience; focuses on long-term enterprise value and cash flow. | Not just tax filing, but forward-looking growth planning and fractional CFO insight. |
| **Approachable** | Jargon-free explanations, responsive communication, empathetic listening, and accessible partners. | No stiff, intimidating traditional accounting firm posture. |
| **Modern & Tech-Forward** | 100% cloud-integrated (Xero, QuickBooks Online, Wagepoint, Hubdoc, Karbon), real-time dashboards, paperless workflows. | Never trendy for the sake of novelty; only reliable, time-tested tools that save clients time. |
| **Transparent** | Clear fee structures, scoped deliverables, honest guidance on CRA compliance and risk. | No hidden charges or vague hour-based invoicing surprises. |

---

## 2. Visual Identity & Design Tokens

### Color Palette

| Token Name | Hex Code | Purpose & Application |
|---|---|---|
| `--color-navy-950` | `#08101E` | Deepest brand backdrop, high-contrast dark sections, footer, primary text on light backgrounds |
| `--color-navy-900` | `#0E1B2E` | Hero background, primary header, dark cards |
| `--color-navy-800` | `#162844` | Secondary dark surfaces, admin sidebar, card borders |
| `--color-teal-600` | `#0D9488` | Primary interactive accent, key CTAs, active indicators, financial growth accents |
| `--color-teal-500` | `#14B8A6` | Button hover state, badges, success tags |
| `--color-gold-500` | `#C5A880` | Subtle premium accent, certification badges, high-value highlights |
| `--color-slate-100` | `#F1F5F9` | Light section backgrounds, soft input containers |
| `--color-slate-200` | `#E2E8F0` | Subtle card borders, dividers, table rules |
| `--color-slate-500` | `#64748B` | Secondary text, captions, metadata |
| `--color-slate-800` | `#1E293B` | High-contrast body text on light backgrounds |
| `--color-white` | `#FFFFFF` | Card backgrounds, pure contrast elements |

### Typography Scale

- **Headings Font**: `Plus Jakarta Sans`, sans-serif (Weights: 600 SemiBold, 700 Bold, 800 ExtraBold). Features refined geometric proportions with generous optical readability.
- **Body Font**: `Inter`, sans-serif (Weights: 400 Regular, 500 Medium, 600 SemiBold). Clean, highly legible at micro-sizes, optimized for numerical tables and financial data.

```css
:root {
  --font-heading: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
  --font-body: 'Inter', system-ui, -apple-system, sans-serif;

  --text-xs: clamp(0.75rem, 0.7rem + 0.25vw, 0.8125rem);
  --text-sm: clamp(0.875rem, 0.8rem + 0.35vw, 0.9375rem);
  --text-base: clamp(1rem, 0.95rem + 0.25vw, 1.0625rem);
  --text-lg: clamp(1.125rem, 1.05rem + 0.4vw, 1.25rem);
  --text-xl: clamp(1.25rem, 1.15rem + 0.5vw, 1.5rem);
  --text-2xl: clamp(1.5rem, 1.35rem + 0.75vw, 1.875rem);
  --text-3xl: clamp(1.875rem, 1.65rem + 1.1vw, 2.375rem);
  --text-4xl: clamp(2.25rem, 1.95rem + 1.5vw, 3rem);
  --text-5xl: clamp(2.75rem, 2.3rem + 2.25vw, 3.875rem);
}
```

---

## 3. Logo Architecture & Guidelines

The new **Puri & Loggia LLP** logo features:
1. **The Partnership Monogram**: An interlocking dual-pillar geometric crest symbolizing:
   - The collaboration between the two founding partners (Puri & Loggia).
   - Stability (vertical foundational pillars) and upward trajectory (ascending diagonal facet representing capital growth and financial clarity).
2. **The Wordmark**: "PURI & LOGGIA" set in wide-tracked, semi-bold grotesque typography, anchored by "LLP • CHARTERED PROFESSIONAL ACCOUNTANTS" as the sub-descriptor.
3. **Variants Created**:
   - `logo-full-light.svg`: Dark Navy `#08101E` and Teal `#0D9488` for white/light neutral surfaces.
   - `logo-full-dark.svg`: Pure White `#FFFFFF` and Bright Teal `#14B8A6` for dark navy heroes and footers.
   - `logo-mark.svg`: Compact square icon for favicon, app icons, and mobile header.

---

## 4. Voice, Tone & Messaging Framework

### Editorial Principles
1. **Speak to the business outcome, not just the compliance task.**  
   *Instead of:* "We prepare T2 corporate tax returns."  
   *Write:* "We engineer proactive corporate tax strategies that protect your working capital, prevent CRA disputes, and reinvest savings into your growth."
2. **Clear to non-accountants.**  
   Avoid impenetrable technical acronyms unless immediately defined. Frame everything around cash flow, risk mitigation, time saved, and peace of mind.
3. **Firm, authentic authority.**  
   Never make hyperbolic promises ("We guarantee you'll save 50% on taxes!"). Real CPAs uphold ethical standards; emphasize rigorous planning, verified methodologies, and tailored strategies.

### Service Messaging Matrices

#### A. Accounting & Bookkeeping
- **Client Problem**: Drowning in shoebox receipts, messy reconciliations, and delayed financial reporting that leaves leaders flying blind.
- **Business Impact**: Cash flow surprises, missed vendor discounts, payroll errors, and stressful year-ends.
- **Puri & Loggia Solution**: Turnkey, automated cloud bookkeeping with monthly closing, management reporting, and real-time dashboard visibility.

#### B. Corporate & Personal Taxation
- **Client Problem**: Overpaying taxes due to lack of proactive planning, or anxiety over CRA scrutiny and audit inquiries.
- **Business Impact**: Hard-earned profit lost to inefficient dividend/salary mixes, missed deductions, or unexpected tax liabilities.
- **Puri & Loggia Solution**: Year-round tax architecture for owner-operators, holding company structuring, SR&ED assistance, and seasoned CRA representation.

#### C. Strategic Advisory & Fractional CFO
- **Client Problem**: Expanding companies that have outgrown basic bookkeeping but cannot justify a $250k+ full-time CFO.
- **Business Impact**: Poor capital allocation, inability to secure commercial bank financing, and lack of visibility into unit economics.
- **Puri & Loggia Solution**: Fractional CFO leadership led by Mark Puri, CPA, MBA. Financial modeling, debt structuring, M&A preparation, and exit advisory.

#### D. Cloud Accounting & Systems Integration
- **Client Problem**: Fragmented legacy systems (spreadsheets, paper, desktop software) that don't talk to each other.
- **Business Impact**: Hundreds of wasted manual data-entry hours, high human error rates, and security vulnerabilities.
- **Puri & Loggia Solution**: End-to-end integration of Xero / QuickBooks Online with Hubdoc, Wagepoint, Stripe, Shopify, and Karbon for a touchless, paperless financial back office.
