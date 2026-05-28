## Next.js (standalone) + pnpm multi-stage build
## - build: installs deps, builds Next
## - runtime: copies only standalone output
##
## Build:
##   docker build -t ruixing-taxpro-site .
## Run:
##   docker run --rm -p 3000:3000 ruixing-taxpro-site

FROM node:22-alpine AS base
WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED=1

FROM base AS deps
RUN corepack enable
COPY package.json ./
# If you have a pnpm lockfile, copy it for reproducible installs.
COPY pnpm-lock.yaml* ./
RUN if [ -f pnpm-lock.yaml ]; then \
      PNPM_CONFIG_DANGEROUSLY_ALLOW_ALL_BUILDS=true pnpm install --frozen-lockfile; \
    else \
      PNPM_CONFIG_DANGEROUSLY_ALLOW_ALL_BUILDS=true pnpm install; \
    fi

FROM base AS builder
RUN corepack enable
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN pnpm run build

FROM node:22-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3001
ENV HOSTNAME=0.0.0.0

RUN addgroup -S nodejs && adduser -S nextjs -G nodejs

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

USER nextjs
EXPOSE 3001
CMD ["node", "server.js"]
