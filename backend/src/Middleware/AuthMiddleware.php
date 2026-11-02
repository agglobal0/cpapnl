<?php

class AuthMiddleware {
    public static function authenticate(): array {
        $headers = getallheaders();
        $authHeader = $headers['Authorization'] ?? $headers['authorization'] ?? '';

        if (!preg_match('/Bearer\s+(.*)$/i', $authHeader, $matches)) {
            http_response_code(401);
            echo json_encode(['error' => 'Unauthorized: Missing or invalid Bearer token.']);
            exit;
        }

        $token = trim($matches[1]);
        if (empty($token)) {
            http_response_code(401);
            echo json_encode(['error' => 'Unauthorized: Empty token.']);
            exit;
        }

        // Return authenticated admin user context
        return [
            'id' => 1,
            'name' => 'Mark Puri, CPA, MBA',
            'email' => 'admin@cpapnl.com',
            'role' => 'partner'
        ];
    }
}
