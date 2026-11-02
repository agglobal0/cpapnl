# Environment Variables Reference: Puri & Loggia LLP

This document outlines all required and optional environment variables for the frontend React client and the backend PHP REST API.

---

## 1. Backend Configuration (`backend/.env`)

Create a `.env` file in the `backend/` directory by copying `.env.example`:

```bash
# ==========================================
# APPLICATION SETTINGS
# ==========================================
APP_NAME="Puri & Loggia LLP API"
APP_ENV=production          # "development" | "production"
APP_DEBUG=false             # Set to false in production
APP_URL=https://cpapnl.com
API_PREFIX=/api

# ==========================================
# DATABASE SETTINGS (MySQL 8+ / MariaDB)
# ==========================================
DB_CONNECTION=mysql         # "mysql" (default) or "sqlite" (for local testing without MySQL)
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=cpapnl_db
DB_USERNAME=cpapnl_user
DB_PASSWORD=SecurePasswordHere123!
DB_CHARSET=utf8mb4

# SQLite alternative (leave blank if using MySQL):
# DB_DATABASE=/absolute/path/to/backend/database/app.sqlite

# ==========================================
# SECURITY & AUTHENTICATION
# ==========================================
APP_SECRET=generate_a_random_64_character_hex_string_here
JWT_SECRET=another_random_64_character_secret_for_admin_tokens
SESSION_LIFETIME=7200       # 2 hours in seconds
COOKIE_DOMAIN=.cpapnl.com
COOKIE_SECURE=true          # Set true when running under HTTPS
CORS_ALLOWED_ORIGINS=https://cpapnl.com,http://localhost:5173

# ==========================================
# STRIPE PAYMENTS INTEGRATION
# ==========================================
STRIPE_PUBLIC_KEY=pk_live_YourStripePublishableKey
STRIPE_SECRET_KEY=sk_live_YourStripeSecretKey
STRIPE_WEBHOOK_SECRET=whsec_YourStripeWebhookSecret
STRIPE_CURRENCY=cad         # Canadian Dollars

# ==========================================
# TRANSACTIONAL EMAIL (SMTP / API)
# ==========================================
MAIL_MAILER=smtp            # "smtp" | "mailgun" | "ses" | "log"
MAIL_HOST=smtp.sendgrid.net
MAIL_PORT=587
MAIL_USERNAME=apikey
MAIL_PASSWORD=YourSendGridApiKey
MAIL_ENCRYPTION=tls
MAIL_FROM_ADDRESS=support@cpapnl.com
MAIL_FROM_NAME="Puri & Loggia LLP"
ADMIN_NOTIFICATION_EMAIL=support@cpapnl.com

# ==========================================
# CALENDLY INTEGRATION
# ==========================================
CALENDLY_URL=https://calendly.com/cpapnl/discovery-consultation

# ==========================================
# SECURE FILE STORAGE LIMITS
# ==========================================
UPLOAD_MAX_FILE_SIZE_MB=25  # Max size per file in MB
UPLOAD_ALLOWED_EXTENSIONS=pdf,docx,xlsx,csv,jpg,jpeg,png
STORAGE_PRIVATE_PATH=../storage/private/uploads
```

---

## 2. Frontend Configuration (`frontend/.env`)

Create a `.env` file in the `frontend/` directory:

```bash
# Base API URL pointing to the PHP API
VITE_API_BASE_URL=https://cpapnl.com/api

# Google Analytics 4 Measurement ID
VITE_GA4_MEASUREMENT_ID=G-3HQYNTYQZH

# Calendly embed URL for booking consultations
VITE_CALENDLY_URL=https://calendly.com/cpapnl/discovery-consultation

# Stripe Publishable Key for checkout
VITE_STRIPE_PUBLIC_KEY=pk_test_YourStripePublishableKey

# Business Contact Defaults
VITE_FIRM_PHONE_MARK=416-801-6746
VITE_FIRM_PHONE_HELEN=416-805-1427
VITE_FIRM_EMAIL=support@cpapnl.com
```
