<?php

require_once __DIR__ . '/../../config/database.php';
require_once __DIR__ . '/../Services/StorageService.php';
require_once __DIR__ . '/../Services/AuditLogger.php';
require_once __DIR__ . '/../Middleware/AuthMiddleware.php';

class OnboardingController {
    public function submit(): void {
        $name = trim($_POST['name'] ?? '');
        $email = trim($_POST['email'] ?? '');
        $phone = trim($_POST['phone'] ?? '');
        $company = trim($_POST['company'] ?? '');
        $website = trim($_POST['website'] ?? '');
        $preferredContact = trim($_POST['preferredContact'] ?? 'Video Call');
        $businessType = trim($_POST['businessType'] ?? 'CCPC');
        $revenueRange = trim($_POST['revenueRange'] ?? 'Under $500k');
        $currentSoftware = trim($_POST['currentSoftware'] ?? 'None');
        $services = trim($_POST['services'] ?? '[]');
        $requirements = trim($_POST['requirements'] ?? '');
        $utmSource = trim($_POST['utm_source'] ?? '');

        if (empty($name) || empty($email) || empty($company)) {
            http_response_code(422);
            echo json_encode(['error' => 'Please provide contact name, email, and company legal name.']);
            return;
        }

        $submissionId = 'ONB-' . strtoupper(bin2hex(random_bytes(3)));

        $pdo = Database::getConnection();
        $stmt = $pdo->prepare("
            INSERT INTO onboarding_submissions (
                id, name, email, phone, company, website, preferred_contact,
                business_type, revenue_range, current_software, services_json,
                requirements, utm_source, status, created_at
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'under_review', datetime('now'))
        ");
        $stmt->execute([
            $submissionId, $name, $email, $phone, $company, $website,
            $preferredContact, $businessType, $revenueRange, $currentSoftware,
            $services, $requirements, $utmSource
        ]);

        // Process uploaded files securely
        $storage = new StorageService();
        $storedCount = 0;

        if (isset($_FILES['documents']) && is_array($_FILES['documents']['name'])) {
            $fileCount = count($_FILES['documents']['name']);

            for ($i = 0; $i < $fileCount; $i++) {
                if ($_FILES['documents']['error'][$i] === UPLOAD_ERR_OK) {
                    $singleFile = [
                        'name' => $_FILES['documents']['name'][$i],
                        'type' => $_FILES['documents']['type'][$i],
                        'tmp_name' => $_FILES['documents']['tmp_name'][$i],
                        'error' => $_FILES['documents']['error'][$i],
                        'size' => $_FILES['documents']['size'][$i],
                    ];

                    try {
                        $meta = $storage->storeUploadedFile($singleFile, $submissionId);
                        
                        $fileStmt = $pdo->prepare("
                            INSERT INTO uploaded_files (
                                id, submission_id, original_name, stored_filename,
                                file_size_bytes, mime_type, sha256_hash, storage_path, uploaded_at
                            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, datetime('now'))
                        ");
                        $fileStmt->execute([
                            $meta['id'],
                            $meta['submission_id'],
                            $meta['original_name'],
                            $meta['stored_filename'],
                            $meta['file_size_bytes'],
                            $meta['mime_type'],
                            $meta['sha256_hash'],
                            $meta['storage_path']
                        ]);

                        $storedCount++;
                    } catch (Exception $e) {
                        error_log("Upload storage failed: " . $e->getMessage());
                    }
                }
            }
        }

        AuditLogger::log('ONBOARDING_SUBMITTED', "Onboarding packet {$submissionId} received from {$company} with {$storedCount} files");

        echo json_encode([
            'success' => true,
            'submissionId' => $submissionId,
            'filesStored' => $storedCount,
            'message' => 'Onboarding packet securely received. Our partners are reviewing your details.'
        ]);
    }

    public function adminList(): void {
        AuthMiddleware::authenticate();

        $pdo = Database::getConnection();
        $stmt = $pdo->query("SELECT * FROM onboarding_submissions ORDER BY created_at DESC LIMIT 50");
        $submissions = $stmt->fetchAll();

        // Attach file metadata to each submission
        foreach ($submissions as &$sub) {
            $fileStmt = $pdo->prepare("SELECT id, original_name, file_size_bytes, mime_type, uploaded_at FROM uploaded_files WHERE submission_id = ?");
            $fileStmt->execute([$sub['id']]);
            $sub['files'] = $fileStmt->fetchAll();
        }

        echo json_encode($submissions);
    }

    public function downloadFile(string $fileId): void {
        $admin = AuthMiddleware::authenticate();

        $pdo = Database::getConnection();
        $stmt = $pdo->prepare("SELECT * FROM uploaded_files WHERE id = ? LIMIT 1");
        $stmt->execute([$fileId]);
        $file = $stmt->fetch();

        if (!$file) {
            http_response_code(404);
            die("File record not found.");
        }

        // Increment download counter
        $upd = $pdo->prepare("UPDATE uploaded_files SET download_count = download_count + 1 WHERE id = ?");
        $upd->execute([$fileId]);

        AuditLogger::log('SECURE_FILE_DOWNLOAD', "Downloaded file {$file['original_name']} (ID: {$fileId})", $admin['email']);

        $storage = new StorageService();
        $storage->streamDownload($file['stored_filename'], $file['original_name'], $file['mime_type']);
    }
}
