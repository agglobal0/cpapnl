<?php

class RateLimitMiddleware {
    public static function check(string $key = 'general', int $maxAttempts = 15, int $decaySeconds = 300): void {
        $ip = $_SERVER['REMOTE_ADDR'] ?? '127.0.0.1';
        $cacheFile = sys_get_temp_dir() . '/cpapnl_rate_' . md5($ip . '_' . $key) . '.json';

        $data = ['count' => 0, 'first_attempt' => time()];
        if (file_exists($cacheFile)) {
            $content = @file_get_contents($cacheFile);
            if ($content) {
                $decoded = json_decode($content, true);
                if ($decoded && (time() - $decoded['first_attempt']) < $decaySeconds) {
                    $data = $decoded;
                }
            }
        }

        $data['count']++;
        @file_put_contents($cacheFile, json_encode($data));

        if ($data['count'] > $maxAttempts) {
            http_response_code(429);
            header('Retry-After: ' . $decaySeconds);
            echo json_encode([
                'error' => 'Too Many Requests',
                'message' => 'Rate limit exceeded. Please wait a few minutes before submitting again.'
            ]);
            exit;
        }
    }
}
