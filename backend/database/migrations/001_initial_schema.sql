-- ============================================================
-- PURI & LOGGIA LLP - PRODUCTION DATABASE SCHEMA (MySQL 8+)
-- Character set: utf8mb4 | Collation: utf8mb4_unicode_ci
-- ============================================================

SET FOREIGN_KEY_CHECKS = 0;

-- 1. Administrators Table
CREATE TABLE IF NOT EXISTS `admins` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(150) NOT NULL,
  `email` VARCHAR(191) NOT NULL UNIQUE,
  `password_hash` VARCHAR(255) NOT NULL,
  `role` ENUM('partner', 'senior_accountant', 'staff') NOT NULL DEFAULT 'partner',
  `status` ENUM('active', 'suspended') NOT NULL DEFAULT 'active',
  `last_login_at` DATETIME NULL,
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX `idx_admin_email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 2. Inbound Leads & Gated Downloads
CREATE TABLE IF NOT EXISTS `leads` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(150) NOT NULL,
  `email` VARCHAR(191) NOT NULL,
  `phone` VARCHAR(50) NULL,
  `company` VARCHAR(200) NULL,
  `service_interest` VARCHAR(150) NULL,
  `source` VARCHAR(100) NOT NULL DEFAULT 'Contact Form',
  `resource_id` VARCHAR(100) NULL,
  `message` TEXT NULL,
  `utm_source` VARCHAR(100) NULL,
  `utm_medium` VARCHAR(100) NULL,
  `utm_campaign` VARCHAR(100) NULL,
  `status` ENUM('new', 'contacted', 'qualified', 'closed') NOT NULL DEFAULT 'new',
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  INDEX `idx_leads_created` (`created_at`),
  INDEX `idx_leads_email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 3. Prospective Client Onboarding Submissions
CREATE TABLE IF NOT EXISTS `onboarding_submissions` (
  `id` VARCHAR(50) PRIMARY KEY,
  `name` VARCHAR(150) NOT NULL,
  `email` VARCHAR(191) NOT NULL,
  `phone` VARCHAR(50) NOT NULL,
  `company` VARCHAR(200) NOT NULL,
  `website` VARCHAR(255) NULL,
  `preferred_contact` VARCHAR(50) NOT NULL DEFAULT 'Video Call',
  `business_type` VARCHAR(100) NOT NULL,
  `revenue_range` VARCHAR(100) NOT NULL,
  `current_software` VARCHAR(100) NOT NULL,
  `services_json` TEXT NOT NULL,
  `requirements` TEXT NULL,
  `utm_source` VARCHAR(100) NULL,
  `status` ENUM('new', 'under_review', 'engagement_sent', 'active_client', 'archived') NOT NULL DEFAULT 'new',
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  INDEX `idx_onboarding_created` (`created_at`),
  INDEX `idx_onboarding_company` (`company`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 4. Secure Uploaded Documents (Private Storage Outside Web Root)
CREATE TABLE IF NOT EXISTS `uploaded_files` (
  `id` VARCHAR(64) PRIMARY KEY,
  `submission_id` VARCHAR(50) NOT NULL,
  `original_name` VARCHAR(255) NOT NULL,
  `stored_filename` VARCHAR(255) NOT NULL,
  `file_size_bytes` BIGINT NOT NULL,
  `mime_type` VARCHAR(100) NOT NULL,
  `sha256_hash` VARCHAR(64) NOT NULL,
  `storage_path` VARCHAR(500) NOT NULL,
  `download_count` INT NOT NULL DEFAULT 0,
  `uploaded_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (`submission_id`) REFERENCES `onboarding_submissions`(`id`) ON DELETE CASCADE,
  INDEX `idx_uploaded_submission` (`submission_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 5. Blog Posts & Thought Leadership
CREATE TABLE IF NOT EXISTS `blog_posts` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `slug` VARCHAR(191) NOT NULL UNIQUE,
  `title` VARCHAR(255) NOT NULL,
  `excerpt` TEXT NOT NULL,
  `content` LONGTEXT NOT NULL,
  `category` VARCHAR(100) NOT NULL,
  `read_time` VARCHAR(50) NOT NULL DEFAULT '5 min read',
  `author` VARCHAR(100) NOT NULL DEFAULT 'Mark Puri, CPA, MBA',
  `status` ENUM('draft', 'review', 'published') NOT NULL DEFAULT 'published',
  `seo_meta_title` VARCHAR(191) NULL,
  `seo_meta_desc` VARCHAR(255) NULL,
  `published_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX `idx_blog_slug` (`slug`),
  INDEX `idx_blog_status` (`status`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 6. Downloadable Resources & Practice Toolkits
CREATE TABLE IF NOT EXISTS `resources` (
  `id` VARCHAR(100) PRIMARY KEY,
  `title` VARCHAR(255) NOT NULL,
  `category` VARCHAR(100) NOT NULL,
  `format` VARCHAR(50) NOT NULL,
  `pages_or_size` VARCHAR(50) NOT NULL,
  `description` TEXT NOT NULL,
  `is_gated` TINYINT(1) NOT NULL DEFAULT 1,
  `download_url` VARCHAR(255) NOT NULL,
  `downloads_count` INT NOT NULL DEFAULT 0,
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 7. Client Testimonials
CREATE TABLE IF NOT EXISTS `testimonials` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `author_name` VARCHAR(150) NOT NULL,
  `company_name` VARCHAR(200) NOT NULL,
  `role` VARCHAR(100) NOT NULL,
  `rating` TINYINT NOT NULL DEFAULT 5,
  `quote` TEXT NOT NULL,
  `verified` TINYINT(1) NOT NULL DEFAULT 1,
  `is_approved` TINYINT(1) NOT NULL DEFAULT 1,
  `display_order` INT NOT NULL DEFAULT 0,
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 8. Newsletter Subscribers (CASL Compliant)
CREATE TABLE IF NOT EXISTS `newsletter_subscribers` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `email` VARCHAR(191) NOT NULL UNIQUE,
  `consent_timestamp` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `status` ENUM('active', 'unsubscribed') NOT NULL DEFAULT 'active',
  `source_page` VARCHAR(100) NULL,
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  INDEX `idx_subscribers_email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 9. Stripe Payments & Retainers
CREATE TABLE IF NOT EXISTS `payments` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `transaction_ref` VARCHAR(100) NOT NULL UNIQUE,
  `client_email` VARCHAR(191) NOT NULL,
  `package_id` VARCHAR(100) NOT NULL,
  `amount_cents` INT NOT NULL,
  `currency` VARCHAR(10) NOT NULL DEFAULT 'cad',
  `status` ENUM('pending', 'succeeded', 'failed', 'refunded') NOT NULL DEFAULT 'pending',
  `stripe_session_id` VARCHAR(255) NULL,
  `stripe_payment_intent` VARCHAR(255) NULL,
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX `idx_payment_ref` (`transaction_ref`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 10. AI Visibility Audits
CREATE TABLE IF NOT EXISTS `ai_visibility_audits` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `platform` VARCHAR(100) NOT NULL,
  `test_date` DATE NOT NULL,
  `query_tested` VARCHAR(500) NOT NULL,
  `response_summary` TEXT NOT NULL,
  `sources_cited` TEXT NOT NULL,
  `accuracy_score` VARCHAR(50) NOT NULL,
  `status` VARCHAR(50) NOT NULL DEFAULT 'Verified',
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 11. Integration Settings
CREATE TABLE IF NOT EXISTS `integration_settings` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `setting_key` VARCHAR(100) NOT NULL UNIQUE,
  `setting_value` TEXT NOT NULL,
  `updated_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 12. Security Audit Logs
CREATE TABLE IF NOT EXISTS `audit_logs` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `admin_user` VARCHAR(150) NOT NULL,
  `action_code` VARCHAR(100) NOT NULL,
  `details` TEXT NULL,
  `client_ip` VARCHAR(50) NOT NULL,
  `user_agent` VARCHAR(255) NULL,
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  INDEX `idx_audit_created` (`created_at`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

SET FOREIGN_KEY_CHECKS = 1;
