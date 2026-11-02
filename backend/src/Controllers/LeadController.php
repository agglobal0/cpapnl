<?php

require_once __DIR__ . '/../../config/database.php';
require_once __DIR__ . '/../Services/AuditLogger.php';

class LeadController {
    public function submitContact(): void {
        $input = json_decode(file_get_contents('php://input'), true) ?? [];

        $name = trim($input['name'] ?? '');
        $email = trim($input['email'] ?? '');
        $phone = trim($input['phone'] ?? '');
        $company = trim($input['company'] ?? '');
        $service = trim($input['service'] ?? 'General Inquiry');
        $message = trim($input['message'] ?? '');
        $utmSource = trim($input['utm_source'] ?? '');

        if (empty($name) || empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
            http_response_code(422);
            echo json_encode(['error' => 'Please provide a valid name and email address.']);
            return;
        }

        $pdo = Database::getConnection();
        $stmt = $pdo->prepare("
            INSERT INTO leads (name, email, phone, company, service_interest, source, message, utm_source, created_at)
            VALUES (?, ?, ?, ?, ?, 'Contact Form', ?, ?, datetime('now'))
        ");
        $stmt->execute([$name, $email, $phone, $company, $service, $message, $utmSource]);

        AuditLogger::log('CONTACT_FORM_SUBMISSION', "Inquiry from {$name} ({$company})");

        echo json_encode([
            'success' => true,
            'message' => 'Thank you for contacting Puri & Loggia LLP. Our partners will reply within 1 business day.'
        ]);
    }

    public function submitLead(): void {
        $input = json_decode(file_get_contents('php://input'), true) ?? [];

        $name = trim($input['name'] ?? '');
        $email = trim($input['email'] ?? '');
        $resourceId = trim($input['resourceId'] ?? 'general_download');
        $resourceTitle = trim($input['resourceTitle'] ?? 'Resource Download');
        $utmSource = trim($input['utm_source'] ?? '');

        if (empty($name) || empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
            http_response_code(422);
            echo json_encode(['error' => 'Please provide a valid name and business email.']);
            return;
        }

        $pdo = Database::getConnection();
        $stmt = $pdo->prepare("
            INSERT INTO leads (name, email, service_interest, source, resource_id, utm_source, created_at)
            VALUES (?, ?, ?, 'Resource Download', ?, ?, datetime('now'))
        ");
        $stmt->execute([$name, $email, $resourceTitle, $resourceId, $utmSource]);

        AuditLogger::log('LEAD_MAGNET_DOWNLOAD', "Lead captured for resource: {$resourceTitle} ({$email})");

        echo json_encode([
            'success' => true,
            'downloadUrl' => "#ready-{$resourceId}"
        ]);
    }

    public function subscribeNewsletter(): void {
        $input = json_decode(file_get_contents('php://input'), true) ?? [];
        $email = trim($input['email'] ?? '');

        if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
            http_response_code(422);
            echo json_encode(['error' => 'Please provide a valid email address.']);
            return;
        }

        $pdo = Database::getConnection();
        try {
            $stmt = $pdo->prepare("INSERT INTO newsletter_subscribers (email, consent_timestamp, status) VALUES (?, datetime('now'), 'active')");
            $stmt->execute([$email]);
        } catch (Exception $e) {
            // Duplicate subscriber is ok
        }

        AuditLogger::log('NEWSLETTER_SUBSCRIBE', "Newsletter subscriber: {$email}");

        echo json_encode(['success' => true]);
    }

    public function adminList(): void {
        $pdo = Database::getConnection();
        $stmt = $pdo->query("SELECT * FROM leads ORDER BY id DESC LIMIT 100");
        $leads = $stmt->fetchAll();

        echo json_encode($leads);
    }
}
