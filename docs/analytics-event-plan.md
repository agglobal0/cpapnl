# Analytics & Conversion Tracking Plan: Puri & Loggia LLP

**Platforms**: Google Analytics 4 (GA4 ID: `G-3HQYNTYQZH`) & Google Tag Manager (GTM)  
**Privacy Compliance**: Canadian PIPEDA & CASL compliant, with cookie consent banner and zero transmission of sensitive personal/tax data.

---

## 1. Measurement Strategy & Objectives

The primary website objectives are:
1. **Primary Conversion**: Booking an introductory consultation via Calendly (`consultation_booked`).
2. **Secondary High-Value Conversion**: Prospective client onboarding form submission with scoping details & document upload (`onboarding_submitted`).
3. **Mid-Funnel Lead Capture**: Gated lead magnet downloads & Business Plan Diagnostic completions (`lead_captured`, `diagnostic_completed`).
4. **Direct Inquiries**: General contact form submissions (`contact_form_submitted`), click-to-call (`click_to_call`), and click-to-email (`click_to_email`).
5. **E-Commerce / Retainers**: Stripe checkout initialization (`payment_initiated`) and verified completion (`payment_completed`).

---

## 2. Standardized Event Taxonomy

All events are dispatched through a standardized `window.dataLayer.push()` interface:

| Event Name | Triggering Action | Parameters Included | Conversion Value |
|---|---|---|---|
| `consultation_cta_click` | Clicking "Book a Consultation" button | `location` (hero, nav, sticky, footer), `button_text` | Micro-conversion |
| `calendly_opened` | Calendly scheduling modal opened | `service_context` | Micro-conversion |
| `consultation_booked` | Calendly appointment confirmed | `event_type` ("30_min_discovery"), `referrer` | Primary Macro ($250 est. value) |
| `contact_form_submitted` | Submitting the contact form | `service_interest`, `company_provided` (bool) | Macro |
| `onboarding_started` | Entering the onboarding flow | `step_index` | Funnel event |
| `onboarding_file_uploaded`| Uploading a file in onboarding | `file_count`, `mime_type` (sanitized, NO filenames!) | Security-conscious milestone |
| `onboarding_submitted` | Completing client onboarding | `service_category`, `business_type`, `has_uploads` | Primary Macro ($500 est. value) |
| `lead_captured` | Submitting gated lead form | `resource_id`, `resource_title` | Mid-funnel Macro |
| `resource_downloaded` | Clicking to download asset | `resource_id`, `file_format` | Engagement |
| `diagnostic_completed` | Submitting 3-minute diagnostic | `score`, `readiness_grade`, `category` | High-intent Lead |
| `calculator_used` | Calculating cash flow, loan, tax | `calculator_type` (loan, runway, breakeven) | Engagement |
| `newsletter_subscribed` | Submitting newsletter signup | `source_page` | Micro-conversion |
| `click_to_call` | Clicking telephone link | `phone_number` (`416-801-6746` or `416-805-1427`) | Macro |
| `click_to_email` | Clicking `support@cpapnl.com` | `email_address` | Macro |
| `portal_login_click` | Clicking Xero or QBO login | `portal` ("xero", "quickbooks") | Client retention metric |
| `payment_initiated` | Clicking to pay deposit/retainer | `package_id`, `amount`, `currency` ("CAD") | E-Commerce intent |
| `payment_completed` | Stripe checkout session verified | `transaction_id`, `amount`, `currency` ("CAD") | Verified Revenue Macro |

---

## 3. Privacy & Data Integrity Rules

1. **NO Personally Identifiable Information (PII) in DataLayer**:
   - Never pass client names, email addresses, phone numbers, tax IDs, or corporate financial numbers into GA4 or GTM.
   - For uploaded onboarding documents, record only the count and MIME categories (e.g. `application/pdf`), never the original file name or document contents.
2. **Deduplication**:
   - Form and payment submissions generate a unique client-side transaction token (`submission_id`) stored in `sessionStorage` to prevent duplicate events on page reload.
3. **UTM Attribution**:
   - UTM parameters (`utm_source`, `utm_medium`, `utm_campaign`, `utm_term`, `utm_content`) are captured on arrival, stored in `sessionStorage`, and attached to backend lead submissions for closed-loop attribution.
