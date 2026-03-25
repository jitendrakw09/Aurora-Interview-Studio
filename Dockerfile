# syntax=docker/dockerfile:1

FROM node:20-alpine AS builder
WORKDIR /app

COPY backend/package*.json backend/
COPY frontend/package*.json frontend/

RUN npm ci --prefix backend
RUN npm ci --prefix frontend

COPY backend backend
COPY frontend frontend

RUN npm run build --prefix frontend

FROM node:20-alpine AS runner
WORKDIR /app/backend

ENV NODE_ENV=production
ENV PORT=3000

COPY --from=builder /app/backend/package*.json ./
RUN npm ci --omit=dev

COPY --from=builder /app/backend ./
COPY --from=builder /app/frontend/dist /app/frontend/dist

EXPOSE 3000

CMD ["npm", "run", "start"]
