FROM php:8.2-cli-alpine

# Install SQLite dependencies and PDO extensions
RUN apk add --no-cache sqlite-dev \
    && docker-php-ext-install pdo pdo_sqlite

WORKDIR /app

# Copy backend code (includes public/ with full website and API)
COPY . /app

# Ensure storage & database directories exist with write permissions
RUN mkdir -p /app/storage/private/uploads /app/database \
    && chmod -R 777 /app/storage /app/database

ENV PORT=10000
EXPOSE 10000

# Start PHP built-in web server with router script
CMD ["sh", "-c", "php -S 0.0.0.0:${PORT:-10000} -t public public/index.php"]
