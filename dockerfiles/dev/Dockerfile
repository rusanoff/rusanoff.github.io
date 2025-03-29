# frontend
FROM node:23-alpine AS frontend

RUN npm install -g pnpm

WORKDIR /app

COPY ../../.npmrc \
     ../../package.json \
     ../../pnpm-lock.yaml \
     ./

RUN pnpm install --frozen-lockfile --ignore-scripts

COPY \
    ../../.env \
    ../../404.html \
    ../../index.html \
    ../../postcss.config.cjs \
    ../../tsconfig.json \
    ../../vite.config.mts \
    ../../vite.HashPublicIcons.plugin.mts \
    ./

COPY ../../certs /app/certs/
COPY ../../public /app/public/
COPY ../../scripts /app/scripts/
COPY ../../src /app/src/
COPY ../../utils /app/utils/

EXPOSE 5173

CMD ["pnpm", "run", "dev"]
