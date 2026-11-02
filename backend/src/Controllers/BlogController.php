<?php

require_once __DIR__ . '/../../config/database.php';
require_once __DIR__ . '/../Middleware/AuthMiddleware.php';
require_once __DIR__ . '/../Services/AuditLogger.php';

class BlogController {
    public function index(): void {
        $pdo = Database::getConnection();
        $stmt = $pdo->query("SELECT id, slug, title, excerpt, category, read_time, author, published_at, status FROM blog_posts WHERE status = 'published' ORDER BY published_at DESC");
        $posts = $stmt->fetchAll();

        echo json_encode($posts);
    }

    public function show(string $slug): void {
        $pdo = Database::getConnection();
        $stmt = $pdo->prepare("SELECT * FROM blog_posts WHERE slug = ? AND status = 'published' LIMIT 1");
        $stmt->execute([$slug]);
        $post = $stmt->fetch();

        if (!$post) {
            http_response_code(404);
            echo json_encode(['error' => 'Article not found.']);
            return;
        }

        echo json_encode($post);
    }

    public function adminSave(): void {
        $admin = AuthMiddleware::authenticate();
        $input = json_decode(file_get_contents('php://input'), true) ?? [];

        $id = $input['id'] ?? null;
        $slug = trim($input['slug'] ?? '');
        $title = trim($input['title'] ?? '');
        $excerpt = trim($input['excerpt'] ?? '');
        $content = trim($input['content'] ?? '');
        $category = trim($input['category'] ?? 'Corporate Tax');
        $status = trim($input['status'] ?? 'draft');
        $author = trim($input['author'] ?? 'Mark Puri, CPA, MBA');

        if (empty($title) || empty($slug)) {
            http_response_code(422);
            echo json_encode(['error' => 'Title and slug are required.']);
            return;
        }

        $pdo = Database::getConnection();
        if ($id) {
            $stmt = $pdo->prepare("
                UPDATE blog_posts 
                SET slug = ?, title = ?, excerpt = ?, content = ?, category = ?, status = ?, author = ?
                WHERE id = ?
            ");
            $stmt->execute([$slug, $title, $excerpt, $content, $category, $status, $author, $id]);
            AuditLogger::log('BLOG_POST_UPDATED', "Updated article: {$title}", $admin['email']);
        } else {
            $stmt = $pdo->prepare("
                INSERT INTO blog_posts (slug, title, excerpt, content, category, status, author, published_at, created_at)
                VALUES (?, ?, ?, ?, ?, ?, ?, datetime('now'), datetime('now'))
            ");
            $stmt->execute([$slug, $title, $excerpt, $content, $category, $status, $author]);
            AuditLogger::log('BLOG_POST_CREATED', "Created article: {$title}", $admin['email']);
        }

        echo json_encode(['success' => true]);
    }
}
