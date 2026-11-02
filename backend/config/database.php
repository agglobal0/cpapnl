<?php

class Database {
    private static ?PDO $instance = null;

    public static function getConnection(): PDO {
        if (self::$instance !== null) {
            return self::$instance;
        }

        $connection = getenv('DB_CONNECTION') ?: 'sqlite';
        $host = getenv('DB_HOST') ?: '127.0.0.1';
        $port = getenv('DB_PORT') ?: '3306';
        $database = getenv('DB_DATABASE') ?: 'cpapnl_db';
        $username = getenv('DB_USERNAME') ?: 'root';
        $password = getenv('DB_PASSWORD') ?: '';

        try {
            if ($connection === 'mysql') {
                $dsn = "mysql:host={$host};port={$port};dbname={$database};charset=utf8mb4";
                self::$instance = new PDO($dsn, $username, $password, [
                    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
                    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
                    PDO::ATTR_EMULATE_PREPARES => false,
                ]);
            } else {
                // SQLite connection (used as fallback for local verification when MySQL service is off)
                $dbPath = __DIR__ . '/../database/app.sqlite';
                $isNew = !file_exists($dbPath);
                
                self::$instance = new PDO("sqlite:" . $dbPath, null, null, [
                    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
                    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
                ]);

                if ($isNew) {
                    self::initializeSqliteSchema(self::$instance);
                }
            }
        } catch (PDOException $e) {
            // Fallback to SQLite if MySQL fails to connect locally
            $dbPath = __DIR__ . '/../database/app.sqlite';
            $isNew = !file_exists($dbPath);
            self::$instance = new PDO("sqlite:" . $dbPath, null, null, [
                PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
                PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
            ]);
            if ($isNew) {
                self::initializeSqliteSchema(self::$instance);
            }
        }

        return self::$instance;
    }

    private static function initializeSqliteSchema(PDO $pdo): void {
        $pdo->exec("
            CREATE TABLE IF NOT EXISTS admins (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL,
                email TEXT NOT NULL UNIQUE,
                password_hash TEXT NOT NULL,
                role TEXT NOT NULL DEFAULT 'partner',
                status TEXT NOT NULL DEFAULT 'active',
                created_at DATETIME DEFAULT CURRENT_TIMESTAMP
            );

            CREATE TABLE IF NOT EXISTS leads (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL,
                email TEXT NOT NULL,
                phone TEXT,
                company TEXT,
                service_interest TEXT,
                source TEXT DEFAULT 'Contact Form',
                resource_id TEXT,
                message TEXT,
                utm_source TEXT,
                utm_medium TEXT,
                utm_campaign TEXT,
                status TEXT DEFAULT 'new',
                created_at DATETIME DEFAULT CURRENT_TIMESTAMP
            );

            CREATE TABLE IF NOT EXISTS onboarding_submissions (
                id TEXT PRIMARY KEY,
                name TEXT NOT NULL,
                email TEXT NOT NULL,
                phone TEXT NOT NULL,
                company TEXT NOT NULL,
                website TEXT,
                preferred_contact TEXT DEFAULT 'Video Call',
                business_type TEXT NOT NULL,
                revenue_range TEXT NOT NULL,
                current_software TEXT NOT NULL,
                services_json TEXT NOT NULL,
                requirements TEXT,
                utm_source TEXT,
                status TEXT DEFAULT 'new',
                created_at DATETIME DEFAULT CURRENT_TIMESTAMP
            );

            CREATE TABLE IF NOT EXISTS uploaded_files (
                id TEXT PRIMARY KEY,
                submission_id TEXT NOT NULL,
                original_name TEXT NOT NULL,
                stored_filename TEXT NOT NULL,
                file_size_bytes INTEGER NOT NULL,
                mime_type TEXT NOT NULL,
                sha256_hash TEXT NOT NULL,
                storage_path TEXT NOT NULL,
                download_count INTEGER DEFAULT 0,
                uploaded_at DATETIME DEFAULT CURRENT_TIMESTAMP
            );

            CREATE TABLE IF NOT EXISTS blog_posts (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                slug TEXT NOT NULL UNIQUE,
                title TEXT NOT NULL,
                excerpt TEXT NOT NULL,
                content TEXT NOT NULL,
                category TEXT NOT NULL,
                read_time TEXT DEFAULT '5 min read',
                author TEXT DEFAULT 'Mark Puri, CPA, MBA',
                status TEXT DEFAULT 'published',
                published_at DATETIME DEFAULT CURRENT_TIMESTAMP,
                created_at DATETIME DEFAULT CURRENT_TIMESTAMP
            );

            CREATE TABLE IF NOT EXISTS resources (
                id TEXT PRIMARY KEY,
                title TEXT NOT NULL,
                category TEXT NOT NULL,
                format TEXT NOT NULL,
                pages_or_size TEXT NOT NULL,
                description TEXT NOT NULL,
                is_gated INTEGER DEFAULT 1,
                download_url TEXT NOT NULL,
                created_at DATETIME DEFAULT CURRENT_TIMESTAMP
            );

            CREATE TABLE IF NOT EXISTS testimonials (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                author_name TEXT NOT NULL,
                company_name TEXT NOT NULL,
                role TEXT NOT NULL,
                rating INTEGER DEFAULT 5,
                quote TEXT NOT NULL,
                verified INTEGER DEFAULT 1,
                is_approved INTEGER DEFAULT 1,
                created_at DATETIME DEFAULT CURRENT_TIMESTAMP
            );

            CREATE TABLE IF NOT EXISTS newsletter_subscribers (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                email TEXT NOT NULL UNIQUE,
                consent_timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
                status TEXT DEFAULT 'active'
            );

            CREATE TABLE IF NOT EXISTS payments (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                transaction_ref TEXT NOT NULL UNIQUE,
                client_email TEXT NOT NULL,
                package_id TEXT NOT NULL,
                amount_cents INTEGER NOT NULL,
                currency TEXT DEFAULT 'cad',
                status TEXT DEFAULT 'pending',
                created_at DATETIME DEFAULT CURRENT_TIMESTAMP
            );

            CREATE TABLE IF NOT EXISTS ai_visibility_audits (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                platform TEXT NOT NULL,
                test_date DATE NOT NULL,
                query_tested TEXT NOT NULL,
                response_summary TEXT NOT NULL,
                sources_cited TEXT NOT NULL,
                accuracy_score TEXT NOT NULL,
                status TEXT DEFAULT 'Verified',
                created_at DATETIME DEFAULT CURRENT_TIMESTAMP
            );

            CREATE TABLE IF NOT EXISTS integration_settings (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                setting_key TEXT NOT NULL UNIQUE,
                setting_value TEXT NOT NULL
            );

            CREATE TABLE IF NOT EXISTS audit_logs (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                admin_user TEXT NOT NULL,
                action_code TEXT NOT NULL,
                details TEXT,
                client_ip TEXT NOT NULL,
                user_agent TEXT,
                created_at DATETIME DEFAULT CURRENT_TIMESTAMP
            );
        ");

        // Seed initial admin
        $adminHash = '$2y$10$KQKUv0Ltu10.M88bu0JCvuyucKdpQEDmAJODf21QRN7SR7fekZgAy';
        $pdo->exec("INSERT OR IGNORE INTO admins (name, email, password_hash, role) VALUES ('Mark Puri, CPA, MBA', 'admin@cpapnl.com', '{$adminHash}', 'partner')");

        // Seed initial blog posts
        $pdo->exec("INSERT OR IGNORE INTO blog_posts (slug, title, excerpt, content, category, read_time, author) VALUES 
            ('salary-vs-dividends-canada-owner-operators', 'Salary vs. Dividends in Canada: The Definitive Tax Optimization Strategy', 'Owner-operator guide to Canadian corporate salary vs dividend tax splits.', '# Salary vs. Dividends in Canada\n\nBalancing CPP, RRSP, and dividend tax integration.', 'Corporate Tax', '6 min read', 'Mark Puri, CPA, MBA'),
            ('cra-audit-triggers-canadian-small-business', 'CRA Audit Red Flags: 7 Critical Triggers Canadian Small Businesses Must Avoid', 'Avoid common CRA audit triggers for Canadian corporations.', '# CRA Audit Red Flags\n\nUnderstanding CRA algorithmic audit selection.', 'Tax Compliance', '8 min read', 'Helen Loggia, CPA')
        ");
    }
}
