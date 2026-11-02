<?php

require_once __DIR__ . '/../src/Middleware/CorsMiddleware.php';
require_once __DIR__ . '/../src/Middleware/RateLimitMiddleware.php';
require_once __DIR__ . '/../src/Controllers/AuthController.php';
require_once __DIR__ . '/../src/Controllers/LeadController.php';
require_once __DIR__ . '/../src/Controllers/OnboardingController.php';
require_once __DIR__ . '/../src/Controllers/BlogController.php';
require_once __DIR__ . '/../src/Controllers/PaymentController.php';
require_once __DIR__ . '/../src/Controllers/AdminController.php';

// Handle CORS
CorsMiddleware::handle();

header('Content-Type: application/json; charset=UTF-8');

$uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$method = $_SERVER['REQUEST_METHOD'];

// Normalize URI prefix (strip /api if present)
$path = preg_replace('#^/api#', '', $uri);
if ($path === '' || $path === false) $path = '/';

try {
    // 1. Health check
    if ($path === '/health' && $method === 'GET') {
        echo json_encode([
            'status' => 'healthy',
            'business' => 'Puri & Loggia LLP',
            'version' => '2.0.0',
            'timestamp' => date('c'),
            'php_version' => PHP_VERSION,
        ]);
        exit;
    }

    // 2. Contact form submission
    if ($path === '/contact' && $method === 'POST') {
        RateLimitMiddleware::check('contact', 5, 300);
        $ctrl = new LeadController();
        $ctrl->submitContact();
        exit;
    }

    // 3. Gated lead-magnet download
    if ($path === '/leads' && $method === 'POST') {
        RateLimitMiddleware::check('leads', 10, 300);
        $ctrl = new LeadController();
        $ctrl->submitLead();
        exit;
    }

    // 4. Prospective client onboarding with file upload
    if ($path === '/onboarding' && $method === 'POST') {
        RateLimitMiddleware::check('onboarding', 5, 600);
        $ctrl = new OnboardingController();
        $ctrl->submit();
        exit;
    }

    // 5. Secure file download for authenticated admin
    if (preg_match('#^/onboarding/download/([a-zA-Z0-9_\-]+)$#', $path, $matches) && $method === 'GET') {
        $ctrl = new OnboardingController();
        $ctrl->downloadFile($matches[1]);
        exit;
    }

    // 6. Blog listing and detail
    if ($path === '/blog' && $method === 'GET') {
        $ctrl = new BlogController();
        $ctrl->index();
        exit;
    }

    if (preg_match('#^/blog/([a-zA-Z0-9_\-]+)$#', $path, $matches) && $method === 'GET') {
        $ctrl = new BlogController();
        $ctrl->show($matches[1]);
        exit;
    }

    if ($path === '/blog' && $method === 'POST') {
        $ctrl = new BlogController();
        $ctrl->adminSave();
        exit;
    }

    // 7. Newsletter subscription
    if ($path === '/newsletter/subscribe' && $method === 'POST') {
        RateLimitMiddleware::check('newsletter', 5, 300);
        $ctrl = new LeadController();
        $ctrl->subscribeNewsletter();
        exit;
    }

    // 8. Stripe payments & webhooks
    if ($path === '/payments/create-checkout' && $method === 'POST') {
        $ctrl = new PaymentController();
        $ctrl->createCheckout();
        exit;
    }

    if ($path === '/payments/webhook' && $method === 'POST') {
        $ctrl = new PaymentController();
        $ctrl->webhook();
        exit;
    }

    // 9. Admin Authentication
    if ($path === '/admin/login' && $method === 'POST') {
        RateLimitMiddleware::check('admin_login', 5, 300);
        $ctrl = new AuthController();
        $ctrl->login();
        exit;
    }

    // 10. Admin Protected Endpoints
    if ($path === '/admin/stats' && $method === 'GET') {
        $ctrl = new AdminController();
        $ctrl->stats();
        exit;
    }

    if ($path === '/admin/leads' && $method === 'GET') {
        $ctrl = new LeadController();
        $ctrl->adminList();
        exit;
    }

    if ($path === '/admin/onboarding' && $method === 'GET') {
        $ctrl = new OnboardingController();
        $ctrl->adminList();
        exit;
    }

    if ($path === '/admin/audit-logs' && $method === 'GET') {
        $ctrl = new AdminController();
        $ctrl->auditLogs();
        exit;
    }

    if ($path === '/admin/ai-audits' && $method === 'GET') {
        $ctrl = new AdminController();
        $ctrl->aiAudits();
        exit;
    }

    if ($path === '/admin/ai-audits' && $method === 'POST') {
        $ctrl = new AdminController();
        $ctrl->saveAiAudit();
        exit;
    }

    if ($path === '/admin/settings' && $method === 'GET') {
        $ctrl = new AdminController();
        $ctrl->getSettings();
        exit;
    }

    if ($path === '/admin/settings' && $method === 'POST') {
        $ctrl = new AdminController();
        $ctrl->saveSettings();
        exit;
    }

    // Route not found
    http_response_code(404);
    echo json_encode(['error' => 'API route not found', 'path' => $path]);

} catch (Exception $e) {
    http_response_code(500);
    echo json_encode([
        'error' => 'Internal Server Error',
        'message' => $e->getMessage()
    ]);
}
