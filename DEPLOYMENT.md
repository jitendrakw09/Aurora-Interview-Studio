# Deployment Runbook

## Prerequisites

- Docker and Docker Compose installed
- Required secrets configured (Clerk, Stream, MongoDB, Inngest)

## Build and Run

```bash
cp backend/.env.example backend/.env
# update backend/.env values for target environment

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
