# Stage 1: Build frontend
FROM node:23-alpine AS builder

RUN npm install -g pnpm

WORKDIR /app

COPY .npmrc \
     package.json \
     pnpm-lock.yaml \
     ./

RUN pnpm install --frozen-lockfile --ignore-scripts

COPY \
    .env \
    404.html \
    index.html \
    postcss.config.cjs \
    tsconfig.json \
    vite.config.mts \
    vite.HashPublicIcons.plugin.mts \
    ./

COPY certs /app/certs/
COPY public /app/public/
COPY scripts /app/scripts/
COPY src /app/src/
COPY utils /app/utils/

RUN pnpm build

# Stage 2: Serve with Nginx
FROM nginx:stable-alpine

# Копируем собранные файлы из предыдущего этапа
COPY --from=builder /app/dist /usr/share/nginx/html

# Копируем настройки nginx
COPY dockerfiles/prod/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"] 