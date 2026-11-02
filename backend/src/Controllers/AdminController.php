<?php

require_once __DIR__ . '/../../config/database.php';
require_once __DIR__ . '/../Middleware/AuthMiddleware.php';
require_once __DIR__ . '/../Services/AuditLogger.php';

class AdminController {
    public function stats(): void {
        AuthMiddleware::authenticate();
        $pdo = Database::getConnection();

        $leadsCount = (int)$pdo->query("SELECT COUNT(*) FROM leads")->fetchColumn();
        $onboardingCount = (int)$pdo->query("SELECT COUNT(*) FROM onboarding_submissions")->fetchColumn();
        $postsCount = (int)$pdo->query("SELECT COUNT(*) FROM blog_posts WHERE status = 'published'")->fetchColumn();
        $filesCount = (int)$pdo->query("SELECT COUNT(*) FROM uploaded_files")->fetchColumn();

        echo json_encode([
            'totalLeads' => $leadsCount,
            'newOnboardings' => $onboardingCount,
            'publishedArticles' => $postsCount,
            'pendingDocuments' => $filesCount
        ]);
    }

    public function auditLogs(): void {
        AuthMiddleware::authenticate();
        $pdo = Database::getConnection();
        $stmt = $pdo->query("SELECT * FROM audit_logs ORDER BY id DESC LIMIT 100");
        $logs = $stmt->fetchAll();

        echo json_encode($logs);
    }

    public function aiAudits(): void {
        AuthMiddleware::authenticate();
        $pdo = Database::getConnection();
        $stmt = $pdo->query("SELECT * FROM ai_visibility_audits ORDER BY id DESC");
        $audits = $stmt->fetchAll();

        echo json_encode($audits);
    }

    public function saveAiAudit(): void {
        $admin = AuthMiddleware::authenticate();
        $input = json_decode(file_get_contents('php://input'), true) ?? [];

        $platform = trim($input['platform'] ?? 'ChatGPT');
        $testDate = trim($input['testDate'] ?? date('Y-m-d'));
        $query = trim($input['query'] ?? '');
        $summary = trim($input['summary'] ?? '');
        $sources = trim($input['sources'] ?? '');
        $score = trim($input['score'] ?? '90% Accuracy');

        $pdo = Database::getConnection();
        $stmt = $pdo->prepare("
            INSERT INTO ai_visibility_audits (platform, test_date, query_tested, response_summary, sources_cited, accuracy_score, status, created_at)
            VALUES (?, ?, ?, ?, ?, ?, 'Verified', datetime('now'))
        ");
        $stmt->execute([$platform, $testDate, $query, $summary, $sources, $score]);

        AuditLogger::log('AI_AUDIT_RECORDED', "Recorded AI visibility test for {$platform}", $admin['email']);

        echo json_encode(['success' => true]);
    }

    public function getSettings(): void {
        $pdo = Database::getConnection();
        $stmt = $pdo->query("SELECT setting_key, setting_value FROM integration_settings");
        $rows = $stmt->fetchAll();

        $settings = [];
        foreach ($rows as $row) {
            $settings[$row['setting_key']] = $row['setting_value'];
        }

        echo json_encode([
            'calendlyUrl' => $settings['calendly_url'] ?? 'https://calendly.com/cpapnl/discovery-consultation',
            'ga4MeasurementId' => $settings['ga4_measurement_id'] ?? 'G-3HQYNTYQZH',
            'adminNotificationEmail' => $settings['admin_notification_email'] ?? 'support@cpapnl.com',
            'stripeMode' => $settings['stripe_mode'] ?? 'test',
        ]);
    }

    public function saveSettings(): void {
        $admin = AuthMiddleware::authenticate();
        $input = json_decode(file_get_contents('php://input'), true) ?? [];

        $pdo = Database::getConnection();
        foreach ($input as $key => $val) {
            $stmt = $pdo->prepare("
                INSERT INTO integration_settings (setting_key, setting_value) 
                VALUES (?, ?)
                ON CONFLICT(setting_key) DO UPDATE SET setting_value = excluded.setting_value
            ");
            $stmt->execute([$key, (string)$val]);
        }

        AuditLogger::log('SETTINGS_MUTATED', "Updated integration settings", $admin['email']);

        echo json_encode(['success' => true]);
    }
}
