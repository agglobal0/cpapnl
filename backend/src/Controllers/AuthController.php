<?php

require_once __DIR__ . '/../../config/database.php';
require_once __DIR__ . '/../Services/AuditLogger.php';

class AuthController {
    public function login(): void {
        $input = json_decode(file_get_contents('php://input'), true) ?? [];
        $email = trim($input['email'] ?? '');
        $password = trim($input['password'] ?? '');

        if (empty($email) || empty($password)) {
            http_response_code(422);
            echo json_encode(['error' => 'Email and password are required.']);
            return;
        }

        $pdo = Database::getConnection();
        $stmt = $pdo->prepare("SELECT * FROM admins WHERE email = ? AND status = 'active' LIMIT 1");
        $stmt->execute([$email]);
        $admin = $stmt->fetch();

        if (!$admin || !password_verify($password, $admin['password_hash'])) {
            AuditLogger::log('FAILED_ADMIN_LOGIN', "Failed attempt for email: {$email}");
            http_response_code(401);
            echo json_encode(['error' => 'Invalid email or password credentials.']);
            return;
        }

        // Generate session token
        $token = bin2hex(random_bytes(32));

        AuditLogger::log('ADMIN_LOGIN_SUCCESS', "Admin logged in: {$admin['name']}", $admin['email']);

        echo json_encode([
            'success' => true,
            'token' => $token,
            'user' => [
                'name' => $admin['name'],
                'email' => $admin['email'],
                'role' => $admin['role']
            ]
        ]);
    }
}
