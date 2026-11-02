<?php

class StorageService {
    private string $storageDir;
    private array $allowedMimes = [
        'application/pdf',
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', // xlsx
        'application/vnd.ms-excel',
        'text/csv',
        'text/plain',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document', // docx
        'image/jpeg',
        'image/png'
    ];
    private array $allowedExtensions = ['pdf', 'xlsx', 'xls', 'csv', 'docx', 'doc', 'jpg', 'jpeg', 'png'];
    private int $maxBytes = 26214400; // 25 MB

    public function __construct() {
        $this->storageDir = __DIR__ . '/../../storage/private/uploads';
        if (!is_dir($this->storageDir)) {
            mkdir($this->storageDir, 0750, true);
        }
        // Place protective .htaccess inside private storage
        $htaccess = $this->storageDir . '/.htaccess';
        if (!file_exists($htaccess)) {
            file_put_contents($htaccess, "Deny from all\nOptions -Indexes\n");
        }
    }

    public function storeUploadedFile(array $fileInfo, string $submissionId): array {
        if ($fileInfo['error'] !== UPLOAD_ERR_OK) {
            throw new Exception("File upload error code: " . $fileInfo['error']);
        }

        if ($fileInfo['size'] > $this->maxBytes) {
            throw new Exception("File exceeds maximum allowed size of 25MB.");
        }

        $origName = basename($fileInfo['name']);
        $ext = strtolower(pathinfo($origName, PATHINFO_EXTENSION));

        if (!in_array($ext, $this->allowedExtensions, true)) {
            throw new Exception("Unsupported file extension: .{$ext}");
        }

        // Verify MIME type using fileinfo
        $finfo = finfo_open(FILEINFO_MIME_TYPE);
        $detectedMime = finfo_file($finfo, $fileInfo['tmp_name']);
        finfo_close($finfo);

        // Disallow dangerous files or executable signatures
        if (preg_match('/(php|exe|sh|bat|cmd|vbs|jar|phtml)/i', $ext)) {
            throw new Exception("Security violation: Executable files are strictly prohibited.");
        }

        // Calculate SHA-256 integrity hash
        $sha256 = hash_file('sha256', $fileInfo['tmp_name']);

        // Generate randomized secure storage filename
        $fileId = bin2hex(random_bytes(16));
        $storedFilename = $fileId . '_' . time() . '.' . $ext;
        $destination = $this->storageDir . '/' . $storedFilename;

        if (!move_uploaded_file($fileInfo['tmp_name'], $destination)) {
            throw new Exception("Failed to secure uploaded file into private storage.");
        }

        // Return metadata record
        return [
            'id' => $fileId,
            'submission_id' => $submissionId,
            'original_name' => $origName,
            'stored_filename' => $storedFilename,
            'file_size_bytes' => $fileInfo['size'],
            'mime_type' => $detectedMime,
            'sha256_hash' => $sha256,
            'storage_path' => $destination
        ];
    }

    public function streamDownload(string $storedFilename, string $originalName, string $mimeType): void {
        $path = $this->storageDir . '/' . basename($storedFilename);
        if (!file_exists($path)) {
            http_response_code(404);
            die("File not found in secure storage.");
        }

        header('Content-Description: File Transfer');
        header('Content-Type: ' . $mimeType);
        header('Content-Disposition: attachment; filename="' . addslashes($originalName) . '"');
        header('Expires: 0');
        header('Cache-Control: must-revalidate, post-check=0, pre-check=0');
        header('Pragma: public');
        header('Content-Length: ' . filesize($path));

        readfile($path);
        exit;
    }
}
