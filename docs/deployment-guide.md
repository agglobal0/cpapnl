# Deployment & Production Handover Guide: Puri & Loggia LLP

**Target Architecture**: Single Linux or cPanel / Apache / Nginx Server running PHP 8.2+ and MySQL 8+, with built static React assets served by the web server.

---

## 1. Prerequisites & Hosting Requirements

- **Web Server**: Apache 2.4+ (with `mod_rewrite`, `mod_headers`, `mod_ssl`) or Nginx 1.20+.
- **PHP Version**: PHP 8.2 or 8.3 with extensions: `pdo_mysql`, `mbstring`, `openssl`, `curl`, `fileinfo`, `json`, `session`.
- **Database**: MySQL 8.0+ or MariaDB 10.5+ with `utf8mb4_unicode_ci`.
- **SSL Certificate**: Let's Encrypt or commercial SSL with TLS 1.3 enabled.
- **Node.js**: v18+ (for building frontend assets prior to deployment).

---

## 2. Directory Layout on Production Server

```
/home/cpapnl/
├── public_html/              <-- Web Root (Publicly accessible)
│   ├── index.html            <-- Vite React build output
│   ├── assets/               <-- Vite JS, CSS, SVG bundles
│   ├── favicon.svg
│   ├── robots.txt
│   ├── sitemap.xml
│   ├── .htaccess             <-- URL rewrite rules & security headers
│   └── api/                  <-- Symlink or mapped to backend/public/
│       ├── index.php
│       └── .htaccess
├── backend/                  <-- PRIVATE (Outside public_html)
│   ├── config/
│   ├── src/
│   ├── database/
│   ├── routes/
│   ├── storage/
│   │   ├── private/
│   │   │   └── uploads/      <-- PRIVATE client documents (0700 permissions)
│   │   └── logs/
│   └── .env                  <-- Confidential credentials
```

---

## 3. Step-by-Step Deployment Procedure

### Step 1: Database Setup
1. Log into MySQL console or phpMyAdmin.
2. Create database and dedicated user:
   ```sql
   CREATE DATABASE cpapnl_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
   CREATE USER 'cpapnl_user'@'localhost' IDENTIFIED BY 'StrongGeneratedPasswordHere!';
   GRANT ALL PRIVILEGES ON cpapnl_db.* TO 'cpapnl_user'@'localhost';
   FLUSH PRIVILEGES;
   ```
3. Run the schema migrations from `backend/database/migrations/001_initial_schema.sql`.
4. Run the seed data script from `backend/database/seeders/realistic_data.sql` to populate initial services, partners, resources, blog articles, and admin account.

### Step 2: Backend Configuration
1. Upload the `backend/` directory outside `public_html`.
2. Copy `backend/.env.example` to `backend/.env`.
3. Fill in database credentials, `APP_SECRET`, `JWT_SECRET`, Stripe keys, and SMTP mail credentials.
4. Ensure `backend/storage/private/uploads/` exists and has permissions `0750` or `0700`.

### Step 3: Frontend Build & Upload
1. On your local machine or build runner:
   ```bash
   cd frontend
   npm install
   npm run build
   ```
2. The compiled assets will be in `frontend/dist/`.
3. Copy all files from `frontend/dist/` into the server's `public_html/`.

### Step 4: Web Server Configuration (`.htaccess`)
Place the following `.htaccess` inside `public_html/`:
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /

  # Route API calls to backend/public/index.php
  RewriteRule ^api/(.*)$ api/index.php [QSA,L]

  # Route all other URLs to React index.html for client-side routing
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>

# Security Headers
<IfModule mod_headers.c>
  Header set X-Content-Type-Options "nosniff"
  Header set X-Frame-Options "SAMEORIGIN"
  Header set X-XSS-Protection "1; mode=block"
  Header set Referrer-Policy "strict-origin-when-cross-origin"
  Header set Content-Security-Policy "default-src 'self' https: data: 'unsafe-inline' 'unsafe-eval'; connect-src 'self' https://api.stripe.com https://calendly.com https://www.google-analytics.com;"
</IfModule>
```

---

## 4. Initial Admin Account Creation

An initial administrator account can be created using the backend CLI seeder or directly seeded via SQL:
- Default Admin Email: `admin@cpapnl.com`
- Temporary Setup Password: `ChangeThisPasswordImmediately2026!` (Must be changed upon first login via Admin Dashboard).
- Password hash generated via `password_hash('password', PASSWORD_ARGON2ID)`.

---

## 5. Security & Maintenance Checklist

- [ ] Private uploads directory verified unreadable via direct web URL (`https://cpapnl.com/storage/private/...` must return 403/404).
- [ ] HTTPS enforced with automatic HTTP -> HTTPS 301 redirection.
- [ ] Stripe Webhook endpoint configured at `https://cpapnl.com/api/payments/webhook` with the webhook secret.
- [ ] Daily MySQL database backup cron job configured (`mysqldump cpapnl_db | gzip > /backups/cpapnl_$(date +\%F).sql.gz`).
- [ ] Test form submission completed on contact, onboarding, lead magnet, and Calendly modal.
