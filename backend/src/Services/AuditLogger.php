<?php

require_once __DIR__ . '/../../config/database.php';

class AuditLogger {
    public static function log(string $actionCode, ?string $details = null, string $user = 'system'): void {
        try {
            $pdo = Database::getConnection();
            $ip = $_SERVER['REMOTE_ADDR'] ?? '127.0.0.1';
            $ua = substr($_SERVER['HTTP_USER_AGENT'] ?? 'Unknown', 0, 255);

            $stmt = $pdo->prepare("
                INSERT INTO audit_logs (admin_user, action_code, details, client_ip, user_agent, created_at)
                VALUES (?, ?, ?, ?, ?, datetime('now'))
            ");
            $stmt->execute([$user, $actionCode, $details, $ip, $ua]);
        } catch (Exception $e) {
            // Fail open for logging so critical app paths continue
            error_log("AuditLogger Error: " . $e->getMessage());
        }
    }
}
