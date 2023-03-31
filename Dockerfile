FROM node:alpine AS deps
WORKDIR /usr/src/app
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
RUN \
  if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm ci; \
  else echo "Lockfile not found." && exit 1; \
  fi

FROM node:alpine AS builder
WORKDIR /usr/src/app
COPY --from=deps /usr/src/app/node_modules ./node_modules
COPY . .
RUN yarn build
RUN npm prune --production
RUN wget https://gobinaries.com/tj/node-prune --output-document - | /bin/sh && \
    node-prune

FROM node:alpine as runner
WORKDIR /usr/src/app
COPY --from=builder /usr/src/app/package*.json ./
COPY --from=builder /usr/src/app/yarn.lock ./
COPY --from=builder /usr/src/app/dist/ ./dist/
COPY --from=builder /usr/src/app/node_modules/ ./node_modules/
EXPOSE 3000
CMD ["node", "dist/main.js"]