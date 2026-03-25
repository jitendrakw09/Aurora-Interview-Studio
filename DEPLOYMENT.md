# Deployment Runbook

## Prerequisites

- Docker and Docker Compose installed
- Required secrets configured (Clerk, Stream, MongoDB, Inngest)

## Build and Run

```bash
cp backend/.env.example backend/.env
# update backend/.env values for target environment
# required for docker-compose local stack:
# - CLIENT_URL=http://localhost:3000
# - keep DB_URL as-is; docker-compose injects container-safe DB_URL automatically

docker compose up --build -d
```

## Smoke Checks

```bash
curl http://localhost:3000/health
```

Expected result includes:

- `status: ok`
- `environment`
- `uptimeSeconds`

## Logs and Rollback

```bash
docker compose logs -f app
```

To rollback, redeploy the previous image tag or previous git release branch.

## Post-Deploy Verification

- Frontend loads from server root
- Auth login flow works
- Creating and joining session works
- Problems list and single problem page load

## Common Deployment Targets

- Local Docker: `docker compose up --build -d`
- Single container hosts (Render/Railway/Fly): build with `npm run build`, start with `npm run start`
