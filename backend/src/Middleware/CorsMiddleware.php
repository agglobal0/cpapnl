<?php

class CorsMiddleware {
    public static function handle(): void {
        $allowedOrigin = $_SERVER['HTTP_ORIGIN'] ?? '*';
        
        header("Access-Control-Allow-Origin: {$allowedOrigin}");
        header("Access-Control-Allow-Credentials: true");
        header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
        header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With, X-CSRF-Token");

        if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
            http_response_code(200);
            exit;
        }
    }
}
